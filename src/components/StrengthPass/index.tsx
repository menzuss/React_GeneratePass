// StrengthMeter.tsx

import { type StrengthResult } from '../../utils/types';

type StrengthMeterProps = {
    password: string;
};

export function StrengthPass({ password }: StrengthMeterProps) {
    const calculateStrength = (pwd: string): StrengthResult => {
        if (!pwd) return { strength: 0, label: '-', color: '#8b92b8' };

        let strength = 0;
        const length = pwd.length;

        if (length >= 8) strength += 20;
        if (length >= 12) strength += 20;
        if (length >= 16) strength += 10;

        if (/[a-z]/.test(pwd)) strength += 10;
        if (/[A-Z]/.test(pwd)) strength += 10;
        if (/[0-9]/.test(pwd)) strength += 15;
        if (/[^a-zA-Z0-9]/.test(pwd)) strength += 15;

        let label: string;
        let color: string;

        if (strength < 40) {
            label = 'Fraca';
            color = '#ff4757';
        } else if (strength < 70) {
            label = 'Média';
            color = '#ffa502';
        } else {
            label = 'Forte';
            color = '#00ff88';
        }

        return { strength, label, color };
    };

    const { strength, label, color } = calculateStrength(password);

    return (
        <div className="strength-meter">
            <div className="strength-label">
                <span>Força da Senha</span>
                <span className="strength-text" style={{ color }}>{label}</span>
            </div>
            <div className="strength-bar">
                <div
                    className="strength-fill"
                    style={{ width: `${strength}%` }}
                />
            </div>
        </div>
    );
};
