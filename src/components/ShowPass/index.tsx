// PasswordDisplay.tsx
import { Copy } from 'lucide-react';
import './styles.module.css'
type PasswordDisplayProps = {
    password: string;
    onCopy: () => void;
};

export function ShowPass({ password, onCopy }: PasswordDisplayProps) {
    return (
        <div className="password-display">
            <div className="password-box">
                {password || 'Clique para gerar uma senha'}
            </div>
            <button className="copy-btn" onClick={onCopy} title="Copiar senha">
                <Copy size={20} />
            </button>
        </div>
    );
};
