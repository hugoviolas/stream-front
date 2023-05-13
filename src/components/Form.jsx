import axios from "axios";
import { useState } from "react";
import Progress from "./Progress";
import "../App.css";

const Form = () => {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("file", file);

      // Send the file to your server
      const percentage = await axios.post(
        "http://localhost:5500/movie",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (data) => {
            //Set the progress value to show the progress bar
            setProgress(Math.round((100 * data.loaded) / data.total));
          },
        }
      );
      console.log(percentage);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFile = (e) => {
    console.log(e.target.files[0].name);
    setFile(e.target.files[0]);
  };
  return (
    <>
      <form className="flex" onSubmit={handleSubmit}>
        <label className="block" htmlFor="movie"></label>
        <input className="block" id="movie" type="file" onChange={handleFile} />
        <button className="block">Send</button>
      </form>
      <Progress progress={progress} />
    </>
  );
};

export default Form;
