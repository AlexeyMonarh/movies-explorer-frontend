import * as yup from 'yup';

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Минимум 2 символа')
    .max(30, 'Максимум 30 символов')
    .typeError('Должно быть строкой')
    .required('Обязательное поле'),
  email: yup
    .string()
    .email('Введите правильно Email')
    .required('Обязательное поле'),
  password: yup
    .string()
    .typeError('Должно быть строкой')
    .required('Обязательное поле'),
});

export default validationSchema;
