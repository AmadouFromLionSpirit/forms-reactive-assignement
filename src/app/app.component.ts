import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'forms-reactive-assignement';
  projectCreationForm: FormGroup;
  submitted = false;

  project = {
    projectname:'',
    email:'',
    projectstatus:''
  }

  ngOnInit() {
    this.projectCreationForm = new FormGroup( {
      'projectname': new FormControl(null, Validators.required, this.forbidenProjectName),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectstatus': new FormControl(null),
    }) 
        
    }

    onSubmit() {
      this.submitted = true;

      console.log(this.projectCreationForm);
      this.project.projectname = this.projectCreationForm.value.projectname;
      this.project.email = this.projectCreationForm.value.email;
      this.project.projectstatus = this.projectCreationForm.value.projectstatus;


     // this.projectCreationForm.reset();

      console.log("Project Name: " +this.project.projectname);
      console.log("Email: " +this.project.email);
      console.log("Project Status: " +this.project.projectstatus)
      
    }

    forbidenProjectName(control: FormControl): Promise<any> | Observable<any> {
      const promise = new Promise <any> ((resolve, reject) => {
        setTimeout(() => {
          if(control.value === 'Test') {
            resolve({'projectnameIsForbidden': true})
          }
          else {
            resolve(null);
          }
        }, 1500);
      });
      return promise;

    }
  }

