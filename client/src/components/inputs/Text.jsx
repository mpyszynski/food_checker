import React from 'react'
import { Input } from 'semantic-ui-react'

export default function Search({placeholder, name, value, onChange}) {
    return (
        <Input focus placeholder={placeholder} name={name} value={value} onChange={onChange}/>
    )
}
