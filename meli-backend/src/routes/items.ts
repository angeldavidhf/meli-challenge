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

export const searching: RequestHandler<Params, ResBody, ReqBody, ReqQuery> = (req, res) => {
  const q = req.query.q;

  searchItems(q)
  .then((items) => {
    res.send(items)
  });
}
router.get('/', searching);

router.get('/:id', (req, res) => {
  const code = req.params.id;

  getItem(code)
  .then((item) => {
    res.send(item)
  });

});

export default router;