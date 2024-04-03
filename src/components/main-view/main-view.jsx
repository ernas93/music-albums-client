import { useEffect, useState } from 'react';

export const MainView = () => {
  const [album, setAlbum] = useState([]);

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
            ratings: album.Ratings,
          };
        });
        setAlbum(albumsFromApi);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <div>Hello</div>;
};
