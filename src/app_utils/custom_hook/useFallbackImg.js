import { useState } from 'react';

/**
 * @param {String} img
 * @param {String} fallback
 * @returns {Object} { src: String, onError: Func }
*/
export default function useFallbackImg(img, fallback) {

  const [src, setImg] = useState(img)

  if(src === null){

    setImg(fallback)

  }

  function onError(e) {
    console.log('Missing img', img, e)
    setImg(fallback)
  }

  return { src, onError }
}
