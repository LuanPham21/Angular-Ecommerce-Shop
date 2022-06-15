import { AfterViewInit, Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from '../../../core/base-component';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/takeUntil';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends BaseComponent implements OnInit {
  public categories:any;
  public products:any;
  public blogs:any;
  public product_detail:any;
  public products_best_selling:any;
  public page = 1;
  public pageSize = 10;
  public slider: any;
  constructor(injector: Injector) {
    super(injector);
  }
  ngOnInit(): void {
    
    window.scroll(0,0);

    this._api.get('/api/LoaiSanPham/get-all').takeUntil(this.unsubscribe).subscribe(res => {
      this.categories = res;
      setTimeout(() => {
        this.loadScripts();
      });
    }); 
    this._api.post('/api/ThongKe/get-sanpham-banchay',{page: this.page, pageSize: this.pageSize}).takeUntil(this.unsubscribe).subscribe(res => {
      this.products_best_selling = res.data;
      setTimeout(() => {
        this.loadScripts();
      });
    });
    this._api.post('/api/SanPham/search',{page: this.page, pageSize: this.pageSize}).takeUntil(this.unsubscribe).subscribe(res => {
      this.products = res.data;
      setTimeout(() => {
        this.loadScripts();
      });
    });
    this._api.post('/api/TinTuc/search',{page: this.page, pageSize: this.pageSize}).takeUntil(this.unsubscribe).subscribe(res => {
      this.blogs = res.data;
      setTimeout(() => {
        this.loadScripts();
      });
    });
    this.slider = "2fa99344-bbf2-4ea5-96f8-bdf1ed32523c";
  }
  addToCart(it) { 
    this._cart.addToCart(it);
    this._product_detail.detailProduct(it);   
    alert('Thêm thành công!'); 
  }
  detailProduct(it) { 
    this._product_detail.detailProduct(it);
  }
}
