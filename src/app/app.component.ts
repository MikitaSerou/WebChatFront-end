import { Component } from "@angular/core";
import { fadeAnimation } from "./animations/animations";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"],
  animations: [fadeAnimation]
})
export class AppComponent {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        let title = this.getTitle(
          router.routerState,
          router.routerState.root
        ).join("-");
        console.log("title", title);
        titleService.setTitle(title);
      }
    });
  }

  getTitle(state: any, parent: any): any {
    let data = [];
    if (parent && parent.snapshot.data && parent.snapshot.data.title) {
      data.push(parent.snapshot.data.title);
    }
    if (state && parent) {
      data.push(...this.getTitle(state, state.firstChild(parent)));
    }
    return data;
  }
}
