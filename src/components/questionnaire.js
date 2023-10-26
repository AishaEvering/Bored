import React from "react";
import activities from "../data/activities";

const Question = ({
  onSubmit,
  onActivityChanged,
  onParticipantCountChanged,
  onPriceChanged,
  onAccessibilityChanged,
  error,
}) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <h1>Activity Search</h1>
        {error && (
          <div className="error-msg">Something went wrong: {error}</div>
        )}
        <label>
          What do you feel like doing?
          <select
            name="activityType"
            id="activityType"
            onChange={onActivityChanged}
          >
            {activities.map((activity) => (
              <option key={activity}>{activity}</option>
            ))}
          </select>
        </label>
        <label>
          How many participants?
          <input
            name="partipantCount"
            id="partipantCount"
            type="number"
            min="1"
            placeholder="Just me"
            onChange={onParticipantCountChanged}
          />
        </label>
        <label>
          <input
            name="price"
            id="price"
            type="checkbox"
            onChange={onPriceChanged}
          />
          Only look for free activities
        </label>
        <label>
          <input
            name="accessible"
            id="accessible"
            type="checkbox"
            onChange={onAccessibilityChanged}
          />
          Only look for accessible activities
        </label>

        <button>Find Something To Do!</button>
      </form>
    </>
  );
};

export default Question;
