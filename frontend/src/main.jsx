import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { Elements, PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Clock,
  CreditCard,
  Languages,
  Loader2,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Ruler,
  Send,
  ShieldCheck,
  Wrench,
  X,
} from "lucide-react";
import "./styles.css";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
const apiUrl = import.meta.env.VITE_API_URL;

const content = {
  es: {
    nav: ["Inicio", "Nosotros", "Servicios", "Catalogo", "Galeria", "Contacto"],
    language: "English",
    brand: "Maquinado Industrial",
    placeholderName: "Nombre por confirmar",
    heroTitle: "Precision metalmecanica para produccion, mantenimiento y proyectos especiales.",
    heroText:
      "Fabricacion de piezas, fixturas, herramentales y componentes industriales con atencion local y cotizaciones rapidas.",
    contactButton: "Solicitar cotizacion",
    catalogButton: "Ver servicios",
    stats: ["CNC y convencional", "Fixturas a medida", "Clientes locales y remotos"],
    aboutTitle: "Taller preparado para resolver piezas criticas.",
    aboutText:
      "Esta seccion se completa con la historia del negocio, anos de experiencia, mision, vision y socios. La estructura ya esta lista para presentar confianza, capacidad tecnica y respuesta profesional.",
    mission: "Mision",
    missionText: "Entregar soluciones de maquinado confiables, medibles y listas para integrarse a produccion.",
    vision: "Vision",
    visionText: "Ser proveedor de referencia para empresas que necesitan precision, comunicacion clara y entregas consistentes.",
    servicesTitle: "Servicios y productos",
    servicesText: "Catalogo base editable para piezas, materiales y trabajos comunes del taller.",
    quoteTitle: "Catalogo con cotizacion",
    quoteText:
      "Recomendado para trabajos con precio variable por material, medidas, tolerancias, cantidad o urgencia.",
    storeTitle: "Pago en linea opcional",
    storeText:
      "Para productos con precio fijo, el cliente puede pagar con tarjeta usando Stripe. Este modulo queda listo para activarse con llaves reales.",
    galleryTitle: "Galeria de trabajos",
    galleryText: "Espacios preparados para fotos de maquinas, piezas terminadas, procesos y proyectos anteriores.",
    contactTitle: "Contacto y cotizacion en linea",
    contactText: "Formulario para clientes locales o en linea. Tambien se deja visible WhatsApp para respuesta rapida.",
    mapTitle: "Ubicacion del taller",
    mapText: "Reemplazar por la direccion real del cliente o insertar Google Maps embed.",
    form: {
      name: "Nombre",
      email: "Correo",
      phone: "Telefono",
      company: "Empresa",
      service: "Servicio requerido",
      details: "Describe medidas, material, cantidad, tolerancias o archivos disponibles",
      send: "Enviar solicitud",
    },
    payment: {
      name: "Nombre del cliente",
      email: "Correo",
      amount: "Monto",
      currency: "Moneda",
      prepare: "Preparar cobro",
      pay: "Pagar ahora",
      empty: "Crea un cobro para mostrar el formulario seguro de tarjeta.",
      error: "Revisa los datos del cobro.",
    },
    footer: "Sitio bilingue preparado para dominio, SSL, hospedaje y contenido final del cliente.",
  },
  en: {
    nav: ["Home", "About", "Services", "Catalog", "Gallery", "Contact"],
    language: "Espanol",
    brand: "Industrial Machining",
    placeholderName: "Name pending confirmation",
    heroTitle: "Precision metalworking for production, maintenance, and custom projects.",
    heroText:
      "Manufacturing of parts, fixtures, tooling, and industrial components with local support and fast quoting.",
    contactButton: "Request a quote",
    catalogButton: "View services",
    stats: ["CNC and manual", "Custom fixtures", "Local and remote clients"],
    aboutTitle: "A shop ready to solve critical parts.",
    aboutText:
      "This section will be completed with the business history, years of experience, mission, vision, and partners. The structure is ready to communicate trust, technical capability, and professional response.",
    mission: "Mission",
    missionText: "Deliver reliable machining solutions that are measurable and ready for production.",
    vision: "Vision",
    visionText: "Become a trusted supplier for companies that need precision, clear communication, and consistent delivery.",
    servicesTitle: "Services and products",
    servicesText: "Editable base catalog for parts, materials, and common shop work.",
    quoteTitle: "Quote-based catalog",
    quoteText:
      "Recommended for work with variable pricing by material, dimensions, tolerances, quantity, or urgency.",
    storeTitle: "Optional online payment",
    storeText:
      "For fixed-price products, customers can pay by card using Stripe. This module is ready to activate with real keys.",
    galleryTitle: "Work gallery",
    galleryText: "Prepared spaces for machine photos, finished parts, processes, and previous projects.",
    contactTitle: "Contact and online quote",
    contactText: "Form for local or online customers. WhatsApp also stays visible for quick replies.",
    mapTitle: "Shop location",
    mapText: "Replace with the customer's real address or insert a Google Maps embed.",
    form: {
      name: "Name",
      email: "Email",
      phone: "Phone",
      company: "Company",
      service: "Requested service",
      details: "Describe dimensions, material, quantity, tolerances, or available files",
      send: "Send request",
    },
    payment: {
      name: "Customer name",
      email: "Email",
      amount: "Amount",
      currency: "Currency",
      prepare: "Prepare payment",
      pay: "Pay now",
      empty: "Create a payment to show the secure card form.",
      error: "Check the payment details.",
    },
    footer: "Bilingual site prepared for domain, SSL, hosting, and final client content.",
  },
};

