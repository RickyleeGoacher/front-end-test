import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.less']
})
export class MainContentComponent implements OnInit {

  constructor() { }

  primaryMainContentImage = {
    image: '../../../assets/images/enhance-your-home-outdoor-furniture.jpg',
    text: 'Outdoor Furniture'
  }

  imageSetOne = [
    {
      image: '../../../assets/images/enhance-your-home-bathroom.jpg',
      text: 'Bathroom Accessories'
    },
    {
      image: '../../../assets/images/enhance-your-home-storage.jpg',
      text: 'Storage Solutions'
    },
    {
      image: '../../../assets/images/enhance-your-home-outdoor.jpg',
      text: 'Outdoor Living'
    },
    {
      image: '../../../assets/images/enhance-your-home-garden.jpg',
      text: 'Garden Ornaments'
    }
  ];

  secondaryMainContentImage = {
    image: '../../../assets/images/enhance-your-home-new.jpg',
    text: 'New In'
  };

  imageSetTwo = [
    {
      image: '../../../assets/images/enchance-your-home-dining.jpg',
      text: 'Dining Chairs'
    },
    {
      image: '../../../assets/images/enhance-your-home-buyers-choice.jpg',
      text: 'Buyers Choice'
    }
  ];

  ngOnInit(): void {
  }

}
