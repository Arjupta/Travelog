import { NextFunction, Request, Response } from "express"
import { db } from "../services/firebase"


export const profileGet = (req: Request, res: Response):Response => {
  return res.status(200).json({ user: req.body.user })
}

export const profileUpdate = async (req: Request, res: Response, next: NextFunction):Promise<Response|void> => {
  const update = { ...req.body };
  try {
    const response = await db.collection("accounts").doc(req.body.user.uid).update(update);
    return res.status(200).json(response)
  }
  catch (e) {
    next(e);
  }
}
