import {Router} from 'express';
import * as ctrl from './ctrl';

const menuRouter = Router();

menuRouter.get('/', ctrl.getMenus)
  .post('/admin', ctrl.createMenu)
  .put('/admin',ctrl.updateMenu)
  .delete('/admin', ctrl.deleteMenu);

export default menuRouter;