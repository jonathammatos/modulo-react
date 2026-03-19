import UserInfo from "./components/UserInfo";
import UserContext from "./contexts/UserContext";

function App() {
  const user = {
    name: "João",
    email: "joao@email.com",
  };

  return (
    <>
      <UserContext.Provider value={user}>
        <h1>Usando Contexto</h1>
        <UserInfo />
      </UserContext.Provider>
    </>
  );
}

export default App;
