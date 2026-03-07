import React from 'react'
import { useParams } from 'react-router-dom'
import GalleryGrid from '../components/GalleryGrid'
import { preweddingAlbums } from '../data/preweddingImages'
import Container from '../components/Container'

const PreWedding = () => {
  const { type } = useParams()
  const albums = preweddingAlbums[type] || []

  const titles = {
    'stu': 'STUDIO',
    'ngoai-canh': 'NGOẠI CẢNH',
    'album': 'ALBUM'
  }

  // Lấy tiêu đề chính
  const mainTitle = titles[type] || 'PREWEDDING'

  return (
    <div className="bg-white">
      {/* ================= BANNER SECTION ================= */}
      <div 
        className="
          relative 
          h-[400px] 
          flex 
          flex-col 
          items-center 
          justify-center 
          text-center 
          overflow-hidden
        "
      >
        {/* Ảnh nền Full Width (Giống footer, giả định có ảnh) */}
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: "url('/preWedding.png')" }} 
        >
          {/* Lớp phủ màu tối nhẹ */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        {/* Nội dung Banner */}
        <Container className="relative z-10 text-white">
          <h1 className="text-xl font-medium mb-2 tracking-[0.3em]">
            PREWEDDING
          </h1>
          {/* Tiêu đề chính nằm dưới */}
          <p className="text-5xl font-serif mb-4">
            {mainTitle}
          </p>
          <p className="text-lg opacity-80 max-w-xl mx-auto">
            Chào mừng đến với bộ ảnh cưới trước hôn lễ của Healing Studio tại Việt Nam.
          </p>
        </Container>
      </div>
      {/* ================= END BANNER SECTION ================= */}

      {/* GalleryGrid sẽ nằm ngay dưới banner */}
      <GalleryGrid albums={albums} />
    </div>
  )
}

export default PreWedding