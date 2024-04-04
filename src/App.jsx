import { useState, useEffect } from 'react';
import './App.css';
import { MainView } from './components/main-view/main-view';
import { AlbumView } from './components/album-view/album-view';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/albums')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const albumsFromApi = data.map((album) => {
          return {
            id: album._id,
            name: album.AlbumName,
            artist: album.ArtistName,
            image: album.ImagePath,
            releaseDate: album.ReleaseDate,
            ratings: album.Ratings,
          };
        });
        setAlbums(albumsFromApi);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainView albums={albums}></MainView>}></Route>
        <Route
          path="/album/:id"
          element={<AlbumView albums={albums}></AlbumView>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
