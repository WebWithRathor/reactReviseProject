import { Instance } from "../../utils/Axios";
import { load, loadBook } from "../reducers/BooksSlice";

export const loadBooks = (query) => async (dispatch, getState) => {
  try {
    const { data } = await Instance.get(`volumes?q=${query}&maxResults=20`);
    dispatch(load(data.items));
  } catch (error) {
    console.log(error);
  }
};


export const loadSingleBook = (id) => async (dispatch, getState) => {
  try {
    const { data } = await Instance.get(`volumes/${id}`);
    dispatch(loadBook(data));
  } catch (error) {
    console.log(error);
  }
};
