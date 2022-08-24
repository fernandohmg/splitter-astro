import { useId } from "react";

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  errorMessage?: string;
  hideLabel?: boolean;
}

export const Input = ({
  label,
  errorMessage,
  hideLabel,
  ...delegate
}: InputProps) => {
  const id = useId();
  const { className } = delegate;

  return (
    <p className="flex flex-col text-5E7A7D gap-1.5">
      <label className={hideLabel ? "sr-only" : ""} htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type="number"
        placeholder={hideLabel ? "Custom" : ""}
        inputMode="numeric"
        min="1"
        step="1"
        onFocus={(e) => e.target.select()}
        {...delegate}
        className={`bg-F3F9FA text-2xl text-00474B rounded-md px-4 py-2 text-right bg-left-center bg-no-repeat outline-26C2AE ${
          errorMessage ? "border-2 border-E17052" : "bottom-0"
        } ${className}`}
      />
      {errorMessage && (
        <strong className="text-E17457" aria-live="polite">
          {errorMessage}
        </strong>
      )}
    </p>
  );
};
