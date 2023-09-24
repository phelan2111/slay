/** @format */

export const ResponseCode = (data: any, func: Record<string, Function>) => {
    try {
        func[data.code](data);
    } catch (error) {
        throw error;
    }
};
