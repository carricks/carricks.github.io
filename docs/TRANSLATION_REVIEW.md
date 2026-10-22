# Multilingual editorial review

Date: 21 October 2026

## Scope

English, Dutch, German and French across all 32 public routes: introduction, FAQ, contact interface, education, six experience records, four case studies and Hardwarethon. The review also covers image descriptions, chart labels, prediction reports and interactive 3D controls.

This is an editorial and automated review, not certification by four independent native-language reviewers. Original publications, dataset/model titles, company names and text embedded in source artwork retain their original language.

## Findings and corrections

- Several German labels and image descriptions fell back to English. These gaps are filled, including the medical class names, planning metrics and accessibility labels.
- Two duplicate German dictionary entries were removed. Dutch and German project dictionaries now sit in separate, readable files alongside French.
- The Dutch education copy used “postdoctorale opleiding” for a master's programme. It now says “Masteropleiding”; the level and official qualification are preserved.
- Dense case-study paragraphs, biographies, FAQ answers and experience descriptions were shortened. Clear passages were retained rather than rewritten unnecessarily.
- Repetitive references to workflows, delivery environments and integration were replaced with direct descriptions of the work.
- Medical classes are localized consistently: pituitary tumour, hypofysetumor, Hypophysentumor and tumeur hypophysaire. A model's reported probability is not labelled clinical certainty.
- Model controls, source credits and report labels remain consistent with the selected language. Official model titles and source filenames are retained.

## Language choices

| Language | Editorial approach | Example |
| --- | --- | --- |
| English | British spelling, direct verbs, precise engineering terms | “Engineering for reliable operation.” |
| Dutch | Natural sentence order; familiar technical terms; avoid literal English compounds | “Systemen die betrouwbaar werken.” |
| German | Clear verbs and short clauses; standard terms such as SPS and Inbetriebnahme | “Softwareentwicklung in fachübergreifenden Teams.” |
| French | Concise sentences; distinguish commande, automatisation, supervision and mise en service | “L’ingénierie au service d’une exploitation fiable.” |

Qualifications, contribution boundaries, confidentiality statements and reported results remain intact. Training accuracy is still identified as training accuracy. Academic prototypes are not presented as validated diagnostic devices. The published plant figures, model probabilities, dataset size and contest result are retained.

## Verification

- `npm.cmd run build`: renders all localized routes.
- `npm.cmd run check:translations`: checks project translation coverage, duplicate entries, English paragraph fallback, qualification wording and numerical invariants.
- `npm.cmd run check:french`: checks all locale routes, alternate links, FR switching, Unicode and report labels.
- `npm.cmd run check:models`: simulates independent model controls in all four languages and both themes.
- `npm.cmd run audit:repo -- http://localhost:4321`: checks references and local HTTP responses.

These checks do not substitute for live WebGL rendering, a physical-device layout review or a specialist assessment of the research results. The changes remain local until explicitly published.

## Sprint 09 closeout - 22 October 2026

Release candidate: Sprint09_082126 on sprint/09-translations. The build and repository checks are rerun at closeout; temporary editorial extracts are removed and excluded from Git. Production remains unchanged until integration into main. Automated checks do not certify native-language review or physical-device rendering.

Closeout results on 22 October 2026: 32 pages built; 29 public assets and 46 source files checked; no unused assets/modules, duplicate public files or broken internal links. All 61 local route/asset HTTP checks passed. Translation and simulated model controls passed in four locales and both themes. `git diff --check` passed; `npm.cmd audit --omit=dev` reported zero vulnerabilities. Removed 16 temporary editorial files; no retained public asset required deletion.

## Sprint 10 closeout - 22 October 2026

The contact additions are localized in EN/NL/DE/FR: visible field labels, field-level errors, request states and JavaScript/unavailability notices. Removed obsolete mail-client strings and LinkedIn messaging suggestions. The visitor may write in any language; page locale does not restrict the submitted text. No automatic detection or translation of visitor messages is performed.
