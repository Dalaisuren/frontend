import { useState } from 'react';

const data = [
  { id: 1, name: 'Enkhtugs', description: 'Loves coding and exploring new tech.', age: 16 },
  { id: 2, name: 'Shine-Erdene', description: 'A passionate graphic artist.', age: 16 },
  { id: 3, name: 'Sh.Temujin', description: 'Backend enthusiast.', age: 16 },
  { id: 4, name: 'E.Temujin', description: 'A creative UI/UX thinker.', age: 16 },
  { id: 5, name: 'B.Temujin', description: 'Product management wizard.', age: 15 },
  { id: 6, name: 'Temuulen', description: 'Software innovation specialist.', age: 16 },
  { id: 7, name: 'Batmend', description: 'Full-stack problem solver.', age: 16 },
  { id: 8, name: 'Anar', description: 'Passionate about web development.', age: 16 },
  { id: 9, name: 'Ochir-Erdene', description: 'Data science explorer.', age: 16 },
  { id: 10, name: 'Emily', description: 'Digital marketing guru.', age: 16 },
  { id: 11, name: 'Tergel', description: 'Mobile app developer.', age: 16 },
  { id: 12, name: 'Dalaisuren', description: 'Devolops engineer and optimist.', age: 15},
  { id: 13, name: 'Enkh-Uchral', description: 'Web design aficionado.', age: 16 },
  { id: 14, name: 'Tugs-Asralt', description: 'Loves data analytics.', age: 16 },
  { id: 15, name: 'Enkhjav', description: 'Cloud computing architect.', age: 16 },
  { id: 16, name: 'Amartuvshin', description: 'Designing amazing products.', age: 16 },
  { id: 17, name: 'Hanbileg', description: 'SEO strategy specialist.', age: 16 },
  { id: 18, name: 'Choi-Odser', description: 'Software solutions expert.', age: 16 },
  { id: 19, name: 'Tselmeg', description: 'Business analysis professional.', age: 16 },
];

export default function Home() {
  const [search, setSearch] = useState('');
  const [view, setView] = useState('grid');

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-6">
      <div className="container mx-auto">
        <div className="mb-6 flex justify-between items-center">
          <input
            type="text"
            className="p-4 w-full max-w-md rounded-lg shadow-md border-none text-gray-800 focus:ring-4 focus:ring-purple-300"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="flex space-x-4">
            <button
              className={`p-3 rounded-lg shadow-md text-white transition-transform transform ${
                view === 'grid' ? 'bg-blue-600 scale-105' : 'bg-gray-400'
              }`}
              onClick={() => setView('grid')}
            >
              Grid View
            </button>
            <button
              className={`p-3 rounded-lg shadow-md text-white transition-transform transform ${
                view === 'list' ? 'bg-blue-600 scale-105' : 'bg-gray-400'
              }`}
              onClick={() => setView('list')}
            >
              List View
            </button>
          </div>
        </div>

        <div className={`grid ${view === 'grid' ? 'grid-cols-3 gap-6' : 'grid-cols-1 gap-4'}`}>
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <div
                key={item.id}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1"
              >
                <h3 className="text-2xl font-bold mb-2 text-gray-800">{item.name}</h3>
                <p className="text-gray-600">{item.description}</p>
                <p className="text-sm mt-2 text-gray-500">Age: {item.age}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-200 text-center col-span-full">
              Hereglegch oldsongui
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
