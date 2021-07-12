import React, { useState } from "react";
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
// import Giphy from './Giphy'
import TippyGridView from './TippyGridView'

function Search() {
    const [visible,setVisible] = useState(false)

    const toggleButton=() => {
        setVisible(!visible)
    }
    return (
        <div>
            <textarea placeholder="How are you feeling?">

            </textarea>
            <div className="btn-container">
                <Tippy visible={visible} interactive={true} placement={'bottom'} content={<TippyGridView/>}>
                    <button onClick={toggleButton}>Gif</button>
                </Tippy>
                <button>Send</button>
            </div>
        </div>
    )
}

export default Search
