import style from "./fifthPage.module.css";
import Button from "@mui/material/Button";
import LinearProgress from "@mui/material/LinearProgress";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import { useState } from "react";
import { useRouter } from "next/router";
import { cookieSaveAccomodation } from "@/utils/cookieUtils";
import { getCookies } from "cookies-next";

const FifthPage = () => {
  const router = useRouter();
  const [accomodation, setAccomodation] = useState();
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setError(false);
    const text = e.target.value;
    setAccomodation(text);
  };

  const handleDbSave = async () => {
    const cookies = getCookies();
    const response = await fetch("/api/saveForm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: cookies.name,
        presence: cookies.presence,
        sausages: cookies.sausages,
        approach: cookies.approach,
        accomodation: cookies.accomodation,
      }),
    });
    if (!response.ok) {
      router.push("/first");
    } else {
      router.push("/finish");
    }
  };

  const handleNextClick = async () => {
    if (accomodation) {
      cookieSaveAccomodation(accomodation);
      await handleDbSave();
    } else {
      setError(true);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.head}>
        <h4>Nocleg</h4>
        <h6>*Planowany*</h6>
      </div>
      <div className={style.main}>
        <Select
          error={error}
          value={accomodation}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          sx={{ width: "50%" }}
          color="secondary"
        >
          <MenuItem value="undecided">Nie jestem pewien</MenuItem>
          <MenuItem value="sleep">Chciałbym/chcialibyśmy nocować</MenuItem>
          <MenuItem value="nosleep">Nie planuję/planujemy nocować</MenuItem>
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
        value={99}
        sx={{ marginTop: "4rem" }}
      />
    </div>
  );
};

export default FifthPage;
