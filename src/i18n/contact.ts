import { getHomeContent, type Locale } from './home';

const messages = {
  en: {
    submit: 'Send message', sending: 'Sending…',
    success: 'Thank you. Your message has been submitted.',
    failure: 'Your message could not be submitted. Please try again. Your text has been kept.',
    timeout: 'The service has not confirmed receipt. Your text has been kept; retrying may send a duplicate.',
    unavailable: 'The contact form is temporarily unavailable. Please try again later.',
    nameRequired: 'Please enter your name.', emailRequired: 'Please enter your email address.',
    emailInvalid: 'Please enter a valid email address.', messageRequired: 'Please enter your message.',
    tooLong: 'Please shorten this field.', noScript: 'Enable JavaScript to send this form.',
  },
  nl: {
    submit: 'Bericht versturen', sending: 'Versturen…',
    success: 'Bedankt. Je bericht is verzonden.',
    failure: 'Je bericht kon niet worden verzonden. Probeer het opnieuw. Je tekst is bewaard.',
    timeout: 'De ontvangst is nog niet bevestigd. Je tekst is bewaard; opnieuw versturen kan een dubbel bericht opleveren.',
    unavailable: 'Het contactformulier is tijdelijk niet beschikbaar. Probeer het later opnieuw.',
    nameRequired: 'Vul je naam in.', emailRequired: 'Vul je e-mailadres in.',
    emailInvalid: 'Vul een geldig e-mailadres in.', messageRequired: 'Schrijf je bericht.',
    tooLong: 'Maak deze tekst korter.', noScript: 'Schakel JavaScript in om dit formulier te versturen.',
  },
  de: {
    submit: 'Nachricht senden', sending: 'Wird gesendet…',
    success: 'Vielen Dank. Deine Nachricht wurde übermittelt.',
    failure: 'Deine Nachricht konnte nicht übermittelt werden. Bitte versuche es erneut. Dein Text bleibt erhalten.',
    timeout: 'Der Empfang wurde noch nicht bestätigt. Dein Text bleibt erhalten; ein erneuter Versuch kann die Nachricht doppelt senden.',
    unavailable: 'Das Kontaktformular ist vorübergehend nicht verfügbar. Bitte versuche es später erneut.',
    nameRequired: 'Bitte gib deinen Namen ein.', emailRequired: 'Bitte gib deine E-Mail-Adresse ein.',
    emailInvalid: 'Bitte gib eine gültige E-Mail-Adresse ein.', messageRequired: 'Bitte gib deine Nachricht ein.',
    tooLong: 'Bitte kürze diesen Text.', noScript: 'Aktiviere JavaScript, um das Formular zu senden.',
  },
  fr: {
    submit: 'Envoyer le message', sending: 'Envoi en cours…',
    success: 'Merci. Votre message a été transmis.',
    failure: 'Votre message n’a pas pu être transmis. Veuillez réessayer. Votre texte a été conservé.',
    timeout: 'La réception n’a pas encore été confirmée. Votre texte est conservé ; réessayer peut envoyer le message en double.',
    unavailable: 'Le formulaire est temporairement indisponible. Veuillez réessayer plus tard.',
    nameRequired: 'Veuillez indiquer votre nom.', emailRequired: 'Veuillez indiquer votre adresse e-mail.',
    emailInvalid: 'Veuillez saisir une adresse e-mail valide.', messageRequired: 'Veuillez écrire votre message.',
    tooLong: 'Veuillez raccourcir ce texte.', noScript: 'Activez JavaScript pour envoyer ce formulaire.',
  },
} as const;

export const getContactContent = (locale: Locale) => ({ ...getHomeContent(locale).contact, ...messages[locale] });
