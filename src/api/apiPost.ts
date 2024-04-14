// import { useMutation, UseMutationResult } from 'react-query';
// import axios from 'axios';

// interface PostDataParams {
//   url: string;
//   data: any; // 데이터의 구체적인 타입을 `any` 대신 적절한 타입으로 교체하세요.
// }

// // 데이터를 서버에 POST하는 함수
// const postData = async ({ url, data }: PostDataParams): Promise<any> => {
//   const response = await axios.post(url, { data });
//   return response.data;
// };

// // 데이터를 불러오는 커스텀 훅
// export const usePostData = (): UseMutationResult<any, unknown, PostDataParams, unknown> => {
//   return useMutation(postData);
// };

// // 사용법
// // import { usePostData } from '../api/apiPost';
// // const { mutate: sendPostData } = usePostData();
// // try {
// //     sendPostData(
// //         {
// //             url: `${process.env.REACT_APP_SERVER_URL}register`,
// //             data: form,
// //         },
// //         {
// //             onSuccess: (data: any) => { // onSuccess에서 반환되는 데이터의 타입을 정의

// //             },
// //             onError: (error: Error) => { // 에러 타입 정확히 명시
// //                 console.error('에러 발생:', error);
// //             },
// //         }
// //     );
// // } catch (error) {
// //     console.error('처리되지 않은 에러:', error);
// // }
