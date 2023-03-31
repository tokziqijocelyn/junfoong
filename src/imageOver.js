import React, { useState } from 'react';

import CJF1 from '../src/CJF1.png'
import CJF7 from '../src/CJF7.png'
import CJF8 from '../src/CJF8.png'
import CJF9 from '../src/CJF9.png'
import CJF10 from '../src/CJF10.png'
import CJF12 from '../src/CJF12.png'
import Move from './button'

const Start = (props) => {
    return (
        <div style={{ position: 'sticky' }}>
            <div className="container">
                <div style={{ position: 'relative' }}>
                    <img src={CJF1} alt="Image 1" style={{ position: 'absolute', top: 0, left: -500, width: 1000, height: 350 }} />
                    <img src={CJF7} alt="Image 2" style={{ position: 'absolute', top: 250, left: -500, width: 500, height: 350 }} />
                    <img src={CJF8} alt="Image 3" style={{ position: 'absolute', top: 370, left: -100, width: 300, height: 250 }} />

                    <h1 style={{ position: 'absolute', top: 400, left: 300, width: 300, height: 200 }}>Top 10 reasons why he suk</h1>

                    <img src={CJF12} alt="Image 5" style={{ position: 'absolute', top: 600, left: -200, width: 350, height: 500 }} />

                    <img src={CJF9} alt="Image 4" style={{ position: 'absolute', top: 350, left: -600, width: 300, height: 1000 }} />
                    <img src={CJF9} alt="Image 4" style={{ position: 'absolute', top: 450, left: -400, width: 200, height: 600 }} />

                    <img src={CJF10} alt="Image 5" style={{ position: 'absolute', top: 450, left: -500, width: 350, height: 400 }} />

                    <div style={{ position: 'absolute', top: 1000, left: 300, width: 300, height: 400 }}>
                        <Move />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Start