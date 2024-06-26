import { FC, memo } from 'react';
import { Link } from 'react-router-dom';

export const ConstApplication: FC = memo(() => {
  return (
    <div className='my-4 rounded bg-white px-8 pt-6 pb-8'>
      <p className='text-lg font-bold md:text-xl'>Please Apply!</p>
      <div className='mt-4'>
        <Link to='/auth/login' className='btn mr-4'>
          Login
        </Link>
        <Link to='/auth/signup' className='btn bg-white text-gray-600'>
          Sign Up
        </Link>
      </div>
    </div>
  );
});
