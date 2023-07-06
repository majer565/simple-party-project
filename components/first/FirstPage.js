import style from "./firstPage.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "next/link";
import LinearProgress from "@mui/material/LinearProgress";
import { useState } from "react";
import { useRouter } from "next/router";
import { cookieSaveName } from "@/utils/cookieUtils";

const FirstPage = () => {
  const router = useRouter();
  const [name, setName] = useState();
  const [error, setError] = useState(false);

  const handleNameUpdate = (e) => {
    setError(false);
    const text = e.target.value;
    setName(text);
  };

  const handleNextClick = () => {
    if (name && name !== "nigger") {
      cookieSaveName(name);
      router.push("/second");
    } else {
      setError(true);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.head}>
        <h4>Podaj Imię i nazwisko</h4>
      </div>
      <div className={style.main}>
        <TextField
          error={error}
          id="standard-basic"
          label="IMIĘ"
          variant="standard"
          color="secondary"
          onChange={handleNameUpdate}
          sx={{ width: "50%" }}
        />
        <Button
          variant="contained"
          sx={{ width: "50%" }}
          color="secondary"
          onClick={handleNextClick}
        >
          DALEJ
        </Button>
      </div>
      <LinearProgress
        variant="determinate"
        color="secondary"
        value={20}
        sx={{ marginTop: "4rem" }}
      />
    </div>
  );
};

export default FirstPage;
