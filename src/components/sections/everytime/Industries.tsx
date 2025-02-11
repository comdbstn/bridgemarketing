import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const industries = [
    {
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=400",
        title: "대학생 타겟 서비스",
        description: "20대 초중반 대학생을 타겟으로 하는 모든 서비스",
    },
    {
        image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=400",
        title: "학원/교육",
        description: "어학, 자격증, 취업 준비 등 교육 관련 서비스",
    },
    {
        image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&q=80&w=400",
        title: "식품/배달",
        description: "배달 앱, 식품 구독 서비스 등 식생활 관련 서비스",
    },
    {
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=400",
        title: "취업/채용",
        description: "인턴, 대외활동, 공채 등 취업 관련 서비스",
    },
];

export function Industries() {
    return (
        <section className='py-20 bg-gradient-to-br from-pink-50 to-white'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className='text-4xl font-bold text-center mb-4 font-aggro'
                >
                    추천 업종
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className='text-gray-600 text-center mb-12 max-w-2xl mx-auto px-4 font-tway'
                >
                    대학생의 높은 구매력과 트렌드 민감도를 활용할 수 있는 다양한 업종에서
                    <br />
                    에브리타임 마케팅을 통해 성공적인 결과를 얻고 있습니다.
                </motion.p>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'>
                    {industries.map((industry, index) => (
                        <motion.div
                            key={industry.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className='h-full'
                        >
                            <Card className='h-full flex flex-col overflow-hidden group hover:shadow-xl transition-all duration-300'>
                                <div className='relative h-48 flex-shrink-0'>
                                    <img
                                        src={industry.image}
                                        alt={industry.title}
                                        className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'
                                    />
                                </div>
                                <div className='p-6 flex flex-col flex-grow'>
                                    <h3 className='text-xl font-bold mb-2 text-gray-900 font-tway'>{industry.title}</h3>
                                    <p className='text-gray-600 font-tway'>{industry.description}</p>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
