import express from 'express';
import { RequestHandler } from "express";

import { searchItems, getItem } from '../services/items';

type Params = {};
type ResBody = {};
type ReqBody = {};
type ReqQuery = {
    q: string;
}

const router = express.Router()

export const searching: RequestHandler<Params, ResBody, ReqBody, ReqQuery> = (req, res, next) => {
  const q = req.query.q;

  searchItems(q)
  .then((result) => {
    res.send(result)
  })
  .catch((error) => {
    return next(error)
  });
}
router.get('/', searching);

router.get('/:id', (req, res, next) => {
  const code = req.params.id;

  getItem(code)
  .then((result) => {
    res.send(result)
  })  
  .catch((error) => {
    return next(error)
  });

});

export default router;