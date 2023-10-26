import { useState } from "react";
import Question from "./components/questionnaire";
import "./style/App.css";
import useActivities from "./hooks/useActivities";
import Activity from "./components/activity";

export const pageViewOptions = {
  form: "form",
  activity: "activity",
};

export const boredQuery = {
  type: "",
  participants: 1,
  accessibility: false,
  price: false,
};

export default function App() {
  const [boredQuery, setBoredQuery] = useState({});
  const [pageView, setPageView] = useState(pageViewOptions.form);
  const { data, error, isLoading } = useActivities(boredQuery);

  const handleSubmit = (event) => {
    setPageView(pageViewOptions.activity);
    event.preventDefault();
  };

  const handleReset = (event) => {
    setPageView(pageViewOptions.form);
    event.preventDefault();
  };

  return (
    <div className="App">
      <header className="App-header">
        <p className="App-header-title">Bored?</p>
        <p className="App-header-quote">
          You can't use up creativity. The more you use the more you have. Maya
          Angelou
        </p>
      </header>
      <section>
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wave wave4"></div>
      </section>
      <div className="form-section">
        {pageView === pageViewOptions.activity && (
          <Activity
            error={error}
            data={data}
            onNextActivity={handleReset}
            isLoading={isLoading}
          ></Activity>
        )}
        {pageView === pageViewOptions.form && (
          <Question
            error={error}
            onSubmit={handleSubmit}
            onActivityChanged={(e) => {
              const activity = e.target.value;

              if (activity !== "I don't know") {
                setBoredQuery({
                  ...boredQuery,
                  type: activity.replace(" ", ""),
                });
              }
            }}
            onParticipantCountChanged={(e) => {
              const participantCount = e.target.value;
              setBoredQuery({ ...boredQuery, participants: participantCount });
            }}
            onPriceChanged={(e) => {
              const priceChanged = e.target.checked;
              setBoredQuery({ ...boredQuery, price: priceChanged });
            }}
            onAccessibilityChanged={(e) => {
              const accessibilityChanged = e.target.checked;
              setBoredQuery({
                ...boredQuery,
                accessibility: accessibilityChanged,
              });
            }}
          />
        )}
      </div>
    </div>
  );
}
