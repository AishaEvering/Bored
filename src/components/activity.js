import React from "react";
import { RevolvingDot } from "react-loader-spinner";

const Activity = ({ data, error, onNextActivity, isLoading }) => {
  {
    if (isLoading) {
      return (
        <form onSubmit={onNextActivity}>
          <div className="activity">
            <RevolvingDot
              redius="45"
              strokeWidth="5"
              color="#787131"
              secondaryColor="#FB7E38"
              ariaLabel="revolving-dot-loading"
              wrapperClass="spinner"
            />
          </div>
        </form>
      );
    } else {
      return (
        <form onSubmit={onNextActivity}>
          <div className="activity">
            {error && (
              <div className="error-msg">Something went wrong: {error}</div>
            )}
            {data?.error && (
              <div className="error-msg">Sorry, {data?.error}</div>
            )}
            {error?.length === 0 &&
              data !== null &&
              data?.error === undefined && (
                <>
                  <h2>{data.activity}</h2>
                  <hr></hr>
                  <p className="row">
                    Type: {data.type === "busywork" ? "busy work" : data.type}
                  </p>
                  <p className="row">Paticipants: {data.participants}</p>
                  <p className="row">
                    Price: {data.price > 0 ? "Not Free" : "Free"}
                  </p>
                  <p className="row">
                    {data.link?.length !== 0 && (
                      <a href={data.link}>More info</a>
                    )}
                  </p>
                </>
              )}
            <button>Retry</button>
          </div>
        </form>
      );
    }
  }
};

export default Activity;
