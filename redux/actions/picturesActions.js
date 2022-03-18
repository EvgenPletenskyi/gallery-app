import {GET_PICTURES, PICTURES_ERROR} from '../types';
import axios from 'axios';

export const getPictures = () => async dispatch => {
  const id = '896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043';
  const per_page = '18';
  try {
    const res = await axios.get(
      `https://api.unsplash.com/photos/?client_id=${id}&per_page=${per_page}`,
    );
    dispatch({
      type: GET_PICTURES,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: PICTURES_ERROR,
      payload: console.log(e),
    });
  }
};
