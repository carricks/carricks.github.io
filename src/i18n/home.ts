export type Locale = "en" | "nl" | "de";

const en = {
  meta: {
    title: "Diego Carrillo | Systems Engineer",
    description: "Portfolio of Diego Carrillo: Multidisciplinary Systems Engineer specialized in Industrial Automation, SCADA, Renewable Energy and Resilient Power Systems.",
  },
  about: {
    eyebrow: "ABOUT",
    title: "Who I am.",
    paragraphs: [
      "I am Diego Carrillo, a multidisciplinary systems engineer with an academic background in Electronic Engineering and an MSc in Robotics and Automation. My career has developed at the intersection of industrial automation, energy systems, software and connected infrastructure, combining hands-on experience in PLC and SCADA environments with systems integration and technical application development.",
      "Across Spain, the Netherlands, Portugal and Latin America, I have contributed to regulated manufacturing, telecommunications, utility-scale renewable plants, offshore energy operations and the Dutch transmission grid. These experiences have strengthened my ability to connect operational requirements with data, control and software, collaborate across multidisciplinary teams and deliver reliable, traceable solutions for complex infrastructure.",
    ],
    destinationsLabel: "About sections",
    destinations: { experience: "Experience", academic: "Academic" },
  },
  projects: {
    eyebrow: "PROJECTS",
    title: "Systems designed for operational confidence.",
    description: "Selected work across power systems, industrial integration and resilient control environments.",
    openLabel: "Open project",
    labels: {
      "brain-tumour-mri-classification": "MRI Tumour Classification",
      "grid-contingency-analysis": "Grid Stability",
      "renewable-plant-control": "Photovoltaic Control",
      "telecommunications-coverage-deployment": "Telecommunications Deployment",
    },
  },
  milestones: {
    eyebrow: "MILESTONES",
    title: "Technical milestones and recognition.",
    description: "Selected academic work, international technology competitions and personal milestones that complement my professional engineering practice.",
    entriesLabel: "Milestone entries",
    openHardwarethon: "Explore Hardwarethon Costa Rica 2019",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Questions about my work.",
    items: [
      {
        question: "What is my academic background?",
        answer: [
          { text: "I am an Electronic Engineer with an MSc in Robotics and Automation. This foundation combines electronics, control, programming and systems thinking, providing the technical basis for the work presented throughout my " },
          { text: "academic background", href: "/about/academic/" },
          { text: "." },
        ],
      },
      {
        question: "How does robotics relate to my current engineering work?",
        answer: [
          { text: "Robotics brought together control, automation, perception, software and physical systems. I apply those same principles to industrial infrastructure, renewable-energy control and technical software, extending the discipline well beyond conventional robotic platforms. My " },
          { text: "MSc work", href: "/about/academic/" },
          { text: " shows that connection in more detail." },
        ],
      },
      {
        question: "How do I combine software and engineering?",
        answer: [
          { text: "I use software to model, automate, analyse and validate physical systems. That can involve processing operational data, building engineering applications, integrating industrial communications or translating field requirements into traceable technical workflows. The " },
          { text: "project case studies", href: "/#projects" },
          { text: " show how that combination changes with each domain." },
        ],
      },
      {
        question: "What kinds of engineering environments have I worked in?",
        answer: [
          { text: "My experience spans industrial control, renewable power, transmission-grid analysis, SCADA, telecommunications and applied software across Spain, the Netherlands, Portugal and Latin America. The " },
          { text: "professional experience section", href: "/about/experience/" },
          { text: " provides the broader context behind these environments." },
        ],
      },
      {
        question: "What is my role within multidisciplinary projects?",
        answer: [
          { text: "I work at the interfaces between operational requirements, control architecture, software, data, testing and delivery. My contribution is often to connect specialist disciplines, make dependencies explicit and help move a system from technical definition to reliable implementation. See the examples in my " },
          { text: "professional background", href: "/about/experience/" },
          { text: "." },
        ],
      },
      {
        question: "Do I work primarily with hardware or software?",
        answer: [
          { text: "My profile sits between both. I understand the physical equipment and electrical or industrial context, while working with the control, communications, data and software layers that make those systems observable and dependable. This intersection is visible across the " },
          { text: "engineering portfolio", href: "/#projects" },
          { text: "." },
        ],
      },
      {
        question: "Are my portfolio projects academic or professional?",
        answer: [
          { text: "Both. The " },
          { text: "MRI tumour classification project", href: "/projects/brain-tumour-mri-classification/" },
          { text: " is my academic research. My grid-stability, photovoltaic-control and telecommunications case studies describe professional engineering work within carefully defined publication boundaries." },
        ],
      },
      {
        question: "How do I validate that an engineering solution is reliable?",
        answer: [
          { text: "I rely on explicit requirements, traceable data, structured testing, comparison against expected behaviour and close collaboration with domain specialists. The validation method depends on the system, from model evaluation in the " },
          { text: "MRI research", href: "/projects/brain-tumour-mri-classification/" },
          { text: " to operational testing in the " },
          { text: "photovoltaic-control project", href: "/projects/renewable-plant-control/" },
          { text: "." },
        ],
      },
    ],
  },
  contact: {
    eyebrow: "CONTACT",
    title: "Let's build resilient systems.",
    description: "For technical conversations, collaborations and engineering opportunities.",
    name: "Name",
    email: "Email",
    message: "Message",
    submit: "Submit",
    invalid: "Please complete the highlighted fields before submitting.",
    opening: "Your email client is opening with your message prepared.",
    subject: "Portfolio enquiry from",
    bodyName: "Name",
    bodyEmail: "Email",
    bodyMessage: "Message",
    footerLabel: "Portfolio credits and professional profiles",
    profilesLabel: "Professional profiles",
    githubLabel: "Open GitHub in a new tab",
    linkedinLabel: "Open LinkedIn in a new tab",
    copyrightLabel: "Open official Dutch government copyright information in a new tab",
    copyright: "2026 DCS, all rights reserved",
    codexLabel: "Open Codex information in a new tab",
  },
} as const;

