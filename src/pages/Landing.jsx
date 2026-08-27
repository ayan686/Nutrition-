import html from "./fragments/landing.html?raw";
import "../styles/common.css";
import "../styles/landing.css";
import LegacyPage from "./LegacyPage.jsx";

export default function Landing() {
  return (
    <LegacyPage
      html={html}
      title="NutritionConnect AI - Intelligent Nutrition Decision Support"
      bodyClassName="bg-background text-on-background font-body-md antialiased overflow-x-hidden selection:bg-primary selection:text-on-primary"
      initFns={["NC_init_Landing"]}
    />
  );
}
