import { Pipe, PipeTransform } from '@angular/core';

/*
 * Sums a given field from a list of objects
 * Takes an array of objects and a fiel<<d name.
 * Usage:
 *   array | sum:fieldName
 * Example:
 *   Input: {{ [{foo:1}, {foo:2}] |  sum:'foo'}}
 *   Output: 3
 */
@Pipe({name: 'sum', pure: false})
export class SumPipe implements PipeTransform {

   transform(collection: any[], fieldName: string): number {
       let sum = 0.0;
       if (collection) {
           sum = collection.reduce( (cur,next) => {
               let nextVal = parseFloat(next[fieldName]);
               return cur + (isNaN(nextVal)?0:nextVal);
           }, 0.0);
       }

       return sum;
   }
}

