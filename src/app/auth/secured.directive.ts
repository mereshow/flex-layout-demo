import { Directive, ViewContainerRef, Input, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';

@Directive({
  selector: '[appSecured]'
})
export class SecuredDirective {
  private destroy$ = new Subject<void>();
  private hasView = false;

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {
  }

  @Input() set nbIsGranted([permission, resource]: [string, string]) {

    const can = true;

    if (can && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (!can && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
}