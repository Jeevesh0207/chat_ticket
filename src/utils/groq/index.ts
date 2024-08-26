import Groq from 'groq-sdk';
import { groqParams } from '../../types';
import { z } from 'zod';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const getGroqResponse = async (
  system: z.infer<typeof groqParams>,
  user: z.infer<typeof groqParams>,
): Promise<string> => {
  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: system.role,
          content: system.content,
        },
        {
          role: user.role,
          content: user.content,
        },
      ],
      model: 'llama3-8b-8192',
    });
    return (
      chatCompletion.choices[0].message.content || 'Please try again later'
    );
  } catch (error) {
    console.log('------getGroqResponse------');
    console.error(error);
    throw error;
  }
};

export default getGroqResponse;
