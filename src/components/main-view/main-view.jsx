import { AlbumList } from '../album-list/album-list';

export const MainView = ({ albums }) => {
  return <AlbumList albums={albums}></AlbumList>;
};
