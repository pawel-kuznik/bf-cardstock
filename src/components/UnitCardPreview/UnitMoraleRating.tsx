import { MotivationRating } from "../../state/motivationRating";
import { UnitRating } from "../UnitRating";

export interface UnitMoraleRatingProps {
    rating: MotivationRating;
};

export function UnitMoraleRating({ rating }: UnitMoraleRatingProps) {
    return (
        <UnitRating
            title="Morale"
            label="Something"
            rating={rating.rating}
        />
    );
};
