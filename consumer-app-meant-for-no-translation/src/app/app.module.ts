import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WmlButtonZeroModule } from '@windmillcode/angular-wml-button-zero';
import enTranslations from "src/assets/i18n/en.json";
import { WMLModuleForRootParams, WMLNGXTranslateLoader} from '@windmillcode/wml-components-base'


let getI18NObj = (lang)=>{
  let i18nObj ={
    en:enTranslations
  }[lang]
  return i18nObj
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WmlButtonZeroModule
    // .forChild(
    //   new WMLModuleForRootParams({
    //     ngxTranslateLoaderFactory:()=> new WMLNGXTranslateLoader(getI18NObj)
    //   })
    // )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
