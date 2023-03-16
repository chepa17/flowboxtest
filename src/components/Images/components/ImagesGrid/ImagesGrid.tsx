import {ImagesGridPlate, ImagesGridStyled} from "./ImagesGrid.styled";
import {useContext} from "react";
import {Context} from "../../../../context/store";

const ImagesGrid = () => {
    const context = useContext(Context);

    return (
        <ImagesGridStyled data-testid={'Grid'}>
            {context?.images.map(item => (<ImagesGridPlate src={item.url} title={item.description} key={item.id} />))}
        </ImagesGridStyled>
    )
};

export default ImagesGrid;