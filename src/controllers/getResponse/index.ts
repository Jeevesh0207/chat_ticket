import { Request, Response } from 'express';
import {
  correctSpelling,
  checkAmbiguity,
  intentClassification,
  smallTalk,
  explicit,
} from './functions';

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

    const intent = intentClass.res;

    if (intent === 'small talk') {
      // Small Talk
      const smalltalk = await smallTalk(correctQuery.res);
      if (!smalltalk.ok) throw new Error(smalltalk.err);
      res.status(200).json({
        ok: true,
        correctQuery: correctQuery.res,
        intentClass: intentClass.res,
        smalltalk: smalltalk.res,
        status: 200,
      });
    } else if (intent === 'last booking related') {
      // Last Booking
    } else if (intent === 'book a ticket') {
      // Find is there any ambiguity in user query
      const ambiguity = await checkAmbiguity(correctQuery.res);
      if (!ambiguity.ok) throw new Error(ambiguity.err);
      res.status(200).json({
        ok: true,
        correctQuery: correctQuery.res,
        ambiguity: ambiguity.res,
        intentClass: intentClass.res,
        status: 200,
      });
    } else {
      // Explicit
      const explicitRes = await explicit(correctQuery.res);
      if (!explicitRes.ok) throw new Error(explicitRes.err);
      res.status(200).json({
        ok: true,
        correctQuery: correctQuery.res,
        intentClass: intentClass.res,
        explicitRes: explicitRes.res,
        status: 200,
      });
    }

    //! ------------------------------------------------------------
  } catch (error) {
    res.status(500).json({
      ok: false,
      error,
      status: 200,
    });
  }
};

export default getResponse;
