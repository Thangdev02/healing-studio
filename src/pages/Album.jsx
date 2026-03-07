import React from 'react'
import { useParams } from 'react-router-dom'
import AlbumDetail from '../components/AlbumDetail'
import { preweddingAlbums } from '../data/preweddingImages'

const Album = () => {
  const { id } = useParams()
  
  // Find album from all categories
  let album = null
  Object.values(preweddingAlbums).forEach(category => {
    const found = category.find(a => a.id === id)
    if (found) album = found
  })

  if (!album) {
    return (
      <div className="py-16 text-center">
        <h1 className="text-3xl font-bold">Album không tìm thấy</h1>
      </div>
    )
  }

  return <AlbumDetail album={album} />
}

export default Album