const PRICING_CONFIG = {
  plans: [
    {
      id: "basico",
      name: "Básico",
      badge: null,
      price_monthly: "Consultar",
      price_note: "Desde $30.000 por mes",
      description: "Ideal para emprendedores y pequeños negocios que están comenzando.",
      cta_text: "Contactar",
      cta_link: "https://wa.me/56932514436",
      featured: false,
      features: [
        "Contabilidad mensual",
        "Declaración IVA (F29)",
        "Libros contables",
        "Soporte vía WhatsApp"
      ]
    },
    {
      id: "profesional",
      name: "Profesional",
      badge: "Más popular",
      price_monthly: "Consultar",
      price_note: "Desde $65.000 por mes",
      description: "Para empresas en crecimiento que necesitan asesoría integral con Recursos Humanos.",
      cta_text: "Contactar",
      cta_link: "https://wa.me/56932514436",
      featured: true,
      features: [
        "Todo lo del plan Básico",
        "2 Liquidaciones de sueldo (cobro adicional por trabajador)",
        "Gestión de RRHH",
        "Asesoría tributaria",
        "Planificación financiera",
        "Reunión mensual de revisión",
        "Soporte prioritario vía WhatsApp",
        "Conciliación bancaria (de 0 a 50 movimientos)"
      ]
    },
    {
      id: "premium",
      name: "Premium",
      badge: null,
      price_monthly: "A medida",
      price_note: "Cotización personalizada",
      description: "Solución completa para empresas con necesidades específicas.",
      cta_text: "Hablar con nosotras",
      cta_link: "https://wa.me/56932514436",
      featured: false,
      features: [
        "Todo lo del plan Profesional",
        "Constitución de empresa",
        "Asesoría financiera estratégica",
        "Gestión tributaria avanzada",
        "Contador dedicado",
        "Informes financieros personalizados",
        "Atención preferencial 24/7"
      ]
    }
  ]
};
