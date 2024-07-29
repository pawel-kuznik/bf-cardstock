import { UnitCard } from "../../state";
import { UnitCardPreview } from "../UnitCardPreview";

export interface ItemProps {
    card: UnitCard;
};

/**
 *  A list item of a specific card.
 */
export function Item({ card }: ItemProps) {

    

    return (
        <UnitCardPreview unitCard={card}/>
    );
};