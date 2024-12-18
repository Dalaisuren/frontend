import React, { useState } from "react"; 

export default function SearchComponent() {
    const [search, setSearch] = useState("");

    const handleChange = (event) => {
        setSearch(event.target.value); 
    }

    console.log(search); 

    return (
        <div>
            <input
                px-3
                value={search}
                onChange={handleChange}
                placeholder="Search..."
            />
            <img 
                src="https://static.vecteezy.com/system/resources/thumbnails/033/662/051/small_2x/cartoon-lofi-young-manga-style-girl-while-listening-to-music-in-the-rain-ai-generative-photo.jpg" 
                alt="Girl listening to music in the rain" ></img>
            <img src="https://files.idyllic.app/files/static/359034" alt="emo boy and girl"></img>
        </div>
    );
}
