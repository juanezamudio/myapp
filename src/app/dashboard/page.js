"use client";

import React from "react";
import {HomeIcon, BookOpenIcon} from '@heroicons/react/24/solid';

export default function Dashboard() {
  const posts = [
    { id: 1, title: "post 1" },
    { id: 2, title: "post 2" },
    { id: 3, title: "post 3" },
    { id: 4, title: "post 4" },
    { id: 5, title: "post 5" },
  ];

  const fetchData = async (page) => {
    await new Promise((res) => setTimeout(resolve, 1000));
    return posts.slice((page - 1) * 2, page * 2);
  };

  const Page = () => {
    const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery([
      "query",
    ]);
    async ({ pagaParam = 1 }) => {
      const response = await fetchPost(pageParam);
      return response;
    };
    {
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl text-black font-semibold">Hey there, Alex</h1>
          <img
            src="/images/profile_picture.png"
            alt="Profile"
            className="w-24 h-24 rounded-full"
          />
        </div>
        <div className="mt-4">
          <div className="flex justify-between mx-4">
            <h2 className="text-lg text-black font-medium">My Garden</h2>
            <div className="bg-green-500 no-undeline rounded-md p-2 px-4 ">
              <a
                href="#"
                className="text-sm text-white hover:no-underline font-bold hover:underline"
              >
                View More
              </a>
            </div>
          </div>
          <div className="flex items-center mt-2 space-x-4">
            <div className="w-32 h-32 overflow-hidden rounded-lg relative z-0">
              <a href="#">
                <img
                  src="/images/herbs.jpg"
                  alt="Herbs"
                  className="object-cover relative w-full h-full"
                />
              </a>
              <p className="mt-1 text-black font-bold text-center absolute z-5 ">
                Herbs
              </p>
            </div>
            <div className="w-32 h-32 overflow-hidden rounded-lg">
              <img
                src="/images/fruits.jpg"
                alt="Fruit"
                className="object-cover w-full h-full"
              />
              <p className="mt-1 text-center">Fruit</p>
            </div>
            <div className="w-32 h-32 overflow-hidden rounded-lg">
              <img
                src="/images/vegetables.jpg"
                alt="Vegetables"
                className="object-cover w-full h-full"
              />
              <p className="mt-1 text-center">Vegetables</p>
            </div>
          </div>
        </div>
        <div className="mt-6 text-black ">
          <h2 className="text-lg font-medium">Weather</h2>
          <div className="flex items-center justify-evenly p-4 mt-2 bg-white border rounded-lg shadow-md border-2 border-black box-border max-w-fit ">
            <div className="flex flex-col items-strech justify-between space-y-6 max-w-fill">
              <div className="flex text-black items-center">
                <div className="flex items-center space-x-6">
                  <div className="ml-4">
                    <p className="text-2xl font-semibold">90°F</p>
                    <p className="text-sm text-gray-600">Cloudy</p>
                  </div>
                  <div>
                    <img
                      src="/images/weather.jpg"
                      alt="Weather"
                      className="w-32 h-24 object-fill brightness-125 rounded-lg"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center text-black ml-6 space-x-4">
                <div className="text-center">
                  <p className="text-sm font-medium">4 mph</p>
                  <p className="text-xs text-gray-600">Wind</p>
                </div>
                <div className="text-cente">
                  <p className="text-sm font-medium">76%</p>
                  <p className="text-xs text-gray-600">Humidity</p>
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium">30%</p>
                  <p className="text-xs text-gray-600">Rain</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg text-black font-medium">Reminders</h2>
            <div className="bg-green-500 no-undeline rounded-md p-2 px-4 ">
              <a
                href="#"
                className="text-sm text-white hover:no-underline font-bold hover:underline"
              >
                View All
              </a>
            </div>
          </div>
          <form>
            <div className="p-4 mt-2 bg-white border text-black rounded-lg shadow-md border-2 border-black">
              <div className="flex items-center justify-between">
                <div className="flex space-x-1 items-center ">
                  <input
                    id="task"
                    name="task"
                    type="checkbox"
                    className="h-4 w-4 rounded border-red-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label for="task" className="text-green-500">
                    Tomato watering
                  </label>
                </div>
                <p className="text-sm text-gray-600">11:00 a.m.</p>
              </div>
              <div className="flex items-center justify-between mt-2">
              <div className="flex space-x-1 items-center ">
                  <input
                    id="task"
                    name="task"
                    type="checkbox"
                    className="h-4 w-4 rounded border-red-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label for="task" className="text-green-500">
                    Avocado Masterclass
                  </label>
                </div>
                <p className="text-sm text-gray-600">Today 11:00 a.m.</p>
              </div>
              <div className="flex items-center justify-between mt-2">
              <div className="flex space-x-1 items-center ">
                  <input
                    id="task"
                    name="task"
                    type="checkbox"
                    className="h-4 w-4 rounded border-red-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label for="task" className="text-green-500">
                    Mix in fertilizer
                  </label>
                </div>
                <p className="text-sm text-gray-600">07/04/24</p>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-[#06352F] border-t shadow-lg">
        <div className="flex justify-around">
          <button className="flex flex-col items-center">
            <HomeIcon/>
            <p className="text-xs">Home</p>
          </button>
          <button className="flex flex-col items-center">
            <img src="/plant-icon.svg" alt="Plant" className="w-6 h-6" />
            <p className="text-xs">Plant</p>
          </button>
          <button className="flex flex-col items-center">
            <img src="/sparkle.svg" alt="Sparkle" className="w-6 h-6"/>
          </button>
          <button className="flex flex-col items-center">
            <BookOpenIcon />
            <p className="text-xs">Learn</p>
          </button>
          <button className="flex flex-col items-center">
            <img src="/village-icon.svg" alt="Village" className="w-6 h-6" />
            <p className="text-xs">Village</p>
          </button>
        </div>
      </div>
    </div>
  );
}
