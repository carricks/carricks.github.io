export type ResponsiveThemeAsset = {
  dark: { desktop: string; mobile: string };
  light: { desktop: string; mobile: string };
};

const shared = (path: string): ResponsiveThemeAsset => ({
  dark: { desktop: path, mobile: path },
  light: { desktop: path, mobile: path },
});

const themed = (dark: string, light: string, darkMobile = dark, lightMobile = light): ResponsiveThemeAsset => ({
  dark: { desktop: dark, mobile: darkMobile },
  light: { desktop: light, mobile: lightMobile },
});

const logosRoot = "/images/library/logos";
const projectsRoot = "/images/library/projects";

export const imageLibrary = {
  logos: {
    allea: shared(`${logosRoot}/allea-logo-lilac.png`),
    aspentech: shared(`${logosRoot}/aspentech-logo-lilac.png`),
    bostonScientific: shared(`${logosRoot}/boston-scientific-logo-lilac.svg`),
    capgemini: shared(`${logosRoot}/capgemini-logo-lilac.png`),
    isemaren: shared(`${logosRoot}/isemaren-logo-lilac.png`),
    uc3m: shared(`${logosRoot}/uc3m-logo-lilac.png`),
    xacom: shared(`${logosRoot}/xacom-logo-lilac.svg`),
  },
  projects: {
    brainTumourMri: {
      classGlioma: shared(`${projectsRoot}/brain-tumour-mri/class-glioma.png`),
      classMeningioma: shared(`${projectsRoot}/brain-tumour-mri/class-meningioma.png`),
      classNoTumour: shared(`${projectsRoot}/brain-tumour-mri/class-no-tumour-clean.png`),
      classPituitary: shared(`${projectsRoot}/brain-tumour-mri/class-pituitary.png`),
      dataAugmentation: shared(`${projectsRoot}/brain-tumour-mri/data-augmentation-4k.png`),
      preprocessing: shared(`${projectsRoot}/brain-tumour-mri/mri-preprocessing.png`),
      predictionOrbital: shared(`${projectsRoot}/brain-tumour-mri/prediction-orbital-wireframe.png`),
      vgg16: themed(
        `${projectsRoot}/brain-tumour-mri/vgg16-architecture-lilac-approved-v2.png`,
        `${projectsRoot}/brain-tumour-mri/vgg16-architecture-light-v4.png`,
      ),
    },
    gridStability: {
      controlRoom: shared(`${projectsRoot}/grid-stability/control-room-future.png`),
      dutchGrid: shared(`${projectsRoot}/grid-stability/dutch-grid-context.png`),
      facility: shared(`${projectsRoot}/grid-stability/grid-management-facility.png`),
      systemArchitecture: shared(`${projectsRoot}/grid-stability/system-architecture.png`),
    },
    renewableControl: {
      solarPlant: shared(`${projectsRoot}/renewable-control/extremadura-solar-control-plant.png`),
      hybridArchitecture: themed(
        `${projectsRoot}/renewable-control/hybrid-control-architecture-v4.svg?v=8`,
        `${projectsRoot}/renewable-control/hybrid-control-architecture-v4.svg?v=8`,
        `${projectsRoot}/renewable-control/hybrid-control-architecture-mobile-v4.svg?v=8`,
        `${projectsRoot}/renewable-control/hybrid-control-architecture-mobile-v4.svg?v=8`,
      ),
    },
    telecommunications: {
      distributedCoverage: shared(`${projectsRoot}/telecommunications-coverage/distributed-coverage-system.svg?v=2`),
    },
  },
} as const;

export const desktopAsset = (asset: ResponsiveThemeAsset, theme: "dark" | "light") => asset[theme].desktop;
