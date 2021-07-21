import { Component } from '@angular/core';
import { ContentService } from '../content.service';
import { InterfaceTheme } from '../interfaces/theme';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent {

  themes: InterfaceTheme[] | undefined

  constructor(private contentService: ContentService) {
    this.fetchThemes();
  }

  fetchThemes(): void {
    this.themes = undefined;
    this.contentService.loadThemes().subscribe(themes => {
      this.themes = themes.sort((a,b) => b.subscribers.length - a.subscribers.length);
    });
  }

}
