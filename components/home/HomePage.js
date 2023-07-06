import style from "./homePage.module.css";
import CelebrationIcon from "@mui/icons-material/Celebration";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";

const HomePage = () => {
  const router = useRouter();

  const handleNextClick = () => {
    router.push("/login");
  };

  return (
    <div className={style.container}>
      <div className={style.head}>
        <div>
          <CelebrationIcon sx={{ fontSize: 100, color: "#202020" }} />
        </div>
        <div className={style.logoMsg}>
          Witaj w systemie rejestracji Filip's Saturday
        </div>
      </div>
      <div className={style.main}>
        <Button
          variant="contained"
          sx={{ width: "50%" }}
          color="secondary"
          onClick={handleNextClick}
        >
          ZACZYNAMY
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
