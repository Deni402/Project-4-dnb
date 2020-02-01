import React from 'react'

const Card = ({ largeimageurl, eventname, postcode, startdate, openingtimes, minage, address, venue }) => {
  return (
    
    < div className="card">
      <div className="card-image">
        <figure className="image is-2by3">
          <img src={largeimageurl} />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="subtitle is-3 is-size-4 has-text-white">{}</p>
            <p className=" title is-italic is-6 is-size-7 has-text-light">{startdate}</p>
          </div>
        </div>
      </div>
    </div>
   






  // <div className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
  //   <div className="card">
  //     <div className="card-image">
  //       <figure className="image is-4by3">
  //         <img src={largeimageurl}/>
  //       </figure>
  //     </div>
  //     <div className="cardName-content">
  //       <div className="media">
  //         <div className="media-left">
  //         </div>
  //       </div>
  //       <div className="content">
  //         <p>{eventname}</p>
  //         <br/>
  //         <time dateTime="2016-1-1">{startdate}</time>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  
  )
}

export default Card