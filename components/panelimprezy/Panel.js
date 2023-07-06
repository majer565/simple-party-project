import style from "./panel.module.css";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import React, { useState } from "react";
import FoodTable from "../FoodTable";
import Box from "../Box";
import { getCookie } from "cookies-next";
import AccomTable from "../AccomTable";
import ApproachTable from "../ApproachTable";

const ChildNewFoodModal = () => {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const [food, setFood] = useState();

  const sendFood = async (name, food) => {
    const response = await fetch("/api/saveFood", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        text: food,
      }),
    });
    if (!response.ok) {
      setError(true);
    } else {
      setOpen(false);
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = async () => {
    if (food) {
      const name = getCookie("name");
      if (name) {
        await sendFood(name, food);
      } else {
        await sendFood("Unknown", food);
      }
    } else {
      setError(true);
    }
  };

  const handleTextChange = (e) => {
    setError(false);
    setFood(e.target.value);
  };

  const handleInstaClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button color="secondary" onClick={handleOpen}>
        DODAJ ZAOPATRZENIE
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box>
          <TextField
            error={error}
            id="standard-basic"
            label="ZAOPATRZENIE"
            variant="standard"
            color="secondary"
            onChange={handleTextChange}
          />
          <Button color="secondary" onClick={handleClose}>
            DODAJ
          </Button>
          <Button color="secondary" onClick={handleInstaClose}>
            ANULUJ
          </Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
};

const ChildNewAccomModal = () => {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const [book, setBook] = useState();

  const bookPlace = async (id, name) => {
    const response = await fetch("/api/bookPlace", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        name: name,
      }),
    });
    if (!response.ok) {
      setError(true);
    } else {
      setOpen(false);
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const checkIfBooked = async (id) => {
    try {
      const response = await fetch("/api/checkIfBooked?id=" + id);
      const data = await response.json();
      return data.status === "WOLNE";
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const handleClose = async () => {
    if (book) {
      const isFree = await checkIfBooked(book);
      if (isFree) {
        const name = getCookie("name");
        if (name) {
          await bookPlace(book, name);
        } else {
          await bookPlace(book, "Unknown");
        }
      } else {
        setError(true);
      }
    } else {
      setError(true);
    }
  };

  const handleTextChange = (e) => {
    setError(false);
    setBook(e.target.value);
  };

  const handleInstaClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button color="secondary" onClick={handleOpen}>
        REZERWUJ
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box>
          <TextField
            error={error}
            id="standard-basic"
            label="ID MIEJSCA"
            variant="standard"
            color="secondary"
            onChange={handleTextChange}
          />
          <Button color="secondary" onClick={handleClose}>
            REZERWUJ
          </Button>
          <Button color="secondary" onClick={handleInstaClose}>
            ANULUJ
          </Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
};

const Panel = () => {
  const [openFood, setOpenFood] = useState(false);
  const [openApproach, setOpenApproach] = useState(false);
  const [openAccom, setOpenAccom] = useState(false);

  const handleOpenFood = () => setOpenFood(true);
  const handleOpenApproach = () => setOpenApproach(true);
  const handleOpenAccom = () => setOpenAccom(true);

  const handleCloseFood = () => setOpenFood(false);
  const handleCloseApproach = () => setOpenApproach(false);
  const handleCloseAccom = () => setOpenAccom(false);

  return (
    <>
      <Modal open={openFood} onClose={handleCloseFood}>
        <Box>
          <FoodTable />
          <ChildNewFoodModal />
        </Box>
      </Modal>
      <Modal open={openApproach} onClose={handleCloseApproach}>
        <Box>
          <h2 className={style.hMsg}>Tabela dojazdów</h2>
          <ApproachTable />
        </Box>
      </Modal>
      <Modal open={openAccom} onClose={handleCloseAccom}>
        <Box>
          <AccomTable />
          <ChildNewAccomModal />
        </Box>
      </Modal>
      <div className={style.container}>
        <div className={style.head}>
          <h4>Witaj w panelu imprezy!</h4>
        </div>
        <div className={style.main}>
          <Button
            variant="contained"
            sx={{ width: "50%" }}
            color="secondary"
            onClick={handleOpenFood}
          >
            PANEL ZAOPATRZENIA
          </Button>
          <Button
            variant="contained"
            sx={{ width: "50%" }}
            color="secondary"
            onClick={handleOpenApproach}
          >
            PANEL DOJAZDU
          </Button>
          <Button
            variant="contained"
            sx={{ width: "50%" }}
            color="secondary"
            onClick={handleOpenAccom}
          >
            PANEL NOCLEGU
          </Button>
        </div>
      </div>
    </>
  );
};

export default Panel;
