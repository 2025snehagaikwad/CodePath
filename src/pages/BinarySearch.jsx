import { useState } from "react";

function BinarySearch() {

  // Binary Search requires a SORTED array
  const [array] = useState([
    10,
    20,
    30,
    40,
    50,
    60,
    70
  ]);

  const [target, setTarget] = useState("");

  const [low, setLow] = useState(-1);
  const [mid, setMid] = useState(-1);
  const [high, setHigh] = useState(-1);

  const [foundIndex, setFoundIndex] = useState(-1);

  const [comparisons, setComparisons] = useState(0);

  const [status, setStatus] = useState("");

  const [message, setMessage] = useState(
    "Enter a value and click Start Search."
  );

  const [steps, setSteps] = useState([
    "Binary Search works only on a sorted array.",
    "It repeatedly divides the search range in half."
  ]);

  const [searching, setSearching] = useState(false);


  // =========================
  // START BINARY SEARCH
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

    setLow(-1);
    setMid(-1);
    setHigh(-1);
    setFoundIndex(-1);
    setComparisons(0);

    setSearching(true);
    setStatus("searching");

    setMessage(
      `Searching for ${value}...`
    );

    setSteps([
      "Set LOW to the first index.",
      "Set HIGH to the last index.",
      "Calculate MID = (LOW + HIGH) / 2.",
      "Compare the middle element with the target.",
      "Discard half of the search space."
    ]);


    let left = 0;
    let right = array.length - 1;
    let count = 0;


    const searchStep = () => {

      if (left > right) {

        setLow(-1);
        setMid(-1);
        setHigh(-1);

        setSearching(false);
        setStatus("not-found");

        setMessage(
          `${value} was not found in the array.`
        );

        setSteps([
          "LOW has crossed HIGH.",
          "The search space is empty.",
          `${value} was not found.`
        ]);

        return;
      }


      const middle = Math.floor(
        (left + right) / 2
      );

      count++;

      setLow(left);
      setMid(middle);
      setHigh(right);

      setComparisons(count);

      setStatus("searching");


      if (array[middle] === value) {

        setFoundIndex(middle);

        setSearching(false);

        setStatus("found");

        setMessage(
          `${value} found at index ${middle}!`
        );

        setSteps([
          `LOW = ${left}`,
          `HIGH = ${right}`,
          `MID = ${middle}`,
          `Compare ${array[middle]} with ${value}.`,
          `${array[middle]} equals ${value}. Element found!`
        ]);

        return;
      }


      if (array[middle] < value) {

        setMessage(
          `${array[middle]} is smaller than ${value}. Search the right half.`
        );

        setSteps([
          `LOW = ${left}`,
          `HIGH = ${right}`,
          `MID = ${middle}`,
          `${array[middle]} < ${value}.`,
          "Ignore the left half.",
          `Move LOW to ${middle + 1}.`
        ]);

        left = middle + 1;

      } else {

        setMessage(
          `${array[middle]} is greater than ${value}. Search the left half.`
        );

        setSteps([
          `LOW = ${left}`,
          `HIGH = ${right}`,
          `MID = ${middle}`,
          `${array[middle]} > ${value}.`,
          "Ignore the right half.",
          `Move HIGH to ${middle - 1}.`
        ]);

        right = middle - 1;
      }


      setTimeout(
        searchStep,
        1200
      );
    };


    searchStep();
  };


  // =========================
  // RESET
  // =========================

  const reset = () => {

    setLow(-1);
    setMid(-1);
    setHigh(-1);

    setFoundIndex(-1);

    setComparisons(0);

    setSearching(false);

    setStatus("");

    setTarget("");

    setMessage(
      "Enter a value and click Start Search."
    );

    setSteps([
      "Binary Search works only on a sorted array.",
      "It repeatedly divides the search range in half."
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
          Binary Search
        </h1>

        <p>
          Watch how Binary Search repeatedly
          divides a sorted array in half.
        </p>

      </div>


      <div className="visualizer-container">


        {/* ARRAY */}

        <div className="stack-section">

          <h2>
            Sorted Array
          </h2>

          <div className="search-array-box">

            {array.map(
              (value, index) => {

                let className =
                  "search-item binary-item";


                if (
                  index === low &&
                  status === "searching"
                ) {
                  className += " binary-low";
                }


                if (
                  index === mid &&
                  status === "searching"
                ) {
                  className += " binary-mid";
                }


                if (
                  index === high &&
                  status === "searching"
                ) {
                  className += " binary-high";
                }


                if (
                  index === foundIndex &&
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

                      {index === low &&
                        status === "searching" &&
                        "L"}

                      {index === mid &&
                        status === "searching" &&
                        "MID"}

                      {index === high &&
                        status === "searching" &&
                        "H"}

                      {index === foundIndex &&
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
              LOW
            </span>

            <strong>
              {low === -1
                ? "-"
                : low}
            </strong>

          </div>


          <div className="search-info-card">

            <span>
              MID
            </span>

            <strong>
              {mid === -1
                ? "-"
                : mid}
            </strong>

          </div>


          <div className="search-info-card">

            <span>
              HIGH
            </span>

            <strong>
              {high === -1
                ? "-"
                : high}
            </strong>

          </div>


        </div>


        {/* COMPARISONS */}

        <div className="search-info-grid">


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


          <div className="search-info-card">

            <span>
              Time Complexity
            </span>

            <strong>
              O(log n)
            </strong>

          </div>


          <div className="search-info-card">

            <span>
              Requirement
            </span>

            <strong>
              Sorted
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
                Binary Search
              </h2>

            </div>

            <div className="complexity-badge">
              Time: O(log n)
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
              LOW
            </h3>

            <p>
              LOW points to the first
              index in the current search range.
            </p>

          </div>


          <div className="explanation-card">

            <h3>
              MID
            </h3>

            <p>
              MID represents the middle
              index of the search range.
            </p>

          </div>


          <div className="explanation-card">

            <h3>
              HIGH
            </h3>

            <p>
              HIGH points to the last
              index in the current search range.
            </p>

          </div>


          <div className="explanation-card">

            <h3>
              Important
            </h3>

            <p>
              Binary Search requires a
              <strong> sorted array</strong>.
            </p>

          </div>


        </div>


      </div>

    </div>
  );
}

export default BinarySearch;