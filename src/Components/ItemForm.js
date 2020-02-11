import React, { useState } from 'react';
import { Button } from "reactstrap";

const ItemForm = ( { addCharacter }) => {
  
  const [newPerson, setNewPerson] = useState({
    name: '',
    height: '',
    mass: '',
    hairColor: ''
  })

  const handleChange = e => {
    let newPersonValue = JSON.parse(JSON.stringify(newPerson))
    newPersonValue[e.target.name] = e.target.value
    setNewPerson(newPersonValue)
  }

  return (
    <tr>
      <th scope="row"></th>
      <td>
        <input
          type="text"
          name="name"
          placeholder="Person's name"
          value={newPerson.name}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="height"
          placeholder="Height"
          value={newPerson.height}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="mass"
          placeholder="Mass"
          value={newPerson.mass}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="hairColor"
          placeholder="Hair color"
          value={newPerson.hairColor}
          onChange={handleChange}
        />
      </td>
      <td>
        <Button color="primary" onClick={() => addCharacter(newPerson)}>
          Add Character
        </Button>
      </td>
    </tr>
  );
}

export default ItemForm
