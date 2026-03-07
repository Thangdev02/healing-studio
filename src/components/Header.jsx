import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [isPreWeddingOpen, setIsPreWeddingOpen] = useState(false)
  const [isPhongSuOpen, setIsPhongSuOpen] = useState(false)
  const [isFilmOpen, setIsFilmOpen] = useState(false)

  const dropdownVariants = {
    hidden: { 
      opacity: 0, 
      y: -10,
      transition: {
        duration: 0.2
      }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2
      }
    }
  }

  return (
    <header style={{ backgroundColor: '#380709'}} className="text-white py-10 sticky top-0 z-50 shadow-lg font-serif font-bold">
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Left Menu */}
          <ul className="flex items-center gap-8 text-md">
            <li>
              <a href="/" className="hover:text-gray-300 transition">
                Trang Chủ
              </a>
            </li>
            
            <li 
              className="relative"
              onMouseEnter={() => setIsPreWeddingOpen(true)}
              onMouseLeave={() => setIsPreWeddingOpen(false)}
            >
              <a href="/prewedding" className="hover:text-gray-300 transition flex items-center gap-1">
                Pre-Wedding
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              
              <AnimatePresence>
                {isPreWeddingOpen && (
                  <motion.div 
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute top-full left-0 bg-white text-gray-800 shadow-lg rounded-md mt-2 min-w-[150px] overflow-hidden"
                  >
                    <a 
                      href="/prewedding/stu" 
                      className="block px-4 py-2 hover:bg-gray-100 transition"
                    >
                      Stu
                    </a>
                    <a 
                      href="/prewedding/ngoai-canh" 
                      className="block px-4 py-2 hover:bg-gray-100 transition"
                    >
                      Ngoại Cảnh
                    </a>
                    <a 
                      href="/prewedding/album" 
                      className="block px-4 py-2 hover:bg-gray-100 transition"
                    >
                      Album
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* Film Dropdown */}
            <li 
              className="relative"
              onMouseEnter={() => setIsFilmOpen(true)}
              onMouseLeave={() => setIsFilmOpen(false)}
            >
              <button className="hover:text-gray-300 transition flex items-center gap-1">
                Film
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <AnimatePresence>
                {isFilmOpen && (
                  <motion.div 
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute top-full left-0 bg-white text-gray-800 shadow-lg rounded-md mt-2 min-w-[150px] overflow-hidden"
                  >
                    <a 
                      href="/film/truyen-thong" 
                      className="block px-4 py-2 hover:bg-gray-100 transition"
                    >
                      Truyền Thống
                    </a>
                    <a 
                      href="/film/phong-su" 
                      className="block px-4 py-2 hover:bg-gray-100 transition"
                    >
                      Phóng Sự
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          </ul>

          {/* Center Logo */}
          <a href="/" className="text-2xl font-bold tracking-widest absolute left-1/2 transform -translate-x-1/2">
            HEALING. STUDIO
          </a>

          {/* Right Menu */}
          <ul className="flex items-center gap-8 text-md">
            {/* Phóng Sự Dropdown */}
            <li 
              className="relative"
              onMouseEnter={() => setIsPhongSuOpen(true)}
              onMouseLeave={() => setIsPhongSuOpen(false)}
            >
              <button className="hover:text-gray-300 transition flex items-center gap-1">
                Phóng Sự
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <AnimatePresence>
                {isPhongSuOpen && (
                  <motion.div 
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute top-full left-0 bg-white text-gray-800 shadow-lg rounded-md mt-2 min-w-[150px] overflow-hidden"
                  >
                    <a 
                      href="/phongsu/le-gia-tien" 
                      className="block px-4 py-2 hover:bg-gray-100 transition"
                    >
                      Lễ Gia Tiên
                    </a>
                    <a 
                      href="/phongsu/tiec-cuoi" 
                      className="block px-4 py-2 hover:bg-gray-100 transition"
                    >
                      Tiệc Cưới
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            <li>
              <a href="/dich-vu" className="hover:text-gray-300 transition">
                Dịch Vụ
              </a>
            </li>

            <li>
              <a href="/lien-he" className="hover:text-gray-300 transition">
                Liên Hệ
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header