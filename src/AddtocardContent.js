import React from 'react'
import adddetailscss from "./AddtocardContent.module.css";
import apifetch from './api/apifetch';


const AddtocardContent = ({ addcarddetail, setaddcarddetail, pricedata, setpricedata }) => {

    async function handleitemdelete(id, val, titem) {
        let presp = {}
        pricedata.map((priceitem) => {
            if (priceitem.id === 1) {
                presp = { ...priceitem, price: pricedata[0].price - val, no_of_item: pricedata[0].no_of_item - titem }

                return presp;
            }
            else {
                return priceitem;
            }
        })
        try {
            await apifetch.delete(`/addtocarddetails/${id}`);

            const pres = await apifetch.put('/dynamicprice/updateprice', presp)

            setpricedata(pricedata.map(item => item.id === 1 ? { ...pres.data } : item))
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

        setaddcarddetail((af) => {
            return (af.filter((rcd) => {
                return (rcd.id !== id)
            }))
        });


    }
    async function handleincreaseinprice(id, val) {
        let presp = {}
        pricedata.map((priceitem) => {
            if (priceitem.id === 1) {
                presp = { ...priceitem, price: pricedata[0].price + val, no_of_item: pricedata[0].no_of_item + 1 }

                return presp;
            }
            else {
                return priceitem;
            }
        })

        try {
            let ares = {};
            addcarddetail.map((items) => {
                if (items.id === id) {
                    ares = { ...items, tvalue: items.tvalue + val, titem: items.titem + 1 };
                    return ares;
                }
                else {
                    return items;
                }

            })

            const returnres = await apifetch.put(`/addtocarddetails/update`, ares)


            const pres = await apifetch.put('/dynamicprice/updateprice', presp);
            setaddcarddetail(addcarddetail.map(pos => pos.id === id ? { ...returnres.data } : pos));
            setpricedata(pricedata.map(item => item.id === 1 ? { ...pres.data } : item))

        }
        catch (err) {
            console.log(err.message)
        }

    }
    async function handleDecreaseinprice(id, val) {
        let presp = {}
        pricedata.map((priceitem) => {
            if (priceitem.id === 1) {
                presp = { ...priceitem, price: pricedata[0].price - val, no_of_item: pricedata[0].no_of_item - 1 }

                return presp;
            }
            else {
                return priceitem;
            }
        })
        try {
            let ares = {};
            addcarddetail.map((items) => {
                if (items.id === id) {
                    ares = { ...items, tvalue: items.tvalue - val, titem: items.titem - 1 };
                    return ares;
                }
                else {
                    return items;
                }

            })

            const returnres = await apifetch.put(`/addtocarddetails/update`, ares)


            const pres = await apifetch.put('/dynamicprice/updateprice', presp);
            setaddcarddetail(addcarddetail.map(pos => pos.id === id ? { ...returnres.data } : pos));
            setpricedata(pricedata.map(item => item.id === 1 ? { ...pres.data } : item))

        }
        catch (err) {
            console.log(err.message)
        }

    }
    let priced = 0, noofitemd = 0;
    pricedata.map((item) => {
        if (item.id === 1) {
            priced = item.price;
            noofitemd = item.no_of_item;
            return item;
        }
        else {
            return item;
        }
    })
    return (
        <>
            <div className={adddetailscss.addtocardcontainer}>
                {addcarddetail.length ? <table className={adddetailscss.table}>
                    <thead>
                        <tr>
                            <td className={adddetailscss.td}>Product Image</td>
                            <td className={adddetailscss.td}>Product Details</td>
                            <td className={adddetailscss.td}></td>
                        </tr>
                    </thead>
                    <tbody>
                        {addcarddetail.map((cd) => {
                            return (
                                <tr key={cd.id}>
                                    <td className={adddetailscss.td}>
                                        <img src={cd.aimage} style={{
                                            width: "250px",
                                            height: "220px"
                                        }} alt="not found" />
                                    </td>
                                    <td className={adddetailscss.td}><p>{cd.aname}</p>
                                        <p>Rs:{cd.avalue}</p></td>
                                    <td className={adddetailscss.td}>
                                        <p style={{ marginBottom: "5px" }}>Quantity</p>
                                        <div className={adddetailscss.insidedata}>
                                            <button onClick={() => handleincreaseinprice(cd.id, cd.avalue)}>+</button>
                                            <p>{cd.titem}</p>
                                            <button onClick={() => handleDecreaseinprice(cd.id, cd.avalue)}>&minus;</button>
                                        </div>
                                        <button onClick={() => handleitemdelete(cd.id, cd.tvalue, cd.titem)}>Remove</button>
                                        <p style={{ marginTop: "5px" }}>SubTotal:{cd.tvalue}</p>

                                    </td>
                                </tr>

                            )
                        })}

                    </tbody>
                    <tfoot>
                        <tr aria-colspan="3">
                            <td></td>
                            <td></td>
                            <td>
                                <div className='footer'>
                                    <p><b>{`Total Quantity:${noofitemd}`}</b></p>
                                    <p><b>Free delivery</b></p>
                                    <p><b>Total Price: &#8377;{priced}</b></p>
                                    <button>Checkout</button>

                                </div>
                            </td>
                        </tr>
                    </tfoot>
                </table> : <div style={{ width: "100%", height: "45px", backgroundColor: "yellow", textAlign: "center", border: "2px solid white" }}><p>Your Card is Empty!!!</p></div>
                }
            </div>
        </>
    )
}

export default AddtocardContent