import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainPage } from "@/pages/main";
import ServicePage from "@/pages/service";
import { EverytimePage } from "@/pages/everytime";
import { BlindPage } from "@/pages/blind";
import { TiktokPage } from "@/pages/tiktok";
import NaverCafeServicePage from "@/pages/naver-cafe";
import NaverPlaceServicePage from "@/pages/naver-place";
import PortfolioPage from "@/pages/portfolio";
import InsightsPage from "@/pages/insights";
import { InsightDetailPage } from "@/pages/insight-detail";
import BusinessPlanServicePage from "@/pages/business-plan";
import BoltlabPage from "@/pages/boltlab";
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
                <Route path="/naver-cafe" element={<NaverCafeServicePage />} />
                <Route path="/naver-place" element={<NaverPlaceServicePage />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/business-plan" element={<BusinessPlanServicePage />} />
                <Route path="/boltlab" element={<BoltlabPage />} />
            </Routes>
        </Router>
    );
}

export default App;
