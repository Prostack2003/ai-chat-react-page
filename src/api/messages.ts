import { useState } from 'react';
import { createChatCompletion } from './openai';
import { ChatCompletionRequestMessageRoleEnum } from 'openai-edge';

interface Message {
    text: string;
    sender: 'user' | 'bot';
}

const useMessages = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState<string>('');

    const onSearch = async (value: string) => {
        if (value.trim()) {
            const newMessage: Message = { text: value, sender: 'user' };
            setMessages(prevMessages => [...prevMessages, newMessage]);
            setInput('');

            try {
                const botMessageContent = await createChatCompletion([
                    ...messages.map(msg => ({
                        role: msg.sender === 'user' ? ChatCompletionRequestMessageRoleEnum.User : ChatCompletionRequestMessageRoleEnum.Assistant,
                        content: msg.text
                    })),
                    { role: ChatCompletionRequestMessageRoleEnum.User, content: value }
                ], 'gemini-pro');
                const botMessage: Message = { text: botMessageContent, sender: 'bot' };
                setMessages(prevMessages => [...prevMessages, botMessage]);
            } catch (error) {
                console.error('Ошибка отправления сообщения:', error);
            }
        }
    };

    return { messages, input, setInput, onSearch };
};

export default useMessages;
