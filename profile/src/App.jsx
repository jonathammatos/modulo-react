import User from "./assets/profileUser.png";

import Card from "./components/Card";
function App() {
  return (
    <>
      <Card
        profileImg={User}
        name="John Doe"
        description="Full-StackJavascript Developer at acme Inc."
        phone="+5511987654321"
        email="john.doe@email.com"
      />
    </>
  );
}

export default App;
