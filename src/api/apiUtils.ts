// // apiUtils.ts
import { useQuery,UseQueryResult } from 'react-query';
import axios from 'axios';

interface Pokemon {
    id: number;
    name: string;
    [key: string]: any;  // 알려지지 않은 다른 모든 프로퍼티는 any 타입으로 처리
}


const fetchData = async (url: string): Promise<any> => {
    const response = await axios.get(url);
    return response.data;
};

// // 데이터를 불러오는 커스텀 훅
export const useFetchData = (url: string): UseQueryResult<Pokemon, Error> => {
    return useQuery<Pokemon, Error>([url], () => fetchData(url));
};

