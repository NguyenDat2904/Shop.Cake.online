import Slider from 'react-slick';
import Cart from '~/component/cart/cart';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Slick = (prop) => {
    const { slider } = prop;
    let settings = {
        dots: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        lazyLoad: true,
        Swipe: true,
        cssEase: 'linear',
        pauseOnHover: false,
        respondTo: 'slider',

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <Slider {...settings}>
            {slider?.map((item, index) => {
                return (
                    <Cart
                        img={item.img}
                        price={item.price}
                        oldPrice={item.cost}
                        name={item.name}
                        key={item.id}
                        index={index}
                    />
                );
            })}
        </Slider>
    );
};
