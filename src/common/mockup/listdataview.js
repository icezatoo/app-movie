import { api_Key } from '../../common/api/connect';

const dataviewmovie = [
  {
    id: 1,
    header: 'NowPlaying',
    apipath: `/movie/now_playing?api_key=${api_Key}&language=en-US&page=1`
  },
  {
    id: 2,
    header: 'Popular',
    apipath: `/movie/popular?api_key=${api_Key}&language=en-US&page=1`
  },
  {
    id: 3,
    header: 'TopRated',
    apipath: `/movie/top_rated?api_key=${api_Key}&language=en-US&page=1`
  },
  {
    id: 4,
    header: 'Upcoming',
    apipath: `/movie/upcoming?api_key=${api_Key}&language=en-US&page=1`
  }
];

export { dataviewmovie };
