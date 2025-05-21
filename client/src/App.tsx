import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createORPCClient } from "@orpc/client";
import { RPCLink } from "@orpc/client/fetch";
import type { RouterClient } from "@orpc/server";
import type { AppRouter } from "../../router";

const link = new RPCLink({
  url: "http://127.0.0.1:3000", // Use 127.0.0.1 instead of localhost
  headers: () => ({
    authorization: "Bearer token",
    "Content-Type": "application/json",
  }),
});

// Create a client for your router
const client: RouterClient<AppRouter> = createORPCClient(link);

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const getPlanet = async () => {
      const planet = await client.planet.find({ id: 1 })

      console.log('planet', planet)
    };

    getPlanet();
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
