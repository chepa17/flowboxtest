import {
    ImagesListDescription,
    ImagesListItem,
    ImagesListPlate,
    ImagesListStyled,
    ImagesListText
} from "./ImagesList.styled";
import {useContext} from "react";
import {Context} from "../../../../context/store";

const ImagesList = () => {
    const context = useContext(Context);

    return (
        <ImagesListStyled data-testid={'List'}>
            {context?.images.map(item => (<ImagesListItem key={item.id}>
                <ImagesListPlate src={item.url}></ImagesListPlate>
                <ImagesListDescription>
                    <ImagesListText>{item.description}</ImagesListText>
                </ImagesListDescription>
            </ImagesListItem>))}
        </ImagesListStyled>
    )
}

export default ImagesList;