import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [total, setTotal] = useState(0);
  const [formData, setFormData] = useState({});
  const [errorText, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: +e.target.value });
  };

  const handleForm = (e) => {
    e.preventDefault();
    if (!formData.firstNum || !formData.secondNum) {
      setError("Both the numbers are required");
      return;
    }
    setTotal(formData.firstNum + formData.secondNum);
    setError(""); // clear error message
  };

  return (
    <main
      className={`formWrapper flex min-h-screen flex-col ${inter.className}`}
    >
      <h1>Adding two numbers</h1>
      <form onSubmit={handleForm}>
        <input
          type="number"
          placeholder="First Number"
          name="firstNum"
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Second Number"
          name="secondNum"
          onChange={handleChange}
        />

        <button type="submit">Add Two Numbers</button>
      </form>
      {errorText ? <p className="errorMsg">{errorText}</p> : <p>Total: {total}</p>}
    </main>
  );
}
