import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Container from '../components/Container'
import { filmAlbums } from '../data/filmImages'

const Film = () => {
  const { type } = useParams()
  const films = filmAlbums[type] || []
  const [selectedFilm, setSelectedFilm] = useState(null)

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
            <div 
                  onClick={() => setSelectedFilm(film)}
             key={film.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={film.coverImage || "/placeholder.svg"}
                alt={film.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{film.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Modal */}
      {selectedFilm && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedFilm(null)}
        >
          <div
            className="bg-transparent rounded-xl overflow-hidden w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b">
              <div>
                <h3 className="text-lg font-bold text-white">{selectedFilm.title}</h3>
              </div>
              <button
                onClick={() => setSelectedFilm(null)}
                className="text-gray-400 hover:text-gray-700 text-2xl leading-none"
              >
                &times;
              </button>
            </div>

            {/* Video */}
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src={selectedFilm.videoUrl + '?autoplay=1'}
                title={selectedFilm.title}
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Film