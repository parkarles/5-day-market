const path = require("path");
exports.onCreatePage = async ({
  page,
  actions
}) => {
  const {
    createPage
  } = actions

  if (page.path.match(/^\/magazine/)) {
    page.matchPath = "/magazine/:id"
    createPage(page)
  }

    if (page.path.match(/^\/fund/)) {
      page.matchPath = "/fund/:id"
      createPage(page)
    }
}