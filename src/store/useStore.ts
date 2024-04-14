import {create} from 'zustand';
interface PageStoreState {
  currentPage: number
  changePage: (target: number) => void
}
const usePageStore = create<PageStoreState>(set => ({
  currentPage: 1,
  changePage: (target) => set({ currentPage: target }),
}));

export default usePageStore;

//currentPageStore.js