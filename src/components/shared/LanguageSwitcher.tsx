import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const LanguagePickerWrapper = styled.div`
  position: absolute;
  right: 0;
  display: flex;
`;
const LanguageOption = styled.div.attrs<{ $isactive?: boolean }>((props) => ({
  $isactive: props.$isactive || false,
}))`
  font-size: 25px;
  margin: 5px;
  cursor: pointer;
  border: none;
  border-bottom: ${(props) => (props.$isactive ? "1px solid" : "none")};
`;

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(localStorage.getItem("lng") || "en");

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
    localStorage.setItem("lng", lang);
  };

  return (
    <LanguagePickerWrapper>
      <LanguageOption
        $isactive={language === "sv"}
        onClick={() => handleLanguageChange("sv")}
      >
        🇸🇪
      </LanguageOption>
      <LanguageOption
        $isactive={language === "en"}
        onClick={() => handleLanguageChange("en")}
      >
        🇺🇸
      </LanguageOption>
    </LanguagePickerWrapper>
  );
};

export default LanguageSwitcher;
