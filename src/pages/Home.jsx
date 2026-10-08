import TopicCard from "../components/TopicCard";

function Home({ setPage }) {

  return (
    <div>

      {/* HERO SECTION */}

      <section className="hero">

        <div className="hero-content">

          <p className="hero-label">
            INTERACTIVE DSA LEARNING
          </p>

          <h1>
            Understand Algorithms.
            <br />
            Don't Just Memorize Them.
          </h1>

          <p className="hero-description">
            Learn Data Structures and Algorithms through
            visualizations, interactive problems and
            step-by-step explanations.
          </p>

          <div className="hero-buttons">

            <button
              className="primary-button"
              onClick={() => setPage("dashboard")}
            >
              Start Learning
            </button>

            <button
              className="secondary-button"
              onClick={() => setPage("stack")}
            >
              Try Visualizer
            </button>

          </div>

        </div>

      </section>


      {/* DSA TOPICS */}

      <section className="topics">

        <h2>
          Explore DSA Topics
        </h2>

        <p className="section-description">
          Learn concepts visually and understand how
          algorithms actually work.
        </p>


        <div className="topic-grid">

          <TopicCard
            icon="▣"
            title="Arrays"
            description="Learn searching, sorting and array operations."
            onClick={() => setPage("arrays")}
          />

          <TopicCard
            icon="▤"
            title="Stack"
            description="Understand LIFO using an interactive visualizer."
            onClick={() => setPage("stack")}
          />

          <TopicCard
            icon="☷"
            title="Queue"
            description="Learn FIFO and visualize queue operations."
            onClick={() => setPage("queue")}
          />

          <TopicCard
            icon="●"
            title="Linked List"
            description="Learn nodes, links and traversal."
            onClick={() => setPage("linkedlist")}
          />

        </div>

      </section>


      {/* ALGORITHM VISUALIZATIONS */}

      <section className="algorithms-section">

        <p className="hero-label">
          ALGORITHM VISUALIZATIONS
        </p>

        <h2>
          Learn Algorithms Visually
        </h2>

        <p className="section-description">
          Watch algorithms execute step-by-step
          instead of just memorizing them.
        </p>


        <div className="algorithm-grid">

          {/* LINEAR SEARCH */}

          <div className="algorithm-card">

            <div className="algorithm-icon">
              🔎
            </div>

            <div className="algorithm-info">

              <h3>
                Linear Search
              </h3>

              <p>
                Learn how an array is searched
                element by element.
              </p>

              <span>
                Time Complexity: O(n)
              </span>

            </div>

            <button
              onClick={() => setPage("linear-search")}
            >
              Try Algorithm →
            </button>

          </div>


          {/* BINARY SEARCH */}

          <div className="algorithm-card">

            <div className="algorithm-icon">
              ⚡
            </div>

            <div className="algorithm-info">

              <h3>
                Binary Search
              </h3>

              <p>
                Learn how a sorted array can be
                searched by repeatedly dividing it in half.
              </p>

              <span>
                Time Complexity: O(log n)
              </span>

            </div>

            <button
              onClick={() => setPage("binary-search")}
            >
              Try Algorithm →
            </button>

          </div>

        </div>

      </section>


      {/* STATS STRIP */}

      <section className="stats-strip">

        <div className="stat-item">
          <strong>4</strong>
          <span>Data Structures</span>
        </div>

        <div className="stat-item">
          <strong>2</strong>
          <span>Algorithms</span>
        </div>

        <div className="stat-item">
          <strong>100%</strong>
          <span>Interactive Learning</span>
        </div>

        <div className="stat-item">
          <strong>Step-by-Step</strong>
          <span>Visual Explanations</span>
        </div>

      </section>


      {/* HOW IT WORKS */}

      <section className="how-section">

        <p className="hero-label">
          HOW IT WORKS
        </p>

        <h2>
          Learn DSA the smarter way
        </h2>

        <p className="section-description">
          CodePath helps you understand data structures and
          algorithms through learning, visualization and interaction.
        </p>

        <div className="how-grid">

          <div className="how-card">

            <div className="how-number">
              01
            </div>

            <h3>
              Learn
            </h3>

            <p>
              Understand the concept with simple explanations
              and examples.
            </p>

          </div>


          <div className="how-card">

            <div className="how-number">
              02
            </div>

            <h3>
              Visualize
            </h3>

            <p>
              Watch operations and algorithms execute
              step-by-step.
            </p>

          </div>


          <div className="how-card">

            <div className="how-number">
              03
            </div>

            <h3>
              Practice
            </h3>

            <p>
              Interact with the visualizers and build
              your understanding.
            </p>

          </div>

        </div>

      </section>


      {/* FOOTER */}

      <footer className="site-footer">

        <div className="footer-logo">
          Code<span>Path</span>
        </div>

        <p>
          Learn DSA by understanding, not memorizing.
        </p>

        <div className="footer-topics">
          Arrays • Stack • Queue • Linked List
        </div>

        <div className="footer-algorithms">
          Linear Search • Binary Search
        </div>

        <p className="footer-copy">
          Made for students ❤️ • © 2026 CodePath
        </p>

      </footer>

    </div>
  );
}

export default Home;