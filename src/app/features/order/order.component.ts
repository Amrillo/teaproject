import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject, Subscription, of, switchMap, timer } from 'rxjs';
import { ProductsService } from 'src/app/shared/services/products.service';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  formVisible: boolean = true ;
  showError: boolean = false;
  isDisabled: boolean = false;
  private subs: Subscription = new Subscription ;
  private submitOrder = new Subject<void>();

  errorTimer$: Observable<number> = timer(3000);
  orderForm =  this.fb.group({
    name: ['', [Validators.required, Validators.pattern('^[A-Z][a-z]+')]],
    last_name: ['',[Validators.required, Validators.pattern('^[A-Z][a-z]+')]],
    phone: ['', [Validators.required, Validators.pattern('^\\+?\\d{11}$')]],
    country: ['', Validators.required],
    zip: ['', [Validators.required,  Validators.pattern('\\d{3,6}')]],
    product: [''],
    address: ['', [Validators.required, Validators.pattern('^[A-Za-zА-Яа-я0-9\\s\-/]+$')]],
    comment: ['']
  })

  get name() {
    return this.orderForm.get('name')
  }
  get lastName() {
    return this.orderForm.get('last_name')
  }
  get phone() {
    return this.orderForm.get('phone')
  }

  get country() {
    return this.orderForm.get('country')
  }
  get zip() {
    return this.orderForm.get('zip')
  }
  get address() {
    return this.orderForm.get('address')
  }

  constructor(private fb: FormBuilder, private acivatedRoute: ActivatedRoute,
    private productService : ProductsService  ) {

  }

  ngOnInit(): void {
    this.subs.add(
      this.acivatedRoute.queryParams.subscribe((params) => {
        if(params['product']) {
          this.orderForm.patchValue({
            product: params['product']
           });
        }
         this.orderForm.get('product')?.disable();
        }
      )
    );
    this.subs.add(
      this.submitOrder.pipe(
        switchMap(()=>{
          console.log('submit');
          if(this.orderForm.valid) {
            this.isDisabled = true ;
            return this.productService.createOrder({
              name: this.orderForm.controls.name.value,
              last_name: this.orderForm.controls.last_name.value,
              phone:this.orderForm.controls.phone.value,
              country: this.orderForm.controls.country.value,
              zip: this.orderForm.controls.zip.value,
              product: this.orderForm.controls.product.value,
              address: this.orderForm.controls.address.value,
              comment: this.orderForm.controls.comment.value,
            })
          } else {
            return of(null);
          }
        })
      ).subscribe(response=> {
        if(response?.success){
          this.isDisabled = false;
          this.formVisible = false;
          this.errorTimer$.subscribe(()=> {
            this.formVisible = true;
            this.orderForm.reset();
          })
        } else {
          this.showError = true
          this.errorTimer$.subscribe(()=> {
            this.showError = false
          })
        }
      })
    )
  }

  clickIn() {
    this.submitOrder.next();
  }

  ngOnDestroy(): void {
      this.subs.unsubscribe();
  }
}
