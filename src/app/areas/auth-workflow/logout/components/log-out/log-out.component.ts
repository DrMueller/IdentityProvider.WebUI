import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LogOutService } from '../../services/log-out.service';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.scss']
})
export class LogOutComponent implements OnInit {
  private logOutId: string;

  constructor(
    private route: ActivatedRoute,
    private logOutService: LogOutService) { }

  public confirmLogOut(): void {
    this.logOutService.logOut(this.logOutId);
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(sr => {
      this.logOutId = sr.get('logoutId')!;
    });
  }

}
