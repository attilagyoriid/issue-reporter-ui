import { Component } from "@angular/core";
import { TokenService } from "./services/token.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "issue-reporter";

  constructor(private tokenService: TokenService) {}
  getToken() {
    this.tokenService.getToken('bob','bob').subscribe(res => {
      console.log(res);
      this.getUsernameByToken(res);
    });
  }

  getUsernameByToken(token) {
    this.tokenService.getUsernameByToken(token).subscribe(res => {
      console.log(res);
    });
  }
}
