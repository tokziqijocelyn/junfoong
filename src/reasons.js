import React from 'react'
import './App.css';

const Reasons = React.forwardRef((props, ref) => {
    return (
        <div className='reasons' style={{ padding: 100 }} ref={ref}>
            <h1>REASONS</h1>
        </div>)
})

export default Reasons