import { ChangeEvent } from "react";
import { OptionsType } from "@atlaskit/select";

export interface ResultsInterface {
    title: string,
    description: string,
    link: string,
    category: string,
    image: string
}

export interface ResultsFilterInterface {
    onChange: any,
    categories: any
}

export interface CategoryInterface extends ChangeEvent<HTMLInputElement> {
    label: string,
    value: string
}
