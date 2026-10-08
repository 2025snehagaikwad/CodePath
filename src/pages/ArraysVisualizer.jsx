import { useState } from "react";

function ArraysVisualizer() {

  const [array, setArray] = useState([
    10,
    20,
    30,
    40,
    50
  ]);

  const [inputValue, setInputValue] = useState("");

  const [message, setMessage] = useState(
    "Array is ready. Try performing an operation."
  );

  const [operation, setOperation] = useState(
    "No operation"
  );

  const [steps, setSteps] = useState([
    "Waiting for an operation..."
  ]);

  const [animation, setAnimation] = useState("");


  // =========================
  // ADD ELEMENT
  // =========================

  const addElement = () => {

    if (inputValue === "") {

      setMessage(
        "Please enter a value first."
      );

      setSteps([
        "Enter a value before adding."
      ]);

      return;
    }

    if (array.length >= 8) {

      setMessage(
        "Array is full. Maximum size is 8."
      );

      setSteps([
        "Check if the array is full.",
        "Array has reached its maximum size.",
        "Cannot add another element."
      ]);

      setOperation("ADD");

      return;
    }

    const value = Number(inputValue);

    setArray([
      ...array,
      value
    ]);

    setMessage(
      `Added ${value} to the array.`
    );

    setOperation(
      `ADD ${value}`
    );

    setSteps([
      "Go to the end of the array.",
      `Insert ${value} at the next available index.`,
      `Array now contains ${array.length + 1} elements.`
    ]);

    setAnimation("add");

    setInputValue("");

    setTimeout(() => {
      setAnimation("");
    }, 400);
  };


  // =========================
  // SEARCH
  // =========================

  const searchElement = () => {

    if (inputValue === "") {

      setMessage(
        "Please enter the value you want to search."
      );

      setSteps([
        "Enter a value before searching."
      ]);

      return;
    }

    const value = Number(inputValue);

    const index = array.indexOf(value);

    setOperation(
      `SEARCH ${value}`
    );

    if (index === -1) {

      setMessage(
        `${value} was not found in the array.`
      );

      setSteps([
        "Start from index 0.",
        `Compare each element with ${value}.`,
        "Continue until the end of the array.",
        `${value} was not found.`
      ]);

    } else {

      setMessage(
        `${value} was found at index ${index}.`
      );

      setSteps([
        "Start from index 0.",
        `Compare each element with ${value}.`,
        `${value} matches the element.`,
        `Element found at index ${index}.`
      ]);

    }

    setInputValue("");
  };


  // =========================
  // DELETE
  // =========================

  const deleteElement = () => {

    if (inputValue === "") {

      setMessage(
        "Please enter the value you want to delete."
      );

      setSteps([
        "Enter a value before deleting."
      ]);

      return;
    }

    const value = Number(inputValue);

    const index = array.indexOf(value);

    if (index === -1) {

      setMessage(
        `${value} was not found in the array.`
      );

      setOperation(
        `DELETE ${value}`
      );

      setSteps([
        "Start from index 0.",
        `Search for ${value}.`,
        `${value} was not found.`,
        "No element was deleted."
      ]);

      return;
    }

    const newArray = array.filter(
      (item, i) => i !== index
    );

    setArray(newArray);

    setMessage(
      `Deleted ${value} from the array.`
    );

    setOperation(
      `DELETE ${value}`
    );

    setSteps([
      "Find the element to delete.",
      `${value} was found.`,
      "Remove the element.",
      "Shift the remaining elements to fill the gap."
    ]);

    setAnimation("delete");

    setInputValue("");

    setTimeout(() => {
      setAnimation("");
    }, 400);
  };


  // =========================
  // REVERSE
  // =========================

  const reverseArray = () => {

    if (array.length === 0) {

      setMessage(
        "The array is empty."
      );

      setOperation(
        "REVERSE"
      );

      setSteps([
        "Check whether the array is empty.",
        "The array is empty.",
        "Nothing to reverse."
      ]);

      return;
    }

    const reversedArray = [
      ...array
    ].reverse();

    setArray(reversedArray);

    setMessage(
      "Array has been reversed."
    );

    setOperation(
      "REVERSE"
    );

    setSteps([
      "Start from both ends of the array.",
      "Swap the first and last elements.",
      "Move towards the center.",
      "Continue until the array is reversed."
    ]);

    setAnimation("reverse");

    setInputValue("");

    setTimeout(() => {
      setAnimation("");
    }, 500);
  };


  // =========================
  // RESET
  // =========================

  const reset = () => {

    setArray([
      10,
      20,
      30,
      40,
      50
    ]);

    setMessage(
      "Array has been reset."
    );

    setOperation(
      "RESET"
    );

    setSteps([
      "Clear the current array.",
      "Restore the initial elements.",
      "Array is ready again."
    ]);

    setAnimation("");

    setInputValue("");
  };


  return (
    <div className="visualizer-page">


      {/* HEADER */}

      <div className="visualizer-header">

        <p className="hero-label">
          DATA STRUCTURE VISUALIZER
        </p>

        <h1>
          Array Visualizer
        </h1>

        <p>
          Understand how arrays store and access
          elements using interactive operations.
        </p>

      </div>


      <div className="visualizer-container">


        {/* ARRAY */}

        <div className="stack-section">

          <h2>
            Array
          </h2>

          <div className="array-box">

            {array.length === 0 ? (

              <p className="empty-array">
                Empty Array
              </p>

            ) : (

              <div className="array-container">


                {/* INDEX */}

                <div className="array-indexes">

                  {array.map(
                    (_, index) => (

                      <div
                        className="array-index"
                        key={index}
                      >
                        {index}
                      </div>

                    )
                  )}

                </div>


                {/* VALUES */}

                <div className="array-items">

                  {array.map(
                    (value, index) => (

                      <div
                        className={`array-item ${animation}`}
                        key={index}
                      >
                        {value}
                      </div>

                    )
                  )}

                </div>


              </div>

            )}

          </div>

        </div>


        {/* CONTROLS */}

        <div className="controls">

          <input
            type="number"
            placeholder="Enter value"
            value={inputValue}
            onChange={(e) =>
              setInputValue(
                e.target.value
              )
            }
          />

          <button onClick={addElement}>
            Add
          </button>

          <button onClick={searchElement}>
            Search
          </button>

          <button onClick={deleteElement}>
            Delete
          </button>

          <button onClick={reverseArray}>
            Reverse
          </button>

          <button onClick={reset}>
            Reset
          </button>

        </div>


        {/* MESSAGE */}

        <div className="message-box">

          <h3>
            What's happening?
          </h3>

          <p>
            {message}
          </p>

        </div>


        {/* ALGORITHM STEPS */}

        <div className="steps-section">

          <div className="steps-header">

            <div>

              <p className="hero-label">
                ALGORITHM
              </p>

              <h2>
                {operation}
              </h2>

            </div>

            <div className="complexity-badge">
              Time: O(n)
            </div>

          </div>


          <div className="steps-list">

            {steps.map(
              (step, index) => (

                <div
                  className="step-item"
                  key={index}
                >

                  <div className="step-number">
                    {index + 1}
                  </div>

                  <p>
                    {step}
                  </p>

                </div>

              )
            )}

          </div>

        </div>


        {/* EXPLANATION */}

        <div className="explanation-grid">


          <div className="explanation-card">

            <h3>
              Index
            </h3>

            <p>
              Array indexing starts from
              <strong> 0</strong>.
            </p>

          </div>


          <div className="explanation-card">

            <h3>
              Access
            </h3>

            <p>
              Array elements can be accessed
              directly using their index.
            </p>

          </div>


          <div className="explanation-card">

            <h3>
              Search
            </h3>

            <p>
              Linear search checks elements
              one by one.
            </p>

          </div>


          <div className="explanation-card">

            <h3>
              Complexity
            </h3>

            <p>
              Searching generally takes
              <strong> O(n)</strong> time.
            </p>

          </div>


        </div>


      </div>

    </div>
  );
}

export default ArraysVisualizer;