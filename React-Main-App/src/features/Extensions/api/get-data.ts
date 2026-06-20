import type { dataType } from "@/types/data";

const getData = async (): Promise<dataType> => {
  const res = await fetch("/data/data.json");
  if (!res.ok) throw new Error("There is a problem on the getData");
  return res.json();
};

export default getData;
