import { useParams } from 'react-router';

export const AlbumView = ({ albums }) => {
  // get the id from the path routes params
  const { id } = useParams();

  const album = albums.find((album) => {
    return album.id === id;
  });

  if (!album) {
    return <div>It seems this album doesn't exist in our library.</div>;
  }

  return <div>Hello {album.name}</div>;
};
