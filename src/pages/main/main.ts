import { Component }                from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { VocabularyPage }           from '../vocabulary/vocabulary';
import { LearnPage }                from '../learn/learn';


@Component({
  selector: 'page-posts',
  templateUrl: 'main.html'
})
export class MainPage {
  loadCompleted: boolean = false;
  subreddit;
  //anotherPage: CommentsPage;

  posts: Array<any>;
  //commentsPage = CommentsPage;
  items = [];

  constructor(public navCtrl: NavController/*, public redditApi: RedditApiService*/, public navParams: NavParams) {
    this.subreddit = this.navParams.get('subreddit');
    this.load(this.subreddit);
    this.items = [
      {
        'title': 'Учить',
        'icon': 'pie',
        'description': 'The latest version',
        'color': '#0CA9EA'
      },
      {
        'title': 'Словарь',
        'icon': 'school',
        'description': 'A powerful',
        'color': '#E63135'
      },
      {
        'title': 'Статистика',
        'icon': 'stats',
        'description': 'The',
        'color': '#ea6d1e'
      }
    ]
  }

  load(url?) {
    /*this.redditApi.fetch(url).subscribe((posts) => {
      this.posts = posts;
      this.loadCompleted = true;
      console.log(posts)
    })*/
  }

  getPostImage(post) {
   let postImage = '';
   if (!post.imageError && post.preview) {
     postImage = post.preview.images[0].source.url;
   }
   return postImage;
  }

  setImageError(post) {
    post.imageError = true;
  }

  // readPost(post) {
    // let redditUrl = 'https://www.reddit.com/r/';
    // if (post.url.includes(redditUrl)) {
    //   this.goToComments(post)
    // } else {
    //   this.goToPost(post);
    // }
  // }

  goToComments(post) {
    //this.navCtrl.push(this.commentsPage, {post})
  }

  goToPost(post) {
    window.open(post.url, '_blank');
  }

  goToSubreddit(subreddit) {
    this.navCtrl.push(MainPage, {subreddit})
  }

  loadMore(infiniteScroll) {
    let lastPost = this.posts[this.posts.length - 1];
    if (!lastPost) {
      infiniteScroll.complete()
    } else {
      /*this.redditApi.fetchNext(lastPost.name, this.subreddit).subscribe((posts) => {
        this.posts = this.posts.concat(posts);
        infiniteScroll.complete();
      })*/
    }
  }

  openNavDetailsPage(item) {
    switch (item.icon){
      case "pie":
        this.navCtrl.push(LearnPage, { val: item.icon })
        break;
      case "school":
        this.navCtrl.push(VocabularyPage, { val: item.icon })
        break;
      case "stats":
        this.navCtrl.push(VocabularyPage, { val: item.icon })
        break;
    }

  }


}
