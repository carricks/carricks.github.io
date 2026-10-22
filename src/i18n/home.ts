import { fr } from "./home.fr";

export type Locale = "en" | "nl" | "de" | "fr";

const en = {
  "meta": {
    "title": "Diego Carrillo | Systems Engineer",
    "description": "Portfolio of Diego Carrillo, a multidisciplinary systems engineer working in industrial automation, SCADA, renewable energy and power systems."
  },
  "about": {
    "eyebrow": "ABOUT",
    "title": "Who I am.",
    "paragraphs": [
      "I’m Diego Carrillo, an Electronic Engineer with an MSc in Robotics and Automation. As a multidisciplinary systems engineer, I work across industrial automation, energy systems and software, combining practical PLC and SCADA experience with systems integration and application development.",
      "My work spans regulated manufacturing, telecommunications, renewable plants, offshore operations and the Dutch transmission grid, across Spain, the Netherlands, Portugal and Latin America. I connect operational requirements with data, control and software to help multidisciplinary teams deliver reliable, traceable systems."
    ],
    "destinationsLabel": "About sections",
    "destinations": {
      "experience": "Experience",
      "academic": "Academic"
    }
  },
  "projects": {
    "eyebrow": "PROJECTS",
    "title": "Engineering for reliable operation.",
    "description": "Selected projects in power systems, industrial integration and control.",
    "openLabel": "Open project",
    "labels": {
      "brain-tumour-mri-classification": "MRI Tumour Classification",
      "grid-contingency-analysis": "Grid Stability",
      "renewable-plant-control": "Photovoltaic Control",
      "telecommunications-coverage-deployment": "Telecommunications Deployment"
    }
  },
  "milestones": {
    "eyebrow": "MILESTONES",
    "title": "Technical milestones and recognition.",
    "description": "Academic work, international technology competitions and personal achievements that complement my engineering experience.",
    "entriesLabel": "Milestone entries",
    "openHardwarethon": "Explore Hardwarethon Costa Rica 2019"
  },
  "faq": {
    "eyebrow": "FAQ",
    "title": "Questions about my work.",
    "items": [
      {
        "question": "What is my academic background?",
        "answer": [
          {
            "text": "I studied Electronic Engineering and completed an MSc in Robotics and Automation. The "
          },
          {
            "text": "academic section",
            "href": "/about/academic/"
          },
          {
            "text": " explains the technical foundation behind my work."
          }
        ]
      },
      {
        "question": "How does robotics relate to my current work?",
        "answer": [
          {
            "text": "Robotics combines control, perception, software and physical systems. I apply those principles to industrial infrastructure, energy systems and technical applications. My "
          },
          {
            "text": "master’s studies",
            "href": "/about/academic/"
          },
          {
            "text": " provide the foundation for that approach."
          }
        ]
      },
      {
        "question": "How do I combine software and engineering?",
        "answer": [
          {
            "text": "I use software to model, automate, analyse and validate physical systems. This includes data processing, engineering applications and industrial communications. The "
          },
          {
            "text": "project case studies",
            "href": "/#projects"
          },
          {
            "text": " show how this works in practice."
          }
        ]
      },
      {
        "question": "Which engineering environments have I worked in?",
        "answer": [
          {
            "text": "My experience covers industrial control, energy, SCADA, telecommunications and software in Spain, the Netherlands, Portugal and Latin America. The "
          },
          {
            "text": "experience section",
            "href": "/about/experience/"
          },
          {
            "text": " sets out the roles and their context."
          }
        ]
      },
      {
        "question": "What is my role in multidisciplinary projects?",
        "answer": [
          {
            "text": "I connect operational requirements, control, software, data and testing. I help teams clarify dependencies and turn technical definitions into reliable implementations. My "
          },
          {
            "text": "professional experience",
            "href": "/about/experience/"
          },
          {
            "text": " provides examples."
          }
        ]
      },
      {
        "question": "Do I mainly work with hardware or software?",
        "answer": [
          {
            "text": "Both. I work with physical equipment and the control, communications and software that make it observable and reliable. This combination runs through the "
          },
          {
            "text": "engineering portfolio",
            "href": "/#projects"
          },
          {
            "text": "."
          }
        ]
      },
      {
        "question": "Are these academic or professional projects?",
        "answer": [
          {
            "text": "Both. The "
          },
          {
            "text": "MRI tumour classification project",
            "href": "/projects/brain-tumour-mri-classification/"
          },
          {
            "text": " is academic research. The grid, photovoltaic and telecommunications case studies describe professional work within clear publication limits."
          }
        ]
      },
      {
        "question": "How do I check that a solution is reliable?",
        "answer": [
          {
            "text": "I use clear requirements, traceable data, structured tests and specialist review. The method depends on the system: model evaluation in the "
          },
          {
            "text": "MRI study",
            "href": "/projects/brain-tumour-mri-classification/"
          },
          {
            "text": " and operational testing in the "
          },
          {
            "text": "photovoltaic project",
            "href": "/projects/renewable-plant-control/"
          },
          {
            "text": "."
          }
        ]
      }
    ]
  },
  "contact": {
    "eyebrow": "CONTACT",
    "title": "Let's build resilient systems.",
    "description": "For technical conversations, collaborations and engineering opportunities.",
    "name": "Name",
    "email": "Email",
    "message": "Message",
    "invalid": "Please complete the highlighted fields before submitting.",
    "subject": "Portfolio enquiry from",
    "footerLabel": "Portfolio credits and professional profiles",
    "profilesLabel": "Professional profiles",
    "githubLabel": "Open GitHub in a new tab",
    "linkedinLabel": "Open LinkedIn in a new tab",
    "copyrightLabel": "Open official Dutch government copyright information in a new tab",
    "copyright": "2026 DCS, all rights reserved",
    "codexLabel": "Open Codex information in a new tab"
  }
} as const;

