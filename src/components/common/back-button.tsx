import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function BackButton() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/service', {
            state: { from: window.location.pathname }
        });
    };

    return (
        <button
            onClick={handleClick}
            className="fixed top-8 left-8 z-50 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
        >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>
    );
}