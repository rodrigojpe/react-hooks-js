// import { useEffect, useState } from 'react';
// import { getGif } from "../helpers/getGifs";
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

// eslint-disable-next-line react/prop-types
export const GifGrid = ( { category } ) => {

// eslint-disable-next-line no-undef, no-unused-vars
const { images , isLoading } = useFetchGifs(category)

console.log({ images, isLoading })




  return (
    <>
      <h3>{ category }</h3>
    {
      isLoading && ( <h2>Cargando... </h2> )
    }



      <div className='card-grid'>
        {  images.map( (image) => (
                <GifItem key={ image.id} { ...image } />
          )) 
        }
      </div>
        
    </>
  )
}