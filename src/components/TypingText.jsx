import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

const words = ["NGOẠI CẢNH", "STUDIO", "PHIM TRƯỜNG"]; // Các từ cần thay đổi

const TypingText = ({ className }) => {
  const [index, setIndex] = useState(0); // Chỉ số của từ hiện tại
  const [subIndex, setSubIndex] = useState(0); // Chỉ số của ký tự hiện tại
  const [isDeleting, setIsDeleting] = useState(false); // Trạng thái: đang xóa hay đang gõ

  // Hàm xử lý việc gõ/xóa
  const handleType = useCallback(() => {
    const currentWord = words[index];
    
    // Nếu đang gõ
    if (!isDeleting && subIndex < currentWord.length) {
      setSubIndex(prev => prev + 1);
    } 
    // Nếu đã gõ xong và chưa xóa
    else if (!isDeleting && subIndex === currentWord.length) {
      setTimeout(() => setIsDeleting(true), 1500); // Chờ 1.5s rồi bắt đầu xóa
    } 
    // Nếu đang xóa
    else if (isDeleting && subIndex > 0) {
      setSubIndex(prev => prev - 1);
    } 
    // Nếu đã xóa xong
    else if (isDeleting && subIndex === 0) {
      setIsDeleting(false); // Chuyển sang gõ
      setIndex((prev) => (prev + 1) % words.length); // Chuyển sang từ tiếp theo
    }
  }, [index, subIndex, isDeleting]);

  useEffect(() => {
    // Tốc độ gõ/xóa
    let timeout;
    const typingSpeed = isDeleting ? 75 : 150; 
    
    timeout = setTimeout(handleType, typingSpeed);

    return () => clearTimeout(timeout);
  }, [handleType]);

  return (
    <motion.p className={className}>
      Chụp Ảnh Cưới{' '}
      <motion.span 
        key={index} 
        className="text-[#D80032] font-semibold inline-block relative" // Màu đỏ và vị trí
      >
        {words[index].substring(0, subIndex)}
        {/* Con trỏ nhấp nháy */}
        <motion.span 
            initial={{ opacity: 1 }} 
            animate={{ opacity: 0 }} 
            transition={{ yoyo: Infinity, duration: 0.5, ease: "linear" }}
            className="w-1 bg-[#D80032] inline-block h-full absolute"
        ></motion.span>
      </motion.span>
    </motion.p>
  );
};

export default TypingText;