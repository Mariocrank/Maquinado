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
    loading: "Cargando...",
    loadError: "No se pudo cargar la información. Intenta de nuevo más tarde.",
    quoteSuccessMsg: "¡Solicitud enviada! Nos pondremos en contacto pronto.",
    selectProduct: "Seleccionar producto (opcional)",
    selectService: "Seleccionar servicio (opcional)",
    form: {
      name: "Nombre",
      email: "Correo",
      phone: "Teléfono",
      company: "Empresa",
      service: "Servicio requerido",
      details: "Notas adicionales (medidas, material, cantidad, tolerancias...)",
      send: "Enviar solicitud",
      sending: "Enviando...",
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
    loading: "Loading...",
    loadError: "Could not load information. Please try again later.",
    quoteSuccessMsg: "Request sent! We will be in touch soon.",
    selectProduct: "Select a product (optional)",
    selectService: "Select a service (optional)",
    form: {
      name: "Name",
      email: "Email",
      phone: "Phone",
      company: "Company",
      service: "Requested service",
      details: "Additional notes (dimensions, material, quantity, tolerances...)",
      send: "Send request",
      sending: "Sending...",
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
      prepare: "Add to request",
      pay: "Send request",
      empty: "Select products and send the request to continue by WhatsApp or email.",
      error: "Check the request details.",
    },
    footer: "Bilingual site prepared for domain, SSL, hosting, and final client content.",
  },
};

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
  });

  // API data state
  const [apiProducts, setApiProducts] = useState([]);
  const [apiServices, setApiServices] = useState([]);
  const [catalogImages, setCatalogImages] = useState([]);
  const [productsLoading, setProductsLoading] = useState(true);
  const [servicesLoading, setServicesLoading] = useState(true);
  const [productsError, setProductsError] = useState(false);
  const [servicesError, setServicesError] = useState(false);

  // Quotation form state
  const [quoteForm, setQuoteForm] = useState({ email: "", phone: "", product: "", service: "", notes: "" });
  const [quoteSubmitting, setQuoteSubmitting] = useState(false);
  const [quoteSuccess, setQuoteSuccess] = useState(false);
  const [quoteErrors, setQuoteErrors] = useState({});

  const t = content[language];

  // Derived: merge API products with local images, filter active only
  const activeProducts = apiProducts
    .filter((p) => p.is_active)
    .map((p) => {
      const entry = catalogImages.find((c) => c.api_id === p.id);
      return { ...p, image: entry?.image ?? "/catalogo/buje-precision.jpeg" };
    });

  const activeServices = apiServices.filter((s) => s.is_active);

  const filteredProducts = activeProducts.filter((p) =>
    p.name.toLowerCase().includes(catalogSearch.trim().toLowerCase()),
  );

  const hasCatalogResults = filteredProducts.length > 0;
  const selectedProduct = activeProducts.find((p) => p.id === requestForm.product_id) ?? null;
  const summaryProduct = selectedProduct ?? cartItems[cartItems.length - 1] ?? null;

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

  const finalHeroTitleLines = language === "es"
    ? [
        { text: "Soluciones metalmecánicas", tone: "light" },
        { text: "de precisión", tone: "accent" },
        { text: "para producción,", tone: "light" },
        { text: "mantenimiento", tone: "light" },
        { text: "y proyectos", tone: "light" },
        { text: "especiales.", tone: "light" },
      ]
    : heroTitleLines;

  const finalHeroBodyText = language === "es"
    ? "Fabricamos piezas, fixturas, herramentales y componentes industriales de alta calidad. Brindamos atención local, tiempos de respuesta rápidos y cotizaciones oportunas para satisfacer las necesidades de su empresa."
    : t.heroText;

  const finalHeroEyebrow = language === "es" ? "MAQUINADO INDUSTRIAL" : t.brand;

  // Fetch products, services, and catalog image map on mount
  useEffect(() => {
    fetch("/catalogo/products_catalog.json")
      .then((r) => r.json())
      .then((data) => setCatalogImages(data))
      .catch(() => {});

    fetch(`${import.meta.env.VITE_API_URL}/maquinado/products/`)
      .then((r) => { if (!r.ok) throw new Error(); return r.json(); })
      .then((data) => { setApiProducts(data); setProductsLoading(false); })
      .catch(() => { setProductsError(true); setProductsLoading(false); });

    fetch(`${import.meta.env.VITE_API_URL}/maquinado/services/`)
      .then((r) => { if (!r.ok) throw new Error(); return r.json(); })
      .then((data) => { setApiServices(data); setServicesLoading(false); })
      .catch(() => { setServicesError(true); setServicesLoading(false); });
  }, []);

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
    }));

    window.setTimeout(() => {
      document.getElementById("cart-summary")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 20);
  }

  function submitOrderRequest(event) {
    event.preventDefault();
    const itemLines = cartItems.map((item) => `${item.name} x${item.quantity}`);
    const subject = encodeURIComponent(language === "es" ? "Solicitud de pedido R.A.M." : "R.A.M. order request");
    const body = encodeURIComponent(
      [
        `${t.payment.name}: ${requestForm.customer_name}`,
        `${t.payment.email}: ${requestForm.customer_email}`,
        `${t.payment.phone}: ${requestForm.customer_phone}`,
        `${t.payment.items}: ${cartItems.reduce((total, item) => total + item.quantity, 0)}`,
        "",
        language === "es" ? "Piezas seleccionadas:" : "Selected parts:",
        ...itemLines,
      ].join("\n"),
    );
    window.location.href = `mailto:ventas@cliente.com?subject=${subject}&body=${body}`;
  }

  async function submitQuoteAPI(event) {
    event.preventDefault();
    setQuoteErrors({});
    setQuoteSuccess(false);

    if (!quoteForm.product && !quoteForm.service) {
      setQuoteErrors({
        non_field_errors: [
          language === "es"
            ? "Selecciona al menos un producto o servicio."
            : "Please select at least one product or service.",
        ],
      });
      return;
    }

    setQuoteSubmitting(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/maquinado/quotations/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: quoteForm.email,
          phone: quoteForm.phone,
          product: quoteForm.product ? Number(quoteForm.product) : null,
          service: quoteForm.service ? Number(quoteForm.service) : null,
          notes: quoteForm.notes,
        }),
      });

      if (res.status === 201) {
        setQuoteSuccess(true);
        setQuoteForm({ email: "", phone: "", product: "", service: "", notes: "" });
      } else {
        const errors = await res.json();
        setQuoteErrors(errors);
      }
    } catch {
      setQuoteErrors({
        non_field_errors: [
          language === "es"
            ? "Error de conexión. Intenta de nuevo más tarde."
            : "Connection error. Please try again later.",
        ],
      });
    } finally {
      setQuoteSubmitting(false);
    }
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
      });
      return;
    }

    const nextSummaryProduct = nextItems[nextItems.length - 1];

    setRequestForm((currentForm) => ({
      ...currentForm,
      product_id: nextSummaryProduct.id,
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
        {servicesLoading ? (
          <p className="api-loading">{t.loading}</p>
        ) : servicesError ? (
          <p className="api-error">{t.loadError}</p>
        ) : (
          <div className="service-grid">
            {activeServices.map((service) => (
              <article className="service-card scroll-reveal" key={service.id}>
                <Wrench size={26} />
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        )}
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
        {productsLoading ? (
          <p className="api-loading">{t.loading}</p>
        ) : productsError ? (
          <p className="api-error">{t.loadError}</p>
        ) : hasCatalogResults ? (
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
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
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
        {!productsLoading && !productsError && catalogSearch.trim() && !hasCatalogResults && (
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
            <h3>{summaryProduct.name}</h3>
            <p>{summaryProduct.description}</p>
            <div className="cart-items-list">
              <p className="cart-items-title">{t.payment.selectedParts}</p>
              {cartItems.map((item) => (
                <div className="cart-item-row" key={item.id}>
                  <span>{item.name}</span>
                  <div className="cart-item-actions">
                    <strong>x{item.quantity}</strong>
                    <button
                      type="button"
                      className="icon-remove"
                      aria-label={`Eliminar ${item.name}`}
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
        <form className="quote-form" onSubmit={submitQuoteAPI}>
          {quoteSuccess && (
            <p className="quote-success-msg">{t.quoteSuccessMsg}</p>
          )}
          {quoteErrors.non_field_errors && quoteErrors.non_field_errors.map((msg, i) => (
            <p key={i} className="quote-field-error quote-error-banner">{msg}</p>
          ))}

          <input
            name="email"
            type="email"
            placeholder={t.form.email}
            value={quoteForm.email}
            onChange={(e) => setQuoteForm({ ...quoteForm, email: e.target.value })}
            required
          />
          {quoteErrors.email && (
            <p className="quote-field-error">{quoteErrors.email[0]}</p>
          )}

          <input
            name="phone"
            placeholder={t.form.phone}
            value={quoteForm.phone}
            onChange={(e) => setQuoteForm({ ...quoteForm, phone: e.target.value })}
            required
          />
          {quoteErrors.phone && (
            <p className="quote-field-error">{quoteErrors.phone[0]}</p>
          )}

          <select
            name="product"
            value={quoteForm.product}
            onChange={(e) => setQuoteForm({ ...quoteForm, product: e.target.value })}
          >
            <option value="">{t.selectProduct}</option>
            {activeProducts.map((p) => (
              <option key={p.id} value={p.id}>{p.name}</option>
            ))}
          </select>
          {quoteErrors.product && (
            <p className="quote-field-error">{quoteErrors.product[0]}</p>
          )}

          <select
            name="service"
            value={quoteForm.service}
            onChange={(e) => setQuoteForm({ ...quoteForm, service: e.target.value })}
          >
            <option value="">{t.selectService}</option>
            {activeServices.map((s) => (
              <option key={s.id} value={s.id}>{s.name}</option>
            ))}
          </select>
          {quoteErrors.service && (
            <p className="quote-field-error">{quoteErrors.service[0]}</p>
          )}

          <textarea
            name="notes"
            placeholder={t.form.details}
            value={quoteForm.notes}
            onChange={(e) => setQuoteForm({ ...quoteForm, notes: e.target.value })}
          />

          <button className="primary-button" disabled={quoteSubmitting}>
            <Send size={18} />
            {quoteSubmitting ? t.form.sending : t.form.send}
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
