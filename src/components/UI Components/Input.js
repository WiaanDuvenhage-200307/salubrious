import React from 'react'

export default function Input(props) {
  return (
    <div>
        <input className={props.className} name={props.name} type={props.type} placeholder={props.placeholder} />
    </div>
  )
}
