import { ApiService } from './../../service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss'],
})
export class ClimaPage implements OnInit {

  constructor(private apiService: ApiService) {
    this.getData();
  }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  lista: any = [];
  getData(){
  this.apiService.getData().subscribe(data => {
  // eslint-disable-next-line @typescript-eslint/dot-notation
  this.lista = data['results']; console.log(data);
});
}
 ngOnInit() {
 }

}
