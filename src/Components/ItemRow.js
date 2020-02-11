import React, {useState} from 'react'
import {Button} from 'reactstrap'

const ItemRow = ({person, position, saveEdit, handleDelete}) => {
  const [isEditable, setIsEditable] = useState(false)

  const [editPerson, setEditPerson] = useState({
    name: person.name,
    height: person.height,
    mass: person.mass,
    hairColor: person.hair_color
  });
  
  const handleChange = e => {
    let newEditValue = JSON.parse(JSON.stringify(editPerson));
    newEditValue[e.target.name] = e.target.value;
    setEditPerson(newEditValue);
  };

  return (
    <tr>
      <th scope="row">{position + 1}</th>
      <td>
        {isEditable ? (
          <input type="text" name="name" value={editPerson.name} onChange={handleChange} />
        ) : (
          editPerson.name
        )}
      </td>
      <td>
        {isEditable ? (
          <input type="text" name="height" value={editPerson.height} onChange={handleChange} />
        ) : (
          editPerson.height
        )}
      </td>
      <td>
        {isEditable ? (
          <input type="text" name="mass" value={editPerson.mass} onChange={handleChange} />
        ) : (
          editPerson.mass
        )}
      </td>
      <td>
        {isEditable ? (
          <input
            type="text"
            value={editPerson.hairColor}
            name="hairColor"
            onChange={handleChange}
          />
        ) : (
          editPerson.hairColor
        )}
      </td>
      <td>
        {isEditable ? (
          <Button color="primary" onClick={() => saveEdit(editPerson, position, setIsEditable)}>
            Save
          </Button>
        ) : (
          <Button color="warning" onClick={() => setIsEditable(true)}>
            Edit
          </Button>
        )}
        <Button color="danger" onClick={() => handleDelete(position)}>
          Delete
        </Button>
      </td>
    </tr>
  );
}

export default ItemRow
