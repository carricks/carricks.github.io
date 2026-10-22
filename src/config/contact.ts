// Web3Forms keys are public, email-scoped form identifiers embedded in the page.
// Keep a production default so static Pages builds work without a local .env.
export const contactAccessKey = import.meta.env.PUBLIC_WEB3FORMS_ACCESS_KEY?.trim()
  || 'c8ae6cb7-b2e1-4cab-9e61-22535241ea82';
