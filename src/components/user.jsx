import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "react-notifications/lib/notifications.css";
import {
	NotificationContainer,
	NotificationManager,
} from "react-notifications";
// import { color } from "@mui/system";
import { useState, useEffect } from "react";
import { Work } from "./costum.js";
import { Data } from "./error.js";
export const User = () => {
	const [user, setuser] = useState("");
	const [last, setlast] = useState("");
	const [Dob, setdob] = useState("");
	const [pass, setpass] = useState(0);

	const handel = (e) => {
		e.preventDefault();
		Work(user, last, pass);
		// console.log("workimg");
		// console.log(user);
		const err = Data(pass);
		console.log(err);
		const createNotification = (err) => {
			return () => {
				switch (err) {
					case "info":
						NotificationManager.info("Info message");
						break;
					case "scuess":
						NotificationManager.success("Success message", "Title here");
						break;
					case "Error":
						NotificationManager.warning(
							"Warning message",
							"Close after 3000ms",
							3000
						);
						break;
					case "error":
						NotificationManager.error(
							"Error message",
							"Click me!",
							5000,
							() => {
								alert("callback");
							}
						);
						break;
				}
			};
		};
		createNotification(err);
	};
	return (
		<>
			<h1>sign up</h1>
			<br />
			<form>
				<TextField
					helperText=" "
					id="demo-helper-text-aligned"
					label="First_Name"
					onChange={(e) => setuser(e.target.value)}
				/>
				<br />
				<TextField
					helperText=""
					id="demo-helper-text-aligned-no-helper"
					label="Last_Name"
					onChange={(e) => setlast(e.target.value)}
				/>
				<br />
				<br />
				<TextField
					helperText=""
					id="demo-helper-text-aligned-no-helper"
					label="dob"
					onChange={(e) => setdob(e.target.value)}
				/>
				<br />
				<br />
				<TextField
					type={"password"}
					helperText=""
					id="demo-helper-text-aligned-no-helper"
					label="password"
					onChange={(e) => setpass(e.target.value)}
				/>
				<br />
				<br />
				<Button style={{ border: "2px solid black" }} onClick={handel}>
					sign up
				</Button>
			</form>
		</>
	);
};
