import * as React from 'react';
import { tURL } from '../interface/URLinterface';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface IshowUrlProps {
  data: tURL[];
  
}
const ShowUrl: React.FunctionComponent<IshowUrlProps> = ({ data }) => {
  const [localData, setLocalData] = React.useState<tURL[]>(data);
  const [isEditingId, setIsEditingId] = React.useState<string | null>(null); // Track the editing ID
  const [editFullUrl, setEditFullUrl] = React.useState<string>(''); // Input for full URL
  const [editShortUrl, setEditShortUrl] = React.useState<string>(''); // Input for short URL

  React.useEffect(() => {
    setLocalData(data); // Sync local state with parent state
  }, [data]);

  // Function to enter edit mode
  const handleEdit = (item: tURL) => {
    setIsEditingId(item._id); // Set the item to edit
    setEditFullUrl(item.fullURL); // Populate full URL
    setEditShortUrl(item.shortURL); // Populate short URL
  };

  // Function to cancel editing
  const handleCancelEdit = () => {
    setIsEditingId(null); // Exit edit mode
    setEditFullUrl('');
    setEditShortUrl('');
  };

  // Function to save changes
  const handleSaveEdit = async () => {
    try {
      const updatedItem = { fullURL: editFullUrl, shortURL: editShortUrl };
      await axios.put(`/api/update/shortURL/${isEditingId}`, updatedItem);

      // Update local state optimistically
      const updatedData = localData.map((item) =>
        item._id === isEditingId ? { ...item, ...updatedItem } : item
      );
      setLocalData(updatedData);

      handleCancelEdit(); // Exit edit mode
    } catch (error) {
      console.error("Error updating URL:", error);
    }
  };

  // Function to delete an item
  const handleDeleteTask = async (id: string) => {
    try {
      await axios.delete(`/api/delete/shortURL/${id}`);
      const updatedData = localData.filter((item) => item._id !== id);
      setLocalData(updatedData);
    } catch (error) {
      console.error("Error deleting URL:", error);
    }
  };


  // const getShortUrl = async (shortURL: string) => {
  //   try {
  //     // Assuming you have a route to fetch the full URL by short URL
  //     const response = await axios.get(`/api/get/shortURL/${shortURL}`);
  //     const fullUrl = response.data?.fullURL; // Extract full URL from the response
  //     console.log("Redirecting to:", fullUrl); // Optional: log for debugging
  //     if (fullUrl) {
  //       window.open(fullUrl, '_blank'); // Open the full URL in a new tab
  //     } else {
  //       console.error("Full URL not found for the short URL.");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching short URL:", error);
  //   }
  // };
  
  
  // Render Table Rows
  const renderTableData = () => {
    return localData.map((item) => (
      <tr key={item._id} className="border-t border-gray-200 hover:bg-gray-50">
        {isEditingId === item._id ? (
          <>
            <td className="px-6 py-4">
              <input
                value={editFullUrl}
                onChange={(e) => setEditFullUrl(e.target.value)}
                className="w-full border px-2 py-1 rounded"
              />
            </td>
            <td className="px-6 py-4">
              <input
                value={editShortUrl}
                onChange={(e) => setEditShortUrl(e.target.value)}
                className="w-full border px-2 py-1 rounded"
              />
            </td>
            <td className="px-6 py-4 text-center text-gray-700">
              {item.clicks}
            </td>
            <td className="px-6 py-4 flex space-x-4">
              <button
                onClick={handleSaveEdit}
                className="bg-green-600 text-white px-3 py-2 rounded-md hover:bg-green-700 transition"
              >
                Save
              </button>
              <button
                onClick={handleCancelEdit}
                className="bg-gray-600 text-white px-3 py-2 rounded-md hover:bg-gray-700 transition"
              >
                Cancel
              </button>
            </td>
          </>
        ) : (
          <>
           
          


            <td className="px-6 py-4 text-gray-700 truncate max-w-xs">
            <Link to={item.fullURL} target='_blank'  >
         
              {item.fullURL}
         </Link>
            </td>



<td className="px-6 py-4 text-gray-700 truncate max-w-xs">
<Link to={`http://localhost:8080/api/get/shortURL/${item.shortURL}`}  >   {item.shortURL} </Link>
</td>

 


            <td className="px-6 py-4 text-center text-gray-700">
              {item.clicks}
            </td>
            <td className="px-6 py-4 flex space-x-4">
              <button
                onClick={() => handleEdit(item)}
                className="bg-blue-600 text-white px-3 py-2 rounded-md shadow hover:bg-blue-700 transition"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteTask(item._id)}
                className="bg-red-600 text-white px-3 py-2 rounded-md shadow hover:bg-red-700 transition"
              >
                Delete
              </button>
            </td>
          </>
        )}
      </tr>
    ));
  };

  return (
    <div className="bg-white w-full min-h-screen p-8">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          URL Management
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="px-6 py-3 text-left font-medium uppercase tracking-wider">
                  Full URL
                </th>
                <th className="px-6 py-3 text-left font-medium uppercase tracking-wider">
                  Short URL
                </th>
                <th className="px-6 py-3 text-left font-medium uppercase tracking-wider">
                  Clicks
                </th>
                <th className="px-6 py-3 text-left font-medium uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {localData.length > 0 ? (
                renderTableData()
              ) : (
                <tr>
                  <td
                    colSpan={4}
                    className="px-6 py-4 text-center text-gray-500"
                  >
                    No URLs found. Add a new URL to get started!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ShowUrl;

