import React from "react";

export default function Seo({ title }) {
  document.querySelector("title").innerHTML = title;
  return null;
}
