import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Header() {
  const { t } = useTranslation();
  return (
    <div className="header">
      <ul>
        <Link to="/">
          <li>{t("Home")}</li>
        </Link>
        <Link to="/projects">
          <li>{t("Projects")}</li>
        </Link>
        <Link to="/aboutme">
          <li>{t("About")}</li>
        </Link>
        <Link to="/contact">
          <li>{t("Contact me")}</li>
        </Link>
      </ul>
    </div>
  );
}
