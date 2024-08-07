import { SkillRating } from "../../state/skillRating";
import { UnitRating } from "../UnitRating";

export interface UnitMoraleRatingProps {
    rating: SkillRating;
};

export function UnitSkillRating({ rating }: UnitMoraleRatingProps) {
    return (
        <UnitRating
            title="Skill"
            label="Skill"
            rating={rating.rating}
            subRatings={[
                { label: "Assault", rating: rating.assault },
                { label: "Counter attack", rating: rating.counterAttack }
            ]}
        />
    );
};
