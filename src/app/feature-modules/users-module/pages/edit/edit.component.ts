import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  constructor(
    private router: ActivatedRoute,
    private service: UserService,
    private fb: FormBuilder
  ) { }
  
  userEdit = new FormGroup({
    userName: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  })
  ngOnInit(): void {
    console.log(this.router.snapshot.params.id);
    this.service.userId(this.router.snapshot.params.id).subscribe((result) => {
      this.userEdit = new FormGroup({
        userName: new FormControl(result['userName']),
        firstName: new FormControl(result['firstName']),
        lastName: new FormControl(result['lastName']),
      })
  })
  
}
onUpdate() {
  this.service.updateUser(this.router.snapshot.params.id,this.userEdit.value).subscribe((result) => {
    console.log(result, "User updated succesfully");
  })
 }
 
  

  
}

