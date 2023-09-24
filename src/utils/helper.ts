/** @format */
import { v4 as uuidv4 } from 'uuid';
import Crypto from 'crypto-js';
import Jsencrypt from 'jsencrypt';
import dayjs from 'dayjs';

const CheckObjectEmpty = (object: any, string: string) => {
    if (object === undefined || object === null) {
        return string;
    }
    return object;
};

const CheckNumberWithCondition = (number: number, condition: number) => {
    if (number > condition) {
        return true;
    }
    return false;
};

const CheckComment = (comment: number) => {
    if (comment > 3) {
        return comment;
    }
    return null;
};

const EqualTwoNumber = (number1: number, number2: number) => {
    if (number1 === number2) {
        return true;
    }
    return false;
};

const randomKey = (): string => {
    return uuidv4();
};

const hashSHA256 = (data: any): string => {
    const hash = Crypto.SHA256(data).toString();

    return hash;
};

const hashRSA = (data: any): string => {
    const key = '';
    const jsencrypt = new Jsencrypt();

    jsencrypt.setPublicKey(key);
    const encryption = jsencrypt.encrypt(data).toString();

    return encryption;
};

const hashPassword = (data: any): string => {
    const hash = hashRSA(hashSHA256(data));

    return hash;
};

const isEmpty = (value: any): boolean => {
    return (
        typeof value === 'undefined' ||
        value === null ||
        value === '' ||
        value.length === 0
    );
};

const removeObjectEmpty = (obj: any): any => {
    Object.keys(obj).forEach((key) => {
        if (isEmpty(obj[key])) {
            delete obj[key];
        }
    });
    return obj;
};

const convertToDate = (milliseconds: number) => {
    const date = new Date(milliseconds);
    return date;
};

const formatDate = (time: number): string => {
    return dayjs(time).format('DD-MM-YYYY');
};

const formatDateFull = (time: number): string => {
    return dayjs(time).format('DD-MM-YYYY HH:mm:ss');
};

const convertToMilliseconds = (date: string) => {
    const milliseconds = new Date(date).getTime();
    return milliseconds;
};

const returnImagesDefault = (
    array1: Array<{ id: number; src: string }>,
    array2: Array<{ id: number; src: string }>
) => {
    return array1.filter((itemCreateBaseURL) =>
        array2.find((itemDefault) => itemDefault.id === itemCreateBaseURL.id)
    );
};

const isEmail = (email: string) => {
    const regex = new RegExp(/^[a-z0-9]+@[a-z]+\.[a-z]{2,5}$/g);
    return regex.test(email.toLowerCase());
};

export {
    CheckObjectEmpty,
    CheckNumberWithCondition,
    CheckComment,
    EqualTwoNumber,
    randomKey,
    hashRSA,
    hashPassword,
    removeObjectEmpty,
    convertToDate,
    formatDate,
    formatDateFull,
    convertToMilliseconds,
    returnImagesDefault,
    isEmail,
    isEmpty,
};
