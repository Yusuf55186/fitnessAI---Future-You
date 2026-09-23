import { useState} from 'react';
import { registerUser } from '../api/services';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button/Button';
type Props = {
    onToggle: () => void;
}
export const Register = ({ onToggle }:Props) => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');
    const [loading,setLoading] = useState(false);
    const [passwordConfirm,setPasswordConfirm] = useState('');
    const navigate = useNavigate();
    const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const fetchData = async () => {
            try {
                setLoading(true);
                setError('');
                 const response = await registerUser(name,email,password,passwordConfirm);
                 localStorage.setItem('token',response.token);
                navigate('/dashboard');
            }
            catch (err:any) {
                    setError(err.message || 'Registration failed');
            }
            finally {
                setLoading(false);
            }


            
            
        }
        fetchData();
    }
    
    return (
        
        <div className="flex items-center justify-center min-h-screen bg-fy-bg">
            
            <div className="bg-fy-surface gap-fy-4 p-fy-6 rounded-fy-lg flex flex-col border border-fy-border ">
                <h2 className="text-fy-text text-fy-2xl font-fy-bold text-center ">Register</h2>
                                  {error && <p className="text-fy-danger">{error}</p>}

                <form className="flex flex-col gap-fy-4" onSubmit={handleRegister}>
                <div>
                    <label htmlFor="name" className="text-fy-text text-fy-sm " >Name</label>
                    <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required className="text-fy-sm text-fy-text w-full px-fy-3 py-fy-2 mt-fy-1 border border-fy-border bg-fy-surface rounded-fy-md focus:outline-none focus:ring-fy-accent" />
                </div>
                <div>
                    <label htmlFor="email" className="text-fy-text text-fy-sm">Email</label>
                    <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="text-fy-sm text-fy-text w-full px-fy-3 py-fy-2 mt-fy-1 border border-fy-border bg-fy-surface rounded-fy-md focus:outline-none focus:ring-fy-accent" />
                </div>
                <div>
                    <label htmlFor="password" className="text-fy-text text-fy-sm">Password</label>
                    <input type="password" id="password" name="password" value={password} onChange={(e)  => setPassword(e.target.value)} required className="text-fy-sm text-fy-text w-full px-fy-3 py-fy-2 mt-fy-1 border border-fy-border bg-fy-surface rounded-fy-md focus:outline-none focus:ring-fy-accent" />
                </div>
                <div>
                    <label htmlFor="passwordConfirm" className="text-fy-text text-fy-sm">Confirm Password</label>
                    <input type="password" id="passwordConfirm" name="passwordConfirm" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} required className="text-fy-sm text-fy-text w-full px-fy-3 py-fy-2 mt-fy-1 border border-fy-border bg-fy-surface rounded-fy-md focus:outline-none focus:ring-fy-accent" />
                </div>
                <Button variant="primary" type="submit" className="w-full mt-fy-4">
                    Register
                </Button>
                <Button variant="ghost" type="button" onClick={(onToggle)} className="w-full mt-fy-2">
                    Already have an account? Login
                </Button>
                {loading && <div className="text-fy-text-center">Loading...</div>}
            </form>
        </div>
        </div>
    );
}  