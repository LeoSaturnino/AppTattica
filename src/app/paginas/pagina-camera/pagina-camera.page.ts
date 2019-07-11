import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ActionSheetController } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-pagina-camera',
  templateUrl: './pagina-camera.page.html',
  styleUrls: ['./pagina-camera.page.scss'],
})
export class PaginaCameraPage implements OnInit {

  galeria: any[] = [];
  foto;

  constructor(
    private camera: Camera, 
    private actionSheetController: ActionSheetController,
    private socialShare: SocialSharing
    ) { }

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
      console.log('Erro ao tirar foto: ' + erro);
    });
  }

  removerFoto(index) {
    console.log('Remover foto ', index);
    this.galeria.splice(index, 1);
  }

  compartilharFoto(index) {
    let foto = this.galeria[index];
    console.log('Compartilhar foto ', index);
    this.socialShare.share('', null, foto.data, null);
  }

  async exibirAcoes(index) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Foto',
      buttons: [
        {
          text: 'Apagar',
          icon: 'trash',
          handler: () => {
            this.removerFoto(index);
          }
        },
        {
          text: 'Compartilhar',
          icon: 'share',
          handler: () => {
            this.compartilharFoto(index);
          }
        },
        {
          text: 'Cancelar',
          icon: 'close',
          handler: () => {
          }
        }
      ]
    });
    await actionSheet.present();
  }

}
