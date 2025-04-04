import {useRouter} from 'next/router';

export default function Home() {
  const router = useRouter();

  const handleNavigation = (url) => {
    router.push(url);
  };

  return (
    <div className="container mx-auto p-4 h-screen">
      <div className="grid grid-cols-3 gap-4 h-full">
        
        <div className="bg-slate-700 relative w-full h-full flex flex-col items-center justify-center bg-gray-100 rounded-lg shadow-md">
          <button
            className="mb-4 p-4 font-bold text-lg border rounded-lg bg-gray-500 opacity-80 hover:opacity-100"
            onClick={() => handleNavigation('dalaisurencv')}
          >
            CV ruu ochih
          </button>
          
        </div>


        <div className="bg-slate-700 relative w-full h-full flex flex-col items-center justify-center bg-gray-100 rounded-lg shadow-md">
          <button
            className="mb-4 p-4 font-bold text-lg border rounded-lg bg-gray-500 opacity-80 hover:opacity-100"
            onClick={() => handleNavigation('dalaisurencv')}
          >
        CV ruu ochih          
        </button>
          
        </div>

        <div className="bg-slate-700 relative w-full h-full flex flex-col items-center justify-center bg-gray-100 rounded-lg shadow-md">
          <button
            className="mb-4 p-4 font-bold text-lg border rounded-lg bg-gray-500 opacity-80 hover:opacity-100"
            onClick={() => handleNavigation('weather')}
          >
            weather luu ochih
          </button>
          
        </div>

        <div className="bg-slate-700 relative w-full h-full flex flex-col items-center justify-center bg-gray-100 rounded-lg shadow-md">
          <button
            className="mb-4 p-4 font-bold text-lg border rounded-lg bg-gray-500 opacity-80 hover:opacity-100"
            onClick={() => handleNavigation('dalaisurencv')}
            
          >
           CV ruu ochih
          </button>
          
        </div>

        <div className="bg-slate-700 relative w-full h-full flex flex-col items-center justify-center bg-gray-100 rounded-lg shadow-md">
          <button
            className="mb-4 p-4 font-bold text-lg border rounded-lg bg-gray-500 opacity-80 hover:opacity-100"
            onClick={() => handleNavigation('dalaisurencv')}
          >
            CV ruu ochih
          </button>
         
        </div>

        <div className="bg-slate-700 relative w-full h-full flex flex-col items-center justify-center bg-gray-100 rounded-lg shadow-md">
          <button
            className="mb-4 p-4 font-bold text-lg border rounded-lg bg-gray-500 opacity-80 hover:opacity-100"
            onClick={() => handleNavigation('dalaisurencv')}
          >
           CV ruu ochih
          </button>
          
        </div>

      </div>
    </div>
  );
}