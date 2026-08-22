export const projects = [
  {
    slug: "brain-tumour-mri-classification",
    shortLabel: "MRI Tumour Classification",
    title: "Brain Tumour Classification from MRI",
    location: "Master's Research · Spain",
    summary: "A research prototype combining convolutional neural networks, transfer learning and a web interface to classify brain MRI images across four clinical categories.",
    contribution: "Designed the research workflow end to end: dataset preparation, CNN experimentation, transfer learning with VGG16, model evaluation and deployment through a Flask web service.",
    technicalScope: ["Python", "TensorFlow", "Keras", "VGG16", "Flask", "D3.js", "Google Colab"],
    outcome: "Produced a four-class experimental model and a functional web prototype that exposed class probabilities while preserving the role of clinical specialists in diagnosis.",
  },
  {
    slug: "dynamic-security-assessment",
    shortLabel: "Grid Resilience",
    title: "Dynamic Security Assessment for Power Networks",
    location: "The Netherlands",
    summary: "Designing systems that identify grid risk before instability escalates.",
    contribution: "Designed, developed and validated local applications, then integrated them with specialist third party tools used in power system security workflows.",
    technicalScope: ["Python", "Docker", "Kafka", "RabbitMQ", "Windows", "RHEL", "Azure"],
    outcome: "Delivered interoperable applications and integrations that support dynamic security assessment workflows across multiple software environments.",
  },
  {
    slug: "secure-offshore-data-integration",
    shortLabel: "Offshore Integration",
    title: "Secure Offshore Operations Data Integration",
    location: "Spain, Dutch North Sea",
    summary: "Consolidating offshore operational data without compromising industrial security.",
    contribution: "Led server and workstation deployment, then integrated the data acquisition layer across segregated operational domains while supporting planning, commissioning and technical coordination.",
    technicalScope: ["SCADA", "Linux", "Windows", "FEP", "ICCP", "OPC UA", "Cybersecurity"],
    outcome: "Delivered a secure data acquisition integration that connected operational environments while protecting critical control network interfaces.",
  },
  {
    slug: "renewable-plant-control",
    shortLabel: "Renewable Control",
    title: "Grid Code Control for Renewable Plants",
    location: "Spain",
    summary: "Turning renewable generation into predictable, grid ready power.",
    contribution: "Participated in the deployment and end to end integration testing of a modular, PLC based power plant controller, covering HMI, PLC and SCADA integration.",
    technicalScope: ["PLC", "HMI", "SCADA", "Modbus TCP", "IEC 61850", "VPN", "Redundancy"],
    outcome: "Validated controller integration and grid code compliance for commercial scale photovoltaic plants, including installations up to 380 MW.",
  },
] as const;

export type Project = (typeof projects)[number];
