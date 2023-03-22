import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {  ademi, bms, bson, coach, cryptoL, DefiQ, dehkunle, dfantom, feyi, noble, ohjay, prudent, quiv, sarah, xeus } from '@/public/idolos';

const HeroRight = () => {
    const images =[
        {
            image: '/xeus.png',
            name:'image1'
        },
        {
            image: '/idolos/c-coach.png',
            name: 'image1'
        },
        {
            image: dehkunle,
            name: 'image1'
        },
        {
            image: quiv,
            name: 'image1'
        },
        {
            image: ademi,
            name: 'image1'
        },
        {
            image: sarah,
            name: 'image1'
        },
        {
            image: feyi,
            name: 'image1'
        },
        {
            image: dfantom,
            name: 'image1'
        },
        {
            image: cryptoL,
            name: 'image1'
        },
        {
            image: ohjay,
            name: 'image1'
        },
        {
            image: DefiQ,
            name: 'image1'
        },
        {
            image: bms,
            name: 'image1'
        },
        {
            image: prudent,
            name: 'image1'
        },
        {
            image: bson,
            name: 'image1'
        },
        {
            image: noble,
            name: 'image1'
        },
    ]

    return (
        <div className='relative'>
            <div >
                <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                showArrows={false}
                interval={2000}>
                    {images.map((item,i) =>(
                        <div key={i}>
                            <Image src={item.image} alt={item.name} width={400} height={400}/>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default HeroRight;