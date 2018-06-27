import client from "src/config/ApolloClient";

class CacheManager {
  public login = () => {
    if (client && client.cache) {
      client.cache.writeData({
        data: { logged: true }
      });
    }
  };

  public logoff = () => {
    if (client && client.cache) {
      client.cache.writeData({
        data: { logged: false }
      });
    }
  };
}

export default new CacheManager();
