import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
const Contact = () => {
    const {num, name} = useContext(AppContext)
    return(
        <div>
            <h1>Contact</h1>
            <p>Phone Number: {num}</p>
            <p>{name}</p>
        </div>
    )
}

export default Contact;