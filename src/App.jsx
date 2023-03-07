import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
	const [option, setOption] = useState(null);
	const computerOption = ["rock", "paper", "scissors"];
	const [result, setResult] = useState("pending");
	const [outcome, setOutcome] = useState("initial");
	const [isLoaded, setIsLoaded] = useState(false);

	const handlePlay = (e) => {
		// setIsLoaded(false);

		console.log("player chooses", option);
		console.log("computer chooses", result);
		e.target.disabled = "true";
		setTimeout(() => {
			if (
				(option === "rock" && result === "rock") ||
				(option === "scissors" && result === "scissors") ||
				(option === "paper" && result === "paper")
			) {
				setIsLoaded(true);
				setOutcome("equal");
			} else if (option === "rock" && result === "paper") {
				setIsLoaded(true);
				setOutcome("You lost, paper beats rock");
			} else if (option === "rock" && result === "scissors") {
				setIsLoaded(true);
				setOutcome("You won, rock beats scissors");
			} else if (option === "paper" && result === "scissors") {
				setIsLoaded(true);
				setOutcome("You lost, scissors beats paper");
			} else if (option === "paper" && result === "rock") {
				setIsLoaded(true);
				setOutcome("You lost, rock beats paper");
			} else if (option === "scissors" && result === "rock") {
				setIsLoaded(true);
				setOutcome("You lost, rock beats scissors");
			} else if (option === "scissors" && result === "paper") {
				setIsLoaded(true);
				setOutcome("You won, scissors beats paper");
			}
			e.taget.disabled = "none";
		}, 500);
	};

	return (
		<>
			<div className="App">
				<h1>Rock Paper Scissors</h1>
				<div style={{ display: "flex", flexDirection: "column" }}>
					<label htmlFor="input-rock">Rock</label>
					<input
						type="radio"
						name="option"
						id="input-rock"
						onChange={(e) => {
							setOption(e.target.value);
							setResult(
								computerOption[Math.floor(Math.random() * computerOption.length)]
							);
							setIsLoaded(false);

							// console.log(option);
						}}
						value="rock"
					/>
					<label htmlFor="input-paper">Paper</label>
					<input
						type="radio"
						name="option"
						id="input-paper"
						onChange={(e) => {
							setOption(e.target.value);
							setResult(
								computerOption[Math.floor(Math.random() * computerOption.length)]
							);
							setIsLoaded(false);

							// console.log(option);
						}}
						value="paper"
					/>
					<label htmlFor="input-scissors">Scissors</label>
					<input
						type="radio"
						name="option"
						id="input-scissors"
						onChange={(e) => {
							setOption(e.target.value);
							setResult(
								computerOption[Math.floor(Math.random() * computerOption.length)]
							);
							setIsLoaded(false);
							// console.log("option picked", option);
						}}
						value="scissors"
					/>
				</div>
				<button onClick={handlePlay}>play</button>

				{isLoaded && (
					<>
						<p>Computer chose {result}</p>
						<h3>{outcome}</h3>
					</>
				)}
			</div>
		</>
	);
}

export default App;
