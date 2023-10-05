import { CardData as CardDataForm } from '../../components';
import { useState } from 'react';

const CardData = () => {
  const [ message, setMessage ] = useState<string>('')
  const apiUrl = 'https://w15sh-cors-learning.up.railway.app/client-x'

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
      const response = await fetch(apiUrl, {
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

};

export default CardData;