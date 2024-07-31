import { ReactNode } from "react";
import { UnitCard } from "../../state";
import { UnitName } from "../UnitName";

import "./UnitCardPreview.css";
import { UnitMoraleRating } from "./UnitMoraleRating";

export interface UnitCardProps {
    unitCard: UnitCard;
    controls?: ReactNode;
};

export function UnitCardPreview({ unitCard, controls } : UnitCardProps) {

    return (
        <div className="unitcardpreview">
            <div className="unitcardpreview-name">
                <UnitName unit={unitCard}/>
            </div>
            <div className="unitcardpreview-descriptor">
                {unitCard.descriptor}
            </div>
            <div className="unitcardpreview-controls">
                {controls}
            </div>
            <div>
                <UnitMoraleRating rating={unitCard.motivationRating}/>
            </div>
        </div>
    );
};