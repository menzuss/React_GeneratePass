import "./styles.module.css"
import { RefreshCw } from "lucide-react"

type Props = React.ComponentProps<"button"> & {
    title: string
}
export function Button({ title, ...rest }: Props) {

    return (
        <button type="button" className="generate-btn" {...rest}>
            <RefreshCw size={20} style={{ marginRight: '8px' }} />
            {title}
        </button>
    )
}