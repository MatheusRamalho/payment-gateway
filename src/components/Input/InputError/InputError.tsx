interface InputErrorProps {
    message: string
}

export function InputError({ message }: InputErrorProps) {
    return (
        <small className="block w-full text-red-500 italic text-left text-xs">
            {message}
        </small>
    )
}
