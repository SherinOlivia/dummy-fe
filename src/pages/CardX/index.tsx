import { CardData as CardDataForm } from '../../components';
import { useState } from 'react';
import { Button } from 'antd';
import styles from './CardX.module.css'

const CardX = () => {
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
        throw new Error("Error in Posting Data..")
      }
      const data = await response.json()
      setMessage(JSON.stringify(data.message));
      console.log(data)
    } catch (error) {
      console.error(error)
      setMessage(`"Error": ${error}`);
    }
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch(apiUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'X-API-KEY': 'APIkeyTEST123',
        },
        body: JSON.stringify({ data: "Va fail, Elaine" }),
      })
      if(!response.ok){
        throw new Error("Error in Updating Data..")
      }
      const data = await response.json()
      setMessage(JSON.stringify(data.message));
      console.log(data)
    } catch (error) {
      console.error(error)
      setMessage(`"Error": ${error}`);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(apiUrl, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'X-API-KEY': 'APIkeyTEST123',
        },
      });
      if (!response.ok) {
        throw new Error("Error in Deleting Data..")
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
    <>
      <Button onClick={() => window.location.href = 'https://w15fe.roozone.site'} className={styles.button}>Test Card Y</Button>
      <CardDataForm title={"W15-SH X"} message={message} handleFetch={handleFetch} handlePost={handlePost} 
      handleUpdate={handleUpdate} handleDelete={handleDelete} />
    </>

  );

};

export default CardX;