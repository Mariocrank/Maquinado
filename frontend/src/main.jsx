import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  BadgeCheck,
  Clock,
  Search,
  Languages,
  Mail,
  MapPin,
  Menu,
  Phone,
  Ruler,
  Send,
  ShieldCheck,
  Trash2,
  Wrench,
  X,
} from "lucide-react";
import "./styles.css";
import heroVideo from "./assets/hero-video.mp4";

const navIds = ["inicio", "nosotros", "servicios", "catalogo", "galeria", "contacto"];

const content = {
  es: {
    nav: ["Inicio", "Nosotros", "Servicios", "Catálogo", "Galería", "Contacto"],
    language: "English",
    brand: "PRODUCT DESIGN AND MANUFACTURING",
    placeholderName: "R.A.M.",
    heroTitle: "Soluciones metalmecánicas de precisión para producción, mantenimiento y proyectos especiales.",
    heroText:
      "Fabricamos piezas, fixturas, herramentales y componentes industriales de alta calidad, ofreciendo atención local y cotizaciones rápidas para satisfacer las necesidades de su empresa.",
    contactButton: "Solicitar cotización",
    catalogButton: "Ver servicios",
    stats: ["CNC y convencional", "Fixturas a medida", "Clientes locales y remotos"],
    aboutTitle: "Taller preparado para resolver piezas críticas.",
    aboutText:
      "Esta sección se completa con la historia del negocio, años de experiencia, misión, visión y socios. La estructura ya está lista para presentar confianza, capacidad técnica y respuesta profesional.",
    aboutHighlights: [
      { value: "+15", label: "años de experiencia" },
      { value: "+500", label: "proyectos fabricados" },
      { value: "±0.01 mm", label: "precisión alcanzable" },
    ],
    mission: "Misión",
    missionText: "Entregar soluciones de maquinado confiables, medibles y listas para integrarse a producción.",
    vision: "Visión",
    visionText: "Ser proveedor de referencia para empresas que necesitan precisión, comunicación clara y entregas consistentes.",
    servicesTitle: "Servicios y productos",
    servicesText: "Catálogo base editable para piezas, materiales y trabajos comunes del taller.",
    quoteTitle: "Catálogo con cotización",
    quoteText:
      "Recomendado para trabajos con precio variable por material, medidas, tolerancias, cantidad o urgencia.",
    storeTitle: "Pedido directo desde la página",
    storeText:
      "Para productos con precio fijo, el cliente puede seleccionar piezas y enviar una solicitud directa por correo o WhatsApp.",
    galleryTitle: "Galería de maquinado",
    galleryText: "Muestra visual de piezas, procesos y trabajos industriales realizados en el taller.",
    contactTitle: "Contacto y cotización en línea",
    contactText: "Formulario para clientes locales o en línea. También se deja visible WhatsApp para respuesta rápida.",
    mapTitle: "Ubicación del taller",
    mapText: "Reemplazar por la dirección real del cliente o insertar Google Maps embed.",
    form: {
      name: "Nombre",
      email: "Correo",
      phone: "Teléfono",
      company: "Empresa",
      service: "Servicio requerido",
      details: "Describe medidas, material, cantidad, tolerancias o archivos disponibles",
      send: "Enviar solicitud",
    },
    payment: {
      title: "Compra directa",
      text: "Selecciona un producto, completa tus datos y paga en línea con tarjeta de débito o crédito.",
      search: "Buscar producto",
      searchPlaceholder: "Escribe el nombre de la pieza",
      noResults: "No se encontraron productos con ese nombre.",
      noResultsTitle: "Producto no encontrado",
      noResultsHint: "Verifica el nombre o intenta con otra palabra relacionada.",
      clearSearch: "Limpiar búsqueda",
      added: "Agregado a la compra",
      selectedParts: "Piezas seleccionadas",
      items: "Piezas acumuladas",
      total: "Total estimado",
      continue: "Continuar con la solicitud",
      keepShopping: "Seguir viendo productos",
      secureTitle: "Solicitud directa",
      secureText: "El cliente deja sus datos y el detalle de las piezas para recibir confirmación y seguimiento.",
      product: "Producto",
      name: "Nombre del cliente",
      email: "Correo",
      phone: "Teléfono",
      amount: "Precio",
      currency: "Moneda",
      prepare: "Agregar al pedido",
      pay: "Enviar solicitud",
      empty: "Selecciona productos y envía la solicitud para continuar por WhatsApp o correo.",
      error: "Revisa los datos de la solicitud.",
    },
    footer: "Sitio bilingüe preparado para dominio, SSL, hospedaje y contenido final del cliente.",
  },
  en: {
    nav: ["Home", "About", "Services", "Catalog", "Gallery", "Contact"],
    language: "Español",
    brand: "PRODUCT DESIGN AND MANUFACTURING",
    placeholderName: "R.A.M.",
    heroTitle: "Precision metalworking for production, maintenance, and custom projects.",
    heroText:
      "Manufacturing of parts, fixtures, tooling, and industrial components with local support and fast quoting.",
    contactButton: "Request a quote",
    catalogButton: "View services",
    stats: ["CNC and manual", "Custom fixtures", "Local and remote clients"],
    aboutTitle: "A shop ready to solve critical parts.",
    aboutText:
      "This section will be completed with the business history, years of experience, mission, vision, and partners. The structure is ready to communicate trust, technical capability, and professional response.",
    aboutHighlights: [
      { value: "+15", label: "years of experience" },
      { value: "+500", label: "projects delivered" },
      { value: "±0.01mm", label: "achievable precision" },
    ],
    mission: "Mission",
    missionText: "Deliver reliable machining solutions that are measurable and ready for production.",
    vision: "Vision",
    visionText: "Become a trusted supplier for companies that need precision, clear communication, and consistent delivery.",
    servicesTitle: "Services and products",
    servicesText: "Editable base catalog for parts, materials, and common shop work.",
    quoteTitle: "Quote-based catalog",
    quoteText:
      "Recommended for work with variable pricing by material, dimensions, tolerances, quantity, or urgency.",
    storeTitle: "Direct request from the site",
    storeText:
      "For fixed-price products, customers can select parts and send a direct request by email or WhatsApp.",
    galleryTitle: "Machining gallery",
    galleryText: "Visual showcase of parts, processes, and industrial work produced by the shop.",
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
      title: "Direct purchase",
      text: "Select a product, enter your details, and pay online with debit or credit card.",
      search: "Search product",
      searchPlaceholder: "Type the part name",
      noResults: "No products were found with that name.",
      noResultsTitle: "Product not found",
      noResultsHint: "Check the name or try another related keyword.",
      clearSearch: "Clear search",
      added: "Added to purchase",
      selectedParts: "Selected parts",
      items: "Items in cart",
      total: "Estimated total",
      continue: "Continue request",
      keepShopping: "Keep browsing products",
      secureTitle: "Direct request",
      secureText: "Customers leave their details and part list to receive confirmation and follow-up.",
      product: "Product",
      name: "Customer name",
      email: "Email",
      phone: "Phone",
      amount: "Price",
      currency: "Currency",
      prepare: "Add to request",
      pay: "Send request",
      empty: "Select products and send the request to continue by WhatsApp or email.",
      error: "Check the request details.",
    },
    footer: "Bilingual site prepared for domain, SSL, hosting, and final client content.",
  },
};

