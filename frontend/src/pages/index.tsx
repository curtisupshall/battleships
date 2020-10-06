import React from 'react'

import Button from '../components/Button'
import TextField from '../components/TextField'

export default () => (
    <div>
        <h1>Hello world!</h1>
        <Button>Test</Button>
        <TextField
            value='Joey'
            onChange={null}
            label='Name'
        />
    </div>
)
