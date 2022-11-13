import { LoadingController } from '@ionic/angular';

const showLoading = async ({ message, url, router}) => {
    const loadingCtrl = new LoadingController();
    const loading = await loadingCtrl.create({
      message,
      duration: 2000,
      spinner: 'bubbles'
    });

    loading.present();
    loading.onDidDismiss().then(() => {
      if(url) {
        router.navigateByUrl(url);
      }
    });
  };

export default showLoading;
