import React, {useState} from 'react';

const Object = () => {
    const [persons, setPersons]  =useState( {
        fullName: 'Ahmad',
        lastName: 'Hamdamov',
        age: 20,
        date: '20.12.2003',
        email: 'email@gmail.com'
    })
    const HandleChangeName = (e) => {
        setPersons({
            ...persons,
            fullName: e.target.value
        })
    }
    const HandleChangeLastName= (e) => {
        setPersons({
            ...persons,
            lastName: e.target.value
        })
    }
    const HandleChangeAge = (e) => {
        setPersons({
            ...persons,
            age: Number(e.target.value)
        })
    }
    const HandleChangeDate = (e) => {
        setPersons({
            ...persons,
            date: e.target.value
        })
    }
    const HandleChangeEmail = (e) => {
        setPersons({
            ...persons,
            email: e.target.value
        })
    }
    return (
        <div className='inputs'>
            <input type="text" onChange={HandleChangeName} placeholder={persons.fullName}/>
            <input type="text" onChange={HandleChangeLastName} placeholder={persons.lastName}/>
            <input type="number" onChange={HandleChangeAge} placeholder={persons.age}/>
            <input type="text" onChange={HandleChangeDate} placeholder={persons.date}/>
            <input type="email" onChange={HandleChangeEmail} placeholder={persons.email}/>
            <div className="paragraph">
                <p>{persons.fullName}__</p>
                <p>{persons.lastName}__</p>
                <p>{persons.age}__</p>
                <p>{persons.date}__</p>
                <p>{persons.email}</p>
            </div>
        </div>
    );
};

export default Object;