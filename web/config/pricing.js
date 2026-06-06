const PRICING_CONFIG = {
  toggle_label_monthly: "Mensual",
  toggle_label_annual: "Anual",
  annual_discount_text: "Ahorra 20%",

  plans: [
    {
      id: "basico",
      name: "Básico",
      badge: null,
      price_monthly: "Consultar",
      price_annual: "Consultar",
      price_note: "por mes + IVA",
      description: "Ideal para emprendedores y pequeños negocios que están comenzando.",
      cta_text: "Contactar",
      cta_link: SITE_CONFIG.WHATSAPP_LINK,
      featured: false,
      features: [
        "Contabilidad mensual",
        "Declaración IVA (F29)",
        "Declaración de renta anual",
        "Libros contables",
        "Soporte vía WhatsApp",
      ]
    },
    {
      id: "profesional",
      name: "Profesional",
      badge: "Más popular",
      price_monthly: "Consultar",
      price_annual: "Consultar",
      price_note: "por mes + IVA",
      description: "Para empresas en crecimiento que necesitan asesoría integral.",
      cta_text: "Agenda tu reunión",
      cta_link: SITE_CONFIG.PRIMARY_CTA_LINK,
      featured: true,
      features: [
        "Todo lo del plan Básico",
        "Liquidaciones de sueldo",
        "Gestión de RRHH",
        "Asesoría tributaria",
        "Planificación financiera",
        "Reunión mensual de revisión",
        "Soporte prioritario",
      ]
    },
    {
      id: "premium",
      name: "Premium",
      badge: null,
      price_monthly: "A medida",
      price_annual: "A medida",
      price_note: "cotización personalizada",
      description: "Solución completa para empresas con necesidades específicas.",
      cta_text: "Hablar con nosotras",
      cta_link: SITE_CONFIG.WHATSAPP_LINK,
      featured: false,
      features: [
        "Todo lo del plan Profesional",
        "Constitución de empresa",
        "Asesoría financiera estratégica",
        "Gestión tributaria avanzada",
        "Contador dedicado",
        "Informes financieros personalizados",
        "Atención preferencial 24/7",
      ]
    }
  ]
};
