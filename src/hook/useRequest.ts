/** @format */

import requestApi from 'api/request';
import { ResponseCode } from 'api/responseCode';
import { IApi } from 'api/type';
import { useQuery } from 'react-query';
import { LoggerService } from 'utils/logger';

const useRequest = (
    { method, params, payload, url, headers, host, token }: IApi,
    func: Record<string, Function>,
    key?: string
) => {
    const rq = useQuery({
        queryKey: key,
        queryFn: async () => {
            return await requestApi({ method, url, payload, params, headers });
        },
        onSuccess: (data) => {
            ResponseCode(data, func);
        },
        onError: (err: any) => {
            LoggerService.error('useRequest', err.tostring());
        },
    });

    return rq;
};

export default useRequest;
