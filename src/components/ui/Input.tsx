import warning from "../../assets/warning.svg";

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
      <div className="relative h-11.25 w-full">
        <input
          value={value}
          name={label}
          placeholder={placeholder}
          onChange={(e) => onChange(e)}
          className={`border-2 border-solid relative ${
            error ? "border-primary-red" : "border-secondary-grey"
          } rounded-md h-11.25 w-full pl-5 outline-none`}
        />
        {error && (
          <img
            className="w-[16.67px] h-[16.67px] absolute right-4 top-1/2 transform -translate-y-1/2"
            src={warning}
            alt="warning"
          />
        )}
      </div>
      <p className="text-xs text-primary-red">{error}</p>
    </div>
  );
};

export default Input;
