import { RadioGroup } from "@headlessui/react";
import { useState } from "react";
import { DataRow } from "./DataRow";
import { Input } from "./Input";
import { TipOption } from "./TipOption";

const validationMessage = "Can't be zero or negative";

function App() {
  const [bill, setBill] = useState("");
  const [prefixedTip, setPrefixedTip] = useState("");
  const [customTip, setCustomTip] = useState("");
  const [numberPeople, setNumberPeople] = useState("");
  const [tipAmountPerPerson, setTipAmountPerPerson] = useState("0.00");
  const [totalPerPerson, setTotalPerPerson] = useState("0.00");
  const [errorBill, setErrorBill] = useState("");
  const [errorCustomTip, setErrorCustomTip] = useState("");
  const [errorNumberPeople, setErrorNumberPeople] = useState("");
  const [disableReset, setDisableReset] = useState(true);

  const handleBillOnChange = (value: string) => {
    if (!value) {
      return;
    }
    if (+value <= 0) {
      setErrorBill(validationMessage);
    } else {
      setErrorBill("");
      calculateTip(+value, +numberPeople, +prefixedTip, +customTip);
    }
    setBill(value);
  };

  const handleCustomTipOnChange = (value: string) => {
    if (!value) {
      return;
    }
    if (+value < 0) {
      setErrorCustomTip("Can't be negative");
    } else {
      setErrorCustomTip("");
      calculateTip(+bill, +numberPeople, +value, +customTip);
    }
    setCustomTip(value);
    setPrefixedTip("");
  };

  const handleTipOnChange = (value: string) => {
    if (value) {
      setPrefixedTip(value);
      setCustomTip("");
      calculateTip(+bill, +numberPeople, +value, +customTip);
    }
  };

  const handleNumberPeopleOnChange = (value: string) => {
    if (!value) {
      return;
    }
    if (+value <= 0) {
      setErrorNumberPeople(validationMessage);
    } else {
      setErrorNumberPeople("");
      calculateTip(+bill, +value, +prefixedTip, +customTip);
    }
    setNumberPeople(value);
  };

  const calculateTip = (
    bill: number,
    numberPeople: number,
    preFixedTip: number,
    customTip: number
  ) => {
    if (bill < 1 || numberPeople < 1 || (preFixedTip < 0 && customTip < 0)) {
      return;
    }
    const tip = preFixedTip > 0 ? preFixedTip : customTip;
    const totalTip = bill * (tip / 100);
    const totalPerPerson = (bill + totalTip) / numberPeople;
    setTipAmountPerPerson((totalTip / numberPeople).toFixed(2).toString());
    setTotalPerPerson(totalPerPerson.toFixed(2).toString());
    setDisableReset(false);
  };

  const handleOnReset = () => {
    setBill("");
    setPrefixedTip("");
    setCustomTip("");
    setNumberPeople("");
    setTipAmountPerPerson("0.00");
    setTotalPerPerson("0.00");
    setErrorBill("");
    setErrorCustomTip("");
    setErrorNumberPeople("");
    setDisableReset(true);
  };

  return (
    <main className="bg-C5E4E7 min-h-full font-mono flex flex-col items-center">
      <div className="h-36 pt-12 lg:pt-[10.125rem] lg:h-[19rem]">
        <img src="/logo.svg" width={87} height={54} alt="Splitter logo" />
      </div>
      <article className="bg-white w-full rounded-t-3xl p-8 flex flex-col lg:flex-row lg:rounded-3xl lg:max-w-4xl gap-8 lg:gap-12">
        <div className="flex flex-col gap-8 lg:p-4 lg:max-w-sm">
          <Input
            label="Bill"
            className="bg-icon-dollar"
            onChange={(e) => handleBillOnChange(e.target.value)}
            value={bill}
            errorMessage={errorBill}
            step="any"
            placeholder="0"
            inputMode="decimal"
            required
          />
          <RadioGroup
            value={prefixedTip}
            onChange={(tip: string) => handleTipOnChange(tip)}
            className="flex flex-col gap-1.5"
          >
            <RadioGroup.Label className="text-5E7A7D w-full">
              Select Tip %
            </RadioGroup.Label>
            <div className="grid grid-cols-fluid lg:grid-cols-fluid-lg gap-4 lg:gap-3.5">
              <TipOption value={5} />
              <TipOption value={10} />
              <TipOption value={15} />
              <TipOption value={25} />
              <TipOption value={50} />
              <Input
                label="Custom tip"
                className="w-full lg:placeholder:text-base"
                onChange={(e) => handleCustomTipOnChange(e.target.value)}
                min="0"
                max="100"
                value={customTip}
                hideLabel
                errorMessage={errorCustomTip}
              />
            </div>
          </RadioGroup>

          <Input
            label="Number of People"
            className="bg-icon-person"
            onChange={(e) => handleNumberPeopleOnChange(e.target.value)}
            value={numberPeople}
            errorMessage={errorNumberPeople}
            placeholder="0"
            required
          />
        </div>
        <section className="bg-00474B rounded-2xl p-6 pt-9 lg:flex-1 flex flex-col justify-between">
          <dl className="w-full flex flex-col gap-5">
            <DataRow label="Tip Amount" value={tipAmountPerPerson} />
            <DataRow label="Total" value={totalPerPerson} />
          </dl>
          <button
            className={`text-00474B text-xl rounded-md w-full py-2.5 mt-8 uppercase enabled:hover-hover:hover:bg-9FE8DF ${
              disableReset ? "bg-#0D686D cursor-not-allowed" : "bg-26C2AE"
            }`}
            type="button"
            onClick={() => handleOnReset()}
            disabled={disableReset}
          >
            Reset
          </button>
        </section>
      </article>
    </main>
  );
}

export default App;
