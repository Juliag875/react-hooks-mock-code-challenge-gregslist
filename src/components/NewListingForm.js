import React, {useState} from 'react';
import { Form } from "semantic-ui-react";

function NewListingForm({onAddNewItem}) {
  const [formData, setFormData] = useState({
    description:"",
    image:"",
    location:"",
  })

  function handleSubmitChange(e){
    setFormData({...formData, 
    [e.target.name] : e.target.value,
    })
  }

  function handleFormSubmit(){
    const newItem = {
      description: formData.description,
      image:formData.image,
      location: formData.location,
    }
    fetch(" http://localhost:6001/listings", {
      method:"POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
      })
      .then(r=>r.json())
      .then(newItem=>onAddNewItem(newItem))
      setFormData(
        {description:'', image:'', location:''})
  }

  return (
    <div>
      <h3> Add New Listing </h3>
      <Form style={{textAlign:"center"}}
        onSubmit={handleFormSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid 
            label="Description" 
            placeholder="Description" 
            name="description" 
            value={formData.description}
            onChange={handleSubmitChange}/>
          <Form.Input fluid 
            label="Image" 
            placeholder="image"
            name="image" 
            value={formData.image} 
            onChange={handleSubmitChange}/>
          <Form.Input fluid
            label="Location"
            placeholder="location"
            name="location"
            value={formData.location}
            onChange={handleSubmitChange}
        />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  )
}

export default NewListingForm;