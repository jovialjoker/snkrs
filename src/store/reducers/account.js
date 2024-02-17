import {
  SAVE_CREDENTIALS, SIGN_OUT
} from './accountActions';

const initialState = {
  isAuth: false,
  name: "",
};

export const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_CREDENTIALS:
      sessionStorage.setItem("isAuth", "true")
      sessionStorage.setItem("name", action.payload.name)
      sessionStorage.setItem("id", action.payload.id)
      return { ...state, name: action.payload.name, isAuth: true };
    case SIGN_OUT:
      sessionStorage.removeItem("isAuth")
      sessionStorage.removeItem("name")
      sessionStorage.removeItem("id")
      return { ...state, name: "", isAuth: false };
    default:
      return state;
  }
}