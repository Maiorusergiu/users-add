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
    username: new FormControl(''),
    firstname: new FormControl(''),
    lastname: new FormControl(''),
  })
  ngOnInit(): void {
    console.log(this.router.snapshot.params.id);
    this.service.userId(this.router.snapshot.params.id).subscribe((result) => {
      this.userEdit = new FormGroup({
        username: new FormControl(result['username']),
        firstname: new FormControl(result['firstname']),
        lastname: new FormControl(result['lastname']),
      })
  })
  
}
onUpdate() {
  this.service.updateUser(this.router.snapshot.params.id,this.userEdit.value).subscribe((result) => {
    console.log(result, "User updated succesfully");
    this.userEdit.reset();
  })
 }
 
  

  
}

