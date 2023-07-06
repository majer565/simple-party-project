import style from "./finishPage.module.css";
import CelebrationIcon from "@mui/icons-material/Celebration";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";

const FinishPage = () => {
  const router = useRouter();

  const handleNextClick = () => {
    router.push("/panelimprezy");
  };

  return (
    <div className={style.container}>
      <div className={style.head}>
        <div>
          <CelebrationIcon sx={{ fontSize: 100, color: "#202020" }} />
        </div>
        <div className={style.logoMsg}>
          Gratulacje! Pomyślnie ukończono rejestrację, przejdź teraz do panelu imprezy.
        </div>
      </div>
      <div className={style.main}>
        <Button
          variant="contained"
          sx={{ width: "50%" }}
          color="secondary"
          onClick={handleNextClick}
        >
          PANEL IMPREZY
        </Button>
      </div>
    </div>
  );
};

export default FinishPage;
