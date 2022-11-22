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


// useEffect(() => {
//   const formatted = new Intl.DateTimeFormat(language, {
//       timezone: {language},
//       year: 'numeric',
//       month: 'numeric',
//       day: 'numeric',
//       hour: 'numeric', 
//       minute: 'numeric',
//       second: 'numeric'
//   })

//   console.log(formatted.format(date))
//   console.log(date.toLocaleString(`${language}`, formatted))
//       console.log(language)
// }, [language])

// new Intl.DateTimeFormat(language, {
//               year: 'numeric', month: 'numeric', day: 'numeric',

//               hour: 'numeric', minute: 'numeric', second: 'numeric'
// }).format(value).toString();
// console.log(m.locale(`${language}`).format("YYYY MMM Mo D hh mm ss"))
// 

// I can easily hard-code this solution but cannot seem to make a version which can adapt to an increase in language inputs. 
// tried finding the utc offset based on language, only get local offset, never another timezone. 
// no resources on the internet about finding a timezone based on language
// which timezone do I pick for each country? 
// Moment only seems to grab the local date and time regardless of input. 

// useEffect(() => {
//   if(language === "en-US") {
//       console.log(`year: ${m.locale(`${language}`).year()} ` + ` month: ${m.locale(`${language}`).month() + 1} ` + ` day: ${m.locale(`${language}`).date()} ` + ` hour: ${m.locale(`${language}`).hours() - 12} ` + ` minute: ${m.locale(`${language}`).minute()} `)
//   }
//   else if (language === "en-GB") {
//       console.log(`year: ${m.locale(`${language}`).year()} ` + ` month: ${m.locale(`${language}`).month() + 1} ` + ` day: ${m.locale(`${language}`).date()} ` + ` hour: ${m.locale(`${language}`).hours() - 7} ` + ` minute: ${m.locale(`${language}`).minute()} `)
//   } 
//   else if (language === "pt-BR") {
//   console.log(`year: ${m.locale(`${language}`).year()} ` + ` month: ${m.locale(`${language}`).month() + 1} ` + ` day: ${m.locale(`${language}`).date()} ` + ` hour: ${m.locale(`${language}`).hours() - 10} ` + ` minute: ${m.locale(`${language}`).minute()} `)
// }
// }, [language])

   // hard coded version, Still working on making a version which can adadpt to more language selection options. (changes time does not change format based on language)

    // if variable language !== en-US, offset est to specific timezone
    // useEffect(() => {
    //       if(language === "en-US") {
    //           console.log(`year: ${m.locale(`${language}`).year()} ` + ` month: ${m.locale(`${language}`).month() + 1} ` + ` day: ${m.locale(`${language}`).date()} ` + ` hour: ${m.locale(`${language}`).hours() - 12} ` + ` minute: ${m.locale(`${language}`).minute()} `)
    //       }
    //       else if (language === "en-GB") {
    //           console.log(`year: ${m.locale(`${language}`).year()} ` + ` month: ${m.locale(`${language}`).month() + 1} ` + ` day: ${m.locale(`${language}`).date()} ` + ` hour: ${m.locale(`${language}`).hours() - 7} ` + ` minute: ${m.locale(`${language}`).minute()} `)
    //       } 
    //       else if (language === "pt-BR") {
    //       console.log(`year: ${m.locale(`${language}`).year()} ` + ` month: ${m.locale(`${language}`).month() + 1} ` + ` day: ${m.locale(`${language}`).date()} ` + ` hour: ${m.locale(`${language}`).hours() - 10} ` + ` minute: ${m.locale(`${language}`).minute()} `)
    //     }
    //     }, [language])

     // comment out the above useEffect and uncomment the below useEffect to display dates in selected languages format (does not change the time)
    // useEffect(() => {
    //     const formatted = new Intl.DateTimeFormat(language, {
    //         year: 'numeric',
    //         month: 'numeric',
    //         day: 'numeric',
    //         hour: 'numeric', 
    //         minute: 'numeric',
    //         second: 'numeric'
    //     })
    //     console.log(formatted.format(m).toString())
    // }, [language])

    // useEffect(() => {
      // setLocation(new Intl.Locale(language).timeZones[0])
      // console.log(location)
      // console.log(m.tz(location).format())
      // const formatted = new Intl.DateTimeFormat(language, {
      //     year: 'numeric', month: 'numeric', day: 'numeric',

      //     hour: 'numeric', minute: 'numeric', second: 'numeric'
      // }).format();
      // console.log(formatted)
      // console.log(m.tz(location).format().toString())
      // // console.log(location.parse(Date.UTC()))
  // }, [language])