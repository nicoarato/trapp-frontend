import { ToastController } from '@ionic/angular';
import { selectType } from './select-type';


const showToast = async ({ message, type }) => {

    const t = new ToastController();

    const toast = await t.create({
        message,
        duration: 2000,
        color: selectType(type)
    });
    await toast.present();
};

export default showToast;
