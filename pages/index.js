import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  const handleNavigation = (url) => {
    router.push(url);
  };

  const buttonStyles = [
    'bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white',
    'bg-gradient-to-r from-blue-400 to-teal-400 hover:from-blue-500 hover:to-teal-500 text-white',
    'bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-gray-800',
    'bg-gradient-to-r from-green-400 to-lime-400 hover:from-green-500 hover:to-lime-500 text-gray-800',
    'bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white',
    'bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white',
  ];

  const boxStyles = [
    'bg-gradient-to-br from-indigo-100 to-blue-100',
    'bg-gradient-to-br from-teal-100 to-green-100',
    'bg-gradient-to-br from-yellow-100 to-amber-100',
    'bg-gradient-to-br from-lime-100 to-green-100',
    'bg-gradient-to-br from-blue-100 to-indigo-100',
    'bg-gradient-to-br from-pink-100 to-red-100',
  ];

  return (
    <div className=" mx-auto bg-zinc-950 p-4 h-screen">
      <div className="grid grid-cols-3 gap-4 h-full">
        {['dalaisurencv', 'week5', 'weather', 'week6', 'Time', 'mongolapi'].map(
          (url, index) => (
            <div
              key={url}
              className={`relative w-full h-full flex flex-col items-center justify-center rounded-lg shadow-md ${boxStyles[index % boxStyles.length]}`}
            >
              <button
                className={`mb-4 p-4 font-bold text-lg border rounded-lg opacity-80 hover:opacity-100 ${buttonStyles[index % buttonStyles.length]}`}
                onClick={() => handleNavigation(url)}
              >
                {url === 'dalaisurencv' && 'CV ruu ochih'}
                {url === 'week5' && 'week5'}
                {url === 'weather' && 'Weather'}
                {url === 'week6' && 'week6'}
                {url === 'Time' && 'Time'}
                {url === 'mongolapi' && 'MongolAPI'}
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
}