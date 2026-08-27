import html from "./fragments/role-selection.html?raw";
import "../styles/common.css";
import "../styles/role-selection.css";
import LegacyPage from "./LegacyPage.jsx";

export default function RoleSelection() {
  return (
    <LegacyPage
      html={html}
      title="Role Selection - NutritionConnect AI"
      bodyClassName="bg-background text-on-background min-h-screen flex flex-col font-body-md antialiased selection:bg-primary/20 selection:text-primary"
      initFns={["NC_init_RoleSelection"]}
    />
  );
}
