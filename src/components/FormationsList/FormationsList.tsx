import { useFormationStore } from "../../state";
import { Item } from "./Item";

export function FormationsList() {

    const { formations } = useFormationStore();

    return (
        <div>
            {Object.values(formations).map((f, k) => (
                <Item key={k} formation={f}/>
            ))}
        </div>
    );
};