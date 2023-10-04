import { CardData as CardDataForm } from '../../components';
import { useState } from 'react';

const CardData = () => {
  const [ message, setMessage ] = useState<string>('')
  const apiUrl = 'http://localhost:6066/client-1'

  const handleFetch = () => {
    fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => setMessage(error));
  };

  const handlePost = () => {
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': 'APIkeyTEST123',
      },
      body: JSON.stringify({ data: "Caed'mil Folie" }),
    })
      .then((response) => response.json())
      .then((data) => setMessage(JSON.stringify(data.message)))
      .catch((error) => setMessage(error));
  };

  return (
    <CardDataForm message={message} handleFetch={handleFetch} handlePost={handlePost}  />

  );

 return null
};

export default CardData;