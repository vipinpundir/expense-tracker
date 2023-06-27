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
        <div className='container p-5' >
            <form className='mb-5' style={{ border: '1px solid green', padding: '10px' }} >
                <div className="mb-3 ">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input className="form-control bg-success" id="idName" type="text" placeholder="" />
                </div>
                <div className="mb-3 ">
                    <label htmlFor="exampleInputEmail1" className="form-label">In Details</label>
                    <input className="form-control bg-success" id="idDetails" type="text" placeholder="" />
                </div>
                <div className="mb-3 ">
                    <label htmlFor="exampleInputEmail1" className="form-label">Amount</label>
                    <input className="form-control bg-success" id="idAmount" type="number" placeholder="" />
                </div>
                <div className="mb-3 ">
                    <label htmlFor="exampleInputEmail1" className="form-label">Date</label>
                    <input className="form-control bg-success" id="idDate" type="date" placeholder="" />
                </div>

                <button type="button" onClick={handleSubmit} className="btn btn-primary">Submit</button>
            </form>

            <Sobj Ndata={Array} />



        </div>
    )
}

export default InputSection