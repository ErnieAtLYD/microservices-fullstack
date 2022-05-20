import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

const app = express();
app.use(cors());
app.use(morgan('dev'));

app.get('/api/users', (req, res) =>
  res.status(200).send({ message: 'Hello World, from the server!' })
);

app.listen(4200, () => {
  console.log(`server running on port 4200`);
});
