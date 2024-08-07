import { ReactNode } from "react";
import { UnitCard } from "../../state";
import { UnitMotivationRating } from "./UnitMotivationRating";
import { ContentBox, Grid } from "@pawel-kuznik/react-faceplate";
import { getUnitName } from "../../logic/getUnitName";
import { UnitSkillRating } from "./UnitSkillRating";

export interface UnitCardProps {
    unitCard: UnitCard;
    controls?: ReactNode;
};

export function UnitCardPreview({ unitCard, controls } : UnitCardProps) {

    return (
        <ContentBox
            label={`${getUnitName(unitCard)} [${unitCard.descriptor}]`}
            sideToolbar={controls}
        >
            <Grid columns={2} rows={1}>
                <UnitMotivationRating rating={unitCard.motivationRating}/>
                <UnitSkillRating rating={unitCard.skillRating}/>
                <Grid.Cell xSpan={2}>
                    
                </Grid.Cell>
            </Grid>
            
            
        </ContentBox>
    );
};