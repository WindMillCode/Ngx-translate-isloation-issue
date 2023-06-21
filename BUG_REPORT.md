# Ngx translate isloation issue issue
## Links to issue
*[Youtube](https://www.youtube.com/watch?v=pxVXf4IjrJ0)
*[Github]()

## Expected Behavior
* if I use TranslateModule.forChild what should happen in the production application, only the buttons should update not the whole application



## Current Behavior
* if I dont want translate behavior the whole application updates



## Possible Solution
* were willing to take some time asside to look at the issue


## Steps to Reproduce


1. run consumer app meant for  ngx- translate
2. run conusmer meant for no translate
3. go to the app module to toggle the forChild on wmlbutton zero
4. if the app is not doing any translation you can toggle it for the component, however if the app is doing it for the whole app, you cannot disable it for the component or even give it is own context, it will use whatever came first

## Environment
@angular-devkit/architect       0.1601.0
@angular-devkit/build-angular   16.1.0
@angular-devkit/core            16.1.0
@angular-devkit/schematics      16.1.0
@angular/cli                    16.1.0
@schematics/angular             16.1.0
ng-packagr                      16.1.0
rxjs                            7.5.7
typescript                      5.0.4

"@ngx-translate/core": "^15.0.0",
"@ngx-translate/http-loader": "^8.0.0",

## Files


## Detailed Description

## Possible Implementation


## Additional Issues
