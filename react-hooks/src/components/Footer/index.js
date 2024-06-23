import React, {useContext} from "react";
import { AppContext } from "../../context/AppContext";

const Footer = (props) => {
    const {num, name} = useContext(AppContext)

    console.log("Footer Rendered....")
    return (
        <div>
            <h1>Footer</h1>
            <p>Phone Number: {num}</p>
            <p>Name : {name}</p>
        </div>
    )


}

export default React.memo(Footer)