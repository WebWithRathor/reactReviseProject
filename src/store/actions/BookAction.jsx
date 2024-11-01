import { Instance } from "../../utils/Axios";
import { load } from "../reducers/BooksSlice";

export const loadBooks = () => async (dispatch,getState) => {
    try {
        const {data} = await Instance.get("volumes?q=dragon");
        dispatch(load(data.items));
      } catch (error) {
        console.log(error);
      }
};

