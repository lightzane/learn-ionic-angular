"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_recipes_recipe-detail_recipe-detail_module_ts"],{

/***/ 2553:
/*!***********************************************************************!*\
  !*** ./src/app/recipes/recipe-detail/recipe-detail-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipeDetailPageRoutingModule": () => (/* binding */ RecipeDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _recipe_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recipe-detail.page */ 5518);




const routes = [
    {
        path: '',
        component: _recipe_detail_page__WEBPACK_IMPORTED_MODULE_0__.RecipeDetailPage
    }
];
let RecipeDetailPageRoutingModule = class RecipeDetailPageRoutingModule {
};
RecipeDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RecipeDetailPageRoutingModule);



/***/ }),

/***/ 7030:
/*!***************************************************************!*\
  !*** ./src/app/recipes/recipe-detail/recipe-detail.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipeDetailPageModule": () => (/* binding */ RecipeDetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _recipe_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recipe-detail-routing.module */ 2553);
/* harmony import */ var _recipe_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipe-detail.page */ 5518);







let RecipeDetailPageModule = class RecipeDetailPageModule {
};
RecipeDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _recipe_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.RecipeDetailPageRoutingModule
        ],
        declarations: [_recipe_detail_page__WEBPACK_IMPORTED_MODULE_1__.RecipeDetailPage]
    })
], RecipeDetailPageModule);



/***/ }),

/***/ 5518:
/*!*************************************************************!*\
  !*** ./src/app/recipes/recipe-detail/recipe-detail.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecipeDetailPage": () => (/* binding */ RecipeDetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_john_p_e_aguilar_OneDrive_Accenture_dev_learn_ionic_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_recipe_detail_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./recipe-detail.page.html */ 4520);
/* harmony import */ var _recipe_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recipe-detail.page.scss */ 8302);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _recipes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../recipes.service */ 1559);







let RecipeDetailPage = class RecipeDetailPage {
    constructor(route, router, recipesService, alertController) {
        this.route = route;
        this.router = router;
        this.recipesService = recipesService;
        this.alertController = alertController;
    }
    ngOnInit() {
        this.route.paramMap.subscribe((paramMap) => {
            if (!paramMap.has('recipeId')) {
                this.router.navigate(['/recipes']);
                return;
            }
            const recipeId = paramMap.get('recipeId');
            this.loadedRecipe = this.recipesService.getRecipe(recipeId);
        });
    }
    onDeleteRecipe() {
        this.alertController.create({
            header: 'Are you sure?',
            message: 'Do you really want to delete the recipe?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Delete',
                    handler: () => {
                        this.recipesService.deleteRecipe(this.loadedRecipe.id);
                        // TODO find if this is a bug (array list not updated after delete IF NO delay in router.navigate)
                        this.router.navigate(['/recipes']);
                    }
                }
            ]
        }).then((alertEl) => {
            alertEl.present();
        });
    }
};
RecipeDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _recipes_service__WEBPACK_IMPORTED_MODULE_2__.RecipesService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController }
];
RecipeDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-recipe-detail',
        template: _C_Users_john_p_e_aguilar_OneDrive_Accenture_dev_learn_ionic_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_recipe_detail_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_recipe_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], RecipeDetailPage);



/***/ }),

/***/ 4520:
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/recipes/recipe-detail/recipe-detail.page.html ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/recipes\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title>{{ loadedRecipe.title }}</ion-title>\n\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"onDeleteRecipe()\">\n        <ion-icon name=\"trash\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row>\n      <ion-col class=\"ion-no-padding\">\n        <ion-img [src]=\"loadedRecipe.imageUrl\"></ion-img>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <h1 class=\"ion-text-center\">{{ loadedRecipe.title }}</h1>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-list>\n          <ion-item *ngFor=\"let ingredient of loadedRecipe.ingredients\">\n            {{ ingredient }}\n          </ion-item>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ 8302:
/*!***************************************************************!*\
  !*** ./src/app/recipes/recipe-detail/recipe-detail.page.scss ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNpcGUtZGV0YWlsLnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_recipes_recipe-detail_recipe-detail_module_ts.js.map