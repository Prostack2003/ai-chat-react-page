import { OpenAIApi, ChatCompletionRequestMessage } from 'openai-edge';
import configuration from './config';

const openai = new OpenAIApi(configuration);

export const createChatCompletion = async (messages: ChatCompletionRequestMessage[], model: string): Promise<string> => {
    try {
        const response = await openai.createChatCompletion({
            messages,
            model,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const completion = await response.json();
        return completion.choices[0].message.content;
    } catch (error) {
        console.error('Ошибка отправления сообщения:', error);
        throw error;
    }
};
