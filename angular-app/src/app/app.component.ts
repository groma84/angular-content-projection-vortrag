import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-root",
  template: `
    <style>
      .active {
        font-weight: bold;
      }
    </style>
    <h1>Content Projection Demo</h1>
    <nav>
      <span>Angular examples</span>
      <ul>
        <li><a routerLink="/angular-example" routerLinkActive="active">Angular Example</a></li>
      </ul>

      <span>ng-content</span>
      <ul>
        <li><a routerLink="/change-detection-mit-verschachtelung-ng-content" routerLinkActive="active">change-detection-mit-verschachtelung-ng-content</a></li>
        <li><a routerLink="/content-children-mehrere-ebenen" routerLinkActive="active">content-children-mehrere-ebenen</a></li>
        <li><a routerLink="/injector-mehrere-ebenen" routerLinkActive="active">injector-mehrere-ebenen</a></li>
        <li><a routerLink="/content-zweimal-geht-nicht" routerLinkActive="active">content-zweimal-geht-nicht</a></li>

        <li><a routerLink="/ng-content-simple" routerLinkActive="active">simple</a></li>
        <li><a routerLink="/ng-content-selectors" routerLinkActive="active">selectors and lifecycle</a></li>
        <li><a routerLink="/ng-content-two-layers" routerLinkActive="active">multiple layers/checkifsomethingexists/contentchild</a></li>
        <li><a routerLink="/ng-content-projecting-twice" routerLinkActive="active">projecting twice</a></li>
        <li><a routerLink="/ng-content-host-context" routerLinkActive="active">host-context</a></li>
        <li><a routerLink="/ng-content-injector-tree" routerLinkActive="active">injector tree</a></li>
      </ul>

      <span>ng-template</span>
      <ul>
        <li><a routerLink="/ngif-else" routerLinkActive="active">ngif-else</a></li>
        <li><a routerLink="/template-outlet" routerLinkActive="active">template-outlet</a></li>
        <li><a routerLink="/template-select" routerLinkActive="active">template-select</a></li>
        <li><a routerLink="/track-by" routerLinkActive="active">track-by</a></li>
        
        <li><a routerLink="/ng-template-simple" routerLinkActive="active">simple</a></li>
        <li><a routerLink="/ng-template-context" routerLinkActive="active">context and lifecycle</a></li>
        <li><a routerLink="/ng-template-multiple-templates" routerLinkActive="active">multiple templates and QueryList</a></li>
        <li><a routerLink="/ng-template-injector" routerLinkActive="active">injector tree/change detection</a></li>
      </ul>
    </nav>

    <hr />

    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  title = "content-projection-demo";
}
