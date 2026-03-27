import React from 'react'
import { motion } from 'framer-motion'
import Container from '../Container'

const WhyChooseUs = () => {
  return (
    <Container>
      <section className="py-32 bg-[#f7f5f3] font-serif">
        <div className="mx-auto max-w-[1440px] px-6">
          <motion.h2
            className="text-4xl text-center mb-2 "
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{fontWeight:'bolder'}}
          >
            Rach Gia Wedding Photographer
          </motion.h2>
            <motion.h2
            className="text-3xl text-center mb-14"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
           Điều làm nên Healing Wedding?
          </motion.h2>

          {/* 3 / 7 */}
          <div className="grid grid-cols-12 items-center gap-10">
            {/* TEXT 3 */}
            <motion.div
              className="col-span-6"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {/* block trên – canh giữa, cùng width */}
              {/* <div className="max-w-[360px] mx-auto text-right">
                <p className="text-[22px] leading-[1.4]">
                  Trải nghiệm làm việc với Studio<br />
                  <span className="uppercase tracking-wide font-bold">
                    DỊCH VỤ CƯỚI HÀNG ĐẦU
                  </span><br />
                  cho các đám cưới sang trọng,<br />
                  thân mật và truyền thống tại<br />
                  <span className="text-red-600 font-semibold">Việt Nam.</span>
                </p>
              </div> */}

              {/* block dưới – cùng width, sát lề phải */}
              <div className=" ml-auto text-left ">
                <p className="text-[20px] leading-[1.4] mb-8">
                <span style={{fontWeight:'bolder'}}>Healing Wedding </span>  được xây dựng từ một niềm tin rất rõ ràng ảnh cưới không chỉ để đẹp, mà để giữ lại cảm xúc theo cách chân thật nhất. Studio theo đuổi phong cách chụp tự nhiên, tinh tế và giàu chiều sâu, nơi ánh sáng, màu sắc và mọi thứ diễn ra một cách có nhịp điệu. Cảm xúc trở thành điều nổi bật nhất trong từng khung hình. Với Healing, một bộ ảnh cưới không chỉ là hình đẹp, mà là ký ức có thể chạm lại sau nhiều năm.
                </p>
              </div>
               <div className="ml-auto text-left ">
                <p className="text-[20px] leading-[1.4]">
Đứng sau Healing là <span style={{fontWeight:'bolder'}}>Founder Nguyễn Hoàng Anh</span>— người không xem mình chỉ là một nhiếp ảnh gia, mà là người lắng nghe và kể lại câu chuyện của từng cặp đôi qua hình ảnh. Với cách làm việc nhẹ nhàng, tinh tế và đề cao cảm xúc thật, Nguyễn Hoàng Anh không cố gắng “tạo ra” một bộ ảnh, mà giúp bạn được là chính mình trong từng khung hình. Và cũng chính vì vậy, mỗi bộ ảnh tại Healing không giống nhau bởi mỗi câu chuyện tình yêu đều được nhìn và kể lại theo một cách rất riêng.                </p>
              </div>
            </motion.div>
                <div className='cold-span-1'></div>
            <motion.div
              className="col-span-4"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="./images/whychoiceus.JPG"
                alt="Wedding"
                className="w-full h-[600px] object-cover  shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </Container>
  )
}

export default WhyChooseUs
