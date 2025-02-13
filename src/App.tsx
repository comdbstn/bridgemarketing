import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainPage } from "@/pages/main";
import ServicePage from "@/pages/service";
import EverytimePage from "@/pages/everytime";
import { BlindPage } from "@/pages/blind";
import { TiktokPage } from "@/pages/tiktok";
import NaverCafePage from "@/pages/naver-cafe";
import NaverPlacePage from "@/pages/naver-place";
import { ServiceDetailPage } from "@/pages/service-detail";
import InsightsPage from "@/pages/insights";
import { InsightDetailPage } from "@/pages/insight-detail";
import BusinessPlanPage from "@/pages/business-plan";
import BoltlabPage from "@/pages/boltlab";
import TestImagePage from "@/pages/test-image";
import "./App.css";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/service" element={<ServicePage />} />
                <Route path="/insights" element={<InsightsPage />} />
                <Route path="/insights/:id" element={<InsightDetailPage />} />
                <Route path="/everytime" element={<EverytimePage />} />
                <Route path="/blind" element={<BlindPage />} />
                <Route path="/tiktok" element={<TiktokPage />} />
                <Route path="/naver-cafe" element={<NaverCafePage />} />
                <Route path="/naver-place" element={<NaverPlacePage />} />
                <Route path="/portfolio" element={<ServiceDetailPage />} />
                <Route path="/business-plan" element={<BusinessPlanPage />} />
                <Route path="/boltlab" element={<BoltlabPage />} />
                <Route path="/test-image" element={<TestImagePage />} />
            </Routes>
        </Router>
    );
}

export default App;