const de = {
  meta: {
    title: "Diego Carrillo | Systems Engineer",
    description: "Portfolio von Diego Carrillo: multidisziplinärer Systems Engineer mit Schwerpunkt auf industrieller Automatisierung, SCADA, erneuerbaren Energien und resilienten Energiesystemen.",
  },
  about: {
    eyebrow: "ÜBER MICH",
    title: "Wer ich bin.",
    paragraphs: [
      "Ich bin Diego Carrillo, ein multidisziplinärer Systems Engineer mit einem akademischen Hintergrund in Electronic Engineering und einem MSc in Robotics and Automation. Meine berufliche Laufbahn liegt an der Schnittstelle von industrieller Automatisierung, Energiesystemen, Software und vernetzter Infrastruktur. Dabei verbinde ich praktische Erfahrung in PLC- und SCADA-Umgebungen mit Systemintegration und der Entwicklung technischer Anwendungen.",
      "In Spanien, den Niederlanden, Portugal und Lateinamerika habe ich zu regulierter Fertigung, Telekommunikation, großen Photovoltaikanlagen, Offshore-Energieprojekten und dem niederländischen Übertragungsnetz beigetragen. Diese Erfahrungen haben meine Fähigkeit gestärkt, betriebliche Anforderungen mit Daten, Regelungstechnik und Software zu verbinden, in multidisziplinären Teams zusammenzuarbeiten und zuverlässige, nachvollziehbare Lösungen für komplexe Infrastrukturen zu liefern.",
    ],
    destinationsLabel: "Bereiche unter Über mich",
    destinations: { experience: "Berufserfahrung", academic: "Ausbildung" },
  },
  projects: {
    eyebrow: "PROJEKTE",
    title: "Systeme für einen zuverlässigen Betrieb.",
    description: "Ausgewählte Arbeiten aus Energiesystemen, industrieller Integration und resilienten Regelungsumgebungen.",
    openLabel: "Projekt öffnen",
    labels: {
      "brain-tumour-mri-classification": "MRT-Klassifikation von Hirntumoren",
      "grid-contingency-analysis": "Netzstabilität",
      "renewable-plant-control": "Regelung von Photovoltaikanlagen",
      "telecommunications-coverage-deployment": "Ausbau von Telekommunikationsinfrastruktur",
    },
  },
  milestones: {
    eyebrow: "MEILENSTEINE",
    title: "Technische Meilensteine und Auszeichnungen.",
    description: "Ausgewählte akademische Arbeiten, internationale Technologiewettbewerbe und persönliche Meilensteine, die meine berufliche Entwicklung als Ingenieur ergänzen.",
    entriesLabel: "Meilensteine",
    openHardwarethon: "Hardwarethon Costa Rica 2019 ansehen",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Fragen zu meiner Arbeit.",
    items: [
      { question: "Welchen akademischen Hintergrund habe ich?", answer: [
        { text: "Ich bin Electronic Engineer und habe einen MSc in Robotics and Automation. Dieser Hintergrund verbindet Elektronik, Regelungstechnik, Programmierung und Systemdenken und bildet die technische Grundlage meiner " },
        { text: "Arbeit", href: "/de/about/academic/" }, { text: "." },
      ]},
      { question: "Wie hängt Robotik mit meiner heutigen Ingenieurarbeit zusammen?", answer: [
        { text: "Robotik verbindet Regelungstechnik, Automatisierung, Wahrnehmung, Software und physische Systeme. Dieselben Prinzipien wende ich auf industrielle Infrastruktur, die Regelung erneuerbarer Energien und technische Software an – auch außerhalb klassischer Robotikplattformen. Meine " },
        { text: "MSc-Forschung", href: "/de/about/academic/" }, { text: " zeigt diesen Zusammenhang ausführlicher." },
      ]},
      { question: "Wie verbinde ich Software und Engineering?", answer: [
        { text: "Ich nutze Software, um physische Systeme zu modellieren, zu automatisieren, zu analysieren und zu validieren. Dazu gehören die Verarbeitung betrieblicher Daten, die Entwicklung technischer Anwendungen, die Integration industrieller Kommunikation und die Überführung betrieblicher Anforderungen in nachvollziehbare technische Workflows. Die " },
        { text: "Projektstudien", href: "/de/#projects" }, { text: " zeigen, wie sich diese Verbindung je nach Fachgebiet unterscheidet." },
      ]},
      { question: "In welchen technischen Umgebungen habe ich gearbeitet?", answer: [
        { text: "Meine Erfahrung umfasst industrielle Steuerung, erneuerbare Energien, Netzstabilitätsanalyse, SCADA, Telekommunikation und angewandte Software in Spanien, den Niederlanden, Portugal und Lateinamerika. Der Bereich " },
        { text: "Berufserfahrung", href: "/de/about/experience/" }, { text: " bietet weiteren Kontext zu diesen Umgebungen." },
      ]},
      { question: "Welche Rolle übernehme ich in multidisziplinären Projekten?", answer: [
        { text: "Ich arbeite an den Schnittstellen zwischen betrieblichen Anforderungen, Steuerungsarchitektur, Software, Daten, Tests und Auslieferung. Mein Beitrag besteht häufig darin, Fachdisziplinen zu verbinden, Abhängigkeiten transparent zu machen und ein System von der technischen Definition bis zur zuverlässigen Umsetzung zu begleiten. Beispiele finden sich in meiner " },
        { text: "beruflichen Laufbahn", href: "/de/about/experience/" }, { text: "." },
      ]},
      { question: "Arbeite ich hauptsächlich mit Hardware oder Software?", answer: [
        { text: "Mein Profil liegt an der Schnittstelle beider Bereiche. Ich verstehe die physische Ausrüstung und den elektrischen oder industriellen Kontext und arbeite zugleich mit den Steuerungs-, Kommunikations-, Daten- und Softwareschichten, die diese Systeme transparent und zuverlässig machen. Diese Verbindung zeigt sich in meinem gesamten " },
        { text: "Engineering-Portfolio", href: "/de/#projects" }, { text: "." },
      ]},
      { question: "Sind meine Portfolioprojekte akademisch oder beruflich?", answer: [
        { text: "Beides. Das " }, { text: "MRT-Projekt zur Hirntumorklassifikation", href: "/de/projects/brain-tumour-mri-classification/" },
        { text: " ist meine akademische Forschung. Meine Fallstudien zu Netzstabilität, Photovoltaikregelung und Telekommunikation beschreiben berufliche Ingenieurarbeit innerhalb klar definierter Veröffentlichungsgrenzen." },
      ]},
      { question: "Wie validiere ich die Zuverlässigkeit einer technischen Lösung?", answer: [
        { text: "Ich arbeite mit eindeutigen Anforderungen, nachvollziehbaren Daten, strukturierten Tests, dem Vergleich mit erwartetem Verhalten und enger Zusammenarbeit mit Fachspezialisten. Die Validierungsmethode hängt vom System ab – von der Modellevaluierung in der " },
        { text: "MRT-Forschung", href: "/de/projects/brain-tumour-mri-classification/" }, { text: " bis zu betrieblichen Tests im " },
        { text: "Projekt zur Photovoltaikregelung", href: "/de/projects/renewable-plant-control/" }, { text: "." },
      ]},
    ],
  },
  contact: {
    eyebrow: "KONTAKT", title: "Gemeinsam resiliente Systeme entwickeln.",
    description: "Für technische Gespräche, Zusammenarbeit und berufliche Möglichkeiten im Engineering.",
    name: "Name", email: "E-Mail-Adresse", message: "Nachricht", submit: "Senden",
    invalid: "Bitte füllen Sie die markierten Felder aus, bevor Sie das Formular absenden.",
    opening: "Ihr E-Mail-Programm wird mit der vorbereiteten Nachricht geöffnet.",
    subject: "Nachricht über das Portfolio von", bodyName: "Name", bodyEmail: "E-Mail-Adresse", bodyMessage: "Nachricht",
    footerLabel: "Portfolioangaben und berufliche Profile", profilesLabel: "Berufliche Profile",
    githubLabel: "GitHub in einem neuen Tab öffnen", linkedinLabel: "LinkedIn in einem neuen Tab öffnen",
    copyrightLabel: "Offizielle niederländische Regierungsinformationen zum Urheberrecht in einem neuen Tab öffnen",
    copyright: "2026 DCS, alle Rechte vorbehalten", codexLabel: "Informationen zu Codex in einem neuen Tab öffnen",
  },
} as const;

