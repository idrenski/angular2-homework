/**
 * Created by idrenski on 22/12/2016.
 */
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'movieSort'
})
export class MovieSortPipe implements PipeTransform {
    transform(movies: Array<any>, sortedBy = 'Year', orderBy = 'asc'): any {

        if (movies) {
            return movies.sort(function (n1: any, n2: any): number {

                if (orderBy == 'asc') {
                    if ((n1[sortedBy] > n2[sortedBy]))
                        return 1;

                    if ((n1[sortedBy] < n2[sortedBy]))
                        return -1;
                }

                if (orderBy == 'desc') {
                    if ((n1[sortedBy] > n2[sortedBy]))
                        return -1;

                    if ((n1[sortedBy] < n2[sortedBy]))
                        return 1;
                }

                return 0;
            });

        }
        else {
            return movies;
        }


    }
}