import { Component } from '@angular/core';
import { ContentList } from '../helper-files/content-list';
@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {
  contentList:ContentList;
  constructor(){
    this.contentList = new ContentList();

    this.contentList.addContent({
      id: 3,
      title: 'Vikings: Raiders of the Court',
      description: 'Immerse yourself in the world of Vikings as they take on a new challenge - basketball. Watch as fierce warriors exchange their weapons for basketballs and battle it out on the court to prove who is the true champion of Midgard.',
      creator: 'Viking Productions',
      imgURL: 'https://i.guim.co.uk/img/media/77706c0d052bc4610841bdb54e9f856fe96738da/0_371_5568_3341/master/5568.jpg?width=620&dpr=2&s=none',
      type: 'Sports Drama',
      tags: ['Vikings', 'Basketball', 'Epic'],
    });
    

    this.contentList.addContent({
      id: 4,
      title: 'Viking Saga: Hoops of Valhalla',
      description: 'Witness the epic journey of Viking warriors as they strive to earn a place in the legendary Hoops of Valhalla. This basketball saga unfolds with intense battles, camaraderie, and the pursuit of glory in the afterlife.',
      creator: 'Nordic Sports Network',
      imgURL: 'https://phantom-marca.unidadeditorial.es/20be0fd3e0828280f7772526bc7ece86/resize/828/f/jpg/assets/multimedia/imagenes/2022/02/23/16456382976841.jpg',
      type: 'Sports Fantasy',
      tags: ['Vikings', 'Basketball', 'Valhalla'],
    });

    this.contentList.addContent({
      id: 5,
      title: 'Viking Slam Dunk: Battle for Asgard',
      description: 'Join the Viking Slam Dunk tournament as warriors from different clans compete for supremacy and the coveted title of the Dunk Master of Asgard. Expect breathtaking dunks, strategic plays, and a fusion of Viking valor with modern-day basketball flair.',
      creator: 'Asgard Entertainment',
      imgURL: 'https://assetsio.reedpopcdn.com/v1.jpg_Q2qN8fw.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp',
      type: 'Action Sports',
      tags: ['Vikings', 'Dunk Master', 'Asgard'],
    });
  }
}