import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
    // 1. Định nghĩa Variants cho Container (lưới ảnh)
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3, // Bắt đầu animation của con sau 0.3s
                staggerChildren: 0.2, // Mỗi con xuất hiện cách nhau 0.2s
            },
        },
    };

    // 2. Định nghĩa Variants cho Tiêu đề
    const titleVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    // 3. Định nghĩa Variants cho từng Item ảnh
    const imageVariants = {
        hidden: { opacity: 0, x: 50 }, // Bắt đầu từ bên phải (sẽ được override cho ảnh lớn)
        visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
    };

    // 4. Định nghĩa Variants riêng cho ảnh lớn (xuất hiện từ bên trái)
    const mainImageVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
    };

    return (
        <motion.section 
            style={{ backgroundColor: '#000000' }} 
            className="text-white py-12 md:py-20"
        >
            <div className="max-w-6xl mx-auto px-4">
                
                {/* Title - Hiệu ứng trượt xuống và fade in */}
                <motion.h1 
                    className="text-3xl md:text-4xl font-serif text-center mb-10"
                    variants={titleVariants}
                    initial="hidden"
                    animate="visible"
                >
                    HEALING WHERE LOVE MEETS STYLE
                </motion.h1>
                    <motion.h2 
                    className="text-3xl md:text-4xl font-serif text-center mb-10"
                    variants={titleVariants}
                    initial="hidden"
                    animate="visible"
                >
                  Nơi cảm xúc và gu thẩm mỹ giao nhau.
                </motion.h2>

                {/* Image Grid - Container cho hiệu ứng stagger */}
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-3 gap-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible" // Chỉ chạy khi cuộn tới
                    viewport={{ once: true, amount: 0.2 }} // Chạy 1 lần khi 20% component xuất hiện
                >

                    {/* Ảnh Lớn - Xuất hiện từ bên trái */}
                    <motion.div 
                        className=" overflow-hidden md:col-span-2 shadow-xl"
                        variants={mainImageVariants}
                        whileHover={{ scale: 1.02 }} // Hiệu ứng hover: phóng to nhẹ
                        transition={{ duration: 0.3 }}
                    >
                        <img 
                            src="./images/hero1.jpg" 
                            alt="Wedding couple" 
                            className="w-full h-full object-cover"
                            style={{ height: '480px' }}
                        />
                    </motion.div>

                    {/* Lưới 2 ảnh nhỏ */}
                    <div className="grid grid-rows-2 gap-4 md:col-span-1">
                        
                        {/* Ảnh Nhỏ 1 - Xuất hiện từ bên phải */}
                        <motion.div 
                            className=" overflow-hidden shadow-xl"
                            variants={imageVariants}
                            whileHover={{ scale: 1.05 }} // Hiệu ứng hover mạnh hơn
                            transition={{ duration: 0.3 }}
                        >
                            <img 
                            src="./images/hero3.jpg" 
                                alt="Wedding details" 
                                className="w-full h-full object-cover"
                                style={{ height: '240px' }}
                            />
                        </motion.div>
                        
                        {/* Ảnh Nhỏ 2 - Xuất hiện từ bên phải (với độ trễ của staggerChildren) */}
                        <motion.div 
                            className=" overflow-hidden shadow-xl"
                            variants={imageVariants}
                            whileHover={{ scale: 1.05 }} // Hiệu ứng hover mạnh hơn
                            transition={{ duration: 0.3 }}
                        >
                            <img 
                            src="./images/hero4.jpg" 
                                alt="Wedding rings" 
                                className="w-full h-full object-cover"
                                style={{ height: '240px' }}
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    )
}

export default Hero