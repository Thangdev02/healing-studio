import React from 'react';
import { motion } from 'framer-motion';
import Container from '../components/Container';
import { Link } from 'react-router-dom';
import { FaCameraRetro, FaHeart, FaVideo } from 'react-icons/fa'; // Icons cho các dịch vụ

// Dữ liệu giả lập cho các gói dịch vụ
const servicePackages = [
    {
        id: 'prewedding',
        title: 'GÓI CHỤP PREWEDDING',
        image: 'https://images.unsplash.com/photo-1549444131-01f2f010375d?w=800&q=80',
        link: '/prewedding/stu',
        icon: <FaCameraRetro size={40} className="text-[#FFB86B]" />
    },
    {
        id: 'phongsu',
        title: 'QUAY & CHỤP PHÓNG SỰ CƯỚI',
        image: 'https://images.unsplash.com/photo-1583939336118-2e1189280d46?w=800&q=80',
        link: '/dich-vu/phong-su',
        icon: <FaVideo size={40} className="text-[#FFB86B]" />
    },
    {
        id: 'album',
        title: 'GÓI MAKEUP CÔ DÂU',
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80',
        link: '/dich-vu/hoi-nghi',
        icon: <FaHeart size={40} className="text-[#FFB86B]" />
    },
    {
        id: 'album',
        title: 'GÓI THUÊ ĐỒ CƯỚI',
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80',
        link: '/dich-vu/hoi-nghi',
        icon: <FaHeart size={40} className="text-[#FFB86B]" />
    },
];

const Services = () => {
    // Variants cho toàn bộ container
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    // Variants cho từng mục dịch vụ
    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
    };

    // Variants cho hiệu ứng hover của thẻ dịch vụ
    const cardHoverVariants = {
        hover: { 
            scale: 1.05, 
            boxShadow: '0 15px 30px rgba(56, 7, 9, 0.2)',
            transition: { duration: 0.3 }
        }
    };

    return (
        <div className="bg-white">
            
            {/* ================= BANNER DỊCH VỤ ================= */}
            <div className="bg-[#1A0D0E] text-white py-24 text-center">
                <Container>
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-6xl font-serif mb-4 tracking-wider"
                    >
                        DỊCH VỤ CỦA CHÚNG TÔI
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-gray-300 max-w-2xl mx-auto"
                    >
                        Healing Studio cung cấp các giải pháp nhiếp ảnh và quay phim cao cấp, được thiết kế riêng cho mọi nhu cầu của bạn.
                    </motion.p>
                </Container>
            </div>

            {/* ================= LƯỚI DỊCH VỤ CHÍNH ================= */}
            <motion.div 
                className="py-20"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <Container>
                    <h2 className="text-4xl font-serif text-center mb-12 text-[#380709]">
                        Các Gói Dịch Vụ Nổi Bật
                    </h2>
                    <div className="grid md:grid-cols-4 gap-10">
                        {servicePackages.map((pkg) => (
                            <motion.div
                                key={pkg.id}
                                variants={itemVariants}
                                whileHover="hover"
                                className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-md"
                            >
                                <motion.div variants={cardHoverVariants}>
                                    {/* Ảnh Dịch Vụ */}
                                    <div className="h-64 overflow-hidden relative">
                                        <img 
                                            src={pkg.image} 
                                            alt={pkg.title} 
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/10"></div>
                                    </div>

                                    {/* Nội dung */}
                                    <div className="p-6 text-center">
                                        <div className="mx-auto mb-4">{pkg.icon}</div>
                                        <h3 className="text-1xl font-serif mb-1 text-[#380709]">
                                            {pkg.title}
                                        </h3>

                                        <h3 className="text-1xl font-serif mb-1 text-[#380709] mb-4">
                                            Báo Giá: Liên Hệ
                                        </h3>
                                        
                                     
                                        
                                        <Link to={pkg.link}>
                                            <motion.button
                                                whileHover={{ scale: 1.05, backgroundColor: '#380709', color: 'white' }}
                                                className="
                                                    text-sm 
                                                    font-medium 
                                                    py-2 
                                                    px-6 
                                                    rounded-full 
                                                    border-2 
                                                    border-[#380709]
                                                    text-[#380709]
                                                    transition-colors
                                                "
                                            >
                                               Liên Hệ Ngay
                                            </motion.button>
                                        </Link>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </motion.div>

            {/* ================= PHẦN ĐẶC ĐIỂM NỔI BẬT ================= */}
            <div className="bg-[#1a0d0e] w-full py-32 ">
                <Container className='grid grid-cols-12 gap-10 items-center justify-center h-full'>
                       <div className='col-span-6 justify-center items-center flex'>
                        <img className='w-[340px] h-[500px]' src="./images/service.jpg" alt="" />
                   </div>
                   <div className='col-span-6 justify-start items-start flex flex-col gap-6 '>
                    <p className='text-white text-1xl font-serif'>" Telling your story through film, photography, and feeling. "</p>
                    <p className='text-white text-3xl font-serif'>healing.studio</p>

                   </div>
                
                </Container>
            </div>
            
        </div>
    );
};

export default Services;