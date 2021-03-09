import "./App.css";
import Question from "./Questions";

const App = () => {
  return (
    <div className="container ">
      <aside>
        <h1>Questions And Answeres about our product</h1>
      </aside>
      <main>
        <Question question={""} answere={""} />

        <div className="card">
          <div className="question flex">
            <h3>What is you email Address</h3>
            <i class="fas fa-plus"></i>
          </div>
          <div className="answere">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Praesentium veniam sed magni autem repudiandae cupiditate eius
              corporis voluptatum rem ipsum provident porro totam in odit
              accusamus, eum dolorum dolore quae.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
