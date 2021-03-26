import * as yup from 'yup';

const validationSchema = yup.object().shape({
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
