import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';

@Component({
    selector: 'mvdb-app',
    templateUrl: 'movies-list.component.html',
    styles: [`  
    table {
        border-collapse: collapse;
        width: 100%;
    }
    div {
        padding-left: 15%;
        padding-right: 15%;
        padding-top: 5%;
    }
    th, tr {
        
        padding: 15px;
        text-align: left;
        border-bottom: 1px solid #ddd;
    }
    td {
        
        padding: 15px;
        text-align: left;
    }
    tr:hover{background-color:#f5f5f5}
    tr.head {
    border-bottom: 0px;
    }   

`]
})
export class AppComponent implements OnInit {
    movies: Array<any>;
    pageTitle: string;

    orderItems = [{name: 'Asc', value: "asc"}, {name: 'Desc', value: "desc"}];
    ratingItems = [{name: 'Title', value: "title"}, {name: 'Year', value: "year"}, {name: 'Rating', value: "imdbRating"}];

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
