import {
  REQUEST_MENU,
  RECEIVE_MENU
} from '../../constants/BaseUI/Sidebar';
import { cloneDeep, findIndex } from 'lodash';

const initialState = {
  isFetching: false,
  menuItems: [],
  searchString: ''
};

export default function sideBar(state = initialState, action=null) {
  switch (action.type) {

    case REQUEST_MENU:
      return {
        ...state,
        isFetching: true
      };

    case RECEIVE_MENU:
      return {
        ...state,
        isFetching: false,
        menuItems: action.menuItems
      };

    default:
      return state
  }
}
