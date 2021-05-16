import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";
const App = () => {
  if (!localStorage.getItem("username")) return <LoginForm></LoginForm>;

  return (
    <ChatEngine
      height="100vh"
      projectID="a53d1fb9-621c-4e4c-8879-694015ed928f"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    ></ChatEngine>
  );
};
export default App;
