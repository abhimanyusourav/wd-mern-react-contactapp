import { useState } from "react"
import { db } from "./firebase"
import { useNavigate } from "react-router-dom"

function AddContactForm() {

    const navigate = useNavigate()

    const [contactName, setContactName] = useState("")
    const [contactNumber, setContactNumber] = useState("")
    const [contactEmail, setContactEmail] = useState("")

    function collectContactName(event) {
        setContactName(event.target.value)
    }

    function collectContactNumber(event) {
        setContactNumber(event.target.value)
    }

    function collectContactEmail(event) {
        setContactEmail(event.target.value)
    }

    function saveTheContact() {
        db.collection("contact-collection").add({
            contactName,
            contactNumber,
            contactEmail
        })

        navigate("/home")
    }

    return (
        <div>
            <input type="text" placeholder="Enter Name" onChange={collectContactName} />
            <input type="number" placeholder="Enter Number" onChange={collectContactNumber} />
            <input type="email" placeholder="Enter E-Mail" onChange={collectContactEmail} />
            <button className="btn btn-success" onClick={saveTheContact}>Save Contact</button>
        </div>
    )
}

export default AddContactForm