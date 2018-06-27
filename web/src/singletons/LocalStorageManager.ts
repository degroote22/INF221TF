class LocalStorageManager {
  public removeToken = () => {
    localStorage.removeItem("token");
  };
  public setToken = (token: string) => {
    localStorage.setItem("token", token);
  };

  public getToken = () => {
    try {
      return localStorage.getItem("token") || "";
    } catch {
      return "";
    }
  };
}

export default new LocalStorageManager();
