import { z } from 'zod';
const funResParams = z.object({
  ok: z.boolean(),
  res: z.string(),
  err:z.string()
});

export default funResParams