import { Component } from '@angular/core';
import { NbWindowService } from '@nebular/theme';
import { FormComponent } from './components/form/form.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private windowService: NbWindowService) {}

  onOpenWindow(): void {
    this.windowService.open(FormComponent, { title: 'My Window' });
  }
}
