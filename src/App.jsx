import { createContext, useState } from "react";
import "./App.css";
import InputForm from "./components/InputForm";
import QRcode from "./components/QRcode";

export const InputContext = createContext();

function App() {
  const [inputValue, setInputValue] = useState({
    url: "",
    color: "#000000",
  });

  const [response, setResponse] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getQrCode = () => {
    if (!inputValue.url) {
      setError("Please enter a URL to generate a QR code.");
      return;
    }

    setLoading(true);
    setError(null);

    // Use the free API to generate the QR code
    const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
      inputValue.url
    )}&size=200x200&color=${inputValue.color.slice(1)}`;

    setTimeout(() => {
      setResponse(apiUrl); // Set the QR code URL for the image
      setLoading(false);
    }, 1000); // Simulate slight loading delay
  };

  const value = {
    inputValue,
    setInputValue,
    getQrCode,
    response,
    loading,
    error,
  };

  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-screen pt-36 px-2">
      <div className="container mx-auto max-w-4xl bg-white rounded-md shadow">
        <div className="md:grid md:grid-cols-3">
          <InputContext.Provider value={value}>
            <InputForm />
            <QRcode />
          </InputContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
