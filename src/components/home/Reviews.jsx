import React from 'react';
import Container from '../Container';
// Import icon từ react-icons/fa hoặc tương tự
import { FaHeart, FaStar, FaQuoteRight } from 'react-icons/fa';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400",
      title: "Chụp ảnh đẹp tại gia",
      text: "Chúng mình đã có trải nghiệm tuyệt vời khi chụp ảnh cưới tại Healing Studio. Phong cách chụp rất tự nhiên và đẹp.",
      icon: FaHeart // Gán icon cụ thể
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=400",
      title: "Dịch vụ tận tâm",
      text: "Đội ngũ nhiếp ảnh rất chuyên nghiệp, tận tình hướng dẫn tạo dáng. Ảnh sau khi chỉnh sửa rất lung linh.",
      icon: FaHeart 
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400",
      title: "Kỷ niệm đáng nhớ",
      text: "Cảm ơn Healing Studio đã tạo ra những khoảnh khắc tuyệt vời nhất cho ngày trọng đại của chúng mình.",
      icon: FaHeart
    }
  ];

  return (
    // Đổi màu nền nhẹ nhàng hơn (ví dụ: gray-50) để làm nổi bật các card review
    <section className="py-36 bg-gray-50"> 
      <Container>
        {/* Tiêu đề */}
        <h2 className="text-5xl font-serif text-center mb-4 text-[#380709]">
          Khách Hàng Nói Gì
        </h2>
        <p className="text-lg text-center text-gray-600 mb-16">
          Những đánh giá chân thành từ các cặp đôi đã trải nghiệm dịch vụ.
        </p>
        
        <div className="grid md:grid-cols-3 gap-10">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              style={{ width: '420px' }}
              className="
                relative 
                bg-white 
                shadow-xl 
                border-gray-100 
                p-12 
                hover:shadow-2xl 
                transition 
                duration-300
              "
            >
              {/* Ảnh Review */}
              <img 
                src={review.image || "/placeholder.svg"} 
                alt={review.title}
                // Điều chỉnh kích thước ảnh để nó không quá chiếm diện tích và có góc bo nhẹ
                className="w-full h-56 object-cover  mb-6 shadow-md"
              />
              
              <div className="px-2 pb-2">
                {/* Icon và Title */}
                <div className="flex items-center mb-3">
                  {/* Sử dụng React Icon với màu cam chủ đạo */}
                  <review.icon className="text-red-600 w-6 h-6 mr-3 flex-shrink-0" />
                  
                  {/* Title đã bỏ emoji */}
                  <h3 className="text-xl font-bold text-[#380709]">{review.title}</h3>
                </div>

                {/* Text Review */}
                <p className="text-gray-700 leading-relaxed italic border-l-4 border-red-600 pl-4 pt-1">
                  "{review.text}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Reviews;