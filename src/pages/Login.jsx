import React, { useEffect, useState } from 'react'
import LoginForm from '../components/LoginForm';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
    const [email, setMail] = useState('');
    const [password, setPassword] = useState('');
    const { user, setUser, loading } = useAuth(); // AuthContext'ten user ve loading'i al
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        if (user) {
            navigate('/admin');
            return
        }
        e.preventDefault();

        const response = await fetch('/api/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password }),
            credentials: "include", // Kullanıcıyı session veya cookie ile hatırlamak için
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data._id)
            const storedUser = localStorage.getItem("user");
            console.log(storedUser)
            setUser(data._id)
            toast.success('Giriş Başarılı!');
        } else {
            toast.error('Giriş Başarısız!');
        }
    };

    useEffect(() => {
        if (user && !loading) {
            navigate('/admin');
        }
    }, [user, loading, navigate]); // 🔥 `user`'i de ekledik ki değişiklik olunca çalışsın

    return (
        <div className='flex justify-center items-center h-screen'>
            <LoginForm handleSubmit={handleSubmit} setMail={setMail} setPassword={setPassword} />
        </div>
    );
}

export default Login;
