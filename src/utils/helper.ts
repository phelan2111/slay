const CheckObjectEmpty = (object: any, string: string) => {
    if (object === undefined || object === null) {
        return string;
    }
    return object;
}

export {CheckObjectEmpty}