import React from 'react'


const MainContent = ({ contentdata, handlepricedata }) => {

    return (
        <>

            <ul className="content" style={{
                listStyleType: "none", /* Remove bullets */
                padding: 0, /* Remove padding */
                margin: 0 /* Remove margins */
            }}>
                {contentdata.map((cd) => {

                    return (

                        <li key={cd.id}>
                            <div className="AdiGasimage"
                            >

                                <img src={cd.img} className="adiimage" alt="not found" style={{
                                    width: "250px",
                                    height: "220px"
                                }} />

                                <p className="imagetext">{cd.listname}</p>
                                <hr />
                                <p className="val"><span>&#8377;</span>{cd.listnamePrice}</p>

                                <button className="imagebutton" value={`${cd.listnamePrice} ${cd.img} ${cd.listname}`} onClick={handlepricedata}>
                                    Add to card
                                </button>

                            </div>
                        </li>
                    )
                })}
            </ul>

        </>
    )
}

export default MainContent