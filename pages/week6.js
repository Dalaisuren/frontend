import { useState } from "react";

export default function Home() {
    const [filter, setFilter] = useState(""); 
    const data = [
        {
            id: 1,
            title: "Love",
            description: "love, an emotion characterized by strong feelings of affection for another arising out of kinship, companionship, admiration, or benevolence.",
        },
        {
            id: 2,
            title: "Rule 5",
            description: "Any club with an open spot on its 40-man roster is eligible to make a selection. Teams pick in reverse order of the previous season's standings. In 2023, 10 players were picked, eight of whom wound up seeing MLB playing time in 2024.",
        },
        {
            id: 3,
            title: "San Marino",
            description: "This tiny nation on the Italian peninsula holds the Guinness World Record for the oldest existing republic in the world.",
        },
        {
            id: 4,
            title: "Test4",
            description: "Medkua.com",
        },
    ];

    const filteredData = data.filter((item) =>
        item.title.toLowerCase().includes(filter.toLowerCase()) ||
        item.description.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div className="h-screen w-full bg-white flex justify-center items-start">
            <div className="w-[80%] relative">
                <div className="mb-4">
                    <input
                        type="text"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)} 
                        placeholder="haih"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                </div>

                <div className="text-black mt-6">
                    <h1 className="text-2xl font-semibold mb-6">Нийтлэлүүд</h1>

                    <div className="grid grid-cols-2 gap-6">
                        {filteredData.length > 0 ? (
                            filteredData.map((item) => (
                                <div
                                    key={item.id}
                                    className="p-6 border border-gray-200 flex justify-center items-center min-h-[100px] bg-gray-50 rounded-lg shadow-md transition duration-300"
                                >
                                    <div className="text-center">
                                        <h3 className="text-xl font-semibold mb-2">
                                            {item.title} 
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-2 text-center text-gray-500 text-lg">
                                hereglegch oldsongui
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
