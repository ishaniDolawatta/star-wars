import React from "react";
import MainLayout from "./components/MainLayout";
import TanstackProvider from "./providers/TanstackProvider";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import LanguageSwitcher from "./components/shared/LanguageSwitcher";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <TanstackProvider>
        <LanguageSwitcher />
        <MainLayout />
      </TanstackProvider>
    </I18nextProvider>
  );
}

export default App;
