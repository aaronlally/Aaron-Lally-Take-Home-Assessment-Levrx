import React, {useState, useEffect} from "react";
import moment from 'moment';

export default function LanguageSelectionComponent(props) {


    const m = moment()
    
    const [language, setLanguage] = useState("");

    const mappedLanguages = props.items.map((item) => {
        return <option key={item.id}>{item}</option>
    })

    function handleLanguageChange(e) {
        setLanguage(e.target.value)
    }

    useEffect(() => {
        if(language === "en-US") {
            console.log(`year: ${m.locale(`${language}`).year()} ` + ` month: ${m.locale(`${language}`).month() + 1} ` + ` day: ${m.locale(`${language}`).date()} ` + ` hour: ${m.locale(`${language}`).hours() - 12} ` + ` minute: ${m.locale(`${language}`).minute()} `)
        }
        else if (language === "en-GB") {
            console.log(`year: ${m.locale(`${language}`).year()} ` + ` month: ${m.locale(`${language}`).month() + 1} ` + ` day: ${m.locale(`${language}`).date()} ` + ` hour: ${m.locale(`${language}`).hours() - 7} ` + ` minute: ${m.locale(`${language}`).minute()} `)
        } 
        else if (language === "pt-BR") {
        console.log(`year: ${m.locale(`${language}`).year()} ` + ` month: ${m.locale(`${language}`).month() + 1} ` + ` day: ${m.locale(`${language}`).date()} ` + ` hour: ${m.locale(`${language}`).hours() - 10} ` + ` minute: ${m.locale(`${language}`).minute()} `)
    }
    }, [language])

    return (
        <div>
            <form>
                <label>Pick your language! </label>
                <select onChange={handleLanguageChange}>
                    <option>Select One</option>
                    {mappedLanguages} 
                </select>
            </form>
        </div>
    )
}
 

/* -- hint --
new Intl.DateTimeFormat(lng, {
              year: 'numeric', month: 'numeric', day: 'numeric',

              hour: 'numeric', minute: 'numeric', second: 'numeric'
}).format(value).toString();

*/