import { FormEvent, ReactNode } from "react";

export interface BasicFormProps {

    /**
     *  Handle submit on the form. The data object is a key-value store
     *  of all inputs inside the form.
     */
    onSubmit?: (data: object) => void;

    /**
     *  Handle change on the form. The data object is a key-value store
     *  of all inputs inside the form.
     */
    onChange?: (data: object) => void;

    /**
     *  The children inside the form.
     */
    children?: ReactNode;
};

/**
 *  This is a component that should be used when a simple form should be shown.
 *  The component offers an easy way to handle submit and changes in the form.
 */
export function BasicForm({ children, onSubmit, onChange }: BasicFormProps) {

    const extractData = (event: FormEvent) : object => {

        const form = (event.target as HTMLElement).closest("form") as HTMLFormElement;

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        const selects = form.querySelectorAll("select");

        for (let select of selects) {

            if (select.getAttribute('disabled')) continue;

            const name = String(select.getAttribute('name'));
            if (!name) continue;

            data[name] = select.value;
        }        

        return data;
    };

    const handleChange = (event: FormEvent) => {

        if (!onChange) return;

        onChange(extractData(event));
    };

    const handleSubmit = (event: FormEvent) => {

        if (!onSubmit) return;

        event.preventDefault();

        onSubmit(extractData(event));
    };

    return (
        <form onSubmit={handleSubmit} onChange={handleChange}>
            {children}
        </form>
    );
};