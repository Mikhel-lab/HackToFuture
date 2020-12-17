(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["containers-account-page-account-page-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/containers/account-page/account-page.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/containers/account-page/account-page.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"account-page-acount-overview\">\r\n  <div class=\"acount-page-all-acount-text uxg-display-4\">All Accounts</div>\r\n  <div class=\"account-page-acount-overview-info\">\r\n    <div class=\"round-icon\">\r\n      <mat-icon  aria-hidden=\"false\" aria-label=\"Account\">credit_card</mat-icon>\r\n    </div>\r\n    <div class=\"account-page-acount-overview-info-detail\">\r\n      <div class=\"uxg-subtitle-2\">Current Balance:</div>\r\n      <div class=\"uxg-h5\">{{allAcountsOverview.current | currency}}</div>\r\n    </div>\r\n    <div class=\"account-page-acount-overview-info-detail\">\r\n      <div class=\"uxg-subtitle-2\">Available Balance:</div>\r\n      <div class=\"uxg-h5\">{{allAcountsOverview.available | currency}}</div>\r\n    </div>\r\n    <div class=\"account-page-acount-overview-info-action\">\r\n      <button mat-flat-button color=\"primary\">Transfer</button>\r\n      <button mat-flat-button color=\"accent\">Withhold</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"account-page-content\">\r\n  <div class=\"account-page-content-column\">\r\n    <div class=\"uxg-h5\">Your Accounts:</div>\r\n    <ffdc-account-list [accounts]=\"accounts\"></ffdc-account-list>\r\n  </div>\r\n  <div class=\"account-page-content-column\">\r\n    <ffdc-account-transaction [showAllAccount]=\"true\"></ffdc-account-transaction>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/containers/account-page/account-page.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/containers/account-page/account-page.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".accounts-page {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  padding-bottom: 32px;\n}\n.accounts-page .account-page-acount-overview {\n  display: flex;\n  flex-grow: 100%;\n  margin-bottom: 32px;\n  padding: 32px 64px 32px 64px;\n  flex-direction: column;\n}\n.accounts-page .account-page-acount-overview .account-page-acount-overview-info {\n  display: flex;\n  padding-top: 32px;\n  align-items: center;\n}\n.accounts-page .account-page-acount-overview .account-page-acount-overview-info .account-page-acount-overview-info-detail {\n  display: flex;\n  flex-direction: column;\n  padding-right: 64px;\n}\n.accounts-page .account-page-acount-overview .account-page-acount-overview-info .account-page-acount-overview-info-detail .uxg-subtitle-2 {\n  padding-bottom: 8px;\n  margin-top: 16px;\n}\n.accounts-page .account-page-acount-overview .account-page-acount-overview-info .space {\n  flex: 1;\n}\n.accounts-page .account-page-acount-overview .account-page-acount-overview-info .account-page-acount-overview-info-action {\n  display: flex;\n  min-width: 196px;\n  justify-content: space-between;\n}\n.accounts-page .account-page-content {\n  padding-left: 64px;\n  padding-right: 64px;\n  display: flex;\n  flex-grow: 100%;\n}\n.accounts-page .account-page-content .account-page-content-column {\n  display: flex;\n  flex-direction: column;\n  flex: 50%;\n}\n@media all and (max-width: 600px) {\n  .accounts-page .account-page-acount-overview {\n    padding: 16px 32px 16px 32px;\n  }\n  .accounts-page .account-page-acount-overview .round-icon {\n    display: none;\n  }\n  .accounts-page .account-page-acount-overview .account-page-acount-overview-info {\n    padding-top: 8px;\n    flex-direction: column;\n    align-items: end;\n  }\n  .accounts-page .account-page-content {\n    padding-left: 16px;\n    padding-right: 16px;\n    flex-direction: column;\n  }\n  .accounts-page .account-page-content .account-page-content-column {\n    flex: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFpbmVycy9hY2NvdW50LXBhZ2UvQzpcXFByb2plY3RzXFxmZmRjLXNhbXBsZS1yZXRhaWwtd2ViYXBwL3NyY1xcYXBwXFxjb250YWluZXJzXFxhY2NvdW50LXBhZ2VcXGFjY291bnQtcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29udGFpbmVycy9hY2NvdW50LXBhZ2UvYWNjb3VudC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLE9BQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FDQ0Y7QURBRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FDRUo7QURBSTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDRU47QURETTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDR1I7QURGUTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7QUNJVjtBRERNO0VBQ0UsT0FBQTtBQ0dSO0FERE07RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtBQ0dSO0FEQ0U7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNDSjtBREFJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQ0VOO0FERUU7RUFDRTtJQUNFLDRCQUFBO0VDQUo7RURFSTtJQUNFLGFBQUE7RUNBTjtFREVJO0lBQ0UsZ0JBQUE7SUFDQSxzQkFBQTtJQUNBLGdCQUFBO0VDQU47RURHRTtJQUNFLGtCQUFBO0lBQ0EsbUJBQUE7SUFDQSxzQkFBQTtFQ0RKO0VERUk7SUFDRSxPQUFBO0VDQU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lcnMvYWNjb3VudC1wYWdlL2FjY291bnQtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY2NvdW50cy1wYWdlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXg6IDE7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nLWJvdHRvbTogMzJweDtcclxuICAuYWNjb3VudC1wYWdlLWFjb3VudC1vdmVydmlldyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1ncm93OiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzJweDtcclxuICAgIHBhZGRpbmc6IDMycHggNjRweCAzMnB4IDY0cHg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgIC5hY2NvdW50LXBhZ2UtYWNvdW50LW92ZXJ2aWV3LWluZm8ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBwYWRkaW5nLXRvcDogMzJweDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgLmFjY291bnQtcGFnZS1hY291bnQtb3ZlcnZpZXctaW5mby1kZXRhaWwge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA2NHB4O1xyXG4gICAgICAgIC51eGctc3VidGl0bGUtMiAge1xyXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5zcGFjZSB7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgfVxyXG4gICAgICAuYWNjb3VudC1wYWdlLWFjb3VudC1vdmVydmlldy1pbmZvLWFjdGlvbiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBtaW4td2lkdGg6IDE5NnB4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuYWNjb3VudC1wYWdlLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA2NHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNjRweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWdyb3c6IDEwMCU7XHJcbiAgICAuYWNjb3VudC1wYWdlLWNvbnRlbnQtY29sdW1uIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgZmxleDogNTAlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC5hY2NvdW50LXBhZ2UtYWNvdW50LW92ZXJ2aWV3IHtcclxuICAgICAgcGFkZGluZzogMTZweCAzMnB4IDE2cHggMzJweDtcclxuXHJcbiAgICAgIC5yb3VuZC1pY29uIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICAgIC5hY2NvdW50LXBhZ2UtYWNvdW50LW92ZXJ2aWV3LWluZm8ge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogZW5kO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuYWNjb3VudC1wYWdlLWNvbnRlbnQge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIC5hY2NvdW50LXBhZ2UtY29udGVudC1jb2x1bW4ge1xyXG4gICAgICAgIGZsZXg6IDFcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9XHJcbn1cclxuIiwiLmFjY291bnRzLXBhZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nLWJvdHRvbTogMzJweDtcbn1cbi5hY2NvdW50cy1wYWdlIC5hY2NvdW50LXBhZ2UtYWNvdW50LW92ZXJ2aWV3IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1ncm93OiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICBwYWRkaW5nOiAzMnB4IDY0cHggMzJweCA2NHB4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmFjY291bnRzLXBhZ2UgLmFjY291bnQtcGFnZS1hY291bnQtb3ZlcnZpZXcgLmFjY291bnQtcGFnZS1hY291bnQtb3ZlcnZpZXctaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmctdG9wOiAzMnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmFjY291bnRzLXBhZ2UgLmFjY291bnQtcGFnZS1hY291bnQtb3ZlcnZpZXcgLmFjY291bnQtcGFnZS1hY291bnQtb3ZlcnZpZXctaW5mbyAuYWNjb3VudC1wYWdlLWFjb3VudC1vdmVydmlldy1pbmZvLWRldGFpbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmctcmlnaHQ6IDY0cHg7XG59XG4uYWNjb3VudHMtcGFnZSAuYWNjb3VudC1wYWdlLWFjb3VudC1vdmVydmlldyAuYWNjb3VudC1wYWdlLWFjb3VudC1vdmVydmlldy1pbmZvIC5hY2NvdW50LXBhZ2UtYWNvdW50LW92ZXJ2aWV3LWluZm8tZGV0YWlsIC51eGctc3VidGl0bGUtMiB7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG4uYWNjb3VudHMtcGFnZSAuYWNjb3VudC1wYWdlLWFjb3VudC1vdmVydmlldyAuYWNjb3VudC1wYWdlLWFjb3VudC1vdmVydmlldy1pbmZvIC5zcGFjZSB7XG4gIGZsZXg6IDE7XG59XG4uYWNjb3VudHMtcGFnZSAuYWNjb3VudC1wYWdlLWFjb3VudC1vdmVydmlldyAuYWNjb3VudC1wYWdlLWFjb3VudC1vdmVydmlldy1pbmZvIC5hY2NvdW50LXBhZ2UtYWNvdW50LW92ZXJ2aWV3LWluZm8tYWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWluLXdpZHRoOiAxOTZweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmFjY291bnRzLXBhZ2UgLmFjY291bnQtcGFnZS1jb250ZW50IHtcbiAgcGFkZGluZy1sZWZ0OiA2NHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA2NHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWdyb3c6IDEwMCU7XG59XG4uYWNjb3VudHMtcGFnZSAuYWNjb3VudC1wYWdlLWNvbnRlbnQgLmFjY291bnQtcGFnZS1jb250ZW50LWNvbHVtbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXg6IDUwJTtcbn1cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5hY2NvdW50cy1wYWdlIC5hY2NvdW50LXBhZ2UtYWNvdW50LW92ZXJ2aWV3IHtcbiAgICBwYWRkaW5nOiAxNnB4IDMycHggMTZweCAzMnB4O1xuICB9XG4gIC5hY2NvdW50cy1wYWdlIC5hY2NvdW50LXBhZ2UtYWNvdW50LW92ZXJ2aWV3IC5yb3VuZC1pY29uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5hY2NvdW50cy1wYWdlIC5hY2NvdW50LXBhZ2UtYWNvdW50LW92ZXJ2aWV3IC5hY2NvdW50LXBhZ2UtYWNvdW50LW92ZXJ2aWV3LWluZm8ge1xuICAgIHBhZGRpbmctdG9wOiA4cHg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZW5kO1xuICB9XG4gIC5hY2NvdW50cy1wYWdlIC5hY2NvdW50LXBhZ2UtY29udGVudCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAuYWNjb3VudHMtcGFnZSAuYWNjb3VudC1wYWdlLWNvbnRlbnQgLmFjY291bnQtcGFnZS1jb250ZW50LWNvbHVtbiB7XG4gICAgZmxleDogMTtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/containers/account-page/account-page.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/containers/account-page/account-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: AccountPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageComponent", function() { return AccountPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/reducers */ "./src/app/store/reducers/index.ts");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actions */ "./src/app/store/actions/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/account.service */ "./src/app/services/account.service.ts");








let AccountPageComponent = class AccountPageComponent {
    constructor(accountService, store, cd) {
        this.accountService = accountService;
        this.store = store;
        this.cd = cd;
        this.accounts = [];
        this.allAcountsOverview = { current: 0, available: 0 };
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    ngOnInit() {
        this.store.dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_4__["AccountActions"].loadExtendedAndDetailedAccounts());
        this.store
            .pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_reducers__WEBPACK_IMPORTED_MODULE_3__["selectAllAccounts"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroyed$))
            .subscribe(accounts => {
            this.accounts = accounts;
            this.allAcountsOverview = this.accountService.getAllAcountOverview(accounts);
            this.cd.markForCheck();
        });
    }
    ngOnDestroy() {
        console.log("this.destoyed", this.destroyed$);
        this.destroyed$.next();
        this.destroyed$.complete();
    }
};
AccountPageComponent.ctorParameters = () => [
    { type: _services_account_service__WEBPACK_IMPORTED_MODULE_7__["AccountService"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
AccountPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ffdc-accounts-page',
        template: __webpack_require__(/*! raw-loader!./account-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/containers/account-page/account-page.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        host: {
            class: 'accounts-page'
        },
        styles: [__webpack_require__(/*! ./account-page.component.scss */ "./src/app/containers/account-page/account-page.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_account_service__WEBPACK_IMPORTED_MODULE_7__["AccountService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], AccountPageComponent);



/***/ }),

/***/ "./src/app/containers/account-page/account-page.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/containers/account-page/account-page.module.ts ***!
  \****************************************************************/
/*! exports provided: AccountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageModule", function() { return AccountPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _account_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account-page.component */ "./src/app/containers/account-page/account-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_account_list_account_list_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/account-list/account-list.module */ "./src/app/components/account-list/account-list.module.ts");
/* harmony import */ var _account_transaction_account_transaction_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../account-transaction/account-transaction.module */ "./src/app/containers/account-transaction/account-transaction.module.ts");
/* harmony import */ var _material_modules__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../material-modules */ "./src/app/material-modules.ts");








let AccountPageModule = class AccountPageModule {
};
AccountPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_account_page_component__WEBPACK_IMPORTED_MODULE_3__["AccountPageComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _material_modules__WEBPACK_IMPORTED_MODULE_7__["MaterialModules"],
            _components_account_list_account_list_module__WEBPACK_IMPORTED_MODULE_5__["AccountListModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                {
                    path: '',
                    component: _account_page_component__WEBPACK_IMPORTED_MODULE_3__["AccountPageComponent"]
                }
            ]),
            _account_transaction_account_transaction_module__WEBPACK_IMPORTED_MODULE_6__["AccountTransactionModule"]
        ],
        exports: [_account_page_component__WEBPACK_IMPORTED_MODULE_3__["AccountPageComponent"]],
        entryComponents: [_account_page_component__WEBPACK_IMPORTED_MODULE_3__["AccountPageComponent"]]
    })
], AccountPageModule);



/***/ })

}]);
//# sourceMappingURL=containers-account-page-account-page-module.js.map