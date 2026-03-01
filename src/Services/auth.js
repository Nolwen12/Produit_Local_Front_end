export const getUserRole = () => {
  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    const roles = payload.user?.roles;
    
    if (roles && Array.isArray(roles)) {
      if (roles.includes("ROLE_ADMIN")) return "ADMIN";
      if (roles.includes("ROLE_USER")) return "USER";
    }
    return null;
  } catch (error) {
    console.error("JWT parsing error:", error);
    return null;
  }
};