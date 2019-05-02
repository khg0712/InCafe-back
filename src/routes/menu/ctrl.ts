import { Request, Response, NextFunction, RequestHandler } from 'express';
import DB, { MenuDocument } from '../../model/index';

const db = new DB();

const createMenu: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => { 
  const { menu } = req.body;
  console.log(menu)
  try {
    await db.createMenu(menu);
    res.status(201).end();
  } catch (e) {
    next(e);
  }
};
const getMenus: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const menus = await db.findAll();
    res
      .status(200)
      .json({ menus })
      .end();
  } catch (e) {
    next(e);
  }
};
const updateMenu: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { menuId, menu } = req.body;
  try {
    const menus = await db.updateMenuById(menuId, menu);
    res.status(200).end();
  } catch (e) {
    next(e);
  }
};
const deleteMenu: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { menuId } = req.body;
  try {
    const menus = await db.deleteMenuById(menuId);
    res.status(200).end();
  } catch (e) {
    next(e);
  }
};

export { createMenu, getMenus, updateMenu, deleteMenu };
