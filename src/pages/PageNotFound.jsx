import { Link } from 'react-router-dom';
import notFound from '../assets/404.svg';

const PageNotFound = () => {
  return (
    <section className='relative z-10 pt-[180px] pb-[120px]'>
      <div className='container mx-auto'>
        <div className='flex flex-wrap -mx-4'>
          <div className='px-4 w-full'>
            <div className='max-w-full h-full mx-auto text-center '>
              <div className='mx-auto mb-9 text-center'>
                <img src={notFound} alt='404' className='w-full mx-auto text-center h-[210px]' />
              </div>
              <h3 className='font-bold text-dark text-2xl sm:text-3xl mb-3'>Sorry, the page can’t be found</h3>
              <p className='text-body text-lg mb-6'>Sorry, the page can’t be found</p>
              <div className='flex'>
                <Link
                  to='/'
                  className=' flex items-center justify-center mx-auto text-base font-medium text-white bg-primary py-4 px-9 hover:shadow-md hover:bg-opacity-80 transition duration-300 ease-in-out rounded-md'>
                  Back to Homepage
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;
