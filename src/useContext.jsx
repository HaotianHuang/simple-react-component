import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom/client";

const UserContext = createContext();

export function ContextComponent1() {
  const [user, setUser] = useState("Jesse Context");
    const [age, setAge] = useState(30);
  return (
    <UserContext.Provider value={[user, age]}>
      <h1>{`Hello ${user}! of age ${age}`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );
}

function Component5() {
  const context = useContext(UserContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${context[0]} again! - you're now ${context[1] + 1}`}</h2>
    </>
  );
}