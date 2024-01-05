import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { dataFake } from '../../data/dataFake';
import { MenuComponent } from '../../components/menu/menu.component';
import { TitleComponent } from '../../components/title/title.component';
import { BigCardComponent } from '../../components/big-card/big-card.component';
import { SmallCardComponent } from '../../components/small-card/small-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MenuComponent,
    TitleComponent,
    BigCardComponent,
    SmallCardComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  id: string = '';

  listBigDataFake = dataFake.filter((x) => x.id == '1');
  listSmallDataFake = dataFake.filter((x) => x.id > '1');
}
