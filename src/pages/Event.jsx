import React from 'react'
import { useParams } from 'react-router-dom'
import GalleryGrid from '../components/GalleryGrid'
import { eventAlbums } from '../data/eventImages'
import Container from '../components/Container'

const Event = () => {
  const { type } = useParams()
  const albums = eventAlbums[type] || []

  const titles = {
    'le-gia-tien': 'LỄ GIA TIÊN',
    'tiec-cuoi': 'TIỆC CƯỚI'
  }

  return (
    <div className="py-16">
      <Container>
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">PHÓNG SỰ</h1>
          <p className="text-xl text-gray-600">{titles[type]}</p>
        </div>
      </Container>
      <GalleryGrid albums={albums} />
    </div>
  )
}

export default Event