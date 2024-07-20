import { MotivationRating } from "./motivationRating";
import { SkillRating } from "./skillRating";

export interface UnitCard {
    id: string;
    descriptor: string;
    motivationRating: MotivationRating;
    skillRating: SkillRating;
    variants: UnitCardVariance[];
};

export interface UnitCardVariance {
    descriptor: string;
    armor: ArmorRating;
    movement: MovementRating;
    cost: UnitCost[];
};

export interface ArmorRating {
    isHitOn: number;
    front: number;
    side: number;
    top: number;  
};

export interface MovementRating {
    tactival: number;
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

export interface UnitCost {
    count: number;
    total: number;
};
