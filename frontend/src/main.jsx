import React, { useEffect, useState, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar";

function App() {
  const [page, setPage] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`/api/page-data?route=${window.location.pathname}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch page data");
        return res.json();
      })
      .then((data) => setPage(data))
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!page)
    return (
      <div
        style={{
          padding: "20px",
          textAlign: "center",
          color: "#555",
          fontSize: "18px",
        }}
      >
        Loading...
      </div>
    );

  const PageComponent = React.lazy(() =>
    import(`./pages/${page.component}.jsx`)
  );

  return (
    <Suspense fallback={<div>Loading page...</div>}>
      <Navbar></Navbar>
      <PageComponent {...page.props} />
    </Suspense>
  );
}

createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
