const SERVICES_CONFIG = [
  {
    id: "contabilidad",
    name: "Contabilidad",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
    shortDesc: "Llevamos tus libros contables al día, con reportes mensuales claros y en tiempo real. Sin errores, sin retrasos.",
    intro: "Llevar un control financiero riguroso es el pilar fundamental para el crecimiento de cualquier negocio. Nuestro objetivo es encargarnos de toda la gestión contable de su empresa, procesando su información financiera de manera oportuna para que usted cuente con reportes mensuales claros y precisos, permitiéndole tomar decisiones estratégicas basadas en datos reales y sin retrasos.",
    steps: [
      { title: "Procesamiento y Registro de Documentación", desc: "Clasificaremos y registraremos mensualmente todas sus facturas de compra, venta, boletas de honorarios y rendiciones de gastos en softwares contables especializados, garantizando el orden y el cumplimiento normativo." },
      { title: "Análisis de Cuentas y Balances", desc: "Efectuaremos revisiones periódicas de sus cuentas de activo, pasivo, patrimonio, ingresos y gastos, asegurando que cada movimiento esté debidamente respaldado." },
      { title: "Emisión de Estados Financieros", desc: "Prepararemos y le entregaremos mensualmente su Balance General y Estado de Resultados, herramientas indispensables para evaluar la rentabilidad real de su negocio." },
      { title: "Reportes de Gestión para la Toma de Decisiones", desc: "Diseñamos informes mensuales resumidos y comprensibles que detallan el comportamiento del flujo de caja, márgenes de ganancia y puntos críticos que requieren su atención." }
    ],
    note: "La entrega oportuna de la información mensual por parte del cliente es indispensable para garantizar el cumplimiento de los cierres en las fechas estipuladas y evitar distorsiones en los reportes de gestión."
  },
  {
    id: "tributacion",
    name: "Tributación",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
    shortDesc: "Declaraciones de IVA, renta, PPM y todas las obligaciones tributarias con el SII. Sin multas, sin sorpresas.",
    intro: "El cumplimiento tributario ante el Servicio de Impuestos Internos (SII) exige precisión y constante actualización ante los cambios legales. Nos encargamos de gestionar de forma integral todas las obligaciones impositivas de su empresa, mitigando riesgos regulatorios y optimizando su carga fiscal para asegurar una operación transparente, sin multas y sin sorpresas.",
    steps: [
      { title: "Declaración Mensual de Impuestos (Formulario 29)", desc: "Calcularemos y presentaremos mes a mes su IVA, Retenciones de Honorarios, Impuesto Único de Segunda Categoría y los Pagos Provisionales Mensuales (PPM) optimizados." },
      { title: "Proceso de Operación Renta Anual (F22)", desc: "Prepararemos el Balance Tributario definitivo y realizaremos la declaración anual de impuesto a la renta de la empresa, maximizando los beneficios del régimen tributario seleccionado." },
      { title: "Declaraciones Juradas (DDJJ)", desc: "Confeccionaremos y enviaremos al SII todas las declaraciones juradas exigidas por ley (sueldos, honorarios, retiros, arriendos, entre otras) dentro de los plazos legales correspondientes." },
      { title: "Planificación y Optimización Fiscal", desc: "Analizaremos de forma continua su estructura financiera para proponer estrategias legales que permitan optimizar el pago de impuestos, aprovechando incentivos y créditos vigentes." }
    ],
    note: "Cualquier auditoría, citación, fiscalización profunda o defensa ante contingencias históricas previas a la contratación de nuestro servicio se evaluará y cotizará de manera independiente según la complejidad del caso."
  },
  {
    id: "rrhh",
    name: "Recursos Humanos",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    shortDesc: "Gestión integral de RRHH: contratos, finiquitos, AFP, isapres y toda la documentación laboral en regla.",
    intro: "La gestión del talento humano requiere un equilibrio perfecto entre la normativa laboral vigente y el bienestar de su equipo. Nos encargamos de la administración completa del ciclo laboral de sus colaboradores, resguardando la seguridad jurídica de su empresa ante la Dirección del Trabajo y asegurando que toda la documentación esté rigurosamente en regla.",
    steps: [
      { title: "Confección de Contratos y Anexos de Trabajo", desc: "Redactaremos los contratos de trabajo iniciales, anexos por actualizaciones de sueldo o cargo, y pactos de horas extraordinarias de acuerdo a la legislación laboral chilena." },
      { title: "Tramitación y Carga en la Dirección del Trabajo (DT)", desc: "Realizaremos el registro obligatorio de todos los contratos, modificaciones y términos de relación laboral en el portal Mi DT, evitando multas administrativas." },
      { title: "Gestión de Licencias Médicas y Ausencias", desc: "Tramitaremos las licencias electrónicas de su personal ante las distintas entidades (Compín, Isapres, CCAF), gestionando los subsidios correspondientes." },
      { title: "Procesamiento de Finiquitos y Término de Relación Laboral", desc: "Calcularemos las indemnizaciones por años de servicio, vacaciones proporcionales y redactaremos las cartas de aviso de despido y los finiquitos legales para su ratificación." }
    ],
    note: "La representación patronal presencial ante comparendos en la Dirección del Trabajo o demandas en Tribunales Laborales no forma parte del servicio administrativo recurrente y se cotiza de forma independiente con nuestro equipo legal especializado."
  },
  {
    id: "remuneraciones",
    name: "Remuneraciones",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
    shortDesc: "Liquidaciones de sueldo, cálculo de imposiciones y pagos previsionales. Paga a tu equipo correcto y a tiempo.",
    intro: "Garantizar que su equipo reciba sus remuneraciones de forma correcta y a tiempo es clave para mantener un clima laboral óptimo y productivo. Nuestro servicio se enfoca en el cálculo preciso de las liquidaciones de sueldo y el procesamiento de todas las cotizaciones previsionales, asegurando transparencia absoluta para sus trabajadores y cumplimiento total ante las entidades fiscalizadoras.",
    steps: [
      { title: "Cálculo de Liquidaciones de Sueldo", desc: "Procesaremos mensualmente los sueldos base, gratificaciones legales, horas extras, bonos, asignaciones no imponibles (colación, movilización) y los descuentos legales correspondientes." },
      { title: "Emisión de Planillas Previsionales (Previred)", desc: "Generaremos el archivo centralizado para el pago de cotizaciones en Previred, abarcando AFP, Isapres, Fonasa, IPS, Seguro de Cesantía (AFC) y Mutual de Seguridad." },
      { title: "Centralización Contable de Remuneraciones", desc: "Entregaremos el libro de remuneraciones mensual estructurado y el asiento contable listo para ser incorporado en la contabilidad general de la empresa." },
      { title: "Certificados de Remuneraciones y Declaraciones Anuales", desc: "Emitiremos de manera oportuna los certificados de sueldos requeridos por los trabajadores para fines personales y procesaremos la Declaración Jurada 1887 ante el SII." }
    ],
    note: "El pago oportuno de las cotizaciones previsionales a través de Previred debe realizarse estrictamente antes del día 13 de cada mes (o fecha legal vigente) por parte del cliente para evitar severas multas e intereses legales."
  },
  {
    id: "constitucion",
    name: "Constitución de Empresas",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    shortDesc: "Te acompañamos en todo el proceso de crear tu empresa: tipo societario, estatutos, RUT, inicio de actividades.",
    intro: "Sabemos que iniciar un nuevo proyecto requiere tiempo y energía. Por ello, nuestro objetivo es acompañarle en cada etapa de la formalización de su negocio, encargándonos de la gestión legal y tributaria para que su empresa comience a operar en regla y sin contratiempos.",
    steps: [
      { title: "Asesoría y Redacción de Estatutos", desc: "Definiremos juntos el tipo de sociedad que más le conviene (SpA, EIRL, etc.) y redactaremos el documento legal en el portal oficial, especificando el capital, los giros y las reglas de administración de su negocio." },
      { title: "Constitución y Obtención de RUT", desc: "Le guiaremos en el proceso de firma electrónica. Una vez que los socios firmen, la empresa quedará legalmente constituida y se le asignará su RUT corporativo de forma inmediata." },
      { title: "Inicio de Actividades (SII)", desc: "Inscribiremos a la empresa en el Servicio de Impuestos Internos, seleccionando los códigos de actividad económica y el régimen tributario más beneficioso para su estructura." },
      { title: "Verificación de Actividades", desc: "Presentaremos ante el SII los antecedentes necesarios (como el contrato de arriendo o de oficina virtual) para demostrar la capacidad operativa de la empresa y habilitar su funcionamiento." },
      { title: "Habilitación de Facturación", desc: "Inscribiremos a la sociedad en los sistemas electrónicos para que quede habilitada al 100% para emitir facturas y boletas a sus clientes." },
      { title: "Libros Legales", desc: "Nos encargaremos de la apertura y actualización del Registro de Accionistas electrónico, un paso obligatorio para mantener el orden societario." }
    ],
    note: "Toda empresa recién creada tiene la obligación legal de tramitar y pagar una Patente Comercial en la municipalidad correspondiente a su domicilio tributario para poder operar. Debido a que los requisitos y tiempos de este trámite varían considerablemente según cada municipio, la gestión municipal no está incluida en este paquete de creación de empresa y se cotiza como un servicio por separado."
  },
  {
    id: "modificaciones",
    name: "Modificaciones Societarias",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
    shortDesc: "Realizamos cambios societarios como ingreso o salida de socios, compra de acciones, aumentos de capital y modificaciones legales.",
    intro: "A medida que los negocios escalan, sus estructuras legales deben adaptarse. Ya sea por el ingreso de nuevos inversionistas, la salida de socios, o un aumento de capital para financiar la expansión, le acompañamos en la reestructuración formal de su sociedad. Gestionamos todas las modificaciones legales para que sus acuerdos corporativos queden firmes, vigentes y registrados adecuadamente.",
    steps: [
      { title: "Asesoría Estratégica y Redacción de Modificaciones", desc: "Evaluaremos el impacto legal y tributario del cambio solicitado, redactando el borrador del acta de junta extraordinaria o la modificación de estatutos en el sistema correspondiente." },
      { title: "Gestión de Firmas y Saneamiento", desc: "Coordinaremos la firma electrónica o el proceso de protocolización notarial necesario para dar validez jurídica al acto modificatorio." },
      { title: "Inscripción y Publicación Legal", desc: "Efectuaremos las inscripciones requeridas en el Registro de Comercio (si aplica) y la publicación del extracto en el Diario Oficial para cumplir con la publicidad legal." },
      { title: "Actualización ante el SII", desc: "Presentaremos las modificaciones ante el Servicio de Impuestos Internos mediante los formularios correspondientes, actualizando el capital, los representantes legales o la participación de los socios." }
    ],
    note: "Los costos asociados a notarías, firmas electrónicas avanzadas ajenas a nuestro proveedor estándar, o derechos de inscripción en el Conservador de Bienes Raíces (si aplican) son de cargo exclusivo del cliente."
  },
  {
    id: "asesoria-financiera",
    name: "Asesoría Financiera",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
    shortDesc: "Planificación, proyecciones y estrategia financiera para que tomes decisiones de negocio basadas en datos reales.",
    intro: "Tomar decisiones basándose únicamente en el saldo de la cuenta bancaria puede poner en riesgo el futuro de su empresa. Nuestro servicio de asesoría financiera le proporciona una visión profunda y proyectada de su negocio. A través de un análisis técnico de sus estados financieros y flujos de caja, diseñamos estrategias para maximizar la rentabilidad, controlar los costos y planificar el crecimiento de forma sostenible.",
    steps: [
      { title: "Diagnóstico Financiero Integral", desc: "Analizaremos en profundidad la estructura de costos, márgenes de ganancia, ratios de liquidez y endeudamiento actual de su empresa para identificar ineficiencias." },
      { title: "Planificación y Proyección de Flujo de Caja (Cashflow)", desc: "Construiremos herramientas de proyección financiera que le permitan anticipar las necesidades de capital de trabajo, optimizar los ciclos de cobro a clientes y gestionar los pagos a proveedores." },
      { title: "Evaluación de Proyectos de Inversión y Financiamiento", desc: "Le asesoramos en la evaluación de la viabilidad económica de nuevos proyectos, compra de activos o en la preparación de carpetas financieras para la postulación a créditos bancarios u fondos públicos." },
      { title: "Reuniones Estratégicas de Control", desc: "Mantendremos sesiones periódicas de revisión de resultados financieros para comparar el desempeño real frente al presupuesto planificado, ajustando las desviaciones detectadas." }
    ],
    note: "La Asesoría Financiera se basa en la veracidad y exactitud de la información contable previa provista por la empresa; no contempla la auditoría forense de fraudes internos a menos que se contrate dicho alcance específico."
  },
  {
    id: "termino-giro",
    name: "Término de Giro",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><path d="M9 14l2 2 4-4"/></svg>`,
    shortDesc: "Cerramos formalmente tu empresa ante el SII, revisando obligaciones pendientes y realizando todo el proceso tributario.",
    intro: "El cierre formal de una etapa empresarial debe ejecutarse con la misma rigurosidad que su inicio. El proceso de Término de Giro ante el Servicio de Impuestos Internos consiste en dar aviso oficial del cese de actividades comerciales de la empresa. Nos encargamos de auditar sus obligaciones pendientes, confeccionar los balances de cierre y realizar toda la tramitación fiscal para asegurar la extinción legal de la sociedad de forma limpia y definitiva.",
    steps: [
      { title: "Auditoría Previa y Diagnóstico de Cumplimiento", desc: "Revisaremos el historial de la empresa en el SII para detectar declaraciones pendientes, giros no declarados, deudas tributarias o contingencias que puedan frenar el cierre." },
      { title: "Confección del Balance de Término de Giro", desc: "Prepararemos los estados financieros finales al día del cese de operaciones, determinando el capital propio tributario, las utilidades acumuladas y el impuesto al término de giro aplicable (si existiese)." },
      { title: "Presentación Formal del Aviso de Término de Giro", desc: "Ingresaremos el trámite ante el SII dentro del plazo legal de dos meses contados desde el cese de actividades, adjuntando toda la documentación contable y legal de respaldo." },
      { title: "Seguimiento hasta la Obtención del Certificado de Cierre", desc: "Gestionaremos las iteraciones y revisiones que realice el fiscalizador del SII asignado al caso hasta obtener la resolución oficial que certifica que la empresa se encuentra formalmente cerrada." }
    ],
    note: "Si durante la fiscalización del Término de Giro el SII determina la existencia de impuestos adeudados, diferencias de timbraje pendientes o multas por períodos antiguos no gestionados por Contabless, dichos montos deberán ser pagados por los socios para concluir con éxito el cierre."
  },
  {
    id: "conciliacion",
    name: "Conciliación Bancaria",
    icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>`,
    shortDesc: "Revisamos y conciliamos tus movimientos bancarios para mantener tu contabilidad correcta, ordenada y sin diferencias.",
    intro: "La contabilidad de una empresa debe reflejar con total exactitud la realidad de sus cuentas corrientes. Nuestro servicio de Conciliación Bancaria consiste en el cruce minucioso y sistemático entre los registros de sus libros contables y las cartolas reales de sus bancos. De esta forma, identificamos de inmediato depósitos no identificados, cheques por cobrar, duplicidades o comisiones bancarias omitidas, manteniendo un control financiero impecable y transparente.",
    steps: [
      { title: "Descarga y Centralización de Cartolas Bancarias", desc: "Recopilaremos mensualmente los movimientos de todas las cuentas corrientes, tarjetas de crédito empresariales y cuentas de ahorro de la sociedad." },
      { title: "Cruce Automatizado y Manual de Movimientos", desc: "Emparejaremos cada cargo y abono bancario con su respectiva factura de venta, factura de compra, liquidación de sueldo o pago provisional registrado." },
      { title: "Detección y Regularización de Partidas Pendientes", desc: "Identificaremos movimientos bancarios que carecen de respaldo documental (como transferencias desconocidas), informándole oportunamente para su correcta regularización." },
      { title: "Emisión del Informe de Conciliación", desc: "Entregaremos un reporte mensual que demuestra el calce perfecto entre el saldo contable y el saldo bancario real, insumo clave para auditorías y resguardo de caja." }
    ],
    note: "Para la ejecución eficiente de este servicio, el cliente se compromete a otorgar acceso con perfil de 'solo lectura' o 'auditor' en las plataformas bancarias correspondientes, salvaguardando la total seguridad de los fondos."
  }
];
