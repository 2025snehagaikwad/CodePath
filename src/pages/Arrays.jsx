function Arrays({ setPage }) {

  return (
    <div className="topic-page">

      {/* HEADER */}

      <div className="topic-header">

        <p className="hero-label">
          DATA STRUCTURES
        </p>

        <h1>
          Arrays
        </h1>

        <p>
          Learn how arrays store and organize
          elements in memory.
        </p>

      </div>


      {/* WHAT IS ARRAY */}

      <section className="learning-section">

        <p className="hero-label">
          CONCEPT
        </p>

        <h2>
          What is an Array?
        </h2>

        <p>
          An array is a data structure used to store
          multiple elements of the same type in a
          continuous block of memory.
        </p>

        <p>
          Each element is identified using an
          <strong> index</strong>. In most programming
          languages, array indexing starts from
          <strong> 0</strong>.
        </p>

      </section>


      {/* EXAMPLE */}

      <section className="learning-section">

        <h2>
          Example
        </h2>

        <div className="array-learning-example">

          <div>
            Index
          </div>

          <div>
            0
          </div>

          <div>
            1
          </div>

          <div>
            2
          </div>

          <div>
            3
          </div>

        </div>


        <div className="array-learning-example values">

          <div>
            Value
          </div>

          <div>
            10
          </div>

          <div>
            20
          </div>

          <div>
            30
          </div>

          <div>
            40
          </div>

        </div>

      </section>


      {/* IMPORTANT POINTS */}

      <section className="learning-section">

        <h2>
          Important Points
        </h2>


        <div className="learning-cards">


          <div className="learning-card">

            <h3>
              Index
            </h3>

            <p>
              The first element is stored at
              index 0.
            </p>

          </div>


          <div className="learning-card">

            <h3>
              Access
            </h3>

            <p>
              Elements can be accessed directly
              using their index.
            </p>

          </div>


          <div className="learning-card">

            <h3>
              Ordered
            </h3>

            <p>
              Elements are stored in a specific
              order.
            </p>

          </div>


          <div className="learning-card">

            <h3>
              Same Type
            </h3>

            <p>
              Arrays generally store elements
              of the same data type.
            </p>

          </div>


        </div>

      </section>


      {/* OPERATIONS */}

      <section className="learning-section">

        <p className="hero-label">
          OPERATIONS
        </p>

        <h2>
          Common Array Operations
        </h2>


        <div className="operations-list">

          <div>
            <strong>Access</strong>
            <span>Get an element using its index.</span>
          </div>

          <div>
            <strong>Search</strong>
            <span>Find a particular element.</span>
          </div>

          <div>
            <strong>Insertion</strong>
            <span>Add an element to the array.</span>
          </div>

          <div>
            <strong>Deletion</strong>
            <span>Remove an element from the array.</span>
          </div>

          <div>
            <strong>Traversal</strong>
            <span>Visit each element one by one.</span>
          </div>

        </div>

      </section>


      {/* VISUALIZER */}

      <section className="try-section">

        <div>

          <p className="hero-label">
            INTERACTIVE
          </p>

          <h2>
            Ready to visualize Arrays?
          </h2>

          <p>
            Perform operations and watch how
            the array changes step-by-step.
          </p>

        </div>


        <button
          className="primary-button"
          onClick={() => setPage("arrays")}
        >
          Open Array Visualizer →
        </button>

      </section>


      {/* BACK */}

      <button
        className="back-button"
        onClick={() => setPage("home")}
      >
        ← Back to Home
      </button>

    </div>
  );
}

export default Arrays;