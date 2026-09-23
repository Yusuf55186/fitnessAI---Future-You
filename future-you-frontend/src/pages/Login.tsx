import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/services";
import { Button } from "../components/ui/Button/Button";
type Props = {
    onToggle: () => void;
}
export const Login = ({ onToggle }: Props) => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState('');
    const navigate = useNavigate();
    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const fetchData = async () => {
            try{
                setLoading(true);
                const response = await loginUser(email,password)
                    localStorage.setItem('token',response.token);
                    navigate('/dashboard');
                }
                catch (err:any){
                    setError(err.message || 'Login failed');
                }
                finally {
                    setLoading(false);
                }
        }
fetchData()

        
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-fy-bg">
            <div className="bg-fy-surface gap-fy-4 p-fy-6 rounded-fy-lg flex flex-col border border-fy-border ">
                <h2 className="text-fy-text text-fy-2xl font-fy-bold text-center ">Login</h2>
                {error && <p className="text-fy-danger">{error}</p>}
                <form className="flex flex-col gap-fy-4" onSubmit={handleLogin}>
                    <div>
                        <label htmlFor="email" className="text-fy-sm text-fy-text">Email</label>
                        <input type="email" id="email" name="email" value={email} required onChange={(e) => setEmail(e.target.value)}  className="text-fy-sm text-fy-text w-full px-fy-3 py-fy-2 mt-fy-1 border border-fy-border bg-fy-surface rounded-fy-md focus:outline-none focus:ring-fy-accent" />
                    </div>
                    <div>
                        <label htmlFor="password"  className="text-fy-sm text-fy-text">Password</label>
                        <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} name="password" value={password} required className="text-fy-sm text-fy-text w-full px-fy-3 py-fy-2 mt-fy-1 border border-fy-border bg-fy-surface rounded-fy-md focus:outline-none focus:ring-fy-accent" />
                    </div>
                    <div>
                        
                        <Button variant="primary" type="submit" className="w-full mt-fy-4 ">
                            Login
                        </Button>
                        <Button variant="ghost" type="button" onClick={onToggle} className="w-full mt-fy-2">
                            Create Account
                            
                        </Button>
                        <div>{loading && <div className="text-fy-text-center">Loading...</div>}</div>
                    </div>
                </form>
            </div>
        </div>
    );
}