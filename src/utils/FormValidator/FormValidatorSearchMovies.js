import * as yup from 'yup';

const validationSchema = yup.object().shape({
  search: yup.string('').required('Нужно ввести ключевое слово'),
});

export default validationSchema;
