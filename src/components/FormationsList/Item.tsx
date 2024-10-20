import { Formation } from "../../state";

export interface ItemProps {
    formation: Formation;
};

export function Item({ formation }: ItemProps) {
    return (
        <div>{formation.name}</div>
    );
};