import { Component} from '@angular/core';
import {MainhomeTemplate} from '../../../components/templates/mainhome-template/mainhome-template.component';

@Component({
  selector: 'app-mainhome',
  imports: [
    MainhomeTemplate,
  ],
  templateUrl: './mainhome.component.html',
  styleUrls: ['./mainhome.component.css']
})
export class MainhomePage {
  links = [
    { url: '/descriptions?button', name: '', icon: 'fa-solid fa-bars' },
    { url: '/descriptions?badge', name: '', icon: 'fa-solid fa-plus' },
    { url: '/descriptions?input', name: 'profile', icon: 'fa-solid fa-user' },
    { url: '/descriptions?icon', name: 'home', icon: 'fa-solid fa-house' },
    { url: '/descriptions?card', name: 'explore', icon: 'fa-solid fa-compass' },
    { url: '/descriptions?progressspinner', name: 'contac us', icon: 'fa-solid fa-inbox' },
  ];
  cards: { image: string, title: string, description: string, link: string }[] = [
    {
      image: 'https://previews.123rf.com/images/rastudio/rastudio1604/rastudio160401184/54573564-%C3%ADcono-de-dibujo-de-%C3%A1tomo-para-web-m%C3%B3vil-e-infograf%C3%ADa-mano-dibuja-el-icono-aislado-vector.jpg',
      title: 'Atom Gallery',
      description: 'Select and use one of our atoms',
      link: '/'
    },
    {
      image: 'https://cdn-icons-png.flaticon.com/512/1307/1307714.png',
      title: 'Users',
      description: 'A list of our users\n' +
        'where you can see their information',
      link: '/crud'
    }
  ];
}
