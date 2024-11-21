import { useContext } from "react";
import { InputContext } from "../App";

const QRcode = () => {
  const { response, loading, error } = useContext(InputContext);

  if (loading) return <p className="text-gray-500">Generating QR Code...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="bg-gray-100 rounded-r-md flex flex-col items-center justify-center p-4">
      {response ? (
        <>
          <img className="w-48" src={response} alt="Generated QR Code" />
          <a
            href={response}
            download="QRCode.png"
            className="bg-blue-400 text-white mt-2 px-4 py-1  rounded hover:bg-blue-500"
          >
            Download
          </a>
        </>
      ) : (
        <p>No QR Code generated yet.</p>
      )}
    </div>
  );
};

export default QRcode;
