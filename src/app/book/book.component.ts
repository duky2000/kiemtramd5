import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Book} from "../model/book";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
bookFormGrroup ! : FormGroup;
list : Book[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getBook();
    this.bookFormGrroup = new FormGroup({
      id: new FormControl(0, [Validators.required, Validators.min(0)]),
      title: new FormControl("", [Validators.required, Validators.minLength(3)]),
      author: new FormControl("", [Validators.required, Validators.minLength(6)]),
      description: new FormControl("", [Validators.required, Validators.minLength(10)]),

    })
  }
  getBook() {
    this.http.get<Book[]>('http://localhost:3000/books').subscribe((data) => {
      this.list = data;
    })
  }

  deleteBook(id:any) {
    this.http.delete(`http://localhost:3000/books/${id}`).subscribe((data) => {
      alert("xóa ok");
      this.getBook();
    })
  }

}
