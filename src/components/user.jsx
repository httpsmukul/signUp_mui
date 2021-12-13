import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
// import { color } from "@mui/system";
import { useState, useEffect } from "react";
export const User = () => {
	const [user, setuser] = useState("");

	const handel = () => {
		console.log("workimg");
		console.log(user);
	};
	return (
		<>
			<h1>sign up</h1>
			<br />
			<form>
				<input placeholder="check"></input>
				<TextField
					helperText=" "
					id="demo-helper-text-aligned"
					label="First_Name"
				/>
				<br />
				<TextField
					helperText=""
					id="demo-helper-text-aligned-no-helper"
					label="Last_Name"
				/>
				<br />
				<br />
				<TextField
					helperText=""
					id="demo-helper-text-aligned-no-helper"
					label="OTP"
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
