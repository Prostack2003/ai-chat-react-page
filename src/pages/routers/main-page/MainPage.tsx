import React, {useState} from 'react';
import {Button, Layout} from "antd";
import mainImg from '../../../shared/images/main.png';

const MainPage = () => {
    const [loadings, setLoadings] = useState<boolean[]>([]);

    const enterLoading = (index: number) => {
        setLoadings((prevLoadings) => {
            const newLoadings = [...prevLoadings];
            newLoadings[index] = true;
            return newLoadings;
        });

        setTimeout(() => {
            setLoadings((prevLoadings) => {
                const newLoadings = [...prevLoadings];
                newLoadings[index] = false;
                return newLoadings;
            });
        }, 6000);
    };

    return (
        <Layout style={{
            background: '#222B44',
            color: 'white',
            height: '100vh',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'row'
        }}>
            <img src={mainImg} alt="MainPage" width="400px" height='400px'/>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '18px'}}>
                <h2>Использование ChatGPT</h2>
                <p style={{maxWidth: '500px'}}>
                    ChatGPT — это разновидность языковых моделей семейства GPT, разработанных компанией OpenAI. Она
                    предназначена для создания текстов, которые выглядят как написанные человеком
                </p>
                <Button type="primary" loading={loadings[0]} onClick={() => enterLoading(0)}>
                    Использовать ChatGPT
                </Button>
            </div>
        </Layout>
    );
};

export default MainPage;
