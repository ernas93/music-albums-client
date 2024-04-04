import { useEffect, useState } from 'react';
import { AlbumList } from '../album-list/album-list';

export const MainView = () => {
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

  return <AlbumList albums={albums}></AlbumList>;
};
