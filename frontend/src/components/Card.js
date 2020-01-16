import React from 'react'

const Card = ({ largeimageurl, eventname, postcode, startdate, openingtimes, minage, address }) => {
  return (
    <div className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={largeimageurl} alt={eventname}/>
          </figure>
        </div>
        <div className="cardName-content">
          <div className="media">
            <div className="media-left">
          
            </div>
      
          </div>
  
          <div className="content">
            fghjkjhgfghjhg<a>@bulmaio</a>.
            <a href="#">#css</a> <a href="#">#responsive</a>
            <br/>
            <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </div>
        </div>
      </div>
    </div>
  
  )
}

export default Card