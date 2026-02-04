
import "./App.css"
import { useState, useEffect } from "react"
import { Header } from "./components/Header"
import { Input } from "./components/Input"
import { Button } from "./components/Button"
import { StrengthPass } from "./components/StrengthPass"
import { Toast } from "./components/Toast"
import { ShowPass } from "./components/ShowPass"
import { PasswordLengthSlider } from "./components/PasswordLengthSlider"
import { type PasswordOptions } from "./utils/types"
export default function App() {
    const [password, setPassword] = useState<string>('');
    const [length, setLength] = useState<number>(16);
    const [options, setOptions] = useState<PasswordOptions>({
        uppercase: true,
        lowercase: true,
        numbers: true,
        symbols: true
    });
    const [toast, setToast] = useState<{ show: boolean; message: string }>({
        show: false,
        message: ''
    });

    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    const generatePassword = (): void => {
        let charset = '';

        if (options.uppercase) charset += uppercase;
        if (options.lowercase) charset += lowercase;
        if (options.numbers) charset += numbers;
        if (options.symbols) charset += symbols;

        if (charset === '') {
            showToast('Selecione pelo menos uma opção!');
            return;
        }

        let newPassword = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            newPassword += charset[randomIndex];
        }

        setPassword(newPassword);
    };

    const copyToClipboard = (): void => {
        if (!password) {
            showToast('Gere uma senha primeiro!');
            return;
        }

        navigator.clipboard.writeText(password).then(() => {
            showToast('Senha copiada!');
        }).catch(() => {
            showToast('Erro ao copiar');
        });
    };

    const showToast = (message: string): void => {
        setToast({ show: true, message });
        setTimeout(() => {
            setToast({ show: false, message: '' });
        }, 2000);
    };

    const updateOption = (key: keyof PasswordOptions, value: boolean): void => {
        setOptions(prev => ({ ...prev, [key]: value }));
    };

    useEffect(() => {
        generatePassword();
    }, []);


    return (
        <div className="app">
            <div className="container">
                <div className="card">
                    <Header />
                    <ShowPass password={password} onCopy={copyToClipboard} />

                    <StrengthPass password={password} />

                    <div className="controls">
                        <PasswordLengthSlider value={length} onChange={setLength} />

                        <div className="control-group">
                            <div className="checkbox-group">
                                <Input
                                    id="uppercase"
                                    label="Letras Maiúsculas (A-Z)"
                                    checked={options.uppercase}
                                    onChange={(checked) => updateOption('uppercase', checked)}

                                />
                                <Input
                                    id="lowercase"
                                    label="Letras Minúsculas (a-z)"
                                    checked={options.lowercase}
                                    onChange={(checked) => updateOption('lowercase', checked)}
                                />
                                <Input
                                    id="numbers"
                                    label="Números (0-9)"
                                    checked={options.numbers}
                                    onChange={(checked) => updateOption('numbers', checked)}
                                />
                                <Input
                                    id="symbols"
                                    label="Símbolos (!@#$%^&*)"
                                    checked={options.symbols}
                                    onChange={(checked) => updateOption('symbols', checked)}
                                />
                            </div>
                        </div>
                    </div>

                    <Button title="Gerar nova senha" onClick={generatePassword} />


                </div>
            </div>

            <Toast message={toast.message} show={toast.show} />
        </div>
    )
}