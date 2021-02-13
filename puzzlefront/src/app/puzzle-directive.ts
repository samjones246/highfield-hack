import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[puzzleHost]'
})
export class PuzzleDirective {
    constructor(public viewContainerRef: ViewContainerRef){ }
}
