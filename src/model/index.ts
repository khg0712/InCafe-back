import { Menu, IMenu, MenuDocument } from './menu';

class DB {
  public createMenu(menu: IMenu): Promise<MenuDocument> {
    return new Menu(menu).save();
  }

  public findAll(): Promise<MenuDocument[]> {
    return Menu.find({}).exec();
  }

  public updateMenuById(
    menuId: string,
    payload: IMenu
  ): Promise<MenuDocument | null> {
    return Menu.findByIdAndUpdate(menuId, payload).exec();
  }

  public deleteMenuById(menuId: string): Promise<MenuDocument | null> {
    return Menu.findByIdAndDelete(menuId).exec();
  }
}

export default DB;
export { MenuDocument };
