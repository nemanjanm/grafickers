import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
@Component({
  selector: 'app-hompage',
  standalone: true,
  imports: [CardModule],
  templateUrl: './hompage.component.html',
  styleUrl: './hompage.component.css'
})
export class HompageComponent {

}
