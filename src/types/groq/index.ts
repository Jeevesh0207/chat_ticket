import { z } from 'zod';

const groqParams = z.object({
  role: z.enum(['system', 'user', 'assistant']),
  content: z.string(),
  name: z.string().optional(),
});

export default groqParams;
