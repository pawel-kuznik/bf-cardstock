import { Button, ContentBox, FormField, Grid } from "@pawel-kuznik/react-faceplate";
import { UnitCardVariant, UnitComposition } from "../../state";
import { parseUnitVariant } from "../../logic/parseUnitVariant";
import { useRef, useState } from "react";
import { UnitCompositionLine } from "./UnitCompositionLine";
import { prepareUnitComposition } from "../../logic/prepareUnitComposition";

export interface UnitVariantLineProps {

    index: number;

    variant: UnitCardVariant;

    onRemove: (index: number, variant: UnitCardVariant) => void;

    onChange: (index: number, variant: UnitCardVariant) => void;
};

export function UnitVariantLine({ index, variant, onChange, onRemove }: UnitVariantLineProps) {

    const descriptorRef = useRef<string>(variant.descriptor);
    const armorHitRef = useRef<string>(String(variant.armor.isHitOn));
    const armorFrontRef = useRef<string>(String(variant.armor.front));
    const armorSideRef = useRef<string>(String(variant.armor.side));
    const armorTopRef = useRef<string>(String(variant.armor.top));
    const movementTacticalRef = useRef<string>(String(variant.movement.tactical));
    const movementTerrainRef = useRef<string>(String(variant.movement.terrainDash));
    const movementCrossCountryRef = useRef<string>(String(variant.movement.crossCountry));
    const movementRoadRef = useRef<string>(String(variant.movement.roadDash));
    const movementCrossRef = useRef<string>(String(variant.movement.cross));

    const [ compositions, setCompositions] = useState<UnitComposition[]>(variant.composition);

    const parseFromCurrent = () => {
        const data = {
            "descriptor": descriptorRef.current,
            "armor.isHitOn": armorHitRef.current,
            "armor.front": armorFrontRef.current,
            "armor.side": armorSideRef.current,
            "armor.top": armorTopRef.current,
            "movement.tactical": movementTacticalRef.current,
            "movement.terrainDash": movementTerrainRef.current,
            "movement.crossCountry": movementCrossCountryRef.current,
            "movement.roadDash": movementRoadRef.current,
            "movement.cross": movementCrossRef.current
        };

        return parseUnitVariant(data);
    };

    const handleChange = () => {
        const parsed = parseFromCurrent();        
        parsed.composition = compositions;
        onChange(index, parsed);
    };

    const handleRemove = () => {

        onRemove(index, variant);
    };

    const handleAddComposition = () => {

        setCompositions([...compositions, prepareUnitComposition()]);
    };

    const createUnitCompositionHandler = (idx: number) => (unitComposition: UnitComposition) => {
        const copy = [ ...compositions ];
        copy[idx] = unitComposition;
        setCompositions(copy);

        const parsed = parseFromCurrent();
        parsed.composition = copy;
        onChange(index, parsed);
    };

    const controls = (
        <Button submit={false} size="mini" color="red" onClick={handleRemove}/>
    );
      
    return (
        <ContentBox sideToolbar={controls}>
            <div onChange={handleChange}>
                <FormField label="Name" type="text" valueRef={descriptorRef}/>
                <Grid columns={4} rows={1}>
                    <FormField label="Is hit on" type="number" valueRef={armorHitRef}/>
                    <FormField label="Front armor" type="number" valueRef={armorFrontRef}/>
                    <FormField label="Side armor" type="number" valueRef={armorSideRef}/>
                    <FormField label="Top armor" type="number" valueRef={armorTopRef}/>
                </Grid>
                <Grid columns={5} rows={1}>
                    <FormField label="Tactical movement" type="number" valueRef={movementTacticalRef}/>
                    <FormField label="Terrain dash" type="number" valueRef={movementTerrainRef}/>
                    <FormField label="Cross country" type="number" valueRef={movementCrossCountryRef}/>
                    <FormField label="Road dash" type="number" valueRef={movementRoadRef}/>
                    <FormField label="Cross" type="number" valueRef={movementCrossRef}/>
                </Grid>
            </div>
            <Button label="Add unit composition" onClick={handleAddComposition}/>
            {compositions.map((c, idx) => (<UnitCompositionLine key={idx} composition={c} index={idx} onChange={createUnitCompositionHandler(idx)}/>))}
        </ContentBox>
    );
};