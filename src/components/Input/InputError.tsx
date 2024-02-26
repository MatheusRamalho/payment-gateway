interface InputErrorProps {
    message: string
}

export const InputError = ({ message }: InputErrorProps) => {
    return (
        <small className="block w-full text-red-500 italic text-left text-xs">
            {message}
        </small>
    )
}
