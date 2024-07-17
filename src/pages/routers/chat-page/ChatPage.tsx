import React from 'react';
import useMessages from '../../../api/messages';
import avatar from '../../../shared/images/avatar.svg';
import './ChatPage.css';
import { Button, Layout, Input } from 'antd';

const { Search } = Input;

const ChatComponent: React.FC = () => {
    const { messages, input, setInput, onSearch } = useMessages();

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
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', fontSize: '18px' }}>
                <h2>ChatGPT: ваш умный помощник</h2>
                <p style={{ maxWidth: '500px' }}>
                    Экспериментируйте с ChatGPT-4 в одном месте. Без VPN и абонентской платы.
                    Создавайте контент, обрабатывайте данные и получайте ответы на вопросы через удобный интерфейс!
                </p>
                <Button type='primary'>Начать работу</Button>
            </div>
            <div className='chat-bg'>
                <div className='chat-header'>
                    <img src={avatar} alt='avatar' />
                    <span>BotHub: ChatGPT</span>
                </div>
                <div className='chat-messages'>
                    {messages.map((message, index) => (
                        <div key={index} className={`message ${message.sender}`}>
                            {message.text}
                        </div>
                    ))}
                </div>
                <Search
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onSearch={onSearch}
                    placeholder="Спросите о чём-нибудь меня"
                    enterButton
                />
            </div>
        </Layout>
    );
};

export default ChatComponent;
