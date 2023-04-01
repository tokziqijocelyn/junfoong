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
        <div>
            <div className="container">
                <div style={{ alignItems: 'center', justifyContent: 'center', display:'flex', flexDirection:'column', backgroundColor:'red'  }}>
                    <img src={CJF1} alt="Image 1" style={{ marginRight: '-50px',  width: 1000, height: 350}}/>
                    <img src={CJF7} alt="Image 2" style={{ marginRight: '500px', marginTop:-75, width: 500, height: 350 }}/>
                    <img src={CJF8} alt="Image 3" style={{ marginRight: '-200px', marginTop:-300, width: 500, height: 250}} />
                    <img src={CJF12} alt="Image 5" style={{ marginRight: '00px', marginTop:-100, width: 250, height: 400 }} />
                    <img src={CJF9} alt="Image 4" style={{ marginRight: '700px', marginTop:-400 , width: 300, height: 1000}} />
                    <img src={CJF9} alt="Image 4" style={{ marginRight: '375px', marginTop:-900 , width: 200, height: 1000}} />
                    <img src={CJF10} alt="Image 5" style={{  }} />

                    <div style={{  }}>
                        <Move />
                    </div>
                    <div style={{backgroundColor:'red'}}>
                        <h1>Test</h1>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Start