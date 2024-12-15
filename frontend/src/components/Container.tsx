import * as React from 'react';
import InputData from './InputData';
import ShowUrl from './ShowUrl';
import { tURL } from '../interface/URLinterface';
import axios from 'axios';

const Container: React.FunctionComponent = () => {
  const [data, setData] = React.useState<tURL[]>([]);
  const [reload, setReload] = React.useState<boolean>(false);

  const updateReloadState = (): void => {
    setReload((prevState) => !prevState); // Toggle the state
  };

  const fetchTableData = async () => {
    try {
      const response = await axios.get("/api/get/shorURLs");

      // Validate and sort the data
      const sortedData = response.data.allURLs.sort(
        (a: tURL, b: tURL) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      setData(sortedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  React.useEffect(() => {
    fetchTableData();
  }, [reload]); // Only trigger when `reload` changes
  
  return (
    <>
      <InputData  updateReloadState={updateReloadState} />
      <ShowUrl data={data}  />
    </>
  );
};



export default Container;
