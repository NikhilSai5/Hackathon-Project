import React from "react";
import Navbar from "../navbar/navbar";
import { useState } from "react";



import co1 from '../graphs/Air/co/c1.jpg'
import co2 from '../graphs/Air/co/c2.jpg'
import co3 from '../graphs/Air/co/c3.jpg'
import co4 from '../graphs/Air/co/c4.jpg'
import co5 from '../graphs/Air/co/c5.jpg'
import co6 from '../graphs/Air/co/c6.jpg'



import nh1 from '../graphs/Air/nh3/nh1.jpg'
import nh2 from '../graphs/Air/nh3/nh2.jpg'
import nh3 from '../graphs/Air/nh3/nh3.jpg'
import nh4 from '../graphs/Air/nh3/nh4.jpg'
import nh5 from '../graphs/Air/nh3/nh5.jpg'
import nh6 from '../graphs/Air/nh3/nh6.jpg'


import no1 from '../graphs/Air/no2/n1.jpg'
import no2 from '../graphs/Air/no2/n2.jpg'
import no3 from '../graphs/Air/no2/n3.jpg'
import no4 from '../graphs/Air/no2/n4.jpg'
import no5 from '../graphs/Air/no2/n5.jpg'
import no6 from '../graphs/Air/no2/n6.jpg'

import ozone1 from '../graphs/Air/ozone/o1.jpg'
import ozone2 from '../graphs/Air/ozone/o2.jpg'
import ozone3 from '../graphs/Air/ozone/o3.jpg'
import ozone4 from '../graphs/Air/ozone/o4.jpg'
import ozone5 from '../graphs/Air/ozone/o5.jpg'
import ozone6 from '../graphs/Air/ozone/o6.jpg'

import pm21 from '../graphs/Air/PM2.5/pm21.jpg'
import pm22 from '../graphs/Air/PM2.5/pm22.jpg'
import pm23 from '../graphs/Air/PM2.5/pm23.jpg'
import pm24 from '../graphs/Air/PM2.5/pm24.jpg'
import pm25 from '../graphs/Air/PM2.5/pm25.jpg'
import pm26 from '../graphs/Air/PM2.5/pm26.jpg'

import pm11 from '../graphs/Air/PM10/pm11.jpg'
import pm12 from '../graphs/Air/PM10/pm12.jpg'
import pm13 from '../graphs/Air/PM10/pm13.jpg'
import pm14 from '../graphs/Air/PM10/pm14.jpg'
import pm15 from '../graphs/Air/PM10/pm15.jpg'
import pm16 from '../graphs/Air/PM10/pm16.jpg'

import so1 from '../graphs/Air/SO2/s1.jpg'
import so2 from '../graphs/Air/SO2/s2.jpg'
import so3 from '../graphs/Air/SO2/s3.jpg'
import so4 from '../graphs/Air/SO2/s4.jpg'
import so5 from '../graphs/Air/SO2/s5.jpg'
import so6 from '../graphs/Air/SO2/s6.jpg'

import aqi1 from '../graphs/Air/aqi/aqi1.jpg'
import aqi2 from '../graphs/Air/aqi/aqi2.jpg'

//////////////////////////////////////////////

import one from '../graphs/water/one/1-1.png'
import one2 from '../graphs/water/one/1-1.png'

import two from '../graphs/water/two/2-1.png'
import two2 from '../graphs/water/two/2-2.png'

import three from '../graphs/water/3.png'

import four from '../graphs/water/4.png'

import five from '../graphs/water/5.png'

import six from '../graphs/water/6.png'

import seven from '../graphs/water/7.png'

const co = [co1, co2, co3, co4, co5, co6]
const nh = [nh1, nh2, nh3, nh4, nh5, nh6]
const no = [no1, no2, no3, no4, no5, no6]
const ozo = [ozone1, ozone2, ozone3, ozone4, ozone5, ozone6]
const pm2 = [pm21, pm22, pm23, pm24, pm25, pm26]
const pm1 = [pm11, pm12, pm13, pm14, pm15, pm16]
const so = [so1, so2, so3, so4, so5, so6]
const aqi = [aqi1, aqi2]

////////////////////////////////

const one1 = [one, one2,seven]
const two1 = [two, two2,five]



const Stats = () => {

    const airI = [co, nh, no, ozo, pm2, pm1, so, aqi]
    const waterI = [one1, two1, [three], [four], [five], [six], [seven]]

    const [type, settype] = useState() //true for air , false for water
    const [datapath, setdatapath] = useState(airI[0])

    return (
        <div className="h-screen flex flex-col ">
            <Navbar />

            <div className="flex flex-grow justify-center items-center ">


                <div className="w-full overflow-y-auto justify-center items-center ">
                    <div className="items-center justify-center ">

                        <div className="w-full h-full p-5 justify-center items-center  ">
                            <h1 className="p-10 mx-50 font-mono justify-center items-center text-5xl">Statistics</h1>
                            <button onClick={() => { settype(true) }} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-700 dark:hover:bg-blue-900 focus:outline-none dark:focus:ring-blue-800">AIR</button>
                            <button onClick={() => { settype(false) }} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-blue-800">WATER</button>
                        </div>
                        <div className="items-center justify-center p-5">
                            {type ? (
                                <>
                                    <button onClick={() => { setdatapath(airI[0]) }} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Co3</button>
                                    <button onClick={() => { setdatapath(airI[1]) }} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Nh3</button>
                                    <button onClick={() => { setdatapath(airI[2]) }} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">pm2.5</button>
                                    <button onClick={() => { setdatapath(airI[3]) }} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">pm5</button>
                                    <button onClick={() => { setdatapath(airI[4]) }} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">ozone</button>
                                </>
                            ) : (
                                <>
                                    <button onClick={() => { setdatapath(waterI[0]) }} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Temperature</button>
                                    <button onClick={() => { setdatapath(waterI[1]) }} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">WQI</button>
                                    <button onClick={() => { setdatapath(waterI[2]) }} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">B.O.D</button>
                                    <button onClick={() => { setdatapath(waterI[3]) }} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">HeatMap</button>
                                    {/* <button onClick={() => { setdatapath(waterI[4]) }} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Variance</button> */}
                                    <button onClick={() => { setdatapath(waterI[5]) }} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Ph</button>
                                    {/* <button onClick={() => { setdatapath(waterI[6]) }} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">AIR</button> */}
                                </>
                            )}
                        </div>

                        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />




                        <div className="grid grid-cols-2 grid-rows-12 gap-4 p-10">
                            {datapath.map((pic) => {
                                return (
                                    <div className="row-span-2 p-10">
                                        <img src={pic} />
                                    </div>)
                            })}


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;
