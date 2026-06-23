import type { dataTypeAtomic } from "@/types/data";
import Button from "./ui/Button";
import ToggleButton from "./ui/ToggleButton";
import { logos } from "../constants/logos";

const Card = ({
  item,
  toggleItem,
  removeItem,
}: {
  item: dataTypeAtomic;
  toggleItem: (id: number) => void;
  removeItem: (id: number) => void;
}) => {
  return (
    <div className="w-full h-auto p-5 rounded-2xl flex flex-col bg-surface border border-neutral-600/30 shadow-lg gap-10">
      <div className="w-full h-auto flex gap-5 items-start justify-start">
        <img src={logos[item.name]} alt={item.name} />
        <div className="w-full h-auto flex flex-col gap-3">
          <h1 className="font-bold text-xl text-text-primary">{item.name}</h1>
          <p className="text-text-secondary font-medium">{item.description}</p>
        </div>
      </div>
      <div className="flex items-end justify-between w-full h-full">
        <Button
          className="text-base font-semibold cursor-pointer hover:bg-red-500 transition-colors"
          onClick={() => removeItem(item.id)}
        >
          Remove
        </Button>
        <ToggleButton
          isActive={item.isActive}
          onClick={() => toggleItem(item.id)}
        />
      </div>
    </div>
  );
};

export default Card;
