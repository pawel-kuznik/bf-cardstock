export interface RatingLineProps {
    rating: number;
    label: string;
};

export function RatingLine({ rating, label }: RatingLineProps) {

    return (
        <div>
            <span>{rating}</span>
            <span>{label}</span>
        </div>
    );
};