/** @format */

import { Method } from 'axios';

export interface IApi {
    method: Lowercase<Method>;
    url: string;
    payload?: any;
    params?: any;
    token?: boolean;
    host?: string;
    headers?: object;
}

export enum CODE_REQUEST {
    CODE_200 = 200,
    CODE_402 = 402,
}

export const parseCodeRequest = {
    [CODE_REQUEST.CODE_200]: 'handleRequestSuccess',
    [CODE_REQUEST.CODE_402]: 'handleExpireToken',
};
