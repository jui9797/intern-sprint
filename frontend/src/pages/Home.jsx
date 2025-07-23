export default function Home({ message }) {
  return (
    <div style={{ padding: "20px", backgroundColor: "#f2f2f2" }}>
      <h1 style={{ color: "blue", fontSize: "28px" }}>Home Page</h1>
      <p style={{ color: "gray", fontStyle: "italic" }}>{message}</p>
    </div>
  );
}
