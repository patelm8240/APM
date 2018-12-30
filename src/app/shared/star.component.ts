import { EventEmitter, Component, OnChanges, Input, Output, ComponentFactoryResolver } from "@angular/core";
import { NgOnChangesFeature } from "@angular/core/src/render3";
import { IProduct } from "../products/product";

@Component({
    selector:'pm-star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})
export class StarComponent implements OnChanges{
    @Input() rating:number;
    starWidth:number;
    @Input() product:IProduct[];
    @Output() ratingClicked: EventEmitter<string>=new EventEmitter<string>();
    ngOnChanges():void{
        this.starWidth = this.rating * 75 / 5;
    }
    onClick():void{
        this.ratingClicked.emit(`Rating is ${this.rating}. ${this.product}`);
    }
}