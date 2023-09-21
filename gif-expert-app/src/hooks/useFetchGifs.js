import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState( true );

  const getImages = async() => {
    const newImages = await getGif( category );
          setImages(newImages)
          setIsLoading(false)
          console.log( 'result', images)
  }

  // use efect para que solo se ejecute una vez con el [] vacio
  useEffect( () => {
    getImages();

  }, []) 

  return {
     images,
    isLoading
  }
}
