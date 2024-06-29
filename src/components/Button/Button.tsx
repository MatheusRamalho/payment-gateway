import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode
}

export function Button({ children, ...props }: ButtonProps) {
    return (
        <button
            {...props}
            className="cursor-pointer flex items-center justify-center gap-2 w-full py-5 px-12 rounded-md border font-bold no-underline text-white border-primary-500 bg-primary-500 hover:bg-primary-700 uppercase transition-colors duration-700 ease-in-out shadow-[0_1px_2px_rgba(16,24,40,.05)] disabled:cursor-not-allowed disabled:opacity-70"
        >
            {children}
        </button>
    )
}
