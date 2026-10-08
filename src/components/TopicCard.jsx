function TopicCard({ title, description, icon, onClick }) {
  return (
    <div className="topic-card" onClick={onClick}>

      <div className="topic-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      <button>
        Start Learning →
      </button>

    </div>
  );
}

export default TopicCard;