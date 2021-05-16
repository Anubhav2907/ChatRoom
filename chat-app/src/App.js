import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./components/ChatFeed";
const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="a53d1fb9-621c-4e4c-8879-694015ed928f"
      userName="Admin"
      userSecret="admin"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    ></ChatEngine>
  );
};
export default App;
