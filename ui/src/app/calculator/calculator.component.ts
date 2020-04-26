import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit, OnDestroy {

  index: number;
  indicies: number[];
  calculatedPairs: any[];
  private subs: Subscription[] = [];
  postResult: boolean;

  constructor(private apiService: ApiServiceService) { }

  ngOnInit(): void {
    this.subs.push(this.apiService.getAllIndexes().subscribe((value: number[]) => {
      this.indicies = value;
    }));
    this.subs.push(this.apiService.getCurrentValue().subscribe((value: number) => {
      this.index = value;
    }));
  }

  onSubmit() {
    this.subs.push(this.apiService.postIndex(this.index).subscribe((message:any) => {
      this.postResult = message.working;
    }));
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.forEach(sub => sub.unsubscribe());
    }
  }

}
