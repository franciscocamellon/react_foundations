import React from 'react'
import './styles.css'

function Button(props) {
    var title = props.title
    return (
        <button className='btn'>{title}</button>
    )
}

export default Button