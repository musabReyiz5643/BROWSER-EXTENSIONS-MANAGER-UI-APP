import { cn } from "@/utils/cn";
import { useQuery } from "@tanstack/react-query";
import { create } from "zustand";
import { useEffect } from "react";

// ✅ 1. Store dışarıda
type StoreProps = {
  jsonData: any[];
  filter: "all" | "inActive" | "active";
  setData: (data: any[]) => void;
  setActive: (id: number) => void;
  setFilter: (filter: "all" | "inActive" | "active") => void;
};

const useStore = create<StoreProps>((set) => ({
  jsonData: [],
  filter: "all",
  setData: (data) => set({ jsonData: data }),
  setActive: (id: number) =>
    set((state) => ({
      jsonData: state.jsonData.map((element) =>
        element.id === id
          ? { ...element, isActive: !element.isActive }
          : element,
      ),
    })),
  setFilter: (filter: "all" | "inActive" | "active") => set({ filter: filter }),
}));

const Playground = () => {
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  // ✅ 2. Tüm hook'lar üstte
  const { isLoading, error, data } = useQuery({
    queryKey: ["testData"],
    queryFn: async () => {
      const res = await fetch("/data/data.json");
      if (!res.ok) throw new Error("There is a problem");
      return res.json();
    },
  });

  const { setData, jsonData, setActive, filter, setFilter } = useStore();

  const filteredData = jsonData.filter((element) => {
    if (filter === "active") return element.isActive;
    if (filter === "inActive") return !element.isActive;
    return element;
  });

  useEffect(() => {
    if (data) setData(data);
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error {error.message}</div>;

  return (
    <div
      className="w-full min-h-screen bg-gray-800 flex items-center justify-center text-white p-5 flex-col "
      style={{
        background: "var(--color-background)",
      }}
    >
      <button
        type="button"
        className="px-4 py-1 bg-surface cursor-pointer"
        onClick={toggleTheme}
      >
        Active Mode
      </button>

      <div className="w-full flex items-center justify-end gap-3 ">
        <button
          type="button"
          className="bg-emerald-500 text-white rounded-xl px-4 py-1 cursor-pointer"
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          type="button"
          className="bg-emerald-500 text-white rounded-xl px-3 py-1 cursor-pointer"
          onClick={() => setFilter("active")}
        >
          Active
        </button>
        <button
          type="button"
          className="bg-emerald-500 text-white rounded-xl px-3 py-1 cursor-pointer"
          onClick={() => setFilter("inActive")}
        >
          InActive
        </button>
      </div>
      <div className="grid grid-cols-3 gap-5 w-full">
        {filteredData.map((element: any) => (
          <div
            key={element.id}
            className="flex flex-col w-full p-5 bg-red-500 rounded-xl"
          >
            <h1>{element.name}</h1>
            <button
              role="switch"
              aria-checked={element.isActive}
              onClick={() => setActive(element.id)}
              className={cn(
                "relative w-14 h-7.5 rounded-full border-none cursor-pointer transition-colors duration-250 outline-none",
                element.isActive ? "bg-[#E8453C]" : "bg-[#3a3f5c]",
              )}
            >
              <span
                className={cn(
                  "absolute top-0.75 w-6 h-6 rounded-full bg-white transition-all duration-250",
                  element.isActive ? "right-1" : "right-[calc(100%-28px)]",
                )}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playground;
