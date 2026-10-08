function Dashboard({ setPage }) {
  return (
    <div className="dashboard-page">

      <div className="dashboard-header">

        <p className="hero-label">
          YOUR LEARNING SPACE
        </p>

        <h1>
          Welcome to CodePath 👋
        </h1>

        <p>
          Track your DSA learning journey and
          continue where you left off.
        </p>

      </div>


      <div className="stats-grid">

        <div className="stat-card">
          <h3>420</h3>
          <p>XP Earned</p>
        </div>

        <div className="stat-card">
          <h3>18</h3>
          <p>Questions Solved</p>
        </div>

        <div className="stat-card">
          <h3>4</h3>
          <p>Day Streak 🔥</p>
        </div>

        <div className="stat-card">
          <h3>82%</h3>
          <p>Accuracy</p>
        </div>

      </div>


      <section className="progress-section">

        <h2>Your Progress</h2>

        <div className="progress-item">

          <div className="progress-info">
            <span>Arrays</span>
            <span>70%</span>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: "70%" }}
            ></div>
          </div>

        </div>


        <div className="progress-item">

          <div className="progress-info">
            <span>Stack</span>
            <span>45%</span>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: "45%" }}
            ></div>
          </div>

        </div>


        <div className="progress-item">

          <div className="progress-info">
            <span>Queue</span>
            <span>25%</span>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: "25%" }}
            ></div>
          </div>

        </div>

      </section>


      <section className="continue-section">

        <div>

          <p className="hero-label">
            CONTINUE LEARNING
          </p>

          <h2>
            Stack Data Structure
          </h2>

          <p>
            Continue learning about LIFO,
            Push, Pop and Peek operations.
          </p>

        </div>

        <button
          className="primary-button"
          onClick={() => setPage("stack")}
        >
          Continue →
        </button>

      </section>

    </div>
  );
}

export default Dashboard;