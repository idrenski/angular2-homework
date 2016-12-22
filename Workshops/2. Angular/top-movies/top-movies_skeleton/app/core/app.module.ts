import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

import {Ng2BootstrapModule} from 'ng2-bootstrap';

import {MovieListComponent} from '../movie/movies-list.component';
import {MovieShortComponent} from '../movie/movie-short.component';
import {MovieFilterPipe} from '../movie/movie-filter.pipe';
import {MovieSortPipe} from '../movie/movie-sort.pipe';

@NgModule({
    // put all the needed data here
    imports: [BrowserModule, HttpModule, Ng2BootstrapModule],
    declarations: [MovieListComponent, MovieShortComponent, MovieFilterPipe, MovieSortPipe],
    bootstrap: [MovieListComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
