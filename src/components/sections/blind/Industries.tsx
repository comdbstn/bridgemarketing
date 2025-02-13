import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const industries = [
    {
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=400",
        title: "직장인 타겟 서비스",
        description: "25~45세 직장인을 타겟으로 하는 모든 서비스",
    },
    {
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400",
        title: "보험/금융",
        description: "높은 소득 수준의 직장인을 위한 금융 상품",
    },
    {
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=400",
        title: "인테리어/가전",
        description: "구매력 있는 직장인을 위한 프리미엄 제품",
    },
    {
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=400",
        title: "이직/채용",
        description: "경력직 채용 및 이직 관련 서비스",
    },
];

export function Industries() {
    return (
        <section className='py-20 bg-gradient-to-br from-blue-50 to-white'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className='text-4xl font-bold text-center mb-4 font-aggro text-gray-900'
                >
                    추천 업종
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className='text-gray-800 text-center mb-12 max-w-2xl mx-auto px-4 font-tway'
                >
                    직장인의 높은 소득 수준과 구매력을 활용할 수 있는 다양한 업종에서 
                    <br />
                    블라인드 마케팅을 통해 성공적인 결과를 얻고 있습니다.
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
