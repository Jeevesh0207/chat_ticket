import getGroqResponse from '../../../utils/groq';
import { smallTalkPrompt } from '../../../prompt';
import { z } from 'zod';
import funResParams from '../types';

const smallTalk = async (
  query: string,
): Promise<z.infer<typeof funResParams>> => {
  try {
    const response = await getGroqResponse(
      {
        role: 'system',
        content: JSON.stringify(smallTalkPrompt),
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
    console.error('Error in smallTalk middleware:', error);
    return {
      ok: true,
      res: '',
      err: 'Something went wrong in smallTalk',
    };
  }
};

export default smallTalk;
