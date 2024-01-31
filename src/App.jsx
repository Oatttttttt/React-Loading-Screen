import { useState, useEffect } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, [loading]);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {loading ? (
          <div>
            <PacmanLoader
              color="#36d7b7"
              loading={loading}
              size={50}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        ) : (
          <div>
            <h1>After 5 seconds</h1>
            <br />
            <button onClick={() => setLoading(true)}>
              {" "}
              Go to Loading page{" "}
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
