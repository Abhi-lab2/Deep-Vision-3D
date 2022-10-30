import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function Login() {
	const googleAuth = () => {
		window.open(
			`${process.env.REACT_APP_API_URL}/auth/google/callback`,
			"_self"
		);
	};
	return (
		<div className={styles.container}>
			<h1 className={styles.heading}>Log in Form</h1>
			<div className={styles.form_container}>
				<div className={styles.left}>
					<img className={styles.img} src="https://static.vecteezy.com/system/resources/previews/007/164/537/original/fingerprint-identity-sensor-data-protection-system-podium-hologram-blue-light-and-concept-free-vector.jpg" alt="login" />
				</div>
				<div className={styles.right}>
					<h2 className={styles.from_heading}>Members Log in</h2>
					<input type="text" className={styles.input} placeholder="Email" />
					<input type="text" className={styles.input} placeholder="Password" />
					<button className={styles.btn}>Log In</button>
					<p className={styles.text}>or</p>
					<button className={styles.google_btn} onClick={googleAuth}>
						<img src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/streams/2013/March/130326/1C6639340-google-logo.jpg" alt="google icon" />
						<span>Sign in with Google</span>
					</button>
					<p className={styles.text}>
						New Here ? <Link to="/signup">Sign Up</Link>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Login;