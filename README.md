# IAM Tech's translations system
This is a cross-project library developed by IAM Tech's team to reuse the functionalities of JSON provided translations.

Library registry: [Bit.dev](https://bit.dev/iamtechnologies/translations/translations/~code)
Youtube session: [View on YouTube](https://www.youtube.com/watch?v=AGrZ5fpXzVU)

## Installation
```sh
npm i @bit/iamtechnologies.translations.translations
```

## Components
### TranslationsContext
React Context to comunicate languages and translations between components

### TranslationsProvider
Provides the React Context to its children and manages the logic for producing the resulting translation.
#### Provides:
- language: current language set on the application
- setLanguage(lang): sets the application language
- getText(tag): returns the translated content corresponding to the provided tag

### TagTrans: 
Renders the translated content corresponding to the provided tag and props.

## Usage
Cofigure the available translations:
```js
const TRANSLATIONS = {
  es: { // one object for every available language
    home_h1: 'Título principal', // Simple text translation
    home_desc: 'ES Lorem ipsum, dolor sit...',
    home_legal: () => (
      <>Acepto los <a href="terminos-legal">términos y condiciones</a></>
    ), // Translation as react component (function) combining text and HTML elements
    contact_form_name_placeholder: 'Introduce tu nombre',
    results_count_text: ({number, total}) => (
      `Hay ${number} resultados de ${total}`
    ) // Using dynamic parameters
  },
  en: { // same translations on different language
    home_h1: 'Main Title',
    home_desc: 'EN Lorem ipsum, dolor sit...',
    home_legal: () => (<>I Accept the <a href="terminos-legal">terms and conditions</a></>),
    contact_form_name_placeholder: 'Enter your name',
    results_count_text: ({number, total}) => `Found ${number} results of ${total}`
  }
}
```

Provide the translations to all the application. It works best on the root component:
```js
<TranslationsProvider translations={TRANSLATIONS}>
  <App />
</TranslationsProvider>
```

Use the TagTrans component to render some translation
- Simple text translation
```js
<TagTrans tag="home_h1" />
```

- Translation with dynamic parameters
```js
<TagTrans tag="results_count_text" number="2" total="10" />
```

Get a translated content to use on others components (like input placeholders)
```js
const FormInput = ({ placeholderTranslationTag }) => {
  const { getText } = useContext(TranslationsContext);
  const placeholderTranslationText = getText(placeholderTranslationTag);

  return <input placeholder={placeholderTranslationText} />
}
```

