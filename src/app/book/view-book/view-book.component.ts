import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Book} from "../../model/book";

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {
  bookFormGrounp!: FormGroup;
  id ?: number;

  constructor( private activeRouter: ActivatedRoute, private router: Router, private http: HttpClient) {

  }

  ngOnInit(): void {
    this.bookFormGrounp = new FormGroup({
      id: new FormControl(0, [Validators.required, Validators.min(0)]),
      title: new FormControl("", [Validators.required, Validators.minLength(3)]),
      author: new FormControl("", [Validators.required, Validators.minLength(6)]),
      description: new FormControl("", [Validators.required, Validators.minLength(6)]),

    })
    this.activeRouter.paramMap.subscribe((paramMap: ParamMap) =>{
      // @ts-ignore
      this.id = +paramMap.get('id');
      this.showBook(this.id);
    })

  }


  showBook(id:any) {
    this.http.get<Book>(`http://localhost:3000/books/${id}`).subscribe((data) => {
      this.bookFormGrounp.get('id')?.setValue(data.id);
      this.bookFormGrounp.get('title')?.setValue(data.title);
      this.bookFormGrounp.get('author')?.setValue(data.author);
      this.bookFormGrounp.get('description')?.setValue(data.description);
    })


  }


}
