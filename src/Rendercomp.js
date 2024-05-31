import React from 'react'

import MainContent from './MainContent';
import Navigation from './Navigation';

const Rendercomp = ({ pricedata, navdata, handlenavdata, searchdata, contentdata, handlerestraurantdata, handlepricedata }) => {
    return (
        <>

            <Navigation pricedata={pricedata} navdata={navdata} handlenavdata={handlenavdata} searchdata={searchdata} />

            {
                handlerestraurantdata(contentdata).length ? <MainContent contentdata={handlerestraurantdata(contentdata)}
                    handlepricedata={handlepricedata}
                /> : <div className="content"><p className="AdiGasimage"><b>No Item Found</b></p></div>
            }

        </>
    )
}

export default Rendercomp