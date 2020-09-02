import React, {useState} from 'react'

const Persons = ({personList}) => {
    return (
        personList.map((p, i) => {
            return (<p key={i}>{`${p.name} ${p.number}`}</p>)
        }))
}

const Filter = ({search, searchItem}) => {
    return (
        <div>filter shown with <input onChange={search} value={searchItem}/></div>
    )
}

const PersonForm = ({setNewName, setNewNumber, newName, newNumber, addNote}) => {
    const muutaNimea = (event) => {
        setNewName(event.target.value)
    };

    const muutaNumeroa = (event) => {
        setNewNumber(event.target.value)
    };
    return (
        <form onSubmit={addNote}>
            <div>
                name: <input onChange={event => muutaNimea(event)} value={newName}/>
            </div>
            <div>
                number: <input onChange={event => muutaNumeroa(event)} value={newNumber}/>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
};

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas', number: '040-123456'},
        {name: 'Ada Lovelace', number: '39-44-5323523'},
        {name: 'Dan Abramov', number: '12-43-234345'},
        {name: 'Mary Poppendieck', number: '39-23-6423122'}
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')


    const addNote = (event) => {
        event.preventDefault()
        const henkilo = {
            name: newName,
            number: newNumber
        };
        persons.filter(p => p.name === henkilo.name).length === 0 ? setPersons(persons.concat([henkilo])) : window.alert(`${henkilo.name} allready added to phonebook`)
    }
    const [searchItem, setSearchItem] = useState("");

    const search = (event) => {
        setSearchItem(event.target.value)
    };

    const personList = persons.filter(p => p.name.includes(searchItem));


    return (
        <div>
            <h2>Phonebook</h2>
            <Filter search={search} searchItem={searchItem}/>
            <PersonForm setNewNumber={setNewNumber} setNewName={setNewName} newName={newName} newNumber={newNumber}
                        addNote={addNote}/>
            <h2>Numbers</h2>
            <Persons personList={personList}/>
        </div>
    )

}

export default App