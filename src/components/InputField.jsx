import { useContext } from "react"
import { InputContext } from "../App"


const InputField = () => {
    const {inputValue, setInputValue} = useContext(InputContext)
    const handleOnChange = e => setInputValue({...inputValue, url: e.target.value})


  return (
    <div>
        <label className="font-semibold">Your URL</label>
        <input type="url" placeholder="https://example.com" value={inputValue.url} onChange={handleOnChange} className="w-full border-2 py-1 px-3 text-gray-700 rounded-sm"></input>

    </div>
  )
}

export default InputField