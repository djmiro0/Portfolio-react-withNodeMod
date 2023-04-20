import React from "react";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();
  return (
    <div className="header">
      <ul>
        <li>{t("Home")}</li>
        <li>{t("Projects")}</li>
        <li>{t("About")}</li>
        <li>{t("Contact")}</li>
      </ul>
    </div>
  );
}
