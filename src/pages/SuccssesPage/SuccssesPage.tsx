import { useEffect, useState } from "react";
import mammoth from "mammoth";
import { useParams } from "react-router-dom";

const SuccessesPage = () => {
  const [htmlContent, setHtmlContent] = useState<string>("");
  const { id } = useParams();
  if (!id) return <div>Loading...</div>;
  console.log(id);

  useEffect(() => {
    const loadDocx = async () => {
      try {
        const response = await fetch(`/success/${id}.docx`);
        const arrayBuffer = await response.arrayBuffer();

        const result = await mammoth.convertToHtml({ arrayBuffer });
        setHtmlContent(result.value);
      } catch (error) {
        console.error("Error loading Word document:", error);
      }
    };
   


    loadDocx();
  }, []);

  if(htmlContent) window.scrollTo({ top: 0, behavior: "smooth" });


  return (
    <div className="article-container">
      <div
        style={{ textAlign: "right", direction: "rtl" }}
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
};

export default SuccessesPage;
