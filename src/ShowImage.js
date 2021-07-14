import React, { useEffect, useState } from 'react'
import googleBar from "./image/allm.jpg"
function ShowImage(props) {
    console.log(props)
    const [image, setImage] = useState([]);
    const url = `https://bing-image-search1.p.rapidapi.com/images/search?q=${props.image}`;
    const getImage = async () => {
        const res = await fetch(url, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "6e9a8a05aamsh7354b4dcb45de67p1d059ajsn4a0a830fa07e",
                "x-rapidapi-host": "bing-image-search1.p.rapidapi.com"
            }
        })

        let data = await res.json();
        let allimage = data.relatedSearches;
        setImage(allimage);
    }
    console.log(image)

    useEffect(() => {
        getImage();
    }, [])
    return (
        <div className="AddImage">
            {
                image.map((elem) => {
                    return (

                        <div className="width_image">
                            <img src={elem.thumbnail.thumbnailUrl} alt="image" className="image_child" />
                        </div>

                    )
                })
            }
        </div>

    )

}


export default ShowImage;