const nl = {
  "meta": {
    "title": "Diego Carrillo | Systems Engineer",
    "description": "Portfolio van Diego Carrillo, multidisciplinair systems engineer in industriële automatisering, SCADA, hernieuwbare energie en elektriciteitssystemen."
  },
  "about": {
    "eyebrow": "OVER MIJ",
    "title": "Wie ik ben.",
    "paragraphs": [
      "Ik ben Diego Carrillo, opgeleid in elektronica met een MSc in robotica en automatisering. Als multidisciplinair systems engineer werk ik aan industriële automatisering, energiesystemen en software. Ik combineer praktische PLC- en SCADA-ervaring met systeemintegratie en applicatieontwikkeling.",
      "Mijn ervaring omvat gereguleerde productie, telecommunicatie, hernieuwbare energie, offshoreactiviteiten en het Nederlandse transmissienet, in Spanje, Nederland, Portugal en Latijns-Amerika. Ik verbind operationele eisen met data, besturing en software en help multidisciplinaire teams betrouwbare, traceerbare systemen op te leveren."
    ],
    "destinationsLabel": "Onderdelen van Over mij",
    "destinations": {
      "experience": "Ervaring",
      "academic": "Opleiding"
    }
  },
  "projects": {
    "eyebrow": "PROJECTEN",
    "title": "Systemen die betrouwbaar werken.",
    "description": "Geselecteerde projecten in elektriciteitssystemen, industriële integratie en besturing.",
    "openLabel": "Project openen",
    "labels": {
      "brain-tumour-mri-classification": "Classificatie van hersentumoren op MRI-beelden",
      "grid-contingency-analysis": "Netstabiliteit",
      "renewable-plant-control": "Besturing van fotovoltaïsche installaties",
      "telecommunications-coverage-deployment": "Implementatie van telecommunicatie-infrastructuur"
    }
  },
  "milestones": {
    "eyebrow": "MIJLPALEN",
    "title": "Technische mijlpalen en erkenning.",
    "description": "Academisch werk, internationale technologiewedstrijden en persoonlijke prestaties die mijn technische ervaring aanvullen.",
    "entriesLabel": "Mijlpalen",
    "openHardwarethon": "Bekijk Hardwarethon Costa Rica 2019"
  },
  "faq": {
    "eyebrow": "VEELGESTELDE VRAGEN",
    "title": "Vragen over mijn werk.",
    "items": [
      {
        "question": "Wat is mijn opleiding?",
        "answer": [
          {
            "text": "Ik ben opgeleid in elektronica en heb een MSc in robotica en automatisering. De pagina over mijn "
          },
          {
            "text": "opleiding",
            "href": "/nl/about/academic/"
          },
          {
            "text": " beschrijft de technische basis van mijn werk."
          }
        ]
      },
      {
        "question": "Hoe sluit robotica aan op mijn huidige werk?",
        "answer": [
          {
            "text": "Robotica verbindt besturing, waarneming, software en fysieke systemen. Ik pas die principes toe op industriële infrastructuur, energiesystemen en technische applicaties. Mijn "
          },
          {
            "text": "masteropleiding",
            "href": "/nl/about/academic/"
          },
          {
            "text": " vormt daarvoor de basis."
          }
        ]
      },
      {
        "question": "Hoe combineer ik software en techniek?",
        "answer": [
          {
            "text": "Ik gebruik software om fysieke systemen te modelleren, automatiseren, analyseren en valideren. Dat omvat dataverwerking, technische applicaties en industriële communicatie. De "
          },
          {
            "text": "projectvoorbeelden",
            "href": "/nl/#projects"
          },
          {
            "text": " laten zien hoe dit in de praktijk werkt."
          }
        ]
      },
      {
        "question": "In welke technische omgevingen heb ik gewerkt?",
        "answer": [
          {
            "text": "Mijn ervaring omvat industriële besturing, energie, SCADA, telecommunicatie en software in Spanje, Nederland, Portugal en Latijns-Amerika. De pagina over mijn "
          },
          {
            "text": "werkervaring",
            "href": "/nl/about/experience/"
          },
          {
            "text": " beschrijft de functies en hun context."
          }
        ]
      },
      {
        "question": "Wat is mijn rol in multidisciplinaire projecten?",
        "answer": [
          {
            "text": "Ik verbind operationele eisen, besturing, software, data en testen. Ik help teams afhankelijkheden te verduidelijken en technische plannen betrouwbaar uit te voeren. Mijn "
          },
          {
            "text": "werkervaring",
            "href": "/nl/about/experience/"
          },
          {
            "text": " geeft hiervan voorbeelden."
          }
        ]
      },
      {
        "question": "Werk ik vooral met hardware of software?",
        "answer": [
          {
            "text": "Met beide. Ik werk met fysieke apparatuur en de besturing, communicatie en software die deze inzichtelijk en betrouwbaar maken. Die combinatie staat centraal in mijn "
          },
          {
            "text": "technische portfolio",
            "href": "/nl/#projects"
          },
          {
            "text": "."
          }
        ]
      },
      {
        "question": "Zijn de projecten academisch of professioneel?",
        "answer": [
          {
            "text": "Beide. Het "
          },
          {
            "text": "MRI-project voor hersentumorclassificatie",
            "href": "/nl/projects/brain-tumour-mri-classification/"
          },
          {
            "text": " is academisch onderzoek. De projecten over netstabiliteit, zonnecentrales en telecommunicatie beschrijven professioneel werk, met respect voor vertrouwelijke informatie."
          }
        ]
      },
      {
        "question": "Hoe toets ik de betrouwbaarheid van een oplossing?",
        "answer": [
          {
            "text": "Ik gebruik duidelijke eisen, traceerbare data, gestructureerde tests en beoordeling door specialisten. De methode hangt af van het systeem: modelevaluatie in het "
          },
          {
            "text": "MRI-onderzoek",
            "href": "/nl/projects/brain-tumour-mri-classification/"
          },
          {
            "text": " en operationele tests in het "
          },
          {
            "text": "project voor zonnecentrales",
            "href": "/nl/projects/renewable-plant-control/"
          },
          {
            "text": "."
          }
        ]
      }
    ]
  },
  "contact": {
    "eyebrow": "CONTACT",
    "title": "Samen bouwen aan robuuste systemen.",
    "description": "Voor technische gesprekken, samenwerking en professionele mogelijkheden binnen engineering.",
    "name": "Naam",
    "email": "E-mailadres",
    "message": "Bericht",
    "invalid": "Vul de gemarkeerde velden in voordat je het formulier verzendt.",
    "subject": "Bericht via het portfolio van",
    "footerLabel": "Portfoliovermelding en professionele profielen",
    "profilesLabel": "Professionele profielen",
    "githubLabel": "GitHub openen in een nieuw tabblad",
    "linkedinLabel": "LinkedIn openen in een nieuw tabblad",
    "copyrightLabel": "Officiële Nederlandse overheidsinformatie over auteursrecht openen in een nieuw tabblad",
    "copyright": "2026 DCS, alle rechten voorbehouden",
    "codexLabel": "Informatie over Codex openen in een nieuw tabblad"
  }
} as const;

