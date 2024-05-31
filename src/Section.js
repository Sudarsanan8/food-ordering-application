import React, { useEffect } from 'react'
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AddcardDetails from './AddcardDetails';
import Rendercomp from './Rendercomp';
import apifetch from './api/apifetch'


const Section = () => {
    const [contentdata, setcontentdata] = useState([])
    const [RotiGhardata, setRotiGhardata] = useState([])
    const [Punjabidata, setPunjabidata] = useState([])
    const [Udipidata, setUdipidata] = useState([])
    const [pricedata, setpricedata] = useState([])
    const [navdata, setnavdata] = useState("");
    const [addcarddetail, setaddcarddetail] = useState([])
    useEffect(() => {
        return (
            async () => {
                try {
                    const adigasresponse = await apifetch.get('/adigas/getalldata');
                    const rotigharres = await apifetch.get('/rotighar/getalldata')
                    const punjabires = await apifetch.get('/punjabirasol/getalldata')
                    const udipires = await apifetch.get('/udipi/getalldata')
                    const addtocardapidata = await apifetch.get('/addtocarddetails/getalldata')
                    const pricedataapi = await apifetch.get('/dynamicprice/getdata')
                    setcontentdata(adigasresponse.data);
                    setRotiGhardata(rotigharres.data);
                    setPunjabidata(punjabires.data);
                    setUdipidata(udipires.data);
                    setaddcarddetail(addtocardapidata.data);
                    setpricedata(pricedataapi.data)

                }
                catch (err) {
                    console.log(err.message);
                }
            }
        )
    }, [])


    function handlenavdata(ev) {
        const navvalue = ev.target.value;
        setnavdata(navvalue);
    }
    function searchdata(e) {
        e.preventDefault();

    }
    function handlerestraurantdata(rdata) {
        return (rdata.filter((cd) => {
            return (cd.listname.toLowerCase().includes(navdata.toLowerCase()));
        }))
    }
    async function handlepricedata(e) {
        const targetvalue = e.target.value;
        const arr = targetvalue.split(' ');
        const value = parseInt(arr[0]);
        const image = arr[1];
        const name = arr[2];

        const postcardData = { avalue: value, aname: name, aimage: image, tvalue: value, titem: 1 }
        let presp = {}
        pricedata.map((priceitem) => {
            if (priceitem.id === 1) {
                presp = { ...priceitem, price: parseInt(value) + pricedata[0].price, no_of_item: 1 + pricedata[0].no_of_item }
                return presp;
            }
            else {
                return priceitem;
            }
        })
        try {
            const res = await apifetch.post("/addtocarddetails/save", postcardData);
            setaddcarddetail((adimg) => [...adimg, res.data])
            const pres = await apifetch.put('/dynamicprice/updateprice', presp);
            setpricedata(pricedata.map(pos => pos.id === 1 ? { ...pres.data } : pos));

        }
        catch (err) {
            if (err.response) {
                console.log(err.response.data)
                console.log(err.response.status)
                console.log(err.response.headers)
            }
            else {
                console.log(err.message);
            }
        }




    }

    return (
        <header id="head">

            {
                <Routes>
                    <Route index element={<Rendercomp pricedata={pricedata} navdata={navdata} handlenavdata={handlenavdata} searchdata={searchdata} contentdata={contentdata} handlerestraurantdata={handlerestraurantdata} handlepricedata={handlepricedata} />
                    }></Route>
                    <Route path='/rotighar' element={<Rendercomp pricedata={pricedata} navdata={navdata} handlenavdata={handlenavdata} searchdata={searchdata} contentdata={RotiGhardata} handlerestraurantdata={handlerestraurantdata} handlepricedata={handlepricedata} />
                    } ></Route>
                    <Route path='/punjabiRasoi' element={<Rendercomp pricedata={pricedata} navdata={navdata} handlenavdata={handlenavdata} searchdata={searchdata} contentdata={Punjabidata} handlerestraurantdata={handlerestraurantdata} handlepricedata={handlepricedata} />
                    }></Route>
                    <Route path='/udipi' element={<Rendercomp pricedata={pricedata} navdata={navdata} handlenavdata={handlenavdata} searchdata={searchdata} contentdata={Udipidata} handlerestraurantdata={handlerestraurantdata} handlepricedata={handlepricedata} />
                    }></Route>
                    <Route path='/carddetails' element={<AddcardDetails addcarddetail={addcarddetail} pricedata={pricedata} navdata={navdata} handlenavdata={handlenavdata} searchdata={searchdata} setaddcarddetail={setaddcarddetail} setpricedata={setpricedata} />}></Route>

                </Routes>
            }
        </header>
    )
}

export default Section