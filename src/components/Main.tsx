import "./Main.css";
import Contacts from "./main/Contacts";
import Education from "./main/Education";
import Form from "./main/Form";
import Hello from "./main/Hello";
import Skills from "./main/Skills";

export default function Main() {
  return (
    <>
      <div className="container">
        <main className="main">
          <Hello />
          <hr />
          <Skills />
          <hr />
          <Education />
          <hr />
          <Form />
          <hr />
          <Contacts />
          <hr />
        </main>
      </div>
    </>
  );
}
