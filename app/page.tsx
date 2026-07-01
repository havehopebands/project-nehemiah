export default function Home() {
  return (
    <main style={{
      height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  padding: "24px",
  fontFamily: "Bessita Handwriting Free, sans-serif",
  background: "linear-gradient(to bottom, #ffffff, #e5e7eb)",
  color: "#111827"
    }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>
        Hope In Each Moment
      </h1>

      <p style={{ fontSize: "1.3rem", maxWidth: "600px", marginBottom: "20px" }}>
        God is preparing something for you here.
      </p>

      <p style={{ maxWidth: "600px", opacity: 0.75 }}>
        We are prayerfully building a place where you can find Scripture,
        prayer, worship, encouragement, and guidance—one moment at a time.
      </p>

      <p style={{ marginTop: "40px", fontSize: "0.9rem", opacity: 0.5 }}>
        Project Nehemiah • Under Construction
      </p>
    </main>
  );
}