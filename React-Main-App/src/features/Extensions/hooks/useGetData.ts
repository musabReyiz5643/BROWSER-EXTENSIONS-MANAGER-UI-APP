import { useQuery } from "@tanstack/react-query";
import getData from "../api/get-data";
import type { dataType } from "@/types/data";

const useGetData = () => {
  const { isLoading, data, error } = useQuery<dataType>({
    queryKey: ["getData"],
    queryFn: getData,
  });

  return { isLoading, data, error };
};

export default useGetData;
