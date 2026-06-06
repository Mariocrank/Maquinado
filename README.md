# Sitio web para empresa de maquinado industrial

Proyecto frontend-only para una empresa metalmecanica que necesita mostrar servicios y productos, captar solicitudes y operar en espanol e ingles.

## Stack

- Frontend: React + Vite
- Contenedores: Docker Compose opcional

## Secciones incluidas

- Inicio con nombre de marca y frase principal
- Nosotros con mision y vision
- Servicios y productos de maquinado
- Catalogo con seleccion de piezas y solicitud directa
- Galeria de trabajos
- Contacto con formulario
- Mapa preparado para reemplazo
- Cambio de idioma espanol/ingles

## Ejecutar

Con Node:

```bash
cd frontend
npm install
npm run dev
```

Con Docker:

```bash
docker compose up --build
```

Abre:

```text
http://localhost:5173
```

## Flujo actual del catalogo

El catalogo ya no depende de backend ni Stripe. El usuario selecciona productos, llena sus datos y el sitio genera una solicitud por correo usando `mailto:`.

## Contenido pendiente del cliente

- Nombre final del negocio
- Logo en PNG o SVG
- Eslogan
- Fotos del taller, maquinas y trabajos terminados
- Lista final de servicios
- Telefono, correo, direccion y horario
- Links de redes sociales si existen
- Textos aprobados en ingles
- Productos y precios definitivos
