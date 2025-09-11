import {
  Component,
  Input,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  standalone: true,
  imports: [],
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css',
})
export class LifecycleComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() text?: string;

  // runs first, before any lifecycle hooks
  constructor() {
    console.log('CONSTRUCTOR');
  }

  // should do http requests here, not in constructor
  ngOnInit() {
    console.log('ngOnInit');
  }

  // runs when an @Input property changes, including when the component is first initialized
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges');
    console.log(changes);
  }

  // runs with every change detection cycle, after ngOnChanges and ngOnInit
  // can be used to detect and act upon changes that Angular can't or won't detect on its own
  // discouraged to use this hook though, as it can have performance implications
  ngDoCheck() {
    console.log('ngDoCheck');
  }

  //? Content of angular component is the stuff between its opening and closing tags, including any projected content (ng-content)
  // runs after content (ng-content) has been projected into view
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  // runs after every check of projected content
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  //? View of angular component is its template and the DOM elements that it contains
  // runs after the component's view (and child views) has been initialized
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  // runs after every check of the component's view (and child views)
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  // ngOnDestroy runs when Angular removes the component from the DOM.
  // In this case, that happens when @if (lifecycleComponentIsVisible) changes to false.
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
