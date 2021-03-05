import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TranslationsProvider from './lib/TranslationsProvider';

const TRANSLATIONS = {
  es: {
    home_h1: 'Título principal',
    home_desc: 'ES Lorem ipsum, dolor sit...',
    home_legal: () => (<>Acepto los <a href="terminos-legal">términos y condiciones</a></>),
    contact_form_name_placeholder: 'Introduce tu nombre',
    results_count_text: ({number, total}) => `Hay ${number} resultados de ${total}`
  },
  en: {
    home_h1: 'Main Title',
    home_desc: 'EN Lorem ipsum, dolor sit...',
    home_legal: () => (<>I Accept the <a href="terminos-legal">terms and conditions</a></>),
    contact_form_name_placeholder: 'Enter your name',
    results_count_text: ({number, total}) => `Found ${number} results of ${total}`
  }
}

// <TagTrans tag="home_h1" />

ReactDOM.render(
  <React.StrictMode>
    <TranslationsProvider translations={TRANSLATIONS}>
      <App />
    </TranslationsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
