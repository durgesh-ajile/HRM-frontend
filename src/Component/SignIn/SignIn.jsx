import { useState } from "react";
import styles from "./Sign.module.css";
import { BsPersonCircle } from "react-icons/bs";
import { AiFillLock } from "react-icons/ai";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { asyncThunkLogin } from "../../redux/createAsyncThunk";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AlertDialogSlide from "../common/AlertDialogSlide/AlertDialogSlide";
import { showToast } from "../../redux/errorSlice/errorSlice";

const SingIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authScreen, setAuthScreen] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { LoginData: { usertoken, expiry } } = useSelector((store) => store.admin);

  const handleNavigate = () => navigate("/registration");

  const handleLogin = (event) => {
    event.preventDefault();

    if (isValid) {
      setAuthScreen(true);

      const navigateAfterLogin = () => setTimeout(() => navigate("/"), 2000)

      dispatch(asyncThunkLogin({
        email: email, password: password, navigateAfterLogin: navigateAfterLogin, setAuthScreen: setAuthScreen,
      }));
    } else {
      dispatch(showToast({ type: "warning", message: "Email Type Should be @ajiledone.com" }))

    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h5 className={styles.heading} style={{ textAlign: "center" }}>
          Login to your account
        </h5>
        <p style={{ textAlign: "center", columnGap: "-10px" }} className="para">
          Enter your credentials below
        </p>

        <form onSubmit={handleLogin}>
          <label className="py-2">Email</label>

          <div className="input-group input-group-lg mb-3 flex-nowrap">
            <span className="input-group-text" id="basic-addon1">
              <BsPersonCircle />
            </span>
            <input
              type="email"
              className="form-control py-2"
              placeholder="Example@ajiledone.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setIsValid(e.target.value.endsWith('@ajiledone.com'))
              }}
              required
            />
          </div>
          <label className="py-2">Password</label>
          <div className="input-group input-group-lg mb-3 ">
            <span className="input-group-text" id="basic-addon1">
              <AiFillLock />
            </span>
            <input
              type="password"
              className="form-control"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Grid container style={{ paddingTop: "10px" }}>
            <Grid item>
              <Link variant="body2">
                <AlertDialogSlide UI_Type={"ForgotPasswordUI"} />
              </Link>
            </Grid>
          </Grid>
          <Grid container style={{ paddingTop: "10px" }}>
            <Grid item>
              <Link onClick={() => handleNavigate()} variant="body2">
                Don't Have an Account ? Please Register Here
              </Link>
            </Grid>
          </Grid>

          {/* button1 */}
          {authScreen ? (
            <div className={styles.animatefooter}>
              <div className={styles.loader}></div>
            </div>
          ) : (
            <div className={styles.footer}>
              <button>Sign in</button>
            </div>
          )}

          <div className={styles.paragraph}>
            <p>
              By continuing, you're confirming that you've read our{" "}
              <span style={{ color: "blue" }}>
                Tearms & Condition
                <span style={{ color: "black" }}> and </span>
                Cookie Policy
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SingIn;
