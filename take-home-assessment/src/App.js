import LanguageSelectionComponent from "./LanguageSelectionComponent"

function App() {
const items = ["en-US", "en-GB", "pt-BR"]

  return (
    <div className="App">
      <LanguageSelectionComponent items={items}/>
    </div>
  );
}

export default App;