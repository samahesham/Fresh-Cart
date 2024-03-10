import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "termText",
  standalone: true,
})
export class TermTextPipe implements PipeTransform {
  transform(text: string, limit: number): unknown {
    return text.split(" ").slice(0, limit).join(" ");
  }
}
