import { useState } from "react";

function LinearSearch() {

  const [array] = useState([
    10,
    25,
    7,
    40,
    18
  ]);

  const [target, setTarget] = useState("");

  const [currentIndex, setCurrentIndex] = useState(-1);

  const [foundIndex, setFoundIndex] = useState(-1);

  const [comparisons, setComparisons] = useState(0);

  const [status, setStatus] = useState("");

  const [message, setMessage] = useState(
    "Enter a value and click Start Search."
  );

  const [steps, setSteps] = useState([
    "Enter a target value.",
    "Linear Search will check elements one by one."
  ]);

  const [searching, setSearching] = useState(false);


  // =========================
  // START SEARCH
  // =========================

  const startSearch = () => {

    if (target === "") {

      setMessage(
        "Please enter a value to search."
      );

      setStatus("error");

      return;
    }

    const value = Number(target);

    setCurrentIndex(-1);
    setFoundIndex(-1);
    setComparisons(0);
    setSearching(true);
    setStatus("searching");

    setMessage(
      `Searching for ${value}...`
    );

    setSteps([
      "Start from index 0.",
      `Compare each element with ${value}.`,
      "If it does not match, move to the next element.",
      "Stop when the value is found or the array ends."
    ]);


    let index = 0;


    const searchStep = () => {

      if (index >= array.length) {

        setCurrentIndex(-1);
        setSearching(false);
        setStatus("not-found");

        setMessage(
          `${value} was not found in the array.`
        );

        setSteps([
          "Start from index 0.",
          "Check each element one by one.",
          "Reach the end of the array.",
          `${value} was not found.`
        ]);

        return;
      }


      setCurrentIndex(index);

      setComparisons(index + 1);

      setStatus("searching");


      if (array[index] === value) {

        setFoundIndex(index);
        setSearching(false);
        setStatus("found");

        setMessage(
          `${value} found at index ${index}!`
        );

        setSteps([
          "Start from index 0.",
          `Compare ${array[index]} with ${value}.`,
          `${array[index]} matches ${value}.`,
          `Element found at index ${index}.`
        ]);

        return;
      }


      setTimeout(() => {

        index++;

        searchStep();

      }, 900);
    };


    searchStep();
  };


  // =========================
  // RESET
  // =========================

  const reset = () => {

    setCurrentIndex(-1);

    setFoundIndex(-1);

    setComparisons(0);

    setSearching(false);

    setStatus("");

    setTarget("");

    setMessage(
      "Enter a value and click Start Search."
    );

    setSteps([
      "Enter a target value.",
      "Linear Search will check elements one by one."
    ]);
  };


  return (
    <div className="visualizer-page">


      {/* HEADER */}

      <div className="visualizer-header">

        <p className="hero-label">
          ALGORITHM VISUALIZER
        </p>

        <h1>
          Linear Search
        </h1>

        <p>
          Watch how Linear Search checks each
          element one by one.
        </p>

      </div>


      <div className="visualizer-container">


        {/* ARRAY */}

        <div className="stack-section">

          <h2>
            Array
          </h2>

          <div className="search-array-box">

            {array.map(
              (value, index) => {

                let className = "search-item";

                if (
                  currentIndex === index &&
                  status === "searching"
                ) {
                  className += " searching";
                }

                if (
                  foundIndex === index &&
                  status === "found"
                ) {
                  className += " found";
                }

                return (

                  <div
                    className={className}
                    key={index}
                  >

                    <div className="search-index">
                      Index {index}
                    </div>

                    <div className="search-value">
                      {value}
                    </div>

                    <div className="search-status">

                      {currentIndex === index &&
                        status === "searching" &&
                        "🔍 Checking"}

                      {foundIndex === index &&
                        status === "found" &&
                        "✅ Found"}

                    </div>

                  </div>

                );
              }
            )}

          </div>

        </div>


        {/* CONTROLS */}

        <div className="controls">

          <input
            type="number"
            placeholder="Enter target"
            value={target}
            disabled={searching}
            onChange={(e) =>
              setTarget(e.target.value)
            }
          />

          <button
            onClick={startSearch}
            disabled={searching}
          >
            {searching
              ? "Searching..."
              : "Start Search"}
          </button>

          <button onClick={reset}>
            Reset
          </button>

        </div>


        {/* SEARCH INFORMATION */}

        <div className="search-info-grid">

          <div className="search-info-card">

            <span>
              Target
            </span>

            <strong>
              {target === ""
                ? "-"
                : target}
            </strong>

          </div>


          <div className="search-info-card">

            <span>
              Current Index
            </span>

            <strong>
              {currentIndex === -1
                ? "-"
                : currentIndex}
            </strong>

          </div>


          <div className="search-info-card">

            <span>
              Comparisons
            </span>

            <strong>
              {comparisons}
            </strong>

          </div>


          <div className="search-info-card">

            <span>
              Result
            </span>

            <strong>

              {status === "found"
                ? "Found ✓"
                : status === "not-found"
                ? "Not Found"
                : "-"}

            </strong>

          </div>

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
                Linear Search
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
              Step 1
            </h3>

            <p>
              Start from the first element
              of the array.
            </p>

          </div>


          <div className="explanation-card">

            <h3>
              Step 2
            </h3>

            <p>
              Compare the current element
              with the target.
            </p>

          </div>


          <div className="explanation-card">

            <h3>
              Step 3
            </h3>

            <p>
              If they don't match, move
              to the next element.
            </p>

          </div>


          <div className="explanation-card">

            <h3>
              Complexity
            </h3>

            <p>
              Worst-case time is
              <strong> O(n)</strong>.
            </p>

          </div>


        </div>


      </div>

    </div>
  );
}

export default LinearSearch;