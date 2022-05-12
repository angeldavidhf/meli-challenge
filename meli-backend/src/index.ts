import express from 'express';
import itemsRouter from './routes/items';

const app = express();
app.use(express.json());

const PORT = 3001;

app.use('/api/items', itemsRouter);

app.listen(PORT, () => {
  console.log('Server on port ', PORT)
})

