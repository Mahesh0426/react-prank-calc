import { getRandomNumber } from "../Utility/getRandomNumber";

// Operator Constrants
let OPERATORS = ["%", "/", "*", "-", "+"];

const Button = (props) => {
  const {
    buttonText,
    className,
    displayValue,
    setDisplayValue,
    lastOperator,
    setLastOperator,
    setISPrank,
  } = props;

  // functiom to handle click event
  const handleOnClick = () => {
    //set is prank to false
    setISPrank(false);
    // implement AC Button
    if (buttonText === "AC") {
      return setDisplayValue("");
    }

    //Implement C button
    if (buttonText === "C") {
      return setDisplayValue(displayValue.slice(0, -1));
    }

    //Implement handling the operators
    //| donot allow consecutive multiple operators
    if (OPERATORS.includes(buttonText)) {
      // do not allow some operators at the begginning
      if (!displayValue) {
        ["%", "/", "*"].includes(buttonText);
        return;
      }
      //updating the last operator
      setLastOperator(buttonText);

      //get the last operator
      const lastCharacter = displayValue[displayValue.length - 1];

      // If the last character is an operator, remove it
      if (OPERATORS.includes(lastCharacter)) {
        // remove the lastCharacter which is existing operator
        return setDisplayValue(displayValue.slice(0, -1) + buttonText);
      }
    }
    //handle . issue
    if (buttonText === ".") {
      // If there is no operator yet and the display already has a decimal point, do nothing
      if (!lastOperator && displayValue.includes(".")) {
        return;
      }
      // Find the index of the last operator in the current input
      const lastOperatorIndex = displayValue.lastIndexOf(lastOperator);
      // Get the part of the input after the last operator
      const lastNumberSet = displayValue.slice(lastOperatorIndex);
      // If the current number segment already has a decimal point, do nothing
      if (lastNumberSet.includes(".")) {
        return;
      }
    }

    // Implement = button to get the total
    if (buttonText === "=") {
      // eval needs proper expression to work on
      // For that we clean last operator "="

      // Get a valid string for eval
      const result = eval(displayValue);

      // //Logic for prank
      const prankValue = getRandomNumber();
      // //in JS 0 is false
      if (prankValue) {
        setISPrank(true);
      }
      setDisplayValue(result);
      return;
    }

    // set display value is a props
    setDisplayValue(displayValue + buttonText);
  };

  return (
    <button onClick={handleOnClick} className={className}>
      {buttonText}
    </button>
  );
};

export default Button;
