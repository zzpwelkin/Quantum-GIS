/***************************************************************************
                          qgslinesymbol.h  -  description
                             -------------------
    begin                : Sat Jun 22 2002
    copyright            : (C) 2002 by Gary E.Sherman
    email                : sherman@mrcc.com
 ***************************************************************************/

/***************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 ***************************************************************************/

#ifndef QGSLINESYMBOL_H
#define QGSLINESYMBOL_H

class QString;

/*! \class QgsLineSymbol
 * \brief Symbol for displaying lines
 */
class QgsLineSymbol : public QgsSymbol{
 public:
    //! Constructor
    QgsLineSymbol();
    //! Destructor
    ~QgsLineSymbol();
          /*! Comparison operator
      @return True if symbols are equal
    */
    bool operator==(const QgsLineSymbol &r1);
    /*! Assignment operator
     * @param r1 QgsPolygonSymbol to assign from
     */
    QgsLineSymbol & operator=(const QgsLineSymbol &r1);
 private:
  
};
#endif // QGSLINESYMBOL_H
