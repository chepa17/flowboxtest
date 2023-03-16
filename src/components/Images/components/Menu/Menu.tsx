import {MenuButton, MenuStyled} from "./Menu.styled";
import {Manner} from "../../../../types";

type Props = {
    manner: Manner;
    onChangeManner: (arg: Manner) => void;
}

const Menu = (props: Props) => {
    const {manner, onChangeManner} = props;
    return (<MenuStyled>
        <MenuButton
            active={manner === Manner.Grid}
            onClick={() => onChangeManner(Manner.Grid)}
            data-testid={'GridButton'}
        >
            {Manner.Grid}
        </MenuButton>
        <MenuButton
            active={manner === Manner.List}
            onClick={() => onChangeManner(Manner.List)}
            data-testid={'ListButton'}
        >
            {Manner.List}
        </MenuButton>
        <MenuButton
            active={manner === Manner.Cards}
            onClick={() => onChangeManner(Manner.Cards)}
            data-testid={'CardsButton'}
        >
            {Manner.Cards}
        </MenuButton>
        <MenuButton
            active={manner === Manner.Carousel}
            onClick={() => onChangeManner(Manner.Carousel)}
            data-testid={'CarouselButton'}
        >
            {Manner.Carousel}
        </MenuButton>
    </MenuStyled>)
}

export default Menu;