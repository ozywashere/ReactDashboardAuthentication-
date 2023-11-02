import { BsCheck } from 'react-icons/bs';
import { Link } from 'react-router-dom';
const ResetPasswordSuccess = () => {
  return (
    <section className='relative overflow-hidden z-10 pt-[180px] pb-[120px]'>
      <div className='container mx-auto'>
        <div className='flex flex-wrap -mx-4'>
          <div className='px-4 w-full'>
            <div className='max-w-[600px] mx-auto border shadow-md rounded-md p-12 sm:p-[60px]'>
              <div className='flex flex-col items-center text-center'>
                <Link to='/sign-up' className='text-5xl text-center text-white rounded-full mb-6 bg-emerald-600 '>
                  <BsCheck />
                </Link>
                <h3 className='font-bold text-dark text-2xl sm:text-3xl mb-3'>Password Reset Done</h3>
                <p className='text-body text-base mb-6'>Now you can access you account.</p>
                <Link
                  to='/sign-in'
                  className='w-full flex items-center justify-center text-base font-medium text-white bg-primary py-3 px-8 hover:shadow-md hover:bg-opacity-80 transition duration-300 ease-in-out rounded-md'>
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetPasswordSuccess;
