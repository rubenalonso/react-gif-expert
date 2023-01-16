import { useEffect, useState } from "react";

import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getImages = async() => {
        const newImages = await getGifs( category ) ;
        //Despues de hacer el setImages el hook dispara la re-renderización del componente
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect( () => {
      getImages();
    }, [ ])

    return {
        images: images,
        isLoading: isLoading
    }
}
