import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {
@Input() productRating: number = 0;
stars: {id: number, isActive: boolean}[] = [
  {
    id: 1,
    isActive: false
  },
  {
    id: 2,
    isActive: false
  },
  {
    id: 3,
    isActive: false
  },
  {
    id: 4,
    isActive: false
  },
  {
    id: 5,
    isActive: false
  },
];

  constructor() { }

  ngOnInit(): void {
    this.stars = this.stars.map((star) => {
      if (star.id <= this.productRating) {
        star.isActive = true;
      }
      return star
    });
    console.log(this.productRating);
  }

}
