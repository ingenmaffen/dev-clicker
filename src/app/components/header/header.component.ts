import { Component } from "@angular/core";

@Component({
    selector: "dc-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
    public money: number = 0;
}