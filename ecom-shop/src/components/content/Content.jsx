import React, { useState, useEffect } from 'react';
import Carousel from './Carousel';

export default
function Content(){
  const images = [
    'https://via.placeholder.com/1000x300',
    'https://via.placeholder.com/1000x300',
  
  ];   
  return(
        <>
<Carousel images={images} />
        </>
    )
}


 
  