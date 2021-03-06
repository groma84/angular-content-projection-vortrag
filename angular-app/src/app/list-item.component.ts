import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-list-item",
  template: `
    <li [tag]="index?.toString()" [ngStyle]="{ 'font-weight': first ? 'bold' : 'normal' }">
      {{ index }} {{ item }}
    </li>
  `,
})
export class ListItemComponent implements
OnInit,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked {
  ngOnInit(): void {
    console.log("🏷️ ngOnInit");
  }
  ngAfterContentInit(): void {
    console.log("🏷️ ngAfterContentInit");
  }
  ngAfterContentChecked(): void {
    console.log("🏷️ ngAfterContentChecked");
  }
  ngAfterViewInit(): void {
    console.log("🏷️ ngAfterViewInit");
  }
  ngAfterViewChecked(): void {
    console.log("🏷️ ngAfterViewChecked");
  }

  @Input()
  item: any | undefined;

  @Input()
  first: boolean | undefined;

  @Input()
  index: number | undefined;
}
