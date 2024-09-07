import React from 'react'
import { ExcersiseCard } from './ExcersiseCard'
import { SectionWrapper } from './SectionWrapper'
export default function Workout(props) {

    return (
        <SectionWrapper id={'workout'} header={"Wlecome To"} title={["The", "Danger", "Zone"]} >
            <div className="flex flex-col gap-4">
                {props.workout.map((excersice, i) => {
                    return (
                        <ExcersiseCard i={i} excersice={excersice} key={i} />
                    )
                })}
            </div>
        </SectionWrapper>
    )
}
