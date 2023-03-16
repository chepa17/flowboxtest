import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {ImagesCarouselPlate, ImagesCarouselStyled} from "./ImagesCarousel.styled";
import {useContext} from "react";
import {Context} from "../../../../context/store";

const ImagesCarousel = () => {
    const context = useContext(Context);
    return (
        <ImagesCarouselStyled data-testid={'Carousel'}>
            <Carousel
                {...getConfigurableProps()}
            >
                {context?.images.map(item => (<ImagesCarouselPlate src={item.url} title={item.description} key={item.id}/>))}
            </Carousel>
        </ImagesCarouselStyled>
        )
}

export default ImagesCarousel;

const getConfigurableProps = () => ({
    showArrows: true,
    showStatus: true,
    showIndicators: true,
    infiniteLoop: true,
    showThumbs: false,
    useKeyboardArrows: true,
    autoPlay: true,
    stopOnHover: true,
    swipeable: true,
    dynamicHeight: true,
    emulateTouch: true,
    autoFocus: true,
    thumbWidth: 100,
    selectedItem: 0,
    interval: 2000,
    transitionTime: 500,
    swipeScrollTolerance: 5,
    ariaLabel: undefined,
    width: 350,
});