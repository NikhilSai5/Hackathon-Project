import React, { useState } from "react";
import Navbar from "../navbar/navbar";
import Modal from "./Extensions/modal";

import i1 from '../Analytics/1.png'
import i2 from '../Analytics/2.png'
import i3 from '../Analytics/3.png'
import i4 from '../Analytics/4.png'
import i5 from '../Analytics/5.png'
import i6 from '../Analytics/6.png'
import i7 from '../Analytics/7.png'
import i8 from '../Analytics/8.png'

const t1 = 'Punjab, Meghalaya, and Maharashtra report the highest levels of air pollution with respective Air Quality Index (AQI) scores of 9191, 818, and 802. Conversely, Tamil Nadu, Andhra Pradesh, Odisha, and Madhya Pradesh register lower AQI scores of 3, 4, 13, and 13. These figures underscore the urgent need for targeted air quality improvement measures in the former states to safeguard public health and the environment.'
const t2 = 'The variance of pH levels over the years shows significant fluctuations. In 2013, the pH recorded the highest variance at 1.19, while it was at its lowest in 2010, with a variance of only 0.1. These variations reflect changing environmental conditions and emphaises the importance of monitoring and addressing pH fluctuations in subsequent years.'
const t3 = 'The wind speed vs. month graph reveals distinct patterns. January experiences the lowest wind speeds, while August records the highest at 176. February, May, and July show relatively average levels of wind speed. These variations highlight seasonal trends in wind patterns throughout the year.'
const t4 = 'Punjab, Maharashtra, Kerala, and Haryana exhibit the highest Biological Oxygen Demand (BOD) levels, indicating significant organic pollution in their water bodies. In contrast, Goa, Daman & Diu, Odisha, and Tripura report the lowest BOD levels, signifying better water quality. This data emphasizes the need for stringent pollution control measures in the former states and acknowledges the effective preservation of water quality in the latter.'
const t5 = 'Among the top 5 polluted states, Delhi stands out with the highest pollution levels. The city records a CO (Carbon Monoxide) level of 68, reflecting severe air pollution. Furthermore, Delhi experiences continuous increases in NH3 (Ammonia) and NO2 (Nitrogen Dioxide) levels, indicating ongoing environmental challenges. In contrast, Mumbai ranks as the least polluted city on the list, suggesting better air quality conditions in comparison to the other polluted cities in India. Vigilant measures are imperative to address these concerning trends.'
const t6 = 'Carbon monoxide (CO) levels have surged alarmingly, attributed to a rising number of vehicles and industrial activities. The maximum recorded CO level reaches a concerning 81, indicating severe pollution. Even the minimum level, at 25, surpasses safety thresholds. This escalation underscores the urgent need for stringent emissions control measures and sustainable urban planning to mitigate the adverse health and environmental impacts of elevated CO levels.'
const t7 = 'The graph shows the Air Quality Index (AQI) of Delhi for two months, from August 6 to September 27, 2023. The AQI is a measure of the concentration of air pollutants in the air, and it is divided into six categories: Good, Moderate, Poor, Very Poor, Severe, and Hazardous. The graph shows that the AQI in Delhi fluctuated throughout the two months, but it was generally in the Moderate to Poor range. The highest AQI was 759 on August 6, and the lowest AQI was 450 on August 13. Overall, the graph shows that the air quality in Delhi was not ideal during the two months, but it was not as bad as it has been in the past. It is important to note that the AQI can vary significantly from day to day, so it is important to check the air quality forecast before heading outdoors. Brief wording under 60 words: The graph shows that the air quality in Delhi fluctuated throughout the two months, but it was generally in the Moderate to Poor range. The AQI peaked at 759 on August 6, and bottomed out at 450 on August 13. Overall, the air quality was not ideal, but it was not as bad as it has been in the past.'
const t8 = 'The pie chart shows the average Air Quality Index (AQI) of the top 6 polluted cities in India. The average AQI of these cities is 435, which is in the Severe range. The cities with the highest average AQI are Delhi (588) and Chennai (565). The cities with the lowest average AQI are Bengaluru (435) and Hyderabad (435). The AQI is a measure of the concentration of air pollutants in the air. It is divided into six categories: Good, Moderate, Poor, Very Poor, Severe, and Hazardous. An AQI of 400-499 is considered Severe, and an AQI of 500 or above is considered Hazardous. The fact that all six of these cities have average AQIs in the Severe or Hazardous range is a serious concern. It means that the air quality in these cities is very bad, and it can pose a serious health risk to residents. It is important to note that the AQI can vary significantly from day to day, so it is important to check the air quality forecast before heading outdoors. Residents of these cities should take steps to protect themselves from air pollution, such as wearing a mask when outdoors and avoiding strenuous activity. Brief wording under 60 words: The pie chart shows the average AQI of the top 6 polluted cities in India. All six cities have average AQIs in the Severe or Hazardous range, which means the air quality is very bad and can pose a serious health risk to residents.'


const MainData = [[i1, t1,'Sum of BOD Vs State'], [i2, t2,'Variance of PH Vs Year'], [i3, t3,'Sum of windspeed Vs Month'], [i4, t4,'Sum of BOD Vs State (Pie Chart)'], [i5, t5,'Avg Pollutant Vs City'], [i6, t6,'CO Levels of Hyderabad'], [i7, t7,'AQI of Delhi'], [i8, t8,'AQI of top 6 polluted Cities']]



const Analysis = () => {
    const [openModal, setopenModal] = useState(false)
    const [modalData, setmodalData] = useState(false)




    return (
        <div className="h-screen flex flex-col">
            <Navbar />

            {openModal ? (
                <Modal img={modalData[0]} txt={modalData[1]} txt2={modalData[2]} closer={setopenModal} />
            ) : null}



            <div className="flex flex-grow">


                <div className="w-full overflow-y-auto">
                    <section className="py-6 sm:py-12  ">
                        <div className="container p-6 mx-auto space-y-8">
                            <div className="space-y-2 text-center">
                                <h2 className="text-5xl font-bold p-10">Analysis</h2>
                                {/* <p className="font-serif text-sm ">text2.</p> */}
                                <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">

                                    {MainData.map((dat) => {
                                        return (
                                            <>

                                                <article className="flex flex-col ">
                                                    <button onClick={() => { setopenModal(true); setmodalData(dat) }} >
                                                        <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                                            <img alt="" className="object-cover w-full h-52 " src={dat[0]} />
                                                        </a>
                                                        <div className="flex flex-col flex-1 p-6">
                                                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                                                            {/* <a rel="noopener noreferrer" href="#" className="text-xs tracki uppercase hover:underline ">Convenire</a> */}
                                                            <h3 className="flex-1 py-2 text-lg font-semibold leadi">{dat[2]}</h3>
                                                            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs ">
                                                                <span>September 23, 2023</span>
                                                            </div>
                                                        </div>
                                                    </button>
                                                </article>





                                            </>
                                        )

                                    })}
                                </div>
                            </div>

                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Analysis;
