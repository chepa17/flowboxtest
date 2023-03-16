import {
    ImagesCard,
    ImagesCardDescription,
    ImagesCardPlate,
    ImagesCardsStyled,
    ImagesCardText
} from "./ImagesCards.styled";
import {useContext} from "react";
import {Context} from "../../../../context/store";

const ImagesCards = () => {
    const context = useContext(Context);

    return (<ImagesCardsStyled data-testid={'Cards'}>
        {context?.images.map(item => (<ImagesCard key={item.id}>
            <ImagesCardPlate src={item.url}></ImagesCardPlate>
            <ImagesCardDescription>
                <ImagesCardText>{item.description}</ImagesCardText>
            </ImagesCardDescription>
        </ImagesCard>))}
    </ImagesCardsStyled>)
}

export default ImagesCards