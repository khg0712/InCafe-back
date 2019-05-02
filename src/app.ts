import * as express from 'express';
import * as mongoose from 'mongoose';
import { mongoUri } from './config';
// tslint:disable-next-line: import-name
import Err from './utils/error';

import router from './routes/index';
import { MenuDocument } from './model/index';

const mongooseOptions: mongoose.ConnectionOptions = {
  useNewUrlParser: true,
  useFindAndModify: false
};

mongoose
  .connect(mongoUri, mongooseOptions)
  .then(() => console.log('Successfully connected to mongodb'))
  .catch((e: Err) => console.log(e.stack as string));

const app: express.Application = express();

app
  .use(express.json())
  .use(router)
  .use(
    (
      req: express.Request,
      res: express.Response,
      next: express.NextFunction
    ) => {
      next(new Err(`Not found - ${req.originalUrl}`, 404));
    }
  )
  .use(
    (
      err: Err,
      req: express.Request,
      res: express.Response,
      next: express.NextFunction
    ) => {
      res.status(err.status || 500).end();
    }
  );

export default app;
