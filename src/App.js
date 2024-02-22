import React, {useState} from 'react';

let persons = [
    {id: 1, name: 'Milana', lastName: 'Kurmanalieva'},
    {id: 2, name: 'Ahmad', lastName: 'Hamdamov'},
    {id: 3, name: 'Dastan', lastName: 'Murataliev'},
    {id: 4, name: 'Adelya', lastName: 'Kurmanalieva'},
    {id: 5, name: 'Andash', lastName: 'Kurmanaliev'},
    {id: 6, name: 'Domke', lastName: 'Olga'},
    {id: 7, name: 'Danisa', lastName: 'Radbekovna'},
    {id: 8, name: 'Luiza', lastName: 'Alieva'},
]

const App = () => {
    const [man, setMan] = useState(persons)
    return (
        <>
            <h1>My family</h1>
            <ul>
                {man.map(human => (
                    <li key={human.id}>{human.name} {human.lastName}
                        <button onClick={() => {
                            setMan(man.filter(a => a.id !== human.id))
                        }}>Удалить</button>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default App;

