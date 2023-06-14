import React, { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import useClipboard from "react-use-clipboard";
import "./Main.css";
import "./Main-new.css";

const Main = () => {
  const [textToCopy, setTextToCopy] = useState();
  const [isCopied, setCopied] = useClipboard(textToCopy, {
    successDuration: 1000,
  });

  // clear text on button click

  const clearSpeechText = () => {
    window.location.reload();
  };

  //configuring startListening and stopListening functionalities

  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <>
      <div className="main-wrapper">
        <div className="main-inner-wrapper">
          <div className="main-title">
            <h1>Speech to Text Converter</h1>
            <p>
              A <span style={{ fontWeight: "bold" }}>Transform </span> your
              words into text with lightning speed and accuracy using our
              cutting-edge speech-to-text converter web application . {" "}
            </p>
          </div>

          <div className="main-screen-wrapper">
            <div className="main-screen-generate-text" onClick={() => setTextToCopy(transcript)} >
              <p>
                {transcript}
              </p>
            </div>
            <div className="main-screen-buttons">
              <div className="col-10 mx-auto">
                <div className="row">
                  <div className="col-md-3 col-6 mt-2">
                    <button className="copy-to-clipboard" onClick={setCopied}><i class="fa-regular fa-clipboard me-2"></i>
                    {isCopied? 'Copied' : 'Copy Now'}{transcript}</button>
                  </div>
                  <div className="col-md-3 col-6 mt-2">
                    <button className="start-listening" onClick={startListening}><i class="fa-solid fa-microphone-lines me-2"></i> Start Listening</button>
                  </div>
                  <div className="col-md-3 col-6 mt-2">
                    <button className="stop-listening" onClick={SpeechRecognition.stopListening}><i class="fa-solid fa-stop me-2"></i>Stop Listening</button>
                  </div>
                  <div className="col-md-3 col-6 mt-2">
                    <button className="reset-to-origin" onClick={clearSpeechText}><i class="fa-solid fa-rotate-right me-2"></i>Reset Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
