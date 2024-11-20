import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Weather</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <script src="https://kit.fontawesome.com/bdbfe9e284.js" crossOrigin="anonymous"></script>
      </Head>

      <div className="h-screen w-full bg-slate-800 flex justify-center items-center">
        <div className="h-[85vh] w-[70%] bg-slate-900 rounded-[2vh] flex">
          <div className="h-full w-[10%] rounded-[2vh] flex justify-center items-center">
            <div className="h-[97%] w-[85%] bg-slate-800 rounded-[2vh]">
              <div className="h-[13%] w-full rounded-[2vh] flex justify-center items-center">
                <div className="h-[70%] w-[70%] bg-slate-800 rounded-[2vh] flex justify-center items-center text-3xl text-[#8193a1]">
                  <i className="fa-solid fa-wind"></i>
                </div>
              </div>
              <div className="mt-10 h-[10%] w-full rounded-[2vh]">
                <div className="h-[30%] w-full rounded-[2vh] justify-center items-center text-3xl flex item-end justify-center text-white">
                  <i className="fa-solid fa-cloud"></i>
                </div>
                <div className="flex justify-center items-start text-white">
                  <p>Weather</p>
                </div>
              </div>
              <div className="h-[10%] w-full rounded-[2vh]">
                <div className="h-[30%] w-full rounded-[2vh] justify-center items-center text-3xl flex item-end justify-center text-[#5f696e]">
                  <i className="fa-solid fa-bars"></i>
                </div>
                <div className="flex justify-center items-start text-white">
                  <p>Cities</p>
                </div>
              </div>
              <div className="h-[10%] w-full rounded-[2vh]">
                <div className="h-[30%] w-full rounded-[2vh] justify-center items-center text-3xl flex item-end justify-center text-[#5f696e]">
                  <i className="fa-solid fa-map"></i>
                </div>
                <div className="flex justify-center items-start text-white">
                  <p>Map</p>
                </div>
              </div>
              <div className="h-[10%] w-full rounded-[2vh]">
                <div className="h-[30%] w-full rounded-[2vh] justify-center items-center text-3xl flex item-end justify-center text-[#5f696e]">
                  <i className="fa-solid fa-sliders"></i>
                </div>
                <div className="flex justify-center items-start text-white">
                  <p>Settings</p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full w-[60%] rounded-[2vh] flex flex-col">
            <div className="h-[10%] w-full flex justify-center items-center">
              <input type="text" id="first_name" className="bg-[#484d57] text-[#484d57] text-sm rounded-lg block w-[95%] p-2.5" placeholder="Search for cities" required />
            </div>
            <div className="h-[25vh] w-full flex">
              <div className="h-full w-[50%]">
                <div className="h-[50%] w-full">
                  <h1 className="text-bold text-white text-3xl pl-4 pt-5">Madrid</h1>
                  <h3 className="text-bold text-slate-600 pl-6">Chance of rain 0%</h3>
                </div>
                <div className="h-[50%] w-full">
                  <h1 className="text-[6vh] text-bold text-white pl-6">31º</h1>
                </div>
              </div>
              <div className="h-full w-[50%] text-[21vh] text-yellow-500 flex justify-center items-center">
                <i className="fa-solid fa-sun"></i>
              </div>
            </div>
            <div className="h-[24vh] w-full rounded-[2vh] flex justify-center items-center">
              <div className="h-[90%] w-[95%] bg-slate-800 rounded-[2vh] flex items-center flex-col">
                <div className="h-[15%] w-full flex items-center">
                  <h1 cl
  )
}

