import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { object, string, ref } from 'yup';

const signUpValidationSchema = object({
  firstName: string().required('Name is required'),
  lastName: string().required('Surname is required'),
  email: string().email('Email is invalid').required('Email is required'),
  password: string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmPassword: string()
    .oneOf([ref('password'), null], 'Passwords must match')
    .required('Repeat password is required'),
});

const SignUp = () => {
  return (
    <section className='relative overflow-hidden z-10 pt-[180px] pb-[120px]'>
      <div className='container mx-auto'>
        <div className='flex flex-wrap -mx-4'>
          <div className='px-4 w-full'>
            <div className='max-w-[600px]  mx-auto border  shadow-md rounded-md p-12 sm:p-[60px]'>
              <h3 className='font-bold text-dark text-2xl sm:text-3xl mb-3'>Welcome to Crypto App</h3>
              <p className='text-body text-lg mb-6'>Create a free account by filling data below </p>
              <Formik
                initialValues={{ firstName: '', lastName: '', email: '', password: '', confirmPassword: '' }}
                validationSchema={signUpValidationSchema}
                onSubmit={(values) => {
                  // same shape as initial values
                  console.log(values);
                }}>
                {() => (
                  <Form>
                    <div className='flex flex-col lg:items-center justify-between gap-6 mb-8 lg:flex-row'>
                      <Field name='firstName'>
                        {({ field, meta }) => (
                          <div className='flex-1'>
                            <label className='block text-base text-dark1  font-medium mb-3' htmlFor='firstName'>
                              First Name
                            </label>
                            <input
                              {...field}
                              className='w-full px-3 py-2 placeholder-border border border-body rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent peer'
                              id='firstName'
                              type='text'
                              placeholder='Enter your first name ...'
                            />
                            {meta.touched && meta.error ? (
                              <div className='flex items-center mt-2  text-sm text-red-800 rounded-lg '>{meta.error}</div>
                            ) : null}
                          </div>
                        )}
                      </Field>
                      <Field name='lastName'>
                        {({ field, meta }) => (
                          <div className='flex-1'>
                            <label className='block text-base text-dark1 font-medium mb-3' htmlFor='lastName'>
                              Last Name
                            </label>
                            <input
                              {...field}
                              className='w-full px-3 py-2 placeholder-border border border-body rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
                              id='lastName'
                              type='text'
                              placeholder='Enter your last name ...'
                            />
                            {meta.touched && meta.error ? (
                              <div className='flex items-center mt-2 text-sm text-red-800 rounded-lg '>{meta.error}</div>
                            ) : null}
                          </div>
                        )}
                      </Field>
                    </div>
                    <Field name='email'>
                      {({ field, meta }) => (
                        <div className='mb-8'>
                          <label className='block text-dark1 text-base font-medium mb-3' htmlFor='email'>
                            Email
                          </label>
                          <input
                            {...field}
                            className='w-full px-3 py-2 placeholder-border border border-body rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
                            id='email'
                            type='email'
                            placeholder='Enter your email ...'
                          />
                          {meta.touched && meta.error ? (
                            <div className='flex items-center rounded-md mt-2 text-sm text-red-800'>{meta.error}</div>
                          ) : null}
                        </div>
                      )}
                    </Field>
                    <Field name='password'>
                      {({ field, meta }) => (
                        <div className='mb-8'>
                          <label className='block text-dark1 text-base font-medium mb-3' htmlFor='password'>
                            Password
                          </label>
                          <input
                            {...field}
                            className='w-full px-3 py-2 placeholder-border border border-body rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
                            id='password'
                            type='password'
                            placeholder='Enter your password ...'
                          />
                          {meta.touched && meta.error ? (
                            <div className='flex items-center mt-2 text-sm text-red-800 rounded-lg '>{meta.error}</div>
                          ) : null}
                        </div>
                      )}
                    </Field>
                    <Field name='confirmPassword'>
                      {({ field, meta }) => (
                        <div className='mb-8'>
                          <label className='block text-base text-dark1 font-medium mb-3' htmlFor='confirmPassword'>
                            Confirm Password
                          </label>
                          <input
                            {...field}
                            className='w-full px-3 py-2 placeholder-border border border-body rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
                            id='confirmPassword'
                            type='password'
                            placeholder='Enter your password ...'
                          />
                          {meta.touched && meta.error ? (
                            <div className='flex items-center mt-2 text-sm text-red-800 rounded-lg '>{meta.error}</div>
                          ) : null}
                        </div>
                      )}
                    </Field>
                    <div className='flex items-center mb-8'>
                      <input className='w-4 h-4 bg-primary border-body rounded focus:ring-primary  mr-2' id='terms' type='checkbox' />
                      <label className='text-base text-body' htmlFor='terms'>
                        I agree to the{' '}
                        <Link className='text-primary hover:underline' to='#'>
                          Terms & Conditions
                        </Link>
                      </label>
                    </div>
                    <button
                      type='submit'
                      className='w-full flex items-center justify-center text-base font-medium text-white bg-primary py-3 px-8 hover:shadow-md hover:bg-opacity-80 transition duration-300 ease-in-out rounded-md'>
                      Sign Up
                    </button>
                    <div className='flex items-center justify-center mt-6 '>
                      <span className='text-base text-body'>Already have an account?</span>
                      <Link className='text-primary hover:underline ml-2 font-semibold' to='/sign-in'>
                        Sign In
                      </Link>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