const de = {
  "meta": {
    "title": "Diego Carrillo | Systems Engineer",
    "description": "Portfolio von Diego Carrillo, interdisziplinärer Systems Engineer für industrielle Automatisierung, SCADA, erneuerbare Energien und Stromsysteme."
  },
  "about": {
    "eyebrow": "ÜBER MICH",
    "title": "Wer ich bin.",
    "paragraphs": [
      "Ich bin Diego Carrillo, Elektronikingenieur mit einem MSc in Robotik und Automatisierung. Als interdisziplinärer Systems Engineer arbeite ich an industrieller Automatisierung, Energiesystemen und Software. Dabei verbinde ich praktische SPS- und SCADA-Erfahrung mit Systemintegration und Anwendungsentwicklung.",
      "Meine Erfahrung umfasst regulierte Fertigung, Telekommunikation, erneuerbare Energien, Offshorebetrieb und das niederländische Übertragungsnetz, in Spanien, den Niederlanden, Portugal und Lateinamerika. Ich verbinde betriebliche Anforderungen mit Daten, Regelung und Software und unterstütze fachübergreifende Teams bei der Umsetzung zuverlässiger, nachvollziehbarer Systeme."
    ],
    "destinationsLabel": "Bereiche unter Über mich",
    "destinations": {
      "experience": "Berufserfahrung",
      "academic": "Ausbildung"
    }
  },
  "projects": {
    "eyebrow": "PROJEKTE",
    "title": "Technik für einen zuverlässigen Betrieb.",
    "description": "Ausgewählte Projekte in Stromversorgung, industrieller Integration und Regelungstechnik.",
    "openLabel": "Projekt öffnen",
    "labels": {
      "brain-tumour-mri-classification": "MRT-Klassifikation von Hirntumoren",
      "grid-contingency-analysis": "Netzstabilität",
      "renewable-plant-control": "Regelung von Photovoltaikanlagen",
      "telecommunications-coverage-deployment": "Ausbau von Telekommunikationsinfrastruktur"
    }
  },
  "milestones": {
    "eyebrow": "MEILENSTEINE",
    "title": "Technische Meilensteine und Auszeichnungen.",
    "description": "Akademische Arbeiten, internationale Technologiewettbewerbe und persönliche Erfolge, die meine Ingenieurpraxis ergänzen.",
    "entriesLabel": "Meilensteine",
    "openHardwarethon": "Hardwarethon Costa Rica 2019 ansehen"
  },
  "faq": {
    "eyebrow": "FAQ",
    "title": "Fragen zu meiner Arbeit.",
    "items": [
      {
        "question": "Welche Ausbildung bringe ich mit?",
        "answer": [
          {
            "text": "Ich habe Elektronik studiert und einen MSc in Robotik und Automatisierung erworben. Der Bereich "
          },
          {
            "text": "Ausbildung",
            "href": "/de/about/academic/"
          },
          {
            "text": " beschreibt die fachlichen Grundlagen meiner Arbeit."
          }
        ]
      },
      {
        "question": "Wie hängt Robotik mit meiner heutigen Arbeit zusammen?",
        "answer": [
          {
            "text": "Robotik verbindet Regelung, Wahrnehmung, Software und physische Systeme. Diese Prinzipien nutze ich für industrielle Infrastruktur, Energiesysteme und technische Anwendungen. Mein "
          },
          {
            "text": "Masterstudium",
            "href": "/de/about/academic/"
          },
          {
            "text": " bildet dafür die Grundlage."
          }
        ]
      },
      {
        "question": "Wie verbinde ich Software und Ingenieurarbeit?",
        "answer": [
          {
            "text": "Ich nutze Software, um physische Systeme zu modellieren, zu automatisieren, zu analysieren und zu validieren. Dazu gehören Datenverarbeitung, technische Anwendungen und industrielle Kommunikation. Die "
          },
          {
            "text": "Projektbeispiele",
            "href": "/de/#projects"
          },
          {
            "text": " zeigen die praktische Umsetzung."
          }
        ]
      },
      {
        "question": "In welchen technischen Bereichen habe ich gearbeitet?",
        "answer": [
          {
            "text": "Meine Erfahrung umfasst industrielle Steuerung, Energie, SCADA, Telekommunikation und Software in Spanien, den Niederlanden, Portugal und Lateinamerika. Der Bereich "
          },
          {
            "text": "Berufserfahrung",
            "href": "/de/about/experience/"
          },
          {
            "text": " beschreibt die Aufgaben und ihren Kontext."
          }
        ]
      },
      {
        "question": "Welche Rolle übernehme ich in fachübergreifenden Projekten?",
        "answer": [
          {
            "text": "Ich verbinde betriebliche Anforderungen, Steuerung, Software, Daten und Tests. Ich helfe Teams, Abhängigkeiten zu klären und technische Konzepte zuverlässig umzusetzen. Meine "
          },
          {
            "text": "Berufserfahrung",
            "href": "/de/about/experience/"
          },
          {
            "text": " enthält Beispiele dafür."
          }
        ]
      },
      {
        "question": "Arbeite ich vor allem mit Hardware oder Software?",
        "answer": [
          {
            "text": "Mit beidem. Ich arbeite mit Anlagen und den Steuerungs-, Kommunikations- und Softwaresystemen, die ihren Zustand sichtbar und ihren Betrieb zuverlässig machen. Diese Verbindung prägt mein "
          },
          {
            "text": "technisches Portfolio",
            "href": "/de/#projects"
          },
          {
            "text": "."
          }
        ]
      },
      {
        "question": "Sind die Projekte akademisch oder beruflich?",
        "answer": [
          {
            "text": "Beides. Das "
          },
          {
            "text": "MRT-Projekt zur Hirntumorklassifikation",
            "href": "/de/projects/brain-tumour-mri-classification/"
          },
          {
            "text": " ist akademische Forschung. Die Fallstudien zu Netzstabilität, Photovoltaik und Telekommunikation beschreiben berufliche Arbeit unter Wahrung der Vertraulichkeit."
          }
        ]
      },
      {
        "question": "Wie prüfe ich die Zuverlässigkeit einer Lösung?",
        "answer": [
          {
            "text": "Ich nutze klare Anforderungen, nachvollziehbare Daten, strukturierte Tests und fachliche Prüfungen. Die Methode hängt vom System ab: Modellbewertung in der "
          },
          {
            "text": "MRT-Studie",
            "href": "/de/projects/brain-tumour-mri-classification/"
          },
          {
            "text": " und betriebliche Tests im "
          },
          {
            "text": "Photovoltaikprojekt",
            "href": "/de/projects/renewable-plant-control/"
          },
          {
            "text": "."
          }
        ]
      }
    ]
  },
  "contact": {
    "eyebrow": "KONTAKT",
    "title": "Gemeinsam resiliente Systeme entwickeln.",
    "description": "Für technische Gespräche, Zusammenarbeit und berufliche Möglichkeiten im Engineering.",
    "name": "Name",
    "email": "E-Mail-Adresse",
    "message": "Nachricht",
    "invalid": "Bitte füllen Sie die markierten Felder aus, bevor Sie das Formular absenden.",
    "subject": "Nachricht über das Portfolio von",
    "footerLabel": "Portfolioangaben und berufliche Profile",
    "profilesLabel": "Berufliche Profile",
    "githubLabel": "GitHub in einem neuen Tab öffnen",
    "linkedinLabel": "LinkedIn in einem neuen Tab öffnen",
    "copyrightLabel": "Offizielle niederländische Regierungsinformationen zum Urheberrecht in einem neuen Tab öffnen",
    "copyright": "2026 DCS, alle Rechte vorbehalten",
    "codexLabel": "Informationen zu Codex in einem neuen Tab öffnen"
  }
} as const;

export const homeContent = { en, nl, de, fr } as const;

export const getHomeContent = (locale: Locale) => homeContent[locale];
