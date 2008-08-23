/***************************************************************************
    qgsmaptoolzoom.cpp  -  map tool for zooming
    ----------------------
    begin                : January 2006
    copyright            : (C) 2006 by Martin Dobias
    email                : wonder.sk at gmail dot com
 ***************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 ***************************************************************************/
/* $Id$ */

#include "qgsmaptoolzoom.h"
#include "qgsmapcanvas.h"
#include "qgsmaptopixel.h"
#include "qgscursors.h"

#include <QMouseEvent>
#include <QRubberBand>
#include <QRect>
#include <QCursor>
#include <QPixmap>


QgsMapToolZoom::QgsMapToolZoom(QgsMapCanvas* canvas, bool zoomOut)
  : QgsMapTool(canvas), mZoomOut(zoomOut), mDragging(false)
{
  // set the cursor
  QPixmap myZoomQPixmap = QPixmap((const char **) (zoomOut ? zoom_out : zoom_in));  
  mCursor = QCursor(myZoomQPixmap, 7, 7);
}


void QgsMapToolZoom::canvasMoveEvent(QMouseEvent * e)
{
  if ( ! (e->buttons() & Qt::LeftButton) )
    return;

  if (!mDragging)
  {
    mDragging = true;
    mRubberBand = new QRubberBand(QRubberBand::Rectangle, mCanvas);
    mZoomRect.setTopLeft(e->pos());
  }
  mZoomRect.setBottomRight(e->pos());
  mRubberBand->setGeometry(mZoomRect.normalized());
  mRubberBand->show();
}


void QgsMapToolZoom::canvasPressEvent(QMouseEvent * e)
{
  if (e->button() != Qt::LeftButton)
    return;
  
  mZoomRect.setRect(0, 0, 0, 0);
}


void QgsMapToolZoom::canvasReleaseEvent(QMouseEvent * e)
{
  if (e->button() != Qt::LeftButton)
    return;
  
  if (mDragging)
  {
    mDragging = false;
    delete mRubberBand;
    mRubberBand = 0;
    
    // store the rectangle
    mZoomRect.setRight(e->pos().x());
    mZoomRect.setBottom(e->pos().y());
    
    const QgsMapToPixel* coordinateTransform = mCanvas->getCoordinateTransform();
    
    // set the extent to the zoomBox  
    QgsPoint ll = coordinateTransform->toMapCoordinates(mZoomRect.left(), mZoomRect.bottom());
    QgsPoint ur = coordinateTransform->toMapCoordinates(mZoomRect.right(), mZoomRect.top());       
        
    QgsRect r;
    r.setXMinimum(ll.x());
    r.setYmin(ll.y());
    r.setXMaximum(ur.x());
    r.setYmax(ur.y());
    r.normalize();
    
    // prevent zooming to an empty extent
    if (r.width() == 0 || r.height() == 0)
    {
      return;
    }
    
    if (mZoomOut)
    {
      QgsPoint cer = r.center();
      QgsRect extent = mCanvas->extent();
    
      double sf;
      if (mZoomRect.width() > mZoomRect.height())
      {
        sf = extent.width() / r.width();
      }
      else
      {
        sf = extent.height() / r.height();
      }
      r.expand(sf);
            
  #ifdef QGISDEBUG
      std::cout << "Extent scaled by " << sf << " to " << r << std::endl;
      std::cout << "Center of currentExtent after scaling is " << r.center() << std::endl;
  #endif
  
    }
  
    mCanvas->setExtent(r);
    mCanvas->refresh();
  }
  else // not dragging
  {
    // change to zoom in/out by the default multiple
    mCanvas->zoomWithCenter(e->x(), e->y(), !mZoomOut);
  }
}
