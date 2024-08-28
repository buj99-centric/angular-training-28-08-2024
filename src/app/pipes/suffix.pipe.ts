import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'suffix',
    pure: true,
    standalone: true
})
export class SuffixPipe implements PipeTransform {
    transform(value: string | undefined, suffix: string, occurences: number = 1) {
        return value + suffix.repeat(occurences);
    }
}