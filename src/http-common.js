import axios from "axios";

export const httpCM = axios.create({
    baseURL: 'http://localhost/english-for-you/api',
    headers: {'content-type': 'application/x-www-form-urlencoded'}
})