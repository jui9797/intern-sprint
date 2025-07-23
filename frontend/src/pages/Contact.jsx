export default function Contact({ contacts }) {
  return (
    <div style={{ padding: "20px", backgroundColor: "#fff3e0" }}>
      <h1 style={{ color: "#e65100", fontSize: "26px" }}>Contact Page</h1>
      <ul style={{ paddingLeft: "20px", color: "#4e342e" }}>
        {contacts?.map((contact, idx) => (
          <li key={idx} style={{ marginBottom: "6px" }}>
            {contact}
          </li>
        ))}
      </ul>
    </div>
  );
}
