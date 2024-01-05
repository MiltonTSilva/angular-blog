import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent implements OnInit {
  private id: string | null = '';
  @Input()
  photoCover: string = '';
  @Input()
  contentTitle: string = '';
  @Input()
  contentDescription: string = '';
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    console.log(this.route.paramMap.subscribe((value) => value.get('id')));
    this.route.paramMap.subscribe((value) => (this.id = value.get('id')));
    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null) {
    const result = dataFake.filter((article) => article.id == id)[0];

    if (result) {
      this.photoCover = result.photoCover;
      this.contentTitle = result.title;
      this.contentDescription = result.description;
    }
  }
}
