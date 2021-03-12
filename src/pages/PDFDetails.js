import React, { useState } from "react";
import samplePDF from "../resources/sample-pdf.pdf";
import styled from "styled-components";
import { colors } from "../resources/ThemeColors";

import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.blue};
`;

const ButtonDiv = styled.div`
  position: absolute;
  bottom: -150px;
`;

const Button = styled.button`
  background-color: ${colors.blue};
  color: white;
  border: none;
  margin-right: 1em;
  height: 2em;
  width: 6em;
  border-radius: 4px;
`;

export default function PDFDetails() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <MainDiv>
      <Document file={samplePDF} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <ButtonDiv>
        {/* <p>
          Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
        </p> */}
        <Button type="button" disabled={pageNumber <= 1} onClick={previousPage}>
          Previous Page
        </Button>
        <Button
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          Next Page
        </Button>
      </ButtonDiv>
    </MainDiv>
  );
}
