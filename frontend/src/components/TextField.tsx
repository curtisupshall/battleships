import React from 'react'


interface ITextFieldProps {
    id?: string
    label: string
    placeholder?: string
    value: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const TextField = (props: ITextFieldProps) => {
    const { id, value, onChange } = props

    return (
        <div className='textfield'>
            {props.label && (
                <label htmlFor={id ?? undefined}>{props.label}</label>
            )}
            <input
                id={id}
                type='text'
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default TextField
