import style from "./loginPage.module.css";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import { TextField } from "@mui/material";
import { useState } from "react";
import { cookieSaveUser } from "@/utils/cookieUtils";

const LoginPage = () => {
  const router = useRouter();
  const [login, setLogin] = useState();
  const [pass, setPass] = useState();
  const [error, setError] = useState();

  const handleLogin = (e) => {
    setLogin(e.target.value);
  };
  const handlePassword = (e) => {
    setPass(e.target.value);
  };

  const handleNextClick = () => {
    const fetchData = async () => {
      const response = await fetch("/api/totalySafeGetCredentialsEndpoint");
      const data = await response.json();
      if (data[0].login === login && data[0].password === pass) {
        cookieSaveUser(true);
        router.push("/first");
      } else {
        setError(true);
      }
    };
    fetchData();
  };

  return (
    <div className={style.container}>
      <div className={style.head}>
        <h2>Logowanie</h2>
      </div>
      <div className={style.main}>
        <TextField
          error={error}
          id="standard-basic"
          label="LOGIN"
          variant="standard"
          color="secondary"
          onChange={handleLogin}
          sx={{ width: "50%" }}
        />
        <TextField
          error={error}
          id="standard-basic"
          label="HASŁO"
          type="password"
          variant="standard"
          color="secondary"
          onChange={handlePassword}
          sx={{ width: "50%" }}
        />
        <Button
          variant="contained"
          sx={{ width: "50%" }}
          color="secondary"
          onClick={handleNextClick}
        >
          ZALOGUJ
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
