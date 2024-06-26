import { FC } from 'react';

import { useSearch } from '../hooks/useSearch';

export const SearchForm: FC = () => {
  const { onSubmit, fieldValues } = useSearch();
  const { inputRef, ...inputProps } = fieldValues.q;

  return (
    <form className='form-control' onSubmit={onSubmit}>
      <div className='join'>
        <input
          ref={inputRef}
          {...inputProps}
          type='search'
          placeholder='Search…'
          className='input-bordered input join-item'
        />
        <button className='btn btn-square join-item' type='submit'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            />
          </svg>
        </button>
      </div>
    </form>
  );
};
