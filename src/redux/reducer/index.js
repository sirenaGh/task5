//users
import USER from "../action/type";
const initalState = {
  usersData: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initalState, action) => {
  switch (action.type) {
    case USER.LOAD:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case USER.LOAD_SUCCESS:
      return {
        ...state,
        usersData: action.usersData,
        isLoading: false,
      };
    default:
      return state;
  }
};
 
//courses
import FETCH_COURSES from '../action/type';
const initialState = {
  courses: [],
};
const coursesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSES:
      return {
        ...state,
        courses: action.payload,
      };
    default:
      return state;
  }
};

export default coursesReducer;
