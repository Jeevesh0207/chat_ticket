import getGroqResponse from '../../../utils/groq';
import { intentClassificationPrompt } from '../../../prompt';
import { z } from 'zod';
import funResParams from '../types';

const intentClassification = async (
  query: string,
): Promise<z.infer<typeof funResParams>> => {
  try {
    const response = await getGroqResponse(
      {
        role: 'system',
        content: JSON.stringify(intentClassificationPrompt),
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
    console.error('Error in intentClassification middleware:', error);
    return {
      ok: true,
      res: '',
      err: 'Something went wrong in intentClassification',
    };
  }
};

export default intentClassification;
