import React, { useState } from "react";
import { Form, Input, Button } from "semantic-ui-react";
import './Generate.css';

function validateInput(melody) {
  if (!melody.prompt || melody.length <= 0) {
    alert("Invalid input!");
    return false;
  }
  return true; 
}

export const Generate = () => {
  const [prompt, setPrompt] = useState("");
  const [length, setLength] = useState(1);
  const [audioSrc, setAudioSrc] = useState("");

  const handleSubmit = async () => {
    let isValidInput = false;

    while (!isValidInput) {
      const melody = { prompt, length };

      if (!validateInput(melody)) {
        console.log("Invalid input. Aborting...");
        break; // Exit the loop if input is invalid
      }

      const response = await fetch("/generate_audio", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(melody)
      });

      if (response.ok) {
        // Convert the response to blob
        const audioBlob = await response.blob();
        const audioUrl = URL.createObjectURL(audioBlob);
        setAudioSrc(audioUrl);
        isValidInput = true; // Exit the loop if audio generation is successful
      } else {
        console.error("Failed to generate audio");
        // Handle failed response
        break; // Exit the loop if audio generation fails
      }
    }
  };

  return (
    <div className='generate-body'>
      <div className="title animate__animated animate__bounceInDown"><h2>Generate</h2></div>
      <div className="generate-container">

        <Form className="generate">
          <Form.Field>
            <Input
              placeholder="Enter prompt"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <Input
              type="number"
              placeholder="Enter length"
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
          </Form.Field>
          <Button onClick={handleSubmit}>Generate Audio</Button>
        </Form>
        {
          audioSrc && (
            <audio controls className="audio-player">
              <source src={audioSrc} type="audio/wav" />
              Your browser does not support the audio element.
            </audio>
          )
        }


      </div>

    </div>
  );
};

export default Generate;
