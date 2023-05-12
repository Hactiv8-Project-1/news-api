export const handleSave = (newsData, savedArticles, article) => {
  console.log('on saved handle')
  const isArticleSaved = savedArticles.some(savedArticle => savedArticle.title === article.title)

  if (isArticleSaved) {
    const newSavedArticles = savedArticles.filter(savedArticle => savedArticle.title !== article.title)
    savedArticles = newSavedArticles
    localStorage.setItem('savedArticles', JSON.stringify(newSavedArticles))
  } else {
    const newSavedArticles = [...savedArticles, article]
    savedArticles = newSavedArticles
    localStorage.setItem('savedArticles', JSON.stringify(newSavedArticles))
  }

  newsData && newsData.articles.map((data) => {
    const isArticleSaved = savedArticles.some(savedArticle => savedArticle.title === data.title);
    data.isSaved = isArticleSaved
  })
}
