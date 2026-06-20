import type { dataType } from "@/types/data";

const useFormattedData = (
  realData: dataType,
  active: "all" | "inactive" | "active",
) => {
  const formattedData = realData.filter((item) => {
    if (active === "active") return item.isActive;
    if (active === "inactive") return !item.isActive;
    return item;
  });

  return formattedData;
};

export default useFormattedData;
