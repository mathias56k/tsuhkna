import React, { useState, useEffect } from "react";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCheckboxChange = () => {
    setIsSubscribed(!isSubscribed);
  };

  return (
    <div id="mc_embed_shell" className="flex flex-col items-center">
      <div className="bg-[#141414] w-[90%] rounded-2xl pt-4">
        <form
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
        >
          <div id="mc_embed_signup_scroll" className="flex flex-col items-center">
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-[#CFC0AE] font-BigBoy font-black text-5xl mb-[-0.5rem]">
                CONTACT
              </h2>
              <h2 className="text-[#CFC0AE] font-BigBoy font-black text-5xl">
                FORM
              </h2>
            </div>
            <div className="w-[80%] flex flex-col items-center justify-center gap-3 mt-4">
              <div className="text-[#CFC0AE] flex flex-col items-start">
                <label htmlFor="mce-FNAME" className="font-MediumBoy font-bold text-[20px]">First Name </label>
                <input
                  type="text"
                  name="FNAME"
                  className="input text bg-[#CFC0AE] text-[#141414] font-MediumBoy font-semibold rounded-lg h-[2.4rem] w-[16rem] ml-2"
                  id="mce-FNAME"
                  value={firstName}
                  onChange={handleFirstNameChange}
                />
              </div>
              <div className="text-[#CFC0AE] flex flex-col items-start">
                <label htmlFor="mce-EMAIL" className="font-MediumBoy font-bold text-[20px]">
                  Email Address <span className="asterisk text-red-700">*</span>
                </label>
                <input
                  type="email"
                  name="EMAIL"
                  className="input required email bg-[#CFC0AE] text-[#141414] font-MediumBoy font-semibold rounded-lg h-[2.4rem] w-[16rem] ml-2"
                  id="mce-EMAIL"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </div>
              <div>
              <label className="text-[#CFC0AE] flex items-center gap-2">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox bg-[#CFC0AE]"
                  checked={isSubscribed}
                  onChange={handleCheckboxChange}
                />
                <div className="mt-3">
                    <p className="font-MediumBoy font-bold">Subscribe me to the newsletter</p>
                    <p className="font-SmolBoy font-light text-[#CFC0AE] text-sm mt-[-0.4rem]">No spam only occasional cheap offers</p>
                </div>
              </label>
            </div>
            </div>
            <div id="mce-responses" className="clear foot">
              <div
                className="response"
                id="mce-error-response"
                style={{ display: "none" }}
              ></div>
              <div
                className="response"
                id="mce-success-response"
                style={{ display: "none" }}
              ></div>
            </div>
            <div
              aria-hidden="true"
              style={{ position: "absolute", left: "-5000px" }}
            >
              <input
                type="text"
                name="b_52d99ecce75bf380c2b109943_2d6d23b59a"
                tabIndex="-1"
                value=""
              />
            </div>
            <div className="optionalParent">
              <div className="flex flex-col items-center justify-center mt-6">
                <input
                  type="submit"
                  disabled={!isSubscribed}
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="btn btn-ghost bg-[#CFC0AE] text-[#141414] font-BigBoy font-black text-2xl px-8"
                  value="SEND"
                />
                <p style={{ margin: "0px auto" }}>
                  <a
                    href="http://eepurl.com/iP32bg"
                    title="Mailchimp - email marketing made easy and fun"
                  >
                    <span
                      style={{
                        display: "inline-block",
                        backgroundColor: "transparent",
                        borderRadius: "4px",
                      }}
                    >
                      <img
                        className="refferal_badge"
                        src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg"
                        alt="Intuit Mailchimp"
                        style={{
                          width: "220px",
                          height: "40px",
                          display: "flex",
                          padding: "2px 0px",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      />
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
