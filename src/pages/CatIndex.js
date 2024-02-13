import React from 'react'
import { NavLink as RouterNavLink } from "react-router-dom"

const CatIndex = ({ cats }) => {
  return (
    <>
      <div className="meet-and-greet">   
        <h3>Meet Your Fellow Felines</h3>
      </div>
      <div className="cat-index-section">
        {cats?.map((cat) => {
          return (
            <div key={cat.id} className="cat-profile-container">
              <img 
                src={cat.image}
                alt="profile of all our cats friends"
                className="cat-profile-pic"
              />
              <RouterNavLink to={`/catshow/${cat.id}`} className="cat-name-link">
                <p>{cat.name}</p>
              </RouterNavLink>
            </div>
          )
        })}
      </div>
    </>
  )
}
export default CatIndex