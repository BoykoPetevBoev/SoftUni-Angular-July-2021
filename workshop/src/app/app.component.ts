import { Component } from '@angular/core';
import { ContentService } from './content.service';
import { InterfacePost } from './interfaces/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'workshop';

  posts: InterfacePost[] | undefined;

  constructor(private contentService: ContentService) {
    this.fetchPosts()
  }

  fetchPosts(): void {
    this.posts = undefined;
    this.contentService.loadPosts().subscribe(posts => {
      this.posts = posts
    });
  }


}
