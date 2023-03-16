import {ImagesPageStyled} from "./Images.styled";
import useImages from "./hooks/useImages";
import {useState} from "react";
import {Manner} from "../../types";
import ImagesGrid from "./components/ImagesGrid";
import Menu from "./components/Menu";
import ImagesList from "./components/ImagesList";
import ImagesCards from "./components/ImagesCards";
import ImagesCarousel from "./components/ImagesCarousel";
import {Context} from "../../context/store";

const Images = () => {

    const [manner, setManner] = useState(Manner.Grid)

    const {images} = useImages();

    return (
        <Context.Provider value={{images}}>
            <ImagesPageStyled>
                <Menu manner={manner} onChangeManner={setManner} />
                {manner === Manner.Grid && <ImagesGrid />}
                {manner === Manner.List && <ImagesList />}
                {manner === Manner.Cards && <ImagesCards />}
                {manner === Manner.Carousel && <ImagesCarousel />}
            </ImagesPageStyled>
        </Context.Provider>
    );
}

export default Images;