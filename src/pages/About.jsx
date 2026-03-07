import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/Container';
// Import TypingText component
import TypingText from '../components/TypingText'; 
// Import icons cho phần Liên Hệ
import { MdPhone, MdLocationOn } from 'react-icons/md';

const About = () => {
    // Motion variants cho hiệu ứng fade-in từng phần
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <div className="py-24 bg-white">
            <Container>
                {/* Phần tiêu đề lớn và nội dung chính (2 cột) */}
                <motion.div 
                    className="grid md:grid-cols-2 gap-16 items-start"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {/* Cột 1: Thông tin Studio */}
                    <div className="space-y-6">
                        <motion.h1 
                            className="text-5xl font-serif mb-2 text-[#380709]"
                            variants={itemVariants}
                        >
                            HEALING STUDIO
                        </motion.h1>
                        
                        {/* HIỆU ỨNG TEXT TYPING THEO THỬ THÁCH */}
                        <TypingText className="text-2xl text-primary mb-8 font-serif" />

                        <motion.div className="space-y-6 text-gray-700 leading-relaxed" variants={itemVariants}>
                            <p>
                                Healing Studio rất hân hạnh được đồng hành cùng bạn trong ngày trọng đại của cuộc đời! Nếu bạn có bất kỳ câu hỏi nào hoặc cần thêm thông tin, hãy nhắn tin ngay cho Healing Studio.
                            </p>
                        </motion.div>

                        {/* Thông Tin Liên Hệ Cố Định */}
                        <motion.div className="bg-white p-0 my-8 space-y-3 pt-4" variants={itemVariants}>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3">
                                    <MdPhone className="text-xl text-[#380709]" />
                                    <span className="text-gray-700">0335609398 (Hoàng Anh)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <MdLocationOn className="text-xl text-[#380709] mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700">B14-26, đường số 8, khu đô thị Tây Bắc, Rạch Giá, An Giang</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>

                    {/* Cột 2: Ảnh Ngoại Cảnh */}
                    <motion.div className="relative pt-6" variants={itemVariants}>
                        <img 
                            src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800" // Ảnh studio ngoại thất
                            alt="Healing Studio Ngoại Cảnh" 
                            className="w-full h-auto rounded-xl shadow-2xl"
                        />
                        {/* Overlay Text như trong Figma */}
                        <div className="absolute bottom-5 right-5 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-lg text-lg font-serif text-[#380709]">
                            Healing Studio
                        </div>
                    </motion.div>
                </motion.div>

                {/* Phần Bản Đồ (Full Width) */}
                <motion.div className="my-20" variants={itemVariants}>
                    <h2 className="text-4xl font-serif text-center mb-8 text-[#380709]">Bản Đồ</h2>
                    {/* Giả lập Bản Đồ (Thay bằng iframe Google Maps thực tế) */}
                    <div className="bg-gray-100 h-[500px] rounded-lg shadow-xl overflow-hidden">
                    <iframe style={{ width: "100%", height: "100%" }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.0260247649067!2d105.06433501098853!3d10.01470887273931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0b30006b5c9db%3A0xf6c0e4b775256a7d!2zSGVhbGluZyBTdHVkaW8gLSBDaOG7pXAg4bqibmggQ2jDom4gRHVuZywgQmVhdXR5LCBHaWEgxJDDrG5oLCDhuqJuaCBDxrDhu5tp!5e0!3m2!1svi!2s!4v1765820086186!5m2!1svi!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>                    </div>
                </motion.div>

                {/* Phần Hình Ảnh Của Studio */}
                <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
                    <motion.h2 className="text-4xl font-serif text-center mb-12 text-[#380709]" variants={itemVariants}>
                        Một Số Hình Ảnh Của Studio
                    </motion.h2>
                    <div className="grid md:grid-cols-2 gap-10">
                        {/* Ảnh 1: Ảnh trang điểm/Nội thất */}
                        <motion.img 
                            src="https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800" 
                            alt="Studio Trang Điểm" 
                            className="rounded-xl shadow-2xl w-full h-[550px] object-cover"
                            variants={itemVariants}
                        />
                        {/* Ảnh 2: Ảnh Thiết bị/Ánh sáng */}
                        <motion.div className="relative" variants={itemVariants}>
                            <img 
                                src="https://images.unsplash.com/photo-1506869640301-ce1c2d96e574?w=800" 
                                alt="Studio Equipment" 
                                className="rounded-xl shadow-2xl w-full h-[550px] object-cover"
                            />
                            {/* Overlay Text lớn như trong Figma */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                                <h3 className="text-white text-5xl font-serif tracking-widest leading-none">
                                    HEALING.STUDIO
                                </h3>
                                <p className="text-gray-200 text-sm mt-2">STUDIO PRESENTATION</p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </Container>
        </div>
    );
};

export default About;