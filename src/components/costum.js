// import { See } from "./logic";
import React from "react";
import axios from "axios";
export const Work = (user, last, pass) => {
	// console.log(user);
	// console.log(email);
	// console.log(pass);
	axios
		.post("http://localhost:3001/user", {
			First_name: user,
			last_name: last,
			Pass: pass,
		})
		.then(function (responce) {
			console.log(responce);
		})
		.catch(function (error) {
			console.log(error);
		});

	return <>{/* <div>{user}</div> */}</>;
};
