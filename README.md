# Proyecto Frontend - Catálogo de Productos

Este proyecto consiste en una aplicación frontend para la gestión de un catálogo de productos, desarrollada con **React.js**, **Next.js**, **TypeScript**, y **TailwindCSS**. Implementa componentes reutilizables, una interfaz intuitiva y accesible, y está integrada con una API RESTful para obtener datos de productos.

## Descripción del Proyecto

La aplicación incluye las siguientes funcionalidades clave:

- **Pantalla de Inicio**: Lista de productos con opciones de filtrado y búsqueda.
- **Pantalla de Detalle**: Información detallada de un producto seleccionado.
- **Responsivo**: Interfaz completamente adaptativa utilizando **TailwindCSS**.
- **Integración con API RESTful**: La lista de productos y los detalles se obtienen desde la [FakeStore API](https://fakestoreapi.com).

## Tecnologías Utilizadas

- **React.js**: Biblioteca JavaScript para construir interfaces de usuario.
- **Next.js**: Framework de React con soporte para SSR y SSG.
- **TypeScript**: Superset de JavaScript que añade tipado estático.
- **TailwindCSS**: Framework CSS utilitario para el desarrollo de UI.
- **Jest y React Testing Library**: Librerías para realizar pruebas unitarias.

## Requerimientos Implementados

### 1. Diseño de Arquitectura

- **Modularidad y Escalabilidad**: La aplicación se diseñó de manera modular con componentes reutilizables, asegurando que el código sea mantenible y escalable.
- **Rendimiento**: Implementación de **Lazy Loading** para cargar componentes cuando son necesarios. Se utiliza **Static Site Generation (SSG)** para mejorar los tiempos de carga en la página principal.

### 2. Uso de las Últimas Novedades de React.js y Next.js

- **React Server Components**: Se ha investigado su integración para la carga de componentes desde el servidor.
- **Suspense para Datos**: Se ha considerado su uso para manejar el retraso en la carga de productos, mejorando la experiencia del usuario.
- **Next.js 13**: Uso de las nuevas características como `app/router` y **Server Actions** para mejorar la navegación y la gestión del estado del lado del servidor.

### 3. Diseño de Interfaz y Componentes

- **TailwindCSS**: Se utilizó **TailwindCSS** para construir una interfaz moderna y responsiva.
- **Componentes Reutilizables**: Cada componente fue diseñado para ser reutilizable en diferentes secciones de la aplicación.
- **Accesibilidad**: Se siguieron las mejores prácticas de accesibilidad y usabilidad.

### 4. Integración de APIs

- **API RESTful**: La aplicación se conecta a la API de [FakeStore](https://fakestoreapi.com) para obtener productos y detalles. 
- **Autenticación**: Aunque no es requerido, se dejó espacio para añadir autenticación en futuras iteraciones.
- **Optimización de Carga de Datos**: Se utiliza una estrategia de cacheado básico para mejorar la experiencia de usuario.

### 5. Documentación

- **Documentación Técnica**: Se ha documentado la arquitectura del proyecto, incluyendo instrucciones para la instalación y configuración del entorno local.
- **Ejemplos de APIs**: Las llamadas a la API se pueden revisar en el archivo `services/api.ts`, que muestra cómo se obtienen los productos y sus detalles.

### 6. CI/CD

- **GitHub Actions**: Se implementó un pipeline de integración continua que incluye:
  - Instalación de dependencias.
  - Ejecución de pruebas unitarias.
  - Linting.
  - Construcción de la aplicación.

## Cómo Ejecutar el Proyecto Localmente

1. Clona el repositorio:
   ```bash
   git clone https://github.com/JosueGarrido/front-libelula
   ```

2. Instala las dependencias:
    ```bash
   npm install
   ```

3. Ejecuta el proyecto en modo desarrollo:
    ```bash
   npm run dev
   ```

4. Visita http://localhost:3000 en tu navegador.

## Pruebas

Este proyecto incluye pruebas unitarias y de integración utilizando Jest y React Testing Library. Para ejecutar las pruebas:
    ```bash
   npm test
   ```

## Pipeline CI/CD

Se ha configurado un pipeline de GitHub Actions que ejecuta automáticamente las siguientes tareas:

1. Instalación de dependencias.
2. Pruebas unitarias.
3. Linting del código.
4. Construcción de la aplicación.
