import { UnitCard } from "../../state";

export interface ItemProps {
    card: UnitCard;
};

/**
 *  A list item of a specific card.
 */
export function Item({ card }: ItemProps) {
    return (
        <div>
            {card.descriptor} ({card.id})
        </div>
    );
};