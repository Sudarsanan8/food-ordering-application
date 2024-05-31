import React from "react"
import img1 from "./image/Restaurant.png"
import { Link } from "react-router-dom"

const Aside = () => {
    return (
        <>
            <aside id="other_restaurantslinks">
                <div id="icon">
                    <img src={img1} alt="" style={{ width: "100%", height: "90px" }} />
                </div>
                <hr />
                <div id="restaurantlist">
                    <ul className="list" style={{ listStyleType: "none" }}>
                        <li><Link style={{ textDecoration: "none" }} to='/'>AdiGas</Link></li>
                        <li><Link style={{ textDecoration: "none" }} to='/rotighar'>RotiGhar</Link></li>
                        <li><Link style={{ textDecoration: "none" }} to='/punjabiRasoi'>PunjabiRasoi</Link></li>
                        <li><Link style={{ textDecoration: "none" }} to='/udipi'>Udupi</Link></li>
                    </ul>
                </div>
            </aside>
        </>
    )
}

export default Aside