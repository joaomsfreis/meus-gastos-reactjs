import React from 'react'

export default props =>
    <React.Fragment>
        <label htmlFor="value">Digite o {props.name}</label>
        <input type={props.type} step=".01" name="value" onChange={e => props.setData(e.target.value)} />
    </React.Fragment>