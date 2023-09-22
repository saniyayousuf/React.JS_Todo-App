import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Button from './Component/Button';
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Container } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {

  let [todo, settodo] = useState("");
  let [list, setlist] = useState([]);

  let add = () => {
    setlist([...list, todo]);
    settodo("");
  };

  let edititem = (index) => {
    let newVal = prompt("Edit");
    if (newVal !== null) {
      let updatedList = [...list];
      updatedList[index] = newVal;
      setlist(updatedList);
    }
  };

  let deleteitem = (index) => {
    let updatedList = list.filter((_, ind) => ind !== index);
    setlist(updatedList);
  };

  let deleteall = () => {
    setlist([]);
  };

  return (
    <div className="App">

      <header className="App-header">
        <Container sx={{ bgcolor: '#cfe8fc', minHeight: '400px', height: 'fit-content', marginTop: '30px', borderRadius: '10px', paddingTop: '50px' }} maxWidth="sm">
          <CssBaseline />
          <Container maxWidth="100vh"></Container>
          <h1 className='text-dark me-5'>TO-DO APP</h1>
          <div>
            <input onChange={(e) => {
              settodo(e.target.value)
              
            }}
              className='Inp-Class'
            />
            <Button
              class="btn-class"
              icon={faEdit}
              iconStyle={{ color: "#02060d" }}
              click={add} btnValue="Add Item" />


            <Button
              btnValue="Delete All "
              click={deleteall} class="btn-class"
              icon={faTrash}
              iconStyle={{ color: "#02060d" }} />

          </div>

          <br />

          <div>
            {list.map((e, i) => (
              <div className='item' key={i}>
                {e}
                <button className="btn-class" onClick={() => edititem(i)}>
                  <FontAwesomeIcon icon={faEdit} style={{ color: "#02060d" }} />
                  Edit
                </button>
                <button className="btn-class" onClick={() => deleteitem(i)}>
                  <FontAwesomeIcon icon={faTrash} style={{ color: "#02060d" }} />
                  Delete
                </button>
              </div>
            ))}
          </div>

        </Container>
      </header>
    </div >

  );
}

export default App;


