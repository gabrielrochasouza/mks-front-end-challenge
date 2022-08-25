import axios from "../node_modules/axios/index";


export const api = axios.create({
    baseURL:"https://mks-frontend-challenge-api.herokuapp.com/api/v1/"
}) 

