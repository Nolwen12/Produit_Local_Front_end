import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log("Réponse du serveur:", data);
      console.log("Status:", response.status);

      if (!response.ok) {
        setError(data.message || "Erreur du login");
        return;
      }

      // Sauvegarde du token
      localStorage.setItem("token", data.token);

      // Décodage du token
      const payload = JSON.parse(atob(data.token.split(".")[1]));
      console.log("Payload JWT:", payload);

      const roles = payload.user?.roles || [];

      // PRIORITÉ: si admin, admin; sinon user
      if (roles.includes("ROLE_ADMIN")) {
        navigate("/admin");
      } else if (roles.includes("ROLE_USER")) {
        navigate("/");
      } else {
        navigate("/login");
      }
    } catch (err) {
      console.error("Erreur login:", err);
      setError("Erreur réseau ou serveur");
    }
  };

  return (
    <div>
      <h2>Connexion</h2>
      <form onSubmit={login}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Se connecter</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
};

export default Login;