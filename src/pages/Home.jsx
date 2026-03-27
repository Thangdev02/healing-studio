import React from 'react'
import Hero from '../components/home/Hero'
import WhyChooseUs from '../components/home/WhyChooseUs'
import Venue from '../components/home/Venue'
import Reviews from '../components/home/Reviews'
import { motion } from 'framer-motion'
// Import Link từ react-router-dom nếu bạn muốn nút chuyển trang thật
import { Link } from 'react-router-dom';

const Home = () => {

    // Định nghĩa variants cho hiệu ứng chung của container
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.7 } },
    };

    // Định nghĩa trạng thái Hover (Tách ra)
    const hoverState = {
        // Ảnh 3 (Dưới cùng)
        layer3: { x: -120, y: 30, rotate: -20 },
        // Ảnh 2 (Giữa)
        layer2: { x: 0, y: -20, rotate: 0 },
        // Ảnh 1 (Trên cùng)
        layer1: { x: 120, y: 0, rotate: 20, scale: 1.05 },
    };

    // Định nghĩa trạng thái Ban đầu (Stack)
    const initialStackState = {
        layer3: { x: 10, y: 0, rotate: 19 },
        layer2: { x: -10, y: 0, rotate: -16 },
        layer1: { x: 0, y: 0, rotate: 3, scale: 1.0 }
    };

    // Định nghĩa Variants cho Nút
    const buttonVariants = {
        hover: {
            scale: 1.05,
            backgroundColor: '#FFB86B', // Thay đổi màu nền khi hover
            color: '#1A0D0E', // Thay đổi màu chữ
            boxShadow: '0 0 15px rgba(255, 184, 107, 0.8)',
            transition: { duration: 0.2 }
        },
        rest: {
            scale: 1,
            backgroundColor: '#380709', // Màu nền ban đầu (màu studio đậm)
            color: '#FFB86B', // Màu chữ ban đầu
        }
    };


    return (
        <div className='bg-[#f7f5f3]'>
            <Hero />
            <WhyChooseUs />

            <div style={{ paddingTop: '10%' }}>
                <Venue />

                {/* ================= FEATURE SECTION ================= */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="
            relative
            bg-[#1A0D0E]
            text-white
            px-24
            py-28
            flex
            items-center
            overflow-hidden
            shadow-2xl
          "
                >
                    <div className='container flex'>
                        {/* ===== LEFT CONTENT (Đã thêm nút) ===== */}
                        <div className="flex-1 max-w-[520px] z-10 " style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <p className="text-[#FFB86B] font-medium mb-2">
                                PreWedding
                            </p>
                            <h3 className="text-5xl font-serif mb-6">
                                Bộ Ảnh Nổi Bật
                            </h3>
                            <p className="text-gray-200 text-lg leading-relaxed mb-4">
                                Bộ ảnh cưới PreWedding của cô dâu Lan Phương và chú rể
                            </p>
                            <p className="text-gray-200 text-lg leading-relaxed mb-8">
                               Phạm Tín tại Rạch Giá, An Giang
                            </p>
                            <p className="text-gray-200 text-lg leading-relaxed mb-2">
                                30 tấm ảnh
                            </p>
                          

                            {/* NÚT XEM ALBUM (Link đến /album/id-cua-album-nay) */}
                            <Link to="/album/stu-1" style={{ width: 'fit-content' }}>
                                <motion.button
                                    variants={buttonVariants}
                                    initial="rest"
                                    whileHover="hover"
                                    className="
                                font-serif 
                                text-sm
                                py-3 
                                px-6
                                rounded-full 
                                tracking-wider
                                transition-colors
                                duration-200
                            "
                                    style={{
                                        backgroundColor: '#380709',
                                        color: '#FFB86B',
                                        border: '2px solid #FFB86B',
                                    }}
                                >
                                    Xem Album Chi Tiết
                                </motion.button>
                            </Link>

                        </div>

                        {/* ===== RIGHT IMAGE STACK (Giữ nguyên) ===== */}
                        <motion.div
                            className="flex-1 relative h-[500px]"
                            whileHover="hovered"
                            initial="stacked"
                            animate="stacked"
                        >
                            {/* Vùng chứa stack ảnh */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/3 -translate-y-1/2">

                                {/* LỚP NỀN 2 (layer3.png - z-10) */}
                                <motion.img
                                    src="./images/stack3.jpg"
                                    variants={{
                                        stacked: initialStackState.layer3,
                                        hovered: hoverState.layer3,
                                    }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute w-[372px] h-[500px] object-cover shadow-2xl z-10"
                                />

                                {/* LỚP NỀN 1 (layer2.png - z-20) */}
                                <motion.img
                                    src="./images/stack2.jpg"
                                    variants={{
                                        stacked: initialStackState.layer2,
                                        hovered: hoverState.layer2, 
                                    }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute w-[372px] h-[500px] object-cover shadow-2xl z-20 translate-y-[-10px]"
                                />

                                {/* LỚP CHÍNH (layer1.png - z-30) */}
                                <motion.img
                                    src="./images/stack1.JPG"
                                    variants={{
                                        stacked: initialStackState.layer1,
                                        hovered: hoverState.layer1,
                                    }}
                                    transition={{ duration: 0.5 }}
                                    className="relative w-[372px] h-[500px] object-cover shadow-2xl z-30"
                                />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

        </div>
    )
}

export default Home