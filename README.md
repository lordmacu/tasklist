# Mi App de Tareas

Este proyecto es una aplicación de gestión de tareas desarrollada utilizando React Native y Expo. Permite a los usuarios crear, editar y eliminar tareas, además de conectarse a una API para almacenar y recuperar datos de tareas.

## Estructura del Proyecto

El proyecto sigue la siguiente estructura de carpetas y archivos:

- **components**: Contiene los componentes de React utilizados en la aplicación.
  - **TaskItem.js**: Componente que muestra una tarea individual en la lista.
  - **TaskList.js**: Componente que muestra la lista de tareas.
  - **...otros componentes...**
- **redux**: Contiene los archivos relacionados con Redux para el manejo del estado global.
  - **actions**: Contiene las acciones Redux para realizar operaciones relacionadas con las tareas.
    - **taskActions.js**: Archivo con las acciones para realizar operaciones CRUD en las tareas.
  - **reducers**: Contiene los reducers de Redux para manejar los cambios en el estado global.
    - **taskReducer.js**: Reducer que gestiona el estado relacionado con las tareas.
  - **store.js**: Configuración del store de Redux.
- **screens**: Contiene las pantallas de la aplicación.
  - **HomeScreen.js**: Pantalla principal que muestra la lista de tareas.
  - **CreateTaskScreen.js**: Pantalla para crear una nueva tarea.
  - **EditTaskScreen.js**: Pantalla para editar una tarea existente.
  - **...otras pantallas...**
- **utils**: Contiene archivos de utilidad.
  - **index.js**: Archivo con funciones útiles y utilidades generales.

## Cómo Ejecutar el Proyecto

1. Asegúrate de tener instalado Node.js en tu sistema.
2. Clona este repositorio en tu computadora.
3. Abre una terminal en la carpeta del proyecto.
4. Ejecuta `npm install` para instalar las dependencias del proyecto.
5. Para iniciar la aplicación en un dispositivo o emulador Android, ejecuta `npm run android`.
6. Para iniciar la aplicación en un dispositivo o emulador iOS, ejecuta `npm run ios`.
7. Para iniciar la aplicación en un navegador web, ejecuta `npm run web`.

## Dependencias Utilizadas

- **@react-native-async-storage/async-storage**: Manejo de almacenamiento asincrónico.
- **@react-navigation/native**: Navegación entre pantallas en React Native.
- **@react-navigation/stack**: Navegación tipo pila para React Navigation.
- **expo**: Plataforma y conjunto de herramientas para React Native.
- **react**: Librería principal de React.
- **react-native**: Framework para construir aplicaciones nativas con React.
- **react-native-gesture-handler**: Librería para manejar gestos en React Native.
- **react-native-reanimated**: Librería para animaciones en React Native.
- **react-native-safe-area-context**: Contexto para manejar el área segura en React Native.
- **react-native-screens**: Gestión de pantallas en React Native.
- **react-redux**: Librería para manejar el estado global en React con Redux.
- **redux**: Librería para manejar el estado de la aplicación en JavaScript.
- **redux-thunk**: Middleware para manejar acciones asíncronas en Redux.

## Dependencias de Desarrollo Utilizadas

- **@babel/core**: Núcleo de Babel para transformar código JavaScript.
- **@babel/runtime**: Librería de tiempo de ejecución de Babel.
- **@react-native-community/eslint-config**: Configuración de ESLint para React Native.
- **babel-jest**: Integración de Babel con Jest para pruebas.
- **eslint**: Herramienta de análisis de código estático para identificar y reportar patrones problemáticos en el código JavaScript.
- **jest**: Framework de pruebas para JavaScript.
- **metro-react-native-babel-preset**: Preset de Babel para React Native.
- **react-test-renderer**: Renderizador de pruebas para componentes React.

## Cómo Contribuir

Si quieres contribuir a este proyecto, sigue los siguientes pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commits (`git commit -am 'Agrega nueva funcionalidad'`).
4. Sube tus cambios al repositorio remoto (`git push origin feature/nueva-funcionalidad`).
5. Crea un nuevo Pull Request.

¡Gracias por tu contribución!
