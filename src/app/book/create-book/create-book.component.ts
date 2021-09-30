import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Book} from "../../model/book";

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  bookFormGrounp!: FormGroup;

  constructor(private router: Router,private http: HttpClient) {

  }

  ngOnInit(): void {
    this.bookFormGrounp = new FormGroup({
      id: new FormControl(0, [Validators.required, Validators.min(0)]),
      title: new FormControl("", [Validators.required, Validators.minLength(3)]),
      author: new FormControl("", [Validators.required, Validators.minLength(6)]),
      description: new FormControl("", [Validators.required, Validators.minLength(10)]),

    })
  }

  createBook() {
    this.http.post<Book>('http://localhost:3000/books', this.bookFormGrounp.value).subscribe((data) => {
      alert("create thành công - " + data.author)
      this.router.navigate([""])
    })
  }

}
