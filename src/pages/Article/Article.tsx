import { useEffect, useState } from "react";
import mammoth from "mammoth";
import "./Article.scss"

const Article = () => {
  const [html, setHtml] = useState('');
  console.log(html)

  useEffect(() => {
    fetch('/articles/article1.docx') // must be placed inside /public folder
      .then(response => response.arrayBuffer())
      .then(arrayBuffer => mammoth.convertToHtml({ arrayBuffer }))
      .then(result => {
        setHtml(result.value);
      })
      .catch(err => {
        console.error('Error loading Word file:', err);
      });
  }, []);

  return (
    <article>
      <h1>📄 Legal Article</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
};

export default Article