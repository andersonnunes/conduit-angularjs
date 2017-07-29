import marked from 'marked';

class ArticleCtrl {
  constructor(article, User, $sce, $rootScope) {
    'ngInject';

    this.article = article;

    this.currentUser = User.current;

    $rootScope.setPageTitle(this.article.title);

    this.article.body = $sce.trustAsHtml(marked(this.article.body, { sanitize: true }));

    this.resetCommentForm();
  }

  resetCommentForm() {
    this.commentForm = {
      isSubmitting: false,
      body: '',
      errors: []
    }
  }

}


export default ArticleCtrl;
