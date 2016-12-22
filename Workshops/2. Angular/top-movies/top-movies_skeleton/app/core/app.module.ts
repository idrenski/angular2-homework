import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

import {AppComponent} from '../movie/movies-list.component';
import {MovieShortComponent} from '../movie/movie-short.component';
import {MovieFilterPipe} from '../movie/movieFilter.pipe';
import {SortMoviesPipe} from '../movie/movieSort.pipe';


import {Ng2BootstrapModule} from 'ng2-bootstrap';

@NgModule({
    // put all the needed data here
    imports: [BrowserModule, HttpModule, Ng2BootstrapModule],
    declarations: [AppComponent, MovieShortComponent, MovieFilterPipe, SortMoviesPipe],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
