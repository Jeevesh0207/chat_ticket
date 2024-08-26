import { Request, Response } from 'express';
import { correctSpelling, checkAmbiguity } from './functions';
const getResponse = async (req: Request, res: Response) => {
  try {
    const { query }: { query: string } = req.body;
    //! ------------------------------------------------------------
    // Correct Spelling of User Query
    const correctQuery = await correctSpelling(query);
    if (!correctQuery.ok) throw new Error(correctQuery.err);

    //! ------------------------------------------------------------
    // Find is there any ambiguity in user query
    const ambiguity = await checkAmbiguity(correctQuery.res);

    //! ------------------------------------------------------------
    res.status(200).json({
      ok: true,
      correctQuery:correctQuery.res,
      ambiguity,
      status: 200,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      error,
      status: 200,
    });
  }
};

export default getResponse;
