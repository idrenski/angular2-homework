/**
 * Created by idrenski on 22/12/2016.
 */
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'movieFilter'
})
export class MovieFilterPipe implements PipeTransform {
    transform(movies: Array<any>, filter = ''): any {

        let filteredMovies: Array<any> = [];

        if (movies) {
            for (let i = 0; i < movies.length; i++) {
                if (movies[i].Title.toLowerCase().indexOf(filter.toLowerCase()) != -1) {
                    filteredMovies.push(movies[i])
                }
            }
            if (filteredMovies.length > 0) {
                return filteredMovies;
            }
            else {
                return movies;
            }

        }
        else {
            return movies;
        }
    }
}