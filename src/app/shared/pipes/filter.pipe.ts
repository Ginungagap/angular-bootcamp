import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  transform(items: any [], searchtext: string, key: string) {
    if ( !items) {
      return [];
    }
    if ( !searchtext ) {
      return items;
    }
    searchtext = searchtext.toLowerCase();
    return items.filter(e1 => {
      return e1[key].toLowerCase().includes(searchtext);
    });
  }
}
