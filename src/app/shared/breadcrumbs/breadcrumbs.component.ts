import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {
  public headTitle;
  constructor(private router: Router,
              private title: Title,
              private meta: Meta) {
    this.getDataRute().subscribe(data => {
      console.log(data);
      this.headTitle = data.title;
      this.title.setTitle(this.headTitle);

      const metaTag: MetaDefinition = {
        name: 'description',
        content: this.headTitle
      };
      this.meta.updateTag(metaTag);
    });
   }

  ngOnInit() {
  }

  public getDataRute() {
    return this.router.events.pipe(
      filter(event => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data)
    );
  }

}
