import { useContext } from "react";
import { InputContext } from "../App";

const InputForm = () => {
  const { inputValue, setInputValue, getQrCode } = useContext(InputContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="col-span-2 p-6 grid gap-4">
      <input
        type="text"
        name="url"
        placeholder="Enter URL"
        value={inputValue.url}
        onChange={handleChange}
        className="p-2 border rounded "
      />
      <input
        type="color"
        name="color"
        value={inputValue.color}
        onChange={handleChange}
        className="p-2 "
      />
      <button
        onClick={getQrCode}
        className="bg-blue-400 text-white max-w-xs ml-auto px-4 py-2 rounded-sm mt-4 hover:bg-blue-500 disabled:bg-gray-300"
      >
        Generate QR Code
      </button>
    </div>
  );
};

export default InputForm;
