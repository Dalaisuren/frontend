import React, { useState } from "react"; 

export default function SearchComponent() {
    const [search, setSearch] = useState(""); // Declare search state

    const handleChange = (event) => {
        setSearch(event.target.value); // Update state when input changes
    };

    console.log(search); // Logs search value on every change

    return (
        <div>
            <input
                type="text"
                value={search}
                onChange={handleChange} // Update the search state on change
                placeholder="Search..."
            />
            <img 
                src="https://static.vecteezy.com/system/resources/thumbnails/033/662/051/small_2x/cartoon-lofi-young-manga-style-girl-while-listening-to-music-in-the-rain-ai-generative-photo.jpg" 
                alt="Girl listening to music in the rain" 
            />
        </div>
    );
}
