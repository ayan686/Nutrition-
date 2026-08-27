import html from "./fragments/pregnancy-assessment.html?raw";
import "../styles/common.css";
import "../styles/pregnancy-assessment.css";
import LegacyPage from "./LegacyPage.jsx";

export default function PregnancyAssessment() {
  return (
    <LegacyPage
      html={html}
      title="NutritionConnect AI - Pregnancy Assessment"
      bodyClassName="bg-background text-on-surface font-body-md antialiased min-h-screen flex flex-col"
      initFns={["NC_init_PregnancyAssessment"]}
    />
  );
}
