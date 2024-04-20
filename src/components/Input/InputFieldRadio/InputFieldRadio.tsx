import { InputHTMLAttributes } from 'react'

interface InputFieldRadioProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string
    IsError?: boolean
    label: string
}

export function InputFieldRadio({
    label,
    id,
    IsError = false,
    ...rest
}: InputFieldRadioProps) {
    return (
        <label className="w-full flex items-center justify-start gap-2 my-1">
            <input
                id={id}
                className={`
                outline-none size-8 border-2 border-gray-50
                focus:border-primary-500 focus:bg-primary-500/20
                active:border-primary-500 active:bg-primary-500/20
                disabled:border-gray-300 disabled:bg-zinc-200 disabled:text-zinc-600 disabled:cursor-not-allowed
                ${IsError && 'border-red-500 bg-red-500/20'}
            `}
                {...rest}
            />

            <span className="font-normal text-gray-500 text-lg leading-10">
                {label}
            </span>
        </label>
    )
}
