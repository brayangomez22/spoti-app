import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'domseguro',
})
export class DomseguroPipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) {}

  transform(value: string): SafeResourceUrl {
    let url = `https://open.spotify.com/embed/track/${value}`;
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
