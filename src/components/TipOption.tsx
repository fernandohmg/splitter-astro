import { RadioGroup } from "@headlessui/react";

interface TipOptionProps {
  value: number;
}

export const TipOption = ({ value }: TipOptionProps) => {
  return (
    <RadioGroup.Option value={value}>
      {({ checked }) => (
        <div
          className={`cursor-pointer w-full min-w-36 h-12 sm:min-w-28 flex justify-center items-center rounded-md transition
           hover-hover:hover:bg-9FE8DF hover-hover:hover:text-00474B outline-26C2AE
          ${checked ? "bg-26C2AE text-00474B" : "bg-00474B text-white"}`}
        >
          {`${value}%`}
        </div>
      )}
    </RadioGroup.Option>
  );
};
