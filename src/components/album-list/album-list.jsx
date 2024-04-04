import { AlbumCard } from '../album-card/album-card';

export const AlbumList = ({ albums }) => {
  return (
    <div>
      {albums.map((album) => {
        return <AlbumCard album={album}></AlbumCard>;
      })}
    </div>
  );
};
