import { projectTextNl as nl } from "./projects.nl";
import { projectTextDe as de } from "./projects.de";
import { projectTextFr } from "./projects.fr";
import { projectDetailsFr } from "./pages.fr";
import type { Locale } from "./home";

export const translateProjectText = (text: string, locale: Locale) => locale === "fr" ? (projectTextFr[text] ?? text) : locale === "nl" ? (nl[text] ?? text) : locale === "de" ? (de[text] ?? text) : text;

const projectNl: Record<string, { title: string; location: string; summary: string; contribution: string; outcome: string }> = {
  "brain-tumour-mri-classification": {
    title: "Classificatie van hersentumoren op basis van MRI-beelden",
    location: "Masteronderzoek · Spanje",
    summary: "Een onderzoeksprototype dat convolutionele neurale netwerken, transfer learning en een webinterface combineert om MRI-beelden van de hersenen in vier klinische categorieën te classificeren.",
    contribution: "De volledige onderzoeksworkflow ontworpen, inclusief datasetvoorbereiding, CNN-experimenten, VGG16 transfer learning, modelevaluatie en implementatie via een Flask-webservice.",
    outcome: "Een experimenteel model voor vier klassen en een functioneel webprototype ontwikkeld dat klassewaarschijnlijkheden presenteert en de rol van klinische specialisten bij de diagnose respecteert.",
  },
  "grid-contingency-analysis": {
    title: "Beslisondersteuning voor de stabiliteit van het transmissienet",
    location: "Nederland",
    summary: "Gezamenlijke softwareontwikkeling voor applicaties die gecontroleerde netcontingenties evalueren en de analyse van de stabiliteit van het transmissiesysteem ondersteunen.",
    contribution: "Bijgedragen aan het ontwerp, de ontwikkeling, het testen en de implementatie van applicaties die operationele data voorbereiden voor simulatieworkflows, specialistische tools integreren en de validatie van technische resultaten ondersteunen.",
    outcome: "Betrouwbare analyseworkflows in offline- en onlineomgevingen ondersteund, met behoud van traceerbaarheid, operationele context en multidisciplinaire beoordeling.",
  },
  "renewable-plant-control": {
    title: "Besturing van een grootschalige fotovoltaïsche installatie",
    location: "Extremadura, Spanje",
    summary: "Coördinatie van besturing, supervisie en veldautomatisering binnen een fotovoltaïsche installatie van 380 MW.",
    contribution: "De uitrol, commissioning en integratie ondersteund van een Power Plant Controller op PLC-technologie, waarbij SCADA, HMI en installatiecommunicatie werden verbonden met netvereisten.",
    outcome: "Bijgedragen aan de validatie van een gecoördineerde besturingsworkflow voor een commerciële fotovoltaïsche installatie met meer dan 930.000 panelen en 226 omvormers.",
  },
  "telecommunications-coverage-deployment": {
    title: "Uitrol van mobiele telecommunicatiedekking",
    location: "Madrid, Spanje",
    summary: "Ontwerp en uitrol van betrouwbare mobiele dekking in grote gebouwen, ondergrondse infrastructuur, industriële installaties en afgelegen omgevingen.",
    contribution: "End-to-end dekkingsprojecten uitgevoerd, van locatieonderzoek en RF-ontwerp tot integratie van repeaters en distributed antenna systems, testen, probleemoplossing en eindcertificering.",
    outcome: "De beschikbaarheid van mobiele netwerken in technisch veeleisende gebieden verbeterd en betrouwbare communicatie voor operationeel personeel en noodsituaties ondersteund.",
  },
};

const projectDe: typeof projectNl = {
  "brain-tumour-mri-classification": { title: "Klassifikation von Hirntumoren anhand von MRT-Bildern", location: "Masterforschung · Spanien", summary: "Ein Forschungsprototyp, der Convolutional Neural Networks, Transfer Learning und eine Weboberfläche kombiniert, um MRT-Bilder des Gehirns in vier klinische Kategorien einzuordnen.", contribution: "Konzeption des vollständigen Forschungsworkflows einschließlich Datenaufbereitung, CNN-Experimenten, VGG16 Transfer Learning, Modellevaluierung und Bereitstellung über einen Flask-Webservice.", outcome: "Entwicklung eines experimentellen Vierklassenmodells und eines funktionsfähigen Webprototyps, der Klassenwahrscheinlichkeiten darstellt und die Rolle klinischer Fachkräfte bei der Diagnose wahrt." },
  "grid-contingency-analysis": { title: "Entscheidungsunterstützung für die Stabilität des Übertragungsnetzes", location: "Niederlande", summary: "Gemeinsame Softwareentwicklung für Anwendungen zur Bewertung kontrollierter Netzkontingenzen und zur Unterstützung der Stabilitätsanalyse des Übertragungsnetzes.", contribution: "Mitwirkung an Entwurf, Entwicklung, Test und Bereitstellung von Anwendungen, die Betriebsdaten für Simulationsworkflows aufbereiten, Spezialwerkzeuge integrieren und die Validierung technischer Ergebnisse unterstützen.", outcome: "Unterstützung zuverlässiger Analyseworkflows in Offline- und Onlineumgebungen unter Wahrung von Nachvollziehbarkeit, betrieblichem Kontext und multidisziplinärer Prüfung." },
  "renewable-plant-control": { title: "Regelung einer großtechnischen Photovoltaikanlage", location: "Extremadura, Spanien", summary: "Koordination von Regelung, Überwachung und Feldautomatisierung in einer 380-MW-Photovoltaikanlage.", contribution: "Unterstützung von Ausbau, Inbetriebnahme und Integration eines Power Plant Controllers auf PLC-Basis sowie Verbindung von SCADA, HMI und Anlagenkommunikation mit Netzanforderungen.", outcome: "Mitwirkung an der Validierung eines koordinierten Regelungsworkflows für eine kommerzielle Photovoltaikanlage mit mehr als 930.000 Modulen und 226 Wechselrichtern." },
  "telecommunications-coverage-deployment": { title: "Ausbau mobiler Telekommunikationsabdeckung", location: "Madrid, Spanien", summary: "Planung und Aufbau zuverlässiger Mobilfunkabdeckung in großen Gebäuden, unterirdischer Infrastruktur, Industrieanlagen und abgelegenen Umgebungen.", contribution: "End-to-End-Abdeckungsprojekte von Standortaufnahme und RF-Design bis zur Integration von Repeatern und Distributed Antenna Systems, Tests, Fehlerbehebung und Endzertifizierung umgesetzt.", outcome: "Die Verfügbarkeit mobiler Netze in technisch anspruchsvollen Bereichen verbessert und zuverlässige Kommunikation für Betriebspersonal und Notfallszenarien unterstützt." },
};

export const localizeProject = <T extends { slug: string; title: string; location: string; summary: string; contribution: string; outcome: string }>(project: T, locale: Locale) =>
  locale === "fr" ? { ...project, ...(projectDetailsFr[project.slug] ?? {}) } : locale === "nl" ? { ...project, ...(projectNl[project.slug] ?? {}) } : locale === "de" ? { ...project, ...(projectDe[project.slug] ?? {}) } : project;
