import getGroqResponse from '../../../utils/groq';
import { ambiguityModelPrompt } from '../../../prompt';
const checkAmbiguity = async (query: string) => {
  const response = await getGroqResponse(
    {
      role: 'system',
      content: JSON.stringify(ambiguityModelPrompt),
    },
    {
      role: 'user',
      content: query,
    },
  );
  return response;
};

export default checkAmbiguity;
