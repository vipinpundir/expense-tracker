import React from 'react'

const Card = (props) => {

    return (
        <>

            <div className="card bg-info ">
                <div className="card-body">
                    <h5 className="card-title"> {props.name} </h5>
                    <p className="card-text"> {props.details} </p>
                    <p className="card-text">{props.amount}</p>
                    <p className="card-text">{props.date}</p>
                </div>
            </div>

          

        </>
    )
}


export default Card