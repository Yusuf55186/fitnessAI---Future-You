import { useState } from "react";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
type Props = {
    onRegistered: (username:string,email:string) => void;
    onLogged: (username:string,email:string) => void;
}
export const AuthWrapper = ({onRegistered, onLogged}:Props) => {
    const [isLogin, setLogin] = useState(true);
    return (
        <div className="auth-layout bg-fy-bg">
            <div className="auth-forms">
                {/* Login Form */}
                <div
                    className={`transition-all duration-300 ${
                        isLogin ? 'auth-form-active' : 'auth-form-inactive'
                    }`}
                    style={{
                        transform: isLogin ? 'translateX(0)' : 'translateX(-50px)'
                    }}
                >
                    <Login onData={onLogged} onToggle={() => setLogin(false)} />
                </div>

                {/* Register Form */}
                <div
                    className={`transition-all duration-300 ${
                        !isLogin ? 'auth-form-active' : 'auth-form-inactive'
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