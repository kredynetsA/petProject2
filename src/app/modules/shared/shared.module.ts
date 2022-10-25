import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardComponent} from "./ui-components/card/card.component";
import {StarRatingComponent} from "./ui-components/star-rating/star-rating.component";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {MatButtonModule} from "@angular/material/button";
import {HeaderComponent} from "./ui-components/header/header.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";



@NgModule({
  declarations: [
    CardComponent,
    StarRatingComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  exports: [
    CardComponent,
    StarRatingComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
