import React, { useEffect } from 'react'
import dexter from '../dexter.png'
function APi(props) {

    if (!props.visible) {
        return null;
    }
    return (
        <div>
            <div className='image-div'>
                <img className='cloud-images' src={dexter} alt="cloud pics" />
                <h3>let's find weather in my city</h3>
            </div>
            <div className='content-div'>
                
                <input type="text" name="city" id="city" placeholder='Enter City' />
            </div>
        </div>
    )
}

export default APi
