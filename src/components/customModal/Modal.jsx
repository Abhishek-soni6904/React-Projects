import React, { useState } from 'react'
import './modal.css'
export default function Modal({ id, header, body, footer }) {
    const [modalDisplay, setModalDisplay] = useState(false)
    return (
        <div id='modalWrapper'>
            <button onClick={() => setModalDisplay(!modalDisplay)}>Open Modal</button>
            {
                modalDisplay && <div id={id ? id : "testModal"} className='modal'>
                    <div className='header'>
                        {header ? header : <h2>Modal Header</h2>}
                        <span onClick={() => setModalDisplay(!modalDisplay)}>&times;</span>
                    </div>
                    <div className='body'>
                        {body ? body : <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet dolore numquam minima eius unde harum. Non libero, aspernatur quae pariatur mollitia dolore obcaecati iusto vel quaerat voluptates incidunt corrupti ratione, nulla aut expedita eos voluptate id quia, nihil delectus? Molestiae amet soluta earum laborum beatae modi labore sit porro sapiente!</p>}
                    </div>
                    <div className='footer'>
                        {footer ? footer : <h3>This is Modal Footer</h3>}
                    </div>
                </div>
            }
        </div>
    )
}
