import React from 'react';

export default function TestImagePage() {
    return (
        <div className="p-8">
            <h1 className="text-2xl mb-4">이미지 테스트</h1>
            <div className="grid grid-cols-1 gap-4">
                <div>
                    <h2 className="text-lg mb-2">일반 레퍼런스</h2>
                    <img 
                        src="/images/business-plan/references/일반 레퍼런스 한번에.png" 
                        alt="일반 레퍼런스"
                        className="w-full max-w-lg"
                    />
                </div>
                <div>
                    <h2 className="text-lg mb-2">GYMPT</h2>
                    <img 
                        src="/images/business-plan/references/GYMPT.png" 
                        alt="GYMPT"
                        className="w-full max-w-lg"
                    />
                </div>
            </div>
        </div>
    );
} 