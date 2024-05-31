import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Navigation = ({ pricedata, navdata, handlenavdata, searchdata }) => {
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
            <nav id="navigation">

                <div>
                    <form onSubmit={searchdata}>
                        <input type="text" name="search" id="ser" className="nav" placeholder="Search for data..." value={navdata} onChange={handlenavdata} />
                        <button className="nav v">Search</button>
                    </form>
                </div>
                <div className="shop">
                    <span className="quantity">
                        <table style={{ width: "30px", border: "none" }}>
                            <tbody>
                                <tr>
                                    <td style={{ color: "white", padding: "8px", textAlign: "center" }}><span>&#8377;</span>{priced}</td>
                                    <td style={{ backgroundColor: "white", color: "black", borderRadius: " 0px 20px 20px 0px", padding: "8px", textAlign: "center" }}>{noofitemd}</td>
                                </tr>
                            </tbody>
                        </table>

                    </span>

                    <Link to='/carddetails'><span style={{ fontSize: "31px", color: "white", marginTop: "8px" }} className="fa"><FaCartShopping /></span></Link>


                </div>
                <div> <button className="nav v">
                    <Link style={{ textDecoration: "none", color: "white" }} to='/login'>Login</Link>
                </button>
                </div>

            </nav>
        </>
    )
}

export default Navigation