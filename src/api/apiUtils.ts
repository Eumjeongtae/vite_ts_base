// // apiUtils.ts
// import { useQuery, UseQueryResult } from 'react-query';
// import axios from 'axios';

// interface FetchDataParams {
//   queryKey: string[];
// }

// interface ApiResponse {
//   // API 응답 구조에 따라 타입을 정의하세요
//   // 예시:
//   id: number;
//   name: string;
// }

// const fetchData = async ({ queryKey }: FetchDataParams): Promise<ApiResponse> => {
//   const [url] = queryKey;
//   const { data } = await axios.get<ApiResponse>(url);
//   return data;
// };

// // 데이터를 불러오는 커스텀 훅
// export const useFetchData = (url: string): UseQueryResult<ApiResponse, Error> => {
//   return useQuery<ApiResponse, Error>([url], fetchData);
// };

// // 사용법
// // import { useFetchData } from '../api/apiUtils';
// //   const { data, isLoading, error } = useFetchData(
// //     `${process.env.REACT_APP_SERVER_URL}main`
// //   );

// // React 컴포넌트에서의 사용 예시
// // import React from 'react';

// // const DataComponent: React.FC = () => {
// //   const { data, isLoading, error } = useFetchData(`${process.env.REACT_APP_SERVER_URL}main`);

// //   if (isLoading) return <div>Loading...</div>;
// //   if (error) return <div>Error: {error.message}</div>;
// //   if (!data || data.length === 0) return <div>No data available</div>;

// //   return (
// //     <div>
// //       {/* 데이터 렌더링 로직 */}
// //       {data.name}
// //     </div>
// //   );
// // };

// // export default DataComponent;
