import React from "react";
import Authors from "./Authors";

export default function CreatedByList({ createdBy }) {
  const authorsElements = createdBy.map((authors) => {
    return <Authors key={authors.id} {...authors} />;
  });
  return <div className="authors-grid">{authorsElements}</div>;
}
