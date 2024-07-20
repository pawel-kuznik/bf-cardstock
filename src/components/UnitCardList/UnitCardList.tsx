import { useUnitCardStore } from "../../state/unitCardStore";
import { Item } from "./Item";

/**
 *  A component that shows a list stored unit cards. The user will
 *  be able to manage them and depending on the mode these might
 *  be used to create armies, formations, and so on. 
 */
export function UnitCardList() {

    const { cards } = useUnitCardStore();

    return (
        <div>
            {Object.values(cards).map(c => (<Item key={c.id} card={c}/>))}
        </div>
    );
};