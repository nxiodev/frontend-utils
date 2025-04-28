import { Component, Input } from '@angular/core';
import { SidenavComponent } from '../../../components/organisms/sidenav/sidenav.component';
import { HeaderComponent } from '../../../components/organisms/header/header.component';
import { SecondheaderComponent } from '../../../components/organisms/secondheader/secondheader.component';
import { CardComponent } from '../../../components/molecules/card/card.component';
import { RouterLink } from '@angular/router';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-mainhome',
  imports: [
    SidenavComponent,
    SecondheaderComponent,
    CardComponent,
    RouterLink,
    NgForOf,
  ],
  templateUrl: './mainhome.component.html',
  styleUrls: ['./mainhome.component.css']
})
export class MainhomeComponent {
  @Input() links = [
    { url: '/descriptions?button', name: '', icon: 'fa-solid fa-bars' },
    { url: '/descriptions?badge', name: '', icon: 'fa-solid fa-plus' },
    { url: '/descriptions?input', name: 'profile', icon: 'fa-solid fa-user' },
    { url: '/descriptions?icon', name: 'home', icon: 'fa-solid fa-house' },
    { url: '/descriptions?card', name: 'explore', icon: 'fa-solid fa-compass' },
    { url: '/descriptions?progressspinner', name: 'contac us', icon: 'fa-solid fa-inbox' },
  ];
  @Input() cards: { image: string, title: string, description: string, link: string }[] = [
    {
      image: 'https://cdn-5f4f6e14c1ac180394b738c9.closte.com/wp-content/uploads/2018/03/01-1170x635.jpg',
      title: 'Running',
      description: 'Get our first course of running',
      link: 'login.png'
    },
    {
      image: 'https://i0.wp.com/blog.myswimpro.com/wp-content/uploads/2023/10/freestyle-stroke-breathing-technique-myswimpro.jpeg?resize=1024%2C683&ssl=1',
      title: 'Swimming',
      description: 'be part of our first course of swimming\n' +
        'with a very capable coach',
      link: '/some-page-2'
    },
    {
      image: 'https://www.geezersboxing.co.uk/static/frontend/Gsl/Geezers/en_GB/images/elite-pro-sparring.jpg',
      title: 'boxing',
      description: 'Do yoy want something to leave your\n' +
        'energy and focus? So we are your best choise',
      link: '/some-page-2'
    }
  ];
}
