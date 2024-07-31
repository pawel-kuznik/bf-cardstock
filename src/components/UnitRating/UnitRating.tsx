import { RatingLine, RatingLineProps } from "./RatingLine";

export interface UnitRatingProps {

    title: string;
    label: string;
    rating: number;

    subRatings?: RatingLineProps[];
};

export function UnitRating({ title, label, rating, subRatings }: UnitRatingProps) {
    return (
        <div>
            <div>{title}</div>
            <RatingLine rating={rating} label={label}/>
            {subRatings?.map((r, idx) => (<RatingLine key={idx} rating={r.rating} label={r.label}/>))}
        </div>
    );
};