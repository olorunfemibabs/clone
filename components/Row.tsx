import { Movie } from '@/typings';
import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Thumbnail from './Thumbnail';

interface Props {
    title: string
    movies: Movie[]
}

const Row = ({ title, movies }: Props) => {
  return (
    <div>
      <h2>
        {title}
      </h2>

      <div className='group relative md:-ml-2'>
        <ChevronLeftIcon className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100`} />
        <div>
            {
                movies.map((movie) => (
                    <Thumbnail key={movie.id} movie={movie} />
                ) )
            }
        </div>
        <ChevronRightIcon className=' absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100' />
      </div>
    </div>
  )
}

export default Row
