import { useEffect, useRef, useState } from "react";
import "./App.css";
import { getDatabase, push, ref, set, onChildAdded } from "firebase/database";
import Login from "./components/Login";

function App() {
  const [user, setUser] = useState("");
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [chats, setChats] = useState([]);
  const temp = useRef(null);
  const db = getDatabase();
  const chatListRef = ref(db, "chats");
  // let a = document.getElementById("t");

  function scrollHandle() {
    let a = document.getElementById("t");

    if (a) {
      console.log(a);
      console.log(a.scrollHeight);
      a.scrollTop = a.scrollHeight;
    }
  }

  useEffect(() => {
    onChildAdded(chatListRef, (data) => {
      setChats((chats) => [...chats, data.val()]);
    });
    scrollHandle();
  }, []);

  useEffect(() => {
    console.log("rander");
    scrollHandle();
  }, [chats][temp.current]);

  function test(e) {
    e.preventDefault();
    if (name != "") {
      setUser(name);
      console.log(user);
    }
  }
  function sendMsg(e) {
    e.preventDefault();
    if (msg != "") {
      const chatRef = push(chatListRef);
      set(chatRef, {
        name: user,
        msg,
      });
      setMsg("");
    }
  }
  return (
    <>
      {user ? null : <Login name={name} setName={setName} test={test} />}

      {user ? (
        <div>
          <div className="user-name">
            <h1
              style={{
                marginLeft: "10px",
                fontStyle: "oblique",
                fontFamily: "monospace",
                fontWeight: "bolder",
                color: "white",
              }}
            >
              User:{user}
            </h1>
          </div>
          <div className="chat-room" id="t" ref={temp}>
            {chats.map((d, i) => (
              <div key={i} className={`msg-box${d.name == user ? "-me" : ""}`}>
                <p>
                  <strong style={{ display: "inline-block" }}>{d.name}:</strong>
                  <span
                    style={{
                      display: "inline-block",
                      fontSize: "small",
                      fontWeight: "bolder",
                    }}
                  >
                    {d.msg}
                  </span>
                </p>
              </div>
            ))}
          </div>
          <div className="msg-container">
            <form
              action=""
              onSubmit={(e) => sendMsg(e)}
              style={{ width: "100vw" }}
            >
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  value={msg}
                  aria-label="Dollar amount (with dot and two decimal places)"
                  style={{
                    backgroundColor: "black",
                    border: "none",
                    color: "white",
                  }}
                  onInput={(e) => setMsg(e.target.value)}
                  placeholder="Enter massage here"
                />
                <button
                  className="btn btn-success"
                  type="submit"
                  style={{ paddingLeft: "12px", paddingRight: "12px" }}
                >
                  <i class="fa-solid fa-paper-plane"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default App;
