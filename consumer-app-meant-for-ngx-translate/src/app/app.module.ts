import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { WmlButtonZeroModule } from '@windmillcode/angular-wml-button-zero';
import enTranslations from "src/assets/i18n/en.json";
import { WMLModuleForRootParams, WMLNGXTranslateLoader} from '@windmillcode/wml-components-base'
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';


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
    WmlButtonZeroModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: ()=>new WMLNGXTranslateLoader(getI18NObj)
      }
    }),
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
