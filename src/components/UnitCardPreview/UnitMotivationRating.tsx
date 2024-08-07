import { MotivationRating } from "../../state/motivationRating";
import { UnitRating } from "../UnitRating";

export interface UnitMotivationRatingProps {
    rating: MotivationRating;
};

export function UnitMotivationRating({ rating }: UnitMotivationRatingProps) {
    return (
        <UnitRating
            title="Motivation"
            label="Courage"
            rating={rating.rating}
            subRatings={[
                { label: "Morale", rating: rating.morale },
                { label: "Remount", rating: rating.remount },
            ]}
        />
    );
};
