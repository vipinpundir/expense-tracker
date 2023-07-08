import React from 'react'
import { useState } from 'react'
import Sobj from './Sobj'




const InputSection = () => {

    const [Array, setArray] = useState([]);

    const handleSubmit = () => {

        let iName = document.getElementById('idName').value
        let iDetails = document.getElementById('idDetails').value
        let iAmount = document.getElementById('idAmount').value
        let iDate = document.getElementById('idDate').value
        let date = new Date(iDate)
        let day = date.getDate()
        let month = date.toLocaleString('default', { month: 'long' }); // Get month name
        let year = date.getFullYear()
        let fDate = `${day}/${month}/${year}`; // Customize the format as per your preference

        if (iAmount !== '') {
            let newArray = {
                sname: iName,
                sdetails: iDetails,
                samount: iAmount,
                sdate: fDate
            }
            setArray(newArray)
            document.getElementById('idName').value = ''
            document.getElementById('idDetails').value = ''
            document.getElementById('idAmount').value = ''
            document.getElementById('idDate').value = ''

        }

    }


    return (
        <div className='container' >
            <form className='form mb-5'>
                <div className="mb-3 ">
                    <input className="form-control" id="idName" type="text" placeholder="Name" />
                </div>
                <div className="mb-3 ">
                    <input className="form-control" id="idAmount" type="number" placeholder="Amount" />
                </div>
                <div className="mb-3 ">
                    <input className="form-control" id="idDate" type="date" placeholder="Date" />
                </div>
                <div className="mb-3">
                    <textarea className="form-control" id="idDetails" rows="5" cols="5" placeholder="Details"></textarea>
                </div>
                <button type="button" onClick={handleSubmit} className="btn btn-primary">Submit</button>
            </form>

            <Sobj Ndata={Array} />



        </div>
    )
}

export default InputSection