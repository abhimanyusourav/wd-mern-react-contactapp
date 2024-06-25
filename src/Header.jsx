import { useNavigate } from "react-router-dom";
import { db } from "./firebase";
import { useState, useEffect } from "react";

function Header() {

    const [contactsData, setContactsData] = useState([])
    const [inputBoxData, setInputBoxData] = useState("")
    const [filteredContactsData, setFilteredContactsData] = useState([])

    const navigate = useNavigate()

    function addTheContact() {
        navigate("/add")
    }

    useEffect(function () {
        db.collection("contact-collection").orderBy("contactName", "asc").onSnapshot(function (snapshot) {
            setContactsData(snapshot.docs.map(function (i) {
                return { docId: i.id, docData: i.data() }
            }))
        })
    }, [])

    function collectTheData(event) {
        setFilteredContactsData(contactsData.filter(function (i) {
            if (i.docData.contactName.toLowerCase().startsWith(event.target.value.toLowerCase())) {
                return i.docData
            }
        }))
    }



    function deleteTheData(receivedDocId) {
        db.collection("contact-collection").doc(receivedDocId).delete()
        alert("Requested contact data is deleted successfully!")
    }



    return (
        <div>
            <div className="row">
                <div className="col-md-3">
                    <input type="text" placeholder="Search Contact" onChange={collectTheData} className="form-control," />
                </div>
            </div>
            <button className="btn btn-success" onClick={addTheContact} >Add Contact</button>
            {
                filteredContactsData.length == 0 ? <div>{
                    contactsData.map(function (i) {
                        // console.log(i.docId);
                        return <div>
                            {/* <h2>{i.docData.contactName}</h2>
                            <h3>{i.docData.contactNumber}</h3>
                            <h4>{i.docData.contactEmail}</h4>
                            <button className="btn btn-danger" onClick={function () {
                                deleteTheData(i.docId)
                            }} >Delete</button> */}
                            <div class="card" style={{ width: "18rem", marginBottom: "10px" }}>
                                <div class="card-body">
                                    <h5 class="card-title">{i.docData.contactName}</h5>
                                    <h6 class="card-subtitle mb-2 text-body-secondary">{i.docData.contactNumber}</h6>
                                    <p class="card-text">{i.docData.contactEmail}</p>
                                    <button className="btn btn-danger" onClick={function () {
                                        deleteTheData(i.docId)
                                    }} >Delete</button>
                                </div>
                            </div>
                        </div>
                    })
                }</div> : <div>
                    {
                        filteredContactsData.map(function (i) {
                            return <div>
                                <h2>{i.docData.contactName}</h2>
                                <h3>{i.docData.contactNumber}</h3>
                                <h4>{i.docData.contactEmail}</h4>
                                <button className="btn btn-danger" onClick={function () {
                                    deleteTheData(i.docId)
                                }} >Delete</button>
                            </div>
                        })
                    }
                </div>
            }

        </div>
    )
}

export default Header