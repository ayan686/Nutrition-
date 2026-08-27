import html from "./fragments/admin-analytics.html?raw";
import "../styles/common.css";
import "../styles/admin-analytics.css";
import LegacyPage from "./LegacyPage.jsx";

export default function AdminAnalytics() {
  return (
    <LegacyPage
      html={html}
      title="NutritionConnect AI - Admin Dashboard"
      bodyClassName="bg-surface text-on-surface font-body-md antialiased min-h-screen flex"
      initFns={["NC_init_AdminAnalytics"]}
    />
  );
}
