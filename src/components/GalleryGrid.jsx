import React from 'react'
import { Link } from 'react-router-dom'
import Container from './Container'

const GalleryGrid = ({ albums }) => {
  return (
    <Container className="py-20">
      <div 
        className="
          grid 
          // Sửa: Chỉ 2 cột trên màn hình lớn
          grid-cols-1 
          md:grid-cols-3
          // Đặt chiều rộng tối đa cho lưới (ví dụ: max-w-5xl) và căn giữa
          max-w-5xl 
          mx-auto 
          gap-x-12 // Khoảng cách giữa các cột
          gap-y-16 // Khoảng cách giữa các hàng
        "
      >
        {albums.map((album, index) => {
            // Xác định xem album này có nằm ở CỘT 2 (index lẻ) hay không
            // Các item có index 1, 3, 5, ... sẽ là cột 2
            const isSecondColumn = (index % 2) === 1; 

            return (
                <Link 
                    key={album.id} 
                    to={`/album/${album.id}`}
                    className={`
                        group 
                        flex 
                        flex-col 
                        relative 
                        // Áp dụng dịch chuyển lên trên cho các item ở vị trí Cột 2
                        duration-500
                    `}
                >
                    <div className="overflow-hidden rounded-lg shadow-xl">
                        <img 
                            src={album.coverImage || "/placeholder.svg"} 
                            alt={album.title}
                            // Giữ chiều cao cố định
                            className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    
                    {/* Thông tin Album */}
                    <div className="mt-6 text-center">
                        <h3 className="text-2xl font-serif text-black">{album.title}</h3>
                    </div>
                </Link>
            );
        })}
      </div>
    </Container>
  )
}

export default GalleryGrid