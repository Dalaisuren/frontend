import { useState } from "react";

export default function Timer() {
  const [count, setCount] = useState(0);

  const startTimer = () => {
    if (count >= 10) return;
    setTimeout(() => setCount(count + 1), 1000);
  };

  startTimer();

  return (
    <div className="flex justify-center items-center h-screen text-4xl font-bold">
      {count}
    </div>
  );
}
