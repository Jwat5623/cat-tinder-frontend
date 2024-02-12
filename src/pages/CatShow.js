import React from "react"
import { useParams } from "react-router-dom"

const CatShow = ({ cats }) => {
  const { id } = useParams()
  const cat = cats.find((item) => item.id === +id)
  console.log(cat)

  return (
    <>
      <h3>Meet this Cat</h3>
      <img 
        src={cat?.image}
        alt="profile of all our cats friends"
        className="cat-profile-pic"
      />
      <p data-testid="cat-name">Name:{cat?.name}</p>
      <p>Age: {cat?.age}</p>
      <p>About: {cat?.about}</p>
    </>
  )
}

export default CatShow