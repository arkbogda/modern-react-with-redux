function App() {
    const date = new Date();
    const time = date.toLocaleTimeString();
  
    return <h1>{time}</h1>;
}

export default App;