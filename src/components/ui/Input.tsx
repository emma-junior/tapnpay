interface inputProps {
  error?: string;
  label?: string;
  placeholder: string;
  value?: string;
  onChange?: any;
}

const Input = ({ error, label, placeholder, value, onChange }: inputProps) => {
  return (
    <div>
      <label className="text-[0.8rem] text-primary-black capitalize">
        {label}
      </label>
      <input
        value={value}
        name={label}
        placeholder={placeholder}
        onChange={(e) => onChange(e)}
        className={`border-2 border-solid ${
          error ? "border-primary-red" : "border-secondary-grey"
        } rounded-md h-11.25 w-full pl-5 outline-none`}
      />
      <p className="text-xs text-primary-red">{error}</p>
    </div>
  );
};

export default Input;
