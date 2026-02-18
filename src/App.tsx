function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Mathew Behnke</h1>
      <p style={styles.subtitle}>Software Engineer</p>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "system-ui, sans-serif",
    backgroundColor: "#f8f9fa",
  },
  title: {
    fontSize: "3rem",
    margin: 0,
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#666",
    marginTop: "0.5rem",
  },
};

export default App;
