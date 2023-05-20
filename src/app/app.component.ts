import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
//import { COURSES } from "../db-data";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  courses;

  constructor(private http: HttpClient) {}

  ngOnInit(){
    this.http
      .get("/api/courses")
      .subscribe((courses) => (this.courses = courses));
  }
}
