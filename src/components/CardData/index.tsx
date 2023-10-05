import React from 'react';
import { Card, Button } from 'antd';
// import { Link } from 'react-router-dom';
import styles from './CardData.module.css'

interface Props {
    title: string;
    message: string | object;
    handleFetch: () => void;
    handlePost: () => void;
    handleUpdate: () => void;
    handleDelete: () => void;
}

const CardData: React.FC<Props> = ({ title, message, handleFetch, handlePost, handleUpdate, handleDelete }) => (
    <div className={styles.cardPage}>
      <Card title={title} bordered={false} className={styles.card}>
        <p>Message:</p>
        {typeof message === 'string' ? (
          <span className={styles.cardData}>{message}</span>
        ) : (
          <pre className={styles.cardData}>{JSON.stringify(message, null, 2)}</pre>
        )}
        <div>
        <Button onClick={handleFetch} className={styles.buttonFetch}>
          Fetch Data
        </Button>
        <Button onClick={handlePost} className={styles.buttonPost}>
          Post Data
        </Button>
        </div>
        <div>
        <Button onClick={handleUpdate} className={styles.buttonUpdate}>
          Update Data
        </Button>
        <Button onClick={handleDelete} className={styles.buttonDelete}>
          Delete Data
        </Button>
        </div>
        <div className={styles.cardBody}></div>
      </Card>
    </div>
  );

export default CardData;