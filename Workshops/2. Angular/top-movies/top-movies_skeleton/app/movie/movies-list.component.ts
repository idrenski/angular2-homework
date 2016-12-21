import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';

@Component({
    selector: 'mvdb-app',
    templateUrl: 'movies-list.component.html'
})
export class AppComponent implements OnInit {
    movies: Array<any>;
    pageTitle: string;

    constructor(http: Http) {
        //called first time before the ngOnInit()

        // research how to populate the movies in **this.movies**
        http.get('../data/movies.json')
            .map(res => res.json()) // Map will change your response ot json()
            .subscribe(movies => this.movies = movies,
                err => console.log('error:', err),
                () => console.log('200', this.movies)
            );

        this.pageTitle = "I'm page title";
    }


    ngOnInit() {
        //called after the constructor and called  after the first ngOnChanges

    }

}
