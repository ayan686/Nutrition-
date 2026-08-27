import html from "./fragments/icds-dashboard.html?raw";
import "../styles/common.css";
import "../styles/icds-dashboard.css";
import LegacyPage from "./LegacyPage.jsx";

export default function IcdsDashboard() {
  return (
    <LegacyPage
      html={html}
      title="NutritionConnect AI - Admin Portal"
      bodyClassName="bg-background text-on-surface font-body-md antialiased overflow-hidden flex h-screen"
      initFns={["NC_init_IcdsDashboard"]}
    />
  );
}