const serviceItems = [
  { icon: Wrench, es: "Maquinado CNC", en: "CNC machining", detailEs: "Piezas de precision, produccion corta y componentes especiales.", detailEn: "Precision parts, short runs, and special components." },
  { icon: Ruler, es: "Fixturas y herramentales", en: "Fixtures and tooling", detailEs: "Diseno y fabricacion para ensamble, inspeccion o produccion.", detailEn: "Design and fabrication for assembly, inspection, or production." },
  { icon: ShieldCheck, es: "Materiales industriales", en: "Industrial materials", detailEs: "Aluminio, acero, inoxidable, plasticos de ingenieria y mas.", detailEn: "Aluminum, steel, stainless, engineering plastics, and more." },
  { icon: Clock, es: "Reparacion y mantenimiento", en: "Repair and maintenance", detailEs: "Refacciones, ajustes, reemplazos y piezas urgentes.", detailEn: "Replacement parts, adjustments, repairs, and urgent parts." },
];

const galleryItems = ["CNC mill", "Lathe work", "Inspection", "Finished part", "Fixture", "Workshop"];

function CheckoutForm({ clientSecret, labels }) {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsSubmitting(true);
    setMessage("");

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: { return_url: window.location.origin },
    });

    if (error) {
      setMessage(error.message ?? labels.error);
    }

    setIsSubmitting(false);
  }

  return (
    <form className="payment-panel" onSubmit={handleSubmit}>
      <PaymentElement />
      <button disabled={!stripe || !clientSecret || isSubmitting} className="primary-button">
        {isSubmitting ? <Loader2 className="spin" size={18} /> : <CreditCard size={18} />}
        {labels.pay}
      </button>
      {message && <p className="error">{message}</p>}
    </form>
  );
}

