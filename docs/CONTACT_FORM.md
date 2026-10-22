# Contact form

Updated: 22 October 2026. Working branch: `sprint/10-contact`.

## Behaviour

The shared EN/NL/DE/FR component submits directly to Web3Forms through the browser. It no longer opens a mail client. The visitor's `email` is the Reply-To address, so Diego can reply from his mailbox. The text is sent unchanged apart from trimming leading/trailing spaces; the selected page locale is included separately. Automatic message-language detection is not part of this change.

The fine lilac panel follows the page canvas in light mode (#f1eef5). Labels retain the existing 17px typography and regular weight. Name and email share a row from 48rem; narrow viewports stack all fields. The message spans both columns. Field-specific, accessible errors persist until corrected. The button prevents concurrent submissions. Failed or unconfirmed requests preserve the text; successful requests only clear the submitted draft if it was not edited while sending.

## Activation

1. Verify the destination email with [Web3Forms](https://web3forms.com/#start) and obtain its access key.
2. The production public key is configured in src/config/contact.ts. To override it locally, set `PUBLIC_WEB3FORMS_ACCESS_KEY` in an ignored `.env` file (see `.env.example`) and restart Astro.
3. Optionally override the production default for Pages with the repository Actions variable under Settings → Secrets and variables → Actions → Variables. The deploy workflow passes it into the static build. Rebuild/deploy after changing it.
4. Verify one real submission and receipt in the destination mailbox before considering email delivery confirmed.

The key is designed for client-side forms and is embedded in the published HTML. It is not a mailbox password or a private SMTP credential. Until configured, the form gives a localized unavailable message; it does not claim that a message was sent. The form does not offer LinkedIn as an alternative messaging channel.

Web3Forms applies server-side spam filtering. The optional botcheck field is only an additional basic filter; stronger CAPTCHA protection can be added if needed. The visitor's name, email and message are processed by Web3Forms when submitted.

## Validation

Run `npm.cmd run build`, `npm.cmd run check:contact`, `npm.cmd run check:french` and `npm.cmd run audit:repo -- http://localhost:4321`.

The contact tests simulate success, HTTP/API rejection, network failure, timeout, missing configuration, duplicate clicks, persistent errors and edits during submission. They do not send email or verify mailbox receipt.

Official integration reference: [Web3Forms browser submission](https://docs.web3forms.com/how-to-guides/js-frameworks/react-js/simple-react-contact-form), [Reply-To behaviour](https://docs.web3forms.com/getting-started/customizations/custom-reply-to).

## Sprint 10 closeout - 22 October 2026

Release: Sprint10_082226, developed on sprint/10-contact and integrated into main for Pages publication. A user-authorized real local submission returned the success state on 22 October 2026. Mailbox receipt has not been independently confirmed. Automated checks use simulated responses and send no further messages. The published form key and absence of LinkedIn messaging are checked for all four homepage locales.

Repository audit: all 29 public assets and 49 source files are referenced, with no duplicate public files or broken internal links. Removed obsolete mail-client copy, unused submit labels and the unused flashing-error animation. The closeout also applies the compatible Astro fix for [GHSA-mpr7-6m5w-76rw](https://github.com/advisories/GHSA-mpr7-6m5w-76rw); the dependency audit then reports zero vulnerabilities.

Final validation: Astro 7.4.2 builds all 32 routes; all 61 local route/asset HTTP checks pass. Contact, translation, French routing and simulated 3D controls pass. A build with a blank environment override confirms that the production public key is still present in all four contact forms. `git diff --check` passes. No additional email is sent during closeout.
