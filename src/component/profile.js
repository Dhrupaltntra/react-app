import React from "react";
import { Formik } from "formik"
import { register } from "../schema/register";

const Profile = () => {
  return (
    <div className="container">
      <Formik 
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          Dob: '',
          Address: '',
          PassWord: '',
          ConfirmPassword: '',
          PhoneNumber: ''
        }}

        validationSchema={register}

      >
        {({ isSubmitting, handleChange, handleBlur, values, handleSubmit, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <input 
                value={values.firstName}
                name='firstName'
                placeholder="First Name"
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-100 mb-3"
            />
            {errors.firstName && touched.firstName && <p>{errors.firstName}</p>}
            <input 
                value={values.lastName}
                name='lastName'
                placeholder="Last Name"
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-100 mb-3"
            />
            {errors.lastName && touched.lastName && <p>{errors.lastName}</p>}
            <input 
                value={values.email}
                name='email'
                placeholder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-100 mb-3"
            />
            {errors.email && touched.email && <p>{errors.email}</p>}
            {/* <input 
                value={values.Date}
                name='Date'
                placeholder="Date"
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {errors.Date && <p>{errors.Date}</p>} */}
            <input 
                value={values.Address}
                name='Address'
                placeholder="Address"
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-100 mb-3"
            />
            {errors.Address && touched.Address && <p>{errors.Address}</p>}
            <input 
                value={values.PassWord}
                name='PassWord'
                placeholder="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-100 mb-3"
            />
            {errors.PassWord && touched.PassWord && <p>{errors.PassWord}</p>}
            <input 
                value={values.ConfirmPassword}
                name='ConfirmPassword'
                placeholder="Confirm Password"
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-100 mb-3"
            />
            {errors.ConfirmPassword && touched.ConfirmPassword && <p className="text-left">{errors.ConfirmPassword}</p>}
            <input 
                value={values.PhoneNumber}
                name='PhoneNumber'
                placeholder="Phone Number"
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-100 mb-3"
            />
            {errors.PhoneNumber && touched.PhoneNumber && <p>{errors.PhoneNumber}</p>}
            <button disabled={isSubmitting} onClick={handleSubmit} type='submit'>Submit</button>
          </form>
        )}

      </Formik>
    </div>
  )
}

export default Profile;