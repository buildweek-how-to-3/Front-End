import * as yup from 'yup'

export default yup.object().shape({
  username: yup.string()
    .required('Username is empty')
    .min(3, 'Username must be 3 chars or longer'),
  password: yup.string()
    .required('Password is empty')
    .min(6, 'Password must be 6 chars or longer'),
})
