// This Pagination component only shows a More link, no back, no page numbers, no total
import * as React from "react";
import { Link } from "@remix-run/react";

interface Props {
  className?: string,
  baseURL: string,
  nextPage: number,
};

export default function Pagination({ className = '', baseURL, nextPage }: Props) {
  const url = `${baseURL}?page=${nextPage}`;
  return (
    <div className={className}>
      <Link to={url}>Más noticias</Link>
    </div>
  )
}
