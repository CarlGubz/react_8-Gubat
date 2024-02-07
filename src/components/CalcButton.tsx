import { Button } from "react-bootstrap";
import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
  size?: string;
  variant?: string;
}

const CalcButton: React.FC<ButtonProps> = ({variant, size, label, onClick, className }) => {
  return (
    <Button variant="info" size="lg" className="calc-btn " onClick={onClick}>
      {label}
    </Button>
  );
};

export default CalcButton;