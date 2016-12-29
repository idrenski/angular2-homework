import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';

@Component({
    selector: 'mvdb-app',
    templateUrl: 'movies-list.component.html'
})
export class MovieListComponent implements OnInit {
    private movies: Array<any>;
    private pageTitle: string;

    private filteredBy: string;
    private sortedBy: string;
    private orderedBy: string;

    private sortItems: Array<any>;
    private orderItems: Array<any>;

    private moviesUrl: string = '../data/movies.json';

    constructor(private http: Http) {
        //called first time before the ngOnInit()

    }

    ngOnInit() {
        //called after the constructor and called after the first ngOnChanges

        this.moviesUrl = '../data/movies.json';
        this.pageTitle = 'Top iMDB Movies';

        this.sortItems = [{name: 'Title', value: "Title"}, {name: 'Year', value: "Year"}, {name: 'Rating', value: "imdbRating"}];
        this.orderItems = [{name: 'Asc', value: "asc"}, {name: 'Desc', value: "desc"}];

        this.sortedBy  = this.sortItems[2].value;
        this.orderedBy = this.orderItems[1].value;

        this.http.get(this.moviesUrl)
            .map(res => res.json()) // Map will change your response ot json()
            .subscribe(movies => this.movies = movies,
                err => console.log('error:', err)
            );

    }
}
