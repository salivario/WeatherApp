import { Pipe, PipeTransform } from '@angular/core';
import { getCountry } from 'iso-3166-1-alpha-2';

@Pipe({
  name: 'country'
})
export class CountryPipe implements PipeTransform {
  transform(countryCode: string): string {
    const countryName: string | undefined = getCountry(countryCode);
    return countryName ?? countryCode;
  }
}