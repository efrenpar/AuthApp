import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  miForm:FormGroup = this.fb.group({
    name:['test1',[Validators.required]],
    email:['test1@test.com',[Validators.required,Validators.email]],
    password:['123456',[Validators.required,Validators.minLength(6)]]
  });

  constructor(private fb:FormBuilder,
              private router:Router,
              private authService:AuthService) { }

  ngOnInit(): void {
  }

  registro(){

    const {name,email,password} = this.miForm.value;

    this.authService.registro(name,email,password)
      .subscribe(ok=>{
        console.log(ok);
        if(ok===true){
          this.router.navigateByUrl('/dashboard')
        }else{
          Swal.fire('Error',ok,'error');
        }
      })

    // console.log(this.miForm.valid);
    // this.router.navigateByUrl('/dashboard')
  }

}
