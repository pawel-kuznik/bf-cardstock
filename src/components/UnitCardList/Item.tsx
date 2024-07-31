import { UnitCard } from "../../state";
import { useUnitCardStore } from "../../state/unitCardStore";
import { Button } from "../Button";
import { useModalControls } from "../Modal/useModalControls";
import { UnitCardEditorDialog } from "../UnitCardEditorDialog";
import { UnitCardPreview } from "../UnitCardPreview";

export interface ItemProps {
    card: UnitCard;
};

/**
 *  A list item of a specific card.
 */
export function Item({ card }: ItemProps) {

    const { remove } = useUnitCardStore();
    const { show } = useModalControls();

    const handleRemove = () => {
        remove(card);
    };

    const handleEdit = () => {
        show("edit-unit-card", UnitCardEditorDialog, { unitCard: card });
    };

    const controls = (
        <>
            <Button onClick={handleEdit} label="Edit"/>
            <Button onClick={handleRemove} label="Remove"/>
        </>
    );

    return (
        <UnitCardPreview unitCard={card} controls={controls}/>
    );
};