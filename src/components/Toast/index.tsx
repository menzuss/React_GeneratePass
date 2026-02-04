type Toastprops = {
    message: string
    show: boolean
}

export function Toast({ message, show }: Toastprops) {
    return (
        <div className={`toast ${show ? 'show' : ''}`}>
            {message}
        </div>
    )
}