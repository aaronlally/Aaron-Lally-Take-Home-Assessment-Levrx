import React, {useState, useEffect} from "react";
import moment, { months } from 'moment';

export default function LanguageSelectionComponent(props) {

    const m = moment()
    const date = new Date()
    const dateFormat = {
    year: date.getFullYear(),
    month: date.getMonth(),
    day: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
   }
    const [language, setLanguage] = useState("");

    const mappedLanguages = props.items.map((item) => {
        return <option key={item.id}>{item}</option>
    })

    function handleLanguageChange(e) {
        setLanguage(e.target.value)
    }

    useEffect(() => {
        console.log(m.locale(`${language}`).month() + 1)
        console.log(language)
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
