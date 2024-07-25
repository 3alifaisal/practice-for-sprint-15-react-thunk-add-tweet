import { useDispatch } from "react-redux";
import { useState } from "react";
import { postATweet } from "./store/tweet";
const CreateTweet = () => {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(postATweet(message));
  };
  return (
    <form onSubmit={onSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateTweet;
