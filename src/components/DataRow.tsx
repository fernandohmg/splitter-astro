interface DataRowProps {
  label: string;
  value: string;
}

export const DataRow = ({ label, value }: DataRowProps) => {
  return (
    <>
      <dt className="text-white">
        {label}
        <br />
        <small className="text-xs text-7F9D9F">/ person</small>
      </dt>
      <dd className="text-3xl lg:text-5xl text-26C2AE justify-self-end">
        <b>{`$${value}`}</b>
      </dd>
    </>
  );
};
