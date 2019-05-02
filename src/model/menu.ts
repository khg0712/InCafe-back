import { Schema, Model, Document, model } from 'mongoose';
import { ObjectID } from 'bson';

interface IMenu {
  isAvailable?: boolean;
  name: string;
  price: number;
}

interface MenuDocument extends Document, IMenu {}

const MenuSchema = new Schema({
  isAvailable: {
    type: Boolean,
    default: true
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

const Menu: Model<MenuDocument> = model<MenuDocument>('Menu', MenuSchema);

export { Menu, IMenu, MenuDocument };
