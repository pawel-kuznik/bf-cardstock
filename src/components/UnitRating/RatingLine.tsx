import { RollCheck } from "../RollCheck";

export interface RatingLineProps {
    rating: number;
    label: string;
};

export function RatingLine({ rating, label }: RatingLineProps) {
    return (
        <div>
            <span>{label}</span> <RollCheck value={rating}/>
        </div>
    );
};