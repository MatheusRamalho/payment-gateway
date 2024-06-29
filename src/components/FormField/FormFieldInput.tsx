import { InputHTMLAttributes } from 'react'

interface FormFieldInputProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string
    IsError?: boolean
}

export function FormFieldInput({
    id,
    IsError = false,
    ...rest
}: FormFieldInputProps) {
    return (
        <input
            id={id}
            className={`
                outline-none text-center w-full h-16 px-4 rounded-lg border-2 border-secondary-200 text-secondary-600
                focus:border-primary-500 focus:bg-primary-500/20
                active:border-primary-500 active:bg-primary-500/20
                disabled:border-secondary-100 disabled:bg-secondary-200 disabled:text-secondary-500 disabled:cursor-not-allowed
                ${IsError && 'border-red-500 bg-red-500/20'}
            `}
            {...rest}
        />
    )
}
