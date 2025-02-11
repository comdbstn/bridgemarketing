import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-gray-50 py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            {/* Company Info */}
            <div className="space-y-2">
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-[#FF416C] to-[#FF4B2B] bg-clip-text text-transparent">
                Bridge Marketing
              </h3>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <span>서울시 성동구 뚝섬로 13길 38 (성수동 2가)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <span>사업자등록번호: 405-06-65006</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <a 
                    href="mailto:director@bridgemarketing.xyz" 
                    className="hover:text-[#FF416C] transition-colors duration-200"
                  >
                    director@bridgemarketing.xyz
                  </a>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} Bridge Marketing. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}