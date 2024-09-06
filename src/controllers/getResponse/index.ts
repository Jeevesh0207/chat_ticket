import { Request, Response } from 'express';
import { correctSpelling, checkAmbiguity,intentClassification } from './functions';
const getResponse = async (req: Request, res: Response) => {
  try {
    const { query }: { query: string } = req.body;
    //! ------------------------------------------------------------
    // Correct Spelling of User Query
    const correctQuery = await correctSpelling(query);
    if (!correctQuery.ok) throw new Error(correctQuery.err);

    //! ------------------------------------------------------------
    // Intent Classification
    const intentClass = await intentClassification(correctQuery.res);
    if (!intentClass.ok) throw new Error(intentClass.err);

    //! ------------------------------------------------------------
    // Find is there any ambiguity in user query
    const ambiguity = await checkAmbiguity(correctQuery.res);
    if (!ambiguity.ok) throw new Error(ambiguity.err);



    //! ------------------------------------------------------------
    res.status(200).json({
      ok: true,
      correctQuery:correctQuery.res,
      ambiguity:ambiguity.res,
      intentClass:intentClass.res,
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
