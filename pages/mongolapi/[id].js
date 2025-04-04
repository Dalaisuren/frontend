import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ID() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [clothesData, setClothesData] = useState([]);
  const [instrumentsData, setInstrumentsData] = useState([]);
  const [toolsData, setToolsData] = useState([]);
  const [ethnicGroupsData, setEthnicGroupsData] = useState([]);
  const [provincesData, setProvincesData] = useState([]);
  const [historicalFiguresData, setHistoricalFiguresData] = useState([]);
  const [touristAttractionsData, setTouristAttractionsData] = useState([]);
  const [error, setError] = useState(null);

  const { id } = router.query;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const responses = await Promise.all([
          fetch("https://mongol-api-rest.vercel.app/clothes"),
          fetch("https://mongol-api-rest.vercel.app/instruments"),
          fetch("https://mongol-api-rest.vercel.app/Historicaltools"),
          fetch("https://mongol-api-rest.vercel.app/EthnicGroups"),
          fetch("https://mongol-api-rest.vercel.app/provinces"),
          fetch("https://mongol-api-rest.vercel.app/HistoricalFigures"),
          fetch("https://mongol-api-rest.vercel.app/TouristAttractions"),
        ]);

        const [
          clothesResult,
          instrumentsResult,
          toolsResult,
          ethnicGroupsResult,
          provincesResult,
          historicalFiguresResult,
          touristAttractionsResult,
        ] = await Promise.all(responses.map((res) => res.json()));

        setClothesData(clothesResult.clothes || []);
        setInstrumentsData(instrumentsResult.instruments || []);
        setToolsData(toolsResult.tools || []);
        setEthnicGroupsData(ethnicGroupsResult.ethnic_groups || []);
        setProvincesData(provincesResult.provinces || []);
        setHistoricalFiguresData(historicalFiguresResult.historical_figures || []);
        setTouristAttractionsData(touristAttractionsResult.tourist_attractions || []);

        setLoading(false);
      } catch (error) {
        setError("Error fetching data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const findItemById = (id) => {
    const allData = [
      ...clothesData,
      ...instrumentsData,
      ...toolsData,
      ...ethnicGroupsData,
      ...provincesData,
      ...historicalFiguresData,
      ...touristAttractionsData,
    ];
    return allData.find((item) => item.id === id);
  };

  const item = id ? findItemById(id) : null;

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-400 to-pink-500">
        <p className="text-white text-2xl font-semibold animate-pulse">Loading...</p>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center h-screen bg-red-100">
        <p className="text-red-600 text-xl font-semibold">{error}</p>
      </div>
    );

  if (!item) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-300 to-indigo-300">
        <button
          className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out"
          onClick={() => router.back()}
        >
          Back
        </button>
        <p className="mt-4 text-lg font-medium text-gray-700">
          Item with ID {id} not found!
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center p-6 bg-gradient-to-br from-yellow-100 to-orange-100 min-h-screen">
      <button
        className="px-6 py-3 mb-4 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full shadow-lg hover:from-green-500 hover:to-blue-600 transition duration-300 ease-in-out"
        onClick={() => router.back()}
      >
        Back
      </button>
      <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-lg text-center transform hover:scale-105 transition duration-300 ease-in-out">
        <h1 className="text-3xl font-extrabold text-purple-700 mb-4 animate-bounce">
          {item.name}
        </h1>
        <p className="text-gray-700 mb-6 text-lg">{item.description}</p>
        {item.images && (
          <img
            src={item.images}
            className="w-60 mx-auto rounded-full shadow-2xl border-4 border-purple-300"
            alt={item.name}
          />
        )}
      </div>
    </div>
  );
}