export const updateSaved = (newsData, savedArticles) => {
  if (newsData.articles) {
    newsData.articles.map((data) => {
      const isArticleSaved = savedArticles.some(savedArticle => savedArticle.title === data.title)
      data.isSaved = isArticleSaved
    })
  }
}
