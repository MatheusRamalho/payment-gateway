interface FormFieldErrorProps {
    message: string
}

export function FormFieldError({ message }: FormFieldErrorProps) {
    return (
        <small className="block w-full text-red-500 italic text-left text-xs">
            {message}
        </small>
    )
}
