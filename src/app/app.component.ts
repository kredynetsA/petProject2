import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shop';
  products: any = [
    {
      img: 'https://e7.pngegg.com/pngimages/826/253/png-clipart-t-shirt-polo-shirt-clothing-sleeve-black-t-shirt-black-crew-neck-t-shirt-tshirt-fashion-thumbnail.png',
      title: 'T-shirt black',
      rating: 3,
      reviews: [
        {
          userId: '213',
          comment: 'user coment here',
          date: '20/09/22',
        }
      ],
      price: '20',
    },
    {
      img: 'https://e7.pngegg.com/pngimages/826/253/png-clipart-t-shirt-polo-shirt-clothing-sleeve-black-t-shirt-black-crew-neck-t-shirt-tshirt-fashion-thumbnail.png',
      title: 'T-shirt black',
      rating: 3,
      reviews: [
        {
          userId: '213',
          comment: 'user coment here',
          date: '20/09/22',
        }
      ],
      price: '20',
    },
  ]
}
