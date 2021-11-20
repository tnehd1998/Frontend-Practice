import React from "react";

interface IInputProps {
  value: string;
  onChange: (event: React.SyntheticEvent<HTMLInputElement>) => void;
}

export const Input: React.FunctionComponent<IInputProps> = ({
  value,
  onChange,
}) => (
  <input type="text" placeholder="Name" value={value} onChange={onChange} />
);

interface IFormSubmit {
  onFormSubmit: (event: React.FormEvent) => void;
}

export const Form: React.FunctionComponent<IFormSubmit> = ({
  children,
  onFormSubmit,
}) => <form onSubmit={onFormSubmit}>{children}</form>;
