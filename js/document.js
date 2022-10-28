let queueRenderPage;
let pageNum;
let pdfDoc;
export default function getDocument(pdfUrl) {
  const url = pdfUrl;

  pdfDoc = null;
  let pageIsRendering = false,
    pageNumIsPending = null;
  pageNum = 1;
  const scale = 2;
  const canvas = document.createElement("canvas");
  canvas.setAttribute("id", "pdf-render");
  const ctx = canvas.getContext("2d");

  // Render the page
  const renderPage = (num) => {
    pageIsRendering = true;

    // Get page
    pdfDoc.getPage(num).then((page) => {
      // Set scale
      const viewport = page.getViewport({ scale });
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      canvas.classList.add("w-100");
      canvas.setAttribute("id", "pdf-render");
      const renderCtx = {
        canvasContext: ctx,
        viewport,
      };

      page.render(renderCtx).promise.then(() => {
        pageIsRendering = false;

        if (pageNumIsPending !== null) {
          renderPage(pageNumIsPending);
          pageNumIsPending = null;
        }
      });

      // Output current page
    });
  };

  // Check for pages rendering
  queueRenderPage = (num) => {
    if (pageIsRendering) {
      pageNumIsPending = num;
    } else {
      renderPage(num);
    }
  };

  // Show Prev Page

  // Get Document
  pdfjsLib
    .getDocument(url)
    .promise.then((pdfDoc_) => {
      pdfDoc = pdfDoc_;

      renderPage(pageNum);
    })
    .catch((err) => {
      // Display error
      const div = document.createElement("div");
      div.className = "error";
      div.appendChild(document.createTextNode(err.message));
      document.querySelector("body").insertBefore(div, canvas);
      // Remove top bar
      document.querySelector(".top-bar").style.display = "none";
    });
  return canvas;
  E;
}
export const showPrevPage = () => {
  if (pageNum <= 1) {
    return;
  }
  pageNum--;
  queueRenderPage(pageNum);
};

// Show Next Page
export const showNextPage = () => {
  if (pageNum >= pdfDoc.numPages) {
    return;
  }
  pageNum++;
  queueRenderPage(pageNum);
};
