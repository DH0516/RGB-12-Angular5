import { Component} from '@angular/core';
import { Task, Tasks } from '../task';
import { TasksServiceService } from '../tasks-service.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks: Task[] = Tasks;


  constructor( private service: TasksServiceService) { }

  ngOnInit() {
    this.service.getTasks()
      .subscribe(
        (result: Object) => {
          this.tasks = result as Task[];
        });
  }
  
  //Faulty example code was removed from here.
}
