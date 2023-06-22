import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { LoginScreenProps } from "../../services/loginService";
import styles from "./login.module.css";

export const BasicLogin: React.FC<LoginScreenProps> = ({
  setLoggedIn,
  setUserType,
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (username === "admin" && password === "admin123") {
      setLoggedIn(true);
      setUserType("admin");
    } else if (username === "user" && password === "user123") {
      setLoggedIn(true);
      setUserType("user");
    }
      else if (username === "sys-admin" && password === "sys-admin123") {
        setLoggedIn(true);
        setUserType("sys-admin");
    } else if (username === "tenant" && password === "tenant123") {
      setLoggedIn(true);
      setUserType("tenant");
  }  
    else {
      console.log("Invalid username or password");
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <TextField
        label="Username"
        variant="outlined"
        color="warning"
        value={username}
        onChange={handleUsernameChange}
        fullWidth
        required
      />
      <TextField
        label="Password"
        variant="outlined"
        margin="normal"
        type="password"
        color="warning"
        value={password}
        onChange={handlePasswordChange}
        fullWidth
        required
      />
      <Button
        className={styles.button}
        variant="contained"
        color="primary"
        type="submit"
      >
        Login
      </Button>
    </form>
  );
};