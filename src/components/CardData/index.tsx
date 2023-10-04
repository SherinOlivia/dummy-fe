import React from 'react';
import { Card, Button } from 'antd';
// import { Link } from 'react-router-dom';
import styles from './CardData.module.css'

interface Props {
    message: string;
    handleFetch: () => void;
    handlePost: () => void;
}

const CardData: React.FC<Props> = ({message, handleFetch, handlePost}) => (
<div className={styles.cardPage}>
    <Card title="W15 SH" bordered={false} className={styles.card}>
        <p>Message: <span className={styles.cardData}>{message}</span></p>
        <Button onClick={handleFetch} className={styles.buttonFetch}>Fetch Data</Button>
        <Button onClick={handlePost} className={styles.buttonPost}>Post Data</Button>
        <div className={styles.cardBody}></div>

    </Card>
</div>

);

export default CardData;