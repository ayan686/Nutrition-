import html from "./fragments/food-database.html?raw";
import "../styles/common.css";
import "../styles/food-database.css";
import LegacyPage from "./LegacyPage.jsx";

export default function FoodDatabase() {
  return (
    <LegacyPage
      html={html}
      title="NutritionConnect AI - Nutrition Guide"
      bodyClassName="bg-background text-on-background font-body-md min-h-screen flex antialiased"
      initFns={["NC_init_FoodDatabase"]}
    />
  );
}
