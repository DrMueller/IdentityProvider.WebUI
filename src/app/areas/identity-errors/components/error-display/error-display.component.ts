import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IdentityErrorsDataService } from '../../services/identity-errors-data.service';
import { IdentityError } from '../../models';

@Component({
  selector: 'app-error-display',
  templateUrl: './error-display.component.html',
  styleUrls: ['./error-display.component.scss']
})
export class ErrorDisplayComponent implements OnInit {
  public error: IdentityError = new IdentityError();

  public constructor(
    private route: ActivatedRoute,
    private dataService: IdentityErrorsDataService) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(async queryParams => {
      const errorId = queryParams.get('errorId') ?? '';
      this.error = await this.dataService.fetchErrorAsync(errorId);
    });
  }
}
