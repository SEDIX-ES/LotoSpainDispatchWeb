import { Component, Input } from '@angular/core';
import { InterfazReview } from 'src/app/models/ReviewInterface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss', './queries/card.component-mobile.scss']
})
export class CardComponent {
  @Input() value!: InterfazReview;

}
