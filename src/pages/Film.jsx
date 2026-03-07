import React from 'react'
import { useParams } from 'react-router-dom'
import Container from '../components/Container'
import { filmAlbums } from '../data/filmImages'

const Film = () => {
  const { type } = useParams()
  const films = filmAlbums[type] || []

  const titles = {
    'truyen-thong': 'TRUYỀN THỐNG',
    'phong-su': 'PHÓNG SỰ'
  }

  return (
    <div className="py-16">
      <Container>
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">FILM CƯỚI</h1>
          <p className="text-xl text-gray-600">{titles[type]}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {films.map((film) => (
            <div key={film.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={film.coverImage || "/placeholder.svg"} 
                alt={film.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{film.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{film.date}</p>
                <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition">
                  Xem Video
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Film