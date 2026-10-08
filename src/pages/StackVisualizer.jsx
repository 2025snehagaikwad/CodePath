import { useState } from "react";

function StackVisualizer() {
  const [stack, setStack] = useState([10, 20, 30]);
  const [inputValue, setInputValue] = useState("");

  const [message, setMessage] = useState(
    "Stack is ready. Try performing an operation."
  );

  const [animation, setAnimation] = useState("");

  const [steps, setSteps] = useState([
    "Waiting for an operation..."
  ]);

  const [operation, setOperation] = useState("No operation");

  // PUSH
  const push = () => {
    if (inputValue === "") {
      setMessage("Please enter a value first.");

      setSteps([
        "Enter a value before performing Push."
      ]);

      return;
    }

    if (stack.length >= 6) {
      setMessage("Stack Overflow! Maximum size is 6.");

      setSteps([
        "Check if stack is full.",
        "Stack is already full.",
        "Cannot insert a new element."
      ]);

      setOperation("PUSH");

      return;
    }

    const value = Number(inputValue);

    setStack([...stack, value]);

    setMessage(`Pushed ${value} into the stack.`);

    setOperation(`PUSH ${value}`);

    setSteps([
      "Check if stack is full.",
      `Add ${value} to the top of the stack.`,
      `TOP is now ${value}.`
    ]);

    setAnimation("push");

    setInputValue("");

    setTimeout(() => {
      setAnimation("");
    }, 400);
  };


  // POP
  const pop = () => {
    if (stack.length === 0) {
      setMessage("Stack Underflow! The stack is empty.");

      setSteps([
        "Check if stack is empty.",
        "Stack is empty.",
        "Cannot remove an element."
      ]);

      setOperation("POP");

      return;
    }

    const removed = stack[stack.length - 1];

    setAnimation("pop");

    setMessage(`Popped ${removed} from the stack.`);

    setOperation("POP");

    setSteps([
      "Check if stack is empty.",
      `Remove ${removed} from the top.`,
      "Update TOP to the next element."
    ]);

    setTimeout(() => {
      setStack(stack.slice(0, -1));
      setAnimation("");
    }, 300);
  };


  // PEEK
  const peek = () => {
    if (stack.length === 0) {
      setMessage("Stack is empty.");

      setSteps([
        "Check if stack is empty.",
        "Stack is empty.",
        "There is no TOP element."
      ]);

      setOperation("PEEK");

      return;
    }

    const top = stack[stack.length - 1];

    setMessage(`The top element is ${top}.`);

    setOperation("PEEK");

    setSteps([
      "Check if stack is empty.",
      `Read the TOP element: ${top}.`,
      "The stack remains unchanged."
    ]);
  };


  // RESET
  const reset = () => {
    setStack([10, 20, 30]);

    setMessage("Stack has been reset.");

    setOperation("RESET");

    setSteps([
      "Clear the current stack.",
      "Restore the initial elements.",
      "Stack is ready again."
    ]);

    setAnimation("");
  };


  return (
    <div className="visualizer-page">

      {/* HEADER */}

      <div className="visualizer-header">

        <p className="hero-label">
          DATA STRUCTURE VISUALIZER
        </p>

        <h1>
          Stack Visualizer
        </h1>

        <p>
          Understand how a Stack works using
          interactive operations.
        </p>

      </div>


      <div className="visualizer-container">

        {/* STACK */}

        <div className="stack-section">

          <h2>
            Stack
          </h2>

          <div className="stack-box">

            {stack.length === 0 ? (

              <p className="empty-stack">
                Empty Stack
              </p>

            ) : (

              <>
                <div className="top-label">
                  TOP ↓
                </div>

                {[...stack].reverse().map((value, index) => (

                  <div
                    className={`stack-item ${
                      index === 0 ? animation : ""
                    }`}
                    key={index}
                  >
                    {value}
                  </div>

                ))}

              </>

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
              setInputValue(e.target.value)
            }
          />

          <button onClick={push}>
            Push
          </button>

          <button onClick={pop}>
            Pop
          </button>

          <button onClick={peek}>
            Peek
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
              Time: O(1)
            </div>

          </div>


          <div className="steps-list">

            {steps.map((step, index) => (

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

            ))}

          </div>

        </div>


        {/* EXPLANATION */}

        <div className="explanation-grid">

          <div className="explanation-card">

            <h3>
              LIFO
            </h3>

            <p>
              Stack follows the
              <strong>
                {" "}Last In, First Out
              </strong>
              principle.
            </p>

          </div>


          <div className="explanation-card">

            <h3>
              Push
            </h3>

            <p>
              Adds a new element to
              the top of the stack.
            </p>

          </div>


          <div className="explanation-card">

            <h3>
              Pop
            </h3>

            <p>
              Removes the top element
              from the stack.
            </p>

          </div>


          <div className="explanation-card">

            <h3>
              Complexity
            </h3>

            <p>
              Push, Pop and Peek
              take <strong>O(1)</strong> time.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default StackVisualizer;