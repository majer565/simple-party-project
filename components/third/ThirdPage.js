import style from "./thirdPage.module.css";
import Button from "@mui/material/Button";
import LinearProgress from "@mui/material/LinearProgress";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import { useState } from "react";
import { useRouter } from "next/router";
import { cookieSaveSausages } from "@/utils/cookieUtils";

const ThirdPage = () => {
  const router = useRouter();
  const [sausages, setSausages] = useState();
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setError(false);
    const text = e.target.value;
    setSausages(text);
  };

  const handleNextClick = () => {
    if (sausages) {
      cookieSaveSausages(sausages);
      router.push("/fourth");
    } else {
      setError(true);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.head}>
        <h4>Ile zjem/zjemy</h4>
        <h6>*w zaleności od osoby towarzyszącej*</h6>
        <h6>Tak +- żeby wiedzieć ile kupić (kiełbasy śląskie)</h6>
      </div>
      <div className={style.main}>
        <Select
          error={error}
          value={sausages}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          sx={{ width: "50%" }}
          color="secondary"
        >
          <MenuItem value="0">0</MenuItem>
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
          <MenuItem value="4">4</MenuItem>
          <MenuItem value="5">5</MenuItem>
          <MenuItem value="6">6</MenuItem>
          <MenuItem value="7">7</MenuItem>
          <MenuItem value="8">8</MenuItem>
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
        value={60}
        sx={{ marginTop: "4rem" }}
      />
    </div>
  );
};

export default ThirdPage;
