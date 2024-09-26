import { MotivationRating } from "./motivationRating";
import { SkillRating } from "./skillRating";

export interface TranslatedNames {
    [ key: string ]: string
};

export interface UnitCard {
    id: string;
    name: TranslatedNames;
    descriptor: string;
    motivationRating: MotivationRating;
    skillRating: SkillRating;
    variants: UnitCardVariant[];
};

export interface UnitCardVariant {
    descriptor: string;
    armor: ArmorRating;
    movement: MovementRating;
    composition: UnitComposition[];
};

export interface ArmorRating {
    isHitOn: number;
    front: number;
    side: number;
    top: number;  
};

export interface MovementRating {
    tactical: number;
    terrainDash: number;
    crossCountry: number;
    roadDash: number;
    cross: number;
};

export interface Weapon {
    descriptor: string;
    range: number;
    rofHalted: number;
    rofMoving: number;
    antiTank: number;
    firePower: number;
    notes: string;
};

export interface UnitComposition {
    models: UnitCompositionModels[]
};

export interface UnitCompositionModels {
    model: string;
    count: number;
};
