import { useState } from "react";

function LinkedListVisualizer() {

  const [list, setList] = useState([10, 20, 30]);

  const [inputValue, setInputValue] = useState("");

  const [message, setMessage] = useState(
    "Linked List is ready. Try performing an operation."
  );

  const [operation, setOperation] = useState(
    "No operation"
  );

  const [steps, setSteps] = useState([
    "Waiting for an operation..."
  ]);

  const [animation, setAnimation] = useState("");


  // INSERT AT BEGINNING
  const insertBeginning = () => {

    if (inputValue === "") {

      setMessage("Please enter a value first.");

      setSteps([
        "Enter a value before inserting."
      ]);

      return;
    }

    const value = Number(inputValue);

    setList([
      value,
      ...list
    ]);

    setMessage(
      `Inserted ${value} at the beginning.`
    );

    setOperation(
      `INSERT BEGINNING ${value}`
    );

    setSteps([
      "Create a new node.",
      `Store ${value} inside the new node.`,
      "Point the new node to the current HEAD.",
      `Make ${value} the new HEAD.`
    ]);

    setAnimation("insert");

    setInputValue("");

    setTimeout(() => {
      setAnimation("");
    }, 400);
  };


  // INSERT AT END
  const insertEnd = () => {

    if (inputValue === "") {

      setMessage("Please enter a value first.");

      setSteps([
        "Enter a value before inserting."
      ]);

      return;
    }

    const value = Number(inputValue);

    setList([
      ...list,
      value
    ]);

    setMessage(
      `Inserted ${value} at the end.`
    );

    setOperation(
      `INSERT END ${value}`
    );

    setSteps([
      "Create a new node.",
      `Store ${value} inside the new node.`,
      "Traverse to the last node.",
      `Make the last node point to ${value}.`,
      `${value} now points to NULL.`
    ]);

    setAnimation("insert");

    setInputValue("");

    setTimeout(() => {
      setAnimation("");
    }, 400);
  };


  // DELETE
  const deleteNode = () => {

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

    const index = list.indexOf(value);

    if (index === -1) {

      setMessage(
        `${value} was not found in the linked list.`
      );

      setOperation(
        `DELETE ${value}`
      );

      setSteps([
        "Start from the HEAD.",
        `Search for ${value}.`,
        `${value} was not found.`,
        "No node was deleted."
      ]);

      return;
    }

    const newList = list.filter(
      (item, i) => i !== index
    );

    setList(newList);

    setMessage(
      `Deleted ${value} from the linked list.`
    );

    setOperation(
      `DELETE ${value}`
    );

    setSteps([
      "Start from the HEAD.",
      `Search for ${value}.`,
      `${value} was found.`,
      "Change the previous node's link.",
      `Remove ${value} from the linked list.`
    ]);

    setAnimation("delete");

    setInputValue("");

    setTimeout(() => {
      setAnimation("");
    }, 400);
  };


  // SEARCH
  const searchNode = () => {

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

    const index = list.indexOf(value);

    setOperation(
      `SEARCH ${value}`
    );

    if (index === -1) {

      setMessage(
        `${value} was not found in the linked list.`
      );

      setSteps([
        "Start from the HEAD.",
        `Compare each node with ${value}.`,
        "Continue until NULL.",
        `${value} was not found.`
      ]);

    } else {

      setMessage(
        `${value} was found at position ${index + 1}.`
      );

      setSteps([
        "Start from the HEAD.",
        `Compare each node with ${value}.`,
        `${value} matches the node.`,
        `Value found at position ${index + 1}.`
      ]);

    }

    setInputValue("");
  };


  // REVERSE
  const reverseList = () => {

    if (list.length === 0) {

      setMessage(
        "The linked list is empty."
      );

      setOperation("REVERSE");

      setSteps([
        "Check if the linked list is empty.",
        "The list is empty.",
        "Nothing to reverse."
      ]);

      return;
    }

    if (list.length === 1) {

      setMessage(
        "The linked list has only one node."
      );

      setOperation("REVERSE");

      setSteps([
        "Check the linked list.",
        "Only one node exists.",
        "The list is already reversed."
      ]);

      return;
    }

    const reversedList = [...list].reverse();

    setList(reversedList);

    setMessage(
      "Linked List has been reversed."
    );

    setOperation(
      "REVERSE"
    );

    setSteps([
      "Start with the HEAD node.",
      "Use three references: previous, current and next.",
      "Reverse the link of each node.",
      "Move current to the next node.",
      "Continue until current becomes NULL.",
      "Make the last processed node the new HEAD."
    ]);

    setAnimation("reverse");

    setTimeout(() => {
      setAnimation("");
    }, 500);
  };


  // RESET
  const reset = () => {

    setList([
      10,
      20,
      30
    ]);

    setMessage(
      "Linked List has been reset."
    );

    setOperation(
      "RESET"
    );

    setSteps([
      "Clear the current linked list.",
      "Restore the initial nodes.",
      "Linked List is ready again."
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
          Linked List Visualizer
        </h1>

        <p>
          Understand how nodes are connected
          using an interactive linked list.
        </p>

      </div>


      <div className="visualizer-container">

        {/* LINKED LIST */}

        <div className="stack-section">

          <h2>
            Singly Linked List
          </h2>

          <div className="linked-list-box">

            {list.length === 0 ? (

              <p className="empty-list">
                Empty Linked List
              </p>

            ) : (

              <div className="linked-list">

                <div className="head-label">
                  HEAD ↓
                </div>

                <div className="linked-list-nodes">

                  {list.map(
                    (value, index) => (

                      <div
                        className="node-wrapper"
                        key={index}
                      >

                        <div
                          className={`node ${
                            animation === "insert" &&
                            (
                              index === 0 ||
                              index === list.length - 1
                            )
                              ? "insert"
                              : ""
                          }`}
                        >

                          <div className="node-data">
                            {value}
                          </div>

                          <div className="node-next">
                            →
                          </div>

                        </div>


                        {index < list.length - 1 && (

                          <div className="arrow">
                            →
                          </div>

                        )}

                      </div>

                    )
                  )}

                  <div className="null-label">
                    NULL
                  </div>

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
              setInputValue(e.target.value)
            }
          />

          <button onClick={insertBeginning}>
            Insert Beginning
          </button>

          <button onClick={insertEnd}>
            Insert End
          </button>

          <button onClick={deleteNode}>
            Delete
          </button>

          <button onClick={searchNode}>
            Search
          </button>

          <button onClick={reverseList}>
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
              Node
            </h3>

            <p>
              A node stores data and a
              reference to the next node.
            </p>

          </div>


          <div className="explanation-card">

            <h3>
              HEAD
            </h3>

            <p>
              HEAD points to the first
              node of the linked list.
            </p>

          </div>


          <div className="explanation-card">

            <h3>
              NULL
            </h3>

            <p>
              The last node points to
              NULL, indicating the end.
            </p>

          </div>


          <div className="explanation-card">

            <h3>
              Complexity
            </h3>

            <p>
              Reversing a linked list takes
              <strong> O(n)</strong> time.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default LinkedListVisualizer;