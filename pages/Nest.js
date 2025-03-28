import { useState } from "react";

export default function Home() {
    const [filter, setFilter] = useState(""); 
    

    return (
        <div className="h-[100vh] w-full bg-gray-300">
          <div className="h-[10%] w-full bg-blue-600 flex justify-center items-center text-white">
          <p className="font-bold">Nest high school</p></div> 
          <div className="h-[12%] w-full  bg-gray-300 flex justify-center items-center">
            <p class="text-5xl font-bold">Welcome to Nest school</p></div>
            <div className="h-[10%] w-full bg-gray-300 flex justify-center items-center">
                <p className="font-thin text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the <br>
                </br>industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
             </div>
             <div className="h-[10%] w-full bg-yellow-300 flex justify-center items-center">
             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Click Me</button>
             </div>
             <div className="mt-4 h-[30%] w-full bg-gray-300 flex justify-center items-center space-x-6">
              <div className="h-full w-[20%] bg-white rounded-md flex justify-center items-center columns-1">
                <p className="">Why Choose Us?</p>
              </div>
              <div className="h-full w-[20%] bg-white rounded-md flex justify-center items-center columns-1"></div>
              <div className="h-full w-[20%] bg-white rounded-md flex justify-center items-center columns-1"></div>
             </div>
             <div className="h-[10%] w-full bg-black flex justify-center items-center mt-12 text-white"><p>@2025 Our Company. Nest education High school</p></div>
            </div>
            )

        }