import './styles.module.css'
type Props = {
    label?: string;
    id: string;
    type?: "text" | "checkbox";
    checked?: boolean;
    onChange?: (checked: boolean) => void;
}

export function Input({ label, id, type = "checkbox", checked, onChange }: Props) {
    return (
        <div>
            <label htmlFor={id} className=".checkbox-label">
                <div>
                    <input
                        id={id}
                        type={type}
                        checked={checked}
                        onChange={(e) => onChange?.(e.target.checked)}
                    />
                </div>
                {label && <span>{label}</span>}
            </label>
        </div>
    )
}