import { Formik, Form, Field } from 'formik';
import { object, string, ref } from 'yup';

const resetValidationSchema = object({
  password: string().required('Password is required'),
  confirmPassword: string()
    .required('Confirm Password is required')
    .oneOf([ref('password'), null], 'Confirm Password does not match'),
});

const ResetPassword = () => {
  return (
    <section className='relative overflow-hidden z-10 pt-[180px] pb-[120px]'>
      <div className='container mx-auto'>
        <div className='flex flex-wrap -mx-4'>
          <div className='px-4 w-full'>
            <div className='max-w-[600px] mx-auto border shadow-md rounded-md p-12 sm:p-[60px]'>
              <h3 className='font-bold text-dark text-2xl sm:text-3xl mb-3'>Forgot Password</h3>
              <p className='text-body text-base mb-6'>Enter your email address for which account you want to reset your password.</p>
              <Formik
                initialValues={{
                  email: '',
                }}
                onSubmit={(values) => {
                  console.log(values);
                }}
                validationSchema={resetValidationSchema}>
                {() => (
                  <Form>
                    <Field name='password'>
                      {({ field, meta }) => (
                        <div className='w-full mb-6'>
                          <label htmlFor='password' className='text-body font-medium mb-2 block'>
                            Password
                          </label>
                          <input
                            {...field}
                            type='password'
                            id='password'
                            name='password'
                            placeholder='***************'
                            className='w-full px-3 py-2 placeholder-border border border-body rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
                          />
                          {meta.touched && meta.error ? <div className='text-red-500 text-sm mt-1'>{meta.error}</div> : null}
                        </div>
                      )}
                    </Field>
                    <Field name='confirmPassword'>
                      {({ field, meta }) => (
                        <div className='w-full mb-6'>
                          <label htmlFor='confirmPassword' className='text-body font-medium mb-2 block'>
                            Confirm Password
                          </label>
                          <input
                            {...field}
                            type='password'
                            id='confirmPassword'
                            name='confirmPassword'
                            placeholder='***************'
                            className='w-full px-3 py-2 placeholder-border border border-body rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
                          />
                          {meta.touched && meta.error ? <div className='text-red-500 text-sm mt-1'>{meta.error}</div> : null}
                        </div>
                      )}
                    </Field>

                    <button className='w-full flex items-center justify-center text-base font-medium text-white bg-primary py-3 px-8 hover:shadow-md hover:bg-opacity-80 transition duration-300 ease-in-out rounded-md'>
                      Reset Send
                    </button>
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

export default ResetPassword;
