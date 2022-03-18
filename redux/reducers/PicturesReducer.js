import {GET_PICTURES} from '../types';

const initialState = {
  pictures: [],
  loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PICTURES:
      return {
        ...state,
        pictures: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