const serviceItems = [
  { icon: Wrench, es: "Maquinado CNC", en: "CNC machining", detailEs: "Piezas de precisión, producción corta y componentes especiales.", detailEn: "Precision parts, short runs, and special components." },
  { icon: Ruler, es: "Fixturas y herramentales", en: "Fixtures and tooling", detailEs: "Diseño y fabricación para ensamble, inspección o producción.", detailEn: "Design and fabrication for assembly, inspection, or production." },
  { icon: ShieldCheck, es: "Materiales industriales", en: "Industrial materials", detailEs: "Aluminio, acero, inoxidable, plásticos de ingeniería y más.", detailEn: "Aluminum, steel, stainless, engineering plastics, and more." },
  { icon: Clock, es: "Reparación y mantenimiento", en: "Repair and maintenance", detailEs: "Refacciones, ajustes, reemplazos y piezas urgentes.", detailEn: "Replacement parts, adjustments, repairs, and urgent parts." },
];

const productItems = [
  {
    id: "buje-precision",
    amount: "250.00",
    currency: "mxn",
    es: "Buje de Precision",
    en: "Precision bushing",
    detailEs: "Buje maquinado para ajuste preciso y funcionamiento confiable.",
    detailEn: "Machined bushing for precise fit and reliable operation.",
    image: "/catalogo/buje-precision.jpeg",
  },
  {
    id: "eje-maquinado-cnc",
    amount: "4000.00",
    currency: "mxn",
    es: "Eje maquinado CNC",
    en: "CNC machined shaft",
    detailEs: "Eje de precisión fabricado para transmisión, soporte o movimiento controlado.",
    detailEn: "Precision shaft built for transmission, support, or controlled motion.",
    image: "/catalogo/eje-maquinado-cnc.jpeg",
  },
  {
    id: "fixtura-industrial",
    amount: "3156.00",
    currency: "mxn",
    es: "Fixture de Sujecion Industrial",
    en: "Industrial fixture",
    detailEs: "Fixture de sujeción para ensamble, verificación y repetibilidad en producción.",
    detailEn: "Fixture ready for assembly, inspection, and repeatability in production.",
    image: "/catalogo/fixture-sujecion-industrial.jpeg",
  },
  {
    id: "molde-industrial",
    amount: "50000.00",
    currency: "mxn",
    es: "Molde industrial",
    en: "Industrial mold",
    detailEs: "Molde industrial para procesos repetitivos y producción especializada.",
    detailEn: "Industrial mold for repetitive processes and specialized production.",
    image: "/catalogo/molde-industrial.jpeg",
  },
  {
    id: "placa-cortadora-laser",
    amount: "890.00",
    currency: "mxn",
    es: "Placa cortadora por laser",
    en: "Laser-cut plate",
    detailEs: "Placa cortada con precisión para armado, montaje o protección.",
    detailEn: "Precision-cut plate for assembly, mounting, or protection.",
    image: "/catalogo/placa-cortadora-laser.jpeg",
  },
  {
    id: "polea-maquinado",
    amount: "1300.00",
    currency: "mxn",
    es: "Polea de maquinado",
    en: "Machined pulley",
    detailEs: "Polea industrial para sistemas de arrastre, sincronización y potencia.",
    detailEn: "Industrial pulley for drive, synchronization, and power systems.",
    image: "/catalogo/polea-maquinado.jpeg",
  },
  {
    id: "refaccion-plano-bajo",
    amount: "5780.00",
    currency: "mxn",
    es: "Refaccion especial plano bajo",
    en: "Low-profile special spare part",
    detailEs: "Refaccion especial fabricada sobre plano para reemplazos criticos.",
    detailEn: "Special spare part built from drawings for critical replacements.",
    image: "/catalogo/refaccion-plano-bajo.jpeg",
  },
  {
    id: "soporte-industrial",
    amount: "400.00",
    currency: "mxn",
    es: "Soporte industrial",
    en: "Industrial support",
    detailEs: "Soporte maquinado para fijacion, carga o montaje de componentes.",
    detailEn: "Machined support for fastening, load handling, or component mounting.",
    image: "/catalogo/soporte-industrial.jpeg",
  },
];
const galleryItems = [
  {
    id: "gal-buje",
    es: "Buje de Precision",
    en: "Precision bushing",
    detailEs: "Acabado fino y tolerancias de ajuste para componentes de precisión.",
    detailEn: "Fine finish and fitting tolerances for precision components.",
    image: "/catalogo/buje-precision.jpeg",
  },
  {
    id: "gal-eje",
    es: "Eje maquinado CNC",
    en: "CNC machined shaft",
    detailEs: "Pieza cilindrica fabricada para movimiento, soporte y transmision.",
    detailEn: "Cylindrical part built for motion, support, and transmission.",
    image: "/catalogo/eje-maquinado-cnc.jpeg",
  },
  {
    id: "gal-fixture",
    es: "Fixture de Sujecion Industrial",
    en: "Industrial holding fixture",
    detailEs: "Sistema de sujecion para ensamble repetible y verificacion.",
    detailEn: "Holding system for repeatable assembly and inspection.",
    image: "/catalogo/fixture-sujecion-industrial.jpeg",
  },
  {
    id: "gal-molde",
    es: "Molde industrial",
    en: "Industrial mold",
    detailEs: "Trabajo robusto para producción especializada y procesos repetitivos.",
    detailEn: "Robust work for specialized production and repetitive processes.",
    image: "/catalogo/molde-industrial.jpeg",
  },
  {
    id: "gal-placa",
    es: "Placa cortadora por laser",
    en: "Laser-cut plate",
    detailEs: "Corte limpio para montaje, estructura o proteccion industrial.",
    detailEn: "Clean cut for mounting, structure, or industrial protection.",
    image: "/catalogo/placa-cortadora-laser.jpeg",
  },
  {
    id: "gal-polea",
    es: "Polea de maquinado",
    en: "Machined pulley",
    detailEs: "Componente de arrastre para sincronizacion y potencia.",
    detailEn: "Drive component for synchronization and power.",
    image: "/catalogo/polea-maquinado.jpeg",
  },
];

