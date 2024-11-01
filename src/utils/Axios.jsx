import axios from "axios";

export const Instance = axios.create({
    baseURL:'https://www.googleapis.com/books/v1/'
})