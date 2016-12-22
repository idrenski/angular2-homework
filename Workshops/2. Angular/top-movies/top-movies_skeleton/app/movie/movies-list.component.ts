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
export class MovieListComponent implements OnInit {
    movies: Array<any>;
    pageTitle: string = "Top iMDB Movies";

    searched: string;
    sortedBy: string = 'imdbRating';
    orderedBy: string = 'desc';

    sortItems = [{name: 'Title', value: "Title"}, {name: 'Year', value: "Year"}, {name: 'Rating', value: "imdbRating"}];
    orderItems = [{name: 'Asc', value: "asc"}, {name: 'Desc', value: "desc"}];

    constructor(http: Http) {
        //called first time before the ngOnInit()

        http.get('../data/movies.json')
            .map(res => res.json()) // Map will change your response ot json()
            .subscribe(movies => this.movies = movies,
                err => console.log('error:', err)
            );

    }

    ngOnInit() {
        //called after the constructor and called after the first ngOnChanges

    }
}
