import React from 'react'
import Container from './Container'

const AlbumDetail = ({ album }) => {
  return (
    <Container className="py-16">
      <h1 style={{fontFamily:'Cormorant', fontSize:'44px'}} className="text-4xl font-bold text-center my-24">{album.title}</h1>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {album.images.map((image, index) => (
          <div 
            key={index} 
            className={`overflow-hidden rounded-lg shadow-lg ${
              index === 0 ? 'col-span-2 row-span-2' : ''
            }`}
          >
            <img 
              src={image || "/placeholder.svg"} 
              alt={`${album.title} ${index + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </Container>
  )
}

export default AlbumDetail