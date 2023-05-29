import "./App.css";
import React, { useState } from "react";
// import BigInt from "big-integer";

function App() {
	let [result, setResult] = useState("0");
	let [number, setNumber] = useState("0");
	let [operator, setOperator] = useState("");
	const [isCalculate, setIsCalculate] = useState(false);

	const methods = {
		add: (a, b) => {
			console.log(`this is a: ${a}`);
			console.log(`this is b: ${b}`);
			let sum = Number(a) + Number(b);
			return sum.toString();
		},
		subtract: (a, b) => {
			console.log(`this is a: ${a}`);
			console.log(`this is b: ${b}`);
			return Number(a) - Number(b);
		},
		multiply: (a, b) => {
			return Number(a) * Number(b);
		},
		divide: (a, b) => {
			return Number(a) / Number(b);
		},
	};

	const buttonClicked = (input) => {
		if (!isCalculate) {
			if (result === "0") {
				setResult(input);
			} else if (result !== "0") {
				setResult((result += input));
			}
		} else {
			if (number === "0" && isCalculate) {
				setNumber(input);
			} else if (number !== "0" && isCalculate) {
				setNumber((number += input));
			}
		}
	};

	const showSecondInput = () => {
		if (!isCalculate) {
			return <h4 id="display">{result}</h4>;
		} else if (isCalculate && result !== "0" && number === "0") {
			return <h4 id="display">{result}</h4>;
		} else {
			console.log(`this is result when isCalcu is true ${result}`);
			console.log(`this is num ${number}`);
			return <h4 id="display">{number}</h4>;
		}
	};

	const checkDecimal = (input) => {
		if (input.includes(".")) {
			return false;
		} else {
			return true;
		}
	};

	const getTotal = (result, number, operand) => {
		if (operand === "+") {
			setResult(methods.add(result, number));
			setIsCalculate(false);
			setNumber("0");
		} else if (operand === "-") {
			setResult(methods.subtract(result, number));
			setIsCalculate(false);
			setNumber("0");
		} else if (operand === "*") {
			setResult(methods.multiply(result, number));
			setIsCalculate(false);
			setNumber("0");
		} else if (operand === "/") {
			setResult(methods.divide(result, number));
			setIsCalculate(false);
			setNumber("0");
		}
	};

	const deleteMistake = () => {
		let currentInput = "";
		if (!isCalculate && result !== "0" && result.length === 1) {
			setResult("0");
		} else if (!isCalculate && result.length > 1) {
			currentInput = result;
			let tmp = currentInput.slice(0, result.length - 1);
			currentInput = tmp;
			setResult(currentInput);
		} else if (isCalculate && number.length > 1) {
			currentInput = number;
			let tmp = currentInput.slice(0, number.length - 1);
			currentInput = tmp;
			setNumber(currentInput);
		} else {
			alert("please try again");
			window.location.reload();
		}
	};

	// // still need to improve
	// let shouldProcessEvent = true;

	// function handleKeyDown(event) {
	// 	event.preventDefault();
	// 	console.log(event.key);

	// 	if (!shouldProcessEvent) return;

	// 	if (isNaN(event.key)) return;

	// 	shouldProcessEvent = false;

	// 	if (event.key === "Backspace") {
	// 		deleteMistake();
	// 		return;
	// 	} else if (
	// 		event.key === "+" ||
	// 		event.key === "-" ||
	// 		event.key === "*" ||
	// 		event.key === "/"
	// 	) {
	// 		setIsCalculate(true);
	// 		setOperator(event.key);
	// 	}

	// 	let num = event.key;
	// 	buttonClicked(num);

	// 	// let num = event.key;
	// 	// buttonClicked(num);
	// 	// setTimeout(() => {
	// 	// 	shouldProcessEvent = true;
	// 	// }, 100);
	// 	shouldProcessEvent = true;
	// }
	// document.addEventListener("keydown", handleKeyDown);

	return (
		<>
			<div id="calculator">
				<div id="head">{showSecondInput()}</div>
				<div id="body">
					<button
						className="button"
						onClick={() => {
							const num = "7";
							buttonClicked(num);
						}}
					>
						7
					</button>
					<button
						className="button"
						onClick={() => {
							const num = "8";
							buttonClicked(num);
						}}
					>
						8
					</button>
					<button
						className="button"
						onClick={() => {
							const num = "9";
							buttonClicked(num);
						}}
					>
						9
					</button>
					<button
						className="button"
						onClick={() => {
							if (isCalculate) {
								getTotal(result, number, operator);
								setIsCalculate(true);
								setOperator("/");
							} else {
								setIsCalculate(true);
								setOperator("/");
							}
						}}
					>
						/
					</button>
					<button
						className="button del"
						onClick={() => {
							deleteMistake();
						}}
					>
						⇐
					</button>
					<br />
					<button
						className="button"
						onClick={() => {
							const num = "4";
							buttonClicked(num);
						}}
					>
						4
					</button>
					<button
						className="button"
						onClick={() => {
							const num = "5";
							buttonClicked(num);
						}}
					>
						5
					</button>
					<button
						className="button"
						onClick={() => {
							const num = "6";
							buttonClicked(num);
						}}
					>
						6
					</button>
					<button
						className="button"
						onClick={() => {
							if (isCalculate) {
								getTotal(result, number, operator);
								setIsCalculate(true);
								setOperator("*");
							} else {
								setIsCalculate(true);
								setOperator("*");
							}
						}}
					>
						*
					</button>
					<br />
					<button
						className="button"
						onClick={() => {
							const num = "1";
							buttonClicked(num);
						}}
					>
						1
					</button>
					<button
						className="button"
						onClick={() => {
							const num = "2";
							buttonClicked(num);
						}}
					>
						2
					</button>
					<button
						className="button"
						onClick={() => {
							const num = "3";
							buttonClicked(num);
						}}
					>
						3
					</button>
					<button
						className="button"
						onClick={() => {
							if (isCalculate) {
								getTotal(result, number, operator);
								setIsCalculate(true);
								setOperator("-");
							} else {
								setIsCalculate(true);
								setOperator("-");
							}
						}}
					>
						-
					</button>
					<br />
					<button
						className="button"
						onClick={() => {
							// should not be able to add more 0 from start
							if (result === "0" && !isCalculate) {
								return 0;
							}
							if (number === "0" && isCalculate) {
								return 0;
							}

							if (result !== "0" && !isCalculate) {
								setResult((result += "0"));
							}

							if (number !== "0" && isCalculate) {
								setNumber((number += "0"));
							}
						}}
					>
						0
					</button>
					<button
						className="button"
						onClick={() => {
							if (result === "0" && !isCalculate) {
								setResult("0.");
							} else if (
								result !== "0" &&
								!isCalculate &&
								checkDecimal(result)
							) {
								setResult((result += "."));
							}

							if (isCalculate) {
								if (number === "0") {
									setNumber("0.");
								} else if (checkDecimal(number)) {
									setNumber((number += "."));
								}
							}
						}}
					>
						.
					</button>
					<button
						className="button"
						onClick={() => {
							if (isCalculate) {
								getTotal(result, number, operator);
								setIsCalculate(true);
								setOperator("+");
							} else {
								setIsCalculate(true);
								setOperator("+");
							}
						}}
					>
						+
					</button>

					<button
						className="button"
						onClick={() => {
							getTotal(result, number, operator);
						}}
					>
						=
					</button>
					<button
						className="button"
						onClick={() => {
							setResult("0");
							setNumber("0");
							setIsCalculate(false);
						}}
					>
						C
					</button>
				</div>
			</div>
		</>
	);
}

export default App;
