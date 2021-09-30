import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Book} from "../../model/book";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
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
      this.showEditBook(this.id);
    })

  }

  editBook(id:any) {
      this.http.put<Book>(`http://localhost:3000/books/${id}`, this.bookFormGrounp.value).subscribe((data) => {
      alert("edit ok - " + data.author)
      this.router.navigate([""])
    })
  }

  showEditBook(id:any) {
    this.http.get<Book>(`http://localhost:3000/books/${id}`).subscribe((data) => {
      this.bookFormGrounp.get('id')?.setValue(data.id);
      this.bookFormGrounp.get('title')?.setValue(data.title);
      this.bookFormGrounp.get('author')?.setValue(data.author);
      this.bookFormGrounp.get('description')?.setValue(data.description);
    })


  }

}
