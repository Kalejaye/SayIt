import React from "react";
import Button from "./Button";

const Counter = ({ count, onIncrement, onDecrement }) => {
  return (
    <div className="flex flex-col gap-2 content-center">
      Counter :{count}
      <Button
        onClick={onIncrement}
        label="Increment"
        className="bg-blue-600 text-white cursor-pointer hover:bg-blue-600 transition-colors"
      />
      <Button
        onClick={onDecrement}
        label="Decrement "
        className="bg-red-900 text-white cursor-pointer hover:bg-red-900 transition-colors"
      />
    </div>
  );
};

export default Counter;
