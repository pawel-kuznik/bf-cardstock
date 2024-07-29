import { ReactNode } from "react";
import { UnitCard } from "../../state";
import { UnitName } from "../UnitName";

import "./UnitCardPreview.css";

export interface UnitCardProps {
    unitCard: UnitCard;
    controls?: ReactNode;
};

export function UnitCardPreview({ unitCard, controls } : UnitCardProps) {

    return (
        <div className="unitcardpreview">
            <UnitName unit={unitCard}/>
            {unitCard.descriptor}
            {controls}
        </div>
    );
};