/** @format */

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

export { CheckObjectEmpty, CheckNumberWithCondition, CheckComment, EqualTwoNumber };
