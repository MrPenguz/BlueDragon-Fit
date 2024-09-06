import React from 'react'
import { SectionWrapper } from './SectionWrapper'
import { WORKOUTS, SCHEMES } from '../utils/swoldier'
import { useState } from 'react'
function Header(props) {

    return (
        <div className='flex flex-col'>
            <div className='flex justify-center items-center gap-2 '>
                <p className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-400 '>{props.index}</p>
                <h4 className='text-xl sm:text-2xl lg:text-3xl '>{props.title}</h4>
            </div>
            <p className='text-xl sm:text-2xl lg:text-3xl  mx-auto'>{props.description}</p>
        </div>
    )
}
export default function Generator() {
    const [Showoption, setOption] = useState(false);
    const [poison, setPoison] = useState('individual')
    const [muscles, setMuscles] = useState([])
    const [goals, setGoals] = useState("Strength_power")

    const OptionToggle = () => {
        setOption(!Showoption)
    }
    const updateMuscle = (musclesGroup) => {
        if (muscles.includes(musclesGroup)) {
            setMuscles(muscles.filter(val => val !== musclesGroup))
            return
        }
        if (muscles.length >= 3) {
            setOption(false)
            return;

        }
        if (poison !== 'individual') {
            setMuscles([musclesGroup])
            setOption(false)
            return;
        }
        setMuscles([...muscles, musclesGroup])
        return
    }
    return (
        <SectionWrapper header={"generate your workout"} title={["It\'s", "Huge", "o\'clock"]} >

            <Header index={'01'} title={'Pick your poison'} description={'Select The Workout you wish to Endure'} />
            <div className='grid grid-cols-2 sm:grid-cols-4  gap-4'>
                {Object.keys(WORKOUTS).map((type, typeIndex) => {
                    return (

                        <button onClick={() => {
                            setPoison(type)
                            setOption(true)
                            setMuscles([])
                        }} className={'bg-slate-950 border border-blue-400 py-4 rounded-lg duration-200 hover:border-blue-600 text-sm md:text-base ' + (type === poison ? "border-blue-600" : 'border-blue-400')} key={typeIndex}>
                            <p className='capitalize'>{type.replaceAll('_', " ")}</p>
                        </button>
                    )
                })}
            </div>

            <Header index={'02'} title={'Lock on Targets'} description={'Select The Muscles Judge For Annihilation'} />
            <div className='bg-slate-950  border border-solid border-blue-400 rounded-lg flex flex-col'>
                <button onClick={OptionToggle} className="relative p-3 flex items-center justify-center ">
                    <p>Select Muscle Groups</p>
                    <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down"></i>
                </button>

                {Showoption && <div className='flex flex-col capitalize gap-1  '>
                    {(poison === 'individual' ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison])).map((muscleGroup, muscleGroupIndex) => {
                        return (
                            <button onClick={() => {
                                updateMuscle(muscleGroup)
                            }} key={muscleGroupIndex} className={'hover:text-blue-400 duration-200  ' + (muscles.includes(muscleGroup) ? "text-blue-400" : " ")}>
                                <p className=' capitalize '>{muscleGroup.replaceAll('_', " ")}</p>
                            </button>
                        )
                    })}
                </div>}
            </div>

            <Header index={'03'} title={'Become Juggernaut'} description={'Select Your Ultimate Objective'} />
            <div className='grid grid-cols-3  gap-4'>
                {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
                    return (

                        <button onClick={() => {
                            setGoals(scheme)
                        }} className={'bg-slate-950 border border-blue-400 py-4 rounded-lg duration-200 hover:border-blue-600 text-sm md:text-base ' + (scheme === goals ? "border-blue-600" : 'border-blue-400')} key={schemeIndex}>
                            <p className='Capitialze'>{scheme.replaceAll('_', " ")}</p>
                        </button>
                    )
                })}
            </div>
        </SectionWrapper>
    )
}
