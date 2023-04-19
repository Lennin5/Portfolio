import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
// import './styles/main.scss';

import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import { RouterProvider } from "react-router-dom";
import router from "./Router";

import es_language from "./translations/es.json";

i18next.init({
  interpolation: 
  { 
    escapeValue: false // Allows for HTML tags in translations
  },  
  lng: "es",
  resources: {
    es: {
      global: es_language
    } 
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <RouterProvider router={router} />
    </I18nextProvider>
  </React.StrictMode>
);
