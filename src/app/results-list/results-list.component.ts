import {Component, OnInit} from '@angular/core';
import {GitHubService} from '../git-hub.service';


@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.css']
})
export class ResultsListComponent implements OnInit {
  errorMessage = '';
  items = [];
  nextUrl = null;
  previousUrl = null;
  total = 0;
  topic = '';
  languages = [
    {description: 'Any', language: ''},
    {description: 'C++', language: 'c%2B%2B'},
    {description: 'C#', language: 'c%23'},
    {description: 'JS', language: 'javascript'},
    {description: 'Java', language: 'java'},
    {description: 'Kotlin', language: 'kotlin'},
    {description: 'Swift', language: 'swift'},
  ];
  specificLanguage = this.languages[0];

  constructor(private gitHub: GitHubService) {
  }

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.callService(null);
  }

  nextPage() {
    console.log(`nextPage(): ${this.nextUrl}`);
    this.callService(this.nextUrl);
  }

  previousPage() {
    console.log(`previousPage(): ${this.previousUrl}`);
    this.callService(this.previousUrl);
  }

  changeLanguage() {
    this.callService(null, this.specificLanguage);
  }

  search() {
    console.log(`topic = ${this.topic}`);
    this.callService(null, this.specificLanguage, this.topic);
  }

  clearTopic() {
    this.topic = '';
  }

  private callService(url: string, language?: any, topic: string = '') {
    this.gitHub.get(url, language, topic).subscribe(
      data => {
        this.items = data.body.items;
        this.total = data.body.total_count;
        data.links.forEach(link => {
          const [urlLink, urlType] = link.replace('<', '').replace('>', '').replace(' ', '').split(';');

          if (urlType.indexOf('next') > -1) {
            this.nextUrl = urlLink;
          } else if (urlType.indexOf('prev') > -1) {
            this.previousUrl = urlLink;
          }
          console.log(`next: ${urlType} link: ${urlLink}`);
        });
      },
      error => {
        this.errorMessage = <any>error;
      });
  }
}
