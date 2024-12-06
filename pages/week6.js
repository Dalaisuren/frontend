import { useState } from "react";

export default function Home() {
    
    const [filter, setFilter] = useState(""); 
    const data = [
        {
            id: 1,
            title: "Test1",
            description: "dgbiurhfiuhsifhishfiues",
        },
        {
            id: 2,
            title: "Test2",
            description: "dgbiurhfiuhsifhishfiues",
        },
        {
            id: 3,
            title: "Test3",
            description: "dgbiurhfiuhsifhishfiues",
        },
        {
            id: 4,
            title: "Test4",
            description: "dgbiurhfiuhsifhishfiues",
        },
    ];

    const filteredData = data.filter((item) =>
        item.title.toLowerCase().includes(filter.toLowerCase()) ||
        item.description.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div className="h-screen w-full bg-white flex justify-center items-start">
            <div className="w-[80%] relative">
                <button
                    className="absolute top-4 right-4 text-white px-6 py-3 bg-blue-500 rounded-md shadow-lg transition duration-300 hover:bg-blue-400"
                    onClick={() => setGrid((prev) => !prev)}
                >
                    Toggle grid
                </button>
                
                
                <div className="mb-4">
                    <input
                        type="text"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)} 
                        placeholder="Search by title or description"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                </div>

                <div className="text-black mt-6">
                    <h1 className="text-2xl font-semibold mb-6">Нийтлэлүүд</h1>

                    <div
                        className={`${
                            grid ? "grid grid-cols-2 gap-6" : "flex flex-col"
                        }`}
                    >
                        {filteredData.map((item) => (
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
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
