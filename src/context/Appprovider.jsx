import { createContext, useContext } from "react";
import GetAcessToken from "../hooks/GetAccessToken";

const AppContext = createContext();

function ContextProvider({ children }) {
  const token = GetAcessToken();

  async function loader() {
    try {
      const res = await fetch(
        " https://api.spotify.com/v1/search?q=genre:afrobeat&type=track",
        {
          method: "GET",
          headers: { Authorization: `Bearer ${token} ` },
        }
      );
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
      console.log("something went wrong");
    }
  }

  return (
    <AppContext.Provider value={{ loader }}>{children}</AppContext.Provider>
  );
}

export default ContextProvider;

export function UseContextState() {
  const context = useContext(AppContext);
  if (context === undefined)
    throw new Error(
      "You are trying to access context provider outside the context"
    );
  return context;
}
