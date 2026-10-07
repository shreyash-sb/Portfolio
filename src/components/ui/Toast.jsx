import React from "react";
import { CheckCircle2 } from "lucide-react";

export function Toast({ message, visible }) {
  return (
    <div className={`cms-toast ${visible ? "show" : ""}`}>
      <CheckCircle2 size={17} />
      <span>{message}</span>
    </div>
  );
}
