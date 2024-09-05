import React from 'react'
import { SectionWrapper } from './SectionWrapper'
import { WORKOUTS } from '../utils/swoldier'
function Header(props) {

    return (
        <div className='flex flex-col gap-4'>
            <div className='flex justify-center items-center gap-2 '>
                <p className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-400 '>{props.index}</p>
                <h4 className='text-xl sm:text-2xl lg:text-3xl '>{props.title}</h4>
            </div>
            <p className='text-xl sm:text-2xl lg:text-3xl  mx-auto'>{props.description}</p>
        </div>
    )
}
export default function Generator() {
    return (
        <SectionWrapper header={"generate your workout"} title={["It\'s", "Huge", "o\'clock"]} >
            <Header index={'01'} title={'Pick your poison'} description={'Select The Workout you wish to Endure'} />
            <div className='grid grid-cols-2 sm:grid-cols-4  gap-4'>
                {Object.keys(WORKOUTS).map((type, typeIndex) => {
                    return (

                        <button className='bg-slate-950 border border-blue-400 py-4 rounded-lg duration-200 hover:border-blue-600 text-sm md:text-base ' key={typeIndex}>
                            <p>{type}</p>
                        </button>
                    )
                })}
            </div>
        </SectionWrapper>
    )
}
