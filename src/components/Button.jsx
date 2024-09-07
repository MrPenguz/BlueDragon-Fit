import React from 'react'

const Button = (props) => {
    return (
        <button onClick={props.func} className='px-4 py-4 mx-auto rounded-md border-[2px] bg-slate-950 border-blue-400 border-solid blueShadow duration-200'>
            {props.children}
        </button>
    )
}
export default Button;