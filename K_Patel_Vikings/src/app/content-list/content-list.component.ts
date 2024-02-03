import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { NgFor, NgStyle } from '@angular/common';
import { ContentCardComponent } from '../content-card/content-card.component';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [NgFor, NgStyle, ContentCardComponent],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss',
})
export class ContentListComponent {
  contentArray: Content[];

  constructor() {
    this.contentArray = [
      {
        id: 1,
        title: 'Vikings: Raiders of the Court',
        description: 'Immerse yourself in the world of Vikings as they take on a new challenge - basketball. Watch as fierce warriors exchange their weapons for basketballs and battle it out on the court to prove who is the true champion of Midgard.',
        creator: 'Viking Productions',
        imgURL: 'https://i.guim.co.uk/img/media/77706c0d052bc4610841bdb54e9f856fe96738da/0_371_5568_3341/master/5568.jpg?width=620&dpr=2&s=none',
        type: 'Sports Drama',
        tags: ['Vikings', 'Basketball', 'Epic'],
      },
      {
        id: 2,
        title: 'Viking Saga: Hoops of Valhalla',
        description: 'Witness the epic journey of Viking warriors as they strive to earn a place in the legendary Hoops of Valhalla. This basketball saga unfolds with intense battles, camaraderie, and the pursuit of glory in the afterlife.',
        creator: 'Nordic Sports Network',
        imgURL: 'https://phantom-marca.unidadeditorial.es/20be0fd3e0828280f7772526bc7ece86/resize/828/f/jpg/assets/multimedia/imagenes/2022/02/23/16456382976841.jpg',
        type: 'Sports Fantasy',
        tags: ['Vikings', 'Basketball', 'Valhalla'],
      },
      {
        id: 3,
        title: 'Viking Slam Dunk: Battle for Asgard',
        description: 'Join the Viking Slam Dunk tournament as warriors from different clans compete for supremacy and the coveted title of the Dunk Master of Asgard. Expect breathtaking dunks, strategic plays, and a fusion of Viking valor with modern-day basketball flair.',
        creator: 'Asgard Entertainment',
        imgURL: 'https://assetsio.reedpopcdn.com/v1.jpg_Q2qN8fw.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp',
        type: 'Action Sports',
        tags: ['Vikings', 'Dunk Master', 'Asgard'],
      },
      {
        id: 4,
        title: 'Norse B-Ball Rivals: Battle Beyond Borders',
        description: 'Experience the fierce rivalry between Norse basketball teams as they battle beyond borders in this high-stakes tournament. Watch as teams from different realms clash on the court, showcasing their unique playing styles and skills.',
        creator: 'Norse Ball League',
        imgURL: 'https://surflegacy.net/wp-content/uploads/2023/10/viking.webp',
        type: 'Sports Competition',
        tags: ['Norse', 'Basketball Rivals', 'Tournament'],
      },
      {
        id: 5,
        title: 'Viking Legends: Court Conquest',
        description: 'Embark on a thrilling adventure with Viking legends as they engage in a Court Conquest to showcase their skills and determination on the basketball court. Witness epic plays and discover the untold stories behind their journey to victory.',
        creator: 'Saga Studios',
        imgURL: 'https://warfarehistorynetwork.com/wp-content/uploads/2022/07/M-Vikings-LEAD-4C-Nov14-copy-scaled.jpg',
        type: 'Historical Sports',
        tags: ['Vikings', 'Legends', 'Court Conquest'],
      },
      {
        id: 6,
        title: 'Viking Hoop Chronicles: The Dunk Prophecy',
        description: 'Unravel the mysteries of the Dunk Prophecy as Viking athletes strive to fulfill the ancient foretelling through their breathtaking dunks and unparalleled basketball prowess. Join them on a quest that transcends the boundaries of sports and destiny.',
        creator: 'Mystic Sports Network',
        imgURL: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Rorik_by_H._W._Koekkoek.jpg',
        type: 'Fantasy Sports',
        tags: ['Vikings', 'Hoop Chronicles', 'Dunk Prophecy'],
      },
    ];    
  }
}