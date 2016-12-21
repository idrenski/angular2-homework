/**
 * Created by idrenski on 21/12/2016.
 */
import {Component, Directive, Input} from '@angular/core';

@Component({
    selector: 'mvdb-movie-short',
    templateUrl: 'movie-short.component.html'
})
export class MoviesComponent {

}

@Directive({
    selector: '[MovieDetails]'
})
export class OtherAttrDirective {
    private details: any;

    @Input('MovieDetails')
    set MovieDetails(value: any) {
        this.details = value;
        console.log(this.details.Title, this.details);
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

