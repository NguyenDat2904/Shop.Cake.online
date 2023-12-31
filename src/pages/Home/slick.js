import Slider from 'react-slick';
import ItemCart from '~/component/ItemCart/ItemCart';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Slick = (prop) => {
    const { slider, toggle } = prop;
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
                    <div key={index}>
                        <ItemCart data={item} index={index} toggle={toggle} />
                    </div>
                );
            })}
        </Slider>
    );
};
