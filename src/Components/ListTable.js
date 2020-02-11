import React from 'react'
import { Table } from "reactstrap";
import ItemForm from './ItemForm'
import Loader from './Loader'
import ItemRow from './ItemRow';

const ListTable = ({
  people,
  isLoading,
  saveEdit,
  addCharacter,
  handleDelete
}) => {
  
  if (isLoading) {
    return (
      <Loader size="250px" primaryColor="#ecf542" secondaryColor="#f5428a" />
    );
  }

  return (
    <>
      <Table hover style={{ color: "white" }}>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Height</th>
            <th>Mass</th>
            <th>Hair color</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person, index) => {
            return (
              <ItemRow key={person.name} person={person} position={index} saveEdit={saveEdit} handleDelete={handleDelete}/>
              // using person.name as the key here because I'm assuming each name is unique
            );
          })}
          <ItemForm addCharacter={addCharacter} />
        </tbody>
      </Table>
    </>
  );
};

export default ListTable
