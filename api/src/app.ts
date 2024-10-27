import express from 'express';
import sequelize from './database/config';
import { AuthRouter } from './routes/auth';
import cors  from "cors"

const app = express();
const port = 3000;
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(`/api/v1/auth/`, AuthRouter);


app.listen(port, async () => {
  console.log(`Server started on port ${port}`);
  await sequelize.sync({ force: true });
  console.log('Database synced');
});