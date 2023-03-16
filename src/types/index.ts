export type Image = {
    url: string,
    description: string,
    id: string,
}

export type ImageResponse = {
    alt_description: string;
    blur_hash?: string;
    color?: string;
    created_at?: string;
    description?: string;
    height?: number;
    id: string;
    urls: UrlsType;
}

type UrlsType = {
    full: string;
    raw: string;
    regular: string;
    small: string;
}

export type ContextTypes = {
    images: Image[]
}

export enum Manner {
    Grid = "Grid",
    Carousel = "Carousel",
    List = "List",
    Cards = "Cards"
}