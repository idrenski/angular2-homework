import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';

@Component({
    selector: 'mvdb-app',
    templateUrl: 'movies-list.component.html',
    styles: [`    
    div {
        padding-left: 15%;
        padding-right: 15%;
        padding-top: 5%;
    }
    th {
        padding-left: 20px;
    }`]
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
                err => console.log('error:', err)
            );

        this.pageTitle = "I'm page title";
    }


    ngOnInit() {
        //called after the constructor and called  after the first ngOnChanges

    }

}
