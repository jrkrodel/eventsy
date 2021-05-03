import * as MODEL from "../model/model.js";

function init() {
  $("nav a").click(function (event) {
    let btnId = this.id;
    let contentId = btnId + "Content";
    if (btnId == "home") {
      MODEL.removeBlackNav();
      MODEL.getPageContent(contentId);
    } else if (btnId == "gallery") {
      MODEL.removeWhiteNav();
      MODEL.getPageContent(contentId, MODEL.addGalleryListeners);
    } else if (btnId == "blog") {
      MODEL.removeWhiteNav();
      MODEL.getPageContent(contentId, MODEL.addBlogListeners);
    } else {
      MODEL.removeWhiteNav();
      MODEL.getPageContent(contentId);
    }
  });
}

$(document).ready(function () {
  init();
  MODEL.getPageContent("homeContent");
});
