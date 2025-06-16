import React, { useState } from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [modalContent, setModalContent] = useState(null);

  const actors = [
    {
      id: 1,
      name: "Juan Carlos Valdivia",
      biography: "Director y actor boliviano conocido por su trabajo en el cine nacional.",
      knownFor: ["Zona Sur", "Jonás y la ballena rosada"],
      age: 56,
      nationality: "Boliviana",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbxZ_c1HsNgP1_QDkHV1jzjDBdIhdYVCK_tg&s"
    },
    {
      id: 2,
      name: "Paz Padilla",
      biography: "Actriz boliviana con una destacada carrera en teatro, cine y televisión.",
      knownFor: ["El cementerio de los elefantes", "Los viejos"],
      age: 45,
      nationality: "Boliviana",
      image: "https://imagenes.20minutos.es/files/image_990_556/uploads/imagenes/2025/02/27/paz-padilla-en-el-hormiguero.jpeg"
    },
    {
      id: 3,
      name: "Carla Ortiz",
      biography: "Actriz boliviana internacional, embajadora de UNICEF.",
      knownFor: ["The Green Ghost", "The 33"],
      age: 42,
      nationality: "Boliviana",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt5PGNEltkcYvkYYOZReoqshX8_VrbbGlKzw&s"
    },
    {
      id: 4,
      name: "Fernando Arze Echalar",
      biography: "Actor y director boliviano con amplia trayectoria en teatro y cine.",
      knownFor: ["Cuestión de fe", "El día que murió el silencio"],
      age: 50,
      nationality: "Boliviana",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI8OxsYy99wl5O3IVDMg04tX-537mxzZGNUw&s"
    },
    {
      id: 5,
      name: "Norka Paz",
      biography: "Actriz boliviana con destacada participación en cine y televisión.",
      knownFor: ["El cementerio de los elefantes", "Los viejos"],
      age: 48,
      nationality: "Boliviana",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhnZS7c4uRGgO78wudP_YMY1rai1hUsRvpulTTpy-XMRAEampyFdndYnyKp9GUzMTZlfKTHbBirPGMA1nzV6zAJC2rrGLe87ZkBRfcXwsM1KkHfI5iu29SjamM8zj9XWgV_Mqfjnmur8btt/s1600/norka_paz.jpg"
    }
  ];
  const movies = [
    { 
      id: 1, 
      title: "Zona Sur", 
      summary: "Película que explora las diferencias de clase en la sociedad paceña contemporánea.",
      year: 2009,
      director: "Juan Carlos Valdivia"
    },
    { 
      id: 2, 
      title: "Yawar Mallku", 
      summary: "Clásico del cine boliviano que denuncia la esterilización forzada de mujeres indígenas.",
      year: 1969,
      director: "Jorge Sanjinés"
    },
    { 
      id: 3, 
      title: "El Cementerio de los Elefantes", 
      summary: "Drama sobre la vida de los mineros en Bolivia.",
      year: 2019,
      director: "Tonchy Antezana"
    },
    { 
      id: 4, 
      title: "Vuelve Sebastiana", 
      summary: "Documental sobre la cultura Chipaya, considerada una de las más antiguas de América.",
      year: 1953,
      director: "Jorge Ruiz"
    },
    { 
      id: 5, 
      title: "Los Viejos", 
      summary: "Película que explora la vejez y la soledad en la sociedad boliviana.",
      year: 2011,
      director: "Martín Boulocq"
    }
  ];

  return (
    <div className="app-container">
      {/* Header */}
      <header className="app-header">
        <h1>CINEMATECA BOLIVIANA</h1>
      </header>

      {/* Navigation */}
      <nav className="app-nav">
        <button onClick={() => setCurrentPage('home')}>Principal</button>
        <button onClick={() => setCurrentPage('movies')}>Películas</button>
      </nav>

      {/* Main Content */}
      <main className="app-main">
        {currentPage === 'home' ? (
          <div className="home-page">
            <h2>Actores Bolivianos Destacados</h2>
            <div className="actors-grid">
              {actors.map(actor => (
                <div key={actor.id} className="actor-card" onClick={() => setModalContent(actor)}>
                  <div className="actor-image-container">
                    <img 
                      src={actor.image} 
                      alt={actor.name} 
                      onError={(e) => {
                        e.target.onerror = null; 
                        e.target.src = 'https://via.placeholder.com/150?text=Actor+Boliviano';
                      }}
                    />
                  </div>
                  <h3>{actor.name}</h3>
                  <p><strong>Edad:</strong> {actor.age} años</p>
                  <p><strong>Conocido por:</strong> {actor.knownFor.join(', ')}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="movies-page">
            <h2>Películas Bolivianas</h2>
            <div className="movies-list">
              {movies.map(movie => (
                <button
                  key={movie.id}
                  className="movie-button"
                  onClick={() => setModalContent(movie)}
                >
                  {movie.title} ({movie.year})
                </button>
              ))}
            </div>
          </div>
        )}
      </main>

      
      <div className="ad-banner">
        INF122 - Programación Web II
      </div>

      
      <footer className="app-footer">
        [Roger Mauricio Kelca Camata] - Cinemateca Boliviana © {new Date().getFullYear()}
      </footer>

      
      {modalContent && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-modal" onClick={() => setModalContent(null)}>×</button>
            
            {'knownFor' in modalContent ? (
             
              <>
                <div className="modal-header">
                  <div className="modal-image">
                    <img 
                      src={modalContent.image} 
                      alt={modalContent.name}
                      onError={(e) => {
                        e.target.onerror = null; 
                        e.target.src = 'https://via.placeholder.com/300?text=Actor+Boliviano';
                      }}
                    />
                  </div>
                  <div className="modal-title">
                    <h2>{modalContent.name}</h2>
                    <p><strong>Nacionalidad:</strong> {modalContent.nationality}</p>
                    <p><strong>Edad:</strong> {modalContent.age} años</p>
                  </div>
                </div>
                <div className="modal-body">
                  <h3>Biografía</h3>
                  <p>{modalContent.biography}</p>
                  <h3>Conocido por:</h3>
                  <ul>
                    {modalContent.knownFor.map((movie, index) => (
                      <li key={index}>{movie}</li>
                    ))}
                  </ul>
                </div>
              </>
            ) : (
              // Modal para películas
              <>
                <h2>{modalContent.title} ({modalContent.year})</h2>
                <p><strong>Director:</strong> {modalContent.director}</p>
                <h3>Sinopsis</h3>
                <p>{modalContent.summary}</p>
              </>
            )}
          </div>
        </div>
      )}
    </div> 
  );
}

export default App;