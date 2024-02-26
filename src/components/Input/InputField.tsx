import { InputHTMLAttributes } from 'react'

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string
    customClass?: string
    IsError?: boolean
}

export const InputField = ({
    id,
    customClass,
    IsError = false,
    ...rest
}: InputFieldProps) => {
    return (
        <input
            id={id}
            className={`
                outline-none text-center w-full h-16 px-4 rounded-lg border-2 border-gray-50 text-gray-700
                focus:border-primary-500 focus:bg-primary-500/20
                active:border-primary-500 active:bg-primary-500/20
                disabled:border-gray-300 disabled:bg-zinc-200 disabled:text-zinc-600 disabled:cursor-not-allowed
                ${IsError && 'border-red-500 bg-red-500/20'}
                ${customClass}
            `}
            {...rest}
        />
    )
}
