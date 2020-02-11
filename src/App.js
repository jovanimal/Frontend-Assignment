import React, { useState, useEffect } from 'react';
import './App.css';
import ListTable from './Components/ListTable'
import { Container } from "reactstrap";
import axios from 'axios'

function App() {

  const [people, setPeople] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(result => {
        setPeople(result.data.results);
        setIsLoading(false)
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const saveEdit = (person, index, callback) => {
    const editPerson = [...people];
    const { name, height, mass, hairColor } = person;
    editPerson[index] = { name: name, height: height, mass: mass, hair_color: hairColor };
    setPeople(editPerson);
    callback(false);
  };

  const handleDelete = index => {
    const deletePerson = [...people];
    deletePerson.splice(index, 1);
    setPeople(deletePerson);
  };

  const addCharacter = person => {
    const {name, height, mass, hairColor} = person;
    setPeople([...people, { name: name, height: height, mass: mass, hair_color: hairColor }]);
  };

  return (
    <div className="App">
      <Container style={{ margin: "70px" }}>
        <h1
          style={{
            fontSize: "60px",
            textAlign: "center",
            marginBottom: "40px",
            color: "yellow"
          }}
        >
          Star Wars' Character
        </h1>
        <ListTable
          people={people}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          saveEdit={saveEdit}
          addCharacter={addCharacter}
          handleDelete={handleDelete}
        />
      </Container>
    </div>
  );
}

export default App;
