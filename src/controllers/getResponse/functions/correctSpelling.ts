import getGroqResponse from '../../../utils/groq';
import { spellingModelPrompt } from '../../../prompt';
import { z } from 'zod';
import funResParams from '../types';

const correctSpelling = async (
  query: string,
): Promise<z.infer<typeof funResParams>> => {
  try {
    const response = await getGroqResponse(
      {
        role: 'system',
        content: JSON.stringify(spellingModelPrompt),
      },
      {
        role: 'user',
        content: query,
      },
    );
    return {
      ok: true,
      res: response,
      err: '',
    };
  } catch (error) {
    console.error('Error in correctSpelling middleware:', error);
    return {
      ok: true,
      res: '',
      err: 'Something went wrong in correctSpelling',
    };
  }
};

export default correctSpelling;