function App() {
  const [language, setLanguage] = useState("es");
  const [menuOpen, setMenuOpen] = useState(false);
  const [paymentForm, setPaymentForm] = useState({
    customer_name: "",
    customer_email: "",
    amount: "500.00",
    currency: "mxn",
  });
  const [clientSecret, setClientSecret] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const t = content[language];

  const paymentOptions = useMemo(
    () => ({
      clientSecret,
      appearance: {
        theme: "stripe",
        variables: {
          colorPrimary: "#17645c",
          borderRadius: "6px",
        },
      },
    }),
    [clientSecret],
  );

  function updatePaymentField(event) {
    setPaymentForm({ ...paymentForm, [event.target.name]: event.target.value });
  }

  async function createPaymentIntent(event) {
    event.preventDefault();
    setIsLoading(true);
    setError("");
    setClientSecret("");

    try {
      const response = await fetch(`${apiUrl}/payments/create-intent/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(paymentForm),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail ?? t.payment.error);
      }

      setClientSecret(data.clientSecret);
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setIsLoading(false);
    }
  }

  function submitQuote(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = encodeURIComponent("Solicitud de cotizacion");
    const body = encodeURIComponent(
      Array.from(formData.entries())
        .map(([key, value]) => `${key}: ${value}`)
        .join("\n"),
    );
    window.location.href = `mailto:ventas@cliente.com?subject=${subject}&body=${body}`;
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio">
          <Building2 size={28} />
          <span>{t.placeholderName}</span>
        </a>
        <nav className={menuOpen ? "nav is-open" : "nav"}>
          {t.nav.map((item, index) => (
            <a key={item} href={`#${["inicio", "nosotros", "servicios", "catalogo", "galeria", "contacto"][index]}`} onClick={() => setMenuOpen(false)}>
              {item}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <button className="ghost-button" onClick={() => setLanguage(language === "es" ? "en" : "es")}>
            <Languages size={18} />
            {t.language}
          </button>
          <button className="icon-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-content">
          <p className="eyebrow">{t.brand}</p>
          <h1>{t.heroTitle}</h1>
          <p>{t.heroText}</p>
          <div className="hero-actions">
            <a className="primary-link" href="#contacto">
              {t.contactButton}
              <ArrowRight size={18} />
            </a>
            <a className="secondary-link" href="#servicios">{t.catalogButton}</a>
          </div>
        </div>
        <div className="hero-visual" aria-label="Industrial machining preview">
          <div className="machine-frame">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="stats-strip">
          {t.stats.map((stat) => (
            <span key={stat}>
              <BadgeCheck size={18} />
              {stat}
            </span>
          ))}
        </div>
      </section>

      <section className="section two-column" id="nosotros">
        <div>
          <p className="eyebrow">About</p>
          <h2>{t.aboutTitle}</h2>
          <p>{t.aboutText}</p>
        </div>
        <div className="info-grid">
          <article>
            <h3>{t.mission}</h3>
            <p>{t.missionText}</p>
          </article>
          <article>
            <h3>{t.vision}</h3>
            <p>{t.visionText}</p>
          </article>
        </div>
      </section>

      <section className="section" id="servicios">
        <div className="section-heading">
          <p className="eyebrow">Capabilities</p>
          <h2>{t.servicesTitle}</h2>
          <p>{t.servicesText}</p>
        </div>
        <div className="service-grid">
          {serviceItems.map((service) => {
            const Icon = service.icon;
            return (
              <article className="service-card" key={service.es}>
                <Icon size={26} />
                <h3>{language === "es" ? service.es : service.en}</h3>
                <p>{language === "es" ? service.detailEs : service.detailEn}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section catalog-section" id="catalogo">
        <div className="selling-options">
          <article>
            <p className="eyebrow">Opcion A</p>
            <h2>{t.quoteTitle}</h2>
            <p>{t.quoteText}</p>
            <a className="secondary-link dark" href="#contacto">{t.contactButton}</a>
          </article>
          <article>
            <p className="eyebrow">Opcion B</p>
            <h2>{t.storeTitle}</h2>
            <p>{t.storeText}</p>
          </article>
        </div>
        <div className="payment-workspace">
          <form className="customer-form" onSubmit={createPaymentIntent}>
            <label>
              {t.payment.name}
              <input name="customer_name" value={paymentForm.customer_name} onChange={updatePaymentField} required />
            </label>
            <label>
              {t.payment.email}
              <input name="customer_email" type="email" value={paymentForm.customer_email} onChange={updatePaymentField} required />
            </label>
            <label>
              {t.payment.amount}
              <input name="amount" type="number" min="1" step="0.01" value={paymentForm.amount} onChange={updatePaymentField} required />
            </label>
            <label>
              {t.payment.currency}
              <select name="currency" value={paymentForm.currency} onChange={updatePaymentField}>
                <option value="mxn">MXN</option>
                <option value="usd">USD</option>
              </select>
            </label>
            <button className="primary-button" disabled={isLoading}>
              {isLoading ? <Loader2 className="spin" size={18} /> : <CreditCard size={18} />}
              {t.payment.prepare}
            </button>
            {error && <p className="error">{error}</p>}
          </form>
          {clientSecret ? (
            <Elements stripe={stripePromise} options={paymentOptions}>
              <CheckoutForm clientSecret={clientSecret} labels={t.payment} />
            </Elements>
          ) : (
            <div className="empty-state">
              <CreditCard size={34} />
              <p>{t.payment.empty}</p>
            </div>
          )}
        </div>
      </section>

      <section className="section" id="galeria">
        <div className="section-heading">
          <p className="eyebrow">Portfolio</p>
          <h2>{t.galleryTitle}</h2>
          <p>{t.galleryText}</p>
        </div>
        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <div className="gallery-tile" key={item}>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section contact-section" id="contacto">
        <div className="contact-copy">
          <p className="eyebrow">Contact</p>
          <h2>{t.contactTitle}</h2>
          <p>{t.contactText}</p>
          <div className="contact-list">
            <span><Phone size={18} /> +52 000 000 0000</span>
            <span><Mail size={18} /> ventas@cliente.com</span>
            <span><MapPin size={18} /> Direccion por confirmar</span>
          </div>
        </div>
        <form className="quote-form" onSubmit={submitQuote}>
          <input name="nombre" placeholder={t.form.name} required />
          <input name="correo" type="email" placeholder={t.form.email} required />
          <input name="telefono" placeholder={t.form.phone} />
          <input name="empresa" placeholder={t.form.company} />
          <input name="servicio" placeholder={t.form.service} required />
          <textarea name="detalles" placeholder={t.form.details} required />
          <button className="primary-button">
            <Send size={18} />
            {t.form.send}
          </button>
        </form>
      </section>

      <section className="map-band">
        <div>
          <h2>{t.mapTitle}</h2>
          <p>{t.mapText}</p>
        </div>
        <div className="map-placeholder">
          <MapPin size={30} />
          Google Maps
        </div>
      </section>

      <a className="whatsapp" href="https://wa.me/520000000000" aria-label="WhatsApp">
        <MessageCircle size={26} />
      </a>

      <footer>
        <p>{t.footer}</p>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
