// PasswordLengthSlider.tsx

type PasswordLengthSliderProps = {
    value: number;
    onChange: (value: number) => void;
};

export function PasswordLengthSlider({ value, onChange }: PasswordLengthSliderProps) {
    return (
        <div className="control-group">
            <div className="control-label">
                <span>Comprimento</span>
                <span className="length-value">{value}</span>
            </div>
            <input
                type="range"
                min="8"
                max="32"
                value={value}
                onChange={(e) => onChange(parseInt(e.target.value))}
                className="slider"
            />
        </div>
    );
};
