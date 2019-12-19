import React, { useState } from 'react'
import Input from './Input'

export default function Form() {
    const [value, setValue] = useState('')
    const [date, setDate] = useState('')
    const [type, setType] = useState('')
    const [transClass, setTransClass] = useState('')
    const [description, setDescription] = useState('')

    /* save() {
        //const user = {value, date}
        /*const url = 'http://localhost:3002/transfers'
        axios['post'](url, user).then(resp => {
            const list = this.getUpdatedList(resp.data)
            this.setState({ user: initialState.user, list })
        })
    } */

    

    return(
        <React.Fragment>
            <Input name="tipo" type="text" setData={setValue}/>
            <Input name="data" type="date" setData={setDate}/>
            <Input name="tipo" type="text" setData={setType}/>
            <Input name="classe" type="text" setData={setTransClass}/>
            <Input name="descrição" type="text" setData={setDescription}/>
            <button onClick={() => console.log(value)}>oi</button>
        </React.Fragment>
    )
}