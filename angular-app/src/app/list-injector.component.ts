import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  Input,
  TemplateRef,
} from "@angular/core";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-list-injector",
  template: `
    <style></style>

    <ul>
    <!-- don't use ngFor without a reasonable trackBy in lists! -->
      <div *ngFor="let item of items; trackBy: trackBy">
        <ng-template
          [ngTemplateOutlet]="template"
          [ngTemplateOutletContext]="{ $implicit: item }"
        >
        </ng-template>
      </div>
    </ul>
  `,
})
export class ListInjectorComponent {
  @Input()
  items: any[] = [];

  @ContentChild(TemplateRef, { read: TemplateRef }) template!: TemplateRef<any>;

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) {
    this.scheduleChangeDetection();
  }

  // this would be the default trackBy if none is given
  public readonly trackBy = (index: number, item: any): any => item;
  // public readonly trackBy = (index: number, item: any): string => item.name;

  private scheduleChangeDetection(): void {
    setTimeout(() => {
      this.changeDetectorRef.markForCheck();
      this.changeDetectorRef.detectChanges();
    }, 2100);
  }
}
