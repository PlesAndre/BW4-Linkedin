import React, { useEffect, useState } from "react";

// Importo i stili di react-bootstrap
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import ExperienceDiv from "./ExperienceDiv";

const Body = ({ id }) => {

    // useState utilizzato per passargli la "get" delle esperienze e poi trasformato grazie a map mostrato in pagina dal componente ExperienceDiv
  const [experiences, setExperience] = useState([]); 

  // useState utilizzato per mostrare in pagina il Loading al caricamento della fetch delle esperienze 
  const [loading, setLoading] = useState(true);

  // Funzioni usate dalla finestra modale 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  // useState utilizzato per prendere il valore attuale dalla modale e passarglieli con la struttura definita per la POST
  const [inputs, setInputs] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  });

  // Array di oggetti per validare il Token e l'ID, controllando se al momento della POST sia uguale al profilo selezionato
  const users = [
    {
      name: "Jessica",
      token:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzRmNTJjMTIyY2EwMzAwMTU0ODg0YjEiLCJpYXQiOjE3MzMyNTE3NzcsImV4cCI6MTczNDQ2MTM3N30.2ILN61xsYSCkFQcH7evxZxTq8xCfbieJfh2FBphi8NQ",
      id: "674f52c122ca0300154884b1",
    },
    {
      name: "Carmine",
      token:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzUyMDk2ZjcyNDZhZDAwMTVjNTE1OTMiLCJpYXQiOjE3MzM0Mjk3MDgsImV4cCI6MTczNDYzOTMwOH0.1tYavcCRvJyrvhEHVAWTA4NKhDhmPjZupeZDNhZ0RQE",
      id: "6752096f7246ad0015c51593",
    },
    {
      name: "Andrei",
      token:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzRlMDcyNTc0Yjc3ZDAwMTVkM2YwNzYiLCJpYXQiOjE3MzMxNjY4ODUsImV4cCI6MTczNDM3NjQ4NX0.yf8-j8u0AMCJk8jZ-xX7c-0WFOxGtDdFZu2TX6o6rjk",
      id: "674e072574b77d0015d3f076",
    },
    {
      name: "Gabriele",
      token:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzRmNTM4MTIyY2EwMzAwMTU0ODg0YjIiLCJpYXQiOjE3MzMyNTE5NjksImV4cCI6MTczNDQ2MTU2OX0.9Ip7DU9cVmjVt3nUjU88T3YB17fcUyo2a06NCXHOVlw",
      id: "674f538122ca0300154884b2",
    },
  ];

  // Ciclo for che itera all'interno di "users"
  let apiToken = "";
  for (let i = 0; i < users.length; i++) {
    if (id === users[i].id) {
      apiToken = users[i].token;
      console.log(apiToken);
    }
  }

  // READ, per prendere le esperienze dell'utente selezionato
  const getExperience = async () => {
    try {
      const response = await fetch(
        ` https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`,
        {
          headers: {
            Authorization: apiToken,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();

      // la funzione setExperience gli passa i dati a experiences per mostrare le esperienze in pagina
      setExperience(data);
    } catch (error) {
      console.error("Errore ", error);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    getExperience(); // Chiamata alla funzione per recuperare gli utenti
  }, []);

  // Blocco if per il caricamento delle esperienze 
  if (loading) {
    return <p>Loading...</p>;
  }

  // CREATE, l'utente può aggiungere le esperienze al proprio profilo
  function postExperience() {
    console.log(id);
    fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`,
      {
        method: "POST",
        headers: {
          Authorization: apiToken,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs), // il JSON accetta la struttura definita nello useState in cima
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Errore nel caricare le esperienze");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Dati mandati correttamente", data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  // Funzione che prende il valore dal modale e carica le esperienze vecchie senza sovrascriverle
  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  }

  // Funzione che esegue la POST, chiude la finestra modale e resetta tutti i valori del "form"
  function handleSubmit(e) {
    e.preventDefault();
    postExperience();
    setShow(false);
    setInputs({
      role: "",
      company: "",
      startDate: "",
      endDate: "",
      description: "",
      area: "",
    });
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Aggiungi esperienza</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column">
          <label>Qualifica</label>
          <input
            name="role"
            value={inputs.role}
            type="text"
            placeholder="Posizione lavorativa"
            onChange={handleChange}
          />

          <label>Azienda</label>
          <input
            name="company"
            value={inputs.company}
            type="text"
            placeholder="Esempio: Microsoft"
            onChange={handleChange}
          />

          <label>Data di inizio</label>
          <input
            name="startDate"
            value={inputs.startDate}
            type="text"
            placeholder="AAAA-MM-GG"
            onChange={handleChange}
          />

          <label>Data di fine</label>
          <input
            name="endDate"
            value={inputs.endDate}
            type="text"
            placeholder="AAAA-MM-GG"
            onChange={handleChange}
          />

          <label>Descrizione</label>
          <input
            name="description"
            value={inputs.description}
            type="text"
            placeholder="Descrizione"
            onChange={handleChange}
          />

          <label>Località</label>
          <input
            name="area"
            value={inputs.area}
            type="text"
            placeholder="Esempio: Roma, Italia"
            onChange={handleChange}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" variant="primary" onClick={handleSubmit}>
            Salva
          </Button>
        </Modal.Footer>
      </Modal>

      <Container className="p-0">
        <Row>
          <Col>
            <h5 className="mx-2 my-3 mt-5">Esperienze Lavorative</h5>
            <Button
              type="button"
              className="add-experience"
              onClick={handleShow}
            >
              +
            </Button>
            {experiences.map((experience) => (
              <ExperienceDiv
                id={id}
                key={experience._id}
                experience={experience}
              />
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Body;
