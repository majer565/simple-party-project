import style from "./secondPage.module.css";
import Button from "@mui/material/Button";
import LinearProgress from "@mui/material/LinearProgress";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import { useState } from "react";
import { useRouter } from "next/router";
import { cookieSavePresence } from "@/utils/cookieUtils";

const SecondPage = () => {
  const router = useRouter();
  const [presence, setPresence] = useState();
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setError(false);
    const text = e.target.value;
    setPresence(text);
  };

  const handleNextClick = () => {
    if (presence) {
      cookieSavePresence(presence);
      router.push("/third");
    } else {
      setError(true);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.head}>
        <h4>Obecność</h4>
      </div>
      <div className={style.main}>
        <Select
          error={error}
          value={presence}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          sx={{ width: "50%" }}
          color="secondary"
        >
          <MenuItem value="alone">Będę sam</MenuItem>
          <MenuItem value="together">Będę z osobą towarzyszącą</MenuItem>
        </Select>
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
        value={40}
        sx={{ marginTop: "4rem" }}
      />
    </div>
  );
};

export default SecondPage;
