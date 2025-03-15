import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx"; // Kullanıcı durumunu yöneten context

const LogoutButton = () => {
    const navigate = useNavigate();
    const { logout } = useAuth(); // Context'teki logout fonksiyonunu al

    const handleLogout = async () => {
        try {
            logout()
            navigate("/login"); // Giriş sayfasına yönlendir

        } catch (error) {
            console.error("Logout failed", error);
        }
    };

    return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
