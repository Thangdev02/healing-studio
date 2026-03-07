import React from 'react'
import { motion } from 'framer-motion'
import Container from '../Container'

const WhyChooseUs = () => {
  return (
    <Container>
      <section className="py-36 bg-white font-serif">
        <div className="mx-auto max-w-[1440px] px-6">
          <motion.h2
            className="text-5xl text-center mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Tại Sao Nên Chọn Healing Studio?
          </motion.h2>

          {/* 3 / 7 */}
          <div className="grid grid-cols-10 items-center gap-10">
            {/* TEXT 3 */}
            <motion.div
              className="col-span-3"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {/* block trên – canh giữa, cùng width */}
              <div className="max-w-[360px] mx-auto text-center">
                <p className="text-[26px] leading-[1.4]">
                  Trải nghiệm làm việc với Studio<br />
                  <span className="uppercase tracking-wide font-bold">
                    DỊCH VỤ CƯỚI HÀNG ĐẦU
                  </span><br />
                  cho các đám cưới sang trọng,<br />
                  thân mật và truyền thống tại<br />
                  <span className="text-red-600 font-semibold">Việt Nam.</span>
                </p>
              </div>

              {/* block dưới – cùng width, sát lề phải */}
              <div className="max-w-[360px] ml-auto text-right mr-8">
                <p className="text-[26px] leading-[1.4]">
                  Với kinh nghiệm đầy dặn làm<br />
                  việc cùng các nhà tổ chức đám<br />
                  cưới, nhà cung cấp dịch vụ và<br />
                  các chuyên gia sáng tạo hàng đầu<br />
                  Việt Nam, chúng tôi là đối tác<br />
                  đáng tin cậy cho các đám cưới<br />
                  cao cấp tại những địa điểm nổi<br />
                  tiếng như Rạch Giá, An Giang,<br />
                  Phú Quốc.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="col-span-7"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="./whyc.png"
                alt="Wedding"
                className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </Container>
  )
}

export default WhyChooseUs
