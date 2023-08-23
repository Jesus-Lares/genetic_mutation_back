# Detección de Mutaciones Genéticas en DNA

## Descripción

Este proyecto tiene como objetivo detectar diferencias genéticas en secuencias de ADN. Proporciona una solución para identificar mutaciones genéticas y calcular estadísticas relacionadas.

## Problema

El ADN humano está compuesto por una secuencia de bases nitrogenadas (adenina, citosina, guanina y timina). Se busca identificar secuencias repetitivas en el ADN, que puedan indicar una mutación genética. El objetivo es detectar si existen más de una secuencia de cuatro letras iguales (p. ej., "AAAA", "CCCC") en una matriz bidimensional de ADN.

## Algoritmos Utilizados

1. **Algoritmo Regex**: Este algoritmo utiliza expresiones regulares para buscar patrones de secuencias repetitivas en las filas y columnas de la matriz de ADN. Es una solución simple y rápida, pero puede tener problemas de rendimiento en matrices grandes.

2. **Enfoque Direccional**: Este algoritmo realiza un recorrido por todas las celdas de la matriz de ADN y verifica si hay mutaciones en todas las direcciones (horizontal, vertical, diagonal y anti-diagonal). Es más eficiente en términos de rendimiento pero puede requerir un poco más de lógica.

### Ventajas y Desventajas de los Algoritmos

- **Algoritmo Regex**:

  - Ventajas: Fácil implementación, rápido en matrices pequeñas.
  - Desventajas: Menos eficiente en matrices grandes, no verifica todas las direcciones.

- **Enfoque Direccional**:
  - Ventajas: Eficiente en matrices grandes, verifica todas las direcciones.
  - Desventajas: Requiere más lógica y cálculos.

## Author

**JesusLares**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-jesusLares-0077B5?style=for-the-badge&logo=linkedin&logoColor=white&labelColor=101010)](https://www.linkedin.com/in/jesusLares)
<br />
[![Web](https://img.shields.io/badge/jesuslares.com-5865F2?style=for-the-badge&logo=dev.to&logoColor=white&labelColor=101010)](https://jesuslares.com)
<br />
[![Github](https://img.shields.io/badge/jesuslares-238636?style=for-the-badge&logo=github&logoColor=white&labelColor=101010)](https://github.com/JesusLares)
<br />

## Enlaces

- [Sitio Web](https://www.tusitio.com) - Accede al sitio web del proyecto.
- [Documentación](https://www.tusitio.com/documentation) - Consulta la documentación detallada del proyecto.

## Instrucciones de Instalación

- Clona el repositorio.
- Navega al directorio del proyecto.
- Instala las dependencias: `npm install`
- Crea los archivos para las variables de entorno que se muestran en el archivo .env.example, necesarios .env.development y .env.test
  **Ten en cuenta que al correr los tests se limpia la base de datos**

### Ejecutar la Aplicación

**Utilizando docker**

Crea un archivo .env.docker y configura las variables de entorno las cuales son:

```
POSTGRES_DB=
POSTGRES_USER=
POSTGRES_PASSWORD=
```

Ejecuta el siguiente comando para construir y ejecutar los contenedores de Docker:

```
docker-compose up -d
```

Accede a la aplicación en http://localhost:5050 (pgAdmin) y configura tu servidor PostgreSQL.

Ejecuta la aplicación con:

```bash
# windows
npm run dev:windows
# linux / Mac
npm run dev
```

**Sin Docker:**

Asegúrate de tener PostgreSQL instalado y funcionando.
Configura tu base de datos PostgreSQL y el archivo .env.development.
Ejecuta la aplicación:

Ejecuta la aplicación con:

```bash
# windows
npm run dev:windows
# linux / Mac
npm run dev
```

## Pruebas

Configura tu base de datos de prueba PostgreSQL y el archivo .env.test.
Ejecuta pruebas con :

```bash
# windows
npm run test:windows
# linux / Mac
npm run test
```

**Puedes encontrar mas scripts en el package.json**

## Contribuciones

¡Las contribuciones son bienvenidas! Por favor, bifurca el repositorio y crea una solicitud de extracción o si quieres contactarme puedes escribirme a contacto@jesuslares.com.

## Licencia

MIT Public License v3.0 No puede usarse comercialmente.
