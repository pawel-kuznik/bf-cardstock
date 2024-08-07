import { UnitCard } from "../../state";
import { Button } from "@pawel-kuznik/react-faceplate";
import { useUnitCardStore } from "../../state/unitCardStore";
import { useModalControls } from "@pawel-kuznik/react-faceplate";
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
            <Button onClick={handleEdit} size="mini" style="blue"/>
            <Button onClick={handleRemove} size="mini" style="red"/>
        </>
    );

    return (
        <UnitCardPreview unitCard={card} controls={controls}/>
    );
};