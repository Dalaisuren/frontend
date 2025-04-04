import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function MongolAPI() {
  const [clothesData, setClothesData] = useState([]);
  const [instrumentsData, setInstrumentsData] = useState([]);
  const [toolsData, setToolsData] = useState([]);
  const [ethnicGroupsData, setEthnicGroupsData] = useState([]);
  const [provincesData, setProvincesData] = useState([]);
  const [historicalFiguresData, setHistoricalFiguresData] = useState([]);
  const [touristAttractionsData, setTouristAttractionsData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [view, setView] = useState('grid');
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await Promise.all([
          fetch('https://mongol-api-rest.vercel.app/clothes'),
          fetch('https://mongol-api-rest.vercel.app/instruments'),
          fetch('https://mongol-api-rest.vercel.app/Historicaltools'),
          fetch('https://mongol-api-rest.vercel.app/EthnicGroups'),
          fetch('https://mongol-api-rest.vercel.app/provinces'),
          fetch('https://mongol-api-rest.vercel.app/HistoricalFigures'),
          fetch('https://mongol-api-rest.vercel.app/TouristAttractions'),
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

        console.log("Instruments Data:", instrumentsData); // Added this line!
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const filterData = (data) =>
    data.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-8">
      <h1 className="text-4xl font-extrabold text-center mb-8 animate-pulse">
        Explore Mongolian Culture
      </h1>

      <div className="flex justify-between items-center w-full max-w-6xl mx-auto mb-6">
        <input
          type="text"
          placeholder="Search..."
          className="p-3 w-1/2 rounded-full bg-gray-800 border-2 border-gray-700 focus:outline-none focus:border-blue-500 text-white"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={() => setView(view === 'grid' ? 'list' : 'grid')}
          className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 transition-colors duration-300"
        >
          {view === 'grid' ? 'List View' : 'Grid View'}
        </button>
      </div>

      {[
        { title: 'Clothes', data: filterData(clothesData) },
        { title: 'Instruments', data: filterData(instrumentsData) },
        { title: 'Historical Tools', data: filterData(toolsData) },
        { title: 'Ethnic Groups', data: filterData(ethnicGroupsData) },
        { title: 'Provinces', data: filterData(provincesData) },
        { title: 'Historical Figures', data: filterData(historicalFiguresData) },
        { title: 'Tourist Attractions', data: filterData(touristAttractionsData) },
      ].map(({ title, data }) => (
        <div key={title} className="w-full max-w-6xl mx-auto mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-gray-200">{title}</h2>
          <div
            className={`grid ${
              view === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6' : 'space-y-6'
            }`}
          >
            {data.length > 0 ? (
              data.map((item) => (
                <div
                  key={item.id}
                  className={`bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer ${
                    view === 'grid' ? '' : 'flex items-center'
                  }`}
                  onClick={() => router.push(`/mongolapi/${item.id}`)}
                >
                  {item.images && (
                    <img
                      src={item.images}
                      alt={item.name}
                      className={`rounded-xl object-cover mb-4 ${
                        view === 'grid' ? 'w-full h-48' : 'w-32 h-32 mr-4'
                      }`}
                    />
                  )}
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                  {}
                  {title === 'Instruments' && console.log("Item ID:", item.id)}
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">No data found.</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}