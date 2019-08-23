import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingDetailComponent } from "./booking-detail.component";
import { SeatsComponent } from './seats/seats.component';
import { FoodComponent } from './food/food.component';
import { PaymentComponent } from './payment/payment.component';


const routes: Routes = [
    {
        path: "", component: BookingDetailComponent, children: [
            { path: "", redirectTo: "seats", pathMatch: "full" },
            { path: "seats", component: SeatsComponent },
            { path: "fnb", component: FoodComponent },
            { path: "payment", component: PaymentComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BookingDetailRoutingModule { }
