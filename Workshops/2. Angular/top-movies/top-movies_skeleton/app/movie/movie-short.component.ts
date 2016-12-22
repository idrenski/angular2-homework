/**
 * Created by idrenski on 22/12/2016.
 */
import {Component, Directive, Input} from '@angular/core';

@Component({
    selector: '[movie]',
    templateUrl: 'movie-short.component.html',
    styles: [`    
    td {
        padding-left: 20px;
    }`]
})
export class MovieShortComponent {
    private details: any;

    @Input('movie')
    set movie(value: any) {
        this.details = value;
    }

    get title(): string {
        return this.details.Title;
    }
    get year(): string {
        return this.details.Year;
    }

    get imdbRating(): string {
        return this.details.imdbRating;
    }

    get poster(): string {
        return this.details.Poster;
    }

}