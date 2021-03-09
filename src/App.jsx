import "./App.css";
import Question from "./Questions";

const App = () => {
  return (
    <div className="container ">
      <aside>
        <h1>Some Random Questions And Answeres</h1>
      </aside>
      <main>
        <Question
          question={"What is socialism?"}
          answere={
            "private ownership or control of property and natural resources. According to the socialist view, individuals do not live or work in isolation but live in cooperation with one another. Furthermore, everything that people produce is in some sense a social product, and everyone who contributes to the production of a good is entitled to a share in it. "
          }
        />
        <Question
          question={"How do we observe stars?"}
          answere={
            "Optical telescopes later became the instruments of choice for observing distant stars. Refracting telescopes used two lenses, with the front lenses bending or refracting light, and an eyepiece for magnification"
          }
        />
        <Question
          question={"what are the risk in mutual fund?"}
          answere={
            "The risk that you will lose some or all of your principal. As markets fluctuate, there is always a possibility that the mutual funds you hold might be caught in a decline.he risk of losing purchasing power. If your mutual funds gain 5% in a year and the cost of living goes up by 2%, you are left with a real return of only 3%."
          }
        />

        <Question
          question={"What we have found in ancient fossil?"}
          answere={
            "A fossil (from Classical Latin: fossilis, literally obtained by digging) is any preserved remains, impression, or trace of any once-living thing from a past geological age. Examples include bones, shells, exoskeletons, stone imprints of animals or microbes, objects preserved in amber, hair, petrified wood, oil, coal, and DNA remnants. The totality of fossils is known as the fossil record."
          }
        />

        <Question
          question={"Are we alone in universe?"}
          answere={
            "Are we alone? This question is as old as humankind itself. For millennia, people have turned their eyes to the stars and wondered if there are others like themselves out there. Does life, be it similar to our own or not, exist elsewhere in our Solar System? Our Galaxy? Until 1992, when the first exoplanet was confirmed, it was uncertain whether there were even any planets outside those in our own Solar System. "
          }
        />

        {/* <div className="card">
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
        </div> */}
      </main>
    </div>
  );
};

export default App;
