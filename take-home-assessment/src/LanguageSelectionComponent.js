import React, {useState, useEffect} from "react";
import moment from 'moment-timezone';

export default function LanguageSelectionComponent(props) {

    const m = moment()
    // variable stores selected language from the drop-down onChange event
    const [language, setLanguage] = useState("en-US");
    const [location, setLocation] = useState("America/Adak")

    // map all props.items and create an option tag for each item. mappedLanguages is used in <select> to populate language options
    const mappedLanguages = props.items.map((item) => {
        return <option value={item} key={item.id}>{item}</option>
    })

    // sets the language variable to equal the value of the selected option
    function handleLanguageChange(e) {
        setLanguage(e.target.value)
    }


    useEffect(() => {
        // console.log(language)
        setLocation(new Intl.Locale(language).timeZones[0])
    }, [language])

    useEffect(() => {
        // console.log(location)
        console.log(m.tz(location).format().toString())
    }, [location])
   
    

    return (
        <div>
            <form>
                <label>Pick your language! </label>
                <select onChange={handleLanguageChange}>
                    {mappedLanguages} 
                </select>
            </form>
        </div>
    )
}

// still working on using intl date time format to correctly format this in the desired manner. 