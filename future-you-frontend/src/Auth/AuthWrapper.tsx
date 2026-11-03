import { useState } from "react";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
type Props = {
    onRegistered: (username:string) => void;
    onLogged: (username:string) => void;
}
export const AuthWrapper = ({onRegistered, onLogged}:Props) => {
    const [isLogin, setLogin] = useState(true);
    return (
        <div className="w-full min-h-screen bg-fy-bg flex items-center justify-center">
            <div className="relative w-full max-w-md">
                {/* Login Form */}
                <div
                    className={`transition-all duration-300 ${
                        isLogin ? 'opacity-100 relative' : 'opacity-0 pointer-events-none absolute'
                    }`}
                    style={{
                        transform: isLogin ? 'translateX(0)' : 'translateX(-50px)'
                    }}
                >
                    <Login onLogged={onLogged} onToggle={() => setLogin(false)} />
                </div>

                {/* Register Form */}
                <div
                    className={`transition-all duration-300 ${
                        !isLogin ? 'opacity-100 relative' : 'opacity-0 pointer-events-none absolute'
                    }`}
                    style={{
                        transform: !isLogin ? 'translateX(0)' : 'translateX(50px)'
                    }}
                >
                    <Register onRegistered={onRegistered} onToggle={() => setLogin(true)} />
                </div>
            </div>
        </div>
    );
}