import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'First Activity';

  posts = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras risus diam, molestie dapibus nulla quis, facilisis luctus felis. Aenean sit amet risus ipsum. Aliquam ligula sapien, dictum ac bibendum vehicula, tincidunt quis augue. Etiam suscipit diam nisl. Vestibulum at eros eu urna vestibulum placerat in a ex. Proin vitae odio fermentum, pharetra augue a, malesuada eros. Nam vestibulum malesuada pharetra.',
      create_at: new Date('2016-12-17T03:24:00'),
      loveIts: 0
    },
    {
      title: 'La fouine Lache enfin sa Double mixtape',
      content: 'Integer blandit cursus felis nec ultrices. Curabitur est augue, elementum vel nisi placerat, sodales efficitur justo. Morbi mi nisi, euismod eget gravida vel, condimentum quis leo. Phasellus nec convallis tortor. Etiam feugiat metus eu magna sagittis venenatis. Aliquam rutrum erat non condimentum suscipit. Nullam semper vitae dolor euismod suscipit. Morbi vel nibh nisl. Fusce nec nulla ac lorem tempor venenatis sit amet id felis. Cras blandit, tellus ac rhoncus venenatis, arcu nibh imperdiet urna, quis aliquam elit lectus non metus. Morbi ultricies nibh vel tortor dapibus, id laoreet ipsum rutrum. Proin elementum, libero vitae tristique accumsan, ligula dui tincidunt enim, vel congue libero risus sit amet orci.',
      create_at: new Date(),
      loveIts: 0
    },
    {
      title: 'Booba défonce l\'U Arena',
      content: 'Aenean lobortis lorem ultrices porta vehicula. Suspendisse a sollicitudin augue. Phasellus a egestas leo. Pellentesque hendrerit tristique ligula in maximus. Sed tincidunt scelerisque sollicitudin. Sed dolor velit, bibendum eget nisi feugiat, dictum sagittis nisl. Sed tincidunt ullamcorper magna, nec ullamcorper quam feugiat a. Nulla mollis sapien at nunc feugiat, sit amet eleifend purus congue. Suspendisse quis velit sed justo efficitur laoreet ut vitae ipsum.',
      create_at: new Date(),
      loveIts: 0
    }
  ];
}
