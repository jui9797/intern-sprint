export default function About({ user }) {
  const safeUser = user || { name: "Unknown", role: "Unknown" };
  return (
    <div style={{ padding: "20px", backgroundColor: "#e0f7fa" }}>
      <h1 style={{ color: "#00796b", fontSize: "26px" }}>About Page</h1>
      <p style={{ color: "#004d40", marginBottom: "8px" }}>
        Name: {safeUser?.name}
      </p>
      <p style={{ color: "#004d40" }}>Role: {safeUser?.role}</p>
    </div>
  );
}
