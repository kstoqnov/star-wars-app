import React from 'react';
import useFallbackImg from '../custom_hook/useFallbackImg';


export function ImageContainer({src, fallback, alt}) {

    const imgProps = useFallbackImg(src, fallback);
  
    return <img {...imgProps} alt={alt} />
}