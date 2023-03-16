import {useEffect, useState} from "react";
import {Image, ImageResponse} from "../../../types";

const useImages = () => {
    const [images, setImages] = useState<Image[]>([]);
    useEffect( () => {
        fetchImages();
    }, [])

    const fetchImages = async () => {
        const response = await getImages();
        setImages(mapImages(response));
    }

    return {images}
}

export default useImages;

function getImages() {
    return fetch('https://api.unsplash.com/photos/?client_id=uHz50lE1RXf2VOBIsuKTnhWM8YbvRpHf5oxlIuLzrT0&page=1&per_page=10', {
        method: 'GET',
    }).then(r => r.json());
}

export function mapImages(images: ImageResponse[]) {
    return images.map((item: ImageResponse) => ({
        url: item.urls.small,
        description: item.alt_description,
        id: item.id,
    }))
}

