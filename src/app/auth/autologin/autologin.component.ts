import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autologin',
  templateUrl: './autologin.component.html',
  styleUrls: ['./autologin.component.scss']
})
export class AutologinComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      localStorage.setItem('currentUser', JSON.stringify({ token: 'Bearer ' + params.token }));
      this.router.navigate(['/profile/main']);
    });
  }

}
