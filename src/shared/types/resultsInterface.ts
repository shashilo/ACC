import { ChangeEvent } from "react";
export interface ResultsInterface {
    title: string,
    description: string,
    link: string,
    category: string,
    image: string
}

export interface CategoryInterface extends ChangeEvent<HTMLInputElement> {
    label: string,
    value: string
}
