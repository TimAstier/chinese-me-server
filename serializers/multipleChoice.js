import { Serializer as JSONAPISerializer } from 'jsonapi-serializer';
import multipleChoiceSchema from './schemas/multipleChoice';

const MultipleChoiceSerializer = new JSONAPISerializer('multipleChoices', multipleChoiceSchema);

export default MultipleChoiceSerializer;
