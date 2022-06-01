import * as Yup from 'yup'

const register = Yup.object({
  firstName: Yup.string().required("This is required Field!!"),
  lastName: Yup.string().required("This is required Field!!"),
  email: Yup.string().email("Please enter a valid email!!").required("This is required Field!!"),
  // date: Yup.number().date("Please enter a valid Date!!").required("This is required Field!!")
  Address: Yup.string().required("This is required Field!!"),
  PassWord: Yup.string().required("This is required Field!!"),
  ConfirmPassword: Yup.string().oneOf([Yup.ref('PassWord'), ''], 'Passwords must match').required("This is required Field!!"),
  PhoneNumber: Yup.number().typeError('you must specify a number').required("This is required Field!!"),
})

export { register }