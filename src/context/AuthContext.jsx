import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        try {
            const storedUser = localStorage.getItem("user");
            return storedUser ? JSON.parse(storedUser) : null;
        } catch (error) {
            console.error("Error parsing user from localStorage", error);
            return null;
        }
    });
    const [loading, setLoading] = useState(true)

    // 🚀 `user` her değiştiğinde `localStorage` otomatik olarak güncellenecek
    useEffect(() => {
        if (user) {
            localStorage.setItem("user", JSON.stringify(user)); // ✅ Kullanıcı bilgisi güncellendiğinde kaydet
        } else {
            localStorage.removeItem("user"); // Kullanıcı çıkış yaptığında temizle
        }
    }, [user]); // ⬅️ `user` her değiştiğinde çalışır

    useEffect(() => {
        const checkAuth = async () => {

          //  if (user) return; // Eğer `user` zaten varsa, tekrar istek atma ✅

            setLoading(true)
            try {
                const response = await fetch("/api/users/checkUser", {
                    method: "POST",
                    credentials: "include",
                });

                const data = await response.json();
                if (response.ok && data.user) {
                    setUser(data.user);

                } else {
                    setUser(null);
                }
                setLoading(false)
            } catch (error) {
                setUser(null);
            }
        };

        checkAuth();
    }, []); // 🔥 Sadece `user` boşsa API isteği yapıyor

    const logout = async () => {
        try {
            await fetch("/api/users/logout", {
                method: "POST",
                credentials: "include",
            });

            setUser(null); // 🚀 Kullanıcıyı temizle
        } catch (error) {
            console.error("Logout failed", error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, setUser, loading, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
