import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import { Formik, Form, Field } from 'formik';
import { object, string } from 'yup';

const forgotValidationSchema = object({
  email: string().email('Invalid email address').required('Email address is required'),
});

const ForgotPassword = () => {
  return (
    <section className='relative overflow-hidden z-10 pt-[180px] pb-[120px]'>
      <div className='container mx-auto'>
        <div className='flex flex-wrap -mx-4'>
          <div className='px-4 w-full'>
            <div className='max-w-[600px] mx-auto border  shadow-md rounded-md p-12 sm:p-[60px]'>
              <div className='flex flex-col'>
                <Link to='/sign-in' className='text-4xl text-dark mb-6 '>
                  <BsArrowLeft />
                </Link>
                <h3 className='font-bold text-dark text-2xl sm:text-3xl mb-3'>Forgot Password</h3>
                <p className='text-body text-base mb-6'>Enter your email address for which account you want to reset your password.</p>
                <Formik
                  initialValues={{
                    email: '',
                  }}
                  onSubmit={(values) => {
                    console.log(values);
                  }}
                  validationSchema={forgotValidationSchema}>
                  {() => (
                    <Form>
                      <Field name='email'>
                        {({ field, meta }) => (
                          <div className='w-full mb-6'>
                            <label htmlFor='email' className='text-body font-medium mb-2 block'>
                              Email Address
                            </label>
                            <input
                              {...field}
                              type='email'
                              id='email'
                              name='email'
                              placeholder='Enter your email address'
                              className='w-full px-3 py-2 placeholder-border border border-body rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
                            />
                            {meta.touched && meta.error ? <div className='text-red-500 text-sm mt-1'>{meta.error}</div> : null}
                          </div>
                        )}
                      </Field>
                      <button className='w-full flex items-center justify-center text-base font-medium text-white bg-primary py-3 px-8 hover:shadow-md hover:bg-opacity-80 transition duration-300 ease-in-out rounded-md'>
                        Reset Password
                      </button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
