import client from "src/config/ApolloClient";

class CacheManager {
  public setLogged = (
    fbAccessToken: string,
    fbUserId: string,
    fbUserName: string
  ) => {
    if (client && client.cache) {
      client.cache.writeData({
        data: { logged: true }
      });
    }
  };

  public unsetLogged = () => {
    if (client && client.cache) {
      client.cache.writeData({
        data: { logged: false }
      });
    }
  };
}

export default new CacheManager();
