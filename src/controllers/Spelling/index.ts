import { Request, Response, NextFunction } from 'express';
import getGroqResponse from '../../utils/groq';
import { spellingPromt } from '../../prompt';
const spellingCorrection = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { query }: { query: string } = req.body;
  const response = await getGroqResponse(
    {
      role: 'system',
      content: JSON.stringify(spellingPromt),
    },
    {
      role: 'user',
      content: query,
    },
  );
  res.status(200).send({
    corrected_query: response,
    status: 200,
  });
};

export default spellingCorrection;
