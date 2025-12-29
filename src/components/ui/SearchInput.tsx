import search from "../../assets/search-icon.svg";

interface searchInputProps {
  placeholder: string;
  value?: string;
  onChange?: any;
}

const SearchInput = ({ placeholder, value, onChange }: searchInputProps) => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="w-full relative h-10 "
    >
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e)}
        className="border-2 border-solid border-[#E1E3ED] w-full outline-none h-10 rounded-md pl-10 pr-2"
      />
      <img
        className="w-5 h-5 ont-bold absolute left-4 top-1/2 transform -translate-y-1/2"
        src={search}
        alt="search"
      />
    </form>
  );
};

export default SearchInput;
