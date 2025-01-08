import { useRef } from "react";
import "./join.css";
import emailjs from "@emailjs/browser";

function Join() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_l6pji3b", "template_olbg15u", form.current, {
        publicKey: "lJyTtda10FQFRdPx5",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="join" id="join">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">Ready to</span>
          <span> Level up</span>
        </div>
        <div>
          <span>your body</span>
          <span className="stroke-text"> with us?</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input
            type="email"
            name="user_email"
            placeholder="Enter your Email Address here...
"
          />
          <button className="btn btn-join">Join now</button>
        </form>
      </div>
    </div>
  );
}

export default Join;
