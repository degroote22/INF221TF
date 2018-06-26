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

  public removeUid = () => {
    localStorage.removeItem("uid");
  };
  public setUid = (uid: string) => {
    localStorage.setItem("uid", uid);
  };

  public getUid = () => {
    try {
      return localStorage.getItem("uid") || "";
    } catch {
      return "";
    }
  };

  public removeUsername = () => {
    localStorage.removeItem("username");
  };
  public setUsername = (username: string) => {
    localStorage.setItem("username", username);
  };

  public getUsername = () => {
    try {
      return localStorage.getItem("username") || "";
    } catch {
      return "";
    }
  };
}

export default new LocalStorageManager();
