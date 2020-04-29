import {Component} from "@angular/core";
import { Template } from '@angular/compiler/src/render3/r3_ast';

// esta es la instruccion para ejecutar el decorador es con @

@Component({
    selector:'app-header', //selector que indica el nombre que utilizara  mi componente en otros lugares
    templateUrl: './header.component.html'
})

export class HeaderComponent{

}

