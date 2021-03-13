import React, { useState } from "react";
import samplePDF from "../resources/sample-pdf.pdf";
import styled from "styled-components";
import { colors } from "../resources/ThemeColors";
import { breakpoints } from "../Media";

import { Document, Page, pdfjs } from "react-pdf";

const DesktopMainDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  @media (max-width: ${breakpoints.mobileMin}) {
    display: none;
  }
`;

const MobileMainDiv = styled.div`
  display: none;
  @media (max-width: ${breakpoints.mobileMin}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const ButtonDiv = styled.div``;

const MobileButtonDiv = styled.div`
  bottom: 5px;
`;

const Button = styled.button`
  background-color: ${colors.blue};
  color: white;
  border: none;
  margin-right: 1em;
  height: 2.5em;
  width: 9em;
  border-radius: 4px;
  cursor: pointer;
`;

const DocumentDiv = styled.div`
  display: flex;
`;

const urls =
  "https://cors-anywhere.herokuapp.com/http://www.pdf995.com/samples/pdf.pdf";

export default function PDFDetails() {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  // const [desktopWidth, setDesktopWidth] = useState(480);

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
    <>
      <DesktopMainDiv>
        <ButtonDiv>
          {/* <p>
          Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
        </p> */}
          <Button
            type="button"
            disabled={pageNumber <= 1}
            onClick={previousPage}
          >
            Previous Page
          </Button>
        </ButtonDiv>
        <DocumentDiv>
          <Document
            file={samplePDF}
            // file={{
            //   url:
            //     "https://cors-anywhere.herokuapp.com/http://cs231n.stanford.edu/reports/2017/pdfs/555.pdf",
            // }}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} width={600} />
          </Document>
        </DocumentDiv>

        <ButtonDiv>
          {/* <p>
          Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
        </p> */}

          <Button
            type="button"
            disabled={pageNumber >= numPages}
            onClick={nextPage}
          >
            Next Page
          </Button>
        </ButtonDiv>
      </DesktopMainDiv>
      <MobileMainDiv>
        <DocumentDiv>
          <Document
            // file={
            //   "https://doc-04-bo-apps-viewer.googleusercontent.com/viewer/secure/pdf/ckuqq8apjnur8barkaoq3bf3qe3e1f4s/vu5pvug3alvi2v22ar72d80hg94ebvq1/1615619400000/gmail/13487650229211214763/ACFrOgC93n7ojS4ZQu4-oD3Hcmh8aUYlY5N3ZHwkqJImN8AgyWI9e5peej940A7Qat0rqviO7oXkfpLf0oLwuJc4pqHVVG1wT0aNsnM9mVQ2WR7k9hu8Ihw-djAHrbGgsdpLWvmKhhak-44nzCWy?print=true&nonce=e1juursk2lqt6&user=13487650229211214763&hash=9tpldgo356t7srorksjlum34fqli25m3"
            // }
            file={{
              url:
                "https://cors-anywhere.herokuapp.com/https://doc-04-bo-apps-viewer.googleusercontent.com/viewer/secure/pdf/ckuqq8apjnur8barkaoq3bf3qe3e1f4s/m1rk0ki9cr1dps0e410rdj9bding4238/1615619775000/gmail/13487650229211214763/ACFrOgC93n7ojS4ZQu4-oD3Hcmh8aUYlY5N3ZHwkqJImN8AgyWI9e5peej940A7Qat0rqviO7oXkfpLf0oLwuJc4pqHVVG1wT0aNsnM9mVQ2WR7k9hu8Ihw-djAHrbGgsdpLWvmKhhak-44nzCWy?print=true&nonce=pbgajfmggrnbi&user=13487650229211214763&hash=mt2aj75hvsn99ka3c9gov80v38j43qcs",
            }}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} width={400} />
          </Document>
        </DocumentDiv>

        <MobileButtonDiv>
          {/* <p>
          Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
        </p> */}
          <Button
            type="button"
            disabled={pageNumber <= 1}
            onClick={previousPage}
          >
            Previous Page
          </Button>
          <Button
            type="button"
            disabled={pageNumber >= numPages}
            onClick={nextPage}
          >
            Next Page
          </Button>
        </MobileButtonDiv>
      </MobileMainDiv>
    </>
  );
}
