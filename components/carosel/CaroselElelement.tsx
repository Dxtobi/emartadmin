
import { profile } from 'console';
import Carousel from 'nuka-carousel/lib/carousel';
import { Key } from 'react';
import IndeCard from '../cards/IndeCard';


export default function CarouselElement(params: { products: any; }) {

    const {products} = params
  
    return (
        <Carousel
            renderCenterLeftControls={({ previousDisabled, previousSlide }) => (
                <button className='w-[100px] h-[300px]' onClick={previousSlide} disabled={previousDisabled}>
                
                </button>
            )}
            renderCenterRightControls={({ nextDisabled, nextSlide }) => (
                <button
                    className='w-[100px] h-[300px]'
                    onClick={nextSlide} disabled={nextDisabled}>
                </button>
            )}
            animation="zoom"
            autoplay={true}
            //autoplayInterval={50}
            >
            {
                products.map((product: any, index: Key | null | undefined) => (
                    <IndeCard product={product} key={index} />
                ))
            }
            </Carousel>
                )
}