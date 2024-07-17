import React, { useState } from "react";
import { Button, Input, Layout } from "antd";
import './ChatPage.css';
import avatar from '../../../shared/images/avatar.svg';
import { Configuration, OpenAIApi, ChatCompletionRequestMessageRoleEnum } from "openai-edge";

interface Message {
    text: string;
    sender: 'user' | 'bot';
}

const ChatPage: React.FC = () => {
    const { Search } = Input;

    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState<string>('');

    const configuration = new Configuration({
        apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5MGE2ZTgxLTRiMDMtNGQxNC1hMGQxLWI3N2RkZjlkMDY2ZiIsImlzRGV2ZWxvcGVyIjp0cnVlLCJpYXQiOjE3MjA1Mjk0NDgsImV4cCI6MjAzNjEwNTQ0OH0.Dm8QJpXfX2ChWcYZ5c0SLNzGpmEmh1dYPAMW3wz4v5M',
        basePath: 'https://bothub.chat/api/v2/openai/v1',
    });
    const openai = new OpenAIApi(configuration);

    const onSearch = async (value: string) => {
        if (value.trim() ) {
            const newMessage: Message = { text: value, sender: 'user' };
            setMessages(prevMessages => [...prevMessages, newMessage]);
            setInput('');

            try {
                const completion = await openai.createChatCompletion({
                    messages: [
                        ...messages.map(msg => ({ role: msg.sender === 'user' ? ChatCompletionRequestMessageRoleEnum.User : ChatCompletionRequestMessageRoleEnum.Assistant, content: msg.text })),
                        { role: ChatCompletionRequestMessageRoleEnum.User, content: value }
                    ],
                    model: 'gemini-pro',
                });
                const botMessageContent = (await completion.json()).choices[0].message.content;
                const botMessage: Message = { text: botMessageContent, sender: 'bot' };
                setMessages(prevMessages => [...prevMessages, botMessage]);
            } catch (error) {
                console.error('Ошибка отправления сообщения:', error);
            }
        }
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
                    placeholder="Спросите о чём-нибудь меня"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onSearch={onSearch}
                    enterButton
                />
            </div>
        </Layout>
    );
};

export default ChatPage;
