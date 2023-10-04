import { CardData as CardDataForm } from '../../components';
import { useState } from 'react';

const CardData = () => {
  const [ message, setMessage ] = useState<string>('')
  const apiUrl = 'http://localhost:6066/client-x'

  const handleFetch = async () => {
    try {
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-API-KEY': 'APIkeyTEST123',
        },
      });
      if (!response.ok) {
        throw new Error("Error in Fetching Data..")
      } 
      const data = await response.json()
      setMessage(JSON.stringify(data.message));
      console.log(data)

    } catch (error) {
      console.error(error)
      setMessage(`"Error": ${error}`);
    }

  };

  const handlePost = async () => {
    try {
      const response = await     fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-KEY': 'APIkeyTEST123',
        },
        body: JSON.stringify({ data: "Caed'mil Folie" }),
      })
      if(!response.ok){
        throw new Error("Error in Fetching Data..")
      }
      const data = await response.json()
      setMessage(JSON.stringify(data.message));
      console.log(data)
    } catch (error) {
      console.error(error)
      setMessage(`"Error": ${error}`);
    }
  };

  return (
    <CardDataForm message={message} handleFetch={handleFetch} handlePost={handlePost}  />

  );

 return null
};

export default CardData;