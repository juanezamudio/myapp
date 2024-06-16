"use client";

import React from "react";
import { useInfiniteQuery } from "@tanstack/react-query";

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
          <h1 className="text-xl text-black font-semibold">Hey there, Alex</h1>
          <img
            src="/profile-picture.jpg"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
        </div>
        <div className="mt-4">
          <h2 className="text-lg text-black font-medium">My Garden</h2>

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
                src="/fruit.jpg"
                alt="Fruit"
                className="object-cover w-full h-full"
              />
              <p className="mt-1 text-center">Fruit</p>
            </div>
            <div className="w-32 h-32 overflow-hidden rounded-lg">
              <img
                src="/vegetables.jpg"
                alt="Vegetables"
                className="object-cover w-full h-full"
              />
              <p className="mt-1 text-center">Vegetables</p>
            </div>
            <a href="#" className="text-sm text-green-600 hover:underline">
              View More
            </a>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-lg font-medium">Weather</h2>
          <div className="flex items-center p-4 mt-2 bg-white border rounded-lg shadow-md">
            <div className="flex items-center">
              <img
                src="/weather.jpg"
                alt="Weather"
                className="w-24 h-24 rounded-lg"
              />
              <div className="ml-4">
                <p className="text-2xl font-semibold">90°F</p>
                <p className="text-sm text-gray-600">Cloudy</p>
              </div>
            </div>
            <div className="flex items-center ml-6 space-x-4">
              <div className="text-center">
                <p className="text-sm font-medium">4 mph</p>
                <p className="text-xs text-gray-600">Wind</p>
              </div>
              <div className="text-center">
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
        <div className="mt-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-medium">Reminders</h2>
            <a href="#" className="text-sm text-green-600 hover:underline">
              View More
            </a>
          </div>
          <div className="p-4 mt-2 bg-white border rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <p className="font-medium">Water Basil</p>
              <p className="text-sm text-gray-600">11:00 a.m.</p>
            </div>
            <div className="flex items-center justify-between mt-2">
              <p className="font-medium">Avocado Tree Masterclass</p>
              <p className="text-sm text-gray-600">Today 11:00 a.m.</p>
            </div>
            <div className="flex items-center justify-between mt-2">
              <p className="font-medium">Mix in Fertilizer</p>
              <p className="text-sm text-gray-600">07/04/24</p>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t shadow-lg">
        <div className="flex justify-around">
          <button className="flex flex-col items-center">
            <img src="/home-icon.svg" alt="Home" className="w-6 h-6" />
            <p className="text-xs">Home</p>
          </button>
          <button className="flex flex-col items-center">
            <img src="/plant-icon.svg" alt="Plant" className="w-6 h-6" />
            <p className="text-xs">Plant</p>
          </button>
          <button className="flex flex-col items-center">
            <img src="/star-icon.svg" alt="Star" className="w-6 h-6" />
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
