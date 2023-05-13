export const updateSaved = (newsData, savedArticles) => {
  newsData && newsData.articles.map((data) => {
    const isArticleSaved = savedArticles.some(savedArticle => savedArticle.title === data.title)
    data.isSaved = isArticleSaved
  })
}
