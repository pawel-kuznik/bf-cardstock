import { ReactNode } from "react";
import { UnitCard } from "../../state";
import { UnitMotivationRating } from "./UnitMotivationRating";
import { ContentBox, DataTable, Grid } from "@pawel-kuznik/react-faceplate";
import { getUnitName } from "../../logic/getUnitName";
import { UnitSkillRating } from "./UnitSkillRating";
import { RollCheck } from "../RollCheck";

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
            <Grid columns={8} rows={1}>
                <Grid.Cell xSpan={6}>
                    <DataTable
                        columns={[
                            { label: "Variant" }, 
                            { label: "Hit on"},
                            { label: "Front armor" }, 
                            { label: "Side armor" }, 
                            { label: "Top armor" },
                            { label: "Cross check"}
                        ]}
                        data={unitCard.variants.map(v => ([
                            v.descriptor,
                            <RollCheck value={v.armor.isHitOn}/>,
                            v.armor.front,
                            v.armor.side,
                            v.armor.top,
                            <RollCheck value={v.movement.cross}/>
                        ]))}
                        />
                </Grid.Cell>
                <Grid.Cell xSpan={1}>
                    <UnitMotivationRating rating={unitCard.motivationRating}/>
                </Grid.Cell>
                <Grid.Cell xSpan={1}>
                    <UnitSkillRating rating={unitCard.skillRating}/>
                </Grid.Cell>
            </Grid>
        </ContentBox>
    );
};