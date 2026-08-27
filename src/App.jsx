import { Routes, Route } from "react-router-dom";
import AppNav from "./AppNav.jsx";
import Home from "./pages/Home.jsx";
import Landing from "./pages/Landing.jsx";
import RoleSelection from "./pages/RoleSelection.jsx";
import PregnancyAssessment from "./pages/PregnancyAssessment.jsx";
import IcdsDashboard from "./pages/IcdsDashboard.jsx";
import AshaMobile from "./pages/AshaMobile.jsx";
import FoodDatabase from "./pages/FoodDatabase.jsx";
import AdminAnalytics from "./pages/AdminAnalytics.jsx";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/role-selection" element={<RoleSelection />} />
        <Route path="/pregnancy-assessment" element={<PregnancyAssessment />} />
        <Route path="/icds-dashboard" element={<IcdsDashboard />} />
        <Route path="/asha-mobile" element={<AshaMobile />} />
        <Route path="/food-database" element={<FoodDatabase />} />
        <Route path="/admin-analytics" element={<AdminAnalytics />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <AppNav />
    </>
  );
}
