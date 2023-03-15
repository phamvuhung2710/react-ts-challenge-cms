import * as yup from 'yup'

export const loginSchema = yup.object().shape({
  email: yup.string().required('Please enter your email').email('Please enter a valid email address'),
  password: yup.string().required('Please enter your password').min(6, 'Please enter at least 6 characters')
})

export type LoginSchema = yup.InferType<typeof loginSchema>
