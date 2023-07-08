import React from 'react'
import Card from './Card'



const Sdata = [
  // {
  //     sname: "vipin",
  //     sdetails: "bat me btauga",
  //     samount: 23,
  //     sdate: '12/21/22' 
  // }
]
const Cards = (props) => {
  let data = props.Ndata
  if (data.length!==0){
    Sdata.push(data)
  }
  
  // sdate ke sare obj aage eske under 
   const ecard = (val,index) => {
      return(


      <div className='cards' key={index} > 
          <Card
              name={val.sname}
              details={val.sdetails}
              amount={val.samount}
              date={val.sdate}
          />
         </div>
      )
  }


  return (
    <>
    {Sdata.map(ecard)}
    </>
  )
}

export default Cards;