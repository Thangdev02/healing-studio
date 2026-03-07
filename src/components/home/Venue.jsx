import React from 'react'
import { motion } from 'framer-motion'

const Venue = () => {
  const images = {
    img1: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800",
    img2: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800",
    img3: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800",
    img4: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800",
    img5: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800",
    img6: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800"
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="relative flex gap-6 items-start mb-24">
          <div className="flex flex-col gap-6" style={{ width: '280px' }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="overflow-hidden  shadow-lg"
              style={{ height: '227px' }}
            >
              <img
                src={images.img1}
                alt=""
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="overflow-hidden  shadow-lg"
              style={{ height: '340px' }}
            >
              <img
                src={images.img4}
                alt=""
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
          </div>

          <div
            className="flex flex-col gap-6 flex-1 relative"
            style={{ top: '-60px' }} // 👈 chỉnh giống Figma
          >
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="overflow-hidden "
              style={{ height: '340px' }}
            >
              <img
                src={images.img2}
                alt=""
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="overflow-hidden "
              style={{ height: '340px' }}
            >
              <img
                src={images.img5}
                alt=""
                className="w-90 h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
          </div>

          {/* ===== CỘT PHẢI (CAO HƠN GIỮA) ===== */}
          <div
            className="flex flex-col gap-6 relative"
            style={{ width: '320px', top: '-60px' }} // 👈 cao hơn cột giữa
          >
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
              className="overflow-hidden  shadow-lg"
              style={{ height: '340px' }}
            >
              <img
                src={images.img3}
                alt=""
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              viewport={{ once: true }}
              // Bỏ flex-col và gap-6 ở đây, sử dụng position absolute/relative trên cha.
              // Chúng ta cần đưa ảnh này ra khỏi luồng tài liệu để nó không ảnh hưởng đến Cột 3.
              className="overflow-hidden absolute right-0" // <-- QUAN TRỌNG: absolute right-0
              style={{ 
                height: '280px', 
                width: '150%',
                bottom: '-300px', 
                zIndex: 10, 
                transform: 'translateX(-40%)'
                
              }}
            >
              <img
                src={images.img6}
                alt=""
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" 
              />
            </motion.div>
          </div>

        </div>

        

      </div>
    </section>
  )
}

export default Venue