function App() {
  const [language, setLanguage] = useState("es");
  const [menuOpen, setMenuOpen] = useState(false);
  const [catalogSearch, setCatalogSearch] = useState("");
  const [checkoutReady, setCheckoutReady] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [heroVideoAvailable, setHeroVideoAvailable] = useState(true);
  const [requestForm, setRequestForm] = useState({
    product_id: "",
    customer_name: "",
    customer_email: "",
    customer_phone: "",
    amount: "",
    currency: "",
  });
  const t = content[language];
  const heroTitleLines = language === "es"
    ? [
        { text: "Soluciones metalmecánicas", tone: "light" },
        { text: "de precisión", tone: "accent" },
        { text: "para producción,", tone: "light" },
        { text: "mantenimiento", tone: "light" },
        { text: "y proyectos", tone: "light" },
        { text: "especiales.", tone: "accent" },
      ]
    : [
        { text: "Precision", tone: "accent" },
        { text: "metalworking", tone: "light" },
        { text: "for production,", tone: "light" },
        { text: "maintenance", tone: "light" },
        { text: "and custom", tone: "light" },
        { text: "projects.", tone: "accent" },
      ];
  const heroBodyText = language === "es"
    ? "Fabricamos piezas, fixturas, herramentales y componentes industriales de alta calidad. Brindamos atención local, tiempos de respuesta rápidos y cotizaciones oportunas para satisfacer las necesidades de su empresa."
    : t.heroText;
  const selectedProduct = productItems.find((product) => product.id === requestForm.product_id) ?? null;
  const summaryProduct = selectedProduct ?? cartItems[cartItems.length - 1] ?? null;
  const cartTotal = cartItems
    .reduce((total, item) => total + Number(item.amount) * item.quantity, 0)
    .toFixed(2);
  const filteredProducts = productItems.filter((product) =>
    (language === "es" ? product.es : product.en).toLowerCase().includes(catalogSearch.trim().toLowerCase()),
  );
  const hasCatalogResults = filteredProducts.length > 0;
  const displayHeroTitleLines = language === "es"
    ? [
        { text: "Soluciones metalmecánicas", tone: "light" },
        { text: "de precisión", tone: "accent" },
        { text: "para producción,", tone: "light" },
        { text: "mantenimiento", tone: "light" },
        { text: "y proyectos", tone: "light" },
        { text: "especiales.", tone: "accent" },
      ]
    : heroTitleLines;
  const displayHeroBodyText = language === "es"
    ? "Fabricamos piezas, fixturas, herramentales y componentes industriales de alta calidad. Brindamos atención local, tiempos de respuesta rápidos y cotizaciones oportunas para satisfacer las necesidades de su empresa."
    : heroBodyText;

  const finalHeroTitleLines = language === "es"
    ? [
        { text: "Soluciones metalmecánicas", tone: "light" },
        { text: "de precisión", tone: "light" },
        { text: "para producción,", tone: "light" },
        { text: "mantenimiento", tone: "light" },
        { text: "y proyectos", tone: "light" },
        { text: "especiales.", tone: "light" },
      ]
    : displayHeroTitleLines;
  const finalHeroBodyText = language === "es"
    ? "Fabricamos piezas, fixturas, herramentales y componentes industriales de alta calidad. Brindamos atención local, tiempos de respuesta rápidos y cotizaciones oportunas para satisfacer las necesidades de su empresa."
    : displayHeroBodyText;
  const finalHeroEyebrow = language === "es" ? "MAQUINADO INDUSTRIAL" : t.brand;

  useEffect(() => {
    document.title = "R.A.M. | Product Design and Manufacturing";
  }, []);

  useEffect(() => {
    const revealItems = document.querySelectorAll(".scroll-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [filteredProducts.length, language]);

  useEffect(() => {
    const parallaxItems = document.querySelectorAll(".scroll-parallax");
    let ticking = false;

    function updateParallax() {
      const viewportHeight = window.innerHeight || 1;

      parallaxItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const itemCenter = rect.top + rect.height / 2;
        const viewportCenter = viewportHeight / 2;
        const distance = (itemCenter - viewportCenter) / viewportHeight;
        const clamped = Math.max(-1, Math.min(1, distance));

        item.style.setProperty("--parallax-shift", `${clamped * -36}px`);
        item.style.setProperty("--parallax-scale", `${1.08 - (1 - Math.abs(clamped)) * 0.08}`);
      });

      ticking = false;
    }

    function requestTick() {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    }

    updateParallax();
    window.addEventListener("scroll", requestTick, { passive: true });
    window.addEventListener("resize", requestTick);

    return () => {
      window.removeEventListener("scroll", requestTick);
      window.removeEventListener("resize", requestTick);
    };
  }, []);

  function updatePaymentField(event) {
    setRequestForm({ ...requestForm, [event.target.name]: event.target.value });
  }

  function selectProduct(product) {
    setCheckoutReady(false);
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === product.id);

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }

      return [...currentItems, { ...product, quantity: 1 }];
    });
    setRequestForm((currentForm) => ({
      ...currentForm,
      product_id: product.id,
      amount: product.amount,
      currency: product.currency,
    }));

    window.setTimeout(() => {
      document.getElementById("cart-summary")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 20);
  }

  function submitOrderRequest(event) {
    event.preventDefault();
    const itemLines = cartItems.map((item) => {
      const label = language === "es" ? item.es : item.en;
      return `${label} x${item.quantity} - ${item.currency.toUpperCase()} $${item.amount}`;
    });
    const subject = encodeURIComponent(language === "es" ? "Solicitud de pedido R.A.M." : "R.A.M. order request");
    const body = encodeURIComponent(
      [
        `${t.payment.name}: ${requestForm.customer_name}`,
        `${t.payment.email}: ${requestForm.customer_email}`,
        `${t.payment.phone}: ${requestForm.customer_phone}`,
        `${t.payment.items}: ${cartItems.reduce((total, item) => total + item.quantity, 0)}`,
        `${t.payment.total}: ${requestForm.currency.toUpperCase()} $${requestForm.amount}`,
        "",
        language === "es" ? "Piezas seleccionadas:" : "Selected parts:",
        ...itemLines,
      ].join("\n"),
    );
    window.location.href = `mailto:ventas@cliente.com?subject=${subject}&body=${body}`;
  }

  function submitQuote(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = encodeURIComponent("Solicitud de cotización");
    const body = encodeURIComponent(
      Array.from(formData.entries())
        .map(([key, value]) => `${key}: ${value}`)
        .join("\n"),
    );
    window.location.href = `mailto:ventas@cliente.com?subject=${subject}&body=${body}`;
  }

  function openSection(sectionId) {
    setMenuOpen(false);
    if (sectionId === "inicio") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.replaceState(null, "", "#inicio");
      return;
    }
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${sectionId}`);
  }

  function continueToCheckout() {
    setCheckoutReady(true);
    setRequestForm((currentForm) => ({
      ...currentForm,
      amount: cartTotal,
      currency: cartItems[0]?.currency ?? currentForm.currency,
    }));
    window.setTimeout(() => {
      document.getElementById("checkout-flow")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 20);
  }

  function keepBrowsingProducts() {
    setCheckoutReady(false);
    setRequestForm((currentForm) => ({
      ...currentForm,
      product_id: "",
    }));

    window.setTimeout(() => {
      document.getElementById("catalog-products")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 20);
  }

  function clearCatalogSearch() {
    setCatalogSearch("");

    window.setTimeout(() => {
      document.getElementById("catalog-products")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 20);
  }

  function buyNow(product) {
    selectProduct(product);
    window.setTimeout(() => {
      document.getElementById("cart-summary")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  }

  function removeCartItem(productId) {
    const nextItems = cartItems.filter((item) => item.id !== productId);

    setCartItems(nextItems);

    if (!nextItems.length) {
      setCheckoutReady(false);
      setRequestForm({
        product_id: "",
        customer_name: requestForm.customer_name,
        customer_email: requestForm.customer_email,
        customer_phone: requestForm.customer_phone,
        amount: "",
        currency: "",
      });
      return;
    }

    const nextSummaryProduct = nextItems[nextItems.length - 1];
    const nextTotal = nextItems
      .reduce((total, item) => total + Number(item.amount) * item.quantity, 0)
      .toFixed(2);

    setRequestForm((currentForm) => ({
      ...currentForm,
      product_id: nextSummaryProduct.id,
      amount: checkoutReady ? nextTotal : nextSummaryProduct.amount,
      currency: nextSummaryProduct.currency,
    }));
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" onClick={() => openSection("inicio")}>
          <div className="brand-mark" aria-hidden="true">
            <span className="brand-title">{t.placeholderName}</span>
            <span className="brand-subtitle">{t.brand}</span>
          </div>
        </a>
        <nav className={menuOpen ? "nav is-open" : "nav"}>
          {t.nav.map((item, index) => (
            <a
              key={item}
              href={`#${navIds[index]}`}
              onClick={() => openSection(navIds[index])}
            >
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
          <p className="eyebrow">{finalHeroEyebrow}</p>
          <h1>
            {finalHeroTitleLines.map((line) => (
              <span
                key={line.text}
                className={line.tone === "accent" ? "hero-title-line hero-title-accent" : "hero-title-line"}
              >
                {line.text}
              </span>
            ))}
          </h1>
          <p>{finalHeroBodyText}</p>
          <div className="hero-actions">
            <a className="primary-link" href="#contacto">
              {t.contactButton}
              <ArrowRight size={18} />
            </a>
            <a className="secondary-link" href="#servicios">{t.catalogButton}</a>
          </div>
        </div>
        <div className="hero-visual" aria-label="Industrial machining preview">
          {heroVideoAvailable ? (
            <video
              className="hero-video"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/catalogo/eje-maquinado-cnc.jpeg"
              onError={() => setHeroVideoAvailable(false)}
            >
              <source src={heroVideo} type="video/mp4" />
            </video>
          ) : (
            <div
              className="hero-fallback-image"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(9, 15, 14, 0.12), rgba(9, 15, 14, 0.4)), url("/catalogo/eje-maquinado-cnc.jpeg")',
              }}
            />
          )}
          <div className="hero-video-overlay" />
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
          <p className="eyebrow">{language === "es" ? "Nosotros" : "About"}</p>
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
          <p className="eyebrow">{language === "es" ? "Capacidades" : "Capabilities"}</p>
          <h2>{t.servicesTitle}</h2>
          <p>{t.servicesText}</p>
        </div>
        <div className="service-grid">
          {serviceItems.map((service) => {
            const Icon = service.icon;
            return (
              <article className="service-card scroll-reveal" key={service.es}>
                <Icon size={26} />
                <h3>{language === "es" ? service.es : service.en}</h3>
                <p>{language === "es" ? service.detailEs : service.detailEn}</p>
              </article>
            );
          })}
        </div>
        </section>

        <section className="section catalog-section" id="catalogo">
        <div className="section-heading">
          <p className="eyebrow">{language === "es" ? "Catálogo" : "Checkout"}</p>
          <h2>{t.payment.title}</h2>
          <p>{t.payment.text}</p>
        </div>
        <div className="catalog-toolbar">
          <label className="catalog-search">
            <span>{t.payment.search}</span>
            <div className="catalog-search-field">
              <Search size={18} />
              <input
                type="text"
                value={catalogSearch}
                onChange={(event) => setCatalogSearch(event.target.value)}
                placeholder={t.payment.searchPlaceholder}
              />
            </div>
          </label>
        </div>
        {hasCatalogResults ? (
          <div className="product-grid" id="catalog-products">
            {filteredProducts.map((product) => {
              const isSelected = requestForm.product_id === product.id;

              return (
                <article
                  className={isSelected ? "product-card scroll-reveal is-selected" : "product-card scroll-reveal"}
                  key={product.id}
                  onClick={() => selectProduct(product)}
                >
                  <div
                    className="product-image scroll-parallax"
                    style={{
                      backgroundImage: `linear-gradient(rgba(9, 15, 14, 0.08), rgba(9, 15, 14, 0.28)), url("${product.image}")`,
                    }}
                  />
                  <p className="product-price">
                    {product.currency.toUpperCase()} ${product.amount}
                  </p>
                  <h3>{language === "es" ? product.es : product.en}</h3>
                  <p>{language === "es" ? product.detailEs : product.detailEn}</p>
                  <button
                    type="button"
                    className="primary-button"
                    onClick={(event) => {
                      event.stopPropagation();
                      buyNow(product);
                    }}
                  >
                    {t.payment.prepare}
                  </button>
                </article>
              );
            })}
          </div>
        ) : null}
        {catalogSearch.trim() && !hasCatalogResults && (
          <div className="catalog-empty-state">
            <div className="empty-illustration" aria-hidden="true">
              <div className="empty-box-lid" />
              <div className="empty-box-body" />
              <div className="empty-search-ring" />
              <div className="empty-search-handle" />
            </div>
            <h3>{t.payment.noResultsTitle}</h3>
            <p>{t.payment.noResults}</p>
            <p>{t.payment.noResultsHint}</p>
            <button type="button" className="primary-button" onClick={clearCatalogSearch}>
              {t.payment.clearSearch}
            </button>
          </div>
        )}
        {summaryProduct ? (
        <>
        <section className="cart-panel" id="cart-summary">
          <div className="cart-panel-copy">
            <p className="eyebrow">{t.payment.added}</p>
            <h3>{language === "es" ? summaryProduct.es : summaryProduct.en}</h3>
            <p>{language === "es" ? summaryProduct.detailEs : summaryProduct.detailEn}</p>
            <div className="cart-items-list">
              <p className="cart-items-title">{t.payment.selectedParts}</p>
              {cartItems.map((item) => (
                <div className="cart-item-row" key={item.id}>
                  <span>{language === "es" ? item.es : item.en}</span>
                  <div className="cart-item-actions">
                    <strong>x{item.quantity}</strong>
                    <button
                      type="button"
                      className="icon-remove"
                      aria-label={`Eliminar ${language === "es" ? item.es : item.en}`}
                      onClick={(event) => {
                        event.stopPropagation();
                        removeCartItem(item.id);
                      }}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="cart-panel-price">
            <span>{t.payment.items}: {cartItems.reduce((total, item) => total + item.quantity, 0)}</span>
            <span>{t.payment.total}</span>
            <strong>{summaryProduct.currency.toUpperCase()} ${cartTotal}</strong>
          </div>
          <div className="cart-panel-actions">
            <button type="button" className="primary-button" onClick={continueToCheckout}>
              {t.payment.continue}
            </button>
            <button type="button" className="secondary-link dark" onClick={keepBrowsingProducts}>
              {t.payment.keepShopping}
            </button>
          </div>
        </section>
        {checkoutReady ? (
        <div className="payment-workspace" id="checkout-flow">
          <form className="customer-form" onSubmit={submitOrderRequest}>
            <label>
              {t.payment.name}
              <input name="customer_name" value={requestForm.customer_name} onChange={updatePaymentField} required />
            </label>
            <label>
              {t.payment.email}
              <input name="customer_email" type="email" value={requestForm.customer_email} onChange={updatePaymentField} required />
            </label>
            <label>
              {t.payment.phone}
              <input name="customer_phone" value={requestForm.customer_phone} onChange={updatePaymentField} />
            </label>
            <label>
              {t.payment.amount}
              <input name="amount" value={`${requestForm.currency.toUpperCase()} $${requestForm.amount}`} readOnly />
            </label>
            <label>
              {t.payment.currency}
              <input name="currency" value={requestForm.currency.toUpperCase()} readOnly />
            </label>
            <button className="primary-button">{t.payment.pay}</button>
          </form>
          <div className="empty-state payment-ready">
            <h3>{t.payment.secureTitle}</h3>
            <p>{t.payment.secureText}</p>
            <p>{t.payment.empty}</p>
          </div>
        </div>
        ) : null}
        </>
        ) : null}
        </section>

        <section className="section" id="galeria">
        <div className="section-heading">
          <p className="eyebrow">Portfolio</p>
          <h2>{t.galleryTitle}</h2>
          <p>{t.galleryText}</p>
        </div>
        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <article
              className="gallery-tile scroll-reveal scroll-parallax"
              key={item.id}
              style={{
                backgroundImage: `linear-gradient(rgba(9, 15, 14, 0.08), rgba(9, 15, 14, 0.72)), url("${item.image}")`,
              }}
            >
              <div className="gallery-copy">
                <h3>{language === "es" ? item.es : item.en}</h3>
                <p>{language === "es" ? item.detailEs : item.detailEn}</p>
              </div>
            </article>
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

      <footer>
        <p>{t.footer}</p>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