const nl = {
  meta: {
    title: "Diego Carrillo | Systems Engineer",
    description: "Portfolio van Diego Carrillo: multidisciplinair systems engineer gespecialiseerd in industriële automatisering, SCADA, hernieuwbare energie en robuuste energiesystemen.",
  },
  about: {
    eyebrow: "OVER MIJ",
    title: "Wie ik ben.",
    paragraphs: [
      "Ik ben Diego Carrillo, een multidisciplinair systems engineer met een academische achtergrond in Electronic Engineering en een MSc in Robotics and Automation. Mijn loopbaan bevindt zich op het snijvlak van industriële automatisering, energiesystemen, software en verbonden infrastructuur. Daarbij combineer ik praktijkervaring met PLC- en SCADA-omgevingen met systeemintegratie en de ontwikkeling van technische applicaties.",
      "In Spanje, Nederland, Portugal en Latijns-Amerika heb ik bijgedragen aan gereguleerde productie, telecommunicatie, grootschalige zonne-energiecentrales, offshore-energieactiviteiten en het Nederlandse transmissienet. Deze ervaring heeft mijn vermogen versterkt om operationele eisen te verbinden met data, besturing en software, multidisciplinair samen te werken en betrouwbare, traceerbare oplossingen voor complexe infrastructuur te leveren.",
    ],
    destinationsLabel: "Onderdelen van Over mij",
    destinations: { experience: "Ervaring", academic: "Opleiding" },
  },
  projects: {
    eyebrow: "PROJECTEN",
    title: "Systemen ontworpen voor betrouwbare bedrijfsvoering.",
    description: "Een selectie van projecten op het gebied van energiesystemen, industriële integratie en robuuste besturingsomgevingen.",
    openLabel: "Project openen",
    labels: {
      "brain-tumour-mri-classification": "Classificatie van hersentumoren op MRI-beelden",
      "grid-contingency-analysis": "Netstabiliteit",
      "renewable-plant-control": "Besturing van fotovoltaïsche installaties",
      "telecommunications-coverage-deployment": "Implementatie van telecommunicatie-infrastructuur",
    },
  },
  milestones: {
    eyebrow: "MIJLPALEN",
    title: "Technische mijlpalen en erkenning.",
    description: "Een selectie van academisch werk, internationale technologiewedstrijden en persoonlijke mijlpalen die mijn professionele ontwikkeling als engineer aanvullen.",
    entriesLabel: "Mijlpalen",
    openHardwarethon: "Bekijk Hardwarethon Costa Rica 2019",
  },
  faq: {
    eyebrow: "VEELGESTELDE VRAGEN",
    title: "Vragen over mijn werk.",
    items: [
      {
        question: "Wat is mijn academische achtergrond?",
        answer: [
          { text: "Ik ben opgeleid als Electronic Engineer en heb een MSc in Robotics and Automation. Deze achtergrond verenigt elektronica, besturing, programmeren en systeemdenken en vormt de technische basis van mijn " },
          { text: "werk", href: "/nl/about/academic/" },
          { text: "." },
        ],
      },
      {
        question: "Hoe sluit robotica aan op mijn huidige werk als engineer?",
        answer: [
          { text: "Robotica brengt besturing, automatisering, perceptie, software en fysieke systemen samen. Ik pas dezelfde principes toe op industriële infrastructuur, de besturing van hernieuwbare energie en technische software, ook buiten conventionele robotplatforms. Mijn " },
          { text: "MSc-onderzoek", href: "/nl/about/academic/" },
          { text: " laat deze samenhang uitgebreider zien." },
        ],
      },
      {
        question: "Hoe combineer ik software en engineering?",
        answer: [
          { text: "Ik gebruik software om fysieke systemen te modelleren, automatiseren, analyseren en valideren. Dit omvat onder meer het verwerken van operationele data, het ontwikkelen van engineeringapplicaties, het integreren van industriële communicatie en het vertalen van operationele eisen naar traceerbare technische workflows. De " },
          { text: "projectcases", href: "/nl/#projects" },
          { text: " laten zien hoe deze combinatie per domein verschilt." },
        ],
      },
      {
        question: "In welke technische omgevingen heb ik gewerkt?",
        answer: [
          { text: "Mijn ervaring omvat industriële besturing, hernieuwbare energie, netstabiliteitsanalyse, SCADA, telecommunicatie en toegepaste software in Spanje, Nederland, Portugal en Latijns-Amerika. De sectie over mijn " },
          { text: "professionele ervaring", href: "/nl/about/experience/" },
          { text: " biedt meer context over deze omgevingen." },
        ],
      },
      {
        question: "Welke rol vervul ik binnen multidisciplinaire projecten?",
        answer: [
          { text: "Ik werk op het snijvlak van operationele eisen, besturingsarchitectuur, software, data, testen en oplevering. Mijn bijdrage bestaat vaak uit het verbinden van specialistische disciplines, het inzichtelijk maken van afhankelijkheden en het begeleiden van een systeem van technische definitie tot betrouwbare implementatie. Voorbeelden hiervan staan in mijn " },
          { text: "professionele achtergrond", href: "/nl/about/experience/" },
          { text: "." },
        ],
      },
      {
        question: "Werk ik voornamelijk met hardware of met software?",
        answer: [
          { text: "Mijn profiel bevindt zich op het raakvlak van beide. Ik begrijp de fysieke apparatuur en de elektrische of industriële context en werk tegelijkertijd met de besturings-, communicatie-, data- en softwarelagen die deze systemen inzichtelijk en betrouwbaar maken. Dit raakvlak komt terug in het volledige " },
          { text: "engineeringportfolio", href: "/nl/#projects" },
          { text: "." },
        ],
      },
      {
        question: "Zijn mijn portfolioprojecten academisch of professioneel?",
        answer: [
          { text: "Beide. Het " },
          { text: "MRI-project voor hersentumorclassificatie", href: "/nl/projects/brain-tumour-mri-classification/" },
          { text: " is mijn academisch onderzoek. Mijn cases over netstabiliteit, fotovoltaïsche besturing en telecommunicatie beschrijven professioneel engineeringwerk, binnen zorgvuldig afgebakende grenzen voor openbare publicatie." },
        ],
      },
      {
        question: "Hoe valideer ik de betrouwbaarheid van een technische oplossing?",
        answer: [
          { text: "Ik werk met expliciete eisen, traceerbare data, gestructureerde tests, vergelijking met het verwachte gedrag en nauwe samenwerking met domeinspecialisten. De validatiemethode is afhankelijk van het systeem: van modelevaluatie binnen het " },
          { text: "MRI-onderzoek", href: "/nl/projects/brain-tumour-mri-classification/" },
          { text: " tot operationele tests binnen het " },
          { text: "project voor fotovoltaïsche besturing", href: "/nl/projects/renewable-plant-control/" },
          { text: "." },
        ],
      },
    ],
  },
  contact: {
    eyebrow: "CONTACT",
    title: "Samen bouwen aan robuuste systemen.",
    description: "Voor technische gesprekken, samenwerking en professionele mogelijkheden binnen engineering.",
    name: "Naam",
    email: "E-mailadres",
    message: "Bericht",
    submit: "Verzenden",
    invalid: "Vul de gemarkeerde velden in voordat je het formulier verzendt.",
    opening: "Je e-mailprogramma wordt geopend met een voorbereid bericht.",
    subject: "Bericht via het portfolio van",
    bodyName: "Naam",
    bodyEmail: "E-mailadres",
    bodyMessage: "Bericht",
    footerLabel: "Portfoliovermelding en professionele profielen",
    profilesLabel: "Professionele profielen",
    githubLabel: "GitHub openen in een nieuw tabblad",
    linkedinLabel: "LinkedIn openen in een nieuw tabblad",
    copyrightLabel: "Officiële Nederlandse overheidsinformatie over auteursrecht openen in een nieuw tabblad",
    copyright: "2026 DCS, alle rechten voorbehouden",
    codexLabel: "Informatie over Codex openen in een nieuw tabblad",
  },
} as const;

export const homeContent = { en, nl, de } as const;

export const getHomeContent = (locale: Locale) => homeContent[locale];
