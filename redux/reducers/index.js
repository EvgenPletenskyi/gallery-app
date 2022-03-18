import {combineReducers} from 'redux';
import PictureReducer from './PicturesReducer';

export default combineReducers({
  pictures: PictureReducer,
});
