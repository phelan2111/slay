/** @format */

import { IApi } from './type';
import axios, { AxiosRequestConfig } from 'axios';

const axiosInstance = axios.create({
    timeout: 10_000,
});

const requestApi = async ({
    method,
    params,
    payload,
    url,
    headers,
    host,
    token,
}: IApi) => {
    const options: AxiosRequestConfig = {
        method,
        headers: {
            'Content-Type': 'application/json',
            ...headers,
        },
        baseURL: host,
        url,
        data: payload,
        params,
    };

    return await axiosInstance.request(options);
};

export default requestApi;
