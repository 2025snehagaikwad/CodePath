import { useState } from "react";

function QueueVisualizer() {
  const [queue, setQueue] = useState([10, 20, 30]);
  const [inputValue, setInputValue] = useState("");

  const [message, setMessage] = useState(
    "Queue is ready. Try performing an operation."
  );

  const [animation, setAnimation] = useState("");

  const [steps, setSteps] = useState([
    "Waiting for an operation..."
  ]);

  const [operation, setOperation] = useState(
    "No operation"
  );


  // ENQUEUE
  const enqueue = () => {

    if (inputValue === "") {

      setMessage(
        "Please enter a value first."
      );

      setSteps([
        "Enter a value before performing Enqueue."
      ]);

      return;
    }


    if (queue.length >= 6) {

      setMessage(
        "Queue Overflow! Maximum size is 6."
      );

      setSteps([
        "Check if queue is full.",
        "Queue is already full.",
        "Cannot insert a new element."
      ]);

      setOperation("ENQUEUE");

      return;
    }


    const value = Number(inputValue);

    setQueue([
      ...queue,
      value
    ]);

    setMessage(
      `Enqueued ${value} into the queue.`
    );

    setOperation(
      `ENQUEUE ${value}`
    );

    setSteps([
      "Check if queue is full.",
      `Add ${value} at the REAR.`,
      `REAR now contains ${value}.`
    ]);

    setAnimation("enqueue");

    setInputValue("");


    setTimeout(() => {
      setAnimation("");
    }, 400);
  };


  // DEQUEUE
  const dequeue = () => {

    if (queue.length === 0) {

      setMessage(
        "Queue Underflow! The queue is empty."
      );

      setSteps([
        "Check if queue is empty.",
        "Queue is empty.",
        "Cannot remove an element."
      ]);

      setOperation("DEQUEUE");

      return;
    }


    const removed = queue[0];

    setAnimation("dequeue");

    setMessage(
      `Dequeued ${removed} from the queue.`
    );

    setOperation("DEQUEUE");

    setSteps([
      "Check if queue is empty.",
      `Remove ${removed} from the FRONT.`,
      "Move FRONT to the next element."
    ]);


    setTimeout(() => {

      setQueue(
        queue.slice(1)
      );

      setAnimation("");

    }, 300);
  };


  // FRONT
  const front = () => {

    if (queue.length === 0) {

      setMessage(
        "Queue is empty."
      );

      setSteps([
        "Check if queue is empty.",
        "Queue is empty.",
        "There is no FRONT element."
      ]);

      setOperation("FRONT");

      return;
    }


    const first = queue[0];

    setMessage(
      `The front element is ${first}.`
    );

    setOperation("FRONT");

    setSteps([
      "Check if queue is empty.",
      `Read the FRONT element: ${first}.`,
      "The queue remains unchanged."
    ]);
  };


  // RESET
  const reset = () => {

    setQueue([
      10,
      20,
      30
    ]);

    setMessage(
      "Queue has been reset."
    );

    setOperation(
      "RESET"
    );

    setSteps([
      "Clear the current queue.",
      "Restore the initial elements.",
      "Queue is ready again."
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
          Queue Visualizer
        </h1>

        <p>
          Understand how a Queue works using
          interactive operations.
        </p>

      </div>


      <div className="visualizer-container">


        {/* QUEUE */}

        <div className="stack-section">

          <h2>
            Queue
          </h2>


          <div className="queue-box">

            {queue.length === 0 ? (

              <p className="empty-queue">
                Empty Queue
              </p>

            ) : (

              <>

                <div className="queue-labels">

                  <span>
                    FRONT →
                  </span>

                  <span>
                    ← REAR
                  </span>

                </div>


                <div className="queue-items">

                  {queue.map(
                    (value, index) => (

                      <div
                        className={`queue-item ${
                          index === 0
                            ? animation
                            : ""
                        }`}
                        key={index}
                      >
                        {value}
                      </div>

                    )
                  )}

                </div>

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
              setInputValue(
                e.target.value
              )
            }
          />

          <button onClick={enqueue}>
            Enqueue
          </button>

          <button onClick={dequeue}>
            Dequeue
          </button>

          <button onClick={front}>
            Front
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
              FIFO
            </h3>

            <p>

              Queue follows the

              <strong>
                {" "}First In, First Out
              </strong>

              principle.

            </p>

          </div>


          <div className="explanation-card">

            <h3>
              Enqueue
            </h3>

            <p>
              Adds a new element
              at the REAR of the queue.
            </p>

          </div>


          <div className="explanation-card">

            <h3>
              Dequeue
            </h3>

            <p>
              Removes an element
              from the FRONT.
            </p>

          </div>


          <div className="explanation-card">

            <h3>
              Complexity
            </h3>

            <p>

              Enqueue, Dequeue and Front
              take <strong>O(1)</strong> time.

            </p>

          </div>


        </div>

      </div>

    </div>

  );
}

export default QueueVisualizer;