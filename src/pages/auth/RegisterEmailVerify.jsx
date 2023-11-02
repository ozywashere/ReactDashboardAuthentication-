import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';
const RegisterEmailVerify = () => {
  return (
    <section className='relative overflow-hidden z-10 pt-[180px] pb-[120px]'>
      <div className='container mx-auto'>
        <div className='flex flex-wrap -mx-4'>
          <div className='px-4 w-full'>
            <div className='max-w-[600px] mx-auto border shadow-md rounded-md p-12 sm:p-[60px]'>
              <div className='flex flex-col items-center text-center'>
                <Link to='/sign-up' className='text-5xl text-center text-primary mb-6 '>
                  <MdEmail />
                </Link>
                <h3 className='font-bold text-dark text-2xl sm:text-3xl mb-3'>Email Verification</h3>
                <p className='text-body text-base mb-6'>
                  We have sent you an email with a link to verify your account
                  <a href='#!' className='font-medium ml-2 text-base text-dark'>
                    abc123@gmail.com
                  </a>
                  . Please check your email inbox.
                </p>
                <div className='w-full flex items-center justify-between space-x-2'>
                  <button className='w-full flex items-center justify-center text-base font-medium text-white bg-primary py-3 px-8 hover:shadow-md hover:bg-opacity-80 transition duration-300 ease-in-out rounded-md'>
                    Resend Email
                  </button>
                  <Link
                    to='/'
                    className='w-full flex items-center justify-center text-base font-medium bg-white  text-primary py-3 px-8  hover:bg-opacity-80 transition duration-300 ease-in-out rounded-md border border-primary border-opacity-5 hover:shadow-md'>
                    Back to Homepage
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterEmailVerify;
