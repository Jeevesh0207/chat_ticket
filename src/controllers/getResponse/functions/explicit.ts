import getGroqResponse from '../../../utils/groq';
import { explicitPrompt } from '../../../prompt';
import { z } from 'zod';
import funResParams from '../types';

const explicit = async (
  query: string,
): Promise<z.infer<typeof funResParams>> => {
  try {
    const response = await getGroqResponse(
      {
        role: 'system',
        content: JSON.stringify(explicitPrompt),
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
    console.error('Error in explicit middleware:', error);
    return {
      ok: true,
      res: '',
      err: 'Something went wrong in explicit',
    };
  }
};

export default explicit;
