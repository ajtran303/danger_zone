import Countdown from './Timer';

export default function Question({ question, answer }) {
  return (
    <section className="question">
      {question}
      {/* {answer} */}
      <Countdown />
    </section>
  )
};
            