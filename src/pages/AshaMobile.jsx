import html from "./fragments/asha-mobile.html?raw";
import "../styles/common.css";
import "../styles/asha-mobile.css";
import LegacyPage from "./LegacyPage.jsx";

export default function AshaMobile() {
  return (
    <LegacyPage
      html={html}
      title="ASHA Worker Interface - NutritionConnect AI"
      bodyClassName="bg-surface text-on-surface antialiased min-h-screen flex flex-col font-body-md overflow-x-hidden selection:bg-primary-container selection:text-on-primary-container"
      initFns={["NC_init_AshaMobile"]}
    />
  );
}
