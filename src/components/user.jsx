import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { color } from "@mui/system";
export const User = () => {
	return (
		<>
			<h1>sign up</h1>
			<br />
			<form>
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
				<Button style={{ border: "2px solid black" }}>sign up</Button>
			</form>
		</>
	);
};
