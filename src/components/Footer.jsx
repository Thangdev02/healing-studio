import React from 'react';
import Container from './Container';
import { FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa'; 
import { MdEmail, MdPhone } from 'react-icons/md';

const Footer = () => {
  return (
    // Đặt nền đen tuyền bg-black
    <footer className="bg-black text-white pb-16">
        
        {/* ======================================================= */}
        {/* PHẦN 1: KẾT NỐI VỚI HEALING STUDIO (BACKGROUND FULL WIDTH) */}
        {/* ======================================================= */}
        <div 
          className="
            relative 
            h-[600px] 
            mb-16 
            overflow-hidden
          "
        >
          {/* Lớp phủ ảnh nền (Background Image) - Đảm bảo tràn màn hình */}
          <div 
            className="absolute inset-0 bg-cover bg-center  " 
            style={{ 
              backgroundImage: "url('./images/footer.jpg')",
            }} 
          >
            {/* Lớp phủ màu tối */}
            <div className="absolute inset-0 bg-black opacity-40"></div>
          </div>

          {/* Nội dung (Text và Icons) - Sử dụng Container để căn giữa và giới hạn chiều rộng */}
          <Container>
            <div className="relative z-10 h-[500px] flex flex-col items-end justify-center">
              <div className='d-flex flex-col items-center justify-center text-center'>
                
              <h2 className="text-4xl font-serif mb-8 ml-4">
                KẾT NỐI VỚI HEALING STUDIO
              </h2>
              
              {/* Social Icons trên ảnh nền */}
              <div className="flex gap-8 text-white justify-center">
                <a href="#" className="hover:text-[#FFB86B] transition">
                  <FaInstagram size={28} />
                </a>
                <a href="#" className="hover:text-[#FFB86B] transition">
                  <FaYoutube size={28} />
                </a>
                <a href="#" className="hover:text-[#FFB86B] transition">
                  <FaFacebookF size={28} />
                </a>
              </div>

              </div>
            </div>
          </Container>
        </div>


        {/* ======================================================= */}
        {/* PHẦN 2: THÔNG TIN CHI TIẾT (BÊN TRONG CONTAINER) */}
        {/* ======================================================= */}
        <Container>
          {/* Hàng dưới - Thông tin chi tiết */}
          <div className="grid md:grid-cols-3 gap-10 border-t border-gray-800 pt-16">
            
            {/* Cột 1: LIÊN HỆ */}
            <div className='flex flex-col'>
              <h4 className="font-serif text-lg mb-4 tracking-wider">LIÊN HỆ</h4>
              <ul className="text-sm text-gray-400 space-y-3">
                <li className='flex items-center'>
                  <MdPhone className='mr-2 text-base'/> 
                  035.560.3038 (Hoàng Anh)
                </li>
                <li className='flex items-center'>
                  <MdEmail className='mr-2 text-base'/> 
                  healingstudio86@gmail.com
                </li>
              </ul>
            </div>

            {/* Cột 2: HEALING STUDIO (Center) */}
            <div className="text-center flex justify-center items-start">
              <h3 className="font-serif text-4xl tracking-widest">
                healing.studio
              </h3>
            </div>

            {/* Cột 3: LINKS */}
            <div className='flex flex-col items-end text-right'>
              <h4 className="font-serif text-lg mb-4 tracking-wider">Links</h4>
              <ul className="text-sm text-gray-400 space-y-2">
                <li className="hover:text-white transition cursor-pointer">Lake District Wedding Videos</li>
                <li className="hover:text-white transition cursor-pointer">Wedding Venue Tours</li>
                <li className="hover:text-white transition cursor-pointer">Free Speeches Guide</li>
                <li className="hover:text-white transition cursor-pointer">Ios Island Weddings</li>
              </ul>
            </div>
          </div>

          {/* Copyright (Giữ nguyên) */}
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            © 2025 healing.studio. All rights reserved.
          </div>
        </Container>
    </footer>
  );
};

export default Footer;