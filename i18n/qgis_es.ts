<!DOCTYPE TS>
<TS>
  <context>
    <name>Dialog</name>
    <message>
      <source>QGIS Plugin Installer</source>
      <translation>Instalador de complementos de QGIS</translation>
    </message>
    <message>
      <source>Name of plugin to install</source>
      <translation>Nombre del complemento a instalar</translation>
    </message>
    <message>
      <source>Get List</source>
      <translation>Obtener lista</translation>
    </message>
    <message>
      <source>Done</source>
      <translation>Hecho</translation>
    </message>
    <message>
      <source>Install Plugin</source>
      <translation>Instalar complemento</translation>
    </message>
    <message>
      <source>The plugin will be installed to ~/.qgis/python/plugins</source>
      <translation>El complemento se instalará en ~/.qgis/python/plugins</translation>
    </message>
    <message>
      <source>Name</source>
      <translation>Nombre</translation>
    </message>
    <message>
      <source>Version</source>
      <translation>Versión</translation>
    </message>
    <message>
      <source>Description</source>
      <translation>Descripción</translation>
    </message>
    <message>
      <source>Author</source>
      <translation>Autor</translation>
    </message>
    <message>
      <source>Select repository, retrieve the list of available plugins, select one and install it</source>
      <translation>Seleccionar repositorio, obtener la lista de complementos disponibles, seleccionar uno e instalarlo</translation>
    </message>
    <message>
      <source>Repository</source>
      <translation>Repositorio</translation>
    </message>
    <message>
      <source>Active repository:</source>
      <translation>Repositorio activo</translation>
    </message>
    <message>
      <source>Add</source>
      <translation>Añadir</translation>
    </message>
    <message>
      <source>Edit</source>
      <translation>Editar</translation>
    </message>
    <message>
      <source>Delete</source>
      <translation>Borrar</translation>
    </message>
  </context>
  <context>
    <name>Gui</name>
    <message>
      <source>Welcome to your automatically generated plugin!</source>
      <translation>Bienvenido a su complemento generado automáticamente</translation>
    </message>
    <message>
      <source>This is just a starting point. You now need to modify the code to make it do something useful....read on for a more information to get yourself started.</source>
      <translation>Este es sólo un punto de inicio. Ahora necesita modificar el código para que haga algo útil... continúe leyendo para más información sobre cómo empezar.</translation>
    </message>
    <message>
      <source>Documentation:</source>
      <translation>Documentación:</translation>
    </message>
    <message>
      <source>You really need to read the QGIS API Documentation now at:</source>
      <translation>Ahora necesita leer la documentación del API de QGIS en:</translation>
    </message>
    <message>
      <source>In particular look at the following classes:</source>
      <translation>En particular mire las siguientes clases:</translation>
    </message>
    <message>
      <source>QgsPlugin is an ABC that defines required behaviour your plugin must provide. See below for more details.</source>
      <translation>QgsPlugin es una ABC que define los comportamientos requeridos que su complemento debe proporcionar. Vea más abajo para más detalles.</translation>
    </message>
    <message>
      <source>What are all the files in my generated plugin directory for?</source>
      <translation>¿Para qué son todos los archivos generados en mi directorio de complementos?</translation>
    </message>
    <message>
      <source>This is the generated CMake file that builds the plugin. You should add you application specific dependencies and source files to this file.</source>
      <translation>Este es el archivo CMake que construye el complemento. Debería añadir las dependencias específicas de su aplicación y los archivos fuente a este archivo.</translation>
    </message>
    <message>
      <source>This is the class that provides the 'glue' between your custom application logic and the QGIS application. You will see that a number of methods are already implemented for you - including some examples of how to add a raster or vector layer to the main application map canvas. This class is a concrete instance of the QgisPlugin interface which defines required behaviour for a plugin. In particular, a plugin has a number of static methods and members so that the QgsPluginManager and plugin loader logic can identify each plugin, create an appropriate menu entry for it etc. Note there is nothing stopping you creating multiple toolbar icons and menu entries for a single plugin. By default though a single menu entry and toolbar button is created and its pre-configured to call the run() method in this class when selected. This default implementation provided for you by the plugin builder is well documented, so please refer to the code for further advice.</source>
      <translation>Esta el la clase que proporciona el &quot;pegamento&quot; entre la lógica de su aplicación personal y la aplicación QGIS. Verá que ya hay implementados algunos métodos para usted - incluyendo algunos ejemplos de cómo añadir una capa ráster o vectorial a la vista principal del mapa de la aplicación. Esta clase es una instancia concreta de la interfaz QgisPlugin que define el comportamiento requerido para un complemento. En particular, un complemento tiene un número de métodos estáticos y miembros de forma que el QgsPluginManager y la lógica del cargador de complementos puedan identificar cada complemento, crear una entrada de menú apropiada para él, etc. Tenga en cuenta que no hay nada que le pare creando múltiples iconos de barras de herramientas y entradas de menú para un solo complemento. Sin embargo, de forma predeterminada sólo se crea una entrada de menú y un botón de barra de herramientas y está preconfigurado para llamar al método run() de esa clase cuando se selecciona. Esta implementación predeterminada proporcionada por el constructor de complementos está bien documentada, así que acuda al código para más información.</translation>
    </message>
    <message>
      <source>This is a Qt designer 'ui' file. It defines the look of the default plugin dialog without implementing any application logic. You can modify this form to suite your needs or completely remove it if your plugin does not need to display a user form (e.g. for custom MapTools).</source>
      <translation>Este es un archivo &quot;ui&quot; del diseñador de Qt. Define el aspecto del diálogo predeterminadado del complemento sin implementar ninguna lógica de la aplicación. Puede modificar este formulario para adaptarlo a sus necesidades o eliminarlo por completo si su complemento no necesita mostrar un formulario de usuario (por ej. para personalizar MapTools).</translation>
    </message>
    <message>
      <source>This is the concrete class where application logic for the above mentioned dialog should go. The world is your oyster here really....</source>
      <translation>Esta es la clase concreta donde debe ir la lógica de la aplicación para el diálogo mencionado anteriormente. Aquí es donde está el quiz de la cuestión...</translation>
    </message>
    <message>
      <source>This is the Qt4 resources file for your plugin. The Makefile generated for your plugin is all set up to compile the resource file so all you need to do is add your additional icons etc using the simple xml file format. Note the namespace used for all your resources e.g. (':/Homann/'). It is important to use this prefix for all your resources. We suggest you include any other images and run time data in this resurce file too.</source>
      <translation>Este es el archivo de recursos de Qt4 para su complemento. El Makefile generado para su complemento está configurado por completo para compilar el archivo de recursos, así que todo lo que tiene que hacer es añadir sus iconos adicionales, etc. usando el sencillo formato de archivo xml. Fíjese en el namespace usado para todos sus recursos, ej. (&quot;:/[pluginname]/&quot;). Es importante usar este prefijo para todos sus recursos. Le sugerimos que incluya cualquier otra imagen y datos de tiempo de ejecución también en este archivo de recurso.</translation>
    </message>
    <message>
      <source>This is the icon that will be used for your plugin menu entry and toolbar icon. Simply replace this icon with your own icon to make your plugin disctinctive from the rest.</source>
      <translation>Este es el icono que se usará para la entrada de menú e icono de barra de herramientas de su complemento. Simplemente sustituya este icono con el suyo para distinguirlo del resto.</translation>
    </message>
    <message>
      <source>This file contains the documentation you are reading now!</source>
      <translation>¡Este archivo contiene la documentación que está leyendo ahora!</translation>
    </message>
    <message>
      <source>Getting developer help:</source>
      <translation>Obtener ayuda de los desarrolladores:</translation>
    </message>
    <message>
      <source>For Questions and Comments regarding the plugin builder template and creating your features in QGIS using the plugin interface please contact us via:</source>
      <translation>Para preguntas y comentarios sobre la plantilla del constructor de complementos y la creación de sus elementos en QGIS usando la interfaz de complementos, por favor póngase en contacto con nosotros via:</translation>
    </message>
    <message>
      <source>&lt;li> the QGIS developers mailing list, or &lt;/li>&lt;li> IRC (#qgis on freenode.net)&lt;/li></source>
      <translation>&lt;li> la lista de correo de desarrolladores de QGIS o&lt;/li>&lt;li> IRC (#qgis en freenode.net)&lt;/li></translation>
    </message>
    <message>
      <source>QGIS is distributed under the Gnu Public License. If you create a useful plugin please consider contributing it back to the community.</source>
      <translation>QGIS se distribuye bajo la Licencia Pública Gnu (GPL). Si crea un complemento útil, por favor valore ponerlo a su vez a disposición de la comunidad.</translation>
    </message>
    <message>
      <source>Have fun and thank you for choosing QGIS.</source>
      <translation>Diviértase y gracias por elegir QGIS.</translation>
    </message>
  </context>
  <context>
    <name>MapCoordsDialogBase</name>
    <message>
      <source>Enter map coordinates</source>
      <translation>Introducir coordenadas de mapa</translation>
    </message>
    <message>
      <source>X:</source>
      <translation>X:</translation>
    </message>
    <message>
      <source>Y:</source>
      <translation>Y:</translation>
    </message>
    <message>
      <source>&amp;OK</source>
      <translation>&amp;Aceptar</translation>
    </message>
    <message>
      <source>&amp;Cancel</source>
      <translation>&amp;Cancelar</translation>
    </message>
    <message>
      <source>Enter X and Y coordinates which correspond with the selected point on the image. Alternatively, click the button with icon of a pencil and then click a corresponding point on map canvas of QGIS to fill in coordinates of that point.</source>
      <translation>Introducir las coordenadas X e Y que correspondan con el punto seleccionado en la imagen. De forma alternativa, seleccionar el botón con el icono de un lápiz y luego hacer clic en un punto correspondiente sobre la vista del mapa de QGIS para rellenar las coordenadas de ese punto.</translation>
    </message>
    <message>
      <source> from map canvas</source>
      <translation> de la vista del mapa</translation>
    </message>
  </context>
  <context>
    <name>QFileDialog</name>
    <message>
      <source>Save experiment report to portable document format (.pdf)</source>
      <translation>Guardar informe del experimento a formato de documento portátil (.pdf)</translation>
    </message>
    <message>
      <source>Load layer properties from style file (.qml)</source>
      <translation>Cargar propiedades de la capa de archivo de estilo (.qml)</translation>
    </message>
    <message>
      <source>Save layer properties as style file (.qml)</source>
      <translation>Guardar propiedades de la capa como archivo de estilo (.qml)</translation>
    </message>
  </context>
  <context>
    <name>QObject</name>
    <message>
      <source>Caught a coordinate system exception while trying to transform a point. Unable to calculate line length.</source>
      <translation>Capturada una excepción del sistema de coordenadas mientras se intentaba transformar un punto.No se puede calcular la longitud de la línea.</translation>
    </message>
    <message>
      <source>Caught a coordinate system exception while trying to transform a point. Unable to calculate polygon area.</source>
      <translation>Capturada una excepción del sistema de coordenadas mientras se intentaba transformar un punto.No se puede calcular el área del polígono.</translation>
    </message>
    <message>
      <source>Label</source>
      <translation>Etiqueta</translation>
    </message>
    <message>
      <source>No Data Provider Plugins</source>
      <comment>No QGIS data provider plugins found in:</comment>
      <translation>No hay complementos de proveedores de datos</translation>
    </message>
    <message>
      <source>No vector layers can be loaded. Check your QGIS installation</source>
      <translation>No se pueden cargar capas vectoriales. Compruebe su instalación de QGIS.</translation>
    </message>
    <message>
      <source>No Data Providers</source>
      <translation>No hay proveedores de datos</translation>
    </message>
    <message>
      <source>No data provider plugins are available. No vector layers can be loaded</source>
      <translation>No hay complementos de proveedores de datos disponibles. No se pueden cargar capas vectoriales.</translation>
    </message>
    <message>
      <source>Referenced column wasn't found: </source>
      <translation>No se ha encontrado la columna indicada: </translation>
    </message>
    <message>
      <source>Division by zero.</source>
      <translation>División entre cero.</translation>
    </message>
    <message>
      <source>QGis files (*.qgs)</source>
      <translation>Archivos QGis (*.qgs)</translation>
    </message>
    <message>
      <source>No active layer</source>
      <translation>No hay capa activa</translation>
    </message>
    <message>
      <source>Band</source>
      <translation>Banda</translation>
    </message>
    <message>
      <source>Length</source>
      <translation>Longitud</translation>
    </message>
    <message>
      <source>Area</source>
      <translation>Área</translation>
    </message>
    <message>
      <source>action</source>
      <translation>acción</translation>
    </message>
    <message>
      <source> features found</source>
      <translation> objetos espaciales encontrados</translation>
    </message>
    <message>
      <source> 1 feature found</source>
      <translation> 1 objeto espacial encontrado</translation>
    </message>
    <message>
      <source>No features found</source>
      <translation>No se han encontrado objetos espaciales</translation>
    </message>
    <message>
      <source>No features were found in the active layer at the point you clicked</source>
      <translation>No se han encontrado objetos espaciales en la capa activa en el punto en el que se ha pinchado</translation>
    </message>
    <message>
      <source>Could not identify objects on</source>
      <translation>No se pudieron identificar objetos en</translation>
    </message>
    <message>
      <source>because</source>
      <translation>porque</translation>
    </message>
    <message>
      <source>Project file read error: </source>
      <translation>Error de lectura del archivo del proyecto: </translation>
    </message>
    <message>
      <source> at line </source>
      <translation> en la línea </translation>
    </message>
    <message>
      <source> column </source>
      <translation> columna </translation>
    </message>
    <message>
      <source> for file </source>
      <translation> en el archivo </translation>
    </message>
    <message>
      <source>Unable to save to file </source>
      <translation>No se puede guardar a un archivo </translation>
    </message>
    <message>
      <source>Fit to a linear transform requires at least 2 points.</source>
      <translation>Ajustar a una transformación lineal requiere al menos 2 puntos.</translation>
    </message>
    <message>
      <source>Fit to a Helmert transform requires at least 2 points.</source>
      <translation>Ajustar a una transformación de Helmert requiere al menos 2 puntos.</translation>
    </message>
    <message>
      <source>Fit to an affine transform requires at least 4 points.</source>
      <translation>Ajustar a una transformación afín requiere al menos 4 puntos.</translation>
    </message>
    <message>
      <source>New centroid</source>
      <translation>Nuevo centroide</translation>
    </message>
    <message>
      <source>New point</source>
      <translation>Nuevo punto</translation>
    </message>
    <message>
      <source>New vertex</source>
      <translation>Nuevo vértice</translation>
    </message>
    <message>
      <source>Undo last point</source>
      <translation>Deshacer último punto</translation>
    </message>
    <message>
      <source>Close line</source>
      <translation>Cerrar línea</translation>
    </message>
    <message>
      <source>Select vertex</source>
      <translation>Seleccionar vértice</translation>
    </message>
    <message>
      <source>Select new position</source>
      <translation>Seleccionar nueva posición</translation>
    </message>
    <message>
      <source>Select line segment</source>
      <translation>Seleccionar segmento de línea</translation>
    </message>
    <message>
      <source>New vertex position</source>
      <translation>Posición del nuevo vértice</translation>
    </message>
    <message>
      <source>Release</source>
      <translation>Liberar</translation>
    </message>
    <message>
      <source>Delete vertex</source>
      <translation>Borrar vértice</translation>
    </message>
    <message>
      <source>Release vertex</source>
      <translation>Liberar vértice</translation>
    </message>
    <message>
      <source>Select element</source>
      <translation>Seleccionar elemento</translation>
    </message>
    <message>
      <source>New location</source>
      <translation>Nueva localización</translation>
    </message>
    <message>
      <source>Release selected</source>
      <translation>Liberar selección</translation>
    </message>
    <message>
      <source>Delete selected / select next</source>
      <translation>Borrar selección / seleccionar siguiente</translation>
    </message>
    <message>
      <source>Select position on line</source>
      <translation>Seleccionar posición en la línea</translation>
    </message>
    <message>
      <source>Split the line</source>
      <translation>Dividir la línea</translation>
    </message>
    <message>
      <source>Release the line</source>
      <translation>Liberar la línea</translation>
    </message>
    <message>
      <source>Select point on line</source>
      <translation>Seleccionar punto en la línea</translation>
    </message>
    <message>
      <source>Couldn't open the data source: </source>
      <translation>No se pudo abrir la fuente de datos: </translation>
    </message>
    <message>
      <source>Parse error at line </source>
      <translation>Error de análisis en la línea </translation>
    </message>
    <message>
      <source>GPS eXchange format provider</source>
      <translation>Proveedor de formato eXchange GPS</translation>
    </message>
    <message>
      <source>GRASS plugin</source>
      <translation>Complemento de GRASS</translation>
    </message>
    <message>
      <source>QGIS couldn't find your GRASS installation.
Would you like to specify path (GISBASE) to your GRASS installation?</source>
      <translation>QGIS no pudo encontrar su instalación de GRASS.
¿Podría especificar la ruta (GISBASE) de su instalación de GRASS?</translation>
    </message>
    <message>
      <source>Choose GRASS installation path (GISBASE)</source>
      <translation>Seleccionar ruta de instalación de GRASS (GISBASE)</translation>
    </message>
    <message>
      <source>GRASS data won't be available if GISBASE is not specified.</source>
      <translation>Los datos de GRASS no estarán accesibles si no se especifica una GISBASE.</translation>
    </message>
    <message>
      <source>CopyrightLabel</source>
      <translation>Etiqueta de Copyright</translation>
    </message>
    <message>
      <source>Draws copyright information</source>
      <translation>Dibuja información de copyright</translation>
    </message>
    <message>
      <source>Version 0.1</source>
      <translation>Versión 0.1</translation>
    </message>
    <message>
      <source>Version 0.2</source>
      <translation>Versión 0.2</translation>
    </message>
    <message>
      <source>Loads and displays delimited text files containing x,y coordinates</source>
      <translation>Carga y muestra archivos de texto delimitado que contienen coordenadas X, Y</translation>
    </message>
    <message>
      <source>Add Delimited Text Layer</source>
      <translation>Añadir capa de texto delimitado</translation>
    </message>
    <message>
      <source>Georeferencer</source>
      <translation>Georreferenciador</translation>
    </message>
    <message>
      <source>Adding projection info to rasters</source>
      <translation>Añadir información de proyección a los rásters</translation>
    </message>
    <message>
      <source>GPS Tools</source>
      <translation>Herramientas de GPS</translation>
    </message>
    <message>
      <source>Tools for loading and importing GPS data</source>
      <translation>Herramientas para cargar e importar datos de GPS</translation>
    </message>
    <message>
      <source>GRASS</source>
      <translation>GRASS</translation>
    </message>
    <message>
      <source>GRASS layer</source>
      <translation>Capa de GRASS</translation>
    </message>
    <message>
      <source>Graticule Creator</source>
      <translation>Creador de cuadrícula</translation>
    </message>
    <message>
      <source>Builds a graticule</source>
      <translation>Construye una cuadrícula</translation>
    </message>
    <message>
      <source>NorthArrow</source>
      <translation>Flecha de Norte</translation>
    </message>
    <message>
      <source>Displays a north arrow overlayed onto the map</source>
      <translation>Muestra una flecha de Norte superpuesta en el mapa</translation>
    </message>
    <message>
      <source>[menuitemname]</source>
      <translation>[nombredeelementodemenu]</translation>
    </message>
    <message>
      <source>[plugindescription]</source>
      <translation>[descripcióndecomplemento]</translation>
    </message>
    <message>
      <source>ScaleBar</source>
      <translation>Barra de escala</translation>
    </message>
    <message>
      <source>Draws a scale bar</source>
      <translation>Dibuja una barra de escala</translation>
    </message>
    <message>
      <source>SPIT</source>
      <translation>SPIT</translation>
    </message>
    <message>
      <source>Shapefile to PostgreSQL/PostGIS Import Tool</source>
      <translation>Herramienta de importación de shapefiles a PostgreSQL/PostGIS</translation>
    </message>
    <message>
      <source>WFS plugin</source>
      <translation>Complemento de WFS</translation>
    </message>
    <message>
      <source>Adds WFS layers to the QGIS canvas</source>
      <translation>Añade capas WFS a la vista de QGIS</translation>
    </message>
    <message>
      <source>Not a vector layer</source>
      <translation>No es una capa vectorial</translation>
    </message>
    <message>
      <source>The current layer is not a vector layer</source>
      <translation>La capa actual no es vectorial</translation>
    </message>
    <message>
      <source>Layer cannot be added to</source>
      <translation>La capa no se puede añadir a</translation>
    </message>
    <message>
      <source>The data provider for this layer does not support the addition of features.</source>
      <translation>El proveedor de datos de esta capa no da soporte para añadir objetos espaciales.</translation>
    </message>
    <message>
      <source>Layer not editable</source>
      <translation>Capa no editable</translation>
    </message>
    <message>
      <source>Cannot edit the vector layer. To make it editable, go to the file item of the layer, right click and check 'Allow Editing'.</source>
      <translation>No se puede editar la capa vectorial. Para hacerla editable vaya al archivo de la capa, haga clic derecho y marque 'Permitir edición'.</translation>
    </message>
    <message>
      <source>To select features, you must choose a vector layer by clicking on its name in the legend</source>
      <translation>Para seleccionar objetos espaciales debe elegir una capa vectorial haciendo clic en su nombre en la leyenda</translation>
    </message>
    <message>
      <source>Python error</source>
      <translation>Error de Python</translation>
    </message>
    <message>
      <source>Couldn't load SIP module.
Python support will be disabled.</source>
      <translation>No se pudo cargar el módulo SIP.
El soporte para Python estará deshabilitado.</translation>
    </message>
    <message>
      <source>Couldn't load PyQt bindings.
Python support will be disabled.</source>
      <translation>No se pudieron cargar las conexiones de PyQt.
El soporte para Python estará deshabilitado.</translation>
    </message>
    <message>
      <source>Couldn't load QGIS bindings.
Python support will be disabled.</source>
      <translation>No se pudieron cargar las conexiones de QGIS.
El soporte para Python estará deshabilitado.</translation>
    </message>
    <message>
      <source>Couldn't load plugin </source>
      <translation>No se pudo cargar el complemento </translation>
    </message>
    <message>
      <source> due an error when calling its classFactory() method</source>
      <translation> debido a un error al llamar a su método classFactory()</translation>
    </message>
    <message>
      <source> due an error when calling its initGui() method</source>
      <translation> debido a un error al llamar a su método initGui()</translation>
    </message>
    <message>
      <source>Error while unloading plugin </source>
      <translation>Error al descargar complemento </translation>
    </message>
    <message>
      <source>2.5D shape type not supported</source>
      <translation>El tipo shape 2.5D no está soportado</translation>
    </message>
    <message>
      <source>Adding features to 2.5D shapetypes is not supported yet</source>
      <translation>Añadir objetos espaciales a tipo shape 2.5 aún no está soportado</translation>
    </message>
    <message>
      <source>Wrong editing tool</source>
      <translation>Herramienta de edición incorrecta</translation>
    </message>
    <message>
      <source>Cannot apply the 'capture point' tool on this vector layer</source>
      <translation>No se puede aplicar la herramienta 'capturar punto' en esta capa vectorial</translation>
    </message>
    <message>
      <source>Coordinate transform error</source>
      <translation>Error de transformación de coordenadas</translation>
    </message>
    <message>
      <source>Cannot transform the point to the layers coordinate system</source>
      <translation>No se puede transformar el punto al sistema de coordenadas de las capas</translation>
    </message>
    <message>
      <source>Cannot apply the 'capture line' tool on this vector layer</source>
      <translation>No se puede aplicar la herramienta 'capturar línea' en esta capa vectorial</translation>
    </message>
    <message>
      <source>Cannot apply the 'capture polygon' tool on this vector layer</source>
      <translation>No se puede aplicar la herramienta 'capturar polígono' en esta capa vectorial</translation>
    </message>
    <message>
      <source>Error</source>
      <translation>Error</translation>
    </message>
    <message>
      <source>Cannot add feature. Unknown WKB type</source>
      <translation>No se puede añadir el objeto espacial. Tipo WKB desconocido.</translation>
    </message>
    <message>
      <source>Error, could not add island</source>
      <translation>Error, no se pudo añadir la isla</translation>
    </message>
    <message>
      <source>A problem with geometry type occured</source>
      <translation>Ocurrió un problema con el tipo de geometría</translation>
    </message>
    <message>
      <source>The inserted Ring is not closed</source>
      <translation>El anillo insertado no está cerrado</translation>
    </message>
    <message>
      <source>The inserted Ring is not a valid geometry</source>
      <translation>El anillo insertado no es una geometría válida</translation>
    </message>
    <message>
      <source>The inserted Ring crosses existing rings</source>
      <translation>El anillo insertado cruza anillos existentes</translation>
    </message>
    <message>
      <source>The inserted Ring is not contained in a feature</source>
      <translation>El anillo insertado no está contenido en un objeto espacial</translation>
    </message>
    <message>
      <source>An unknown error occured</source>
      <translation>Ocurrió un error desconocido</translation>
    </message>
    <message>
      <source>Error, could not add ring</source>
      <translation>Error, no se pudo añadir el anillo</translation>
    </message>
    <message>
      <source> km2</source>
      <translation> km²</translation>
    </message>
    <message>
      <source> ha</source>
      <translation> Ha</translation>
    </message>
    <message>
      <source> m2</source>
      <translation> m²</translation>
    </message>
    <message>
      <source> m</source>
      <translation> m</translation>
    </message>
    <message>
      <source> km</source>
      <translation> km</translation>
    </message>
    <message>
      <source> mm</source>
      <translation> mm</translation>
    </message>
    <message>
      <source> cm</source>
      <translation> cm</translation>
    </message>
    <message>
      <source> sq mile</source>
      <translation> milla²</translation>
    </message>
    <message>
      <source> sq ft</source>
      <translation> pies²</translation>
    </message>
    <message>
      <source> mile</source>
      <translation> milla</translation>
    </message>
    <message>
      <source> foot</source>
      <translation> pie</translation>
    </message>
    <message>
      <source> feet</source>
      <translation> pies</translation>
    </message>
    <message>
      <source> sq.deg.</source>
      <translation> grados²</translation>
    </message>
    <message>
      <source> degree</source>
      <translation> grado</translation>
    </message>
    <message>
      <source> degrees</source>
      <translation> grados</translation>
    </message>
    <message>
      <source> unknown</source>
      <translation> desconocido</translation>
    </message>
    <message>
      <source>Received %1 of %2 bytes</source>
      <translation>Recibidos %1 de %2 bytes</translation>
    </message>
    <message>
      <source>Received %1 bytes (total unknown)</source>
      <translation>Recibidos %1 bytes (total desconocido)</translation>
    </message>
    <message>
      <source>Not connected</source>
      <translation>No conectado</translation>
    </message>
    <message>
      <source>Looking up '%1'</source>
      <translation>Buscando '%1'</translation>
    </message>
    <message>
      <source>Connecting to '%1'</source>
      <translation>Conectando a '%1'</translation>
    </message>
    <message>
      <source>Sending request '%1'</source>
      <translation>Enviando petición '%1'</translation>
    </message>
    <message>
      <source>Receiving reply</source>
      <translation>Recibiendo respuesta</translation>
    </message>
    <message>
      <source>Response is complete</source>
      <translation>La respuesta está completa</translation>
    </message>
    <message>
      <source>Closing down connection</source>
      <translation>Cerrando la conexión</translation>
    </message>
    <message>
      <source>Unable to open </source>
      <translation>No se puede abrir </translation>
    </message>
    <message>
      <source>Regular expressions on numeric values don't make sense. Use comparison instead.</source>
      <translation>Las expresiones regulares sobre valores numéricos no tienen sentido. Use la comparación en su lugar.</translation>
    </message>
    <message>
      <source>Geoprocessing functions for working with PostgreSQL/PostGIS layers</source>
      <translation>Funciones de geoprocesamiento para trabajar con capas PostgreSQL/PostGIS</translation>
    </message>
    <message>
      <source>Location: </source>
      <comment>Metadata in GRASS Browser</comment>
      <translation>Localización: </translation>
    </message>
    <message>
      <source>&lt;br>Mapset: </source>
      <comment>Metadata in GRASS Browser</comment>
      <translation>&lt;br>Directorio de mapas: </translation>
    </message>
    <message>
      <source>Location: </source>
      <translation>Localización: </translation>
    </message>
    <message>
      <source>&lt;br>Mapset: </source>
      <translation>&lt;br>Directorio de mapas: </translation>
    </message>
    <message>
      <source>&lt;b>Raster&lt;/b></source>
      <translation>&lt;b>Ráster&lt;/b></translation>
    </message>
    <message>
      <source>Cannot open raster header</source>
      <translation>No se puede abrir la cabecera del ráster</translation>
    </message>
    <message>
      <source>Rows</source>
      <translation>Filas</translation>
    </message>
    <message>
      <source>Columns</source>
      <translation>Columnas</translation>
    </message>
    <message>
      <source>N-S resolution</source>
      <translation>Resolución N-S</translation>
    </message>
    <message>
      <source>E-W resolution</source>
      <translation>Resolución E-W</translation>
    </message>
    <message>
      <source>North</source>
      <translation>Norte</translation>
    </message>
    <message>
      <source>South</source>
      <translation>Sur</translation>
    </message>
    <message>
      <source>East</source>
      <translation>Este</translation>
    </message>
    <message>
      <source>West</source>
      <translation>Oeste</translation>
    </message>
    <message>
      <source>Format</source>
      <translation>Formato</translation>
    </message>
    <message>
      <source>Minimum value</source>
      <translation>Valor mínimo</translation>
    </message>
    <message>
      <source>Maximum value</source>
      <translation>Valor máximo</translation>
    </message>
    <message>
      <source>Data source</source>
      <translation>Fuente de datos</translation>
    </message>
    <message>
      <source>Data description</source>
      <translation>Descripción de datos</translation>
    </message>
    <message>
      <source>Comments</source>
      <translation>Comentarios</translation>
    </message>
    <message>
      <source>Categories</source>
      <translation>Categorías</translation>
    </message>
    <message>
      <source>&lt;b>Vector&lt;/b></source>
      <translation>&lt;b>Vectorial&lt;/b></translation>
    </message>
    <message>
      <source>Points</source>
      <translation>Puntos</translation>
    </message>
    <message>
      <source>Lines</source>
      <translation>Líneas</translation>
    </message>
    <message>
      <source>Boundaries</source>
      <translation>Contornos</translation>
    </message>
    <message>
      <source>Centroids</source>
      <translation>Centroides</translation>
    </message>
    <message>
      <source>Faces</source>
      <translation>Caras</translation>
    </message>
    <message>
      <source>Kernels</source>
      <translation>Kernels</translation>
    </message>
    <message>
      <source>Areas</source>
      <translation>Áreas</translation>
    </message>
    <message>
      <source>Islands</source>
      <translation>Islas</translation>
    </message>
    <message>
      <source>Top</source>
      <translation>Arriba</translation>
    </message>
    <message>
      <source>Bottom</source>
      <translation>Abajo</translation>
    </message>
    <message>
      <source>yes</source>
      <translation>sí</translation>
    </message>
    <message>
      <source>no</source>
      <translation>no</translation>
    </message>
    <message>
      <source>History&lt;br></source>
      <translation>Historia&lt;br></translation>
    </message>
    <message>
      <source>&lt;b>Layer&lt;/b></source>
      <translation>&lt;b>Capa&lt;/b></translation>
    </message>
    <message>
      <source>Features</source>
      <translation>Objetos espaciales</translation>
    </message>
    <message>
      <source>Driver</source>
      <translation>Controlador</translation>
    </message>
    <message>
      <source>Database</source>
      <translation>Base de datos</translation>
    </message>
    <message>
      <source>Table</source>
      <translation>Tabla</translation>
    </message>
    <message>
      <source>Key column</source>
      <translation>Columna clave</translation>
    </message>
    <message>
      <source>GISBASE is not set.</source>
      <translation>GISBASE no establecida.</translation>
    </message>
    <message>
      <source> is not a GRASS mapset.</source>
      <translation> no es un directorio de mapas de GRASS.</translation>
    </message>
    <message>
      <source>Cannot start </source>
      <translation>No se puede iniciar </translation>
    </message>
    <message>
      <source>Mapset is already in use.</source>
      <translation>El directorio de mapas ya está en uso.</translation>
    </message>
    <message>
      <source>Temporary directory </source>
      <translation>El directorio temporal </translation>
    </message>
    <message>
      <source> exist but is not writable</source>
      <translation> existe pero no se puede escribir</translation>
    </message>
    <message>
      <source>Cannot create temporary directory </source>
      <translation>No se puede crear el directorio temporal </translation>
    </message>
    <message>
      <source>Cannot create </source>
      <translation>No se puede crear </translation>
    </message>
    <message>
      <source>Cannot remove mapset lock: </source>
      <translation>No se puede eliminar el bloqueo del directorio de mapas: </translation>
    </message>
    <message>
      <source>Warning</source>
      <translation>Atención</translation>
    </message>
    <message>
      <source>Cannot read raster map region</source>
      <translation>No se puede la región del mapa ráster</translation>
    </message>
    <message>
      <source>Cannot read vector map region</source>
      <translation>No se puede leer la región del mapa vectorial</translation>
    </message>
    <message>
      <source>Cannot read region</source>
      <translation>No se puede leer la región</translation>
    </message>
    <message>
      <source>Where is '</source>
      <translation>¿Dónde está '</translation>
    </message>
    <message>
      <source>original location: </source>
      <translation>localización original: </translation>
    </message>
    <message>
      <source>To identify features, you must choose an active layer by clicking on its name in the legend</source>
      <translation>Para identificar objetos espaciales, debe activar una capa haciendo clic en su nombre en la leyenda</translation>
    </message>
    <message>
      <source>PostgreSQL Geoprocessing</source>
      <translation>Geoprocesamiento PostgreSQL</translation>
    </message>
    <message>
      <source>Quick Print</source>
      <translation>Impresión rápida</translation>
    </message>
    <message>
      <source>Quick Print is a plugin to quickly print a map with minimal effort.</source>
      <translation>Impresión rápida es un complemento para imprimir rápidamente un mapa con el mínimo esfuerzo.</translation>
    </message>
    <message>
      <source>Could not remove polygon intersection</source>
      <translation>No se pudo eliminar la intersección de los polígonos</translation>
    </message>
    <message>
      <source>Currently only filebased datasets are supported</source>
      <translation>Actualmente sólo hay soporte para conjuntos de datos basados en archivo</translation>
    </message>
    <message>
      <source>Loaded default style file from </source>
      <translation>Se ha cargado el archivo de estilo predeterminado desde </translation>
    </message>
    <message>
      <source>The directory containing your dataset needs to be writeable!</source>
      <translation>Se tiene que poder escribir en el directorio que contiene su conjunto de datos.</translation>
    </message>
    <message>
      <source>Created default style file as </source>
      <translation>Se ha creado el archivo de estilo predeterminado </translation>
    </message>
    <message>
      <source>ERROR: Failed to created default style file as </source>
      <translation>ERROR: no se pudo crear el archivo de estilo predeterminado </translation>
    </message>
  </context>
  <context>
    <name>QgisApp</name>
    <message>
      <source>Quantum GIS - </source>
      <translation>Quantum GIS - </translation>
    </message>
    <message>
      <source>Checking database</source>
      <translation>Comprobando la base de datos</translation>
    </message>
    <message>
      <source>Reading settings</source>
      <translation>Leyendo configuraciones</translation>
    </message>
    <message>
      <source>Setting up the GUI</source>
      <translation>Configurando la interfaz gráfica de usuario (GUI)</translation>
    </message>
    <message>
      <source>Restoring loaded plugins</source>
      <translation>Restableciendo complementos cargados</translation>
    </message>
    <message>
      <source>Initializing file filters</source>
      <translation>Inicializando filtros de archivo</translation>
    </message>
    <message>
      <source>Restoring window state</source>
      <translation>Restableciendo el estado de la ventana</translation>
    </message>
    <message>
      <source>QGIS Ready!</source>
      <translation>¡QGIS preparado!</translation>
    </message>
    <message>
      <source>&amp;New Project</source>
      <translation>&amp;Nuevo proyecto</translation>
    </message>
    <message>
      <source>Ctrl+N</source>
      <comment>New Project</comment>
      <translation>Ctrl+N</translation>
    </message>
    <message>
      <source>New Project</source>
      <translation>Nuevo proyecto</translation>
    </message>
    <message>
      <source>&amp;Open Project...</source>
      <translation>&amp;Abrir proyecto...</translation>
    </message>
    <message>
      <source>Ctrl+O</source>
      <comment>Open a Project</comment>
      <translation>Ctrl+A</translation>
    </message>
    <message>
      <source>Open a Project</source>
      <translation>Abrir un proyecto</translation>
    </message>
    <message>
      <source>&amp;Save Project</source>
      <translation>&amp;Guardar proyecto</translation>
    </message>
    <message>
      <source>Ctrl+S</source>
      <comment>Save Project</comment>
      <translation>Ctrl+G</translation>
    </message>
    <message>
      <source>Save Project</source>
      <translation>Guardar proyecto</translation>
    </message>
    <message>
      <source>Save Project &amp;As...</source>
      <translation>G&amp;uardar proyecto como...</translation>
    </message>
    <message>
      <source>Ctrl+A</source>
      <comment>Save Project under a new name</comment>
      <translation>Ctrl+U</translation>
    </message>
    <message>
      <source>Save Project under a new name</source>
      <translation>Guardar proyecto con un nombre nuevo</translation>
    </message>
    <message>
      <source>&amp;Print...</source>
      <translation>Im&amp;primir...</translation>
    </message>
    <message>
      <source>Ctrl+P</source>
      <comment>Print</comment>
      <translation>Ctrl+P</translation>
    </message>
    <message>
      <source>Print</source>
      <translation>Imprimir</translation>
    </message>
    <message>
      <source>Save as Image...</source>
      <translation>Guardar como &amp;imagen...</translation>
    </message>
    <message>
      <source>Ctrl+I</source>
      <comment>Save map as image</comment>
      <translation>Ctrl+I</translation>
    </message>
    <message>
      <source>Save map as image</source>
      <translation>Guardar mapa como imagen</translation>
    </message>
    <message>
      <source>Exit</source>
      <translation>Salir</translation>
    </message>
    <message>
      <source>Ctrl+Q</source>
      <comment>Exit QGIS</comment>
      <translation>Ctrl+S</translation>
    </message>
    <message>
      <source>Exit QGIS</source>
      <translation>Salir de QGIS</translation>
    </message>
    <message>
      <source>Add a Vector Layer...</source>
      <translation>Añadir una capa vectorial...</translation>
    </message>
    <message>
      <source>V</source>
      <comment>Add a Vector Layer</comment>
      <translation>V</translation>
    </message>
    <message>
      <source>Add a Vector Layer</source>
      <translation>Añadir una capa vectorial</translation>
    </message>
    <message>
      <source>Add a Raster Layer...</source>
      <translation>Añadir una capa ráster...</translation>
    </message>
    <message>
      <source>R</source>
      <comment>Add a Raster Layer</comment>
      <translation>R</translation>
    </message>
    <message>
      <source>Add a Raster Layer</source>
      <translation>Añadir una capa ráster</translation>
    </message>
    <message>
      <source>Add a PostGIS Layer...</source>
      <translation>Añadir una capa de PostGIS...</translation>
    </message>
    <message>
      <source>D</source>
      <comment>Add a PostGIS Layer</comment>
      <translation>D</translation>
    </message>
    <message>
      <source>Add a PostGIS Layer</source>
      <translation>Añadir una capa de PostGIS</translation>
    </message>
    <message>
      <source>New Vector Layer...</source>
      <translation>Nueva capa vectorial...</translation>
    </message>
    <message>
      <source>N</source>
      <comment>Create a New Vector Layer</comment>
      <translation>N</translation>
    </message>
    <message>
      <source>Create a New Vector Layer</source>
      <translation>Crear una capa vectorial nueva</translation>
    </message>
    <message>
      <source>Remove Layer</source>
      <translation>Eliminar capa</translation>
    </message>
    <message>
      <source>Ctrl+D</source>
      <comment>Remove a Layer</comment>
      <translation>Ctrl+E</translation>
    </message>
    <message>
      <source>Remove a Layer</source>
      <translation>Eliminar una capa</translation>
    </message>
    <message>
      <source>Add All To Overview</source>
      <translation>Añadir todo al localizador</translation>
    </message>
    <message>
      <source>+</source>
      <comment>Show all layers in the overview map</comment>
      <translation>+</translation>
    </message>
    <message>
      <source>Show all layers in the overview map</source>
      <translation>Mostrar todas las capas en el localizador</translation>
    </message>
    <message>
      <source>Remove All From Overview</source>
      <translation>Eliminar todo del localizador</translation>
    </message>
    <message>
      <source>-</source>
      <comment>Remove all layers from overview map</comment>
      <translation>-</translation>
    </message>
    <message>
      <source>Remove all layers from overview map</source>
      <translation>Eliminar todas las capas del localizador</translation>
    </message>
    <message>
      <source>Show All Layers</source>
      <translation>Mostrar todas las capas</translation>
    </message>
    <message>
      <source>S</source>
      <comment>Show all layers</comment>
      <translation>M</translation>
    </message>
    <message>
      <source>Show all layers</source>
      <translation>Mostrar todas las capas</translation>
    </message>
    <message>
      <source>Hide All Layers</source>
      <translation>Ocultar todas las capas</translation>
    </message>
    <message>
      <source>H</source>
      <comment>Hide all layers</comment>
      <translation>O</translation>
    </message>
    <message>
      <source>Hide all layers</source>
      <translation>Ocultar todas las capas</translation>
    </message>
    <message>
      <source>Project Properties...</source>
      <translation>Propiedades del proyecto...</translation>
    </message>
    <message>
      <source>P</source>
      <comment>Set project properties</comment>
      <translation>P</translation>
    </message>
    <message>
      <source>Set project properties</source>
      <translation>Definir las propiedades del proyecto</translation>
    </message>
    <message>
      <source>Options...</source>
      <translation>Opciones...</translation>
    </message>
    <message>
      <source>Change various QGIS options</source>
      <translation>Cambiar varias opciones de QGIS</translation>
    </message>
    <message>
      <source>Custom Projection...</source>
      <translation>Proyección personalizada...</translation>
    </message>
    <message>
      <source>Manage custom projections</source>
      <translation>Administrar proyecciones personalizadas</translation>
    </message>
    <message>
      <source>Help Contents</source>
      <translation>Contenidos de la ayuda</translation>
    </message>
    <message>
      <source>Ctrl+?</source>
      <comment>Help Documentation (Mac)</comment>
      <translation>Ctrl+?</translation>
    </message>
    <message>
      <source>F1</source>
      <comment>Help Documentation</comment>
      <translation>F1</translation>
    </message>
    <message>
      <source>Help Documentation</source>
      <translation>Documentación de ayuda</translation>
    </message>
    <message>
      <source>Qgis Home Page</source>
      <translation>Página web de Qgis</translation>
    </message>
    <message>
      <source>Ctrl+H</source>
      <comment>QGIS Home Page</comment>
      <translation>Ctrl+W</translation>
    </message>
    <message>
      <source>QGIS Home Page</source>
      <translation>Página web de QGIS</translation>
    </message>
    <message>
      <source>About</source>
      <translation>Acerca de</translation>
    </message>
    <message>
      <source>About QGIS</source>
      <translation>Acerca de QGIS</translation>
    </message>
    <message>
      <source>Check Qgis Version</source>
      <translation>Comprobar versión de Qgis</translation>
    </message>
    <message>
      <source>Check if your QGIS version is up to date (requires internet access)</source>
      <translation>Comprobar si su versión de QGIS está actualizada (requiere acceso a internet)</translation>
    </message>
    <message>
      <source>Refresh</source>
      <translation>Actualizar</translation>
    </message>
    <message>
      <source>Ctrl+R</source>
      <comment>Refresh Map</comment>
      <translation>Ctrl+A</translation>
    </message>
    <message>
      <source>Refresh Map</source>
      <translation>Actualizar mapa</translation>
    </message>
    <message>
      <source>Zoom In</source>
      <translation>Acercar zum</translation>
    </message>
    <message>
      <source>Ctrl++</source>
      <comment>Zoom In</comment>
      <translation>Ctrl++</translation>
    </message>
    <message>
      <source>Zoom Out</source>
      <translation>Alejar zum</translation>
    </message>
    <message>
      <source>Ctrl+-</source>
      <comment>Zoom Out</comment>
      <translation>Ctrl+-</translation>
    </message>
    <message>
      <source>Zoom Full</source>
      <translation>Zum general</translation>
    </message>
    <message>
      <source>F</source>
      <comment>Zoom to Full Extents</comment>
      <translation>G</translation>
    </message>
    <message>
      <source>Zoom to Full Extents</source>
      <translation>Zum a toda la extensión</translation>
    </message>
    <message>
      <source>Zoom To Selection</source>
      <translation>Zum a la selección</translation>
    </message>
    <message>
      <source>Ctrl+F</source>
      <comment>Zoom to selection</comment>
      <translation>Ctrl+F</translation>
    </message>
    <message>
      <source>Zoom to selection</source>
      <translation>Zum a la selección</translation>
    </message>
    <message>
      <source>Pan Map</source>
      <translation>Desplazar mapa</translation>
    </message>
    <message>
      <source>Pan the map</source>
      <translation>Desplazar el mapa</translation>
    </message>
    <message>
      <source>Zoom Last</source>
      <translation>Zum anterior</translation>
    </message>
    <message>
      <source>Zoom to Last Extent</source>
      <translation>Zum a la extensión anterior</translation>
    </message>
    <message>
      <source>Zoom To Layer</source>
      <translation>Zum a la capa</translation>
    </message>
    <message>
      <source>Zoom to Layer</source>
      <translation>Zum a la capa</translation>
    </message>
    <message>
      <source>Identify Features</source>
      <translation>Identificar objetos espaciales</translation>
    </message>
    <message>
      <source>I</source>
      <comment>Click on features to identify them</comment>
      <translation>I</translation>
    </message>
    <message>
      <source>Click on features to identify them</source>
      <translation>Pulsar sobre los objetos espaciales para identificarlos</translation>
    </message>
    <message>
      <source>Select Features</source>
      <translation>Seleccionar objetos espaciales</translation>
    </message>
    <message>
      <source>Open Table</source>
      <translation>Abrir tabla</translation>
    </message>
    <message>
      <source>Measure Line </source>
      <translation>Regla </translation>
    </message>
    <message>
      <source>Ctrl+M</source>
      <comment>Measure a Line</comment>
      <translation>Ctrl+R</translation>
    </message>
    <message>
      <source>Measure a Line</source>
      <translation>Regla</translation>
    </message>
    <message>
      <source>Measure Area</source>
      <translation>Medir áreas</translation>
    </message>
    <message>
      <source>Ctrl+J</source>
      <comment>Measure an Area</comment>
      <translation>Ctrl+J</translation>
    </message>
    <message>
      <source>Measure an Area</source>
      <translation>Medir un área</translation>
    </message>
    <message>
      <source>Show Bookmarks</source>
      <translation>Mostrar marcadores</translation>
    </message>
    <message>
      <source>B</source>
      <comment>Show Bookmarks</comment>
      <translation>M</translation>
    </message>
    <message>
      <source>Show most toolbars</source>
      <translation>Mostrar todas las barras de herramientas posibles</translation>
    </message>
    <message>
      <source>Hide most toolbars</source>
      <translation>Ocultar todas las barras de herramientas posibles</translation>
    </message>
    <message>
      <source>New Bookmark...</source>
      <translation>Nuevo marcador...</translation>
    </message>
    <message>
      <source>Ctrl+B</source>
      <comment>New Bookmark</comment>
      <translation>Ctrl+M</translation>
    </message>
    <message>
      <source>New Bookmark</source>
      <translation>Nuevo marcador</translation>
    </message>
    <message>
      <source>Add WMS Layer...</source>
      <translation>Añadir capa WMS...</translation>
    </message>
    <message>
      <source>W</source>
      <comment>Add Web Mapping Server Layer</comment>
      <translation>W</translation>
    </message>
    <message>
      <source>Add Web Mapping Server Layer</source>
      <translation>Añadir capa de servidor web de mapas</translation>
    </message>
    <message>
      <source>In Overview</source>
      <translation>Llevar al localizador</translation>
    </message>
    <message>
      <source>O</source>
      <comment>Add current layer to overview map</comment>
      <translation>L</translation>
    </message>
    <message>
      <source>Add current layer to overview map</source>
      <translation>Añadir la capa actual al localizador</translation>
    </message>
    <message>
      <source>Plugin Manager...</source>
      <translation>Administrador de complementos...</translation>
    </message>
    <message>
      <source>Open the plugin manager</source>
      <translation>Abrir el administrador de complementos</translation>
    </message>
    <message>
      <source>Capture Point</source>
      <translation>Capturar punto</translation>
    </message>
    <message>
      <source>.</source>
      <comment>Capture Points</comment>
      <translation>.</translation>
    </message>
    <message>
      <source>Capture Points</source>
      <translation>Capturar puntos</translation>
    </message>
    <message>
      <source>Capture Line</source>
      <translation>Capturar línea</translation>
    </message>
    <message>
      <source>/</source>
      <comment>Capture Lines</comment>
      <translation>/</translation>
    </message>
    <message>
      <source>Capture Lines</source>
      <translation>Capturar líneas</translation>
    </message>
    <message>
      <source>Capture Polygon</source>
      <translation>Capturar polígono</translation>
    </message>
    <message>
      <source>Ctrl+/</source>
      <comment>Capture Polygons</comment>
      <translation>Ctrl+/</translation>
    </message>
    <message>
      <source>Capture Polygons</source>
      <translation>Capturar polígonos</translation>
    </message>
    <message>
      <source>Delete Selected</source>
      <translation>Borrar lo seleccionado</translation>
    </message>
    <message>
      <source>Add Vertex</source>
      <translation>Añadir vértice</translation>
    </message>
    <message>
      <source>Delete Vertex</source>
      <translation>Borrar vértice</translation>
    </message>
    <message>
      <source>Move Vertex</source>
      <translation>Mover vértice</translation>
    </message>
    <message>
      <source>Cut Features</source>
      <translation>Cortar objetos espaciales</translation>
    </message>
    <message>
      <source>Cut selected features</source>
      <translation>Cortar los objetos espaciales seleccionados</translation>
    </message>
    <message>
      <source>Copy Features</source>
      <translation>Copiar objetos espaciales</translation>
    </message>
    <message>
      <source>Copy selected features</source>
      <translation>Copiar los objetos espaciales seleccionados</translation>
    </message>
    <message>
      <source>Paste Features</source>
      <translation>Pegar objetos espaciales</translation>
    </message>
    <message>
      <source>Paste selected features</source>
      <translation>Pegar los objetos espaciales seleccionados</translation>
    </message>
    <message>
      <source>&amp;File</source>
      <translation>&amp;Archivo</translation>
    </message>
    <message>
      <source>&amp;Open Recent Projects</source>
      <translation>Abrir proyectos &amp;recientes</translation>
    </message>
    <message>
      <source>&amp;View</source>
      <translation>&amp;Ver</translation>
    </message>
    <message>
      <source>&amp;Layer</source>
      <translation>&amp;Capa</translation>
    </message>
    <message>
      <source>&amp;Settings</source>
      <translation>C&amp;onfiguración</translation>
    </message>
    <message>
      <source>&amp;Plugins</source>
      <translation>Co&amp;mplementos</translation>
    </message>
    <message>
      <source>&amp;Help</source>
      <translation>A&amp;yuda</translation>
    </message>
    <message>
      <source>File</source>
      <translation>Archivo</translation>
    </message>
    <message>
      <source>Manage Layers</source>
      <translation>Administrar capas</translation>
    </message>
    <message>
      <source>Help</source>
      <translation>Ayuda</translation>
    </message>
    <message>
      <source>Digitizing</source>
      <translation>Digitalización</translation>
    </message>
    <message>
      <source>Map Navigation</source>
      <translation>Navegación de mapas</translation>
    </message>
    <message>
      <source>Attributes</source>
      <translation>Atributos</translation>
    </message>
    <message>
      <source>Plugins</source>
      <translation>Complementos</translation>
    </message>
    <message>
      <source>Progress bar that displays the status of rendering layers and other time-intensive operations</source>
      <translation>Barra de progreso que muestra el estado de representación de las capas y otras operaciones pesadas</translation>
    </message>
    <message>
      <source>Displays the current map scale</source>
      <translation>Muestra la escala del mapa actual</translation>
    </message>
    <message>
      <source>Render</source>
      <translation>Representar</translation>
    </message>
    <message>
      <source>When checked, the map layers are rendered in response to map navigation commands and other events. When not checked, no rendering is done. This allows you to add a large number of layers and symbolize them before rendering.</source>
      <translation>Cuando está marcada, las capas se representan respondiendo a los comandos de navegación y otros eventos. Cuando no está marcada, la representación no se hace. Esto permite añadir un gran número de capas y simbolizarlas antes de su representación.</translation>
    </message>
    <message>
      <source>Toggle map rendering</source>
      <translation>Conmutar la representación del mapa</translation>
    </message>
    <message>
      <source>This icon shows whether on the fly projection is enabled or not. Click the icon to bring up the project properties dialog to alter this behaviour.</source>
      <translation>Este icono muestra si la proyección &quot;al vuelo&quot; está activada o no. Pulse el icono para mostrar el cuadro de diálogo de propiedades del proyecto para variar esta característica.</translation>
    </message>
    <message>
      <source>Projection status - Click to open projection dialog</source>
      <translation>Estado de la proyección - Pulse para abrir el cuadro de diálogo de proyección</translation>
    </message>
    <message>
      <source>Ready</source>
      <translation>Preparado</translation>
    </message>
    <message>
      <source>Map canvas. This is where raster and vector layers are displayed when added to the map</source>
      <translation>Vista del mapa. Aquí es donde se muestran las capas ráster y vectoriales cuando son añadidas al mapa</translation>
    </message>
    <message>
      <source>Map overview canvas. This canvas can be used to display a locator map that shows the current extent of the map canvas. The current extent is shown as a red rectangle. Any layer on the map can be added to the overview canvas.</source>
      <translation>Localizador del mapa. Esta vista puede usarse para visualizar un mapa de localización que muestra la extensión de la vista del mapa. La extensión actual se muestra como un rectángulo rojo. Cualquier capa del mapa se puede añadir al localizador.</translation>
    </message>
    <message>
      <source>Map legend that displays all the layers currently on the map canvas. Click on the check box to turn a layer on or off. Double click on a layer in the legend to customize its appearance and set other properties.</source>
      <translation>Leyenda del mapa que muestra todas la capas actualmente en la vista del mapa. Marcar la casilla para conmutar su vista. Pulsar dos veces sobre una capa en la leyenda para personalizar su apariencia y ajustar otras propiedades.</translation>
    </message>
    <message>
      <source>Version </source>
      <translation>Versión </translation>
    </message>
    <message>
      <source> with PostgreSQL support</source>
      <translation> con soporte para PostgreSQL</translation>
    </message>
    <message>
      <source> (no PostgreSQL support)</source>
      <translation> (sin soporte para PostgreSQL)</translation>
    </message>
    <message>
      <source>
Compiled against Qt </source>
      <translation>
Compilado contra Qt </translation>
    </message>
    <message>
      <source>, running against Qt </source>
      <translation>, ejecutándose contra Qt </translation>
    </message>
    <message>
      <source>Quantum GIS is licensed under the GNU General Public License</source>
      <translation>Quantum GIS se distribuye bajo la Licencia Pública General GNU</translation>
    </message>
    <message>
      <source>http://www.gnu.org/licenses</source>
      <translation>http://www.gnu.org/licenses</translation>
    </message>
    <message>
      <source>Version</source>
      <translation>Versión</translation>
    </message>
    <message>
      <source>New features</source>
      <translation>Nuevos objetos espaciales</translation>
    </message>
    <message>
      <source>Available Data Provider Plugins</source>
      <translation>Complementos disponibles de proveedores de datos</translation>
    </message>
    <message>
      <source>T</source>
      <comment>Show most toolbars</comment>
      <translation>T</translation>
    </message>
    <message>
      <source>Checking provider plugins</source>
      <translation>Comprobando complementos del proveedor</translation>
    </message>
    <message>
      <source>Starting Python</source>
      <translation>Iniciando Python</translation>
    </message>
    <message>
      <source>Python console</source>
      <translation>Consola de Python</translation>
    </message>
    <message>
      <source>Python error</source>
      <translation>Error de Python</translation>
    </message>
    <message>
      <source>Error when reading metadata of plugin </source>
      <translation>Error al leer metadatos del complemento </translation>
    </message>
    <message>
      <source>Toggle editing</source>
      <translation>Conmutar edición</translation>
    </message>
    <message>
      <source>Toggles the editing state of the current layer</source>
      <translation>Conmuta el estado de edición de la capa activa</translation>
    </message>
    <message>
      <source>Add Ring</source>
      <translation>Añadir anillo</translation>
    </message>
    <message>
      <source>Add Island</source>
      <translation>Añadir isla</translation>
    </message>
    <message>
      <source>Add Island to multipolygon</source>
      <translation>Añadir isla a multipolígono</translation>
    </message>
    <message>
      <source>Toolbar Visibility...</source>
      <translation>Visibilidad de barras de herramientas...</translation>
    </message>
    <message>
      <source>Scale </source>
      <translation>Escala </translation>
    </message>
    <message>
      <source>Current map scale (formatted as x:y)</source>
      <translation>Escala actual del mapa (en formato X:Y)</translation>
    </message>
    <message>
      <source>Map coordinates at mouse cursor position</source>
      <translation>Coordenadas del mapa en la posición del ratón</translation>
    </message>
    <message>
      <source>Ctrl+T</source>
      <comment>Hide most toolbars</comment>
      <translation>Ctrl+T</translation>
    </message>
    <message>
      <source>Shows the map coordinates at the current cursor position. The display is continuously updated as the mouse is moved.</source>
      <translation>Muestra las coordenadas del mapa en la posición actual del cursor. La visualización se actualiza continuamente al mover el ratón.</translation>
    </message>
    <message>
      <source>Open an OGR Supported Vector Layer</source>
      <translation>Abrir una capa vectorial soportada por OGR</translation>
    </message>
    <message>
      <source>is not a valid or recognized data source</source>
      <translation>no es una fuente de datos válida o reconocida</translation>
    </message>
    <message>
      <source>Invalid Data Source</source>
      <translation>Fuente de datos no válida</translation>
    </message>
    <message>
      <source>Invalid Layer</source>
      <translation>Capa no válida</translation>
    </message>
    <message>
      <source>%1 is an invalid layer and cannot be loaded.</source>
      <translation>%1 es una capa no válida y no se puede cargar.</translation>
    </message>
    <message>
      <source>Save As</source>
      <translation>Guardar como</translation>
    </message>
    <message>
      <source>Choose a QGIS project file to open</source>
      <translation>Seleccionar un archivo de proyecto de QGIS para abrir</translation>
    </message>
    <message>
      <source>QGIS Project Read Error</source>
      <translation>Error de lectura del proyecto de QGIS</translation>
    </message>
    <message>
      <source>Try to find missing layers?</source>
      <translation>¿Buscar las capas perdidas?</translation>
    </message>
    <message>
      <source>Unable to open project</source>
      <translation>No se puede abrir el proyecto</translation>
    </message>
    <message>
      <source>Choose a QGIS project file</source>
      <translation>Seleccionar un archivo de proyecto de QGIS</translation>
    </message>
    <message>
      <source>Saved project to:</source>
      <translation>Proyecto guardado en:</translation>
    </message>
    <message>
      <source>Unable to save project</source>
      <translation>No se puede guardar el proyecto</translation>
    </message>
    <message>
      <source>Unable to save project to </source>
      <translation>No se puede guardar el proyecto en </translation>
    </message>
    <message>
      <source>Unable to save project </source>
      <translation>No se puede guardar el proyecto </translation>
    </message>
    <message>
      <source>Choose a filename to save the QGIS project file as</source>
      <translation>Seleccionar un nombre de archivo para guardar como proyecto de QGIS</translation>
    </message>
    <message>
      <source>QGIS: Unable to load project</source>
      <translation>QGIS: No se puede cargar el proyecto</translation>
    </message>
    <message>
      <source>Unable to load project </source>
      <translation>No se puede cargar el proyecto </translation>
    </message>
    <message>
      <source>Choose a filename to save the map image as</source>
      <translation>Seleccionar un nombre de archivo para guardar el mapa como imagen</translation>
    </message>
    <message>
      <source>Saved map image to</source>
      <translation>Imagen del mapa guardada en</translation>
    </message>
    <message>
      <source>No Layer Selected</source>
      <translation>Ninguna capa seleccionada</translation>
    </message>
    <message>
      <source>To delete features, you must select a vector layer in the legend</source>
      <translation>Para borrar objetos espaciales, debe seleccionar una capa vectorial en la leyenda</translation>
    </message>
    <message>
      <source>No Vector Layer Selected</source>
      <translation>Ninguna capa vectorial seleccionada</translation>
    </message>
    <message>
      <source>Deleting features only works on vector layers</source>
      <translation>Borrar objetos espaciales solo funciona en capas vectoriales</translation>
    </message>
    <message>
      <source>Provider does not support deletion</source>
      <translation>El proveedor no soporta el borrado</translation>
    </message>
    <message>
      <source>Data provider does not support deleting features</source>
      <translation>El proveedor de datos no soporta el borrado de objetos espaciales</translation>
    </message>
    <message>
      <source>Layer not editable</source>
      <translation>Capa no editable</translation>
    </message>
    <message>
      <source>The current layer is not editable. Choose 'Start editing' in the digitizing toolbar.</source>
      <translation>La capa activa no se puede editar. Elegir 'Conmutar edición' en la barra de herramientas Digitalización.</translation>
    </message>
    <message>
      <source>Problem deleting features</source>
      <translation>Problema al borrar objetos espaciales</translation>
    </message>
    <message>
      <source>A problem occured during deletion of features</source>
      <translation>Ha ocurrido un problema durante el borrado de objetos espaciales</translation>
    </message>
    <message>
      <source>Invalid scale</source>
      <translation>Escala no válida</translation>
    </message>
    <message>
      <source>Error Loading Plugin</source>
      <translation>Error al cargar el complemento</translation>
    </message>
    <message>
      <source>There was an error loading %1.</source>
      <translation>Ha habido un error al cargar %1.</translation>
    </message>
    <message>
      <source>No MapLayer Plugins</source>
      <translation>No hay complementos de MapLayer</translation>
    </message>
    <message>
      <source>No MapLayer plugins in ../plugins/maplayer</source>
      <translation>No hay complementos de MapLayer en ../plugins/maplayer</translation>
    </message>
    <message>
      <source>No Plugins</source>
      <translation>No hay complementos</translation>
    </message>
    <message>
      <source>No plugins found in ../plugins. To test plugins, start qgis from the src directory</source>
      <translation>No se han encontrado complementos en ../plugins. Para probar complementos, inicie qgis desde el directorio src</translation>
    </message>
    <message>
      <source>Name</source>
      <translation>Nombre</translation>
    </message>
    <message>
      <source>Plugin %1 is named %2</source>
      <translation>El complemento %1 se llama %2</translation>
    </message>
    <message>
      <source>Plugin Information</source>
      <translation>Información del complemento</translation>
    </message>
    <message>
      <source>QGis loaded the following plugin:</source>
      <translation>QGis ha cargado el siguiente complemento:</translation>
    </message>
    <message>
      <source>Name: %1</source>
      <translation>Nombre: %1</translation>
    </message>
    <message>
      <source>Version: %1</source>
      <translation>Versión: %1</translation>
    </message>
    <message>
      <source>Description: %1</source>
      <translation>Descripción: %1</translation>
    </message>
    <message>
      <source>Unable to Load Plugin</source>
      <translation>No se puede cargar el complemento</translation>
    </message>
    <message>
      <source>QGIS was unable to load the plugin from: %1</source>
      <translation>QGIS no ha podido cargar el complemento desde: %1</translation>
    </message>
    <message>
      <source>There is a new version of QGIS available</source>
      <translation>Hay una nueva versión de QGIS disponible</translation>
    </message>
    <message>
      <source>You are running a development version of QGIS</source>
      <translation>Está utilizando una versión de desarrollo de QGIS</translation>
    </message>
    <message>
      <source>You are running the current version of QGIS</source>
      <translation>Está utilizando la versión actualizada de QGIS</translation>
    </message>
    <message>
      <source>Would you like more information?</source>
      <translation>¿Desea más información?</translation>
    </message>
    <message>
      <source>QGIS Version Information</source>
      <translation>Información de la versión de QGIS</translation>
    </message>
    <message>
      <source>QGIS - Changes in SVN Since Last Release</source>
      <translation>QGIS - Cambios en el SVN desde la última versión</translation>
    </message>
    <message>
      <source>Unable to get current version information from server</source>
      <translation>No se puede obtener información de la versión actual del servidor</translation>
    </message>
    <message>
      <source>Connection refused - server may be down</source>
      <translation>Conexión rehusada - el servidor puede estar fuera de servicio</translation>
    </message>
    <message>
      <source>QGIS server was not found</source>
      <translation>No se ha encontrado el servidor QGIS</translation>
    </message>
    <message>
      <source>Network error while communicating with server</source>
      <translation>Error de red mientras se comunicaba con el servidor</translation>
    </message>
    <message>
      <source>Unknown network socket error</source>
      <translation>Error de socket de red desconocido</translation>
    </message>
    <message>
      <source>Unable to communicate with QGIS Version server</source>
      <translation>No se puede comunicar con el servidor de versión de QGIS</translation>
    </message>
    <message>
      <source>Layer is not valid</source>
      <translation>La capa no es válida</translation>
    </message>
    <message>
      <source>The layer is not a valid layer and can not be added to the map</source>
      <translation>La capa no es válida y no se puede añadir al mapa</translation>
    </message>
    <message>
      <source>Save?</source>
      <translation>¿Guardar?</translation>
    </message>
    <message>
      <source>Do you want to save the current project?</source>
      <translation>¿Quiere guardar el proyecto actual?</translation>
    </message>
    <message>
      <source>Extents: </source>
      <translation>Extensiones: </translation>
    </message>
    <message>
      <source>Clipboard contents set to: </source>
      <translation>Contenido del portapapeles ajustado a: </translation>
    </message>
    <message>
      <source>Open a GDAL Supported Raster Data Source</source>
      <translation>Abrir una fuente de datos ráster soportada por GDAL</translation>
    </message>
    <message>
      <source> is not a valid or recognized raster data source</source>
      <translation> no es una fuente de datos ráster válida o reconocida</translation>
    </message>
    <message>
      <source> is not a supported raster data source</source>
      <translation> no es una fuente de datos ráster soportada</translation>
    </message>
    <message>
      <source>Unsupported Data Source</source>
      <translation>Fuente de datos no soportada</translation>
    </message>
    <message>
      <source>Enter a name for the new bookmark:</source>
      <translation>Introducir un nombre para el nuevo marcador:</translation>
    </message>
    <message>
      <source>Error</source>
      <translation>Error</translation>
    </message>
    <message>
      <source>Unable to create the bookmark. Your user database may be missing or corrupted</source>
      <translation>No se puede crear el marcador. Puede que falte su base de datos de usuario o esté dañada</translation>
    </message>
    <message>
      <source>Move Feature</source>
      <translation>Mover objeto espacial</translation>
    </message>
    <message>
      <source>Split Features</source>
      <translation>Dividir objetos espaciales</translation>
    </message>
    <message>
      <source>Map Tips</source>
      <translation>Avisos del mapa</translation>
    </message>
    <message>
      <source>Show information about a feature when the mouse is hovered over it</source>
      <translation>Mostrar información sobre un objeto espacial cuando se desliza el ratón sobre él</translation>
    </message>
    <message>
      <source>Current map scale</source>
      <translation>Escala actual del mapa</translation>
    </message>
    <message>
      <source>Project file is older</source>
      <translation>El archivo del proyecto es más antiguo</translation>
    </message>
    <message>
      <source>&lt;p>This project file was saved by an older version of QGIS.</source>
      <translation>&lt;p>Este archivo de proyecto se guardó con una versión más antigua de QGIS.</translation>
    </message>
    <message>
      <source> When saving this project file, QGIS will update it to the latest version, possibly rendering it useless for older versions of QGIS.</source>
      <translation> Cuando guarde este proyecto, QGIS lo actualizará a la última versión, dejándolo probablemente inservible para versiones anteriores de QGIS.</translation>
    </message>
    <message>
      <source>&lt;p>Even though QGIS developers try to maintain backwards compatibility, some of the information from the old project file might be lost.</source>
      <translation>&lt;P>Incluso aunque los desarrolladores de QGIS tratan de mantener retrocompatibilidad, parte de la información del antiguo proyecto puede perderse.</translation>
    </message>
    <message>
      <source> To improve the quality of QGIS, we appreciate if you file a bug report at %3.</source>
      <translation> Para mejorar la calidad de QGIS, agradecemos si rellena un informe de error en %3.</translation>
    </message>
    <message>
      <source> Be sure to include the old project file, and state the version of QGIS you used to discover the error.</source>
      <translation> Asegúrese de incluir el archivo del antiguo proyecto e indicar la versión de QGIS que usó para descubrir el error.</translation>
    </message>
    <message>
      <source>&lt;p>To remove this warning when opening an older project file, uncheck the box '%5' in the %4 menu.</source>
      <translation>&lt;p>Para eliminar este aviso al abrir un proyecto antiguo, desmarque la casilla '%5' en el menú %4.</translation>
    </message>
    <message>
      <source>&lt;p>Version of the project file: %1&lt;br>Current version of QGIS: %2</source>
      <translation>&lt;p>Versión del archivo de proyecto: %1 &lt;br>Versión actual de QGIS: %2</translation>
    </message>
    <message>
      <source>&lt;tt>Settings:Options:General&lt;/tt></source>
      <comment>Menu path to setting options</comment>
      <translation>&lt;tt>Configuración:Opciones:General&lt;/tt></translation>
    </message>
    <message>
      <source>Warn me when opening a project file saved with an older version of QGIS</source>
      <translation>Avisarme al abrir archivos de proyecto guardados con una versión anterior de QGIS</translation>
    </message>
    <message>
      <source>Toggle full screen mode</source>
      <translation>Cambiar el modo de pantalla completa</translation>
    </message>
    <message>
      <source>Ctrl-F</source>
      <comment>Toggle fullscreen mode</comment>
      <translation>C</translation>
    </message>
    <message>
      <source>Toggle fullscreen mode</source>
      <translation>Cambiar el modo de pantalla completa</translation>
    </message>
    <message>
      <source>This release candidate includes over 40 bug fixes and enchancements over the QGIS 0.9.1 release. In addition we have added the following new features:</source>
      <translation>Este candidato de lanzamiento incluye más de 40 correcciones de errores y mejoras en relación a la versión 0.9.1. Además hemos añadido las siguientes funciones nuevas:</translation>
    </message>
    <message>
      <source>Imrovements to digitising capabilities.</source>
      <translation>Mejora de la capacidad de digitalización.</translation>
    </message>
    <message>
      <source>Supporting default and defined styles (.qml) files for file based vector layers. With styles you can save the symbolisation and other settings associated with a vector layer and they will be loaded whenever you load that layer.</source>
      <translation>Soporte para archivos (.qml) de estilos predeterminados y definidos, para capas vectoriales basadas en archivos. Con los estilos puede guardar la simbología y otros ajustes asociados a una capa vectorial y se cargarán cada vez que cargue la capa.</translation>
    </message>
    <message>
      <source>Improved support for transparency and contrast stretching in raster layers. Support for color ramps in raster layers. Support for non-north up rasters. Many other raster improvements 'under the hood'.</source>
      <translation>Soporte mejorado para ajuste de la transparencia y el contraste en capas ráster. Soporte para rampas de color en capas ráster. Soporte para rásters no orientados al norte. Otras muchas mejoras ráster «en la trastienda».</translation>
    </message>
    <message>
      <source></source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>QgisAppBase</name>
    <message>
      <source>MainWindow</source>
      <translation>Ventana Principal</translation>
    </message>
    <message>
      <source>Legend</source>
      <translation>Leyenda</translation>
    </message>
    <message>
      <source>Map View</source>
      <translation>Vista del mapa</translation>
    </message>
  </context>
  <context>
    <name>QgsAbout</name>
    <message>
      <source>About Quantum GIS</source>
      <translation>Acerca de Quantum GIS</translation>
    </message>
    <message>
      <source>About</source>
      <translation>Acerca de</translation>
    </message>
    <message>
      <source>&lt;h2>Quantum GIS (qgis)&lt;/h2></source>
      <translation>&lt;h2>Quantum GIS (qgis)&lt;/h2></translation>
    </message>
    <message>
      <source>Version</source>
      <translation>Versión</translation>
    </message>
    <message>
      <source>QGIS Home Page</source>
      <translation>Página web de QGIS</translation>
    </message>
    <message>
      <source>Subscribe to the QGIS-User mailing list</source>
      <translation>Suscribirse a la lista de correo QGIS-User</translation>
    </message>
    <message>
      <source>What's New</source>
      <translation>Novedades</translation>
    </message>
    <message>
      <source>Developers</source>
      <translation>Desarrolladores</translation>
    </message>
    <message>
      <source>&lt;h2>QGIS Developers&lt;/h2></source>
      <translation>&lt;h2>Desarrolladores de QGIS&lt;/h2></translation>
    </message>
    <message>
      <source>Providers</source>
      <translation>Proveedores</translation>
    </message>
    <message>
      <source>Sponsors</source>
      <translation>Patrocinadores</translation>
    </message>
    <message>
      <source>Ok</source>
      <translation>Aceptar</translation>
    </message>
    <message>
      <source>Quantum GIS is licensed under the GNU General Public License</source>
      <translation>Quantum GIS se distribuye bajo la Licencia Pública General GNU</translation>
    </message>
    <message>
      <source>QGIS Sponsors</source>
      <translation>Patrocinadores de QGIS</translation>
    </message>
    <message>
      <source>The following have sponsored QGIS by contributing money to fund development and other project costs</source>
      <translation>Los siguientes han patrocinado QGIS aportando dinero para financiar el desarrollo y otros costes del proyecto</translation>
    </message>
    <message>
      <source>Name</source>
      <translation>Nombre</translation>
    </message>
    <message>
      <source>Website</source>
      <translation>Página web</translation>
    </message>
    <message>
      <source>QGIS Browser Selection</source>
      <translation>Selección de navegador de QGIS</translation>
    </message>
    <message>
      <source>Enter the name of a web browser to use (eg. konqueror).
Enter the full path if the browser is not in your PATH.
You can change this option later by selection Options from the Settings menu (Help Browser tab).</source>
      <translation>Introduzca el nombre de un navegador web a utilizar (ej. konqueror).
Introduzca la ruta completa si el navegador no está en la variable de entorno PATH.
Puede cambiar esta opción más tarde seleccionadon Opciones desde el menú Configuración (pestaña Navegador de la ayuda).
</translation>
    </message>
  </context>
  <context>
    <name>QgsAddAttrDialogBase</name>
    <message>
      <source>Add Attribute</source>
      <translation>Añadir atributo</translation>
    </message>
    <message>
      <source>OK</source>
      <translation>Aceptar</translation>
    </message>
    <message>
      <source>Cancel</source>
      <translation>Cancelar</translation>
    </message>
    <message>
      <source>Type:</source>
      <translation>Tipo:</translation>
    </message>
    <message>
      <source>Name:</source>
      <translation>Nombre:</translation>
    </message>
  </context>
  <context>
    <name>QgsAttributeActionDialog</name>
    <message>
      <source>Name</source>
      <translation>Nombre</translation>
    </message>
    <message>
      <source>Action</source>
      <translation>Acción</translation>
    </message>
    <message>
      <source>Capture</source>
      <translation>Capturar</translation>
    </message>
    <message>
      <source>Select an action</source>
      <comment>File dialog window title</comment>
      <translation>Seleccionar una acción</translation>
    </message>
  </context>
  <context>
    <name>QgsAttributeActionDialogBase</name>
    <message>
      <source>Form1</source>
      <translation>Formulario1</translation>
    </message>
    <message>
      <source>Remove the selected action</source>
      <translation>Eliminar la acción seleccionada</translation>
    </message>
    <message>
      <source>Remove</source>
      <translation>Eliminar</translation>
    </message>
    <message>
      <source>Move the selected action down</source>
      <translation>Mover la acción seleccionada hacia abajo</translation>
    </message>
    <message>
      <source>Move down</source>
      <translation>Bajar</translation>
    </message>
    <message>
      <source>Move the selected action up</source>
      <translation>Mover la acción seleccionada hacia arriba</translation>
    </message>
    <message>
      <source>Move up</source>
      <translation>Subir</translation>
    </message>
    <message>
      <source>This list contains all actions that have been defined for the current layer. Add actions by entering the details in the controls below and then pressing the Insert action button. Actions can be edited here by double clicking on the item.</source>
      <translation>Esta lista contiene todas las acciones que han sido definidas para la capa actual. Añada acciones introduciendo los detalles en los controles inferiores y presionando el botón Insertar acción. Las acciones se pueden editar pulsando dos veces sobre ellas.</translation>
    </message>
    <message>
      <source>The valid attribute names for this layer</source>
      <translation>Los nombres de atributo válidos para esta capa</translation>
    </message>
    <message>
      <source>Browse for action commands</source>
      <translation>Buscar comandos de acción</translation>
    </message>
    <message>
      <source>Browse</source>
      <translation>Buscar</translation>
    </message>
    <message>
      <source>Inserts the selected field into the action, prepended with a %</source>
      <translation>Inserta el campo seleccionado en la acción, precedido con un %</translation>
    </message>
    <message>
      <source>Insert field</source>
      <translation>Insertar campo</translation>
    </message>
    <message>
      <source>Update the selected action</source>
      <translation>Actualizar la acción seleccionada</translation>
    </message>
    <message>
      <source>Update action</source>
      <translation>Actualizar acción</translation>
    </message>
    <message>
      <source>Inserts the action into the list above</source>
      <translation>Inserta la acción en la lista de arriba</translation>
    </message>
    <message>
      <source>Insert action</source>
      <translation>Insertar acción</translation>
    </message>
    <message>
      <source>Captures any output from the action</source>
      <translation>Captura cualquier salida de la acción</translation>
    </message>
    <message>
      <source>Captures the standard output or error generated by the action and displays it in a dialog box</source>
      <translation>Captura la salida estándar o el error generado por la acción y la muestra en un cuadro de diálogo</translation>
    </message>
    <message>
      <source>Capture output</source>
      <translation>Capturar salida</translation>
    </message>
    <message>
      <source>Enter the action command here</source>
      <translation>Introduzca aquí el comando de acción</translation>
    </message>
    <message>
      <source>Action:</source>
      <translation>Acción:</translation>
    </message>
    <message>
      <source>Enter the action name here</source>
      <translation>Introduzca el nombre de la acción aquí</translation>
    </message>
    <message>
      <source>Enter the name of an action here. The name should be unique (qgis will make it unique if necessary).</source>
      <translation>Introduzca el nombre de la acción aquí. El nombre debe ser único (QGIS lo hará único si es necesario).</translation>
    </message>
    <message>
      <source>Name:</source>
      <translation>Nombre:</translation>
    </message>
    <message>
      <source>Enter the action here. This can be any program, script or command that is available on your system. When the action is invoked any set of characters that start with a % and then have the name of a field will be replaced by the value of that field. The special characters %% will be replaced by the value of the field that was selected. Double quote marks group text into single arguments to the program, script or command. Double quotes will be ignored if preceeded by a backslash</source>
      <translation>Introduzca la acción aquí. Ésta puede ser cualquier programa, script o comando que esté disponible en su sistema. Cuando se invoca una acción cualquier conjunto de caracteres que empiece por % y luego tenga el nombre de un campo se reemplazará con el valor de ese campo. Los caracteres especiales %% se reemplazarán por el valor del campo que se seleccionó. Las comillas dobles agrupan texto en argumentos simples para el programa, script o comando. Las comillas dobles se ignorarán si se preceden por una barra invertida (\)</translation>
    </message>
  </context>
  <context>
    <name>QgsAttributeDialogBase</name>
    <message>
      <source>Enter Attribute Values</source>
      <translation>Introducir valores de los atributos</translation>
    </message>
    <message>
      <source>1</source>
      <translation>1</translation>
    </message>
    <message>
      <source>Attribute</source>
      <translation>Atributo</translation>
    </message>
    <message>
      <source>Value</source>
      <translation>Valor</translation>
    </message>
    <message>
      <source>&amp;OK</source>
      <translation>&amp;Aceptar</translation>
    </message>
    <message>
      <source>&amp;Cancel</source>
      <translation>&amp;Cancelar</translation>
    </message>
  </context>
  <context>
    <name>QgsAttributeTable</name>
    <message>
      <source>Run action</source>
      <translation>Ejecutar acción</translation>
    </message>
  </context>
  <context>
    <name>QgsAttributeTableBase</name>
    <message>
      <source>Attribute Table</source>
      <translation>Tabla de atributos</translation>
    </message>
    <message>
      <source>&amp;Help</source>
      <translation>A&amp;yuda</translation>
    </message>
    <message>
      <source>Alt+C</source>
      <translation>Alt+C</translation>
    </message>
    <message>
      <source>Search for:</source>
      <translation>Buscar:</translation>
    </message>
    <message>
      <source>in</source>
      <translation>en</translation>
    </message>
    <message>
      <source>Search</source>
      <translation>Búsqueda</translation>
    </message>
    <message>
      <source>Adva&amp;nced...</source>
      <translation>Ava&amp;nzado...</translation>
    </message>
    <message>
      <source>Alt+N</source>
      <translation>Alt+N</translation>
    </message>
    <message>
      <source>&amp;Close</source>
      <translation>&amp;Cerrar</translation>
    </message>
    <message>
      <source>Remove selection</source>
      <translation>Eliminar selección</translation>
    </message>
    <message>
      <source>Move selected to top</source>
      <translation>Mover la selección arriba del todo</translation>
    </message>
    <message>
      <source>Ctrl+T</source>
      <translation>Ctrl+T</translation>
    </message>
    <message>
      <source>Invert selection</source>
      <translation>Invertir selección</translation>
    </message>
    <message>
      <source>Ctrl+S</source>
      <translation>Ctrl+S</translation>
    </message>
    <message>
      <source>Copy selected rows to clipboard (Ctrl+C)</source>
      <translation>Copiar las filas seleccionadas al portapapeles (Ctrl+C)</translation>
    </message>
    <message>
      <source>Copies the selected rows to the clipboard</source>
      <translation>Copia las filas seleccionadas al portapapeles</translation>
    </message>
    <message>
      <source>Ctrl+C</source>
      <translation>Ctrl+C</translation>
    </message>
    <message>
      <source>New column</source>
      <translation>Nueva columna</translation>
    </message>
    <message>
      <source>Ctrl+N</source>
      <translation>Ctrl+N</translation>
    </message>
    <message>
      <source>Delete column</source>
      <translation>Eliminar columna</translation>
    </message>
    <message>
      <source>Ctrl+X</source>
      <translation>Ctrl+X</translation>
    </message>
    <message>
      <source>Start editing</source>
      <translation>Comenzar edición</translation>
    </message>
    <message>
      <source>Stop editin&amp;g</source>
      <translation>Terminar &amp;edición</translation>
    </message>
    <message>
      <source>Alt+G</source>
      <translation>Alt+E</translation>
    </message>
    <message>
      <source>Zoom map to the selected rows (Ctrl-F)</source>
      <translation>Zum a las filas seleccionadas (Ctrl+F)</translation>
    </message>
    <message>
      <source>Zoom map to the selected rows</source>
      <translation>Zum a las filas seleccionadas </translation>
    </message>
    <message>
      <source>Ctrl+F</source>
      <translation>Ctrl+F</translation>
    </message>
  </context>
  <context>
    <name>QgsAttributeTableDisplay</name>
    <message>
      <source>select</source>
      <translation>seleccionar</translation>
    </message>
    <message>
      <source>select and bring to top</source>
      <translation>seleccionar y llevar arriba</translation>
    </message>
    <message>
      <source>show only matching</source>
      <translation>mostrar solo coincidentes</translation>
    </message>
    <message>
      <source>Search string parsing error</source>
      <translation>Buscar error de análisis de la cadena</translation>
    </message>
    <message>
      <source>Search results</source>
      <translation>Resultados de la búsqueda</translation>
    </message>
    <message>
      <source>You've supplied an empty search string.</source>
      <translation>Ha suministrado una cadena de búsqueda vacía.</translation>
    </message>
    <message>
      <source>Error during search</source>
      <translation>Error durante la búsqueda</translation>
    </message>
    <message>
      <source>No matching features found.</source>
      <translation>No se han encontrado coincidencias.</translation>
    </message>
    <message>
      <source>Name conflict</source>
      <translation>Conflicto de nombre</translation>
    </message>
    <message>
      <source>Stop editing</source>
      <translation>Terminar edición</translation>
    </message>
    <message>
      <source>Do you want to save the changes?</source>
      <translation>¿Quiere guardar los cambios?</translation>
    </message>
    <message>
      <source>Error</source>
      <translation>Error</translation>
    </message>
    <message>
      <source>The attribute could not be inserted. The name already exists in the table.</source>
      <translation>No se pudo insertar el atributo. El nombre ya existe en la tabla.</translation>
    </message>
    <message>
      <source>Found %d matching features.</source>
      <translation>Se han encontrado %d elementos coincidentes.</translation>
    </message>
    <message>
      <source>Could not commit changes - changes are still pending</source>
      <translation>No se pudieron enviar los cambios - los cambios están todavía pendientes</translation>
    </message>
  </context>
  <context>
    <name>QgsBookmarks</name>
    <message>
      <source>Really Delete?</source>
      <translation>¿Borrar realmente?</translation>
    </message>
    <message>
      <source>Are you sure you want to delete the </source>
      <translation>¿Está seguro de que quiere borrar el marcador </translation>
    </message>
    <message>
      <source> bookmark?</source>
      <translation>?</translation>
    </message>
    <message>
      <source>Error deleting bookmark</source>
      <translation>Error al borrar marcador</translation>
    </message>
    <message>
      <source>Failed to delete the </source>
      <translation>Ha fallado el borrado del marcador </translation>
    </message>
    <message>
      <source> bookmark from the database. The database said:
</source>
      <translation> de la base de datos. La base de datos ha dicho:</translation>
    </message>
  </context>
  <context>
    <name>QgsBookmarksBase</name>
    <message>
      <source>Geospatial Bookmarks</source>
      <translation>Marcadores geoespaciales</translation>
    </message>
    <message>
      <source>Name</source>
      <translation>Nombre</translation>
    </message>
    <message>
      <source>Project</source>
      <translation>Proyecto</translation>
    </message>
    <message>
      <source>Extent</source>
      <translation>Extensión</translation>
    </message>
    <message>
      <source>Id</source>
      <translation>Id</translation>
    </message>
    <message>
      <source>Close the dialog</source>
      <translation>Cerrar el cuadro de diálogo</translation>
    </message>
    <message>
      <source>Help</source>
      <translation>Ayuda</translation>
    </message>
    <message>
      <source>Close</source>
      <translation>Cerrar</translation>
    </message>
    <message>
      <source>Delete the currently selected bookmark</source>
      <translation>Borrar el marcador seleccionado</translation>
    </message>
    <message>
      <source>Delete</source>
      <translation>Borrar</translation>
    </message>
    <message>
      <source>Zoom to the currently selected bookmark</source>
      <translation>Zum al marcador seleccionado</translation>
    </message>
    <message>
      <source>Zoom To</source>
      <translation>Zum a</translation>
    </message>
  </context>
  <context>
    <name>QgsComposer</name>
    <message>
      <source>QGIS - print composer</source>
      <translation>QGIS - diseñador de mapas</translation>
    </message>
    <message>
      <source>Map 1</source>
      <translation>Mapa 1</translation>
    </message>
    <message>
      <source>Couldn't open </source>
      <translation>No se puede abrir </translation>
    </message>
    <message>
      <source> for read/write</source>
      <translation> para leer/escribir</translation>
    </message>
    <message>
      <source>Error in Print</source>
      <translation>Error al imprimir</translation>
    </message>
    <message>
      <source>Cannot seek</source>
      <translation>No se puede solicitar</translation>
    </message>
    <message>
      <source>Cannot overwrite BoundingBox</source>
      <translation>No se puede sobrescribir el marco</translation>
    </message>
    <message>
      <source>Cannot find BoundingBox</source>
      <translation>No se puede encontrar el marco</translation>
    </message>
    <message>
      <source>Cannot overwrite translate</source>
      <translation>No se puede sobrescribir la traducción</translation>
    </message>
    <message>
      <source>Cannot find translate</source>
      <translation>No se puede encontrar la traducción</translation>
    </message>
    <message>
      <source>File IO Error</source>
      <translation>Error de ES del archivo</translation>
    </message>
    <message>
      <source>Paper does not match</source>
      <translation>El papel no coincide</translation>
    </message>
    <message>
      <source>The selected paper size does not match the composition size</source>
      <translation>El tamaño de papel seleccionado no se ajusta al tamaño del mapa</translation>
    </message>
    <message>
      <source>Big image</source>
      <translation>Imagen grande</translation>
    </message>
    <message>
      <source>To create image </source>
      <translation>Crear imagen </translation>
    </message>
    <message>
      <source> requires circa </source>
      <translation> requiere cerca de </translation>
    </message>
    <message>
      <source> MB of memory</source>
      <translation> MB de memoria</translation>
    </message>
    <message>
      <source>format</source>
      <translation>formato</translation>
    </message>
    <message>
      <source>Choose a filename to save the map image as</source>
      <translation>Seleccione un nombre de archivo para guardar el mapa como imagen</translation>
    </message>
    <message>
      <source>SVG warning</source>
      <translation>Aviso de SVG</translation>
    </message>
    <message>
      <source>Don't show this message again</source>
      <translation>No volver a mostrar este mensaje</translation>
    </message>
    <message>
      <source>&lt;p>The SVG export function in Qgis has several problems due to bugs and deficiencies in the Qt4 svg code. Of note, text does not appear in the SVG file and there are problems with the map bounding box clipping other items such as the legend or scale bar.&lt;/p>If you require a vector-based output file from Qgis it is suggested that you try printing to PostScript if the SVG output is not satisfactory.&lt;/p></source>
      <translation>&lt;p>La función &quot;Exportar a SVG&quot; en Qgis tiene varios problemas debido a errores y deficiencias en el código svg de Qt4. Entre otros problemas, los textos no aparecen en los archivos SVG y hay problemas cuando el marco corta otros elementos como la leyenda o la barra de escala.&lt;/p>Si necesita un mapa vectorial hecho con Qgis, le sugerimos que lo imprima como PostScript si la salida como SVG no es satisfactoria.&lt;/p></translation>
    </message>
    <message>
      <source>Choose a filename to save the map as</source>
      <translation>Seleccionar un nombre de archivo para guardar el mapa</translation>
    </message>
    <message>
      <source>SVG Format</source>
      <translation>Formato SVG</translation>
    </message>
  </context>
  <context>
    <name>QgsComposerBase</name>
    <message>
      <source>MainWindow</source>
      <translation>Ventana principal</translation>
    </message>
    <message>
      <source>General</source>
      <translation>General</translation>
    </message>
    <message>
      <source>Composition</source>
      <translation>Diseño</translation>
    </message>
    <message>
      <source>Item</source>
      <translation>Elemento</translation>
    </message>
    <message>
      <source>Close</source>
      <translation>Cerrar</translation>
    </message>
    <message>
      <source>Help</source>
      <translation>Ayuda</translation>
    </message>
    <message>
      <source>&amp;Open Template ...</source>
      <translation>&amp;Abrir plantilla...</translation>
    </message>
    <message>
      <source>Save Template &amp;As...</source>
      <translation>Guardar plantilla &amp;como...</translation>
    </message>
    <message>
      <source>&amp;Print...</source>
      <translation>Im&amp;primir...</translation>
    </message>
    <message>
      <source>Zoom All</source>
      <translation>Zum general</translation>
    </message>
    <message>
      <source>Zoom In</source>
      <translation>Acercar zum</translation>
    </message>
    <message>
      <source>Zoom Out</source>
      <translation>Alejar zum</translation>
    </message>
    <message>
      <source>Add new map</source>
      <translation>Añadir mapa nuevo</translation>
    </message>
    <message>
      <source>Add new label</source>
      <translation>Añadir etiqueta nueva</translation>
    </message>
    <message>
      <source>Add new vect legend</source>
      <translation>Añadir nueva leyenda vectorizada</translation>
    </message>
    <message>
      <source>Select/Move item</source>
      <translation>Seleccionar/Mover elemento</translation>
    </message>
    <message>
      <source>Export as image</source>
      <translation>Exportar como imagen</translation>
    </message>
    <message>
      <source>Export as SVG</source>
      <translation>Exportar como SVG</translation>
    </message>
    <message>
      <source>Add new scalebar</source>
      <translation>Añadir nueva barra de escala</translation>
    </message>
    <message>
      <source>Refresh view</source>
      <translation>Actualizar vista</translation>
    </message>
    <message>
      <source>Add Image</source>
      <translation>Añadir imagen</translation>
    </message>
  </context>
  <context>
    <name>QgsComposerLabelBase</name>
    <message>
      <source>Label Options</source>
      <translation>Opciones de etiqueta</translation>
    </message>
    <message>
      <source>Box</source>
      <translation>Cajetín</translation>
    </message>
    <message>
      <source>Font</source>
      <translation>Fuente</translation>
    </message>
  </context>
  <context>
    <name>QgsComposerMap</name>
    <message>
      <source>Map %1</source>
      <translation> Mapa %1</translation>
    </message>
    <message>
      <source>Extent (calculate scale)</source>
      <translation>Extensión (calcular escala)</translation>
    </message>
    <message>
      <source>Scale (calculate extent)</source>
      <translation>Escala (calcular extensión)</translation>
    </message>
    <message>
      <source>Cache</source>
      <translation>Caché</translation>
    </message>
    <message>
      <source>Render</source>
      <translation>Representar</translation>
    </message>
    <message>
      <source>Rectangle</source>
      <translation>Rectángulo</translation>
    </message>
  </context>
  <context>
    <name>QgsComposerMapBase</name>
    <message>
      <source>Map options</source>
      <translation>Opciones de mapa</translation>
    </message>
    <message>
      <source>&lt;b>Map&lt;/b></source>
      <translation>&lt;b>Mapa&lt;/b></translation>
    </message>
    <message>
      <source>Set</source>
      <translation>Establecer</translation>
    </message>
    <message>
      <source>Width</source>
      <translation>Anchura</translation>
    </message>
    <message>
      <source>Height</source>
      <translation>Altura</translation>
    </message>
    <message>
      <source>Set map extent to current extent in QGIS map canvas</source>
      <translation>Establecer la extensión del mapa a la extensión actual en la vista del mapa de QGIS</translation>
    </message>
    <message>
      <source>Set Extent</source>
      <translation>Establecer extensión</translation>
    </message>
    <message>
      <source>Line width scale</source>
      <translation>Escala del ancho de línea</translation>
    </message>
    <message>
      <source>Width of one unit in millimeters</source>
      <translation>Anchura de una unidad en milímetros</translation>
    </message>
    <message>
      <source>Symbol scale</source>
      <translation>Escala del símbolo</translation>
    </message>
    <message>
      <source>Font size scale</source>
      <translation>Escala del tamaño de fuente</translation>
    </message>
    <message>
      <source>Frame</source>
      <translation>Marco</translation>
    </message>
    <message>
      <source>Preview</source>
      <translation>Previsualizar</translation>
    </message>
    <message>
      <source>1:</source>
      <translation>1:</translation>
    </message>
    <message>
      <source>Scale:</source>
      <translation>Escala:</translation>
    </message>
  </context>
  <context>
    <name>QgsComposerPicture</name>
    <message>
      <source>Warning</source>
      <translation>Atención</translation>
    </message>
    <message>
      <source>Cannot load picture.</source>
      <translation>No se puede cargar el dibujo.</translation>
    </message>
    <message>
      <source>Pictures (</source>
      <translation>Dibujos (</translation>
    </message>
    <message>
      <source>Choose a file</source>
      <translation>Seleccionar un archivo</translation>
    </message>
  </context>
  <context>
    <name>QgsComposerPictureBase</name>
    <message>
      <source>Picture Options</source>
      <translation>Opciones de dibujo</translation>
    </message>
    <message>
      <source>Frame</source>
      <translation>Marco</translation>
    </message>
    <message>
      <source>Angle</source>
      <translation>Ángulo</translation>
    </message>
    <message>
      <source>Width</source>
      <translation>Anchura</translation>
    </message>
    <message>
      <source>Height</source>
      <translation>Altura</translation>
    </message>
    <message>
      <source>Browse</source>
      <translation>Explorar</translation>
    </message>
  </context>
  <context>
    <name>QgsComposerScalebarBase</name>
    <message>
      <source>Barscale Options</source>
      <translation>Opciones de la barra de escala</translation>
    </message>
    <message>
      <source>Segment size</source>
      <translation>Tamaño de segmento</translation>
    </message>
    <message>
      <source>Number of segments</source>
      <translation>Número de segmentos</translation>
    </message>
    <message>
      <source>Map units per scalebar unit</source>
      <translation>Unidades de mapa por unidad de barra de escala</translation>
    </message>
    <message>
      <source>Unit label</source>
      <translation>Etiqueta de unidad</translation>
    </message>
    <message>
      <source>Map</source>
      <translation>Mapa</translation>
    </message>
    <message>
      <source>Font</source>
      <translation>Fuente</translation>
    </message>
    <message>
      <source>Line width</source>
      <translation>Ancho de línea</translation>
    </message>
  </context>
  <context>
    <name>QgsComposerVectorLegend</name>
    <message>
      <source>Legend</source>
      <translation>Leyenda</translation>
    </message>
    <message>
      <source>Layers</source>
      <translation>Capas</translation>
    </message>
    <message>
      <source>Group</source>
      <translation>Grupo</translation>
    </message>
    <message>
      <source>Combine selected layers</source>
      <translation>Combinar capas seleccionadas</translation>
    </message>
    <message>
      <source>Cache</source>
      <translation>Caché</translation>
    </message>
    <message>
      <source>Render</source>
      <translation>Representar</translation>
    </message>
    <message>
      <source>Rectangle</source>
      <translation>Rectángulo</translation>
    </message>
  </context>
  <context>
    <name>QgsComposerVectorLegendBase</name>
    <message>
      <source>Vector Legend Options</source>
      <translation>Opciones de leyenda vectorizada</translation>
    </message>
    <message>
      <source>Title</source>
      <translation>Título</translation>
    </message>
    <message>
      <source>Map</source>
      <translation>Mapa</translation>
    </message>
    <message>
      <source>Font</source>
      <translation>Fuente</translation>
    </message>
    <message>
      <source>Box</source>
      <translation>Cajetín</translation>
    </message>
    <message>
      <source>Column 1</source>
      <translation>Columna 1</translation>
    </message>
    <message>
      <source>Preview</source>
      <translation>Previsualización</translation>
    </message>
  </context>
  <context>
    <name>QgsComposition</name>
    <message>
      <source>Custom</source>
      <translation>Personalizado</translation>
    </message>
    <message>
      <source>A5 (148x210 mm)</source>
      <translation>A5 (148x210 mm)</translation>
    </message>
    <message>
      <source>A4 (210x297 mm)</source>
      <translation>A4 (210x297 mm)</translation>
    </message>
    <message>
      <source>A3 (297x420 mm)</source>
      <translation>A3 (297x420 mm)</translation>
    </message>
    <message>
      <source>A2 (420x594 mm)</source>
      <translation>A2 (420x594 mm)</translation>
    </message>
    <message>
      <source>A1 (594x841 mm)</source>
      <translation>A1 (594x841 mm)</translation>
    </message>
    <message>
      <source>A0 (841x1189 mm)</source>
      <translation>A0 (841x1189 mm)</translation>
    </message>
    <message>
      <source>B5 (176 x 250 mm)</source>
      <translation>B5 (176 x 250 mm)</translation>
    </message>
    <message>
      <source>B4 (250 x 353 mm)</source>
      <translation>B4 (250 x 353 mm)</translation>
    </message>
    <message>
      <source>B3 (353 x 500 mm)</source>
      <translation>B3 (353 x 500 mm)</translation>
    </message>
    <message>
      <source>B2 (500 x 707 mm)</source>
      <translation>B2 (500 x 707 mm)</translation>
    </message>
    <message>
      <source>B1 (707 x 1000 mm)</source>
      <translation>B1 (707 x 1000 mm)</translation>
    </message>
    <message>
      <source>B0 (1000 x 1414 mm)</source>
      <translation>B0 (1000 x 1414 mm)</translation>
    </message>
    <message>
      <source>Letter (8.5x11 inches)</source>
      <translation>Carta (8.5x11 pulgadas)</translation>
    </message>
    <message>
      <source>Legal (8.5x14 inches)</source>
      <translation>Legal (8.5x14 pulgadas)</translation>
    </message>
    <message>
      <source>Portrait</source>
      <translation>Vertical</translation>
    </message>
    <message>
      <source>Landscape</source>
      <translation>Horizontal</translation>
    </message>
    <message>
      <source>Out of memory</source>
      <translation>Sin memoria</translation>
    </message>
    <message>
      <source>Qgis is unable to resize the paper size due to insufficient memory.
 It is best that you avoid using the map composer until you restart qgis.
</source>
      <translation>Qgis no puede cambiar el tamaño del papel debido a una falta de memoria.
 Es mejor que no utilice el diseñador de mapas hasta que reinicie qgis.
</translation>
    </message>
    <message>
      <source>Label</source>
      <translation>Etiqueta</translation>
    </message>
    <message>
      <source>Warning</source>
      <translation>Atención</translation>
    </message>
    <message>
      <source>Cannot load picture.</source>
      <translation>No se puede cargar el dibujo.</translation>
    </message>
  </context>
  <context>
    <name>QgsCompositionBase</name>
    <message>
      <source>Composition</source>
      <translation>Diseño</translation>
    </message>
    <message>
      <source>Paper</source>
      <translation>Papel</translation>
    </message>
    <message>
      <source>Size</source>
      <translation>Tamaño</translation>
    </message>
    <message>
      <source>Units</source>
      <translation>Unidades</translation>
    </message>
    <message>
      <source>Width</source>
      <translation>Anchura</translation>
    </message>
    <message>
      <source>Height</source>
      <translation>Altura</translation>
    </message>
    <message>
      <source>Orientation</source>
      <translation>Orientación</translation>
    </message>
    <message>
      <source>Resolution (dpi)</source>
      <translation>Resolución (ppp)</translation>
    </message>
  </context>
  <context>
    <name>QgsConnectionDialog</name>
    <message>
      <source>Test connection</source>
      <translation>Probar conexión</translation>
    </message>
    <message>
      <source>Connection to </source>
      <translation>La conexión a </translation>
    </message>
    <message>
      <source> was successfull</source>
      <translation> ha sido correcta</translation>
    </message>
    <message>
      <source>Connection failed - Check settings and try again </source>
      <translation>La conexión ha fallado - Compruebe la configuración y pruebe de nuevo </translation>
    </message>
    <message>
      <source>General Interface Help:

</source>
      <translation>Ayuda de la interfaz general:

</translation>
    </message>
  </context>
  <context>
    <name>QgsConnectionDialogBase</name>
    <message>
      <source>Create a New PostGIS connection</source>
      <translation>Crear una nueva conexión a PostGIS</translation>
    </message>
    <message>
      <source>Connection Information</source>
      <translation>Información de la conexión</translation>
    </message>
    <message>
      <source>Save Password</source>
      <translation>Guardar contraseña</translation>
    </message>
    <message>
      <source>Test Connect</source>
      <translation>Probar conexión</translation>
    </message>
    <message>
      <source>Name</source>
      <translation>Nombre</translation>
    </message>
    <message>
      <source>Host</source>
      <translation>Servidor</translation>
    </message>
    <message>
      <source>Database</source>
      <translation>Base de datos</translation>
    </message>
    <message>
      <source>Port</source>
      <translation>Puerto</translation>
    </message>
    <message>
      <source>Username</source>
      <translation>Nombre de usuario</translation>
    </message>
    <message>
      <source>Password</source>
      <translation>Contraseña</translation>
    </message>
    <message>
      <source>Name of the new connection</source>
      <translation>Nombre de la nueva conexión</translation>
    </message>
    <message>
      <source>5432</source>
      <translation>5432</translation>
    </message>
  </context>
  <context>
    <name>QgsContinuousColorDialogBase</name>
    <message>
      <source>Continuous color</source>
      <translation>Color graduado</translation>
    </message>
    <message>
      <source>Draw polygon outline</source>
      <translation>Dibujar contorno del polígono</translation>
    </message>
    <message>
      <source>Classification Field:</source>
      <translation>Campo de clasificación:</translation>
    </message>
    <message>
      <source>Minimum Value:</source>
      <translation>Valor mínimo:</translation>
    </message>
    <message>
      <source>Outline Width:</source>
      <translation>Anchura del contorno:</translation>
    </message>
    <message>
      <source>Maximum Value:</source>
      <translation>Valor máximo:</translation>
    </message>
  </context>
  <context>
    <name>QgsCoordinateTransform</name>
    <message>
      <source>The source spatial reference system (SRS) is not valid. </source>
      <translation>El sistema espacial de referencia (SRS) de origen no es válido. </translation>
    </message>
    <message>
      <source>The coordinates can not be reprojected. The SRS is: </source>
      <translation>Las coordenadas no se pueden reproyectar. El SRS es: </translation>
    </message>
    <message>
      <source>The destination spatial reference system (SRS) is not valid. </source>
      <translation>El sistema espacial de referencia (SRS) de destino no es válido. </translation>
    </message>
    <message>
      <source>Failed</source>
      <translation>Ha fallado</translation>
    </message>
    <message>
      <source>transform of</source>
      <translation>la transformación de</translation>
    </message>
    <message>
      <source>with error: </source>
      <translation>con el error: </translation>
    </message>
  </context>
  <context>
    <name>QgsCopyrightLabelPlugin</name>
    <message>
      <source>Bottom Left</source>
      <translation>Inferior izquierda</translation>
    </message>
    <message>
      <source>Top Left</source>
      <translation>Superior izquierda</translation>
    </message>
    <message>
      <source>Top Right</source>
      <translation>Superior derecha</translation>
    </message>
    <message>
      <source>Bottom Right</source>
      <translation>Inferior derecha</translation>
    </message>
    <message>
      <source>&amp;Copyright Label</source>
      <translation>Etiqueta de &amp;Copyright</translation>
    </message>
    <message>
      <source>Creates a copyright label that is displayed on the map canvas.</source>
      <translation>Crea una etiqueta de copyright que se muestra en la vista del mapa.</translation>
    </message>
    <message>
      <source>&amp;Decorations</source>
      <translation>&amp;Ilustraciones</translation>
    </message>
  </context>
  <context>
    <name>QgsCopyrightLabelPluginGuiBase</name>
    <message>
      <source>Copyright Label Plugin</source>
      <translation>Complemento etiqueta de copyright</translation>
    </message>
    <message>
      <source>Placement</source>
      <translation>Ubicación</translation>
    </message>
    <message>
      <source>Bottom Left</source>
      <translation>Inferior izquierda</translation>
    </message>
    <message>
      <source>Top Left</source>
      <translation>Superior izquierda</translation>
    </message>
    <message>
      <source>Bottom Right</source>
      <translation>Inferior derecha</translation>
    </message>
    <message>
      <source>Top Right</source>
      <translation>Superior derecha</translation>
    </message>
    <message>
      <source>Orientation</source>
      <translation>Orientación</translation>
    </message>
    <message>
      <source>Horizontal</source>
      <translation>Horizontal</translation>
    </message>
    <message>
      <source>Vertical</source>
      <translation>Vertical</translation>
    </message>
    <message>
      <source>Enable Copyright Label</source>
      <translation>Activar etiqueta de copyright</translation>
    </message>
    <message>
      <source>Color</source>
      <translation>Color</translation>
    </message>
    <message>
      <source>&lt;html>&lt;head>&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; />&lt;style type=&quot;text/css&quot;>
p, li { white-space: pre-wrap; }
&lt;/style>&lt;/head>&lt;body style=&quot; font-family:'Sans Serif'; font-size:9pt; font-weight:400; font-style:normal; text-decoration:none;&quot;>
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;>&lt;span style=&quot; font-size:12pt;&quot;>Description&lt;/span>&lt;/p>
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;>&lt;/p>
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;>Enter your copyright label below. This plugin supports basic html markup tags for formatting the label. For example:&lt;/p>
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;>&lt;span style=&quot; font-weight:600;&quot;>&amp;lt;B&amp;gt; Bold text &amp;lt;/B&amp;gt; &lt;/span>&lt;/p>
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-weight:600;&quot;>&lt;span style=&quot; font-weight:400; font-style:italic;&quot;>&amp;lt;I&amp;gt; Italics &amp;lt;/I&amp;gt;&lt;/span>&lt;/p>
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-style:italic;&quot;>&lt;span style=&quot; font-style:normal;&quot;>(note: &amp;amp;copy; gives a copyright symbol)&lt;/span>&lt;/p>&lt;/body>&lt;/html></source>
      <translation>&lt;html>&lt;head>&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; />&lt;style type=&quot;text/css&quot;>
p, li { white-space: pre-wrap; }
&lt;/style>&lt;/head>&lt;body style=&quot; font-family:'Sans Serif'; font-size:9pt; font-weight:400; font-style:normal; text-decoration:none;&quot;>
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;>&lt;span style=&quot; font-size:12pt;&quot;>Descripción&lt;/span>&lt;/p>
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;>&lt;/p>
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;>Introduzca su etiqueta de copyright debajo. Este complemento soporta etiquetas básicas html para formatear la etiqueta. Por ejemplo:&lt;/p>
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;>&lt;span style=&quot; font-weight:600;&quot;>&amp;lt;B&amp;gt; Texto en negritas  &amp;lt;/B&amp;gt; &lt;/span>&lt;/p>
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-weight:600;&quot;>&lt;span style=&quot; font-weight:400; font-style:italic;&quot;>&amp;lt;I&amp;gt; Cursivas &amp;lt;/I&amp;gt;&lt;/span>&lt;/p>
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-style:italic;&quot;>&lt;span style=&quot; font-style:normal;&quot;>(nota: &amp;amp;copy; da un símbolo de copyright&lt;/span>&lt;/p>&lt;/body>&lt;/html></translation>
    </message>
    <message>
      <source>© QGIS 2008</source>
      <translation>© QGIS 2008</translation>
    </message>
  </context>
  <context>
    <name>QgsCustomProjectionDialog</name>
    <message>
      <source>Delete Projection Definition?</source>
      <translation>¿Borrar definición de proyección?</translation>
    </message>
    <message>
      <source>Deleting a projection definition is not reversable. Do you want to delete it?</source>
      <translation>Borrar una definición de proyección no es reversible. ¿Desea continuar?</translation>
    </message>
    <message>
      <source>Abort</source>
      <translation>Abortar</translation>
    </message>
    <message>
      <source>New</source>
      <translation>Nueva</translation>
    </message>
    <message>
      <source>QGIS Custom Projection</source>
      <translation>Proyección personalizada de QGIS</translation>
    </message>
    <message>
      <source>This proj4 projection definition is not valid. Please give the projection a name before pressing save.</source>
      <translation>Esta definición de proyección proj4 no es válida. Por favor, dele un nombre a la proyección antes de guardar.</translation>
    </message>
    <message>
      <source>This proj4 projection definition is not valid. Please add the parameters before pressing save.</source>
      <translation>Esta definición de proyección proj4 no es válida. Por favor, rellene los parámetros antes de guardar.</translation>
    </message>
    <message>
      <source>This proj4 projection definition is not valid. Please add a proj= clause before pressing save.</source>
      <translation>Esta definición de proyección proj4 no es válida. Por favor, añada una cláusula proj= antes de guardar.</translation>
    </message>
    <message>
      <source>This proj4 ellipsoid definition is not valid. Please add a ellips= clause before pressing save.</source>
      <translation>Esta definición de proyección proj4 no es válida. Por favor, añada una cláusula ellips= antes de guardar.</translation>
    </message>
    <message>
      <source>This proj4 projection definition is not valid. Please correct before pressing save.</source>
      <translation>Esta definición de proyección proj4 no es válida. Por favor, corregir antes de guardar.</translation>
    </message>
    <message>
      <source>This proj4 projection definition is not valid.</source>
      <translation>Esta definición de proyección proj4 no es válida.</translation>
    </message>
    <message>
      <source>Northing and Easthing must be in decimal form.</source>
      <translation>El Norte y el Este deben estar en formato decimal.</translation>
    </message>
    <message>
      <source>Internal Error (source projection invalid?)</source>
      <translation>Error interno (¿la proyección original no es válida?)</translation>
    </message>
  </context>
  <context>
    <name>QgsCustomProjectionDialogBase</name>
    <message>
      <source>Custom Projection Definition</source>
      <translation>Definición de proyección personalizada</translation>
    </message>
    <message>
      <source>Define</source>
      <translation>Definición</translation>
    </message>
    <message>
      <source>Parameters:</source>
      <translation>Parámetros:</translation>
    </message>
    <message>
      <source>|&lt;</source>
      <translation>|&lt;</translation>
    </message>
    <message>
      <source>&lt;</source>
      <translation>&lt;</translation>
    </message>
    <message>
      <source>1 of 1</source>
      <translation>1 de 1</translation>
    </message>
    <message>
      <source>></source>
      <translation>></translation>
    </message>
    <message>
      <source>>|</source>
      <translation>>|</translation>
    </message>
    <message>
      <source>New</source>
      <translation>Nueva</translation>
    </message>
    <message>
      <source>Save</source>
      <translation>Guardar</translation>
    </message>
    <message>
      <source>Delete</source>
      <translation>Borrar</translation>
    </message>
    <message>
      <source>Close</source>
      <translation>Cerrar</translation>
    </message>
    <message>
      <source>Name:</source>
      <translation>Nombre:</translation>
    </message>
    <message>
      <source>Test</source>
      <translation>Probar</translation>
    </message>
    <message>
      <source>Transform from WGS84 to the chosen projection</source>
      <translation>Transformar de WGS84 a la proyección elegida</translation>
    </message>
    <message>
      <source>Geographic / WGS84</source>
      <translation>Geográficas / WGS84</translation>
    </message>
    <message>
      <source>East:</source>
      <translation>Este:</translation>
    </message>
    <message>
      <source>North:</source>
      <translation>Norte:</translation>
    </message>
    <message>
      <source>Calculate</source>
      <translation>Calcular</translation>
    </message>
    <message>
      <source>You can define your own custom projection here. The definition must conform to the proj4 format for specifying a Spatial Reference System.</source>
      <translation>Puede definir su propia proyección personalizada aquí. La definición debe ajustarse al formato proj4 para especificar un sistema de referencia espacial.</translation>
    </message>
    <message>
      <source>Use the text boxes below to test the projection definition you are creating. Enter a coordinate where both the lat/long and the projected result are known (for example by reading off a map). Then press the calculate button to see if the projection definition you are creating is accurate.</source>
      <translation>Use los cuadros de texto de abajo para probar la definición de proyección que esté creando. Introduzca una coordenada en la que la tanto lat/long como el resultado proyectado sean conocidos (por ejemplo tomándolos de un mapa). A continuación pulse el botón calcular para ver su la definición de proyección que ha creado es exacta.</translation>
    </message>
    <message>
      <source>Projected Coordinate System</source>
      <translation>Sistema de coordenadas proyectado</translation>
    </message>
  </context>
  <context>
    <name>QgsDbSourceSelect</name>
    <message>
      <source>Type</source>
      <translation>Tipo</translation>
    </message>
    <message>
      <source>Sql</source>
      <translation>Sql</translation>
    </message>
    <message>
      <source>Are you sure you want to remove the </source>
      <translation>¿Está seguro de que quiere eliminar la conexión </translation>
    </message>
    <message>
      <source> connection and all associated settings?</source>
      <translation> y su configuración?</translation>
    </message>
    <message>
      <source>Confirm Delete</source>
      <translation>Confirmar la eliminación</translation>
    </message>
    <message>
      <source>Select Table</source>
      <translation>Seleccionar tabla</translation>
    </message>
    <message>
      <source>You must select a table in order to add a Layer.</source>
      <translation>Debe seleccionar una tabla para poder añadir una capa.</translation>
    </message>
    <message>
      <source>Password for </source>
      <translation>Contraseña para </translation>
    </message>
    <message>
      <source>Please enter your password:</source>
      <translation>Por favor, introduzca su contraseña:</translation>
    </message>
    <message>
      <source>Connection failed</source>
      <translation>Conexión fallida</translation>
    </message>
    <message>
      <source>Connection to %1 on %2 failed. Either the database is down or your settings are incorrect.%3Check your username and password and try again.%4The database said:%5%6</source>
      <translation>La conexión a %1 en %2 ha fallado. Puede ser que la base de datos esté inactiva o que su configuración sea incorrecta.%3Compruebe el nombre de usuario y la contraseña y pruebe de nuevo.%4La base de datos ha dicho:%5%6</translation>
    </message>
    <message>
      <source>Wildcard</source>
      <translation>Comodín</translation>
    </message>
    <message>
      <source>RegExp</source>
      <translation>Expresión regular</translation>
    </message>
    <message>
      <source>All</source>
      <translation>Todos</translation>
    </message>
    <message>
      <source>Schema</source>
      <translation>Esquema</translation>
    </message>
    <message>
      <source>Table</source>
      <translation>Tabla</translation>
    </message>
    <message>
      <source>Geometry column</source>
      <translation>Columna de geometría</translation>
    </message>
  </context>
  <context>
    <name>QgsDbSourceSelectBase</name>
    <message>
      <source>Add PostGIS Table(s)</source>
      <translation>Añadir tabla(s) PostGIS</translation>
    </message>
    <message>
      <source>Help</source>
      <translation>Ayuda</translation>
    </message>
    <message>
      <source>F1</source>
      <translation>F1</translation>
    </message>
    <message>
      <source>Add</source>
      <translation>Añadir</translation>
    </message>
    <message>
      <source>Close</source>
      <translation>Cerrar</translation>
    </message>
    <message>
      <source>PostgreSQL Connections</source>
      <translation>Conexiones de PostgreSQL</translation>
    </message>
    <message>
      <source>Delete</source>
      <translation>Borrar</translation>
    </message>
    <message>
      <source>Edit</source>
      <translation>Editar</translation>
    </message>
    <message>
      <source>New</source>
      <translation>Nueva</translation>
    </message>
    <message>
      <source>Connect</source>
      <translation>Conectar</translation>
    </message>
    <message>
      <source>Search:</source>
      <translation>Buscar:</translation>
    </message>
    <message>
      <source>Search mode:</source>
      <translation>Modo de búsqueda:</translation>
    </message>
    <message>
      <source>Search in columns:</source>
      <translation>Buscar en columnas:</translation>
    </message>
    <message>
      <source>Search options...</source>
      <translation>Opciones de búsqueda...</translation>
    </message>
  </context>
  <context>
    <name>QgsDbTableModel</name>
    <message>
      <source>Schema</source>
      <translation>Esquema</translation>
    </message>
    <message>
      <source>Table</source>
      <translation>Tabla</translation>
    </message>
    <message>
      <source>Type</source>
      <translation>Tipo</translation>
    </message>
    <message>
      <source>Geometry column</source>
      <translation>Columna de geometría</translation>
    </message>
    <message>
      <source>Sql</source>
      <translation>Sql</translation>
    </message>
    <message>
      <source>Point</source>
      <translation>Punto</translation>
    </message>
    <message>
      <source>Multipoint</source>
      <translation>Múltiples puntos</translation>
    </message>
    <message>
      <source>Line</source>
      <translation>Línea</translation>
    </message>
    <message>
      <source>Multiline</source>
      <translation>Múltiples línea</translation>
    </message>
    <message>
      <source>Polygon</source>
      <translation>Polígono</translation>
    </message>
    <message>
      <source>Multipolygon</source>
      <translation>Múltiples polígono</translation>
    </message>
  </context>
  <context>
    <name>QgsDelAttrDialogBase</name>
    <message>
      <source>Delete Attributes</source>
      <translation>Borrar atributos</translation>
    </message>
    <message>
      <source>OK</source>
      <translation>Aceptar</translation>
    </message>
    <message>
      <source>Cancel</source>
      <translation>Cancelar</translation>
    </message>
  </context>
  <context>
    <name>QgsDelimitedTextPlugin</name>
    <message>
      <source>&amp;Add Delimited Text Layer</source>
      <translation>&amp;Añadir capa de texto delimitado</translation>
    </message>
    <message>
      <source>Add a delimited text file as a map layer. </source>
      <translation>Añade una capa de texto delimitado como una capa del mapa. </translation>
    </message>
    <message>
      <source>The file must have a header row containing the field names. </source>
      <translation>El archivo debe tener una fila de encabezado con los nombres de los campos. </translation>
    </message>
    <message>
      <source>X and Y fields are required and must contain coordinates in decimal units.</source>
      <translation>Los campos X e Y son necesarios y deben contener las coordenadas en unidades decimales.</translation>
    </message>
    <message>
      <source>&amp;Delimited text</source>
      <translation>&amp;Texto delimitado</translation>
    </message>
    <message>
      <source>DelimitedTextLayer</source>
      <translation>CapaDeTextoDelimitado</translation>
    </message>
  </context>
  <context>
    <name>QgsDelimitedTextPluginGui</name>
    <message>
      <source>No layer name</source>
      <translation>Ningún nombre de capa</translation>
    </message>
    <message>
      <source>Please enter a layer name before adding the layer to the map</source>
      <translation>Por favor, introduzca un nombre para la capa antes de añadir ésta al mapa</translation>
    </message>
    <message>
      <source>No delimiter</source>
      <translation>No hay delimitador</translation>
    </message>
    <message>
      <source>Please specify a delimiter prior to parsing the file</source>
      <translation>Por favor, especifique un delimitador antes de analizar el archivo</translation>
    </message>
    <message>
      <source>Choose a delimited text file to open</source>
      <translation>Seleccione un archivo de texto delimitado para abrir</translation>
    </message>
    <message>
      <source>Parse</source>
      <translation>Analizar</translation>
    </message>
    <message>
      <source>Description</source>
      <translation>Descripción</translation>
    </message>
    <message>
      <source>Select a delimited text file containing a header row and one or more rows of x and y coordinates that you would like to use as a point layer and this plugin will do the job for you!</source>
      <translation>Seleccione un archivo de texto delimitado que contenga una fila de encabezado y una o más filas de coordenadas X e Y que quiera usar como capa de puntos y este complemento hará el trabajo por usted.</translation>
    </message>
    <message>
      <source>Use the layer name box to specify the legend name for the new layer. Use the delimiter box to specify what delimeter is used in your file (e.g. space, comma, tab or a regular expression in Perl style). After choosing a delimiter, press the parse button and select the columns containing the x and y values for the layer.</source>
      <translation>Use el recuadro Nombre de la capa para especificar el nombre de la nueva capa en la leyenda. Use el recuadro delimitador para especificar qué delimitador se usa en su archivo ej.: espacio, coma, tabulador o una expresión regular en estilo Perl). Después de elegir un delimitador, pulse el botón Analizar y seleccione las columnas que contienen los valores X e Y para la capa.</translation>
    </message>
  </context>
  <context>
    <name>QgsDelimitedTextPluginGuiBase</name>
    <message>
      <source>Create a Layer from a Delimited Text File</source>
      <translation>Crear una capa a partir de un archivo de texto delimitado</translation>
    </message>
    <message>
      <source>&lt;p align=&quot;right&quot;>X field&lt;/p></source>
      <translation>&lt;p align=&quot;right&quot;>Coordenada X&lt;/p></translation>
    </message>
    <message>
      <source>Name of the field containing x values</source>
      <translation>Nombre del campo que contiene los valores de la X</translation>
    </message>
    <message>
      <source>Name of the field containing x values. Choose a field from the list. The list is generated by parsing the header row of the delimited text file.</source>
      <translation>Nombre del campo que contiene los valores de la X. Seleccione un campo de la lista. La lista se genera al analizar la fila de encabezado del archivo de texto delimitado.</translation>
    </message>
    <message>
      <source>&lt;p align=&quot;right&quot;>Y field&lt;/p></source>
      <translation>&lt;p align=&quot;right&quot;>Coordenada Y&lt;/p></translation>
    </message>
    <message>
      <source>Name of the field containing y values</source>
      <translation>Nombre del campo que contiene los valores de la Y</translation>
    </message>
    <message>
      <source>Name of the field containing y values. Choose a field from the list. The list is generated by parsing the header row of the delimited text file.</source>
      <translation>Nombre del campo que contiene los valores de la Y. Seleccione un campo de la lista. La lista se genera al analizar la fila de encabezado del archivo de texto delimitado.</translation>
    </message>
    <message>
      <source>Sample text</source>
      <translation>Texto de muestra</translation>
    </message>
    <message>
      <source>Delimited Text Layer</source>
      <translation>Capa de texto delimitado</translation>
    </message>
    <message>
      <source>Delimited text file</source>
      <translation>Archivo de texto delimitado</translation>
    </message>
    <message>
      <source>Full path to the delimited text file</source>
      <translation>Ruta completa al archivo de texto delimitado</translation>
    </message>
    <message>
      <source>Full path to the delimited text file. In order to properly parse the fields in the file, the delimiter must be defined prior to entering the file name. Use the Browse button to the right of this field to choose the input file.</source>
      <translation>Ruta completa al archivo de texto delimitado. Para poder analizar los campos del archivo correctamente, el delimitador debe definirse antes de introducir el nombre del archivo. Utilice el botón Explorar situado a la derecha de este campo para seleccionar el archivo de entrada.</translation>
    </message>
    <message>
      <source>Browse to find the delimited text file to be processed</source>
      <translation>Explorar para buscar el archivo de texto delimitado a procesar</translation>
    </message>
    <message>
      <source>Use this button to browse to the location of the delimited text file. This button will not be enabled until a delimiter has been entered in the &lt;i>Delimiter&lt;/i> box. Once a file is chosen, the X and Y field drop-down boxes will be populated with the fields from the delimited text file.</source>
      <translation>Use este botón para buscar el archivo de texto. Este botón no se activará hasta que se haya introducido un delimitador en el recuadro &lt;i> Delimitador&lt;/i>. Una vez que se ha seleccionado un archivo, los cuadros combinados de las coordenadas X e Y se rellenarán con los campos del archivo de texto delimitado.</translation>
    </message>
    <message>
      <source>Layer name</source>
      <translation>Nombre de la capa</translation>
    </message>
    <message>
      <source>Name to display in the map legend</source>
      <translation>Nombre para mostrar en la leyenda del mapa</translation>
    </message>
    <message>
      <source>Name displayed in the map legend</source>
      <translation>Nombre mostrado en la leyenda del mapa</translation>
    </message>
    <message>
      <source>Delimiter</source>
      <translation>Delimitador</translation>
    </message>
    <message>
      <source>Delimiter to use when splitting fields in the text file. The delimiter can be more than one character.</source>
      <translation>Delimitador a usar para dividir campos en el archivo de texto. El delimitador puede ser más de un carácter.</translation>
    </message>
    <message>
      <source>Delimiter to use when splitting fields in the delimited text file. The delimiter can be 1 or more characters in length.</source>
      <translation>Delimitador a usar para dividir campos en el archivo de texto. El delimitador puede tener uno o más caracteres.</translation>
    </message>
    <message>
      <source>Browse...</source>
      <translation>Explorar...</translation>
    </message>
    <message>
      <source>The delimiter is taken as is</source>
      <translation>El delimitador se toma tal como es</translation>
    </message>
    <message>
      <source>Plain characters</source>
      <translation>Caracteres sencillos</translation>
    </message>
    <message>
      <source>The delimiter is a regular expression</source>
      <translation>El delimitador es una expresión regular</translation>
    </message>
    <message>
      <source>Regular expression</source>
      <translation>Expresión regular</translation>
    </message>
  </context>
  <context>
    <name>QgsDelimitedTextProvider</name>
    <message>
      <source>Note: the following lines were not loaded because Qgis was unable to determine values for the x and y coordinates:
</source>
      <translation>Nota: las líneas siguientes no se han cargado porque Qgis no pudo determinar los valores de las coordenadas X e Y:
</translation>
    </message>
    <message>
      <source>Error</source>
      <translation>Error</translation>
    </message>
  </context>
  <context>
    <name>QgsDlgPgBufferBase</name>
    <message>
      <source>Buffer features</source>
      <translation>Crear buffer de objetos espaciales</translation>
    </message>
    <message>
      <source>Parameters</source>
      <translation>Parámetros</translation>
    </message>
    <message>
      <source>Geometry column:</source>
      <translation>Columna de la geometría:</translation>
    </message>
    <message>
      <source>Add the buffered layer to the map?</source>
      <translation>¿Añadir la capa de buffer al mapa?</translation>
    </message>
    <message>
      <source>Spatial reference ID:</source>
      <translation>ID de la referencia espacial:</translation>
    </message>
    <message>
      <source>Schema:</source>
      <translation>Esquema:</translation>
    </message>
    <message>
      <source>Unique field to use as feature id:</source>
      <translation>Campo único a utilizar como identificador:</translation>
    </message>
    <message>
      <source>Table name for the buffered layer:</source>
      <translation>Nombre de la tabla de la capa del buffer:</translation>
    </message>
    <message>
      <source>Create unique object id</source>
      <translation>Crear id de objetos único</translation>
    </message>
    <message>
      <source>public</source>
      <translation>público</translation>
    </message>
    <message>
      <source>Buffer distance in map units:</source>
      <translation>Distancia de buffer en unidades del mapa:</translation>
    </message>
    <message>
      <source>&lt;h2>Buffer the features in layer: &lt;/h2></source>
      <translation>&lt;h2>Crear buffer de los objetos espaciales de la capa: &lt;/h2></translation>
    </message>
  </context>
  <context>
    <name>QgsEditReservedWordsBase</name>
    <message>
      <source>Edit Reserved Words</source>
      <translation>Editar palabras reservadas</translation>
    </message>
    <message>
      <source>&lt;html>&lt;head>&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; />&lt;/head>&lt;body style=&quot; white-space: pre-wrap; font-family:Sans Serif; font-size:9pt; font-weight:400; font-style:normal; text-decoration:none;&quot;>&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;>Double click the Column Name column to change the name of the column.&lt;/p>&lt;/body>&lt;/html></source>
      <translation>&lt;html>&lt;head>&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; />&lt;/head>&lt;body style=&quot; white-space: pre-wrap; font-family:Sans Serif; font-size:9pt; font-weight:400; font-style:normal; text-decoration:none;&quot;>&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;>Pulsar dos veces sobre &quot;Nombre de Columna&quot; para cambiar el nombre de la columna.&lt;/p>&lt;/body>&lt;/html></translation>
    </message>
    <message>
      <source>Status</source>
      <translation>Estado</translation>
    </message>
    <message>
      <source>Column Name</source>
      <translation>Nombre de columna</translation>
    </message>
    <message>
      <source>Index</source>
      <translation>Índice</translation>
    </message>
    <message>
      <source>&lt;html>&lt;head>&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; />&lt;/head>&lt;body style=&quot; white-space: pre-wrap; font-family:Sans Serif; font-size:9pt; font-weight:400; font-style:normal; text-decoration:none;&quot;>&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;>This shapefile contains reserved words. These may affect the import into PostgreSQL. Edit the column names so none of the reserved words listed at the right are used (click on a Column Name entry to edit). You may also change any other column name if desired.&lt;/p>&lt;/body>&lt;/html></source>
      <translation>&lt;html>&lt;head>&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; />&lt;/head>&lt;body style=&quot; white-space: pre-wrap; font-family:Sans Serif; font-size:9pt; font-weight:400; font-style:normal; text-decoration:none;&quot;>&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;>Este archivo shape contiene palabras reservadas. Esto puede afectar a la importación a PostgreSQL. Edite los nombres de columna para que no se emplee ninguna de las palabras reservadas listadas a la derecha (pulsar sobre &quot;Nombre de Columna&quot; para editar). Si lo desea también puede cambiar cualquier otro nombre de columna.&lt;/p>&lt;/body>&lt;/html></translation>
    </message>
    <message>
      <source>Reserved Words</source>
      <translation>Palabras reservadas</translation>
    </message>
  </context>
  <context>
    <name>QgsEditReservedWordsDialog</name>
    <message>
      <source>Status</source>
      <translation>Estado</translation>
    </message>
    <message>
      <source>Column Name</source>
      <translation>Nombre de columna</translation>
    </message>
    <message>
      <source>Index</source>
      <translation>Índice</translation>
    </message>
  </context>
  <context>
    <name>QgsEncodingFileDialog</name>
    <message>
      <source>Encoding:</source>
      <translation>Codificación:</translation>
    </message>
  </context>
  <context>
    <name>QgsFillStyleWidgetBase</name>
    <message>
      <source>Form1</source>
      <translation>Form1</translation>
    </message>
    <message>
      <source>Fill Style</source>
      <translation>Estilo de relleno</translation>
    </message>
    <message>
      <source>col</source>
      <translation>col</translation>
    </message>
    <message>
      <source>Colour:</source>
      <translation>Color:</translation>
    </message>
    <message>
      <source>PolyStyleWidget</source>
      <translation>Estilo del polígono (PolyStyleWidget)</translation>
    </message>
  </context>
  <context>
    <name>QgsGPSDeviceDialog</name>
    <message>
      <source>New device %1</source>
      <translation>Nuevo receptor %1</translation>
    </message>
    <message>
      <source>Are you sure?</source>
      <translation>¿Está seguro?</translation>
    </message>
    <message>
      <source>Are you sure that you want to delete this device?</source>
      <translation>¿Está seguro de que quiere borrar este receptor?</translation>
    </message>
  </context>
  <context>
    <name>QgsGPSDeviceDialogBase</name>
    <message>
      <source>GPS Device Editor</source>
      <translation>Editor de receptores GPS</translation>
    </message>
    <message>
      <source>New device</source>
      <translation>Nuevo receptor</translation>
    </message>
    <message>
      <source>Delete device</source>
      <translation>Borrar receptor</translation>
    </message>
    <message>
      <source>Update device</source>
      <translation>Actualizar receptor</translation>
    </message>
    <message>
      <source>Device name:</source>
      <translation>Nombre del receptor:</translation>
    </message>
    <message>
      <source>This is the name of the device as it will appear in the lists</source>
      <translation>Así es como aparecerá el nombre del receptor en la lista</translation>
    </message>
    <message>
      <source>Commands</source>
      <translation>Comandos</translation>
    </message>
    <message>
      <source>Track download:</source>
      <translation>Descargar track:</translation>
    </message>
    <message>
      <source>Route upload:</source>
      <translation>Cargar ruta:</translation>
    </message>
    <message>
      <source>Waypoint download:</source>
      <translation>Descargar waypoint:</translation>
    </message>
    <message>
      <source>The command that is used to download routes from the device</source>
      <translation>El comando que se usa para descargar rutas del receptor</translation>
    </message>
    <message>
      <source>Route download:</source>
      <translation>Descargar ruta:</translation>
    </message>
    <message>
      <source>The command that is used to upload waypoints to the device</source>
      <translation>El comando que se usa para cargar waypoints al receptor</translation>
    </message>
    <message>
      <source>Track upload:</source>
      <translation>Cargar track:</translation>
    </message>
    <message>
      <source>The command that is used to download tracks from the device</source>
      <translation>El comando que se usa para descargar tracks del receptor</translation>
    </message>
    <message>
      <source>The command that is used to upload routes to the device</source>
      <translation>El comando que se usa para cargar rutas al receptor</translation>
    </message>
    <message>
      <source>The command that is used to download waypoints from the device</source>
      <translation>El comando que se usa para descargar waypoints del receptor</translation>
    </message>
    <message>
      <source>The command that is used to upload tracks to the device</source>
      <translation>El comando que se usa para cargar tracks al receptor</translation>
    </message>
    <message>
      <source>Waypoint upload:</source>
      <translation>Cargar waypoint:</translation>
    </message>
    <message>
      <source>&lt;html>&lt;head>&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; />&lt;/head>&lt;body style=&quot; white-space: pre-wrap; font-family:Sans Serif; font-size:9pt; font-weight:400; font-style:normal; text-decoration:none;&quot;>&lt;p style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;>In the download and upload commands there can be special words that will be replaced by QGIS when the commands are used. These words are:&lt;span style=&quot; font-style:italic;&quot;>%babel&lt;/span> - the path to GPSBabel&lt;br />&lt;span style=&quot; font-style:italic;&quot;>%in&lt;/span> - the GPX filename when uploading or the port when downloading&lt;br />&lt;span style=&quot; font-style:italic;&quot;>%out&lt;/span> - the port when uploading or the GPX filename when downloading&lt;/p>&lt;/body>&lt;/html></source>
      <translation>&lt;html>&lt;head>&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; />&lt;/head>&lt;body style=&quot; white-space: pre-wrap; font-family:Sans Serif; font-size:9pt; font-weight:400; font-style:normal; text-decoration:none;&quot;>&lt;p style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;>En los comandos para descargar y cargar puede haber palabras especiales que serán reemplazadas por QGIS cuando se utilicen estos comandos. Estas palabras son:&lt;span style=&quot; font-style:italic;&quot;>%babel&lt;/span> - ruta de GPSBabel&lt;br />&lt;span style=&quot; font-style:italic;&quot;>%dentro&lt;/span> - el nombre del archivo GPX cuando se está cargando o el puerto cuando se está descargando&lt;br />&lt;span style=&quot; font-style:italic;&quot;>%fuera&lt;/span> - el puerto cuando se está cargando o el nombre del archivo GPX cuando se está descargando&lt;/p>&lt;/body>&lt;/html></translation>
    </message>
    <message>
      <source>Close</source>
      <translation>Cerrar</translation>
    </message>
  </context>
  <context>
    <name>QgsGPSPlugin</name>
    <message>
      <source>&amp;Gps Tools</source>
      <translation>Herramientas &amp;GPS</translation>
    </message>
    <message>
      <source>&amp;Create new GPX layer</source>
      <translation>&amp;Crear nueva capa GPX</translation>
    </message>
    <message>
      <source>Creates a new GPX layer and displays it on the map canvas</source>
      <translation>Crea una capa GPX nueva y la muestra en la vista del mapa</translation>
    </message>
    <message>
      <source>&amp;Gps</source>
      <translation>&amp;GPS</translation>
    </message>
    <message>
      <source>Save new GPX file as...</source>
      <translation>Guardar nuevo archivo GPX como...</translation>
    </message>
    <message>
      <source>GPS eXchange file (*.gpx)</source>
      <translation>Archivo GPS eXchange (*.gpx)</translation>
    </message>
    <message>
      <source>Could not create file</source>
      <translation>No se pudo crear el archivo</translation>
    </message>
    <message>
      <source>Unable to create a GPX file with the given name. </source>
      <translation>No se puede crear un archivo GPX con este nombre. </translation>
    </message>
    <message>
      <source>Try again with another name or in another </source>
      <translation>Inténtelo de nuevo con otro nombre o en otro </translation>
    </message>
    <message>
      <source>directory.</source>
      <translation>directorio.</translation>
    </message>
    <message>
      <source>GPX Loader</source>
      <translation>Cargador de GPX</translation>
    </message>
    <message>
      <source>Unable to read the selected file.
</source>
      <translation>No se puede leer el archivo seleccionado.
</translation>
    </message>
    <message>
      <source>Please reselect a valid file.</source>
      <translation>Por favor, vuelva a seleccionar un archivo válido.</translation>
    </message>
    <message>
      <source>Could not start process</source>
      <translation>No se pudo iniciar el proceso</translation>
    </message>
    <message>
      <source>Could not start GPSBabel!</source>
      <translation>No se pudo iniciar GPSBabel</translation>
    </message>
    <message>
      <source>Importing data...</source>
      <translation>Importando datos...</translation>
    </message>
    <message>
      <source>Cancel</source>
      <translation>Cancelar</translation>
    </message>
    <message>
      <source>Could not import data from %1!

</source>
      <translation>No se pudieron importar datos de %1

</translation>
    </message>
    <message>
      <source>Error importing data</source>
      <translation>Error al importar datos</translation>
    </message>
    <message>
      <source>Not supported</source>
      <translation>No soportado</translation>
    </message>
    <message>
      <source>This device does not support downloading </source>
      <translation>Este receptor no soporta la descarga </translation>
    </message>
    <message>
      <source>of </source>
      <translation>de </translation>
    </message>
    <message>
      <source>Downloading data...</source>
      <translation>Descargando datos...</translation>
    </message>
    <message>
      <source>Could not download data from GPS!

</source>
      <translation>No se pudieron descargar datos del GPS

</translation>
    </message>
    <message>
      <source>Error downloading data</source>
      <translation>Error al descargar datos</translation>
    </message>
    <message>
      <source>This device does not support uploading of </source>
      <translation>Este receptor no soporta el cargar datos de </translation>
    </message>
    <message>
      <source>Uploading data...</source>
      <translation>Cargando datos...</translation>
    </message>
    <message>
      <source>Error while uploading data to GPS!

</source>
      <translation>Error al cargar datos al GPS

</translation>
    </message>
    <message>
      <source>Error uploading data</source>
      <translation>Error al cargar datos</translation>
    </message>
    <message>
      <source>Could not convert data from %1!

</source>
      <translation>¡No se pudieron convertir los datos desde %1!</translation>
    </message>
    <message>
      <source>Error converting data</source>
      <translation>Error al convertir datos</translation>
    </message>
  </context>
  <context>
    <name>QgsGPSPluginGui</name>
    <message>
      <source>Choose a filename to save under</source>
      <translation>Seleccione un nombre de archivo para guardar en</translation>
    </message>
    <message>
      <source>GPS eXchange format (*.gpx)</source>
      <translation>formato GPS eXchange (*.gpx)</translation>
    </message>
    <message>
      <source>Select GPX file</source>
      <translation>Seleccionar archivo GPX</translation>
    </message>
    <message>
      <source>Select file and format to import</source>
      <translation>Seleccionar archivo y formato a importar</translation>
    </message>
    <message>
      <source>Waypoints</source>
      <translation>Waypoints</translation>
    </message>
    <message>
      <source>Routes</source>
      <translation>Rutas</translation>
    </message>
    <message>
      <source>Tracks</source>
      <translation>Tracks</translation>
    </message>
    <message>
      <source>QGIS can perform conversions of GPX files, by using GPSBabel (%1) to perform the conversions.</source>
      <translation>QGIS puede realizar conversiones de archivos GPX, usando GPSBabel (%1) para hacer las conversiones.</translation>
    </message>
    <message>
      <source>This requires that you have GPSBabel installed where QGIS can find it.</source>
      <translation>Esto requiere que tenga instalado GPSBabel donde QGIS lo pueda encontrar</translation>
    </message>
    <message>
      <source>Select a GPX input file name, the type of conversion you want to perform, a GPX filename that you want to save the converted file as, and a name for the new layer created from the result.</source>
      <translation>Seleccione un nombre de archivo GPX de entrada, el tipo de conversión que quiere realizar, un nombre de archivo GPX con el que quiera guardar el archivo convertido y un nombre para la nueva capa creada a partir del resultado.</translation>
    </message>
    <message>
      <source>GPX is the %1, which is used to store information about waypoints, routes, and tracks.</source>
      <translation>GPX es el %1, que se usa para guardar información sobre waypoints, rutas y tracks.</translation>
    </message>
    <message>
      <source>GPS eXchange file format</source>
      <translation>Formato de archivo GPS eXchange</translation>
    </message>
    <message>
      <source>Select a GPX file and then select the feature types that you want to load.</source>
      <translation>Seleccione un archivo GPX y luego elija el tipo de objetos espaciales que quiere cargar.</translation>
    </message>
    <message>
      <source>This tool will help you download data from a GPS device.</source>
      <translation>Esta herramienta le ayudará a descargar datos de un receptor GPS.</translation>
    </message>
    <message>
      <source>Choose your GPS device, the port it is connected to, the feature type you want to download, a name for your new layer, and the GPX file where you want to store the data.</source>
      <translation>Seleccione su receptor GPS, el puerto al que está conectado, el tipo de objeto espacial que quiere descargar, un nombre para su nueva capa y el archivo GPX donde quiera guardar los datos.</translation>
    </message>
    <message>
      <source>If your device isn't listed, or if you want to change some settings, you can also edit the devices.</source>
      <translation>Si su receptor no está en la lista o si quiere cambiar alguna configuración, también puede editar los receptores.</translation>
    </message>
    <message>
      <source>This tool uses the program GPSBabel (%1) to transfer the data.</source>
      <translation>Esta herramienta usa el programa GPSBabel (%1) para transferir los datos.</translation>
    </message>
    <message>
      <source>This tool will help you upload data from a GPX layer to a GPS device.</source>
      <translation>Esta herramienta le ayudará a cargar datos de una capa GPX a un receptor GPS.</translation>
    </message>
    <message>
      <source>Choose the layer you want to upload, the device you want to upload it to, and the port your device is connected to.</source>
      <translation>Seleccione la capa que quiere cargar , el receptor en el que la quiere cargar y el puerto al que está conectado.</translation>
    </message>
    <message>
      <source>QGIS can only load GPX files by itself, but many other formats can be converted to GPX using GPSBabel (%1).</source>
      <translation>QGIS sólo puede cargar archivos GPX por si mismo, pero otros muchos formatos se pueden convertir a GPX usando GPSBabel (%1).</translation>
    </message>
    <message>
      <source>Select a GPS file format and the file that you want to import, the feature type that you want to use, a GPX filename that you want to save the converted file as, and a name for the new layer.</source>
      <translation>Seleccione un formato de archivo de GPS y el archivo que quiere importar, el tipo de objeto espacial que quiere usar, un nombre de archivo con el que quiera guardar el archivo convertido a GPX y un nombre para la nueva capa.</translation>
    </message>
    <message>
      <source>All file formats can not store waypoints, routes, and tracks, so some feature types may be disabled for some file formats.</source>
      <translation>No todos los formatos de archivo pueden guardar waypoints, rutas y tracks, por lo que algunos tipos de objeto espacial pueden estar deshabilitados para algunos formatos de archivo.</translation>
    </message>
  </context>
  <context>
    <name>QgsGPSPluginGuiBase</name>
    <message>
      <source>GPS Tools</source>
      <translation>Herramientas GPS</translation>
    </message>
    <message>
      <source>Load GPX file</source>
      <translation>Cargar archivo GPX</translation>
    </message>
    <message>
      <source>File:</source>
      <translation>Archivo:</translation>
    </message>
    <message>
      <source>Feature types:</source>
      <translation>Tipo de objetos espaciales:</translation>
    </message>
    <message>
      <source>Waypoints</source>
      <translation>Waypoints</translation>
    </message>
    <message>
      <source>Routes</source>
      <translation>Rutas</translation>
    </message>
    <message>
      <source>Tracks</source>
      <translation>Tracks</translation>
    </message>
    <message>
      <source>Import other file</source>
      <translation>Importar otro archivo</translation>
    </message>
    <message>
      <source>Layer name:</source>
      <translation>Nombre de la capa:</translation>
    </message>
    <message>
      <source>GPX output file:</source>
      <translation>Archivo de salida GPX:</translation>
    </message>
    <message>
      <source>Feature type:</source>
      <translation>Tipo de objeto espacial:</translation>
    </message>
    <message>
      <source>File to import:</source>
      <translation>Archivo a importar:</translation>
    </message>
    <message>
      <source>Download from GPS</source>
      <translation>Descargar desde GPS</translation>
    </message>
    <message>
      <source>Port:</source>
      <translation>Puerto:</translation>
    </message>
    <message>
      <source>Output file:</source>
      <translation>Archivo de salida:</translation>
    </message>
    <message>
      <source>GPS device:</source>
      <translation>Receptor GPS:</translation>
    </message>
    <message>
      <source>Edit devices</source>
      <translation>Editar receptores</translation>
    </message>
    <message>
      <source>Upload to GPS</source>
      <translation>Cargar al GPS</translation>
    </message>
    <message>
      <source>Data layer:</source>
      <translation>Capa de datos:</translation>
    </message>
    <message>
      <source>Browse...</source>
      <translation>Explorar...</translation>
    </message>
    <message>
      <source>Save As...</source>
      <translation>Guardar como...</translation>
    </message>
    <message>
      <source>(Note: Selecting correct file type in browser dialog important!)</source>
      <translation>(Nota: ¡Seleccionar el tipo de archivo correcto en el diálogo de exploración es importante!)</translation>
    </message>
    <message>
      <source>GPX Conversions</source>
      <translation>Conversiones GPX</translation>
    </message>
    <message>
      <source>Conversion:</source>
      <translation>Conversión:</translation>
    </message>
    <message>
      <source>GPX input file:</source>
      <translation>Archivo GPX de entrada:</translation>
    </message>
    <message>
      <source>&lt;html>&lt;head>&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; />&lt;style type=&quot;text/css&quot;>
p, li { white-space: pre-wrap; }
&lt;/style>&lt;/head>&lt;body style=&quot; font-family:'Sans Serif'; font-size:9pt; font-weight:400; font-style:normal; text-decoration:none;&quot;>
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;>&lt;/p>&lt;/body>&lt;/html></source>
      <translation type="unfinished" />
    </message>
  </context>
  <context>
    <name>QgsGPXProvider</name>
    <message>
      <source>Bad URI - you need to specify the feature type.</source>
      <translation>URI errónea - necesita especificar el tipo de objeto espacial.</translation>
    </message>
    <message>
      <source>GPS eXchange file</source>
      <translation>Archivo GPS eXchange</translation>
    </message>
    <message>
      <source>Digitized in QGIS</source>
      <translation>Digitalizado en QGIS</translation>
    </message>
  </context>
  <context>
    <name>QgsGeomTypeDialog</name>
    <message>
      <source>Name</source>
      <translation>Nombre</translation>
    </message>
    <message>
      <source>Type</source>
      <translation>Tipo</translation>
    </message>
  </context>
  <context>
    <name>QgsGeomTypeDialogBase</name>
    <message>
      <source>New Vector Layer</source>
      <translation>Nueva capa vectorial</translation>
    </message>
    <message>
      <source>File Format:</source>
      <translation>Formato de archivo:</translation>
    </message>
    <message>
      <source>Remove</source>
      <translation>Eliminar</translation>
    </message>
    <message>
      <source>Attributes:</source>
      <translation>Atributos:</translation>
    </message>
    <message>
      <source>Add</source>
      <translation>Añadir</translation>
    </message>
    <message>
      <source>Type</source>
      <translation>Tipo</translation>
    </message>
    <message>
      <source>Point</source>
      <translation>Punto</translation>
    </message>
    <message>
      <source>Line</source>
      <translation>Línea</translation>
    </message>
    <message>
      <source>Polygon</source>
      <translation>Polígono</translation>
    </message>
    <message>
      <source>Column 1</source>
      <translation>Columna 1</translation>
    </message>
  </context>
  <context>
    <name>QgsGeorefDescriptionDialogBase</name>
    <message>
      <source>Description georeferencer</source>
      <translation>Georreferenciador de descripción</translation>
    </message>
    <message>
      <source>&lt;html>&lt;head>&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; />&lt;style type=&quot;text/css&quot;>
p, li { white-space: pre-wrap; }
&lt;/style>&lt;/head>&lt;body style=&quot; font-family:'Sans Serif'; font-size:12pt; font-weight:400; font-style:normal; text-decoration:none;&quot;>
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;>&lt;span style=&quot; font-size:11pt; font-weight:600;&quot;>Description&lt;/span>&lt;/p>
&lt;p style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-size:9pt;&quot;>This plugin can generate world files for rasters. You select points on the raster and give their world coordinates, and the plugin will compute the world file parameters. The more coordinates you can provide the better the result will be.&lt;/p>&lt;/body>&lt;/html></source>
      <translation>&lt;html>&lt;head>&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; />&lt;style type=&quot;text/css&quot;>
p, li { white-space: pre-wrap; }
&lt;/style>&lt;/head>&lt;body style=&quot; font-family:'Sans Serif'; font-size:12pt; font-weight:400; font-style:normal; text-decoration:none;&quot;>
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;>&lt;span style=&quot; font-size:11pt; font-weight:600;&quot;>Descripciónn&lt;/span>&lt;/p>
&lt;p style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-size:9pt;&quot;>Este complemento puede generar archivos de referenciación (world files) para imágenes ráster. Seleccione puntos en el ráster e introduzca sus coordenadas y el complemento procesará los parámetros del archivo de referenciación. Cuantas más coordenadas pueda proporcionar, mejor será el resultado&lt;/p>&lt;/body>&lt;/html></translation>
    </message>
  </context>
  <context>
    <name>QgsGeorefPlugin</name>
    <message>
      <source>&amp;Georeferencer</source>
      <translation>Geo&amp;rreferenciador</translation>
    </message>
  </context>
  <context>
    <name>QgsGeorefPluginGui</name>
    <message>
      <source>Choose a raster file</source>
      <translation>Seleccionar un archivo ráster</translation>
    </message>
    <message>
      <source>Raster files (*.*)</source>
      <translation>Archivos ráster (*.*)</translation>
    </message>
    <message>
      <source>Error</source>
      <translation>Error</translation>
    </message>
    <message>
      <source>The selected file is not a valid raster file.</source>
      <translation>El archivo seleccionado no es un archivo ráster válido.</translation>
    </message>
    <message>
      <source>World file exists</source>
      <translation>El archivo de referenciación (world file) ya existe</translation>
    </message>
    <message>
      <source>&lt;p>The selected file already seems to have a </source>
      <translation>&lt;p>Parece que el archivo seleccionado ya tiene un </translation>
    </message>
    <message>
      <source>world file! Do you want to replace it with the </source>
      <translation>archivo de referenciación (world file). ¿Quiere reemplazarlo con el </translation>
    </message>
    <message>
      <source>new world file?&lt;/p></source>
      <translation>nuevo archivo de referenciación (world file)?&lt;/p></translation>
    </message>
  </context>
  <context>
    <name>QgsGeorefPluginGuiBase</name>
    <message>
      <source>Georeferencer</source>
      <translation>Georreferenciador</translation>
    </message>
    <message>
      <source>Raster file:</source>
      <translation>Archivo ráster:</translation>
    </message>
    <message>
      <source>Close</source>
      <translation>Cerrar</translation>
    </message>
    <message>
      <source>Arrange plugin windows</source>
      <translation>Ajustar ventanas de complementos</translation>
    </message>
    <message>
      <source>...</source>
      <translation>...</translation>
    </message>
    <message>
      <source>Description...</source>
      <translation>Descripción...</translation>
    </message>
  </context>
  <context>
    <name>QgsGeorefWarpOptionsDialog</name>
    <message>
      <source>unstable</source>
      <translation>inestable</translation>
    </message>
  </context>
  <context>
    <name>QgsGeorefWarpOptionsDialogBase</name>
    <message>
      <source>Warp options</source>
      <translation>Opciones de combado</translation>
    </message>
    <message>
      <source>Resampling method:</source>
      <translation>Método de remuestreo:</translation>
    </message>
    <message>
      <source>Nearest neighbour</source>
      <translation>Vecino más próximo</translation>
    </message>
    <message>
      <source>Linear</source>
      <translation>Lineal</translation>
    </message>
    <message>
      <source>Cubic</source>
      <translation>Cúbica</translation>
    </message>
    <message>
      <source>OK</source>
      <translation>Aceptar</translation>
    </message>
    <message>
      <source>Use 0 for transparency when needed</source>
      <translation>Usar 0 para transparencia cuando sea necesario</translation>
    </message>
    <message>
      <source>Compression:</source>
      <translation>Compresión:</translation>
    </message>
  </context>
  <context>
    <name>QgsGraduatedSymbolDialog</name>
    <message>
      <source>Equal Interval</source>
      <translation>Intervalo igual</translation>
    </message>
    <message>
      <source>Quantiles</source>
      <translation>Cuantiles</translation>
    </message>
    <message>
      <source>Empty</source>
      <translation>Vacío</translation>
    </message>
  </context>
  <context>
    <name>QgsGraduatedSymbolDialogBase</name>
    <message>
      <source>graduated Symbol</source>
      <translation>Símbolo graduado</translation>
    </message>
    <message>
      <source>Classification Field:</source>
      <translation>Campo de clasificación:</translation>
    </message>
    <message>
      <source>Mode:</source>
      <translation>Modo:</translation>
    </message>
    <message>
      <source>Number of Classes:</source>
      <translation>Número de clases:</translation>
    </message>
    <message>
      <source>Delete class</source>
      <translation>Borrar clase</translation>
    </message>
    <message>
      <source>Classify</source>
      <translation>Clasificar</translation>
    </message>
  </context>
  <context>
    <name>QgsGrassAttributes</name>
    <message>
      <source>Warning</source>
      <translation>Atención</translation>
    </message>
    <message>
      <source>Column</source>
      <translation>Columna</translation>
    </message>
    <message>
      <source>Value</source>
      <translation>Valor</translation>
    </message>
    <message>
      <source>Type</source>
      <translation>Tipo</translation>
    </message>
    <message>
      <source>ERROR</source>
      <translation>ERROR</translation>
    </message>
    <message>
      <source>OK</source>
      <translation>Aceptar</translation>
    </message>
    <message>
      <source>Layer</source>
      <translation>Capa</translation>
    </message>
  </context>
  <context>
    <name>QgsGrassAttributesBase</name>
    <message>
      <source>GRASS Attributes</source>
      <translation>Atributos de GRASS</translation>
    </message>
    <message>
      <source>Tab 1</source>
      <translation>Tab 1</translation>
    </message>
    <message>
      <source>result</source>
      <translation>resultado</translation>
    </message>
    <message>
      <source>Update database record</source>
      <translation>Actualizar registro de la base de datos</translation>
    </message>
    <message>
      <source>Update</source>
      <translation>Actualizar</translation>
    </message>
    <message>
      <source>Add new category using settings in GRASS Edit toolbox</source>
      <translation>Añadir nueva categoría utilizando las especificaciones de la caja de herramientas de edición de GRASS</translation>
    </message>
    <message>
      <source>New</source>
      <translation>Nueva</translation>
    </message>
    <message>
      <source>Delete selected category</source>
      <translation>Borrar la categoría seleccionada</translation>
    </message>
    <message>
      <source>Delete</source>
      <translation>Borrar</translation>
    </message>
  </context>
  <context>
    <name>QgsGrassBrowser</name>
    <message>
      <source>Tools</source>
      <translation>Herramientas</translation>
    </message>
    <message>
      <source>Add selected map to canvas</source>
      <translation>Añadir el mapa seleccionado a la vista del mapa</translation>
    </message>
    <message>
      <source>Copy selected map</source>
      <translation>Copiar el mapa seleccionado</translation>
    </message>
    <message>
      <source>Rename selected map</source>
      <translation>Cambiar nombre del mapa seleccionado</translation>
    </message>
    <message>
      <source>Delete selected map</source>
      <translation>Borrar el mapa seleccionado</translation>
    </message>
    <message>
      <source>Set current region to selected map</source>
      <translation>Establecer la región actual al mapa seleccionado</translation>
    </message>
    <message>
      <source>Refresh</source>
      <translation>Actualizar</translation>
    </message>
    <message>
      <source>Warning</source>
      <translation>Atención</translation>
    </message>
    <message>
      <source>Cannot copy map </source>
      <translation>No se puede copiar el mapa </translation>
    </message>
    <message>
      <source>&lt;br>command: </source>
      <translation>&lt;br>comando: </translation>
    </message>
    <message>
      <source>Cannot rename map </source>
      <translation>No se puede cambiar el nombre del mapa</translation>
    </message>
    <message>
      <source>Delete map &lt;b></source>
      <translation>Borrar mapa &lt;b></translation>
    </message>
    <message>
      <source>Cannot delete map </source>
      <translation>No se puede borrar el mapa </translation>
    </message>
    <message>
      <source>Cannot write new region</source>
      <translation>No se puede guardar una nueva región</translation>
    </message>
    <message>
      <source>New name</source>
      <translation>Nuevo nombre</translation>
    </message>
  </context>
  <context>
    <name>QgsGrassEdit</name>
    <message>
      <source>Warning</source>
      <translation>Atención</translation>
    </message>
    <message>
      <source>You are not owner of the mapset, cannot open the vector for editing.</source>
      <translation>No es propietario del directorio de mapas, no puede abrir el vectorial para editarlo.</translation>
    </message>
    <message>
      <source>Cannot open vector for update.</source>
      <translation>No se puede abrir el vectorial para actualizar.</translation>
    </message>
    <message>
      <source>Edit tools</source>
      <translation>Herramientas de edición</translation>
    </message>
    <message>
      <source>New point</source>
      <translation>Nuevo punto</translation>
    </message>
    <message>
      <source>New line</source>
      <translation>Nueva línea</translation>
    </message>
    <message>
      <source>New boundary</source>
      <translation>Nuevo contorno</translation>
    </message>
    <message>
      <source>New centroid</source>
      <translation>Nuevo centroide</translation>
    </message>
    <message>
      <source>Move vertex</source>
      <translation>Mover vértice</translation>
    </message>
    <message>
      <source>Add vertex</source>
      <translation>Añadir vértice</translation>
    </message>
    <message>
      <source>Delete vertex</source>
      <translation>Borrar vértice</translation>
    </message>
    <message>
      <source>Move element</source>
      <translation>Mover elemento</translation>
    </message>
    <message>
      <source>Split line</source>
      <translation>Dividir línea</translation>
    </message>
    <message>
      <source>Delete element</source>
      <translation>Borrar elemento</translation>
    </message>
    <message>
      <source>Edit attributes</source>
      <translation>Editar atributos</translation>
    </message>
    <message>
      <source>Close</source>
      <translation>Cerrar</translation>
    </message>
    <message>
      <source>Info</source>
      <translation>Info</translation>
    </message>
    <message>
      <source>The table was created</source>
      <translation>La tabla ha sido creada</translation>
    </message>
    <message>
      <source>Tool not yet implemented.</source>
      <translation>Herramienta no implementada todavía.</translation>
    </message>
    <message>
      <source>Cannot check orphan record: </source>
      <translation>No se puede comprobar registro huérfano: </translation>
    </message>
    <message>
      <source>Orphan record was left in attribute table. &lt;br>Delete the record?</source>
      <translation>El registro huérfano se dejó en la tabla de atributos. &lt;br>¿Borrar el registro?</translation>
    </message>
    <message>
      <source>Cannot delete orphan record: </source>
      <translation>No se puede borrar el registro huérfano: </translation>
    </message>
    <message>
      <source>Cannot describe table for field </source>
      <translation>No se puede describir la tabla por el campo </translation>
    </message>
    <message>
      <source>Left: </source>
      <translation>Izquierda: </translation>
    </message>
    <message>
      <source>Middle: </source>
      <translation>Medio: </translation>
    </message>
    <message>
      <source>Background</source>
      <translation>Fondo</translation>
    </message>
    <message>
      <source>Highlight</source>
      <translation>Resaltado</translation>
    </message>
    <message>
      <source>Dynamic</source>
      <translation>Dinámico</translation>
    </message>
    <message>
      <source>Point</source>
      <translation>Punto</translation>
    </message>
    <message>
      <source>Line</source>
      <translation>Línea</translation>
    </message>
    <message>
      <source>Boundary (no area)</source>
      <translation>Contorno (sin área)</translation>
    </message>
    <message>
      <source>Boundary (1 area)</source>
      <translation>Contorno (1 área)</translation>
    </message>
    <message>
      <source>Boundary (2 areas)</source>
      <translation>Contorno (2 áreas)</translation>
    </message>
    <message>
      <source>Centroid (in area)</source>
      <translation>Centroide (en el área)</translation>
    </message>
    <message>
      <source>Centroid (outside area)</source>
      <translation>Centroide (fuera del área)</translation>
    </message>
    <message>
      <source>Centroid (duplicate in area)</source>
      <translation>Centroide (duplicado en el área)</translation>
    </message>
    <message>
      <source>Node (1 line)</source>
      <translation>Nodo (1 línea)</translation>
    </message>
    <message>
      <source>Node (2 lines)</source>
      <translation>Nodo (2 líneas)</translation>
    </message>
    <message>
      <source>Disp</source>
      <comment>Column title</comment>
      <translation>Título</translation>
    </message>
    <message>
      <source>Column</source>
      <translation>Columna</translation>
    </message>
    <message>
      <source>Type</source>
      <translation>Tipo</translation>
    </message>
    <message>
      <source>Length</source>
      <translation>Longitud</translation>
    </message>
    <message>
      <source>Next not used</source>
      <translation>La siguiente sin usar</translation>
    </message>
    <message>
      <source>Manual entry</source>
      <translation>Entrada manual</translation>
    </message>
    <message>
      <source>No category</source>
      <translation>Ninguna categoría</translation>
    </message>
    <message>
      <source>Right: </source>
      <translation>Derecha: </translation>
    </message>
    <message>
      <source>Color</source>
      <comment>Column title</comment>
      <translation>Color</translation>
    </message>
    <message>
      <source>Type</source>
      <comment>Column title</comment>
      <translation>Tipo</translation>
    </message>
    <message>
      <source>Index</source>
      <comment>Column title</comment>
      <translation>Índice</translation>
    </message>
  </context>
  <context>
    <name>QgsGrassEditBase</name>
    <message>
      <source>GRASS Edit</source>
      <translation>Edición de GRASS</translation>
    </message>
    <message>
      <source>Category</source>
      <translation>Categoría</translation>
    </message>
    <message>
      <source>Mode</source>
      <translation>Modo</translation>
    </message>
    <message>
      <source>Settings</source>
      <translation>Configuración</translation>
    </message>
    <message>
      <source>Snapping in screen pixels</source>
      <translation>Autoensamblado en píxeles de la pantalla</translation>
    </message>
    <message>
      <source>Symbology</source>
      <translation>Simbología</translation>
    </message>
    <message>
      <source>Column 1</source>
      <translation>Columna 1</translation>
    </message>
    <message>
      <source>Line width</source>
      <translation>Ancho de línea</translation>
    </message>
    <message>
      <source>Marker size</source>
      <translation>Tamaño de marcador</translation>
    </message>
    <message>
      <source>Table</source>
      <translation>Tabla</translation>
    </message>
    <message>
      <source>Add Column</source>
      <translation>Añadir columna</translation>
    </message>
    <message>
      <source>Create / Alter Table</source>
      <translation>Crear / modificar tabla</translation>
    </message>
    <message>
      <source>Layer</source>
      <translation>Capa</translation>
    </message>
  </context>
  <context>
    <name>QgsGrassElementDialog</name>
    <message>
      <source>Cancel</source>
      <translation>Cancelar</translation>
    </message>
    <message>
      <source>Ok</source>
      <translation>Aceptar</translation>
    </message>
    <message>
      <source>&lt;font color='red'>Enter a name!&lt;/font></source>
      <translation>&lt;font color='red'>¡Introduzca un nombre!&lt;/font></translation>
    </message>
    <message>
      <source>&lt;font color='red'>This is name of the source!&lt;/font></source>
      <translation>&lt;font color='red'>¡Este es el nombre del origen!&lt;/font></translation>
    </message>
    <message>
      <source>&lt;font color='red'>Exists!&lt;/font></source>
      <translation>&lt;font color='red'>¡Existe!&lt;/font></translation>
    </message>
    <message>
      <source>Overwrite</source>
      <translation>Sobrescribir</translation>
    </message>
  </context>
  <context>
    <name>QgsGrassMapcalc</name>
    <message>
      <source>Mapcalc tools</source>
      <translation>Herramientas Mapcalc</translation>
    </message>
    <message>
      <source>Add map</source>
      <translation>Añadir mapa</translation>
    </message>
    <message>
      <source>Add constant value</source>
      <translation>Añadir constante</translation>
    </message>
    <message>
      <source>Add operator or function</source>
      <translation>Añadir operador o función</translation>
    </message>
    <message>
      <source>Add connection</source>
      <translation>Añadir conexión</translation>
    </message>
    <message>
      <source>Select item</source>
      <translation>Seleccionar elemento</translation>
    </message>
    <message>
      <source>Delete selected item</source>
      <translation>Borrar elemento seleccionado</translation>
    </message>
    <message>
      <source>Open</source>
      <translation>Abrir</translation>
    </message>
    <message>
      <source>Save</source>
      <translation>Guardar</translation>
    </message>
    <message>
      <source>Save as</source>
      <translation>Guardar como</translation>
    </message>
    <message>
      <source>Addition</source>
      <translation>Suma</translation>
    </message>
    <message>
      <source>Subtraction</source>
      <translation>Resta</translation>
    </message>
    <message>
      <source>Multiplication</source>
      <translation>Multiplicación</translation>
    </message>
    <message>
      <source>Division</source>
      <translation>División</translation>
    </message>
    <message>
      <source>Modulus</source>
      <translation>Módulo</translation>
    </message>
    <message>
      <source>Exponentiation</source>
      <translation>Exponencial</translation>
    </message>
    <message>
      <source>Equal</source>
      <translation>Igual</translation>
    </message>
    <message>
      <source>Not equal</source>
      <translation>Distinto</translation>
    </message>
    <message>
      <source>Greater than</source>
      <translation>Mayor que</translation>
    </message>
    <message>
      <source>Greater than or equal</source>
      <translation>Mayor o igual que</translation>
    </message>
    <message>
      <source>Less than</source>
      <translation>Menor que</translation>
    </message>
    <message>
      <source>Less than or equal</source>
      <translation>Menor o igual que</translation>
    </message>
    <message>
      <source>And</source>
      <translation>Y</translation>
    </message>
    <message>
      <source>Or</source>
      <translation>O</translation>
    </message>
    <message>
      <source>Absolute value of x</source>
      <translation>Valor absoluto de x</translation>
    </message>
    <message>
      <source>Inverse tangent of x (result is in degrees)</source>
      <translation>Inverso de la tangente de x (resultado en grados)</translation>
    </message>
    <message>
      <source>Inverse tangent of y/x (result is in degrees)</source>
      <translation>Inverso de la tangente de y/x (resultado en grados)</translation>
    </message>
    <message>
      <source>Current column of moving window (starts with 1)</source>
      <translation>Columna actual de la ventana movible (empieza con 1)</translation>
    </message>
    <message>
      <source>Cosine of x (x is in degrees)</source>
      <translation>Coseno de x (x en grados)</translation>
    </message>
    <message>
      <source>Convert x to double-precision floating point</source>
      <translation>Convertir x a coma flotante (precisión doble)</translation>
    </message>
    <message>
      <source>Current east-west resolution</source>
      <translation>Resolución actual Este-Oeste</translation>
    </message>
    <message>
      <source>Exponential function of x</source>
      <translation>Elevado a x</translation>
    </message>
    <message>
      <source>x to the power y</source>
      <translation>x elevado a y</translation>
    </message>
    <message>
      <source>Convert x to single-precision floating point</source>
      <translation>Convertir x a coma flotante (precisión simple)</translation>
    </message>
    <message>
      <source>Decision: 1 if x not zero, 0 otherwise</source>
      <translation>Decisión: 1 si x no es cero, 0 para el resto</translation>
    </message>
    <message>
      <source>Decision: a if x not zero, 0 otherwise</source>
      <translation>Decisión: a si x no es cero, 0 para el resto</translation>
    </message>
    <message>
      <source>Decision: a if x not zero, b otherwise</source>
      <translation>Decisión: a si x no es cero, b para el resto</translation>
    </message>
    <message>
      <source>Decision: a if x > 0, b if x is zero, c if x &lt; 0</source>
      <translation>Decisión: a si x > 0, b si x es cero, c si x &lt; 0</translation>
    </message>
    <message>
      <source>Convert x to integer [ truncates ]</source>
      <translation>Convertir x a entero [ truncar ]</translation>
    </message>
    <message>
      <source>Check if x = NULL</source>
      <translation>Comprobar si x = NULO</translation>
    </message>
    <message>
      <source>Natural log of x</source>
      <translation>Logaritmo neperiano de x</translation>
    </message>
    <message>
      <source>Log of x base b</source>
      <translation>Logaritmo de x en base b</translation>
    </message>
    <message>
      <source>Largest value</source>
      <translation>Máximo</translation>
    </message>
    <message>
      <source>Median value</source>
      <translation>Mediana</translation>
    </message>
    <message>
      <source>Smallest value</source>
      <translation>Mínimo</translation>
    </message>
    <message>
      <source>Mode value</source>
      <translation>Moda</translation>
    </message>
    <message>
      <source>1 if x is zero, 0 otherwise</source>
      <translation>1 si x = 0, 0 para el resto</translation>
    </message>
    <message>
      <source>Current north-south resolution</source>
      <translation>Resolución Norte-Sur actual</translation>
    </message>
    <message>
      <source>NULL value</source>
      <translation>Valor NULO</translation>
    </message>
    <message>
      <source>Random value between a and b</source>
      <translation>Valor aleatorio entre a y b</translation>
    </message>
    <message>
      <source>Round x to nearest integer</source>
      <translation>Redondear x al número entero más próximo</translation>
    </message>
    <message>
      <source>Current row of moving window (Starts with 1)</source>
      <translation>Fila actual de la ventana movible (empieza con 1)</translation>
    </message>
    <message>
      <source>Sine of x (x is in degrees)</source>
      <comment>sin(x)</comment>
      <translation>Seno de x (x en grados)</translation>
    </message>
    <message>
      <source>Square root of x</source>
      <comment>sqrt(x)</comment>
      <translation>Raíz cuadrada de x</translation>
    </message>
    <message>
      <source>Tangent of x (x is in degrees)</source>
      <comment>tan(x)</comment>
      <translation>Tangente de x (x en grados)</translation>
    </message>
    <message>
      <source>Current x-coordinate of moving window</source>
      <translation>Coordenada X de la ventana movible</translation>
    </message>
    <message>
      <source>Current y-coordinate of moving window</source>
      <translation>Coordenada Y de la ventana movible</translation>
    </message>
    <message>
      <source>Warning</source>
      <translation>Atención</translation>
    </message>
    <message>
      <source>Cannot get current region</source>
      <translation>No se puede estimar la región actual</translation>
    </message>
    <message>
      <source>Cannot check region of map </source>
      <translation>No se puede comprobar la región del mapa </translation>
    </message>
    <message>
      <source>Cannot get region of map </source>
      <translation>No se puede obtener la región del mapa </translation>
    </message>
    <message>
      <source>No GRASS raster maps currently in QGIS</source>
      <translation>Actualmente no hay mapas ráster de GRASS en QGIS</translation>
    </message>
    <message>
      <source>Cannot create 'mapcalc' directory in current mapset.</source>
      <translation>No se puede crear el directorio &quot;mapcalc&quot; en el directorio de mapas actual.</translation>
    </message>
    <message>
      <source>New mapcalc</source>
      <translation>Nuevo mapcalc</translation>
    </message>
    <message>
      <source>Enter new mapcalc name:</source>
      <translation>Introduzca el nombre del nuevo mapcalc:</translation>
    </message>
    <message>
      <source>Enter vector name</source>
      <translation>Introducir nombre del vectorial</translation>
    </message>
    <message>
      <source>The file already exists. Overwrite? </source>
      <translation>El archivo ya existe. ¿Desea sobrescribirlo?</translation>
    </message>
    <message>
      <source>Save mapcalc</source>
      <translation>Guardar mapcalc</translation>
    </message>
    <message>
      <source>File name empty</source>
      <translation>Nombre de archivo vacío</translation>
    </message>
    <message>
      <source>Cannot open mapcalc file</source>
      <translation>No se puede abrir el archivo mapcalc</translation>
    </message>
    <message>
      <source>The mapcalc schema (</source>
      <translation>El esquema del mapcalc (</translation>
    </message>
    <message>
      <source>) not found.</source>
      <translation>) no se ha encontrado.</translation>
    </message>
    <message>
      <source>Cannot open mapcalc schema (</source>
      <translation>No se puede abrir el esquema del mapcalc (</translation>
    </message>
    <message>
      <source>Cannot read mapcalc schema (</source>
      <translation>No se puede leer el esquema del mapcalc (</translation>
    </message>
    <message>
      <source>
at line </source>
      <translation>
en la línea </translation>
    </message>
    <message>
      <source> column </source>
      <translation> columna </translation>
    </message>
    <message>
      <source>Output</source>
      <translation>Salida</translation>
    </message>
  </context>
  <context>
    <name>QgsGrassMapcalcBase</name>
    <message>
      <source>MainWindow</source>
      <translation>Ventana principal</translation>
    </message>
    <message>
      <source>Output</source>
      <translation>Salida</translation>
    </message>
  </context>
  <context>
    <name>QgsGrassModule</name>
    <message>
      <source>Run</source>
      <translation>Ejecutar</translation>
    </message>
    <message>
      <source>Stop</source>
      <translation>Detener</translation>
    </message>
    <message>
      <source>Module</source>
      <translation>Módulo</translation>
    </message>
    <message>
      <source>Warning</source>
      <translation>Atención</translation>
    </message>
    <message>
      <source>The module file (</source>
      <translation>El archivo del módulo (</translation>
    </message>
    <message>
      <source>) not found.</source>
      <translation>) no se ha encontrado.</translation>
    </message>
    <message>
      <source>Cannot open module file (</source>
      <translation>No se puede abrir el archivo del módulo (</translation>
    </message>
    <message>
      <source>)</source>
      <translation>)</translation>
    </message>
    <message>
      <source>Cannot read module file (</source>
      <translation>No se puede leer el archivo del módulo (</translation>
    </message>
    <message>
      <source>):
</source>
      <translation>):
</translation>
    </message>
    <message>
      <source>
at line </source>
      <translation>
en la línea </translation>
    </message>
    <message>
      <source>Module </source>
      <translation>Módulo </translation>
    </message>
    <message>
      <source> not found</source>
      <translation> no encontrado</translation>
    </message>
    <message>
      <source>Cannot find man page </source>
      <translation>No se puede encontrar la página del manual </translation>
    </message>
    <message>
      <source>Not available, cannot open description (</source>
      <translation>No disponible, no se puede abrir la descripción (</translation>
    </message>
    <message>
      <source> column </source>
      <translation> columna </translation>
    </message>
    <message>
      <source>Not available, incorrect description (</source>
      <translation>No disponible, descripción incorrecta (</translation>
    </message>
    <message>
      <source>Cannot get input region</source>
      <translation>No se puede obtener la región de entrada</translation>
    </message>
    <message>
      <source>Use Input Region</source>
      <translation>Usar región de entrada</translation>
    </message>
    <message>
      <source>Cannot find module </source>
      <translation>No se puede encontrar el módulo </translation>
    </message>
    <message>
      <source>Cannot start module: </source>
      <translation>No se puede iniciar el módulo: </translation>
    </message>
    <message>
      <source>&lt;B>Successfully finished&lt;/B></source>
      <translation>&lt;B>Finalizado correctamente&lt;/B></translation>
    </message>
    <message>
      <source>&lt;B>Finished with error&lt;/B></source>
      <translation>&lt;B>Finalizado con error&lt;/B></translation>
    </message>
    <message>
      <source>&lt;B>Module crashed or killed&lt;/B></source>
      <translation>&lt;B>Módulo finalizado o matado&lt;/B></translation>
    </message>
    <message>
      <source>Not available, description not found (</source>
      <translation>No disponible, no se encuentra la descripción (</translation>
    </message>
  </context>
  <context>
    <name>QgsGrassModuleBase</name>
    <message>
      <source>GRASS Module</source>
      <translation>Módulo de GRASS</translation>
    </message>
    <message>
      <source>Options</source>
      <translation>Opciones</translation>
    </message>
    <message>
      <source>Output</source>
      <translation>Salida</translation>
    </message>
    <message>
      <source>Manual</source>
      <translation>Manual</translation>
    </message>
    <message>
      <source>Run</source>
      <translation>Ejecutar</translation>
    </message>
    <message>
      <source>View output</source>
      <translation>Ver salida</translation>
    </message>
    <message>
      <source>Close</source>
      <translation>Cerrar</translation>
    </message>
    <message>
      <source>TextLabel</source>
      <translation>EtiquetaDeTexto</translation>
    </message>
  </context>
  <context>
    <name>QgsGrassModuleField</name>
    <message>
      <source>Attribute field</source>
      <translation>Campo de atributos</translation>
    </message>
  </context>
  <context>
    <name>QgsGrassModuleFile</name>
    <message>
      <source>File</source>
      <translation>Archivo</translation>
    </message>
    <message>
      <source>:&amp;nbsp;missing value</source>
      <translation>:&amp;nbsp;falta el valor</translation>
    </message>
    <message>
      <source>:&amp;nbsp;directory does not exist</source>
      <translation>:&amp;nbsp;el directorio no existe</translation>
    </message>
  </context>
  <context>
    <name>QgsGrassModuleGdalInput</name>
    <message>
      <source>Warning</source>
      <translation>Atención</translation>
    </message>
    <message>
      <source>Cannot find layeroption </source>
      <translation>No se puede encontrar la opción capa </translation>
    </message>
    <message>
      <source>PostGIS driver in OGR does not support schemas!&lt;br>Only the table name will be used.&lt;br>It can result in wrong input if more tables of the same name&lt;br>are present in the database.</source>
      <translation>El controlador PostGIS de OGR no soporta esquemas.&lt;br>Sólo se usará el nombre de la tabla.&lt;br>Esto puede dar como resultado entradas incorrectas si hay más tablas con el mismo nombre&lt;br>en la base de datos.</translation>
    </message>
    <message>
      <source>:&amp;nbsp;no input</source>
      <translation>:&amp;nbsp;ninguna entrada</translation>
    </message>
    <message>
      <source>Cannot find whereoption </source>
      <translation>No se puede encontrar la opción dónde </translation>
    </message>
  </context>
  <context>
    <name>QgsGrassModuleInput</name>
    <message>
      <source>Warning</source>
      <translation>Atención</translation>
    </message>
    <message>
      <source>Cannot find typeoption </source>
      <translation>No se puede encontrar la opción tipo </translation>
    </message>
    <message>
      <source>Cannot find values for typeoption </source>
      <translation>No se pueden encontrar valores para la opción tipo </translation>
    </message>
    <message>
      <source>Cannot find layeroption </source>
      <translation>No se puede encontrar la opción capa </translation>
    </message>
    <message>
      <source>GRASS element </source>
      <translation>Elemento de GRASS </translation>
    </message>
    <message>
      <source> not supported</source>
      <translation> no soportado</translation>
    </message>
    <message>
      <source>Use region of this map</source>
      <translation>Usar la región de este mapa</translation>
    </message>
    <message>
      <source>:&amp;nbsp;no input</source>
      <translation>:&amp;nbsp;ninguna entrada</translation>
    </message>
  </context>
  <context>
    <name>QgsGrassModuleOption</name>
    <message>
      <source>:&amp;nbsp;missing value</source>
      <translation>:&amp;nbsp;falta el valor</translation>
    </message>
  </context>
  <context>
    <name>QgsGrassModuleSelection</name>
    <message>
      <source>Attribute field</source>
      <translation>Campo de atributo</translation>
    </message>
  </context>
  <context>
    <name>QgsGrassModuleStandardOptions</name>
    <message>
      <source>Warning</source>
      <translation>Atención</translation>
    </message>
    <message>
      <source>Cannot find module </source>
      <translation>No se puede encontrar el módulo </translation>
    </message>
    <message>
      <source>Cannot start module </source>
      <translation>No se puede iniciar el módulo </translation>
    </message>
    <message>
      <source>Cannot read module description (</source>
      <translation>No se puede leer la descripción del módulo (</translation>
    </message>
    <message>
      <source>):
</source>
      <translation>):
</translation>
    </message>
    <message>
      <source>
at line </source>
      <translation>
en la línea </translation>
    </message>
    <message>
      <source> column </source>
      <translation> columna </translation>
    </message>
    <message>
      <source>Cannot find key </source>
      <translation>No se puede encontrar la clave </translation>
    </message>
    <message>
      <source>Item with id </source>
      <translation>Ítem con ID </translation>
    </message>
    <message>
      <source> not found</source>
      <translation> no encontrado</translation>
    </message>
    <message>
      <source>Cannot get current region</source>
      <translation>No se puede obtener la región actual</translation>
    </message>
    <message>
      <source>Cannot check region of map </source>
      <translation>No se puede comprobar la región del mapa </translation>
    </message>
    <message>
      <source>Cannot set region of map </source>
      <translation>No se puede establecer la región del mapa </translation>
    </message>
  </context>
  <context>
    <name>QgsGrassNewMapset</name>
    <message>
      <source>GRASS database</source>
      <translation>Base de datos de GRASS</translation>
    </message>
    <message>
      <source>GRASS location</source>
      <translation>Localización de GRASS</translation>
    </message>
    <message>
      <source>Projection</source>
      <translation>Proyección</translation>
    </message>
    <message>
      <source>Default GRASS Region</source>
      <translation>Región predeterminada de GRASS</translation>
    </message>
    <message>
      <source>Mapset</source>
      <translation>Directorio de mapas</translation>
    </message>
    <message>
      <source>Create New Mapset</source>
      <translation>Crear nuevo directorio de mapas</translation>
    </message>
    <message>
      <source>Tree</source>
      <translation>Árbol</translation>
    </message>
    <message>
      <source>Comment</source>
      <translation>Comentario</translation>
    </message>
    <message>
      <source>Database</source>
      <translation>Base de datos</translation>
    </message>
    <message>
      <source>Location 2</source>
      <translation>Localización 2</translation>
    </message>
    <message>
      <source>User's mapset</source>
      <translation>Directorio de mapas del usuario</translation>
    </message>
    <message>
      <source>System mapset</source>
      <translation>Directorio de mapas del sistema</translation>
    </message>
    <message>
      <source>Location 1</source>
      <translation>Localización 1</translation>
    </message>
    <message>
      <source>Owner</source>
      <translation>Propietario</translation>
    </message>
    <message>
      <source>Enter path to GRASS database</source>
      <translation>Introduzca la ruta a la base de datos de GRASS</translation>
    </message>
    <message>
      <source>The directory doesn't exist!</source>
      <translation>¡El directorio no existe!</translation>
    </message>
    <message>
      <source>No writable locations, the database not writable!</source>
      <translation>¡Ninguna localización que se pueda escribir, la base de datos no se puede escribir!</translation>
    </message>
    <message>
      <source>Enter location name!</source>
      <translation>¡Introduzca el nombre de la localización!</translation>
    </message>
    <message>
      <source>The location exists!</source>
      <translation>¡La localización existe!</translation>
    </message>
    <message>
      <source>Selected projection is not supported by GRASS!</source>
      <translation>¡La proyección seleccionada no está soportada por GRASS!</translation>
    </message>
    <message>
      <source>Warning</source>
      <translation>Atención</translation>
    </message>
    <message>
      <source>Cannot create projection.</source>
      <translation>No se puede crear la proyección.</translation>
    </message>
    <message>
      <source>Cannot reproject previously set region, default region set.</source>
      <translation>No se puede reproyectar la región establecida previamente, se establece la región predeterminada.</translation>
    </message>
    <message>
      <source>North must be greater than south</source>
      <translation>El Norte debe ser mayor que el Sur</translation>
    </message>
    <message>
      <source>East must be greater than west</source>
      <translation>El Este debe ser mayor que el Oeste</translation>
    </message>
    <message>
      <source>Regions file (</source>
      <translation>Archivo de regiones (</translation>
    </message>
    <message>
      <source>) not found.</source>
      <translation>) no encontrado.</translation>
    </message>
    <message>
      <source>Cannot open locations file (</source>
      <translation>No se puede abrir el archivo de localizaciones (</translation>
    </message>
    <message>
      <source>)</source>
      <translation>)</translation>
    </message>
    <message>
      <source>Cannot read locations file (</source>
      <translation>No se puede leer el archivo de localizaciones (</translation>
    </message>
    <message>
      <source>):
</source>
      <translation>):
</translation>
    </message>
    <message>
      <source>
at line </source>
      <translation>
en la línea </translation>
    </message>
    <message>
      <source> column </source>
      <translation> columna </translation>
    </message>
    <message>
      <source>Cannot create QgsSpatialRefSys</source>
      <translation>No se puede crear QgsSpatialRefSys</translation>
    </message>
    <message>
      <source>Cannot reproject selected region.</source>
      <translation>No se puede reproyectar la región seleccionada.</translation>
    </message>
    <message>
      <source>Cannot reproject region</source>
      <translation>No se puede reproyectar la región</translation>
    </message>
    <message>
      <source>Enter mapset name.</source>
      <translation>Introduzca el nombre del directorio de mapas.</translation>
    </message>
    <message>
      <source>The mapset already exists</source>
      <translation>El directorio de mapas ya existe</translation>
    </message>
    <message>
      <source>Database: </source>
      <translation>Base de datos: </translation>
    </message>
    <message>
      <source>Location: </source>
      <translation>Localización: </translation>
    </message>
    <message>
      <source>Mapset: </source>
      <translation>Directorio de mapas: </translation>
    </message>
    <message>
      <source>Create location</source>
      <translation>Crear localización</translation>
    </message>
    <message>
      <source>Cannot create new location: </source>
      <translation>No se puede crear la nueva localización: </translation>
    </message>
    <message>
      <source>Create mapset</source>
      <translation>Crear directorio de mapas</translation>
    </message>
    <message>
      <source>Cannot open DEFAULT_WIND</source>
      <translation>No se puede abrir DEFAULT_WIND</translation>
    </message>
    <message>
      <source>Cannot open WIND</source>
      <translation>No se puede abrir WIND</translation>
    </message>
    <message>
      <source>New mapset</source>
      <translation>Nuevo directorio de mapas</translation>
    </message>
    <message>
      <source>New mapset successfully created, but cannot be opened: </source>
      <translation>El nuevo directorio de mapas de creó correctamente, pero no se puede abrir: </translation>
    </message>
    <message>
      <source>New mapset successfully created and set as current working mapset.</source>
      <translation>El nuevo directorio de mapas se creó correctamente y se estableció como el directorio de mapas de trabajo actual.</translation>
    </message>
    <message>
      <source>Cannot create new mapset directory</source>
      <translation>No se puede crear el nuevo directorio de mapas</translation>
    </message>
  </context>
  <context>
    <name>QgsGrassNewMapsetBase</name>
    <message>
      <source>Column 1</source>
      <translation>Columna 1</translation>
    </message>
    <message>
      <source>Example directory tree:</source>
      <translation>Ejemplo de árbol de directorios:</translation>
    </message>
    <message>
      <source>&lt;html>&lt;head>&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; />&lt;/head>&lt;body style=&quot; white-space: pre-wrap; font-family:Sans Serif; font-size:9pt; font-weight:400; font-style:normal; text-decoration:none;&quot;>&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;>GRASS data are stored in tree directory structure.&lt;/p>&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;>The GRASS database is the top-level directory in this tree structure.&lt;/p>&lt;/body>&lt;/html></source>
      <translation>&lt;html>&lt;head>&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; />&lt;/head>&lt;body style=&quot; white-space: pre-wrap; font-family:Sans Serif; font-size:9pt; font-weight:400; font-style:normal; text-decoration:none;&quot;>&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;>Los datos de GRASS se guardan en un directorio con estructura de árbol.&lt;/p>&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;>La base de datos de GRASS se encuentra en el directorio más elevado de esta estructura.&lt;/p>&lt;/body>&lt;/html></translation>
    </message>
    <message>
      <source>Database Error</source>
      <translation>Error de la base de datos</translation>
    </message>
    <message>
      <source>Database:</source>
      <translation>Base de datos:</translation>
    </message>
    <message>
      <source>...</source>
      <translation>...</translation>
    </message>
    <message>
      <source>Select existing directory or create a new one:</source>
      <translation>Seleccionar un directorio existente o crear uno nuevo:</translation>
    </message>
    <message>
      <source>Location</source>
      <translation>Localización</translation>
    </message>
    <message>
      <source>Select location</source>
      <translation>Seleccionar localización</translation>
    </message>
    <message>
      <source>Create new location</source>
      <translation>Crear nueva localización</translation>
    </message>
    <message>
      <source>Location Error</source>
      <translation>Error en la localización</translation>
    </message>
    <message>
      <source>&lt;html>&lt;head>&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; />&lt;/head>&lt;body style=&quot; white-space: pre-wrap; font-family:Sans Serif; font-size:9pt; font-weight:400; font-style:normal; text-decoration:none;&quot;>&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;>The GRASS location is a collection of maps for a particular territory or project.&lt;/p>&lt;/body>&lt;/html></source>
      <translation>&lt;html>&lt;head>&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; />&lt;/head>&lt;body style=&quot; white-space: pre-wrap; font-family:Sans Serif; font-size:9pt; font-weight:400; font-style:normal; text-decoration:none;&quot;>&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;>La localización de GRASS es una colección de mapas de un territorio o proyecto particular.&lt;/p>&lt;/body>&lt;/html></translation>
    </message>
    <message>
      <source>Projection Error</source>
      <translation>Error de la proyección</translation>
    </message>
    <message>
      <source>Coordinate system</source>
      <translation>Sistema de coordenadas</translation>
    </message>
    <message>
      <source>Projection</source>
      <translation>Proyección</translation>
    </message>
    <message>
      <source>Not defined</source>
      <translation>Sin definir</translation>
    </message>
    <message>
      <source>&lt;html>&lt;head>&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; />&lt;/head>&lt;body style=&quot; white-space: pre-wrap; font-family:Sans Serif; font-size:9pt; font-weight:400; font-style:normal; text-decoration:none;&quot;>&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;>The GRASS region defines a workspace for raster modules. The default region is valid for one location. It is possible to set a different region in each mapset. &lt;/p>&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;>It is possible to change the default location region later.&lt;/p>&lt;/body>&lt;/html></source>
      <translation>&lt;html>&lt;head>&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; />&lt;/head>&lt;body style=&quot; white-space: pre-wrap; font-family:Sans Serif; font-size:9pt; font-weight:400; font-style:normal; text-decoration:none;&quot;>&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;>La región de GRASS define un entorno de trabajo para módulos ráster. La región predeterminada es válida para una localización. Es posible establecer una región diferente en cada directorio de mapas. &lt;/p>&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;>La región de la localización predeterminada se puede cambiar después.&lt;/p>&lt;/body>&lt;/html></translation>
    </message>
    <message>
      <source>Set current QGIS extent</source>
      <translation>Establecer la extensión actual de QGIS</translation>
    </message>
    <message>
      <source>Set</source>
      <translation>Establecer</translation>
    </message>
    <message>
      <source>Region Error</source>
      <translation>Error de la región</translation>
    </message>
    <message>
      <source>S</source>
      <translation>S</translation>
    </message>
    <message>
      <source>W</source>
      <translation>O</translation>
    </message>
    <message>
      <source>E</source>
      <translation>E</translation>
    </message>
    <message>
      <source>N</source>
      <translation>N</translation>
    </message>
    <message>
      <source>New mapset:</source>
      <translation>Nuevo directorio de mapas:</translation>
    </message>
    <message>
      <source>Mapset Error</source>
      <translation>Error del directorio de mapas</translation>
    </message>
    <message>
      <source>&lt;p align=&quot;center&quot;>Existing masets&lt;/p></source>
      <translation>&lt;p align=&quot;center&quot;>Directorios de mapas existentes&lt;/p></translation>
    </message>
    <message>
      <source>&lt;html>&lt;head>&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; />&lt;/head>&lt;body style=&quot; white-space: pre-wrap; font-family:Sans Serif; font-size:9pt; font-weight:400; font-style:normal; text-decoration:none;&quot;>&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;>The GRASS mapset is a collection of maps used by one user. &lt;/p>&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;>A user can read maps from all mapsets in the location but &lt;/p>&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;>he can open for writing only his mapset (owned by user).&lt;/p>&lt;/body>&lt;/html></source>
      <translation>&lt;html>&lt;head>&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; />&lt;/head>&lt;body style=&quot; white-space: pre-wrap; font-family:Sans Serif; font-size:9pt; font-weight:400; font-style:normal; text-decoration:none;&quot;>&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;>El directorio de mapas de GRASS es una colección de mapas utilizada por un usuario. &lt;/p>&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;>Un usuario puede leer mapas de todos los directorio de mapas de la localización pero &lt;/p>&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;>sólo puede escribir en su directorio de mapas (el que le pertenezca).&lt;/p>&lt;/body>&lt;/html></translation>
    </message>
    <message>
      <source>Location:</source>
      <translation>Localización:</translation>
    </message>
    <message>
      <source>Mapset:</source>
      <translation>Directorio de mapas:</translation>
    </message>
  </context>
  <context>
    <name>QgsGrassPlugin</name>
    <message>
      <source>Open mapset</source>
      <translation>Abrir directorio de mapas</translation>
    </message>
    <message>
      <source>New mapset</source>
      <translation>Nuevo directorio de mapas</translation>
    </message>
    <message>
      <source>Close mapset</source>
      <translation>Cerrar directorio de mapas</translation>
    </message>
    <message>
      <source>Add GRASS vector layer</source>
      <translation>Añadir capa vectorial de GRASS</translation>
    </message>
    <message>
      <source>Add GRASS raster layer</source>
      <translation>Añadir capa ráster de GRASS</translation>
    </message>
    <message>
      <source>Open GRASS tools</source>
      <translation>Abrir herramientas de GRASS</translation>
    </message>
    <message>
      <source>Display Current Grass Region</source>
      <translation>Mostrar región actual de Grass</translation>
    </message>
    <message>
      <source>Edit Current Grass Region</source>
      <translation>Editar la región actual de Grass</translation>
    </message>
    <message>
      <source>Edit Grass Vector layer</source>
      <translation>Editar capa vectorial de Grass</translation>
    </message>
    <message>
      <source>Adds a GRASS vector layer to the map canvas</source>
      <translation>Añade una capa vectorial de GRASS a la vista del mapa</translation>
    </message>
    <message>
      <source>Adds a GRASS raster layer to the map canvas</source>
      <translation>Añade una capa ráster de GRASS a la vista del mapa</translation>
    </message>
    <message>
      <source>Displays the current GRASS region as a rectangle on the map canvas</source>
      <translation>Muestra la región actual de GRASS como un rectángulo en la vista del mapa</translation>
    </message>
    <message>
      <source>Edit the current GRASS region</source>
      <translation>Editar la región actual de GRASS</translation>
    </message>
    <message>
      <source>Edit the currently selected GRASS vector layer.</source>
      <translation>Editar la capa vectorial de GRASS seleccionada actualmente.</translation>
    </message>
    <message>
      <source>&amp;GRASS</source>
      <translation>&amp;GRASS</translation>
    </message>
    <message>
      <source>GRASS</source>
      <translation>GRASS</translation>
    </message>
    <message>
      <source>GrassVector</source>
      <translation>VectorialDeGrass</translation>
    </message>
    <message>
      <source>0.1</source>
      <translation>0.1</translation>
    </message>
    <message>
      <source>GRASS layer</source>
      <translation>Capa de GRASS</translation>
    </message>
    <message>
      <source>Create new Grass Vector</source>
      <translation>Crear nuevo vectorial de Grass</translation>
    </message>
    <message>
      <source>Warning</source>
      <translation>Atención</translation>
    </message>
    <message>
      <source>GRASS Edit is already running.</source>
      <translation>Le edición de GRASS ya se está ejecutando.</translation>
    </message>
    <message>
      <source>New vector name</source>
      <translation>Nombre del nuevo vectorial</translation>
    </message>
    <message>
      <source>Cannot create new vector: </source>
      <translation>No se puede crear el nuevo vectorial: </translation>
    </message>
    <message>
      <source>New vector created but cannot be opened by data provider.</source>
      <translation>Se creó el nuevo vectorial pero el proveedor de datos no lo puede abrir.</translation>
    </message>
    <message>
      <source>Cannot start editing.</source>
      <translation>No se puede iniciar la edición.</translation>
    </message>
    <message>
      <source>GISDBASE, LOCATION_NAME or MAPSET is not set, cannot display current region.</source>
      <translation>BASE DE DATOS, NOMBRE_LOCALIZACIÓN o DIRECTORIO DE MAPAS no están establecidos, no se puede mostrar la región actual.</translation>
    </message>
    <message>
      <source>Cannot read current region: </source>
      <translation>No se puede leer la región actual: </translation>
    </message>
    <message>
      <source>Cannot open the mapset. </source>
      <translation>No se abrir el directorio de mapas. </translation>
    </message>
    <message>
      <source>Cannot close mapset. </source>
      <translation>No se puede cerrar el directorio de mapas. </translation>
    </message>
    <message>
      <source>Cannot close current mapset. </source>
      <translation>No se puede cerrar el directorio de mapas actual. </translation>
    </message>
    <message>
      <source>Cannot open GRASS mapset. </source>
      <translation>No se puede abrir el directorio de mapas de GRASS. </translation>
    </message>
  </context>
  <context>
    <name>QgsGrassRegion</name>
    <message>
      <source>Warning</source>
      <translation>Atención</translation>
    </message>
    <message>
      <source>GISDBASE, LOCATION_NAME or MAPSET is not set, cannot display current region.</source>
      <translation>BASE DE DATOS, NOMBRE_LOCALIZACIÓN o DIRECTORIO DE MAPAS no están establecidos, no se puede mostrar la región actual.</translation>
    </message>
    <message>
      <source>Cannot read current region: </source>
      <translation>No se puede leer la región actual: </translation>
    </message>
    <message>
      <source>Cannot write region</source>
      <translation>No se puede escribir la región</translation>
    </message>
  </context>
  <context>
    <name>QgsGrassRegionBase</name>
    <message>
      <source>GRASS Region Settings</source>
      <translation>Configuración de la región de GRASS</translation>
    </message>
    <message>
      <source>N</source>
      <translation>N</translation>
    </message>
    <message>
      <source>W</source>
      <translation>O</translation>
    </message>
    <message>
      <source>E</source>
      <translation>E</translation>
    </message>
    <message>
      <source>S</source>
      <translation>S</translation>
    </message>
    <message>
      <source>N-S Res</source>
      <translation>Resolución N-S</translation>
    </message>
    <message>
      <source>Rows</source>
      <translation>Filas</translation>
    </message>
    <message>
      <source>Cols</source>
      <translation>Columnas</translation>
    </message>
    <message>
      <source>E-W Res</source>
      <translation>Resolución E-O</translation>
    </message>
    <message>
      <source>Color</source>
      <translation>Color</translation>
    </message>
    <message>
      <source>Width</source>
      <translation>Anchura</translation>
    </message>
    <message>
      <source>OK</source>
      <translation>Aceptar</translation>
    </message>
    <message>
      <source>Cancel</source>
      <translation>Cancelar</translation>
    </message>
  </context>
  <context>
    <name>QgsGrassSelect</name>
    <message>
      <source>Select GRASS Vector Layer</source>
      <translation>Seleccionar capa vectorial de GRASS</translation>
    </message>
    <message>
      <source>Select GRASS Raster Layer</source>
      <translation>Seleccionar capa ráster de GRASS</translation>
    </message>
    <message>
      <source>Select GRASS mapcalc schema</source>
      <translation>Seleccionar esquema mapcalc de GRASS</translation>
    </message>
    <message>
      <source>Select GRASS Mapset</source>
      <translation>Seleccionar directorio de mapas de GRASS</translation>
    </message>
    <message>
      <source>Warning</source>
      <translation>Atención</translation>
    </message>
    <message>
      <source>Cannot open vector on level 2 (topology not available).</source>
      <translation>No se puede abrir el vectorial en el nivel 2 (topología no disponible).</translation>
    </message>
    <message>
      <source>Choose existing GISDBASE</source>
      <translation>Elija una base de datos (GISBASE) existente</translation>
    </message>
    <message>
      <source>Wrong GISDBASE, no locations available.</source>
      <translation>Base de datos (GISBASE) incorrecta, ninguna localización disponible.</translation>
    </message>
    <message>
      <source>Wrong GISDBASE</source>
      <translation>Base de datos (GISBASE) incorrecta</translation>
    </message>
    <message>
      <source>Select a map.</source>
      <translation>Seleccionar un mapa.</translation>
    </message>
    <message>
      <source>No map</source>
      <translation>Ningún mapa</translation>
    </message>
    <message>
      <source>No layer</source>
      <translation>Ninguna capa</translation>
    </message>
    <message>
      <source>No layers available in this map</source>
      <translation>No hay ninguna capa disponible en este mapa</translation>
    </message>
  </context>
  <context>
    <name>QgsGrassSelectBase</name>
    <message>
      <source>Add GRASS Layer</source>
      <translation>Añadir capa de GRASS</translation>
    </message>
    <message>
      <source>Gisdbase</source>
      <translation>Base de datos (Gisdbase)</translation>
    </message>
    <message>
      <source>Location</source>
      <translation>Localización</translation>
    </message>
    <message>
      <source>Mapset</source>
      <translation>Directorio de mapa</translation>
    </message>
    <message>
      <source>Select or type map name (wildcards '*' and '?' accepted for rasters)</source>
      <translation>Seleccionar o escribir el nombre del mapa (se aceptan los comodines '*' y '?' para los ráster)</translation>
    </message>
    <message>
      <source>Map name</source>
      <translation>Nombre del mapa</translation>
    </message>
    <message>
      <source>Layer</source>
      <translation>Capa</translation>
    </message>
    <message>
      <source>Browse</source>
      <translation>Explorar</translation>
    </message>
    <message>
      <source>Cancel</source>
      <translation>Cancelar</translation>
    </message>
    <message>
      <source>OK</source>
      <translation>Aceptar</translation>
    </message>
  </context>
  <context>
    <name>QgsGrassShellBase</name>
    <message>
      <source>GRASS Shell</source>
      <translation>Consola de GRASS</translation>
    </message>
    <message>
      <source>Close</source>
      <translation>Cerrar</translation>
    </message>
  </context>
  <context>
    <name>QgsGrassTools</name>
    <message>
      <source>Modules</source>
      <translation>Módulos</translation>
    </message>
    <message>
      <source>Browser</source>
      <translation>Explorador</translation>
    </message>
    <message>
      <source>GRASS Tools</source>
      <translation>Herramientas de GRASS</translation>
    </message>
    <message>
      <source>GRASS Tools: </source>
      <translation>Herramientas de GRASS: </translation>
    </message>
    <message>
      <source>Warning</source>
      <translation>Atención</translation>
    </message>
    <message>
      <source>Cannot find MSYS (</source>
      <translation>No se puede encontrar MSYS (</translation>
    </message>
    <message>
      <source>GRASS Shell is not compiled.</source>
      <translation>La consola de GRASS no está compilada.</translation>
    </message>
    <message>
      <source>The config file (</source>
      <translation>El archivo de configuración (</translation>
    </message>
    <message>
      <source>) not found.</source>
      <translation>) no se ha encontrado.</translation>
    </message>
    <message>
      <source>Cannot open config file (</source>
      <translation>No se puede abrir el archivo de configuración (</translation>
    </message>
    <message>
      <source>)</source>
      <translation>)</translation>
    </message>
    <message>
      <source>Cannot read config file (</source>
      <translation>No se puede leer el archivo de configuración (</translation>
    </message>
    <message>
      <source>
at line </source>
      <translation>
en la línea </translation>
    </message>
    <message>
      <source> column </source>
      <translation> columna </translation>
    </message>
  </context>
  <context>
    <name>QgsGridMakerPlugin</name>
    <message>
      <source>&amp;Graticule Creator</source>
      <translation>&amp;Generador de cuadrícula</translation>
    </message>
    <message>
      <source>Creates a graticule (grid) and stores the result as a shapefile</source>
      <translation>Crea una cuadricula (grid) y guarda el resultado como un archivo shape</translation>
    </message>
    <message>
      <source>&amp;Graticules</source>
      <translation>&amp;Cuadrículas</translation>
    </message>
  </context>
  <context>
    <name>QgsGridMakerPluginGui</name>
    <message>
      <source>QGIS - Grid Maker</source>
      <translation>QGIS - Creador de cuadrículas</translation>
    </message>
    <message>
      <source>Choose a filename to save under</source>
      <translation>Seleccione un nombre para guardar el archivo</translation>
    </message>
    <message>
      <source>ESRI Shapefile (*.shp)</source>
      <translation>Archivo Shape de ESRI (*.shp)</translation>
    </message>
    <message>
      <source>Please enter the file name before pressing OK!</source>
      <translation>¡Por favor, introduzca el nombre de archivo antes de pulsar Aceptar!</translation>
    </message>
  </context>
  <context>
    <name>QgsGridMakerPluginGuiBase</name>
    <message>
      <source>Graticule Builder</source>
      <translation>Generador de cuadrículas</translation>
    </message>
    <message>
      <source>Type</source>
      <translation>Tipo</translation>
    </message>
    <message>
      <source>Point</source>
      <translation>Punto</translation>
    </message>
    <message>
      <source>Polygon</source>
      <translation>Polígono</translation>
    </message>
    <message>
      <source>Origin (lower left)</source>
      <translation>Origen (esquina inferior izquierda)</translation>
    </message>
    <message>
      <source>End point (upper right)</source>
      <translation>Punto final (esquina superior derecha)</translation>
    </message>
    <message>
      <source>Output (shape) file</source>
      <translation>Archivo de salida (shape)</translation>
    </message>
    <message>
      <source>Save As...</source>
      <translation>Guardar como...</translation>
    </message>
    <message>
      <source>QGIS Graticule Creator</source>
      <translation>Generador de cuadrículas de QGIS</translation>
    </message>
    <message>
      <source>Graticle size</source>
      <translation>Tamaño de cuadrícula</translation>
    </message>
    <message>
      <source>Y Interval:</source>
      <translation>Intervalo Y</translation>
    </message>
    <message>
      <source>X Interval:</source>
      <translation>Intervalo X</translation>
    </message>
    <message>
      <source>Y</source>
      <translation>Y</translation>
    </message>
    <message>
      <source>X</source>
      <translation>X</translation>
    </message>
    <message>
      <source>&lt;html>&lt;head>&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; />&lt;style type=&quot;text/css&quot;>
p, li { white-space: pre-wrap; }
&lt;/style>&lt;/head>&lt;body style=&quot; font-family:'Sans Serif'; font-size:9pt; font-weight:400; font-style:normal; text-decoration:none;&quot;>
&lt;p style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:'Arial'; font-size:11pt;&quot;>&lt;span style=&quot; font-size:10pt;&quot;>This plugin will help you to build a graticule shapefile that you can use as an overlay within your qgis map viewer.&lt;/span>&lt;/p>
&lt;p style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:'Arial'; font-size:10pt;&quot;>Please enter all units in decimal degrees&lt;/p>&lt;/body>&lt;/html></source>
      <translation>&lt;html>&lt;head>&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; />&lt;style type=&quot;text/css&quot;>
p, li { white-space: pre-wrap; }
&lt;/style>&lt;/head>&lt;body style=&quot; font-family:'Sans Serif'; font-size:9pt; font-weight:400; font-style:normal; text-decoration:none;&quot;>
&lt;p style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:'Arial'; font-size:11pt;&quot;>&lt;span style=&quot; font-size:10pt;&quot;>Esta complemento le ayudará a construir un archivo shape de cuadrícula que puede usar superpuesto en la vista del mapa de qgis.&lt;/span>&lt;/p>
&lt;p style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:'Arial'; font-size:10pt;&quot;>Por favor, introduzca todas las unidades en grados decimales.&lt;/p>&lt;/body>&lt;/html></translation>
    </message>
  </context>
  <context>
    <name>QgsHelpViewer</name>
    <message>
      <source>This help file does not exist for your language</source>
      <translation>Este archivo de ayuda no existe en su idioma</translation>
    </message>
    <message>
      <source>If you would like to create it, contact the QGIS development team</source>
      <translation>Si desea crearlo, contacte con el equipo de desarrollo de QGIS</translation>
    </message>
    <message>
      <source>Quantum GIS Help</source>
      <translation>Ayuda de Quantum GIS</translation>
    </message>
    <message>
      <source>Quantum GIS Help - </source>
      <translation>Ayuda de Quantum GIS - </translation>
    </message>
    <message>
      <source>Error</source>
      <translation>Error</translation>
    </message>
    <message>
      <source>Failed to get the help text from the database</source>
      <translation>No se pudo obtener el texto de ayuda de la base de datos</translation>
    </message>
    <message>
      <source>The QGIS help database is not installed</source>
      <translation>La base de datos de ayuda de QGIS no está instalada</translation>
    </message>
  </context>
  <context>
    <name>QgsHelpViewerBase</name>
    <message>
      <source>QGIS Help</source>
      <translation>Ayuda de QGIS</translation>
    </message>
    <message>
      <source>&amp;Close</source>
      <translation>&amp;Cerrar</translation>
    </message>
    <message>
      <source>Alt+C</source>
      <translation>Alt+C</translation>
    </message>
    <message>
      <source>&amp;Home</source>
      <translation>&amp;Inicio</translation>
    </message>
    <message>
      <source>Alt+H</source>
      <translation>Alt+I</translation>
    </message>
    <message>
      <source>&amp;Forward</source>
      <translation>A&amp;delante</translation>
    </message>
    <message>
      <source>Alt+F</source>
      <translation>Alt+D</translation>
    </message>
    <message>
      <source>&amp;Back</source>
      <translation>A&amp;trás</translation>
    </message>
    <message>
      <source>Alt+B</source>
      <translation>Alt+T</translation>
    </message>
  </context>
  <context>
    <name>QgsHttpTransaction</name>
    <message>
      <source>WMS Server responded unexpectedly with HTTP Status Code %1 (%2)</source>
      <translation>El servidor WMS ha respondido de forma inesperada con el código de estado HTTP %1 (%2)</translation>
    </message>
    <message>
      <source>HTTP response completed, however there was an error: %1</source>
      <translation>Respuesta HTTP completada, sin embargo ha habido un error: %1</translation>
    </message>
    <message>
      <source>HTTP transaction completed, however there was an error: %1</source>
      <translation>Transacción HTTP completada, sin embargo ha habido un error: %1</translation>
    </message>
    <message>
      <source>Network timed out after %1 seconds of inactivity.
This may be a problem in your network connection or at the WMS server.</source>
      <translation>La conexión a red expiró después de %1 segundos de inactividad.
Esto puede ser por un problema en su conexión a red o en el servidor WMS.</translation>
    </message>
  </context>
  <context>
    <name>QgsIdentifyResults</name>
    <message>
      <source>Feature</source>
      <translation>Objeto espacial</translation>
    </message>
    <message>
      <source>Value</source>
      <translation>Valor</translation>
    </message>
    <message>
      <source>Run action</source>
      <translation>Ejecutar acción</translation>
    </message>
    <message>
      <source>(Derived)</source>
      <translation>(Derivado)</translation>
    </message>
    <message>
      <source>Identify Results - </source>
      <translation>Resultados de la identificación - </translation>
    </message>
  </context>
  <context>
    <name>QgsIdentifyResultsBase</name>
    <message>
      <source>Identify Results</source>
      <translation>Resultados de la identificación</translation>
    </message>
    <message>
      <source>Help</source>
      <translation>Ayuda</translation>
    </message>
    <message>
      <source>F1</source>
      <translation>F1</translation>
    </message>
    <message>
      <source>Close</source>
      <translation>Cerrar</translation>
    </message>
  </context>
  <context>
    <name>QgsLUDialogBase</name>
    <message>
      <source>Enter class bounds</source>
      <translation>Introducir contornos de la clase</translation>
    </message>
    <message>
      <source>Lower value</source>
      <translation>Valor más bajo</translation>
    </message>
    <message>
      <source>-</source>
      <translation>-</translation>
    </message>
    <message>
      <source>OK</source>
      <translation>Aceptar</translation>
    </message>
    <message>
      <source>Cancel</source>
      <translation>Cancelar</translation>
    </message>
    <message>
      <source>Upper value</source>
      <translation>Valor más alto</translation>
    </message>
  </context>
  <context>
    <name>QgsLabelDialogBase</name>
    <message>
      <source>Form1</source>
      <translation>Form1</translation>
    </message>
    <message>
      <source>Font Style</source>
      <translation>Estilo de fuente</translation>
    </message>
    <message>
      <source>Font size units</source>
      <translation>Unidades del tamaño de fuente</translation>
    </message>
    <message>
      <source>Map units</source>
      <translation>Unidades del mapa</translation>
    </message>
    <message>
      <source>Points</source>
      <translation>Puntos</translation>
    </message>
    <message>
      <source>Transparency:</source>
      <translation>Transparencia:</translation>
    </message>
    <message>
      <source>Font</source>
      <translation>Fuente</translation>
    </message>
    <message>
      <source>Colour</source>
      <translation>Color</translation>
    </message>
    <message>
      <source>%</source>
      <translation>%</translation>
    </message>
    <message>
      <source>Font Alignment</source>
      <translation>Alineación de fuente</translation>
    </message>
    <message>
      <source>Placement</source>
      <translation>Ubicación</translation>
    </message>
    <message>
      <source>Below Right</source>
      <translation>Abajo derecha</translation>
    </message>
    <message>
      <source>Right</source>
      <translation>Derecha</translation>
    </message>
    <message>
      <source>Below</source>
      <translation>Abajo</translation>
    </message>
    <message>
      <source>Over</source>
      <translation>Sobre</translation>
    </message>
    <message>
      <source>Above</source>
      <translation>Encima de</translation>
    </message>
    <message>
      <source>Left</source>
      <translation>Izquierda</translation>
    </message>
    <message>
      <source>Below Left</source>
      <translation>Abajo izquierda</translation>
    </message>
    <message>
      <source>Above Right</source>
      <translation>Encima derecha</translation>
    </message>
    <message>
      <source>Above Left</source>
      <translation>Abajo izquierda</translation>
    </message>
    <message>
      <source>Angle (deg):</source>
      <translation>Ángulo (grados):</translation>
    </message>
    <message>
      <source>Buffer</source>
      <translation>Margen</translation>
    </message>
    <message>
      <source>Buffer size units</source>
      <translation>Unidades de tamaño del margen</translation>
    </message>
    <message>
      <source>Size is in map units</source>
      <translation>Tamaño en unidades del mapa</translation>
    </message>
    <message>
      <source>Size is in points</source>
      <translation>El tamaño está en puntos</translation>
    </message>
    <message>
      <source>Size:</source>
      <translation>Tamaño:</translation>
    </message>
    <message>
      <source>Buffer Labels?</source>
      <translation>¿Poner margen a las etiquetas?</translation>
    </message>
    <message>
      <source>Position</source>
      <translation>Posición</translation>
    </message>
    <message>
      <source>Offset units</source>
      <translation>Unidades de desplazamiento</translation>
    </message>
    <message>
      <source>X Offset (pts):</source>
      <translation>Desplazamiento en X (pts):</translation>
    </message>
    <message>
      <source>Y Offset (pts):</source>
      <translation>Desplazamiento en Y (pts):</translation>
    </message>
    <message>
      <source>Data Defined Style</source>
      <translation>Estilo de los datos definidos</translation>
    </message>
    <message>
      <source>&amp;Italic:</source>
      <translation>&amp;Cursiva:</translation>
    </message>
    <message>
      <source>&amp;Size:</source>
      <translation>&amp;Tamaño:</translation>
    </message>
    <message>
      <source>&amp;Bold:</source>
      <translation>&amp;Negrita:</translation>
    </message>
    <message>
      <source>&amp;Underline:</source>
      <translation>&amp;Subrayado:</translation>
    </message>
    <message>
      <source>&amp;Font family:</source>
      <translation>Familia de la &amp;fuente:</translation>
    </message>
    <message>
      <source>Data Defined Alignment</source>
      <translation>Alineación de los datos definidos</translation>
    </message>
    <message>
      <source>Placement:</source>
      <translation>Ubicación:</translation>
    </message>
    <message>
      <source>Data Defined Buffer</source>
      <translation>Margen de los datos definidos</translation>
    </message>
    <message>
      <source>Data Defined Position</source>
      <translation>Posición de los datos definidos</translation>
    </message>
    <message>
      <source>X Coordinate:</source>
      <translation>Coordenada X:</translation>
    </message>
    <message>
      <source>Y Coordinate:</source>
      <translation>Coordenada Y:</translation>
    </message>
    <message>
      <source>Preview:</source>
      <translation>Previsualizar:</translation>
    </message>
    <message>
      <source>QGIS Rocks!</source>
      <translation>¡QGIS Avanza!</translation>
    </message>
    <message>
      <source>Source</source>
      <translation>Fuente</translation>
    </message>
    <message>
      <source>Field containing label:</source>
      <translation>Campo que contiene la etiqueta:</translation>
    </message>
    <message>
      <source>Default label:</source>
      <translation>Etiqueta predeterminada:</translation>
    </message>
    <message>
      <source>Size Units:</source>
      <translation>Unidades de tamaño:</translation>
    </message>
    <message>
      <source>°</source>
      <translation>°</translation>
    </message>
  </context>
  <context>
    <name>QgsLayerProjectionSelector</name>
    <message>
      <source>Define this layer's projection:</source>
      <translation>Definir la proyección de esta capa:</translation>
    </message>
    <message>
      <source>This layer appears to have no projection specification.</source>
      <translation>Parece que esta capa no tiene no tiene especificada la proyección.</translation>
    </message>
    <message>
      <source>By default, this layer will now have its projection set to that of the project, but you may override this by selecting a different projection below.</source>
      <translation>Por omisión, se utilizará la misma que para el proyecto, pero puede ignorarla seleccionado una proyección diferente a continuación.</translation>
    </message>
  </context>
  <context>
    <name>QgsLayerProjectionSelectorBase</name>
    <message>
      <source>Layer Projection Selector</source>
      <translation>Selector de proyección de la capa</translation>
    </message>
    <message>
      <source>OK</source>
      <translation>Aceptar</translation>
    </message>
  </context>
  <context>
    <name>QgsLegend</name>
    <message>
      <source>group</source>
      <translation>grupo</translation>
    </message>
    <message>
      <source>&amp;Remove</source>
      <translation>E&amp;liminar</translation>
    </message>
    <message>
      <source>&amp;Make to toplevel item</source>
      <translation>&amp;Subir el elemento al nivel superior</translation>
    </message>
    <message>
      <source>Re&amp;name</source>
      <translation>Cambiar &amp;nombre</translation>
    </message>
    <message>
      <source>&amp;Add group</source>
      <translation>&amp;Añadir grupo</translation>
    </message>
    <message>
      <source>&amp;Expand all</source>
      <translation>&amp;Expandir todo</translation>
    </message>
    <message>
      <source>&amp;Collapse all</source>
      <translation>&amp;Comprimir todo</translation>
    </message>
    <message>
      <source>Show file groups</source>
      <translation>Mostrar grupos de archivos</translation>
    </message>
    <message>
      <source>No Layer Selected</source>
      <translation>Ninguna capa no seleccionada</translation>
    </message>
    <message>
      <source>To open an attribute table, you must select a vector layer in the legend</source>
      <translation>Para abrir una tabla de atributos, debe seleccionar una capa vectorial en la leyenda</translation>
    </message>
  </context>
  <context>
    <name>QgsLegendLayer</name>
    <message>
      <source>&amp;Zoom to layer extent</source>
      <translation>&amp;Zum a la extensión de la capa</translation>
    </message>
    <message>
      <source>&amp;Zoom to best scale (100%)</source>
      <translation>&amp;Zum a la mejor escala (100%)</translation>
    </message>
    <message>
      <source>&amp;Show in overview</source>
      <translation>Mo&amp;strar en el localizador</translation>
    </message>
    <message>
      <source>&amp;Remove</source>
      <translation>E&amp;liminar</translation>
    </message>
    <message>
      <source>&amp;Open attribute table</source>
      <translation>&amp;Abrir tabla de atributos</translation>
    </message>
    <message>
      <source>Save as shapefile...</source>
      <translation>Guardar como archivo shape...</translation>
    </message>
    <message>
      <source>Save selection as shapefile...</source>
      <translation>Guardar selección como archivo shape...</translation>
    </message>
    <message>
      <source>&amp;Properties</source>
      <translation>&amp;Propiedades</translation>
    </message>
    <message>
      <source>More layers</source>
      <translation>Más capas</translation>
    </message>
    <message>
      <source>This item contains more layer files. Displaying more layers in table is not supported.</source>
      <translation>Este elemento contiene más archivos de capas. Mostrar más capas en la tabla no está soportado.</translation>
    </message>
  </context>
  <context>
    <name>QgsLegendLayerFile</name>
    <message>
      <source>Attribute table - </source>
      <translation>Tabla de atributos - </translation>
    </message>
    <message>
      <source>Save layer as...</source>
      <translation>Guardar capa como...</translation>
    </message>
    <message>
      <source>Start editing failed</source>
      <translation>Ha fallado el comienzo de la edición</translation>
    </message>
    <message>
      <source>Provider cannot be opened for editing</source>
      <translation>El proveedor no se puede abrir para editar</translation>
    </message>
    <message>
      <source>Stop editing</source>
      <translation>Terminar edición</translation>
    </message>
    <message>
      <source>Do you want to save the changes?</source>
      <translation>¿Quiere guardar los cambios?</translation>
    </message>
    <message>
      <source>Error</source>
      <translation>Error</translation>
    </message>
    <message>
      <source>Could not commit changes</source>
      <translation>No se pudieron aplicar los cambios</translation>
    </message>
    <message>
      <source>Problems during roll back</source>
      <translation type="unfinished" />
    </message>
    <message>
      <source>Not a vector layer</source>
      <translation>No es una capa vectorial</translation>
    </message>
    <message>
      <source>To open an attribute table, you must select a vector layer in the legend</source>
      <translation>Para abrir una tabla de atributos, debe seleccionar una capa vectorial en la leyenda</translation>
    </message>
    <message>
      <source>Saving done</source>
      <translation>Guardado terminado</translation>
    </message>
    <message>
      <source>Export to Shapefile has been completed</source>
      <translation>La exportación a archivo shape se ha completado</translation>
    </message>
    <message>
      <source>Driver not found</source>
      <translation>No se ha encontrado el controlador</translation>
    </message>
    <message>
      <source>ESRI Shapefile driver is not available</source>
      <translation>El controlador de archivos shape de ESRI no está disponible</translation>
    </message>
    <message>
      <source>Error creating shapefile</source>
      <translation>Error al crear el archivo shape</translation>
    </message>
    <message>
      <source>The shapefile could not be created (</source>
      <translation>El archivo shape no se ha podido crear (</translation>
    </message>
    <message>
      <source>Layer creation failed</source>
      <translation>Ha fallado la creación de la capa</translation>
    </message>
    <message>
      <source>&amp;Zoom to layer extent</source>
      <translation>&amp;Zum a la extensión de la capa</translation>
    </message>
    <message>
      <source>&amp;Show in overview</source>
      <translation>Mo&amp;strar en el localizador</translation>
    </message>
    <message>
      <source>&amp;Remove</source>
      <translation>E&amp;liminar</translation>
    </message>
    <message>
      <source>&amp;Open attribute table</source>
      <translation>&amp;Abrir tabla de atributos</translation>
    </message>
    <message>
      <source>Save as shapefile...</source>
      <translation>Guardar como archivo shape...</translation>
    </message>
    <message>
      <source>Save selection as shapefile...</source>
      <translation>Guardar selección como archivo shape...</translation>
    </message>
    <message>
      <source>&amp;Properties</source>
      <translation>&amp;Propiedades</translation>
    </message>
    <message>
      <source>bad_alloc exception</source>
      <translation>excepción bad_alloc</translation>
    </message>
    <message>
      <source>Filling the attribute table has been stopped because there was no more virtual memory left</source>
      <translation>El relleno de la tabla de atributos se ha detenido porque no quedaba más memoria virtual</translation>
    </message>
    <message>
      <source>Layer attribute table contains unsupported datatype(s)</source>
      <translation>La tabla de atributos de la capa contiene tipos de datos no soportados</translation>
    </message>
  </context>
  <context>
    <name>QgsLineStyleDialogBase</name>
    <message>
      <source>Select a line style</source>
      <translation>Seleccionar estilo de línea</translation>
    </message>
    <message>
      <source>Styles</source>
      <translation>Estilos</translation>
    </message>
    <message>
      <source>Ok</source>
      <translation>Aceptar</translation>
    </message>
    <message>
      <source>Cancel</source>
      <translation>Cancelar</translation>
    </message>
  </context>
  <context>
    <name>QgsLineStyleWidgetBase</name>
    <message>
      <source>Form2</source>
      <translation>Form2</translation>
    </message>
    <message>
      <source>Outline Style</source>
      <translation>Estilo del borde</translation>
    </message>
    <message>
      <source>Width:</source>
      <translation>Anchura:</translation>
    </message>
    <message>
      <source>Colour:</source>
      <translation>Color:</translation>
    </message>
    <message>
      <source>LineStyleWidget</source>
      <translation>Estilo de la línea (LineStyleWidget)</translation>
    </message>
    <message>
      <source>col</source>
      <translation>col</translation>
    </message>
  </context>
  <context>
    <name>QgsMapCanvas</name>
    <message>
      <source>Could not draw</source>
      <translation>No se pudo dibujar</translation>
    </message>
    <message>
      <source>because</source>
      <translation>porque</translation>
    </message>
  </context>
  <context>
    <name>QgsMapLayer</name>
    <message>
      <source> Check file permissions and retry.</source>
      <translation> Comprobar permisos de archivo y volver a intentar.</translation>
    </message>
  </context>
  <context>
    <name>QgsMapToolIdentify</name>
    <message>
      <source>No features found</source>
      <translation>No se han encontrado objetos espaciales</translation>
    </message>
    <message>
      <source>&lt;p>No features were found within the search radius. Note that it is currently not possible to use the identify tool on unsaved features.&lt;/p></source>
      <translation>&lt;p>No se han encontrado objetos espaciales dentro del radio de búsqueda. Tenga en cuenta que actualmente no es posible utilizar la herramienta de identificación en objetos espaciales sin guardar.&lt;/p></translation>
    </message>
    <message>
      <source>(clicked coordinate)</source>
      <translation>(coordenada pinchada)</translation>
    </message>
    <message>
      <source>WMS identify result for %1
%2</source>
      <translation>Resultado de identificación WMS para %1
%2</translation>
    </message>
    <message>
      <source>- %1 features found</source>
      <comment>Identify results window title</comment>
      <translation>- Encontrados %1 elementos</translation>
    </message>
  </context>
  <context>
    <name>QgsMapToolSplitFeatures</name>
    <message>
      <source>Split error</source>
      <translation>Error en la división</translation>
    </message>
    <message>
      <source>An error occured during feature splitting</source>
      <translation>Ocurrió un error durante la división de los objetos espaciales</translation>
    </message>
  </context>
  <context>
    <name>QgsMapToolVertexEdit</name>
    <message>
      <source>Snap tolerance</source>
      <translation>Tolerancia de autoensamblado</translation>
    </message>
    <message>
      <source>Don't show this message again</source>
      <translation>No volver a mostrar este mensaje</translation>
    </message>
    <message>
      <source>Could not snap segment.</source>
      <translation>No se pudo autoensamblar el segmento.</translation>
    </message>
    <message>
      <source>Have you set the tolerance in Settings > Project Properties > General?</source>
      <translation>¿Ha establecido la tolerancia de autoensamblado en Configuración > Propiedades del proyecto > General?</translation>
    </message>
  </context>
  <context>
    <name>QgsMapserverExport</name>
    <message>
      <source>Name for the map file</source>
      <translation>Nombre para el archivo del mapa</translation>
    </message>
    <message>
      <source>Choose the QGIS project file</source>
      <translation>Seleccione el archivo de proyecto de QGIS</translation>
    </message>
    <message>
      <source>QGIS Project Files (*.qgs);;All files (*.*)</source>
      <comment>Filter list for selecting files from a dialog box</comment>
      <translation>Archivos de proyectos de QGIS (*.qgs);;Todos los archivos (*.*)</translation>
    </message>
    <message>
      <source>Overwrite File?</source>
      <translation>¿Sobrescribir archivo?</translation>
    </message>
    <message>
      <source> exists. 
Do you want to overwrite it?</source>
      <comment>a filename is prepended to this text, and appears in a dialog box</comment>
      <translation> existe. 
¿Quiere sobrescribirlo?</translation>
    </message>
    <message>
      <source> exists. 
Do you want to overwrite it?</source>
      <translation> existe. 
¿Quiere sobrescribirlo?</translation>
    </message>
    <message>
      <source>MapServer map files (*.map);;All files (*.*)</source>
      <comment>Filter list for selecting files from a dialog box</comment>
      <translation>Archivos de mapa de MapServer (*.map);;Todos los archivos (*.*)</translation>
    </message>
  </context>
  <context>
    <name>QgsMapserverExportBase</name>
    <message>
      <source>Export to Mapserver</source>
      <translation>Exportar a MapServer</translation>
    </message>
    <message>
      <source>Map file</source>
      <translation>Archivo de mapa</translation>
    </message>
    <message>
      <source>Export LAYER information only</source>
      <translation>Exportar sólo información de la CAPA</translation>
    </message>
    <message>
      <source>&amp;Help</source>
      <translation>&amp;Ayuda</translation>
    </message>
    <message>
      <source>F1</source>
      <translation>F1</translation>
    </message>
    <message>
      <source>&amp;OK</source>
      <translation>&amp;Aceptar</translation>
    </message>
    <message>
      <source>&amp;Cancel</source>
      <translation>&amp;Cancelar</translation>
    </message>
    <message>
      <source>...</source>
      <translation>...</translation>
    </message>
    <message>
      <source>Map</source>
      <translation>Mapa</translation>
    </message>
    <message>
      <source>Name</source>
      <translation>Nombre</translation>
    </message>
    <message>
      <source>Height</source>
      <translation>Altura</translation>
    </message>
    <message>
      <source>Units</source>
      <translation>Unidades</translation>
    </message>
    <message>
      <source>Image type</source>
      <translation>Tipo de imagen</translation>
    </message>
    <message>
      <source>gif</source>
      <translation>gif</translation>
    </message>
    <message>
      <source>gtiff</source>
      <translation>gtiff</translation>
    </message>
    <message>
      <source>jpeg</source>
      <translation>jpeg</translation>
    </message>
    <message>
      <source>png</source>
      <translation>png</translation>
    </message>
    <message>
      <source>swf</source>
      <translation>swf</translation>
    </message>
    <message>
      <source>userdefined</source>
      <translation>definida por el usuario</translation>
    </message>
    <message>
      <source>wbmp</source>
      <translation>wbmp</translation>
    </message>
    <message>
      <source>MinScale</source>
      <translation>Escala mínima</translation>
    </message>
    <message>
      <source>MaxScale</source>
      <translation>Escala máxima</translation>
    </message>
    <message>
      <source>Prefix attached to map, scalebar and legend GIF filenames created using this MapFile. It should be kept short.</source>
      <translation>Prefijo añadido al nombre de los archivos GIF del mapa, la barra de escala y la leyenda creados usando este archivo de mapa. Debe ser corto.</translation>
    </message>
    <message>
      <source>Width</source>
      <translation>Anchura</translation>
    </message>
    <message>
      <source>Web Interface Definition</source>
      <translation>Definición del interfaz web</translation>
    </message>
    <message>
      <source>Header</source>
      <translation>Encabezado</translation>
    </message>
    <message>
      <source>Footer</source>
      <translation>Pie de página</translation>
    </message>
    <message>
      <source>Template</source>
      <translation>Plantilla</translation>
    </message>
    <message>
      <source>Path to the MapServer template file</source>
      <translation>Ruta al archivo de plantilla de MapServer</translation>
    </message>
    <message>
      <source>dd</source>
      <translation>dd</translation>
    </message>
    <message>
      <source>feet</source>
      <translation>pies</translation>
    </message>
    <message>
      <source>meters</source>
      <translation>metros</translation>
    </message>
    <message>
      <source>miles</source>
      <translation>millas</translation>
    </message>
    <message>
      <source>inches</source>
      <translation>pulgadas</translation>
    </message>
    <message>
      <source>kilometers</source>
      <translation>kilómetros</translation>
    </message>
    <message>
      <source>Prefix attached to map, scalebar and legend GIF filenames created using this MapFile</source>
      <translation>Prefijo añadido al nombre de los archivos GIF del mapa, la barra de escala y la leyenda creados usando este archivo de mapa</translation>
    </message>
    <message>
      <source>Name for the map file to be created from the QGIS project file</source>
      <translation>Nombre para el archivo de mapa que se va a crear a partir del proyecto de QGIS</translation>
    </message>
    <message>
      <source>Full path to the QGIS project file to export to MapServer map format</source>
      <translation>Ruta completa al proyecto de QGIS para exportar al formato de mapa de MapServer</translation>
    </message>
    <message>
      <source>QGIS project file</source>
      <translation>Archivo de proyecto de QGIS</translation>
    </message>
    <message>
      <source>If checked, only the layer information will be processed</source>
      <translation>Si se marca, sólo será procesada la información de la capa</translation>
    </message>
    <message>
      <source>Browse...</source>
      <translation>Explorar...</translation>
    </message>
    <message>
      <source>Save As...</source>
      <translation>Guardar como...</translation>
    </message>
  </context>
  <context>
    <name>QgsMarkerDialogBase</name>
    <message>
      <source>Choose a marker symbol</source>
      <translation>Seleccionar un símbolo de marcador</translation>
    </message>
    <message>
      <source>Directory</source>
      <translation>Directorio</translation>
    </message>
    <message>
      <source>...</source>
      <translation>...</translation>
    </message>
    <message>
      <source>Ok</source>
      <translation>Aceptar</translation>
    </message>
    <message>
      <source>Cancel</source>
      <translation>Cancelar</translation>
    </message>
    <message>
      <source>New Item</source>
      <translation>Nuevo elemento</translation>
    </message>
  </context>
  <context>
    <name>QgsMeasureBase</name>
    <message>
      <source>Measure</source>
      <translation>Medida</translation>
    </message>
    <message>
      <source>Total:</source>
      <translation>Total:</translation>
    </message>
    <message>
      <source>Help</source>
      <translation>Ayuda</translation>
    </message>
    <message>
      <source>New</source>
      <translation>Nueva</translation>
    </message>
    <message>
      <source>Cl&amp;ose</source>
      <translation>&amp;Cerrar</translation>
    </message>
  </context>
  <context>
    <name>QgsMeasureDialog</name>
    <message>
      <source>Segments (in meters)</source>
      <translation>Segmentos (en metros)</translation>
    </message>
    <message>
      <source>Segments (in feet)</source>
      <translation>Segmentos (en pies)</translation>
    </message>
    <message>
      <source>Segments (in degrees)</source>
      <translation>Segmentos (en grados)</translation>
    </message>
    <message>
      <source>Segments</source>
      <translation>Segmentos</translation>
    </message>
  </context>
  <context>
    <name>QgsMeasureTool</name>
    <message>
      <source>Incorrect measure results</source>
      <translation>Resultados de medida incorrectos</translation>
    </message>
    <message>
      <source>&lt;p>This map is defined with a geographic coordinate system (latitude/longitude) but the map extents suggests that it is actually a projected coordinate system (e.g., Mercator). If so, the results from line or area measurements will be incorrect.&lt;/p>&lt;p>To fix this, explicitly set an appropriate map coordinate system using the &lt;tt>Settings:Project Properties&lt;/tt> menu.</source>
      <translation>&lt;p>Este mapa está definido con un sistema de coordenadas geográficas (latitud/longitud), pero la extensión del mapa sugiere que en realidad es un sistema de coordenadas proyectado (ej.: Mercator). Si es así, las medidas de líneas o áreas serán incorrectas.&lt;/p>&lt;p>Para corregir esto, establezca de forma explicita un sistema de coordenadas del mapa adecuado usando el menú &lt;tt>Configuración>Propiedades de proyecto&lt;/tt>.</translation>
    </message>
  </context>
  <context>
    <name>QgsMessageViewer</name>
    <message>
      <source>QGIS Message</source>
      <translation>Mensaje de QGIS</translation>
    </message>
    <message>
      <source>Don't show this message again</source>
      <translation>No mostrar este mensaje de nuevo</translation>
    </message>
    <message>
      <source>Close</source>
      <translation>Cerrar</translation>
    </message>
  </context>
  <context>
    <name>QgsMySQLProvider</name>
    <message>
      <source>Unable to access relation</source>
      <translation>No se puede acceder a la relación</translation>
    </message>
    <message>
      <source>Unable to access the </source>
      <translation>No se puede acceder a la relación </translation>
    </message>
    <message>
      <source> relation.
The error message from the database was:
</source>
      <translation>.
El mensaje de error de la base de datos fue:
</translation>
    </message>
    <message>
      <source>No GEOS Support!</source>
      <translation>No hay soporte para GEOS</translation>
    </message>
    <message>
      <source>Your PostGIS installation has no GEOS support.
Feature selection and identification will not work properly.
Please install PostGIS with GEOS support (http://geos.refractions.net)</source>
      <translation>Su instalación de PostGIS no tiene soporte para GEOS.
La selección e identificación de objetos espaciales no funcionará correctamente.
Por favor, instale PostGIS con soporte para GEOS (http://geos.refractions.net)</translation>
    </message>
  </context>
  <context>
    <name>QgsNewConnection</name>
    <message>
      <source>Test connection</source>
      <translation>Probar conexión</translation>
    </message>
    <message>
      <source>Connection failed - Check settings and try again.

Extended error information:
</source>
      <translation>La conexión ha fallado - Compruebe la configuración y vuelva a intentarlo.

Información extensa sobre el error:
</translation>
    </message>
    <message>
      <source>Connection to %1 was successful</source>
      <translation>La conexión a %1 tuvo éxito</translation>
    </message>
  </context>
  <context>
    <name>QgsNewConnectionBase</name>
    <message>
      <source>Create a New PostGIS connection</source>
      <translation>Crear una nueva conexión a PostGIS</translation>
    </message>
    <message>
      <source>Connection Information</source>
      <translation>Información sobre la conexión</translation>
    </message>
    <message>
      <source>Only look in the 'public' schema</source>
      <translation>Buscar sólo en el esquema &quot;público&quot;</translation>
    </message>
    <message>
      <source>Only look in the geometry_columns table</source>
      <translation>Buscar sólo en la tabla de columnas de la geometría</translation>
    </message>
    <message>
      <source>Save Password</source>
      <translation>Guardar contraseña</translation>
    </message>
    <message>
      <source>Test Connect</source>
      <translation>Probar conexión</translation>
    </message>
    <message>
      <source>Name</source>
      <translation>Nombre</translation>
    </message>
    <message>
      <source>Host</source>
      <translation>Servidor</translation>
    </message>
    <message>
      <source>Database</source>
      <translation>Base de datos</translation>
    </message>
    <message>
      <source>Port</source>
      <translation>Puerto</translation>
    </message>
    <message>
      <source>Username</source>
      <translation>Nombre de usuario</translation>
    </message>
    <message>
      <source>Password</source>
      <translation>Contraseña</translation>
    </message>
    <message>
      <source>Name of the new connection</source>
      <translation>Nombre de la nueva conexión</translation>
    </message>
    <message>
      <source>5432</source>
      <translation>5432</translation>
    </message>
    <message>
      <source>OK</source>
      <translation>Aceptar</translation>
    </message>
    <message>
      <source>Cancel</source>
      <translation>Cancelar</translation>
    </message>
    <message>
      <source>Help</source>
      <translation>Ayuda</translation>
    </message>
    <message>
      <source>F1</source>
      <translation>F1</translation>
    </message>
    <message>
      <source>Restrict the search to the public schema for spatial tables not in the geometry_columns table</source>
      <translation>Restringir la búsqueda al esquema público de las tablas espaciales que no están en la tabla de columnas de la geometría</translation>
    </message>
    <message>
      <source>When searching for spatial tables that are not in the geometry_columns tables, restrict the search to tables that are in the public schema (for some databases this can save lots of time)</source>
      <translation>Cuando se busca en tablas espaciales que no están en las tablas de columnas de la geometría, restringir la búsqueda a tablas que están en el esquema público (en algunas bases de datos esto puede ahorrar mucho tiempo)</translation>
    </message>
    <message>
      <source>Restrict the displayed tables to those that are in the geometry_columns table</source>
      <translation>Restringir las tablas mostradas a aquellas que están en la tabla de columnas de la geometría</translation>
    </message>
    <message>
      <source>Restricts the displayed tables to those that are in the geometry_columns table. This can speed up the initial display of spatial tables.</source>
      <translation>Restringe las tablas mostradas a aquellas que están en la tabla de columnas de la geometría. Esto puede acelerar la visualización inicial de las tablas espaciales.</translation>
    </message>
  </context>
  <context>
    <name>QgsNewHttpConnectionBase</name>
    <message>
      <source>Create a New WMS connection</source>
      <translation>Crear una nueva conexión WMS</translation>
    </message>
    <message>
      <source>Connection Information</source>
      <translation>Información sobre la conexión</translation>
    </message>
    <message>
      <source>Name of the new connection</source>
      <translation>Nombre de la nueva conexión</translation>
    </message>
    <message>
      <source>Name</source>
      <translation>Nombre</translation>
    </message>
    <message>
      <source>URL</source>
      <translation>URL</translation>
    </message>
    <message>
      <source>Proxy Host</source>
      <translation>Servidor proxy</translation>
    </message>
    <message>
      <source>Proxy Port</source>
      <translation>Puerto proxy</translation>
    </message>
    <message>
      <source>Proxy User</source>
      <translation>Usuario proxy</translation>
    </message>
    <message>
      <source>Proxy Password</source>
      <translation>Contraseña proxy</translation>
    </message>
    <message>
      <source>Your user name for the HTTP proxy (optional)</source>
      <translation>Nombre de usuario para el proxy HTTP (opcional)</translation>
    </message>
    <message>
      <source>Password for your HTTP proxy (optional)</source>
      <translation>Contraseña para su proxy HTTP (opcional)</translation>
    </message>
    <message>
      <source>HTTP address of the Web Map Server</source>
      <translation>Dirección HTTP del servidor de mapas web</translation>
    </message>
    <message>
      <source>Name of your HTTP proxy (optional)</source>
      <translation>Nombre de su proxy HTTP (opcional)</translation>
    </message>
    <message>
      <source>Port number of your HTTP proxy (optional)</source>
      <translation>Puerto de su proxy HTTP (opcional)</translation>
    </message>
    <message>
      <source>OK</source>
      <translation>Aceptar</translation>
    </message>
    <message>
      <source>Cancel</source>
      <translation>Cancelar</translation>
    </message>
    <message>
      <source>Help</source>
      <translation>Ayuda</translation>
    </message>
    <message>
      <source>F1</source>
      <translation>F1</translation>
    </message>
  </context>
  <context>
    <name>QgsNorthArrowPlugin</name>
    <message>
      <source>Bottom Left</source>
      <translation>Inferior izquierda</translation>
    </message>
    <message>
      <source>Top Left</source>
      <translation>Superior izquierda</translation>
    </message>
    <message>
      <source>Top Right</source>
      <translation>Superior derecha</translation>
    </message>
    <message>
      <source>Bottom Right</source>
      <translation>Inferior derecha</translation>
    </message>
    <message>
      <source>&amp;North Arrow</source>
      <translation>Flecha de &amp;Norte</translation>
    </message>
    <message>
      <source>Creates a north arrow that is displayed on the map canvas</source>
      <translation>Crea una flecha de norte que se muestra en la vista del mapa</translation>
    </message>
    <message>
      <source>&amp;Decorations</source>
      <translation>&amp;Ilustraciones</translation>
    </message>
    <message>
      <source>North arrow pixmap not found</source>
      <translation>No se ha encontrado la imagen de flecha de Norte</translation>
    </message>
  </context>
  <context>
    <name>QgsNorthArrowPluginGui</name>
    <message>
      <source>Pixmap not found</source>
      <translation>No se ha encontrado la imagen</translation>
    </message>
  </context>
  <context>
    <name>QgsNorthArrowPluginGuiBase</name>
    <message>
      <source>North Arrow Plugin</source>
      <translation>Complemento de flecha de Norte</translation>
    </message>
    <message>
      <source>Properties</source>
      <translation>Propiedades</translation>
    </message>
    <message>
      <source>Angle</source>
      <translation>Ángulo</translation>
    </message>
    <message>
      <source>Placement</source>
      <translation>Ubicación</translation>
    </message>
    <message>
      <source>Set direction automatically</source>
      <translation>Establecer la dirección automáticamente</translation>
    </message>
    <message>
      <source>Enable North Arrow</source>
      <translation>Activar flecha de Norte</translation>
    </message>
    <message>
      <source>Placement on screen</source>
      <translation>Ubicación en la pantalla</translation>
    </message>
    <message>
      <source>Top Left</source>
      <translation>Superior izquierda</translation>
    </message>
    <message>
      <source>Top Right</source>
      <translation>Superior derecha</translation>
    </message>
    <message>
      <source>Bottom Left</source>
      <translation>Inferior izquierda</translation>
    </message>
    <message>
      <source>Bottom Right</source>
      <translation>Inferior derecha</translation>
    </message>
    <message>
      <source>Preview of north arrow</source>
      <translation>Previsualización de la flecha de Norte</translation>
    </message>
    <message>
      <source>Icon</source>
      <translation>Icono</translation>
    </message>
    <message>
      <source>New Item</source>
      <translation>Nuevo Ítem</translation>
    </message>
    <message>
      <source>Browse...</source>
      <translation>Explorar...</translation>
    </message>
  </context>
  <context>
    <name>QgsOptions</name>
    <message>
      <source>Detected active locale on your system: </source>
      <translation>Idioma activo detectado en su sistema: </translation>
    </message>
    <message>
      <source>to vertex</source>
      <translation>a vértice</translation>
    </message>
    <message>
      <source>to segment</source>
      <translation>a segmento</translation>
    </message>
    <message>
      <source>to vertex and segment</source>
      <translation>a vértice y segmento</translation>
    </message>
  </context>
  <context>
    <name>QgsOptionsBase</name>
    <message>
      <source>QGIS Options</source>
      <translation>Opciones de QGIS</translation>
    </message>
    <message>
      <source>&amp;Appearance</source>
      <translation>&amp;Apariencia</translation>
    </message>
    <message>
      <source>&amp;Splash screen</source>
      <translation>Pantalla de &amp;bienvenida</translation>
    </message>
    <message>
      <source>Hide splash screen at startup</source>
      <translation>Ocultar la pantalla de bienvenida al iniciar la aplicación</translation>
    </message>
    <message>
      <source>&amp;Icon Theme</source>
      <translation>Tema de &amp;iconos</translation>
    </message>
    <message>
      <source>&lt;b>Note: &lt;/b>Theme changes take effect the next time QGIS is started</source>
      <translation>&lt;b>Nota: &lt;/b>Los cambios de tema tendrán efecto la próxima vez que inicie QGIS</translation>
    </message>
    <message>
      <source>Theme</source>
      <translation>Tema</translation>
    </message>
    <message>
      <source>Default Map Appearance (Overridden by project properties)</source>
      <translation>Apariencia predeterminada del mapa (anulada por las propiedades del proyecto)</translation>
    </message>
    <message>
      <source>Selection Color:</source>
      <translation>Color de selección:</translation>
    </message>
    <message>
      <source>Background Color:</source>
      <translation>Color de fondo:</translation>
    </message>
    <message>
      <source>Appearance</source>
      <translation>Apariencia</translation>
    </message>
    <message>
      <source>Capitalise layer name</source>
      <translation>Comenzar el nombre de la capa por mayúscula</translation>
    </message>
    <message>
      <source>&amp;Rendering</source>
      <translation>&amp;Representación</translation>
    </message>
    <message>
      <source>&amp;Update during drawing</source>
      <translation>&amp;Actualizar durante el dibujado</translation>
    </message>
    <message>
      <source>features</source>
      <translation>objetos espaciales</translation>
    </message>
    <message>
      <source>Map display will be updated (drawn) after this many features have been read from the data source</source>
      <translation>La vista del mapa se actualizará después de que todos estos objetos espaciales sean leídos de la fuente de datos</translation>
    </message>
    <message>
      <source>Update display after reading</source>
      <translation>Actualizar visualización después de leer</translation>
    </message>
    <message>
      <source>(Set to 0 to not update the display until all features have been read)</source>
      <translation>(Poner a 0 para no actualizar la visualización hasta que todos los objetos espaciales se hayan leído)</translation>
    </message>
    <message>
      <source>Initial Visibility</source>
      <translation>Visibilidad inicial</translation>
    </message>
    <message>
      <source>By default new la&amp;yers added to the map should be displayed</source>
      <translation>Por omisión, las nuevas &amp;capas añadidas al mapa se deben visualizar</translation>
    </message>
    <message>
      <source>Rendering</source>
      <translation>Representación</translation>
    </message>
    <message>
      <source>Make lines appear less jagged at the expense of some drawing performance</source>
      <translation>Hacer que las líneas se muestren menos quebradas a expensas de la calidad del dibujo</translation>
    </message>
    <message>
      <source>Fix problems with incorrectly filled polygons</source>
      <translation>Solucionar problemas con polígonos rellenados incorrectamente</translation>
    </message>
    <message>
      <source>Continuously redraw the map when dragging the legend/map divider</source>
      <translation>Redibujar el mapa continuamente cuando se desplaza el separador entre mapa y leyenda</translation>
    </message>
    <message>
      <source>&amp;Map tools</source>
      <translation>Herramientas de &amp;mapa</translation>
    </message>
    <message>
      <source>Search radius</source>
      <translation>Radio de búsqueda</translation>
    </message>
    <message>
      <source>%</source>
      <translation>%</translation>
    </message>
    <message>
      <source>Measure tool</source>
      <translation>Herramienta de medida</translation>
    </message>
    <message>
      <source>Ellipsoid for distance calculations:</source>
      <translation>Elipsoide para el cálculo de distancias:</translation>
    </message>
    <message>
      <source>Panning and zooming</source>
      <translation>Desplazar y zum</translation>
    </message>
    <message>
      <source>Zoom</source>
      <translation>Zum</translation>
    </message>
    <message>
      <source>Zoom and recenter</source>
      <translation>Zum y centrar</translation>
    </message>
    <message>
      <source>Nothing</source>
      <translation>Nada</translation>
    </message>
    <message>
      <source>Zoom factor:</source>
      <translation>Factor de zum:</translation>
    </message>
    <message>
      <source>Mouse wheel action:</source>
      <translation>Acción de la rueda del ratón:</translation>
    </message>
    <message>
      <source>Pro&amp;jection</source>
      <translation>Pro&amp;yección</translation>
    </message>
    <message>
      <source>Select Global Default ...</source>
      <translation>Seleccionar proyección global predeterminada...</translation>
    </message>
    <message>
      <source>When layer is loaded that has no projection information</source>
      <translation>Cuando se carga una capa que no tiene información sobre la proyección</translation>
    </message>
    <message>
      <source>Prompt for projection.</source>
      <translation>Preguntar sobre la proyección.</translation>
    </message>
    <message>
      <source>Project wide default projection will be used.</source>
      <translation>Se va a utilizar la proyección amplia predeterminada del proyecto.</translation>
    </message>
    <message>
      <source>Global default projection displa&amp;yed below will be used.</source>
      <translation>Se usará la proyección global predeterminada &amp;mostrada a continuación.</translation>
    </message>
    <message>
      <source>&amp;General</source>
      <translation>&amp;General</translation>
    </message>
    <message>
      <source>General</source>
      <translation>General</translation>
    </message>
    <message>
      <source>Ask to save project changes when required</source>
      <translation>Preguntar si guardar los cambios del proyecto cuando sea necesario</translation>
    </message>
    <message>
      <source>Rubberband color:</source>
      <translation>Color de la banda de medida:</translation>
    </message>
    <message>
      <source>Locale</source>
      <translation>Idioma</translation>
    </message>
    <message>
      <source>Force Override System Locale</source>
      <translation>Forzar a ignorar el idioma del sistema</translation>
    </message>
    <message>
      <source>Locale to use instead</source>
      <translation>Idioma a usar en su lugar</translation>
    </message>
    <message>
      <source>Note: Enabling / changing overide on local requires an application restart.</source>
      <translation>Nota: activar / cambiar ignorar idioma requiere reiniciar la aplicación.</translation>
    </message>
    <message>
      <source>Additional Info</source>
      <translation>Información adicional</translation>
    </message>
    <message>
      <source>Detected active locale on your system:</source>
      <translation>Idioma activo detectado en su sistema:</translation>
    </message>
    <message>
      <source>Warn me when opening a project file saved with an older version of QGIS</source>
      <translation>Avisarme cuando se abra un proyecto guardado con una versión anterior de QGIS.</translation>
    </message>
    <message>
      <source>Selecting this will unselect the 'make lines less' jagged toggle</source>
      <translation>Con esta opción desactivará el &quot;hacer las líneas menos quebradas&quot;</translation>
    </message>
    <message>
      <source>(Specify the search radius as a percentage of the map width)</source>
      <translation>(Especificar el radio de búsqueda como porcentaje de la anchura del mapa)</translation>
    </message>
    <message>
      <source>Search Radius for Identifying Features and displaying Map Tips</source>
      <translation>Radio de búsqueda para identificar objetos espaciales y mostrar avisos del mapa</translation>
    </message>
    <message>
      <source>Digitizing</source>
      <translation>Digitalización</translation>
    </message>
    <message>
      <source>Rubberband</source>
      <translation>Banda elástica</translation>
    </message>
    <message>
      <source>Line Width:</source>
      <translation>Anchura de línea:</translation>
    </message>
    <message>
      <source>Line width in pixels</source>
      <translation>Anchura de la línea en píxeles</translation>
    </message>
    <message>
      <source>Line Colour:</source>
      <translation>Color de línea:</translation>
    </message>
    <message>
      <source>Snapping</source>
      <translation>Autoensamblado</translation>
    </message>
    <message>
      <source>Default Snapping Tolerance (in layer units):</source>
      <translation>Tolerancia de autoensamblado predeterminada (en unidades de la capa):</translation>
    </message>
    <message>
      <source>Search radius for vertex edits (in layer units):</source>
      <translation>Radio de búsqueda para edición de vértices (en unidades de la capa):</translation>
    </message>
    <message>
      <source>Default Snap Mode:</source>
      <translation>Modo de autoensamblado por omisión:</translation>
    </message>
  </context>
  <context>
    <name>QgsPasteTransformationsBase</name>
    <message>
      <source>Paste Transformations</source>
      <translation>Pegar transformaciones</translation>
    </message>
    <message>
      <source>&lt;b>Note: This function is not useful yet!&lt;/b></source>
      <translation>&lt;b>Nota: Esta función todavía no es útil&lt;/b></translation>
    </message>
    <message>
      <source>Source</source>
      <translation>Fuente</translation>
    </message>
    <message>
      <source>Destination</source>
      <translation>Destino</translation>
    </message>
    <message>
      <source>&amp;Help</source>
      <translation>&amp;Ayuda</translation>
    </message>
    <message>
      <source>F1</source>
      <translation>F1</translation>
    </message>
    <message>
      <source>Add New Transfer</source>
      <translation>Añadir nueva transformación</translation>
    </message>
    <message>
      <source>&amp;OK</source>
      <translation>&amp;Aceptar</translation>
    </message>
    <message>
      <source>&amp;Cancel</source>
      <translation>&amp;Cancelar</translation>
    </message>
  </context>
  <context>
    <name>QgsPatternDialogBase</name>
    <message>
      <source>Select a fill pattern</source>
      <translation>Seleccionar un patrón de relleno</translation>
    </message>
    <message>
      <source>No Fill</source>
      <translation>Sin relleno</translation>
    </message>
    <message>
      <source>Cancel</source>
      <translation>Cancelar</translation>
    </message>
    <message>
      <source>Ok</source>
      <translation>Aceptar</translation>
    </message>
  </context>
  <context>
    <name>QgsPgGeoprocessing</name>
    <message>
      <source>&amp;Buffer features</source>
      <translation>&amp;Crear buffer de objetos espaciales</translation>
    </message>
    <message>
      <source>A new layer is created in the database with the buffered features.</source>
      <translation>Se crea una nueva capa en la base de datos con el buffer de los objetos espaciales.</translation>
    </message>
    <message>
      <source>&amp;Geoprocessing</source>
      <translation>Geo&amp;procesamiento</translation>
    </message>
    <message>
      <source>Buffer features in layer %1</source>
      <translation>Crear buffer de objetos espaciales de la capa %1</translation>
    </message>
    <message>
      <source>Unable to add geometry column</source>
      <translation>No se puede añadir la columna de la geometría</translation>
    </message>
    <message>
      <source>Unable to add geometry column to the output table </source>
      <translation>No se ha podido añadir la columna de la geomtría a la tabla de salida </translation>
    </message>
    <message>
      <source>Unable to create table</source>
      <translation>No se puede crear la tabla</translation>
    </message>
    <message>
      <source>Failed to create the output table </source>
      <translation>No se ha podido crear la tabla de salida </translation>
    </message>
    <message>
      <source>Error connecting to the database</source>
      <translation>Error al conectarse a la base de datos</translation>
    </message>
    <message>
      <source>No GEOS support</source>
      <translation>No hay soporte para GEOS</translation>
    </message>
    <message>
      <source>Buffer function requires GEOS support in PostGIS</source>
      <translation>La función buffer requiere soporte GEOS en PostGIS</translation>
    </message>
    <message>
      <source>No Active Layer</source>
      <translation>Ninguna capa activa</translation>
    </message>
    <message>
      <source>You must select a layer in the legend to buffer</source>
      <translation>Debe seleccionar una capa en la leyenda para crear el buffer</translation>
    </message>
    <message>
      <source>Not a PostgreSQL/PostGIS Layer</source>
      <translation>No es una capa PostgreSQL/PostGIS</translation>
    </message>
    <message>
      <source>Create a buffer for a PostgreSQL layer. </source>
      <translation>Crear un área de influencia de una capa PostgreSQL. </translation>
    </message>
    <message>
      <source> is not a PostgreSQL/PostGIS layer. </source>
      <translation> no es una capa PostgreSQL/PostGIS. </translation>
    </message>
    <message>
      <source>Geoprocessing functions are only available for PostgreSQL/PostGIS Layers.</source>
      <translation>Las funciones de geoprocesamiento sólo están disponibles para capas PostgreSQL/PostGIS.</translation>
    </message>
  </context>
  <context>
    <name>QgsPgQueryBuilder</name>
    <message>
      <source>Table &lt;b>%1&lt;/b> in database &lt;b>%2&lt;/b> on host &lt;b>%3&lt;/b>, user &lt;b>%4&lt;/b></source>
      <translation>Tabla &lt;b>%1&lt;/b> en la base de datos &lt;b>%2&lt;/b> en el servidor &lt;b>%3&lt;/b>, usuario &lt;b>%4&lt;/b></translation>
    </message>
    <message>
      <source>Connection Failed</source>
      <translation>Ha fallado la conexión</translation>
    </message>
    <message>
      <source>Connection to the database failed:</source>
      <translation>Ha fallado la conexión a la base de datos:</translation>
    </message>
    <message>
      <source>Database error</source>
      <translation>Error de la base de datos</translation>
    </message>
    <message>
      <source>&lt;p>Failed to get sample of field values using SQL:&lt;/p>&lt;p></source>
      <translation>&lt;p>No se pudieron obtener muestras de los valores de los campos utilizando SQL:&lt;/p>&lt;p></translation>
    </message>
    <message>
      <source>Query Result</source>
      <translation>Resultados de la consulta</translation>
    </message>
    <message>
      <source>The where clause returned </source>
      <translation>La cláusula &quot;donde&quot; (WHERE) devolvió </translation>
    </message>
    <message>
      <source> rows.</source>
      <translation> filas.</translation>
    </message>
    <message>
      <source>Query Failed</source>
      <translation>Ha fallado la consulta</translation>
    </message>
    <message>
      <source>An error occurred when executing the query:</source>
      <translation>Se ha producido un error mientras se ejecutaba la consulta:</translation>
    </message>
    <message>
      <source>No Records</source>
      <translation>Sin registros</translation>
    </message>
    <message>
      <source>The query you specified results in zero records being returned. Valid PostgreSQL layers must have at least one feature.</source>
      <translation>La consulta que ha especificado devuelve cero registros. Las capas válidas de PostgreSQL deben tener al menos un objeto espacial.</translation>
    </message>
    <message>
      <source>No Query</source>
      <translation>Ninguna consulta</translation>
    </message>
    <message>
      <source>You must create a query before you can test it</source>
      <translation>Debe crear una consulta antes de probarlo</translation>
    </message>
    <message>
      <source>Error in Query</source>
      <translation>Error en la consulta</translation>
    </message>
  </context>
  <context>
    <name>QgsPgQueryBuilderBase</name>
    <message>
      <source>PostgreSQL Query Builder</source>
      <translation>Constructor de consultas de PostgreSQL</translation>
    </message>
    <message>
      <source>Clear</source>
      <translation>Limpiar</translation>
    </message>
    <message>
      <source>Test</source>
      <translation>Probar</translation>
    </message>
    <message>
      <source>Ok</source>
      <translation>Aceptar</translation>
    </message>
    <message>
      <source>Cancel</source>
      <translation>Cancelar</translation>
    </message>
    <message>
      <source>Values</source>
      <translation>Valores</translation>
    </message>
    <message>
      <source>All</source>
      <translation>Todos</translation>
    </message>
    <message>
      <source>Sample</source>
      <translation>Muestra</translation>
    </message>
    <message>
      <source>Fields</source>
      <translation>Campos</translation>
    </message>
    <message>
      <source>Datasource:</source>
      <translation>Fuente de datos:</translation>
    </message>
    <message>
      <source>Operators</source>
      <translation>Operadores</translation>
    </message>
    <message>
      <source>=</source>
      <translation>=</translation>
    </message>
    <message>
      <source>IN</source>
      <translation>EN</translation>
    </message>
    <message>
      <source>NOT IN</source>
      <translation>NO EN</translation>
    </message>
    <message>
      <source>&lt;</source>
      <translation>&lt;</translation>
    </message>
    <message>
      <source>></source>
      <translation>></translation>
    </message>
    <message>
      <source>%</source>
      <translation>%</translation>
    </message>
    <message>
      <source>&lt;=</source>
      <translation>&lt;=</translation>
    </message>
    <message>
      <source>>=</source>
      <translation>>=</translation>
    </message>
    <message>
      <source>!=</source>
      <translation>!=</translation>
    </message>
    <message>
      <source>LIKE</source>
      <translation>COMO</translation>
    </message>
    <message>
      <source>AND</source>
      <translation>Y</translation>
    </message>
    <message>
      <source>ILIKE</source>
      <translation>DISTINTO DE</translation>
    </message>
    <message>
      <source>OR</source>
      <translation>O</translation>
    </message>
    <message>
      <source>NOT</source>
      <translation>NO</translation>
    </message>
    <message>
      <source>SQL where clause</source>
      <translation>Cláusula &quot;donde&quot; (WHERE) de SQL</translation>
    </message>
    <message>
      <source>&lt;html>&lt;head>&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; />&lt;style type=&quot;text/css&quot;>
p, li { white-space: pre-wrap; }
&lt;/style>&lt;/head>&lt;body style=&quot; font-family:'Sans Serif'; font-size:9pt; font-weight:400; font-style:normal;&quot;>
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;>Retrieve &lt;span style=&quot; font-weight:600;&quot;>all&lt;/span> the record in the vector file (&lt;span style=&quot; font-style:italic;&quot;>if the table is big, the operation can consume some time&lt;/span>)&lt;/p>&lt;/body>&lt;/html></source>
      <translation>&lt;html>&lt;head>&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; />&lt;style type=&quot;text/css&quot;>
p, li { white-space: pre-wrap; }
&lt;/style>&lt;/head>&lt;body style=&quot; font-family:'Sans Serif'; font-size:9pt; font-weight:400; font-style:normal;&quot;>
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;>Recuperar &lt;span style=&quot; font-weight:600;&quot;>todos&lt;/span> los registros del archivo vectorial (&lt;span style=&quot; font-style:italic;&quot;>si la tabla es grande, la operación puede llevar un poco de tiempo&lt;/span>)&lt;/p>&lt;/body>&lt;/html></translation>
    </message>
    <message>
      <source>&lt;html>&lt;head>&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; />&lt;style type=&quot;text/css&quot;>
p, li { white-space: pre-wrap; }
&lt;/style>&lt;/head>&lt;body style=&quot; font-family:'Sans Serif'; font-size:9pt; font-weight:400; font-style:normal;&quot;>
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;>Take a &lt;span style=&quot; font-weight:600;&quot;>sample&lt;/span> of records in the vector file&lt;/p>&lt;/body>&lt;/html></source>
      <translation>&lt;html>&lt;head>&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; />&lt;style type=&quot;text/css&quot;>
p, li { white-space: pre-wrap; }
&lt;/style>&lt;/head>&lt;body style=&quot; font-family:'Sans Serif'; font-size:9pt; font-weight:400; font-style:normal;&quot;>
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;>Tomar una &lt;span style=&quot; font-weight:600;&quot;>muestra&lt;/span> de los registros del archivo vectorial&lt;/p>&lt;/body>&lt;/html></translation>
    </message>
    <message>
      <source>&lt;html>&lt;head>&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; />&lt;style type=&quot;text/css&quot;>
p, li { white-space: pre-wrap; }
&lt;/style>&lt;/head>&lt;body style=&quot; font-family:'Sans Serif'; font-size:9pt; font-weight:400; font-style:normal;&quot;>
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;>List of values for the current field.&lt;/p>&lt;/body>&lt;/html></source>
      <translation>&lt;html>&lt;head>&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; />&lt;style type=&quot;text/css&quot;>
p, li { white-space: pre-wrap; }
&lt;/style>&lt;/head>&lt;body style=&quot; font-family:'Sans Serif'; font-size:9pt; font-weight:400; font-style:normal;&quot;>
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;>Lista de valores para el campo actual.&lt;/p>&lt;/body>&lt;/html></translation>
    </message>
    <message>
      <source>&lt;html>&lt;head>&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; />&lt;style type=&quot;text/css&quot;>
p, li { white-space: pre-wrap; }
&lt;/style>&lt;/head>&lt;body style=&quot; font-family:'Sans Serif'; font-size:9pt; font-weight:400; font-style:normal;&quot;>
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;>List of fields in this vector file&lt;/p>&lt;/body>&lt;/html></source>
      <translation>&lt;html>&lt;head>&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; />&lt;style type=&quot;text/css&quot;>
p, li { white-space: pre-wrap; }
&lt;/style>&lt;/head>&lt;body style=&quot; font-family:'Sans Serif'; font-size:9pt; font-weight:400; font-style:normal;&quot;>
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;>Lista de campos en este archivo vectorial&lt;/p>&lt;/body>&lt;/html></translation>
    </message>
  </context>
  <context>
    <name>QgsPluginManager</name>
    <message>
      <source>No Plugins</source>
      <translation>No hay complementos</translation>
    </message>
    <message>
      <source>No QGIS plugins found in </source>
      <translation>No se han econtrado complementos de QGIS en </translation>
    </message>
    <message>
      <source>Name</source>
      <translation>Nombre</translation>
    </message>
    <message>
      <source>Version</source>
      <translation>Versión</translation>
    </message>
    <message>
      <source>Description</source>
      <translation>Descripción</translation>
    </message>
    <message>
      <source>Library name</source>
      <translation>Nombre de la biblioteca</translation>
    </message>
  </context>
  <context>
    <name>QgsPluginManagerBase</name>
    <message>
      <source>Plugin Directory</source>
      <translation>Directorio de complementos</translation>
    </message>
    <message>
      <source>To load a plugin, click the checkbox next to the plugin and click Ok</source>
      <translation>Para cargar un complemento, marque la casilla correspondiente y pulse Aceptar</translation>
    </message>
    <message>
      <source>&amp;Select All</source>
      <translation>&amp;Seleccionar todos</translation>
    </message>
    <message>
      <source>Alt+S</source>
      <translation>Alt+S</translation>
    </message>
    <message>
      <source>C&amp;lear All</source>
      <translation>&amp;Deseleccionar todos</translation>
    </message>
    <message>
      <source>Alt+L</source>
      <translation>Alt+D</translation>
    </message>
    <message>
      <source>&amp;Ok</source>
      <translation>&amp;Aceptar</translation>
    </message>
    <message>
      <source>Alt+O</source>
      <translation>Alt+A</translation>
    </message>
    <message>
      <source>&amp;Close</source>
      <translation>&amp;Cerrar</translation>
    </message>
    <message>
      <source>Alt+C</source>
      <translation>Alt+C</translation>
    </message>
    <message>
      <source>QGIS Plugin Manager</source>
      <translation>Administrador de complementos de QGIS</translation>
    </message>
  </context>
  <context>
    <name>QgsPointDialog</name>
    <message>
      <source>Zoom In</source>
      <translation>Acercar zum</translation>
    </message>
    <message>
      <source>z</source>
      <translation>z</translation>
    </message>
    <message>
      <source>Zoom Out</source>
      <translation>Alejar zum</translation>
    </message>
    <message>
      <source>Z</source>
      <translation>Z</translation>
    </message>
    <message>
      <source>Zoom To Layer</source>
      <translation>Zum a la capa</translation>
    </message>
    <message>
      <source>Zoom to Layer</source>
      <translation>Hace zum a la capa</translation>
    </message>
    <message>
      <source>Pan Map</source>
      <translation>Mover mapa</translation>
    </message>
    <message>
      <source>Pan the map</source>
      <translation>Mueve el mapa</translation>
    </message>
    <message>
      <source>Add Point</source>
      <translation>Añadir punto</translation>
    </message>
    <message>
      <source>.</source>
      <translation>.</translation>
    </message>
    <message>
      <source>Capture Points</source>
      <translation>Capturar puntos</translation>
    </message>
    <message>
      <source>Delete Point</source>
      <translation>Borrar punto</translation>
    </message>
    <message>
      <source>Delete Selected</source>
      <translation>Borrar lo seleccionado</translation>
    </message>
    <message>
      <source>Linear</source>
      <translation>Lineal</translation>
    </message>
    <message>
      <source>Helmert</source>
      <translation>Helmert</translation>
    </message>
    <message>
      <source>Choose a name for the world file</source>
      <translation>Seleccionar un nombre para el archivo de referenciación (world file)</translation>
    </message>
    <message>
      <source>-modified</source>
      <comment>Georeferencer:QgsPointDialog.cpp - used to modify a user given filename</comment>
      <translation>-modificado</translation>
    </message>
    <message>
      <source>Warning</source>
      <translation>Atención</translation>
    </message>
    <message>
      <source>Affine</source>
      <translation>Afinidad</translation>
    </message>
    <message>
      <source>Not implemented!</source>
      <translation>Sin implementar</translation>
    </message>
    <message>
      <source>&lt;p>An affine transform requires changing the original raster file. This is not yet supported.&lt;/p></source>
      <translation>&lt;p>Una transformación por afinidad requiere cambiar el archivo ráster original. Esto todavía no está soportado.&lt;/p></translation>
    </message>
    <message>
      <source>&lt;p>The </source>
      <translation>&lt;p> La transformación </translation>
    </message>
    <message>
      <source> transform is not yet supported.&lt;/p></source>
      <translation> aún no está soportada.&lt;/p></translation>
    </message>
    <message>
      <source>Error</source>
      <translation>Error</translation>
    </message>
    <message>
      <source>Could not write to </source>
      <translation>No se pudo escribir </translation>
    </message>
    <message>
      <source>Currently all modified files will be written in TIFF format.</source>
      <translation>Actualmente todos los archivos modificados se escribirán en formato TIFF.</translation>
    </message>
    <message>
      <source>&lt;p>A Helmert transform requires modifications in the raster layer.&lt;/p>&lt;p>The modified raster will be saved in a new file and a world file will be generated for this new file instead.&lt;/p>&lt;p>Are you sure that this is what you want?&lt;/p></source>
      <translation>&lt;p>Una transformacioń Helmert requiere modificaciones en la capa ráster.&lt;/p>&lt;p>El ráster modificado se guardará en un nuevo archivo y se generará un archivo de referenciación para dicho archivo.&lt;/p>&lt;p>¿Está seguro de que es eso lo que quiere?&lt;/p></translation>
    </message>
  </context>
  <context>
    <name>QgsPointDialogBase</name>
    <message>
      <source>Add points</source>
      <translation>Añadir puntos</translation>
    </message>
    <message>
      <source>Delete points</source>
      <translation>Borrar puntos</translation>
    </message>
    <message>
      <source>Zoom in</source>
      <translation>Acercar zum</translation>
    </message>
    <message>
      <source>Zoom out</source>
      <translation>Alejar zum</translation>
    </message>
    <message>
      <source>Zoom to the raster extents</source>
      <translation>Zum a la extensión del ráster</translation>
    </message>
    <message>
      <source>Pan</source>
      <translation>Mover</translation>
    </message>
    <message>
      <source>Modified raster:</source>
      <translation>Raster modificado:</translation>
    </message>
    <message>
      <source>World file:</source>
      <translation>Archivo de referenciación (world file):</translation>
    </message>
    <message>
      <source>Transform type:</source>
      <translation>Tipo de transformación:</translation>
    </message>
    <message>
      <source>Reference points</source>
      <translation>Puntos de referencia</translation>
    </message>
    <message>
      <source>...</source>
      <translation>...</translation>
    </message>
    <message>
      <source>Create</source>
      <translation>Crear</translation>
    </message>
    <message>
      <source>Create and load layer</source>
      <translation>Crear y cargar capa</translation>
    </message>
  </context>
  <context>
    <name>QgsPointStyleWidgetBase</name>
    <message>
      <source>Form3</source>
      <translation>Form3</translation>
    </message>
    <message>
      <source>Symbol Style</source>
      <translation>Estilo del símbolo</translation>
    </message>
    <message>
      <source>Scale</source>
      <translation>Escala</translation>
    </message>
  </context>
  <context>
    <name>QgsPostgresProvider</name>
    <message>
      <source>Unable to access relation</source>
      <translation>No se puede acceder a la relación</translation>
    </message>
    <message>
      <source>Unable to access the </source>
      <translation>No se puede acceder a la relación </translation>
    </message>
    <message>
      <source> relation.
The error message from the database was:
</source>
      <translation>
El mensaje de error de la base de datos fue:
</translation>
    </message>
    <message>
      <source>No GEOS Support!</source>
      <translation>No hay soporte para GEOS</translation>
    </message>
    <message>
      <source>Your PostGIS installation has no GEOS support.
Feature selection and identification will not work properly.
Please install PostGIS with GEOS support (http://geos.refractions.net)</source>
      <translation>Su instalación de PostGIS no tiene soporte para GEOS.
La selección e identificación de objetos espaciales no funcionarán correctamente.
Instale PostGIS con soporte para GEOS (http://geos.refractions.net)
</translation>
    </message>
    <message>
      <source>No suitable key column in table</source>
      <translation>No hay una columna de clave adecuada</translation>
    </message>
    <message>
      <source>The table has no column suitable for use as a key.

Qgis requires that the table either has a column of type
int4 with a unique constraint on it (which includes the
primary key) or has a PostgreSQL oid column.
</source>
      <translation>La tabla no tiene una columna adecuada para utilizar como clave.

Qgis necesita que la tabla tenga una columna de tipo
int4 con reserva única en ella (lo que incluye la
clave primaria) o que tenga una columna oid de PostgreSQL.</translation>
    </message>
    <message>
      <source>The unique index on column</source>
      <translation>El índice único en la columna</translation>
    </message>
    <message>
      <source>is unsuitable because Qgis does not currently support non-int4 type columns as a key into the table.
</source>
      <translation>no es adecuado porque actualmente Qgis no soporta columnas de tipo no-int4 como clave de la tabla.
</translation>
    </message>
    <message>
      <source>and </source>
      <translation>y </translation>
    </message>
    <message>
      <source>The unique index based on columns </source>
      <translation>El índice único basado en columnas </translation>
    </message>
    <message>
      <source> is unsuitable because Qgis does not currently support multiple columns as a key into the table.
</source>
      <translation> no es adecuado porque actualmente Qgis no soporta columnas múltiples como clave de la tabla.</translation>
    </message>
    <message>
      <source>Unable to find a key column</source>
      <translation>No se puede encontrar una columna de clave</translation>
    </message>
    <message>
      <source> derives from </source>
      <translation> deriva de </translation>
    </message>
    <message>
      <source>and is suitable.</source>
      <translation>y es adecuada.</translation>
    </message>
    <message>
      <source>and is not suitable </source>
      <translation>y no es adecuada </translation>
    </message>
    <message>
      <source>type is </source>
      <translation>es de tipo </translation>
    </message>
    <message>
      <source> and has a suitable constraint)</source>
      <translation> y tiene la reserva adecuada)</translation>
    </message>
    <message>
      <source> and does not have a suitable constraint)</source>
      <translation> y no tiene la reserva adecuada)</translation>
    </message>
    <message>
      <source>Note: </source>
      <translation>Nota: </translation>
    </message>
    <message>
      <source>initially appeared suitable but does not contain unique data, so is not suitable.
</source>
      <translation>inicialmente parecía adecuada pero no contiene datos únicos, por lo que no es aceptable.
</translation>
    </message>
    <message>
      <source>The view you selected has the following columns, none of which satisfy the above conditions:</source>
      <translation>La vista que ha seleccionado contiene las siguientes columnas, ninguna de las cuales satisface las condiciones anteriores:</translation>
    </message>
    <message>
      <source>Qgis requires that the view has a column that can be used as a unique key. Such a column should be derived from a table column of type int4 and be a primary key, have a unique constraint on it, or be a PostgreSQL oid column. To improve performance the column should also be indexed.
</source>
      <translation>Qgis necesita que la vista tenga una columna que pueda ser utilizada como clave única. Esta columna debería proceder de una columna de una tabla de tipo int4 y ser una clave primaria, tener una reserva única o ser una columna oid de PostgreSQL. Para un mejor funcionamiento la columna también debería estar indexada.</translation>
    </message>
    <message>
      <source>The view </source>
      <translation>La vista </translation>
    </message>
    <message>
      <source>has no column suitable for use as a unique key.
</source>
      <translation>no tiene columnas adecuadas para usar como clave única.
</translation>
    </message>
    <message>
      <source>No suitable key column in view</source>
      <translation>No hay una columna de clave adecuada en la vista</translation>
    </message>
    <message>
      <source>Unknown geometry type</source>
      <translation>Tipo de geometría desconocido</translation>
    </message>
    <message>
      <source>Column </source>
      <translation>Columna </translation>
    </message>
    <message>
      <source> in </source>
      <translation> en </translation>
    </message>
    <message>
      <source> has a geometry type of </source>
      <translation> tiene una geometría de tipo </translation>
    </message>
    <message>
      <source>, which Qgis does not currently support.</source>
      <translation>, que Qgis no soporta actualmente.</translation>
    </message>
    <message>
      <source>. The database communication log was:
</source>
      <translation>. La registro de comunicación de la base de datos fue:
</translation>
    </message>
    <message>
      <source>Unable to get feature type and srid</source>
      <translation>No se ha podido obtener el tipo ni el srid del objeto espacial</translation>
    </message>
    <message>
      <source>Qgis was unable to determine the type and srid of column </source>
      <translation>QGIS no pude determinar el tipo y srid de la columna </translation>
    </message>
    <message>
      <source>Unable to determine table access privileges for the </source>
      <translation>No se pueden determinar los privilegios de acceso a tabla para el </translation>
    </message>
    <message>
      <source>Error while adding features</source>
      <translation>Error al añadir objetos espaciales</translation>
    </message>
    <message>
      <source>Error while deleting features</source>
      <translation>Error al borrar objetos espaciales</translation>
    </message>
    <message>
      <source>Error while adding attributes</source>
      <translation>Error al añadir atributos</translation>
    </message>
    <message>
      <source>Error while deleting attributes</source>
      <translation>Error al borrar atributos</translation>
    </message>
    <message>
      <source>Error while changing attributes</source>
      <translation>Error al cambiar atributos</translation>
    </message>
    <message>
      <source>unexpected PostgreSQL error</source>
      <translation>error inesperado de PostgreSQL</translation>
    </message>
  </context>
  <context>
    <name>QgsProjectPropertiesBase</name>
    <message>
      <source>Project Properties</source>
      <translation>Propiedades del proyecto</translation>
    </message>
    <message>
      <source>General</source>
      <translation>General</translation>
    </message>
    <message>
      <source>Project Title</source>
      <translation>Título del proyecto</translation>
    </message>
    <message>
      <source>Default project title</source>
      <translation>Título del proyecto por omisión</translation>
    </message>
    <message>
      <source>Descriptive project name</source>
      <translation>Nombre descriptivo del proyecto</translation>
    </message>
    <message>
      <source>Map Units</source>
      <translation>Unidades del mapa</translation>
    </message>
    <message>
      <source>Meters</source>
      <translation>Metros</translation>
    </message>
    <message>
      <source>Feet</source>
      <translation>Pies</translation>
    </message>
    <message>
      <source>Decimal degrees</source>
      <translation>Grados decimales</translation>
    </message>
    <message>
      <source>Precision</source>
      <translation>Precisión</translation>
    </message>
    <message>
      <source>Automatically sets the number of decimal places in the mouse position display</source>
      <translation>Establece automáticamente el número de decimales en la visualización en la posición del ratón</translation>
    </message>
    <message>
      <source>The number of decimal places that are used when displaying the mouse position is automatically set to be enough so that moving the mouse by one pixel gives a change in the position display</source>
      <translation>El número de decimales usado cuando se visualiza en la posición del ratón se establece automaticamente de manera que un movimiento del ratón de un solo píxel cambia la posición de la visualización</translation>
    </message>
    <message>
      <source>Automatic</source>
      <translation>Automática</translation>
    </message>
    <message>
      <source>Sets the number of decimal places to use for the mouse position display</source>
      <translation>Estable el número de decimales a usar para la visualización en la posición del ratón</translation>
    </message>
    <message>
      <source>Manual</source>
      <translation>Manual</translation>
    </message>
    <message>
      <source>The number of decimal places for the manual option</source>
      <translation>Número de decimales para la opción manual</translation>
    </message>
    <message>
      <source>decimal places</source>
      <translation>lugares decimales</translation>
    </message>
    <message>
      <source>Digitizing</source>
      <translation>Digitalización</translation>
    </message>
    <message>
      <source>Map Appearance</source>
      <translation>Aspecto del mapa</translation>
    </message>
    <message>
      <source>Selection Color:</source>
      <translation>Color de selección:</translation>
    </message>
    <message>
      <source>Background Color:</source>
      <translation>Color de fondo:</translation>
    </message>
    <message>
      <source>Projection</source>
      <translation>Proyección</translation>
    </message>
    <message>
      <source>Enable on the fly projection</source>
      <translation>Activar proyección al vuelo</translation>
    </message>
    <message>
      <source>Enable topological editing</source>
      <translation>Activar edición topológica</translation>
    </message>
    <message>
      <source>Snapping options...</source>
      <translation>Opciones de autoensamblado...</translation>
    </message>
    <message>
      <source>Avoid intersections of new polygons</source>
      <translation>Evitar intersecciones de nuevos polígonos</translation>
    </message>
  </context>
  <context>
    <name>QgsProjectionSelector</name>
    <message>
      <source>QGIS SRSID: </source>
      <translation>QGIS SRSID: </translation>
    </message>
    <message>
      <source>PostGIS SRID: </source>
      <translation>PostGIS SRID: </translation>
    </message>
  </context>
  <context>
    <name>QgsProjectionSelectorBase</name>
    <message>
      <source>Projection Selector</source>
      <translation>Selector de proyección</translation>
    </message>
    <message>
      <source>Projection</source>
      <translation>Proyección</translation>
    </message>
    <message>
      <source>Search</source>
      <translation>Buscar</translation>
    </message>
    <message>
      <source>Find</source>
      <translation>Encontrar</translation>
    </message>
    <message>
      <source>Name</source>
      <translation>Nombre</translation>
    </message>
    <message>
      <source>QGIS SRSID</source>
      <translation>QGIS SRSID</translation>
    </message>
    <message>
      <source>EPSG ID</source>
      <translation>EPSG ID</translation>
    </message>
    <message>
      <source>Postgis SRID</source>
      <translation>Postgis SRID</translation>
    </message>
    <message>
      <source>Spatial Reference System</source>
      <translation>Sistema de referencia espacial</translation>
    </message>
    <message>
      <source>Id</source>
      <translation>Id</translation>
    </message>
  </context>
  <context>
    <name>QgsPythonDialog</name>
    <message>
      <source>Python console</source>
      <translation>Consola de Python</translation>
    </message>
    <message>
      <source>>>></source>
      <translation>>>></translation>
    </message>
    <message>
      <source>To access Quantum GIS environment from this python console use object from global scope which is an instance of QgisInterface class.&lt;br>Usage e.g.: iface.zoomFull()</source>
      <translation>Para acceder al entorno de Quantum GIS desde esta consola de python use objetos de ámbito global, lo que es una instancia de la clase QgisInterface.&lt;br>Ejemplo de uso: iface.zoomFull()</translation>
    </message>
  </context>
  <context>
    <name>QgsQuickPrint</name>
    <message>
      <source> km</source>
      <translation> km</translation>
    </message>
    <message>
      <source> mm</source>
      <translation> mm</translation>
    </message>
    <message>
      <source> cm</source>
      <translation> cm</translation>
    </message>
    <message>
      <source> m</source>
      <translation> m</translation>
    </message>
    <message>
      <source> miles</source>
      <translation> millas</translation>
    </message>
    <message>
      <source> mile</source>
      <translation> milla</translation>
    </message>
    <message>
      <source> inches</source>
      <translation> pulgadas</translation>
    </message>
    <message>
      <source> foot</source>
      <translation> pie</translation>
    </message>
    <message>
      <source> feet</source>
      <translation> pies</translation>
    </message>
    <message>
      <source> degree</source>
      <translation> grado</translation>
    </message>
    <message>
      <source> degrees</source>
      <translation> grados</translation>
    </message>
    <message>
      <source> unknown</source>
      <translation> desconocido</translation>
    </message>
  </context>
  <context>
    <name>QgsRasterLayer</name>
    <message>
      <source>and all other files</source>
      <translation>y todos los demás archivos</translation>
    </message>
    <message>
      <source>Not Set</source>
      <translation>No establecido</translation>
    </message>
    <message>
      <source>Raster Extent: </source>
      <translation>Extensión del ráster: </translation>
    </message>
    <message>
      <source>Clipped area: </source>
      <translation>Área rectortada: </translation>
    </message>
    <message>
      <source>Driver:</source>
      <translation>Controlador:</translation>
    </message>
    <message>
      <source>Dataset Description</source>
      <translation>Descripción del conjunto de datos</translation>
    </message>
    <message>
      <source>Dimensions:</source>
      <translation>Dimensiones:</translation>
    </message>
    <message>
      <source>X: </source>
      <translation>X: </translation>
    </message>
    <message>
      <source> Y: </source>
      <translation> Y: </translation>
    </message>
    <message>
      <source> Bands: </source>
      <translation> Bandas: </translation>
    </message>
    <message>
      <source>No Data Value</source>
      <translation>Valor sin datos</translation>
    </message>
    <message>
      <source>Data Type:</source>
      <translation>Tipo de datos:</translation>
    </message>
    <message>
      <source>GDT_Byte - Eight bit unsigned integer</source>
      <translation>GDT_Byte - Entero natural de 8 bits</translation>
    </message>
    <message>
      <source>GDT_UInt16 - Sixteen bit unsigned integer </source>
      <translation>GDT_UInt16 - Entero natural de 16 bits </translation>
    </message>
    <message>
      <source>GDT_Int16 - Sixteen bit signed integer </source>
      <translation>GDT_Int16 - Número entero de 16 bits </translation>
    </message>
    <message>
      <source>GDT_UInt32 - Thirty two bit unsigned integer </source>
      <translation>GDT_UInt32 - Entero natural de 32 bits </translation>
    </message>
    <message>
      <source>GDT_Int32 - Thirty two bit signed integer </source>
      <translation>GDT_Int32 - Número entero de 32 bits </translation>
    </message>
    <message>
      <source>GDT_Float32 - Thirty two bit floating point </source>
      <translation>GDT_Float32 - Número de coma flotante de 32 bits </translation>
    </message>
    <message>
      <source>GDT_Float64 - Sixty four bit floating point </source>
      <translation>GDT_Float64 - Número de coma flotante de 64 bits </translation>
    </message>
    <message>
      <source>GDT_CInt16 - Complex Int16 </source>
      <translation>GDT_CInt16 - Número complejo Int16 </translation>
    </message>
    <message>
      <source>GDT_CInt32 - Complex Int32 </source>
      <translation>GDT_CInt32 - Número complejo Int32 </translation>
    </message>
    <message>
      <source>GDT_CFloat32 - Complex Float32 </source>
      <translation>GDT_CFloat32 - Número conplejo Float32 </translation>
    </message>
    <message>
      <source>GDT_CFloat64 - Complex Float64 </source>
      <translation>GDT_CFloat64 - Número complejo Float64 </translation>
    </message>
    <message>
      <source>Could not determine raster data type.</source>
      <translation>No se pudo determinar el tipo de datos ráster.</translation>
    </message>
    <message>
      <source>Pyramid overviews:</source>
      <translation>Pirámides:</translation>
    </message>
    <message>
      <source>Layer Spatial Reference System: </source>
      <translation>Sistema de referencia espacial de la capa: </translation>
    </message>
    <message>
      <source>Origin:</source>
      <translation>Origen:</translation>
    </message>
    <message>
      <source>Pixel Size:</source>
      <translation>Tamaño de píxel:</translation>
    </message>
    <message>
      <source>Property</source>
      <translation>Propiedad</translation>
    </message>
    <message>
      <source>Value</source>
      <translation>Valor</translation>
    </message>
    <message>
      <source>Band</source>
      <translation>Banda</translation>
    </message>
    <message>
      <source>Band No</source>
      <translation>Número de banda</translation>
    </message>
    <message>
      <source>No Stats</source>
      <translation>No hay estadísticas</translation>
    </message>
    <message>
      <source>No stats collected yet</source>
      <translation>Todavía no se han recogido estadísticas</translation>
    </message>
    <message>
      <source>Min Val</source>
      <translation>Valor mínimo</translation>
    </message>
    <message>
      <source>Max Val</source>
      <translation>Valor máximo</translation>
    </message>
    <message>
      <source>Range</source>
      <translation>Intervalo</translation>
    </message>
    <message>
      <source>Mean</source>
      <translation>Media</translation>
    </message>
    <message>
      <source>Sum of squares</source>
      <translation>Suma de cuadrados</translation>
    </message>
    <message>
      <source>Standard Deviation</source>
      <translation>Desviación estándar</translation>
    </message>
    <message>
      <source>Sum of all cells</source>
      <translation>Suma de todas las celdas</translation>
    </message>
    <message>
      <source>Cell Count</source>
      <translation>Número de celdas</translation>
    </message>
    <message>
      <source>Average Magphase</source>
      <translation>Fase magnética (Magphase) media</translation>
    </message>
    <message>
      <source>Average</source>
      <translation>Media</translation>
    </message>
    <message>
      <source>out of extent</source>
      <translation>fuera de la extensión</translation>
    </message>
    <message>
      <source>null (no data)</source>
      <translation>nulo (sin datos)</translation>
    </message>
    <message>
      <source>NoDataValue not set</source>
      <translation>No se ha establecido el valor sin datos (NoDataValue)</translation>
    </message>
  </context>
  <context>
    <name>QgsRasterLayerProperties</name>
    <message>
      <source>Grayscale</source>
      <translation>Escala de grises</translation>
    </message>
    <message>
      <source>Pseudocolor</source>
      <translation>Pseudocolor</translation>
    </message>
    <message>
      <source>Freak Out</source>
      <translation>Alucinante</translation>
    </message>
    <message>
      <source>Palette</source>
      <translation>Paleta</translation>
    </message>
    <message>
      <source>Columns: </source>
      <translation>Columnas: </translation>
    </message>
    <message>
      <source>Rows: </source>
      <translation>Filas: </translation>
    </message>
    <message>
      <source>No-Data Value: </source>
      <translation>Valor sin datos: </translation>
    </message>
    <message>
      <source>n/a</source>
      <translation>n/d</translation>
    </message>
    <message>
      <source>Write access denied</source>
      <translation>Acceso de escritura denegado</translation>
    </message>
    <message>
      <source>Write access denied. Adjust the file permissions and try again.

</source>
      <translation>Acceso de escritura denegado. Ajuste los permisos del archivo e inténtelo de nuevo.

</translation>
    </message>
    <message>
      <source>Building pyramids failed.</source>
      <translation>Ha fallado la construcción de pirámides.</translation>
    </message>
    <message>
      <source>The file was not writeable. Some formats can not be written to, only read. You can also try to check the permissions and then try again.</source>
      <translation>El archivo no se puede escribir. Algunos formatos no se pueden escribir, sólo se pueden leer. También puede comprobar los permisos e intentarlo de nuevo.</translation>
    </message>
    <message>
      <source>Building pyramid overviews is not supported on this type of raster.</source>
      <translation>La creación de pirámides no es soportada en este tipo de ráster.</translation>
    </message>
    <message>
      <source>Custom Colormap</source>
      <translation>Mapa de colores personalizado</translation>
    </message>
    <message>
      <source>No Stretch</source>
      <translation>Sin estiramiento</translation>
    </message>
    <message>
      <source>Stretch To MinMax</source>
      <translation>Estirar a MinMax</translation>
    </message>
    <message>
      <source>Stretch And Clip To MinMax</source>
      <translation>Estirar y unir a MinMax</translation>
    </message>
    <message>
      <source>Clip To MinMax</source>
      <translation>Unir a MinMax</translation>
    </message>
    <message>
      <source>Discrete</source>
      <translation>Discreto</translation>
    </message>
    <message>
      <source>Linearly</source>
      <translation>Linealmente</translation>
    </message>
    <message>
      <source>Equal interval</source>
      <translation>Intervalo igual</translation>
    </message>
    <message>
      <source>Quantiles</source>
      <translation>Cuantiles</translation>
    </message>
    <message>
      <source>Description</source>
      <translation>Descripción</translation>
    </message>
    <message>
      <source>Large resolution raster layers can slow navigation in QGIS.</source>
      <translation>Las capas ráster de elevada resolución pueden ralentizar la navegación en QGIS.</translation>
    </message>
    <message>
      <source>By creating lower resolution copies of the data (pyramids) performance can be considerably improved as QGIS selects the most suitable resolution to use depending on the level of zoom.</source>
      <translation>Creando copias de menor resolución de los datos (pirámides) se puede mejorar el rendimiento de forma considerable, ya que QGIS selecciona la resolución más adecuada dependiendo del nivel de zum.</translation>
    </message>
    <message>
      <source>You must have write access in the directory where the original data is stored to build pyramids.</source>
      <translation>Debe tener permiso de escritura en el directorio donde están almacenados los datos originales para construir las pirámides.</translation>
    </message>
    <message>
      <source>Please note that building pyramids may alter the original data file and once created they cannot be removed!</source>
      <translation>Nota: la construcción de pirámides puede alterar el archivo original de los datos y una vez creadas no podrán ser eliminadas.</translation>
    </message>
    <message>
      <source>Please note that building pyramids could corrupt your image - always make a backup of your data first!</source>
      <translation>Nota: la construcción de pirámides puede desvirtuar la imagen - ¡realice siempre una copia de seguridad antes!</translation>
    </message>
    <message>
      <source>Red</source>
      <translation>Rojo</translation>
    </message>
    <message>
      <source>Green</source>
      <translation>Verde</translation>
    </message>
    <message>
      <source>Blue</source>
      <translation>Azul</translation>
    </message>
    <message>
      <source>Percent Transparent</source>
      <translation>Porcentaje transparente</translation>
    </message>
    <message>
      <source>Gray</source>
      <translation>Gris</translation>
    </message>
    <message>
      <source>Indexed Value</source>
      <translation>Valor indexado</translation>
    </message>
    <message>
      <source>User Defined</source>
      <translation>Definido por el usuario</translation>
    </message>
    <message>
      <source>No Scaling</source>
      <translation>Sin escalado</translation>
    </message>
    <message>
      <source>No-Data Value: Not Set</source>
      <translation>Valor sin datos: no establecido</translation>
    </message>
    <message>
      <source>Save file</source>
      <translation>Guardar archivo</translation>
    </message>
    <message>
      <source>Textfile (*.txt)</source>
      <translation>Archivo de texto (*.txt)</translation>
    </message>
    <message>
      <source>QGIS Generated Transparent Pixel Value Export File</source>
      <translation>Archivo de exportación de valores de píxel transparente generado por QGIS</translation>
    </message>
    <message>
      <source>Open file</source>
      <translation>Abrir archivo</translation>
    </message>
    <message>
      <source>Import Error</source>
      <translation>Error de importación</translation>
    </message>
    <message>
      <source>The following lines contained errors

</source>
      <translation>Las siguientes líneas contenían errores</translation>
    </message>
    <message>
      <source>Read access denied</source>
      <translation>Acceso de lectura denegado</translation>
    </message>
    <message>
      <source>Read access denied. Adjust the file permissions and try again.

</source>
      <translation>Acceso de lectura denegado. Ajuste los permisos de archivo y pruebe de nuevo.</translation>
    </message>
    <message>
      <source>Color Ramp</source>
      <translation>Rampa de colores</translation>
    </message>
  </context>
  <context>
    <name>QgsRasterLayerPropertiesBase</name>
    <message>
      <source>Raster Layer Properties</source>
      <translation>Propiedades de la capa ráster</translation>
    </message>
    <message>
      <source>Symbology</source>
      <translation>Simbología</translation>
    </message>
    <message>
      <source>&lt;p align=&quot;right&quot;>Full&lt;/p></source>
      <translation>&lt;p align=&quot;right&quot;>Total&lt;/p></translation>
    </message>
    <message>
      <source>None</source>
      <translation>Nada</translation>
    </message>
    <message>
      <source>Invert Color Map</source>
      <translation>Invertir colores del mapa</translation>
    </message>
    <message>
      <source>Color Map</source>
      <translation>Mapa en color</translation>
    </message>
    <message>
      <source>Gray</source>
      <translation>Gris</translation>
    </message>
    <message>
      <source>General</source>
      <translation>General</translation>
    </message>
    <message>
      <source>Thumbnail</source>
      <translation>Miniatura</translation>
    </message>
    <message>
      <source>Legend:</source>
      <translation>Leyenda:</translation>
    </message>
    <message>
      <source>Palette:</source>
      <translation>Paleta:</translation>
    </message>
    <message>
      <source>Display Name:</source>
      <translation>Mostrar nombre:</translation>
    </message>
    <message>
      <source>Layer Source:</source>
      <translation>Fuente de la capa:</translation>
    </message>
    <message>
      <source>Columns:</source>
      <translation>Columnas:</translation>
    </message>
    <message>
      <source>Rows:</source>
      <translation>Filas:</translation>
    </message>
    <message>
      <source>No Data:</source>
      <translation>Sin datos:</translation>
    </message>
    <message>
      <source>DebugInfo</source>
      <translation>Información de depurado</translation>
    </message>
    <message>
      <source>Scale Dependent Visibility</source>
      <translation>Visibilidad según la escala</translation>
    </message>
    <message>
      <source>Maximum scale at which this layer will be displayed. </source>
      <translation>Escala máxima a la que se mostrará esta capa. </translation>
    </message>
    <message>
      <source>Maximum 1:</source>
      <translation>Máximo 1:</translation>
    </message>
    <message>
      <source>Minimum scale at which this layer will be displayed. </source>
      <translation>Escala mínima a la que se mostrará esta capa. </translation>
    </message>
    <message>
      <source>Minimum 1:</source>
      <translation>Mínimo 1:</translation>
    </message>
    <message>
      <source>Spatial Reference System</source>
      <translation>Sistema de referencia espacial</translation>
    </message>
    <message>
      <source>Change</source>
      <translation>Cambiar</translation>
    </message>
    <message>
      <source>Metadata</source>
      <translation>Metadatos</translation>
    </message>
    <message>
      <source>Pyramids</source>
      <translation>Pirámides</translation>
    </message>
    <message>
      <source>Pyramid Resolutions</source>
      <translation>Resolución de las pirámides</translation>
    </message>
    <message>
      <source>Resampling Method</source>
      <translation>Método de remuestreo</translation>
    </message>
    <message>
      <source>Average</source>
      <translation>Media</translation>
    </message>
    <message>
      <source>Nearest Neighbour</source>
      <translation>Vecino más próximo</translation>
    </message>
    <message>
      <source>Build Pyramids</source>
      <translation>Construir pirámides</translation>
    </message>
    <message>
      <source>Histogram</source>
      <translation>Histograma</translation>
    </message>
    <message>
      <source>Options</source>
      <translation>Opciones</translation>
    </message>
    <message>
      <source>Column Count:</source>
      <translation>Número de columnas:</translation>
    </message>
    <message>
      <source>Out Of Range OK?</source>
      <translation>¿Permitir valores fuera de rango?</translation>
    </message>
    <message>
      <source>Allow Approximation</source>
      <translation>Permitir aproximación</translation>
    </message>
    <message>
      <source>Chart Type</source>
      <translation>Tipo de gráfico</translation>
    </message>
    <message>
      <source>Line Graph</source>
      <translation>Gráfico de líneas</translation>
    </message>
    <message>
      <source>Bar Chart</source>
      <translation>Gráfico de barras</translation>
    </message>
    <message>
      <source>Refresh</source>
      <translation>Actualizar</translation>
    </message>
    <message>
      <source>Grayscale Band Scaling</source>
      <translation>Escalado de banda de escala de grises</translation>
    </message>
    <message>
      <source>Max</source>
      <translation>Máx</translation>
    </message>
    <message>
      <source>Std Deviation</source>
      <translation>Desviación estándar</translation>
    </message>
    <message>
      <source>Custom Min Max Values:</source>
      <translation>Valores mínimo y máximo personalizados:</translation>
    </message>
    <message>
      <source>Min</source>
      <translation>Mín</translation>
    </message>
    <message>
      <source>Contrast Enhancement</source>
      <translation>Mejora de contraste</translation>
    </message>
    <message>
      <source>Load Min Max Values From Band(s)</source>
      <translation>Cargar valores mínimo y máximo de banda(s)</translation>
    </message>
    <message>
      <source>RGB Scaling</source>
      <translation>Escalado RGB</translation>
    </message>
    <message>
      <source>&lt;b>&lt;font color='blue'>Max&lt;/font>&lt;/b></source>
      <translation>&lt;b>&lt;font color='blue'>Max&lt;/font>&lt;/b></translation>
    </message>
    <message>
      <source>Custom Min Max Values</source>
      <translation>Valores mínimo y máximo personalizados</translation>
    </message>
    <message>
      <source>&lt;b>&lt;font color='green'>Min&lt;/font>&lt;/b></source>
      <translation>&lt;b>&lt;font color='green'>Mín&lt;/font>&lt;/b></translation>
    </message>
    <message>
      <source>&lt;b>&lt;font color='green'>Max&lt;/font>&lt;/b></source>
      <translation>&lt;b>&lt;font color='green'>Max&lt;/font>&lt;/b></translation>
    </message>
    <message>
      <source>&lt;b>&lt;font color='red'>Min&lt;/font>&lt;/b></source>
      <translation>&lt;b>&lt;font color='red'>Mín&lt;/font>&lt;/b></translation>
    </message>
    <message>
      <source>&lt;b>&lt;font color='red'>Max&lt;/font>&lt;/b></source>
      <translation>&lt;b>&lt;font color='red'>Max&lt;/font>&lt;/b></translation>
    </message>
    <message>
      <source>&lt;b>&lt;font color='blue'>Min&lt;/font>&lt;/b></source>
      <translation>&lt;b>&lt;font color='blue'>Mín&lt;/font>&lt;/b></translation>
    </message>
    <message>
      <source>Grayscale Band Selection</source>
      <translation>Selección de banda de escala de grises</translation>
    </message>
    <message>
      <source>RGB Mode Band Selection</source>
      <translation>Selección de banda de modo RGB</translation>
    </message>
    <message>
      <source>&lt;b>&lt;font color='blue'>Blue&lt;/font>&lt;/b></source>
      <translation>&lt;b>&lt;font color='blue'>Azul&lt;/font>&lt;/b></translation>
    </message>
    <message>
      <source>&lt;b>&lt;font color='green'>Green&lt;/font>&lt;/b></source>
      <translation>&lt;b>&lt;font color='green'>Verde&lt;/font>&lt;/b></translation>
    </message>
    <message>
      <source>&lt;b>&lt;font color='red'>Red&lt;/font>&lt;/b></source>
      <translation>&lt;b>&lt;font color='red'>Rojo&lt;/font>&lt;/b></translation>
    </message>
    <message>
      <source>Global Transparency</source>
      <translation>Transparencia global</translation>
    </message>
    <message>
      <source> 00%</source>
      <translation> 00%</translation>
    </message>
    <message>
      <source>Render as</source>
      <translation>Representar como</translation>
    </message>
    <message>
      <source>Single Band Gray</source>
      <translation>Gris de una banda</translation>
    </message>
    <message>
      <source>Three Band Color</source>
      <translation>Color de tres bandas</translation>
    </message>
    <message>
      <source>Transparent Pixels</source>
      <translation>Píxeles transparentes</translation>
    </message>
    <message>
      <source>Transparent Band:</source>
      <translation>Banda transparente:</translation>
    </message>
    <message>
      <source>Custom Transparency List</source>
      <translation>Lista de transparencia personalizada</translation>
    </message>
    <message>
      <source>Transparency Layer;</source>
      <translation>Capa de transparencia:</translation>
    </message>
    <message>
      <source>Add Values Manually</source>
      <translation>Añadir valores manualmente</translation>
    </message>
    <message>
      <source>...</source>
      <translation>...</translation>
    </message>
    <message>
      <source>Add Values From Display</source>
      <translation>Añadir valores desde la visualización</translation>
    </message>
    <message>
      <source>Remove Selected Row</source>
      <translation>Eliminar las filas seleccionadas</translation>
    </message>
    <message>
      <source>Default Values</source>
      <translation>Valores predeterminados</translation>
    </message>
    <message>
      <source>Import From File</source>
      <translation>Importar desde archivo</translation>
    </message>
    <message>
      <source>Export To File</source>
      <translation>Exportar a archivo</translation>
    </message>
    <message>
      <source>No Data Value:</source>
      <translation>Valor de sin datos:</translation>
    </message>
    <message>
      <source>Reset No Data Value</source>
      <translation>Restablecer valor de sin datos</translation>
    </message>
    <message>
      <source>Colormap</source>
      <translation>Mapa de color</translation>
    </message>
    <message>
      <source>Number of entries:</source>
      <translation>Número de entradas:</translation>
    </message>
    <message>
      <source>Delete entry</source>
      <translation>Borrar entrada</translation>
    </message>
    <message>
      <source>Classify</source>
      <translation>Clasificar</translation>
    </message>
    <message>
      <source>1</source>
      <translation>1</translation>
    </message>
    <message>
      <source>2</source>
      <translation>2</translation>
    </message>
    <message>
      <source>Color interpolation:</source>
      <translation>Interpolación de color:</translation>
    </message>
    <message>
      <source>Classification mode:</source>
      <translation>Modo de clasificación:</translation>
    </message>
  </context>
  <context>
    <name>QgsRunProcess</name>
    <message>
      <source>Unable to run command</source>
      <translation>No se puede ejecutar el comando</translation>
    </message>
    <message>
      <source>Starting</source>
      <translation>Empezando</translation>
    </message>
    <message>
      <source>Done</source>
      <translation>Hecho</translation>
    </message>
  </context>
  <context>
    <name>QgsScaleBarPlugin</name>
    <message>
      <source>Bottom Left</source>
      <translation>Inferior izquierda</translation>
    </message>
    <message>
      <source>Top Left</source>
      <translation>Superior izquierda</translation>
    </message>
    <message>
      <source>Top Right</source>
      <translation>Superior derecha</translation>
    </message>
    <message>
      <source>Bottom Right</source>
      <translation>Inferior derecha</translation>
    </message>
    <message>
      <source>Tick Down</source>
      <translation>Marcas abajo</translation>
    </message>
    <message>
      <source>Tick Up</source>
      <translation>Marcas arriba</translation>
    </message>
    <message>
      <source>Bar</source>
      <translation>Barra</translation>
    </message>
    <message>
      <source>Box</source>
      <translation>Cajetín</translation>
    </message>
    <message>
      <source>&amp;Scale Bar</source>
      <translation>Barra de &amp;escala</translation>
    </message>
    <message>
      <source>Creates a scale bar that is displayed on the map canvas</source>
      <translation>Crea una barra de escala que se muestra en la Vista del mapa</translation>
    </message>
    <message>
      <source>&amp;Decorations</source>
      <translation>&amp;Ilustraciones</translation>
    </message>
    <message>
      <source> metres/km</source>
      <translation> metros/km</translation>
    </message>
    <message>
      <source> feet</source>
      <translation> pies</translation>
    </message>
    <message>
      <source> degrees</source>
      <translation> grados</translation>
    </message>
    <message>
      <source> km</source>
      <translation> km</translation>
    </message>
    <message>
      <source> mm</source>
      <translation> mm</translation>
    </message>
    <message>
      <source> cm</source>
      <translation> cm</translation>
    </message>
    <message>
      <source> m</source>
      <translation> m</translation>
    </message>
    <message>
      <source> foot</source>
      <translation> pie</translation>
    </message>
    <message>
      <source> degree</source>
      <translation> grado</translation>
    </message>
    <message>
      <source> unknown</source>
      <translation> desconocido</translation>
    </message>
    <message>
      <source> feet/miles</source>
      <translation> pies/millas</translation>
    </message>
    <message>
      <source> miles</source>
      <translation> millas</translation>
    </message>
    <message>
      <source> mile</source>
      <translation> milla</translation>
    </message>
    <message>
      <source> inches</source>
      <translation> pulgadas</translation>
    </message>
  </context>
  <context>
    <name>QgsScaleBarPluginGuiBase</name>
    <message>
      <source>Scale Bar Plugin</source>
      <translation>Complemento de Barra de escala</translation>
    </message>
    <message>
      <source>Click to select the colour</source>
      <translation>Pulsar para seleccionar el color</translation>
    </message>
    <message>
      <source>Size of bar:</source>
      <translation>Tamaño de la barra:</translation>
    </message>
    <message>
      <source>Automatically snap to round number on resize</source>
      <translation>Redondear números automáticamente al cambiar de tamaño</translation>
    </message>
    <message>
      <source>Colour of bar:</source>
      <translation>Color de la barra:</translation>
    </message>
    <message>
      <source>Top Left</source>
      <translation>Superior izquierda</translation>
    </message>
    <message>
      <source>Top Right</source>
      <translation>Superior derecha</translation>
    </message>
    <message>
      <source>Bottom Left</source>
      <translation>Inferior izquierda</translation>
    </message>
    <message>
      <source>Bottom Right</source>
      <translation>Inferior derecha</translation>
    </message>
    <message>
      <source>Enable scale bar</source>
      <translation>Activar barra de escala</translation>
    </message>
    <message>
      <source>Scale bar style:</source>
      <translation>Estilo de la barra de escala:</translation>
    </message>
    <message>
      <source>Select the style of the scale bar</source>
      <translation>Seleccionar el estilo de la barra de escala</translation>
    </message>
    <message>
      <source>Tick Down</source>
      <translation>Marcas abajo</translation>
    </message>
    <message>
      <source>Tick Up</source>
      <translation>Marcas arriba</translation>
    </message>
    <message>
      <source>Box</source>
      <translation>Cajetín</translation>
    </message>
    <message>
      <source>Bar</source>
      <translation>Barra</translation>
    </message>
    <message>
      <source>Placement:</source>
      <translation>Ubicación:</translation>
    </message>
    <message>
      <source>&lt;html>&lt;head>&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; />&lt;/head>&lt;body style=&quot; white-space: pre-wrap; font-family:Sans Serif; font-size:9pt; font-weight:400; font-style:normal; text-decoration:none;&quot;>&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;>This plugin draws a scale bar on the map. Please note the size option below is a 'preferred' size and may have to be altered by QGIS depending on the level of zoom.  The size is measured according to the map units specified in the project properties.&lt;/p>&lt;/body>&lt;/html></source>
      <translation>&lt;html>&lt;head>&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; />&lt;/head>&lt;body style=&quot; white-space: pre-wrap; font-family:Sans Serif; font-size:9pt; font-weight:400; font-style:normal; text-decoration:none;&quot;>&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;>Este complemento dibuja una barra de escala sobre el mapa. Tenga en cuenta que la opción Tamaño indicada abajo es un tamaño 'preferido' y puede que tenga que ser alterada por QGIS dependiendo del nivel de zum. El tamaño se establece de acuerdo con las unidades del mapa especificadas en las propiedades del proyecto.&lt;/p>&lt;/body>&lt;/html></translation>
    </message>
  </context>
  <context>
    <name>QgsSearchQueryBuilder</name>
    <message>
      <source>No matching features found.</source>
      <translation>No se han encontrado objetos espaciales coincidentes.</translation>
    </message>
    <message>
      <source>Search results</source>
      <translation>Resultados de la búsqueda</translation>
    </message>
    <message>
      <source>Search string parsing error</source>
      <translation>Error al analizar la cadena de búsqueda</translation>
    </message>
    <message>
      <source>No Records</source>
      <translation>Ningún registro</translation>
    </message>
    <message>
      <source>The query you specified results in zero records being returned.</source>
      <translation>La consulta que especificó no ha devuelto ningún registro.</translation>
    </message>
    <message>
      <source>Search query builder</source>
      <translation>Constructor de consultas de búsqueda</translation>
    </message>
    <message>
      <source>Found %d matching features.</source>
      <translation>Se han encontrado %d elementos coincidentes.</translation>
    </message>
  </context>
  <context>
    <name>QgsServerSourceSelect</name>
    <message>
      <source>Are you sure you want to remove the </source>
      <translation>¿Está seguro de que quiere eliminar la conexión </translation>
    </message>
    <message>
      <source> connection and all associated settings?</source>
      <translation> y toda su configuración?</translation>
    </message>
    <message>
      <source>Confirm Delete</source>
      <translation>Confirmar borrado</translation>
    </message>
    <message>
      <source>WMS Provider</source>
      <translation>Proveedor WMS</translation>
    </message>
    <message>
      <source>Could not open the WMS Provider</source>
      <translation>No se pudo conectar al proveedor WMS</translation>
    </message>
    <message>
      <source>Select Layer</source>
      <translation>Seleccionar capa</translation>
    </message>
    <message>
      <source>You must select at least one layer first.</source>
      <translation>Primero debe seleccionar al menos una capa.</translation>
    </message>
    <message>
      <source>Coordinate Reference System</source>
      <translation>Sistema de coordenadas de referencia</translation>
    </message>
    <message>
      <source>There are no available coordinate reference system for the set of layers you've selected.</source>
      <translation>No hay un sistema de coordenadas de referencia para las capas seleccionadas.</translation>
    </message>
    <message>
      <source>Could not understand the response.  The</source>
      <translation>La respuesta es ininteligible. El proveedor </translation>
    </message>
    <message>
      <source>provider said</source>
      <translation> ha dicho</translation>
    </message>
    <message>
      <source>WMS proxies</source>
      <translation>Proxy del servidor WMS</translation>
    </message>
    <message>
      <source>&lt;p>Several WMS servers have been added to the server list. Note that the proxy fields have been left blank and if you access the internet via a web proxy, you will need to individually set the proxy fields with appropriate values.&lt;/p></source>
      <translation>&lt;p>Se han añadido varios servidores WMS la lista de servidores. Los campos proxy se han dejado en blanco y si accede a internet a través de un servidor proxy necesitará rellenar los campos del proxy de manera individual con valores apropiados.&lt;/p></translation>
    </message>
    <message>
      <source>Coordinate Reference System (%1 available)</source>
      <translation>Sistema de referencia de coordenadas (%1 disponible)</translation>
    </message>
  </context>
  <context>
    <name>QgsServerSourceSelectBase</name>
    <message>
      <source>Add Layer(s) from a Server</source>
      <translation>Añadir capa(s) de un servidor</translation>
    </message>
    <message>
      <source>Server Connections</source>
      <translation>Conexiones de servidor</translation>
    </message>
    <message>
      <source>Adds a few example WMS servers</source>
      <translation>Añadir unos cuantos servidores WMS de ejemplo</translation>
    </message>
    <message>
      <source>Add default servers</source>
      <translation>Añadir servidores por omisión</translation>
    </message>
    <message>
      <source>C&amp;onnect</source>
      <translation>Co&amp;nectar</translation>
    </message>
    <message>
      <source>Edit</source>
      <translation>Editar</translation>
    </message>
    <message>
      <source>Delete</source>
      <translation>Borrar</translation>
    </message>
    <message>
      <source>&amp;New</source>
      <translation>&amp;Nuevo</translation>
    </message>
    <message>
      <source>Coordinate Reference System</source>
      <translation>Sistema de coordenadas de referencia</translation>
    </message>
    <message>
      <source>Change ...</source>
      <translation>Cambiar...</translation>
    </message>
    <message>
      <source>Ready</source>
      <translation>Preparado</translation>
    </message>
    <message>
      <source>&amp;Add</source>
      <translation>&amp;Añadir</translation>
    </message>
    <message>
      <source>Alt+A</source>
      <translation>Alt+A</translation>
    </message>
    <message>
      <source>Layers</source>
      <translation>Capas</translation>
    </message>
    <message>
      <source>ID</source>
      <translation>ID</translation>
    </message>
    <message>
      <source>Name</source>
      <translation>Nombre</translation>
    </message>
    <message>
      <source>Title</source>
      <translation>Título</translation>
    </message>
    <message>
      <source>Abstract</source>
      <translation>Resumen</translation>
    </message>
    <message>
      <source>Image encoding</source>
      <translation>Codificación de la imagen</translation>
    </message>
    <message>
      <source>Help</source>
      <translation>Ayuda</translation>
    </message>
    <message>
      <source>F1</source>
      <translation>F1</translation>
    </message>
    <message>
      <source>C&amp;lose</source>
      <translation>&amp;Cerrar</translation>
    </message>
    <message>
      <source>Alt+L</source>
      <translation>Alt+C</translation>
    </message>
  </context>
  <context>
    <name>QgsShapeFile</name>
    <message>
      <source>The database gave an error while executing this SQL:</source>
      <translation>La base de datos dio un error mientras ejecutaba esta SQL:</translation>
    </message>
    <message>
      <source>The error was:</source>
      <translation>El error fue:</translation>
    </message>
    <message>
      <source>... (rest of SQL trimmed)</source>
      <comment>is appended to a truncated SQL statement</comment>
      <translation>... (cortado el resto de la SQL)</translation>
    </message>
  </context>
  <context>
    <name>QgsSingleSymbolDialog</name>
    <message>
      <source>Solid Line</source>
      <translation>Línea continua</translation>
    </message>
    <message>
      <source>Dash Line</source>
      <translation>Línea de rayas</translation>
    </message>
    <message>
      <source>Dot Line</source>
      <translation>Línea de puntos</translation>
    </message>
    <message>
      <source>Dash Dot Line</source>
      <translation>Línea de rayas y puntos</translation>
    </message>
    <message>
      <source>Dash Dot Dot Line</source>
      <translation>Línea de raya punto punto</translation>
    </message>
    <message>
      <source>No Pen</source>
      <translation>Sin dibujo</translation>
    </message>
    <message>
      <source>Solid Pattern</source>
      <translation>Patrón sólido</translation>
    </message>
    <message>
      <source>Hor Pattern</source>
      <translation>Patrón horizontal</translation>
    </message>
    <message>
      <source>Ver Pattern</source>
      <translation>Patrón vertical</translation>
    </message>
    <message>
      <source>Cross Pattern</source>
      <translation>Patrón cruzado</translation>
    </message>
    <message>
      <source>BDiag Pattern</source>
      <translation>Patrón diagonal /</translation>
    </message>
    <message>
      <source>FDiag Pattern</source>
      <translation>Patrón diagonal \</translation>
    </message>
    <message>
      <source>Diag Cross Pattern</source>
      <translation>Patrón diag. cruzado</translation>
    </message>
    <message>
      <source>Dense1 Pattern</source>
      <translation>Patrón denso 1</translation>
    </message>
    <message>
      <source>Dense2 Pattern</source>
      <translation>Patrón denso 2</translation>
    </message>
    <message>
      <source>Dense3 Pattern</source>
      <translation>Patrón denso 3</translation>
    </message>
    <message>
      <source>Dense4 Pattern</source>
      <translation>Patrón denso 4</translation>
    </message>
    <message>
      <source>Dense5 Pattern</source>
      <translation>Patrón denso 5</translation>
    </message>
    <message>
      <source>Dense6 Pattern</source>
      <translation>Patrón denso 6</translation>
    </message>
    <message>
      <source>Dense7 Pattern</source>
      <translation>Patrón denso 7</translation>
    </message>
    <message>
      <source>No Brush</source>
      <translation>Ningún pincel</translation>
    </message>
    <message>
      <source>Texture Pattern</source>
      <translation>Patrón de textura</translation>
    </message>
  </context>
  <context>
    <name>QgsSingleSymbolDialogBase</name>
    <message>
      <source>Single Symbol</source>
      <translation>Símbolo único</translation>
    </message>
    <message>
      <source>Size</source>
      <translation>Tamaño</translation>
    </message>
    <message>
      <source>Point Symbol</source>
      <translation>Símbolo de punto</translation>
    </message>
    <message>
      <source>Area scale field</source>
      <translation>Campo de escala de área</translation>
    </message>
    <message>
      <source>Rotation field</source>
      <translation>Campo de rotación</translation>
    </message>
    <message>
      <source>Style Options</source>
      <translation>Opciones de estilo</translation>
    </message>
    <message>
      <source>...</source>
      <translation>...</translation>
    </message>
    <message>
      <source>Outline style</source>
      <translation>Estilo de línea exterior</translation>
    </message>
    <message>
      <source>Outline color</source>
      <translation>Color de línea exterior</translation>
    </message>
    <message>
      <source>Outline width</source>
      <translation>Anchura de línea exterior</translation>
    </message>
    <message>
      <source>Fill color</source>
      <translation>Color de relleno</translation>
    </message>
    <message>
      <source>Fill style</source>
      <translation>Estilo de relleno</translation>
    </message>
    <message>
      <source>Label</source>
      <translation>Etiqueta</translation>
    </message>
  </context>
  <context>
    <name>QgsSnappingDialog</name>
    <message>
      <source>to vertex</source>
      <translation>a vértice</translation>
    </message>
    <message>
      <source>to segment</source>
      <translation>a segmento</translation>
    </message>
    <message>
      <source>to vertex and segment</source>
      <translation>a vértice y segmento</translation>
    </message>
  </context>
  <context>
    <name>QgsSnappingDialogBase</name>
    <message>
      <source>Snapping options</source>
      <translation>Opciones de autoensamblado</translation>
    </message>
    <message>
      <source>Layer</source>
      <translation>Capa</translation>
    </message>
    <message>
      <source>Mode</source>
      <translation>Modo</translation>
    </message>
    <message>
      <source>Tolerance</source>
      <translation>Tolerancia</translation>
    </message>
  </context>
  <context>
    <name>QgsSpit</name>
    <message>
      <source>File Name</source>
      <translation>Nombre de archivo</translation>
    </message>
    <message>
      <source>Feature Class</source>
      <translation>Clase de objetos espaciales</translation>
    </message>
    <message>
      <source>Features</source>
      <translation>Objetos espaciales</translation>
    </message>
    <message>
      <source>DB Relation Name</source>
      <translation>Nombre de la relación de la BD</translation>
    </message>
    <message>
      <source>Schema</source>
      <translation>Esquema</translation>
    </message>
    <message>
      <source>New Connection</source>
      <translation>Nueva conexión</translation>
    </message>
    <message>
      <source>Are you sure you want to remove the [</source>
      <translation>¿Está seguro de que quiere eliminar la conexión [</translation>
    </message>
    <message>
      <source>] connection and all associated settings?</source>
      <translation>] y toda su configuración?</translation>
    </message>
    <message>
      <source>Confirm Delete</source>
      <translation>Confirmar borrado</translation>
    </message>
    <message>
      <source>Add Shapefiles</source>
      <translation>Añadir archivos shape</translation>
    </message>
    <message>
      <source>Shapefiles (*.shp);;All files (*.*)</source>
      <translation>Archivos shape (*.shp);;Todos los archivos (*.*)</translation>
    </message>
    <message>
      <source> - Edit Column Names</source>
      <translation> - Editar nombres de columna</translation>
    </message>
    <message>
      <source>The following Shapefile(s) could not be loaded:

</source>
      <translation>Los siguientes archivos shape no se han podido cargar:

</translation>
    </message>
    <message>
      <source>REASON: File cannot be opened</source>
      <translation>MOTIVO: el archivo no se puede abrir</translation>
    </message>
    <message>
      <source>REASON: One or both of the Shapefile files (*.dbf, *.shx) missing</source>
      <translation>MOTIVO: faltan uno o varios de los archivos del shape (*.dbf, *shx)</translation>
    </message>
    <message>
      <source>General Interface Help:</source>
      <translation>Ayuda de la Interfaz general:</translation>
    </message>
    <message>
      <source>PostgreSQL Connections:</source>
      <translation>Conexiones PostgreSQL:</translation>
    </message>
    <message>
      <source>[New ...] - create a new connection</source>
      <translation>[Nueva...] - crear una conexión nueva</translation>
    </message>
    <message>
      <source>[Edit ...] - edit the currently selected connection</source>
      <translation>[Editar...] - editar la conexión seleccionada actualmente</translation>
    </message>
    <message>
      <source>[Remove] - remove the currently selected connection</source>
      <translation>[Eliminar] - eliminar la conexión seleccionada actualmente</translation>
    </message>
    <message>
      <source>-you need to select a connection that works (connects properly) in order to import files</source>
      <translation>-debe seleccionar una conexión que funcione para poder importar archivos</translation>
    </message>
    <message>
      <source>-when changing connections Global Schema also changes accordingly</source>
      <translation>-cuando se cambian las conexiones el esquema global cambia en concordancia</translation>
    </message>
    <message>
      <source>Shapefile List:</source>
      <translation>Lista de archivos shape:</translation>
    </message>
    <message>
      <source>[Add ...] - open a File dialog and browse to the desired file(s) to import</source>
      <translation>[Añadir...] - abrir un cuadro de diálogo y buscar los archivos a importar</translation>
    </message>
    <message>
      <source>[Remove] - remove the currently selected file(s) from the list</source>
      <translation>[Eliminar] - eliminar los archivos seleccionados de la lista</translation>
    </message>
    <message>
      <source>[Remove All] - remove all the files in the list</source>
      <translation>[Eliminar todos] - eliminar todos los archivos de la lista</translation>
    </message>
    <message>
      <source>[SRID] - Reference ID for the shapefiles to be imported</source>
      <translation>[SRID] - ID de referencia para los archivos shape a importar</translation>
    </message>
    <message>
      <source>[Use Default (SRID)] - set SRID to -1</source>
      <translation>[Utilizar (SRID) por omisión] - establecer SRID a -1</translation>
    </message>
    <message>
      <source>[Geometry Column Name] - name of the geometry column in the database</source>
      <translation>[Nombre de columna de la geometría] - nombre de la columna de la geometría en la base de datos</translation>
    </message>
    <message>
      <source>[Use Default (Geometry Column Name)] - set column name to 'the_geom'</source>
      <translation>[Utilizar [Nombre de columna de la geometría] por omisión] - establecer el nombre de la columna a &quot;the_geom&quot;</translation>
    </message>
    <message>
      <source>[Glogal Schema] - set the schema for all files to be imported into</source>
      <translation>[Esquema global] - establecer el esquema para todos los archivos a importar</translation>
    </message>
    <message>
      <source>[Import] - import the current shapefiles in the list</source>
      <translation>[Importar] - importar los archivos shape actuales de la lista</translation>
    </message>
    <message>
      <source>[Quit] - quit the program
</source>
      <translation>[Cerrar] - salir del programa
</translation>
    </message>
    <message>
      <source>[Help] - display this help dialog</source>
      <translation>[Ayuda] - mostrar esta ayuda</translation>
    </message>
    <message>
      <source>Import Shapefiles</source>
      <translation>Importar archivos shape</translation>
    </message>
    <message>
      <source>You need to specify a Connection first</source>
      <translation>Primero debe especificar una conexión</translation>
    </message>
    <message>
      <source>Connection failed - Check settings and try again</source>
      <translation>La conexión ha fallado - Comprobar la configuración y probar de nuevo</translation>
    </message>
    <message>
      <source>PostGIS not available</source>
      <translation>PostGIS no está disponible</translation>
    </message>
    <message>
      <source>&lt;p>The chosen database does not have PostGIS installed, but this is required for storage of spatial data.&lt;/p></source>
      <translation>&lt;p>La base de datos seleccionada no tiene instalado PostGIS, lo cual es necesario para almacenar datos espaciales.&lt;/p></translation>
    </message>
    <message>
      <source>You need to add shapefiles to the list first</source>
      <translation>Primero debe añadir archivos shape a la lista</translation>
    </message>
    <message>
      <source>Importing files</source>
      <translation>Importando archivos</translation>
    </message>
    <message>
      <source>Cancel</source>
      <translation>Cancelar</translation>
    </message>
    <message>
      <source>Progress</source>
      <translation>Progreso</translation>
    </message>
    <message>
      <source>Problem inserting features from file:</source>
      <translation>Problemas al insertar objetos espaciales del archivo:</translation>
    </message>
    <message>
      <source>Invalid table name.</source>
      <translation>Nombre de la tabla no válido.</translation>
    </message>
    <message>
      <source>No fields detected.</source>
      <translation>No se han detectado campos.</translation>
    </message>
    <message>
      <source>Checking to see if </source>
      <translation>Comprobando si </translation>
    </message>
    <message>
      <source>The following fields are duplicates:</source>
      <translation>Los siguientes campos están duplicados:</translation>
    </message>
    <message>
      <source>&lt;p>Error while executing the SQL:&lt;/p>&lt;p></source>
      <translation>&lt;p>Error al ejecutar la SQL:&lt;/p>&lt;p></translation>
    </message>
    <message>
      <source>&lt;/p>&lt;p>The database said:</source>
      <translation>&lt;/p>&lt;p>La base de datos ha dicho:</translation>
    </message>
    <message>
      <source>Import Shapefiles - Relation Exists</source>
      <translation>Importar archivos shape - La relación existe</translation>
    </message>
    <message>
      <source>The Shapefile:</source>
      <translation>El archivo shape:</translation>
    </message>
    <message>
      <source>will use [</source>
      <translation>utilizará la relación [</translation>
    </message>
    <message>
      <source>] relation for its data,</source>
      <translation>] para sus datos,</translation>
    </message>
    <message>
      <source>which already exists and possibly contains data.</source>
      <translation>que ya existe y posiblemente contenga datos.</translation>
    </message>
    <message>
      <source>To avoid data loss change the &quot;DB Relation Name&quot;</source>
      <translation>Para evitar la pérdida de datos cambie el &quot;Nombre de la relación de la BD&quot;</translation>
    </message>
    <message>
      <source>for this Shapefile in the main dialog file list.</source>
      <translation>para este archivo shape en la lista de archivos del diálogo principal.</translation>
    </message>
    <message>
      <source>Do you want to overwrite the [</source>
      <translation>¿Quiere sobrescribir la relación [</translation>
    </message>
    <message>
      <source>] relation?</source>
      <translation>]?</translation>
    </message>
    <message>
      <source>Use the table below to edit column names. Make sure that none of the columns are named using a PostgreSQL reserved word</source>
      <translation>Usar la tabla de abajo para editar los nombres de columna. Asegúrese de que ninguno de los nombres utilizados sea una palabra reservada de PostgreSQL</translation>
    </message>
  </context>
  <context>
    <name>QgsSpitBase</name>
    <message>
      <source>SPIT - Shapefile to PostGIS Import Tool</source>
      <translation>SPIT - Herramienta para importar archivos shape a PostGIS</translation>
    </message>
    <message>
      <source>Shapefile to PostGIS Import Tool</source>
      <translation>Herramienta para importar archivos shape a PostGIS</translation>
    </message>
    <message>
      <source>Shapefile List</source>
      <translation>Lista de archivos shape</translation>
    </message>
    <message>
      <source>Add a shapefile to the list of files to be imported</source>
      <translation>Añadir un archivo shape a la lista de archivos a importar</translation>
    </message>
    <message>
      <source>Add</source>
      <translation>Añadir</translation>
    </message>
    <message>
      <source>Remove the selected shapefile from the import list</source>
      <translation>Eliminar el archivo shape seleccionado de la lista de importación</translation>
    </message>
    <message>
      <source>Remove</source>
      <translation>Eliminar</translation>
    </message>
    <message>
      <source>Remove all the shapefiles from the import list</source>
      <translation>Eliminar todos los archivos shape de la lista de importación</translation>
    </message>
    <message>
      <source>Remove All</source>
      <translation>Eliminar todos</translation>
    </message>
    <message>
      <source>SRID</source>
      <translation>SRID</translation>
    </message>
    <message>
      <source>Set the SRID to the default value</source>
      <translation>Establecer el SRID al valor por omisión</translation>
    </message>
    <message>
      <source>Use Default SRID</source>
      <translation>Utilizar el SRID por omisión</translation>
    </message>
    <message>
      <source>Set the geometry column name to the default value</source>
      <translation>Establecer el nombre de la columna de la geometría al valor por omisión</translation>
    </message>
    <message>
      <source>Use Default Geometry Column Name</source>
      <translation>Usar el nombre de la columna de la geometría por omisión</translation>
    </message>
    <message>
      <source>Geometry Column Name</source>
      <translation>Nombre de la columna de la geometría</translation>
    </message>
    <message>
      <source>Global Schema</source>
      <translation>Esquema global</translation>
    </message>
    <message>
      <source>PostgreSQL Connections</source>
      <translation>Conexiones PostgreSQL</translation>
    </message>
    <message>
      <source>Create a new PostGIS connection</source>
      <translation>Crear una nueva conexión a PostGIS</translation>
    </message>
    <message>
      <source>New</source>
      <translation>Nueva</translation>
    </message>
    <message>
      <source>Remove the current PostGIS connection</source>
      <translation>Eliminar la conexión actual a PostGIS</translation>
    </message>
    <message>
      <source>Connect</source>
      <translation>Conectar</translation>
    </message>
    <message>
      <source>Edit the current PostGIS connection</source>
      <translation>Editar la conexión actual a PostGIS</translation>
    </message>
    <message>
      <source>Edit</source>
      <translation>Editar</translation>
    </message>
  </context>
  <context>
    <name>QgsSpitPlugin</name>
    <message>
      <source>&amp;Import Shapefiles to PostgreSQL</source>
      <translation>&amp;Importar archivos shape a PostgreSQL</translation>
    </message>
    <message>
      <source>Import shapefiles into a PostGIS-enabled PostgreSQL database. The schema and field names can be customized on import</source>
      <translation>Importar archivos shape a una base de datos PostgreSQL-PostGIS. El esquema y los nombres de los campos se pueden personalizar al importar</translation>
    </message>
    <message>
      <source>&amp;Spit</source>
      <translation>I&amp;mportar (Spit)</translation>
    </message>
  </context>
  <context>
    <name>QgsUniqueValueDialogBase</name>
    <message>
      <source>Form1</source>
      <translation>Form1</translation>
    </message>
    <message>
      <source>Classification Field:</source>
      <translation>Campo de clasificación:</translation>
    </message>
    <message>
      <source>Delete class</source>
      <translation>Borrar clase</translation>
    </message>
    <message>
      <source>Classify</source>
      <translation>Clasificar</translation>
    </message>
  </context>
  <context>
    <name>QgsVectorLayer</name>
    <message>
      <source>Could not commit the added features.</source>
      <translation>No se pudieron añadir los objetos espaciales.</translation>
    </message>
    <message>
      <source>No other types of changes will be committed at this time.</source>
      <translation>No se realizará ningún otro tipo de cambios en este momento.</translation>
    </message>
    <message>
      <source>Could not commit the changed attributes.</source>
      <translation>No se pudieron realizar los cambios en los atributos.</translation>
    </message>
    <message>
      <source>However, the added features were committed OK.</source>
      <translation>Sin embargo, se han añadido correctamente los objetos espaciales.</translation>
    </message>
    <message>
      <source>Could not commit the changed geometries.</source>
      <translation>No se pudieron realizar los cambios en la geometría.</translation>
    </message>
    <message>
      <source>However, the changed attributes were committed OK.</source>
      <translation>Sin embargo, se cambiaron correctamente los atributos.</translation>
    </message>
    <message>
      <source>Could not commit the deleted features.</source>
      <translation>No se pudieron borrar los objetos espaciales.</translation>
    </message>
    <message>
      <source>However, the changed geometries were committed OK.</source>
      <translation>Sin embargo, se cambiaron correctamente las geometrías.</translation>
    </message>
  </context>
  <context>
    <name>QgsVectorLayerProperties</name>
    <message>
      <source>Transparency: </source>
      <translation>Transparencia: </translation>
    </message>
    <message>
      <source>Single Symbol</source>
      <translation>Símbolo único</translation>
    </message>
    <message>
      <source>Graduated Symbol</source>
      <translation>Símbolo graduado</translation>
    </message>
    <message>
      <source>Continuous Color</source>
      <translation>Color graduado</translation>
    </message>
    <message>
      <source>Unique Value</source>
      <translation>Valor único</translation>
    </message>
    <message>
      <source>This button opens the PostgreSQL query builder and allows you to create a subset of features to display on the map canvas rather than displaying all features in the layer</source>
      <translation>Este botón abre el constructor de consultas de PostgreSQL y permite crear un subconjunto de objetos espaciales para mostrar en la vista del mapa, en vez de mostrarlos todos</translation>
    </message>
    <message>
      <source>The query used to limit the features in the layer is shown here. This is currently only supported for PostgreSQL layers. To enter or modify the query, click on the Query Builder button</source>
      <translation>Aquí se muestra la consulta usada para limitar los objetos espaciales de las capas. Esto actualmente sólo está soportado para capas PostgreSQL. Para introducir o modificar la consulta, pulse el botón Constructor de consultas</translation>
    </message>
    <message>
      <source>Spatial Index</source>
      <translation>Índice espacial</translation>
    </message>
    <message>
      <source>Creation of spatial index successfull</source>
      <translation>La creación del índice espacial ha sido correcta</translation>
    </message>
    <message>
      <source>Creation of spatial index failed</source>
      <translation>Ha fallado la creación del índice espacial</translation>
    </message>
    <message>
      <source>General:</source>
      <translation>General:</translation>
    </message>
    <message>
      <source>Storage type of this layer : </source>
      <translation>Tipo de almacenamiento de esta capa: </translation>
    </message>
    <message>
      <source>Source for this layer : </source>
      <translation>Fuente de esta capa: </translation>
    </message>
    <message>
      <source>Geometry type of the features in this layer : </source>
      <translation>Tipo de geometría de los objetos espaciales en esta capa: </translation>
    </message>
    <message>
      <source>The number of features in this layer : </source>
      <translation>Número de objetos espaciales en esta capa: </translation>
    </message>
    <message>
      <source>Editing capabilities of this layer : </source>
      <translation>Posibilidades de edición de esta capa: </translation>
    </message>
    <message>
      <source>Extents:</source>
      <translation>Extensión:</translation>
    </message>
    <message>
      <source>In layer spatial reference system units : </source>
      <translation>En unidades del sistema espacial de referencia de la capa: </translation>
    </message>
    <message>
      <source>xMin,yMin </source>
      <translation>xMín,yMín </translation>
    </message>
    <message>
      <source> : xMax,yMax </source>
      <translation> : xMáx,yMáx </translation>
    </message>
    <message>
      <source>In project spatial reference system units : </source>
      <translation>En unidades del sistema espacial de referencia del proyecto: </translation>
    </message>
    <message>
      <source>Layer Spatial Reference System:</source>
      <translation>Sistema de referencia espacial de la capa:</translation>
    </message>
    <message>
      <source>Attribute field info:</source>
      <translation>Información del campo del atributo:</translation>
    </message>
    <message>
      <source>Field</source>
      <translation>Campo</translation>
    </message>
    <message>
      <source>Type</source>
      <translation>Tipo</translation>
    </message>
    <message>
      <source>Length</source>
      <translation>Tamaño</translation>
    </message>
    <message>
      <source>Precision</source>
      <translation>Precisión</translation>
    </message>
    <message>
      <source>Layer comment: </source>
      <translation>Comentario de la capa: </translation>
    </message>
    <message>
      <source>Comment</source>
      <translation>Comentario</translation>
    </message>
    <message>
      <source>Default Style</source>
      <translation>Estilo predeterminado</translation>
    </message>
    <message>
      <source>QGIS Layer Style File (*.qml)</source>
      <translation>Archivo de estilo de capa de QGIS (*.qml)</translation>
    </message>
    <message>
      <source>QGIS</source>
      <translation>QGIS</translation>
    </message>
    <message>
      <source>Unknown style format: </source>
      <translation>Formato de estilo desconocido: </translation>
    </message>
  </context>
  <context>
    <name>QgsVectorLayerPropertiesBase</name>
    <message>
      <source>Layer Properties</source>
      <translation>Propiedades de la capa</translation>
    </message>
    <message>
      <source>Symbology</source>
      <translation>Simbología</translation>
    </message>
    <message>
      <source>Legend type:</source>
      <translation>Tipo de leyenda:</translation>
    </message>
    <message>
      <source>Transparency:</source>
      <translation>Transparencia:</translation>
    </message>
    <message>
      <source>General</source>
      <translation>General</translation>
    </message>
    <message>
      <source>Display name</source>
      <translation>Mostrar el nombre</translation>
    </message>
    <message>
      <source>Display field for the Identify Results dialog box</source>
      <translation>Campo para mostrar en el cuadro de diálogo de resultados de la identificación</translation>
    </message>
    <message>
      <source>This sets the display field for the Identify Results dialog box</source>
      <translation>Establece el campo que se mostrará con la herramienta de identificación</translation>
    </message>
    <message>
      <source>Display field</source>
      <translation>Mostrar campo</translation>
    </message>
    <message>
      <source>Use this control to set which field is placed at the top level of the Identify Results dialog box.</source>
      <translation>Use este control para indicar el campo que se situará en el nivel superior del cuadro de diálogo de resultados de la identificación.</translation>
    </message>
    <message>
      <source>Use scale dependent rendering</source>
      <translation>Utilizar represenación dependiente de la escala</translation>
    </message>
    <message>
      <source>Maximum 1:</source>
      <translation>Máximo 1:</translation>
    </message>
    <message>
      <source>Minimum 1:</source>
      <translation>Mínimo 1:</translation>
    </message>
    <message>
      <source>Minimum scale at which this layer will be displayed. </source>
      <translation>Escala mínima a la que se mostrará esta capa. </translation>
    </message>
    <message>
      <source>Maximum scale at which this layer will be displayed. </source>
      <translation>Escala máxima a la que se mostrará esta capa. </translation>
    </message>
    <message>
      <source>Spatial Index</source>
      <translation>Índice espacial</translation>
    </message>
    <message>
      <source>Create Spatial Index</source>
      <translation>Crear índice espacial</translation>
    </message>
    <message>
      <source>Create</source>
      <translation>Crear</translation>
    </message>
    <message>
      <source>Spatial Reference System</source>
      <translation>Sistema de referencia espacial</translation>
    </message>
    <message>
      <source>Change</source>
      <translation>Cambiar</translation>
    </message>
    <message>
      <source>Subset</source>
      <translation>Subconjunto</translation>
    </message>
    <message>
      <source>Query Builder</source>
      <translation>Constructor de consultas</translation>
    </message>
    <message>
      <source>Metadata</source>
      <translation>Metadatos</translation>
    </message>
    <message>
      <source>Labels</source>
      <translation>Etiquetas</translation>
    </message>
    <message>
      <source>Display labels</source>
      <translation>Mostrar etiquetas</translation>
    </message>
    <message>
      <source>Actions</source>
      <translation>Acciones</translation>
    </message>
    <message>
      <source>Restore Default Style</source>
      <translation>Restaurar estilo predeterminado</translation>
    </message>
    <message>
      <source>Save As Default</source>
      <translation>Guardar como predeterminado</translation>
    </message>
    <message>
      <source>Load Style ...</source>
      <translation>Cargar estilo...</translation>
    </message>
    <message>
      <source>Save Style ...</source>
      <translation>Guardar estilo...</translation>
    </message>
  </context>
  <context>
    <name>QgsVectorSymbologyWidgetBase</name>
    <message>
      <source>Form2</source>
      <translation>Form2</translation>
    </message>
    <message>
      <source>Label</source>
      <translation>Etiqueta</translation>
    </message>
    <message>
      <source>Min</source>
      <translation>Mín</translation>
    </message>
    <message>
      <source>Max</source>
      <translation>Máx</translation>
    </message>
    <message>
      <source>Symbol Classes:</source>
      <translation>Clases de símbolos:</translation>
    </message>
    <message>
      <source>Count:</source>
      <translation>Cuenta:</translation>
    </message>
    <message>
      <source>Mode:</source>
      <translation>Modo:</translation>
    </message>
    <message>
      <source>Field:</source>
      <translation>Campo:</translation>
    </message>
  </context>
  <context>
    <name>QgsWFSPlugin</name>
    <message>
      <source>&amp;Add WFS layer</source>
      <translation>&amp;Añadir capa WFS</translation>
    </message>
  </context>
  <context>
    <name>QgsWFSProvider</name>
    <message>
      <source>unknown</source>
      <translation>desconocido</translation>
    </message>
    <message>
      <source>received %1 bytes from %2</source>
      <translation>recibidos %1 bytes de %2</translation>
    </message>
  </context>
  <context>
    <name>QgsWFSSourceSelect</name>
    <message>
      <source>Are you sure you want to remove the </source>
      <translation>¿Está seguro de que quiere eleminar la conexión </translation>
    </message>
    <message>
      <source> connection and all associated settings?</source>
      <translation> y toda su configuración?</translation>
    </message>
    <message>
      <source>Confirm Delete</source>
      <translation>Confirmar borrado</translation>
    </message>
  </context>
  <context>
    <name>QgsWFSSourceSelectBase</name>
    <message>
      <source>Title</source>
      <translation>Título</translation>
    </message>
    <message>
      <source>Name</source>
      <translation>Nombre</translation>
    </message>
    <message>
      <source>Abstract</source>
      <translation>Resumen</translation>
    </message>
    <message>
      <source>Coordinate Reference System</source>
      <translation>Sistema de coordenadas de referencia</translation>
    </message>
    <message>
      <source>Change ...</source>
      <translation>Cambiar...</translation>
    </message>
    <message>
      <source>Server Connections</source>
      <translation>Conexiones de servidor</translation>
    </message>
    <message>
      <source>&amp;New</source>
      <translation>&amp;Nuevo</translation>
    </message>
    <message>
      <source>Delete</source>
      <translation>Borrar</translation>
    </message>
    <message>
      <source>Edit</source>
      <translation>Editar</translation>
    </message>
    <message>
      <source>C&amp;onnect</source>
      <translation>Co&amp;nectar</translation>
    </message>
    <message>
      <source>Add WFS Layer from a Server</source>
      <translation>Añadir capa WFS desde un servidor</translation>
    </message>
  </context>
  <context>
    <name>QgsWmsProvider</name>
    <message>
      <source>Tried URL: </source>
      <translation>URL probada: </translation>
    </message>
    <message>
      <source>HTTP Exception</source>
      <translation>Excepción HTTP</translation>
    </message>
    <message>
      <source>WMS Service Exception</source>
      <translation>Excepción del servicio WMS</translation>
    </message>
    <message>
      <source>DOM Exception</source>
      <translation>Excepción DOM</translation>
    </message>
    <message>
      <source>Could not get WMS capabilities: %1 at line %2 column %3</source>
      <translation>No se pudieron obtener las capacidades del WMS: %1 en la línea %2 columna %3</translation>
    </message>
    <message>
      <source>This is probably due to an incorrect WMS Server URL.</source>
      <translation>Probablemente se deba a una URL incorrecta del servidor WMS.</translation>
    </message>
    <message>
      <source>Could not get WMS capabilities in the expected format (DTD): no %1 or %2 found</source>
      <translation>No se pudieron obtener las capacidades del WMS en el formato esperado (DTD): no se ha encontrado %1 o %2</translation>
    </message>
    <message>
      <source>Could not get WMS Service Exception at %1: %2 at line %3 column %4</source>
      <translation>No se pudo obtener una excepción del servicio WMS en %1: %2 en la línea %3 columna %4</translation>
    </message>
    <message>
      <source>Request contains a Format not offered by the server.</source>
      <translation>La solicitud contiene un formato no ofrecido por el servidor.</translation>
    </message>
    <message>
      <source>Request contains a CRS not offered by the server for one or more of the Layers in the request.</source>
      <translation>La solicitud contiene un CRS no ofrecido por el servidor para una o más de las capas solicitadas.</translation>
    </message>
    <message>
      <source>Request contains a SRS not offered by the server for one or more of the Layers in the request.</source>
      <translation>La solicitud contiene un SRS no ofrecido por el servidor para una o más de las capas solicitadas.</translation>
    </message>
    <message>
      <source>GetMap request is for a Layer not offered by the server, or GetFeatureInfo request is for a Layer not shown on the map.</source>
      <translation>La solicitud de obtención de mapa (GetMap) es para una capa no ofrecida por el servidor o la solicitud de información del tema (GetFeatureInfo) es para una capa que no mostrada en el mapa.</translation>
    </message>
    <message>
      <source>Request is for a Layer in a Style not offered by the server.</source>
      <translation>La solicitud es para una capa en un estilo no ofrecido por el servidor.</translation>
    </message>
    <message>
      <source>GetFeatureInfo request is applied to a Layer which is not declared queryable.</source>
      <translation>La solicitud de información del tema (GetFeatureInfo) se aplica a una capa no declarada consultable.</translation>
    </message>
    <message>
      <source>GetFeatureInfo request contains invalid X or Y value.</source>
      <translation>La solicitud de información del tema (GetFeatureInfo) contiene valores no válidos de X o Y.</translation>
    </message>
    <message>
      <source>Value of (optional) UpdateSequence parameter in GetCapabilities request is equal to current value of service metadata update sequence number.</source>
      <translation>El valor del parámetro (opcional) UpdateSequence en la consulta GetCapabilities es igual al valor actual del número de secuencia del servicio de actualización de los metadatos.</translation>
    </message>
    <message>
      <source>Value of (optional) UpdateSequence parameter in GetCapabilities request is greater than current value of service metadata update sequence number.</source>
      <translation>El valor del parámetro (opcional) UpdateSequence en la consulta GetCapabilities es mayor que el valor actual del número de secuencia del servicio de actualización de los metadatos.</translation>
    </message>
    <message>
      <source>Request does not include a sample dimension value, and the server did not declare a default value for that dimension.</source>
      <translation>La solicitud no incluye un valor de muestra para la dimensión y el servidor no ha declarado un valor por omisión para esa dimensión.</translation>
    </message>
    <message>
      <source>Request contains an invalid sample dimension value.</source>
      <translation>La solicitud contiene un valor de muestra para la dimensión no válido.</translation>
    </message>
    <message>
      <source>Request is for an optional operation that is not supported by the server.</source>
      <translation>La solicitud es para una operación opcional no soportada por el servidor.</translation>
    </message>
    <message>
      <source>(Unknown error code from a post-1.3 WMS server)</source>
      <translation>(Código de error desconocido de un servidor post-1.3 WMS)</translation>
    </message>
    <message>
      <source>The WMS vendor also reported: </source>
      <translation>El productor WMS también informó: </translation>
    </message>
    <message>
      <source>This is probably due to a bug in the QGIS program.  Please report this error.</source>
      <translation>Esto probablemente se deba a un fallo en el programa QGIS. Por favor, informe de este error.</translation>
    </message>
    <message>
      <source>Server Properties:</source>
      <translation>Propiedades del servidor:</translation>
    </message>
    <message>
      <source>Property</source>
      <translation>Propiedad</translation>
    </message>
    <message>
      <source>Value</source>
      <translation>Valor</translation>
    </message>
    <message>
      <source>WMS Version</source>
      <translation>Versión WMS</translation>
    </message>
    <message>
      <source>Title</source>
      <translation>Título</translation>
    </message>
    <message>
      <source>Abstract</source>
      <translation>Resumen</translation>
    </message>
    <message>
      <source>Keywords</source>
      <translation>Palabras clave</translation>
    </message>
    <message>
      <source>Online Resource</source>
      <translation>Recursos en línea</translation>
    </message>
    <message>
      <source>Contact Person</source>
      <translation>Persona de contacto</translation>
    </message>
    <message>
      <source>Fees</source>
      <translation>Cuotas</translation>
    </message>
    <message>
      <source>Access Constraints</source>
      <translation>Restricciones de acceso</translation>
    </message>
    <message>
      <source>Image Formats</source>
      <translation>Formatos de imagen</translation>
    </message>
    <message>
      <source>Identify Formats</source>
      <translation>Formatos de identificación</translation>
    </message>
    <message>
      <source>Layer Count</source>
      <translation>Número de capas</translation>
    </message>
    <message>
      <source>Layer Properties: </source>
      <translation>Propiedades de la capa: </translation>
    </message>
    <message>
      <source>Selected</source>
      <translation>Seleccionado</translation>
    </message>
    <message>
      <source>Yes</source>
      <translation>Sí</translation>
    </message>
    <message>
      <source>No</source>
      <translation>No</translation>
    </message>
    <message>
      <source>Visibility</source>
      <translation>Visibilidad</translation>
    </message>
    <message>
      <source>Visible</source>
      <translation>Visible</translation>
    </message>
    <message>
      <source>Hidden</source>
      <translation>Oculta</translation>
    </message>
    <message>
      <source>n/a</source>
      <translation>n/d</translation>
    </message>
    <message>
      <source>Can Identify</source>
      <translation>Se puede identificar</translation>
    </message>
    <message>
      <source>Can be Transparent</source>
      <translation>Puede ser transparente</translation>
    </message>
    <message>
      <source>Can Zoom In</source>
      <translation>Se puede acercar el zum</translation>
    </message>
    <message>
      <source>Cascade Count</source>
      <translation>Cuenta en cascada</translation>
    </message>
    <message>
      <source>Fixed Width</source>
      <translation>Anchura fija</translation>
    </message>
    <message>
      <source>Fixed Height</source>
      <translation>Altura fija</translation>
    </message>
    <message>
      <source>WGS 84 Bounding Box</source>
      <translation>Marco de la WGS 84</translation>
    </message>
    <message>
      <source>Available in CRS</source>
      <translation>Disponible en CRS</translation>
    </message>
    <message>
      <source>Available in style</source>
      <translation>Disponible en estilo</translation>
    </message>
    <message>
      <source>Name</source>
      <translation>Nombre</translation>
    </message>
    <message>
      <source>Layer cannot be queried.</source>
      <translation>La capa no se puede consultar.</translation>
    </message>
  </context>
  <context>
    <name>QuickPrintGui</name>
    <message>
      <source>Portable Document Format (*.pdf)</source>
      <translation>Formato de documento portátil (*.pdf)</translation>
    </message>
    <message>
      <source>quickprint</source>
      <translation>impresión rápida</translation>
    </message>
    <message>
      <source>Unknown format: </source>
      <translation>Formato desconocido: </translation>
    </message>
  </context>
  <context>
    <name>QuickPrintGuiBase</name>
    <message>
      <source>QGIS Quick Print Plugin</source>
      <translation>Complemento de impresión rápida de QGIS</translation>
    </message>
    <message>
      <source>Quick Print</source>
      <translation>Impresión rápida</translation>
    </message>
    <message>
      <source>Map Title e.g. ACME inc.</source>
      <translation>Título del mapa, ej. ACME inc.</translation>
    </message>
    <message>
      <source>Map Name e.g. Water Features</source>
      <translation>Nombre del mapa, ej. Elementos acuáticos</translation>
    </message>
    <message>
      <source>Copyright</source>
      <translation>Copyright</translation>
    </message>
    <message>
      <source>Output</source>
      <translation>Salida</translation>
    </message>
    <message>
      <source>Use last filename but incremented.</source>
      <translation>Usar el último nombre de archivo, pero incrementado.</translation>
    </message>
    <message>
      <source>last used filename but incremented will be shown here</source>
      <translation>el último nombre de archivo usado incrementado se mostrará aquí</translation>
    </message>
    <message>
      <source>Prompt for file name</source>
      <translation>Preguntar nombre de archivo</translation>
    </message>
    <message>
      <source>Note: If you want more control over the map layout please use the map composer function in QGIS.</source>
      <translation>Nota: si quiere más control sobre la disposición del mapa, por favor use la función Diseñador de mapas de QGIS.</translation>
    </message>
    <message>
      <source>Page Size</source>
      <translation>Tamaño de página</translation>
    </message>
  </context>
  <context>
    <name>QuickPrintPlugin</name>
    <message>
      <source>Quick Print</source>
      <translation>Impresión rápida</translation>
    </message>
    <message>
      <source>Replace this with a short description of the what the plugin does</source>
      <translation>Remplazar con una breve descripción de lo que hace el complemento</translation>
    </message>
    <message>
      <source>&amp;Quick Print</source>
      <translation>Impresión &amp;rápida</translation>
    </message>
  </context>
  <context>
    <name>RepositoryDetailsDialog</name>
    <message>
      <source>Repository details</source>
      <translation>Detalles del repositorio</translation>
    </message>
    <message>
      <source>Name:</source>
      <translation>Nombre:</translation>
    </message>
    <message>
      <source>URL:</source>
      <translation>URL:</translation>
    </message>
    <message>
      <source>http://</source>
      <translation>http://</translation>
    </message>
  </context>
  <context>
    <name>[pluginname]GuiBase</name>
    <message>
      <source>QGIS Plugin Template</source>
      <translation>Plantilla de complementos de QGIS</translation>
    </message>
    <message>
      <source>Plugin Template</source>
      <translation>Plantilla de complementos</translation>
    </message>
  </context>
  <context>
    <name>pluginname</name>
    <message>
      <source>Replace this with a short description of the what the plugin does</source>
      <translation>Reemplazar con una breve descripción de lo que hace el complemento</translation>
    </message>
    <message>
      <source>[menuitemname]</source>
      <translation>[nombredeelementodemenu]</translation>
    </message>
    <message>
      <source>&amp;[menuname]</source>
      <translation>&amp;{nombremenu]</translation>
    </message>
  </context>
</TS>
