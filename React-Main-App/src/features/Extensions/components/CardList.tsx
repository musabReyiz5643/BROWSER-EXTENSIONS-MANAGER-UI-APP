import { useEffect } from "react";
import useGetData from "../hooks/useGetData";
import Card from "./Card";
import useDataStore from "../store/useDataStore";
import { useShallow } from "zustand/shallow";
import useFormattedData from "../hooks/useFormattedData";

const CardList = () => {
  const { data, isLoading, error } = useGetData();

  const {
    toggleItem,
    setData,
    removeItem,
    data: realData,
    active,
  } = useDataStore(
    useShallow((state) => ({
      toggleItem: state.toggleItem,
      setData: state.setData,
      data: state.data,
      active: state.active,
      removeItem: state.removeItem,
    })),
  );

  const formattedData = useFormattedData(realData, active);

  useEffect(() => {
    if (data) setData(data);
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error... {error.message}</div>;

  return (
    <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 gap-5">
      {formattedData?.map((element) => {
        return (
          <Card
            item={element}
            key={element.id}
            toggleItem={toggleItem}
            removeItem={removeItem}
          />
        );
      })}
    </div>
  );
};

export default CardList;
