import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-pagina-camera',
  templateUrl: './pagina-camera.page.html',
  styleUrls: ['./pagina-camera.page.scss'],
})
export class PaginaCameraPage implements OnInit {

  galeria: any[] = [];

  constructor(private camera: Camera) { }

  ngOnInit() {
  }

  tirarFoto() {        // configuração da câmera
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      this.galeria.unshift({ data: 'data:image/jpeg;base64,' + imageData });
    }).catch(erro => {
      console.log("Erro ao tirar foto: " + erro);
    });

  }

}
