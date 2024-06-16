import React from 'react'
import Image from 'next/image'
import NavBar from './navbar'

const Homepage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-white flex flex-col py-8 px-4 shadow-md">
        <h1 className="text-xl font-bold">My Garden</h1>
        <div className="flex justify-between mt-4">
          <p>Hey there, Alex</p>
          <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700">
            View More
          </button>
        </div>
      </header>
        <section className="grid grid-cols-3 gap-4">
          <div className="bg-white rounded-md shadow-md p-4">
            <h3 className="font-bold mb-2">Herbs</h3>
          </div>
          <div className="bg-white rounded-md shadow-md p-4">
            <h3 className="font-bold mb-2">Fruit</h3>
          </div>
          <div className="bg-white rounded-md shadow-md p-4">
            <h3 className="font-bold mb-2">Veggies</h3>
          </div>
        </section>
        <section className="mt-8 bg-white rounded-md shadow-md p-4">
          <h3 className="font-bold mb-2">Weather</h3>
          <div className="flex justify-between items-center">
            <p>Today</p>
            <p className="text-xl font-bold">90(F)</p>
          </div>
          <div className="flex justify-between items-center mt-2">
            <p>Cloudy</p>
            <img
              src="/icons/wind.svg"
              alt="Wind icon"
              className="w-4 h-4 mr-2"
            />
            <p>4 mph</p>
          </div>
          <div className="flex justify-between items-center mt-2">
            <p>Humidity</p>
            <img
              src="/icons/humidity.svg"
              alt="Humidity icon"
              className="w-4 h-4 mr-2"
            />
            <p>76%</p>
          </div>
          <div className="flex justify-between items-center mt-2">
            <p>Rain</p>
            <img src="/icons/rain.svg" alt="Rain icon" className="w-4 h-4 mr-2" />
            <p>30%</p>
          </div>
        </section>
        <section className="mt-8 bg-white rounded-md shadow-md p-4">
          <h3 className="font-bold mb-2">Reminders</h3>
          <div className="flex justify-between items-center mb-2">
            <p>Water Basil</p>
            <p>11:00 am</p>
          </div>
          <div className="flex justify-between items-center mb-2">
            <p>Avocado Tree Masterclass</p>
            <p>Today 11:00 am</p>
          </div>
          <div className="flex justify-between items-center mb-2">
            <p>Mix in Fertilizer</p>
            <p>07/04/24</p>
          </div>
          <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-700">
            View More
          </button>
        </section>
      <NavBar></NavBar>
      </div>
  )
}

export default Homepage
