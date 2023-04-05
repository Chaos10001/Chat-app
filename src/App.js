import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./component/ChatFeed";
import LoginForm from "./component/LoginForm";

function App() {
  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID="ae36d0e8-addd-444c-b6a3-c148f9ba3aff"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() =>
        new Audio(
          "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
        ).play()
      }
    />
  );
}
export default App;
