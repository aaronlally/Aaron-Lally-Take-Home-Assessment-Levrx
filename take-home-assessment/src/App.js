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

// // console.log(`year: ${m.locale(`${language}`).year()} ` + ` month: ${m.locale(`${language}`).month() + 1} ` + ` day: ${m.locale(`${language}`).date()} ` + ` hour: ${m.locale(`${language}`).hours() - 12} ` + ` minute: ${m.locale(`${language}`).minute()} `)
// console.log(language)
// // console.log(` hour: ${m.utc(`${language}`).hours() - 12} `)
// // console.log(moment().utc(new Date(), m.locale(`${language}`).format("LLL")))
// console.log(moment().utc(`${language}`))