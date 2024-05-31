import React from 'react'
import Navigation from './Navigation'
import AddtocardContent from './AddtocardContent'


const AddcardDetails = ({ addcarddetail, pricedata, navdata, handlenavdata, searchdata, setaddcarddetail, setpricedata }) => {



    return (
        <>
            <Navigation pricedata={pricedata} navdata={navdata} handlenavdata={handlenavdata} searchdata={searchdata} />
            <AddtocardContent addcarddetail={addcarddetail} setaddcarddetail={setaddcarddetail} pricedata={pricedata} setpricedata={setpricedata} />

        </>
    )
}

export default AddcardDetails