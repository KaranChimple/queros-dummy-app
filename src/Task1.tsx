import React, { useState } from "react";

const styles = {
  splitContainer: {
    backgroundColor: "#fff",
    height: 200,
    width: 400,
    marginTop: 50,
  },
};

const Task1 = () => {
  const [str, setStr] = useState("");

  const onChange = (evt: {
    target: { value: React.SetStateAction<string> };
  }) => {
    const { value } = evt.target;
    setStr(value);
  };

  return (
    <div>
      <input type="text" value={str} onChange={onChange} />
      <div style={styles.splitContainer}>
        <span>
          {str.split("").map((letter, index) => (
            <span style={{ color: "#000000" }}>
              {letter} - {index + 1}
              {index === str.length - 1 ? "" : ", "}
            </span>
          ))}
        </span>
      </div>
    </div>
  );
};

export default Task1;
