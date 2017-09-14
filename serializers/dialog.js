import { Serializer as JSONAPISerializer } from 'jsonapi-serializer';
import dialogSchema from './schemas/dialog';

const DialogSerializer = new JSONAPISerializer('dialogs', dialogSchema);

export default DialogSerializer;
