import { create } from "zustand";

const useAuthStore = create((set) => ({
  auth: false,
  login: () => set((state) => ({ auth: (state.auth = true) })),
}));

export default useAuthStore;
