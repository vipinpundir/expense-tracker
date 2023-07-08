import React from 'react'

const Card = (props) => {

    return (
        <>

            <div className="card my-4">
                <div className="card-body">
                    <h5 className="card-title">Name : {props.name} </h5>
                    <p className="card-text">Rs : {props.amount}</p>
                    <p className="card-text"> Date : {props.date}</p>
                    <p className="card-text"> Details : {props.details} </p>
                </div>
            </div>

          

        </>
    )
}


export default Card