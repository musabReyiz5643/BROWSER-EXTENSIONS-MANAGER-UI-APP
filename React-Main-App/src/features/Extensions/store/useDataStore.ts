import type { dataType } from "@/types/data";
import { create } from "zustand";

type DataStore = {
  data: dataType;
  active: "all" | "active" | "inactive";
  setActive: (name: "all" | "active" | "inactive") => void;
  toggleItem: (id: number) => void;
  setData: (data: dataType) => void;
  removeItem: (id: number) => void;
};

const useDataStore = create<DataStore>((set) => ({
  data: [],
  active: "all",
  setData: (data: dataType) => set({ data: data }),
  setActive: (name) => set({ active: name }),
  toggleItem: (id) =>
    set((state) => ({
      data: state.data.map((item) =>
        item.id === id ? { ...item, isActive: !item.isActive } : item,
      ),
    })),
  removeItem: (id) =>
    set((state) => ({
      data: state.data.filter((item) => item.id !== id),
    })),
}));

export default useDataStore;
