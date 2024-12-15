import * as React from 'react';
import axios from 'axios';


interface TinputDataprops { 
  updateReloadState: () => void ; 
}

const InputData: React.FunctionComponent<TinputDataprops> = ({updateReloadState}) => {
  const [fullUrl, setFullUrl] = React.useState<string>('');
  const [successMessage, setSuccessMessage] = React.useState<string | null>(null);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);



  const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    setSuccessMessage(null);
    setErrorMessage(null);
  
    if (!fullUrl.trim()) {
      setErrorMessage('URL cannot be empty!');
      return;
    }
  
    try {
      const response = await axios.post('/api/add/shortURL', { fullURL: fullUrl }); // Ensure key matches your schema
      setSuccessMessage('URL added successfully! Your short URL');
      setFullUrl(''); // Reset the input field
      updateReloadState()
    } catch (error) {
      console.error('Error while adding URL:', error);
      setErrorMessage('Failed to add the URL. Please try again.');
    }
  };

  return (
    <div className="bg-banner w-full mt-8">
      <div className="w-[60%] m-auto bg-white bg-opacity-80 p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-slate-800 text-center mb-6">
          Add Your URL
        </h1>
        <form onSubmit={handleForm}>
          <div className="relative w-full">
            <input
              type="text"
              value={fullUrl}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFullUrl(e.target.value)
              }
              className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-lg border border-slate-200 rounded-md pl-4 pr-20 py-3 transition duration-300 ease focus:outline-none focus:border-slate-500 hover:border-slate-300 shadow-md focus:shadow"
              placeholder="Enter your URL"
            />
            <button
              className="absolute right-0 top-0 rounded bg-slate-800 py-3 px-6 text-center text-lg text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="submit"
              disabled={!fullUrl.trim()} // Disable button if input is empty
            >
              Add URL
            </button>
          </div>
        </form>

        {/* Feedback Messages */}
        {successMessage && (
          <p className="mt-4 text-green-600 font-medium">{successMessage}</p>
        )}
        {errorMessage && (
          <p className="mt-4 text-red-600 font-medium">{errorMessage}</p>
        )}
      </div>
    </div>
  );
};

export default InputData;
