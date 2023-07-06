import style from "./fourthPage.module.css";
import Button from "@mui/material/Button";
import LinearProgress from "@mui/material/LinearProgress";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import { useState } from "react";
import { useRouter } from "next/router";
import { cookieSaveApproach, cookieSavePresence } from "@/utils/cookieUtils";

const FourthPage = () => {
  const router = useRouter();
  const [approach, setAproach] = useState();
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setError(false);
    const text = e.target.value;
    setAproach(text);
  };

  const handleNextClick = () => {
    if (approach) {
      cookieSaveApproach(approach);
      router.push("/fifth");
    } else {
      setError(true);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.head}>
        <h4>Dojazd</h4>
        <h6>*Planowany*</h6>
      </div>
      <div className={style.main}>
        <Select
          error={error}
          value={approach}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          sx={{ width: "50%" }}
          color="secondary"
        >
          <MenuItem value="undecided">Nie jestem pewien</MenuItem>
          <MenuItem value="car">Przyjadę autem</MenuItem>
          <MenuItem value="together">Planuję się z kimś zabrać</MenuItem>
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
        value={80}
        sx={{ marginTop: "4rem" }}
      />
    </div>
  );
};

export default FourthPage;
