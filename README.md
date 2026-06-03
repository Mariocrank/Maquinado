# Sitio web para empresa de maquinado industrial

Proyecto base para una empresa metalmecanica que necesita vender servicios y productos en linea, atender clientes locales y operar en espanol e ingles.

## Arquitectura

- Frontend: React + Vite
- API: Django REST Framework
- Base de datos: PostgreSQL
- Contenedores: Docker Compose
- Pagos: Stripe Payment Intents

## Secciones incluidas

- Inicio con nombre provisional, frase principal y boton de cotizacion
- Nosotros con mision, vision y espacio para experiencia/socios
- Servicios y productos de maquinado
- Catalogo con dos caminos: cotizacion o pago en linea
- Galeria de trabajos con espacios para fotos reales
- Contacto con formulario, telefono, correo, direccion y WhatsApp
- Mapa preparado para insertar Google Maps
- Cambio de idioma espanol/ingles

## Modelo recomendado de venta

Para maquinado industrial conviene empezar con catalogo y formulario de cotizacion porque los precios suelen cambiar por material, cantidad, tolerancias, medidas y urgencia.

La tienda con pago en linea ya queda como modulo opcional para productos con precio fijo. Para activarla se necesitan llaves reales de Stripe.

## Configuracion

Edita `backend/.env`:

```env
STRIPE_SECRET_KEY=sk_test_tu_llave
STRIPE_WEBHOOK_SECRET=whsec_tu_webhook
```

Edita `frontend/.env`:

```env
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_tu_llave
```

Levanta el proyecto:

```bash
docker compose up --build
```

Abre:

```text
http://localhost:5173
```

## Webhook de Stripe

Para desarrollo local:

```bash
stripe listen --forward-to localhost:8000/api/payments/webhook/
```

Luego copia el valor `whsec_...` en `backend/.env`.

## Tarjeta de prueba

```text
4242 4242 4242 4242
```

Usa una fecha futura, cualquier CVC y cualquier codigo postal.

## Contenido pendiente del cliente

- Nombre final del negocio
- Logo en PNG o SVG
- Eslogan
- Fotos del taller, maquinas y trabajos terminados
- Lista final de servicios
- Telefono, correo, direccion y horario
- Links de redes sociales si existen
- Textos aprobados en ingles
- Productos y precios si se activa tienda completa

## Endpoints

- `POST /api/payments/create-intent/`: crea un Payment Intent y devuelve `clientSecret`.
- `POST /api/payments/webhook/`: actualiza el estado local del pago desde Stripe.
