import React, { useState } from "react"
import { Form, FormGroup, Input, Button } from "reactstrap"
import { useNavigate } from "react-router-dom"


const CatNew = ({ createCat }) => {
  const navigate = useNavigate()
  const [newCat, setNewCat] = useState ({
    name: "",
    age: "",
    enjoys: "",
    image: ""
  })


  const handleChange = (e) => {
    setNewCat({ ...newCat, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    createCat(newCat)
    navigate("/catindex")
  }
  return (
    <div>
      <h3>Add Your Info To Make New Friends</h3>
      <Form>
        <FormGroup>
          <Input
            id="name"
            name="name"
            placeholder="Enter Your Cat's Name"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Input
            id="age"
            name="age"
            placeholder="Enter Your Cat's Age"
            type="number"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Input
            id="enjoys"
            name="enjoys"
            placeholder="Enter What Your Cat Likes To Do"
            type="textarea"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Input
            id="image"
            name="image"
            placeholder="Enter the URL of Your Cat's Image"
            type="text"
            onChange={handleChange}
          />
        </FormGroup>
        <Button onClick={handleSubmit}>Submit Cat</Button>
      </Form>
    </div>
  )
}

export default CatNew