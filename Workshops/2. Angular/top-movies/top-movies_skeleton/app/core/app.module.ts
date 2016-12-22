import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

import {AppComponent} from '../movie/movies-list.component';
import {MovieShortComponent} from '../movie/movie-short.component';

import {Ng2BootstrapModule} from 'ng2-bootstrap';

@NgModule({
    // put all the needed data here
    imports: [BrowserModule, HttpModule, Ng2BootstrapModule],
    declarations: [AppComponent, MovieShortComponent],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
