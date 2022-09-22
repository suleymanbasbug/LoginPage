import PgLoginDesign from 'generated/pages/pgLogin';
import { withDismissAndBackButton } from '@smartface/mixins';
import { Router, Route } from '@smartface/router';

export default class PgLogin extends withDismissAndBackButton(PgLoginDesign) {
  constructor(private router?: Router, private route?: Route) {
    super({});
    this.button1.on('press', ()=>{
        this.router.push('/btb')
    })
  }

  /**
   * @event onShow
   * This event is called when the page appears on the screen (everytime).
   */
  onShow() {
    super.onShow();
    this.initBackButton(this.router); //Addes a back button to the page headerbar.
  }

  /**
   * @event onLoad
   * This event is called once when the page is created.
   */
  onLoad() {
    super.onLoad();
  }
}
