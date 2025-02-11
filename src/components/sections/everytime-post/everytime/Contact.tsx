import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-4"
          >
            문의하기
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-600 text-center mb-8"
          >
            에브리타임 마케팅에 대해 궁금하신 점이 있으시다면 문의해주세요
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 sm:p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">이름</label>
                  <Input className="w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">이메일</label>
                  <Input type="email" className="w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">문의내용</label>
                  <Textarea className="min-h-[150px] w-full" />
                </div>
                <Button className="w-full bg-gradient-to-r from-[#FF416C] to-[#FF4B2B] hover:from-[#FF4B2B] hover:to-[#FF416C] text-white">
                  문의하기
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}