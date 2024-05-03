import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { Course } from './model/course';
import { Observable, catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit{

  courses$: Observable<Course[]>;
  displayedColumns = ['name', 'category'];
 // coursesService: CoursesService;
  constructor(private courseService: CoursesService,
    public dialog: MatDialog
  ){
    //this.courses=[];
    // this.coursesService = new CoursesService();
     this.courses$ = this.courseService.list().
     pipe(
      catchError(error =>{
        this.onError('Erro ao carregar cursos') //mensagem de erro do pop up

        return of ([])
      })
     );
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  onError(errorMsg:String) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }
}

