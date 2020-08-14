import { Component } from '@angular/core';
import { compileNgModuleFromRender2 } from '@angular/compiler/src/render3/r3_module_compiler';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {//number range -(25^3 - 1) and (25^3 - 1) aka 9007199254740991
  title = 'Calculator';
  public output:number = 0;
  public num1:number = 0;
  public operator:string = "";
  display(num:number){
    this.output = +(this.output.toString()+num.toString())
  }
  add(){
    
    if(this.operator==""){
      this.operator="add";
      this.num1 = this.output;
      this.output = 0;
    }
  }
  subtract(){
    if(this.operator==""){
      this.operator="subtract";
      this.num1 = this.output;
      this.output = 0;
    }
  }
  multiply(){
    if(this.operator==""){
      this.operator="multiply";
      this.num1 = this.output;
      this.output = 0;
    }
  }
  divide(){
    if(this.operator==""){
      this.operator="divide";
      this.num1 = this.output;
      this.output = 0;
    }
  }
  equals(){
    if(this.operator == "add"){
      this.output = this.num1+this.output;
    }else if(this.operator == "subtract"){
      this.output = this.num1-this.output;
    }else if(this.operator == "multiply"){
      this.output = this.num1*this.output;
    }else if(this.operator == "divide"){
      this.output = this.num1/this.output;
    }
    this.operator = "";
  }
  clear(){
    this.output = 0;
    this.num1 = 0;
    this.operator = "";
  }
  delete(){
    if(this.output.toString().length != 0){
      this.output = +(this.output.toString().substring(0,this.output.toString().length-1));
    }
  }
}
