import {Button, GetProps, Input, Layout} from "antd";
import './ChatPage.css'
import avatar from '../../../shared/images/avatar.svg'
import React from "react";


const ChatPage = () => {
    type SearchProps = GetProps<typeof Input.Search>;

    const { Search } = Input;

    const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);
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
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'start', fontSize: '18px'}}>
                <h2>ChatGPT: ваш умный помощник</h2>
                <p style={{maxWidth: '500px'}}>
                    Экспериментируйте с ChatGPT-4, Midjourney и Claude в одном месте. Без VPN и абонентской платы.
                    Создавайте контент, обрабатывайте данные и получайте ответы на вопросы через удобный интерфейс!
                </p>
                <Button type='primary'>Начать работу</Button>
            </div>
            <div className='chat-bg'>
                <div className='chat-header'>
                    <img src={avatar} alt='avatar'/>
                    <span>BotHub: ChatGPT</span>
                </div>
                <div className='chat-messages'>

                </div>
                <Search placeholder="Спросите о чём-нибудь меня" onSearch={onSearch} enterButton />
            </div>
        </Layout>
    );
};

export default ChatPage;
