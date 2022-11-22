import React, {useState, useEffect} from "react";
import moment from 'moment';

export default function LanguageSelectionComponent(props) {

    const date = new Date()
    const m = moment()

    const [language, setLanguage] = useState("");

    const mappedLanguages = props.items.map((item) => {
        return <option value={item} key={item.id}>{item}</option>
    })

    function handleLanguageChange(e) {
        setLanguage(e.target.value)
    }

    
    useEffect(() => {
        const formatted = new Intl.DateTimeFormat(language, {
            timezone: {language},
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric', 
            minute: 'numeric',
            second: 'numeric'
        })

        console.log(formatted.format(date))
        console.log(date.toLocaleString(`${language}`, formatted))
            console.log(language)
    }, [language])

    // hard coded version, I tried my best to make a working version that can adapt to more languages being added (I am still trying to figure out how to get a different time based on language selected). 
    // useEffect(() => {
    //     if(language === "en-US") {
    //         console.log(`year: ${m.locale(`${language}`).year()} ` + ` month: ${m.locale(`${language}`).month() + 1} ` + ` day: ${m.locale(`${language}`).date()} ` + ` hour: ${m.locale(`${language}`).hours() - 12} ` + ` minute: ${m.locale(`${language}`).minute()} `)
    //     }
    //     else if (language === "en-GB") {
    //         console.log(`year: ${m.locale(`${language}`).year()} ` + ` month: ${m.locale(`${language}`).month() + 1} ` + ` day: ${m.locale(`${language}`).date()} ` + ` hour: ${m.locale(`${language}`).hours() - 7} ` + ` minute: ${m.locale(`${language}`).minute()} `)
    //     } 
    //     else if (language === "pt-BR") {
    //     console.log(`year: ${m.locale(`${language}`).year()} ` + ` month: ${m.locale(`${language}`).month() + 1} ` + ` day: ${m.locale(`${language}`).date()} ` + ` hour: ${m.locale(`${language}`).hours() - 10} ` + ` minute: ${m.locale(`${language}`).minute()} `)
    // }
    // }, [language])

    return (
        <div>
            <form>
                <label>Pick your language! </label>
                <select defaultValue="default" onChange={handleLanguageChange}>
                    <option value="default">choose an option</option>
                    {mappedLanguages} 
                </select>
            </form>
        </div>
    )
}
 

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