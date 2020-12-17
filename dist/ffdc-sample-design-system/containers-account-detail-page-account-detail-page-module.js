(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["containers-account-detail-page-account-detail-page-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/account-detail-card/account-detail-card.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/account-detail-card/account-detail-card.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <mat-card-title>\r\n    <div>{{ account.nickname }}</div>\r\n  </mat-card-title>\r\n  <mat-card-content>\r\n    <div class=\"account-card-detail-summary\">\r\n      <div class=\"uxg-avatar\"></div>\r\n      <div class=\"account-card-detail-summary-info\">\r\n        <div class=\"uxg-body-1\">Account Number</div>\r\n        <div class=\"uxg-subtitle-1\">{{ account.accountNumber }}</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"account-detail-card-content\">\r\n      <div class=\"account-detail-card-content__static\">\r\n        <div class=\"account-detail-card-content__line\">\r\n          <div class=\"uxg-subtitle-2 account-detail-card-content__line-title\">\r\n            Card type\r\n          </div>\r\n          <div>\r\n            {{ account.accountType || 'no available' }}\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"account-detail-card-content__line\">\r\n          <div class=\"uxg-subtitle-2 account-detail-card-content__line-title\">\r\n            Owner\r\n          </div>\r\n          <div>\r\n            {{ account.ownerName || 'no available' }}\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"account-detail-card-content__line\">\r\n          <div class=\"uxg-subtitle-2 account-detail-card-content__line-title\">\r\n            Created date\r\n          </div>\r\n          <div>\r\n            {{ account.openDate || 'no available' }}\r\n          </div>\r\n        </div>\r\n        <div class=\"account-detail-card-content__line\">\r\n          <div class=\"uxg-subtitle-2 account-detail-card-content__line-title\">\r\n            Alternate account number\r\n          </div>\r\n          <div>\r\n            {{ account.alternateAccountNumber || 'no available' }}\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <mat-divider [vertical]=\"true\"></mat-divider>\r\n      <div class=\"account-detail-card-content__status\">\r\n        <div class=\"account-detail-card-content__line\">\r\n          <div class=\"uxg-subtitle-2 account-detail-card-content__line-title\">Interest paid</div>\r\n          <div>{{accountInterestPaid.interestThisYear}}</div>\r\n        </div>\r\n        <div class=\"account-detail-card-content__line\">\r\n          <div class=\"uxg-subtitle-2 account-detail-card-content__line-title\"> Interest paid last year</div>\r\n          <div>{{accountInterestPaid.interestLastYear}}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/containers/account-detail-page/account-detail-page.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/containers/account-detail-page/account-detail-page.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"acount-detail-page-overview\">\r\n  <div class=\"acount-detail-page-overview-account-text uxg-display-4\">{{ acountsOverview.nickname }}</div>\r\n  <div class=\"acount-detail-page-overview-info\">\r\n    <div class=\"round-icon\">\r\n      <mat-icon aria-hidden=\"false\" aria-label=\"Account\">credit_card</mat-icon>\r\n    </div>\r\n    <div class=\"acount-detail-page-overview-info-detail\">\r\n      <div class=\"uxg-subtitle-2\">Current Balance:</div>\r\n      <div class=\"uxg-h5\">{{ acountsOverview.currentBalance | currency }}</div>\r\n    </div>\r\n    <div class=\"acount-detail-page-overview-info-detail\">\r\n      <div class=\"uxg-subtitle-2\">Available Balance:</div>\r\n      <div class=\"uxg-h5\">{{ acountsOverview.availableBalance | currency }}</div>\r\n    </div>\r\n    <div class=\"acount-detail-page-overview-info-action\">\r\n      <button mat-stroked-button>Transfer</button>\r\n      <button mat-stroked-button>Withhold</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n<ng-container *ngIf=\"account\">\r\n  <div class=\"account-page-detail-page-content\">\r\n    <div class=\"account-page-detail-page-content-column\">\r\n      <ffdc-account-detail-card [account]=\"account\"></ffdc-account-detail-card>\r\n    </div>\r\n    <div class=\"account-page-detail-page-content-column\">\r\n      <ffdc-account-transaction [accountId]=\"account.accountId\"></ffdc-account-transaction>\r\n    </div>\r\n  </div>\r\n</ng-container>\r\n"

/***/ }),

/***/ "./src/app/components/account-detail-card/account-detail-card.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/account-detail-card/account-detail-card.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".account-detail-card mat-card {\n  max-width: 629px;\n}\n.account-detail-card .account-card-detail-summary {\n  display: flex;\n  padding-top: 16px;\n  padding-bottom: 16px;\n  align-items: center;\n}\n.account-detail-card .account-card-detail-summary .account-card-detail-summary-info {\n  display: flex;\n  padding-left: 16px;\n  flex-direction: column;\n}\n.account-detail-card .account-detail-card-content {\n  display: flex;\n}\n.account-detail-card .account-detail-card-content .account-detail-card-content__static {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  padding-right: 16px;\n}\n.account-detail-card .account-detail-card-content .account-detail-card-content__status {\n  display: flex;\n  padding-left: 16px;\n  flex: 1;\n  flex-direction: column;\n}\n.account-detail-card .account-detail-card-content .account-detail-card-content__line {\n  display: flex;\n  padding-bottom: 8px;\n}\n.account-detail-card .account-detail-card-content .account-detail-card-content__line .account-detail-card-content__line-title {\n  min-width: 196px;\n}\n@media all and (max-width: 600px) {\n  .account-detail-card .account-detail-card-content {\n    flex-direction: column;\n  }\n  .account-detail-card .account-detail-card-content mat-divider {\n    display: none;\n  }\n  .account-detail-card .account-detail-card-content .account-detail-card-content__status {\n    padding-top: 8px;\n    padding-left: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hY2NvdW50LWRldGFpbC1jYXJkL0M6XFxQcm9qZWN0c1xcZmZkYy1zYW1wbGUtcmV0YWlsLXdlYmFwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xcYWNjb3VudC1kZXRhaWwtY2FyZFxcYWNjb3VudC1kZXRhaWwtY2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9hY2NvdW50LWRldGFpbC1jYXJkL2FjY291bnQtZGV0YWlsLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxnQkFBQTtBQ0FKO0FERUU7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FDQUo7QURDSTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FDQ047QURFRTtFQUNFLGFBQUE7QUNBSjtBRENJO0VBQ0UsYUFBQTtFQUNBLE9BQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDQ047QURDSTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxzQkFBQTtBQ0NOO0FEQ0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNDTjtBREFNO0VBQ0UsZ0JBQUE7QUNFUjtBRElFO0VBQ0U7SUFDRSxzQkFBQTtFQ0ZKO0VER0k7SUFDRSxhQUFBO0VDRE47RURHSTtJQUNFLGdCQUFBO0lBQ0EsaUJBQUE7RUNETjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hY2NvdW50LWRldGFpbC1jYXJkL2FjY291bnQtZGV0YWlsLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWNjb3VudC1kZXRhaWwtY2FyZCB7XHJcbiAgbWF0LWNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiA2MjlweDtcclxuICB9XHJcbiAgLmFjY291bnQtY2FyZC1kZXRhaWwtc3VtbWFyeSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAuYWNjb3VudC1jYXJkLWRldGFpbC1zdW1tYXJ5LWluZm8ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cclxuICAgIH1cclxuICB9XHJcbiAgLmFjY291bnQtZGV0YWlsLWNhcmQtY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLmFjY291bnQtZGV0YWlsLWNhcmQtY29udGVudF9fc3RhdGljIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleDogMTtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgcGFkZGluZy1yaWdodDogMTZweDtcclxuICAgIH1cclxuICAgIC5hY2NvdW50LWRldGFpbC1jYXJkLWNvbnRlbnRfX3N0YXR1cyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuICAgICAgZmxleDogMTtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuICAgIC5hY2NvdW50LWRldGFpbC1jYXJkLWNvbnRlbnRfX2xpbmUge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gICAgICAuYWNjb3VudC1kZXRhaWwtY2FyZC1jb250ZW50X19saW5lLXRpdGxlIHtcclxuICAgICAgICBtaW4td2lkdGg6IDE5NnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC5hY2NvdW50LWRldGFpbC1jYXJkLWNvbnRlbnQge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBtYXQtZGl2aWRlciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgICAuYWNjb3VudC1kZXRhaWwtY2FyZC1jb250ZW50X19zdGF0dXMge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLy8gLmFjY291bnQtZGV0YWlsLWNhcmQtY29udGVudF9fbGluZSB7XHJcbiAgICAgIC8vICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgLy8gfVxyXG5cclxuICAgIH1cclxuXHJcbiAgfVxyXG59XHJcbiIsIi5hY2NvdW50LWRldGFpbC1jYXJkIG1hdC1jYXJkIHtcbiAgbWF4LXdpZHRoOiA2MjlweDtcbn1cbi5hY2NvdW50LWRldGFpbC1jYXJkIC5hY2NvdW50LWNhcmQtZGV0YWlsLXN1bW1hcnkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLXRvcDogMTZweDtcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYWNjb3VudC1kZXRhaWwtY2FyZCAuYWNjb3VudC1jYXJkLWRldGFpbC1zdW1tYXJ5IC5hY2NvdW50LWNhcmQtZGV0YWlsLXN1bW1hcnktaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5hY2NvdW50LWRldGFpbC1jYXJkIC5hY2NvdW50LWRldGFpbC1jYXJkLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmFjY291bnQtZGV0YWlsLWNhcmQgLmFjY291bnQtZGV0YWlsLWNhcmQtY29udGVudCAuYWNjb3VudC1kZXRhaWwtY2FyZC1jb250ZW50X19zdGF0aWMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuLmFjY291bnQtZGV0YWlsLWNhcmQgLmFjY291bnQtZGV0YWlsLWNhcmQtY29udGVudCAuYWNjb3VudC1kZXRhaWwtY2FyZC1jb250ZW50X19zdGF0dXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIGZsZXg6IDE7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uYWNjb3VudC1kZXRhaWwtY2FyZCAuYWNjb3VudC1kZXRhaWwtY2FyZC1jb250ZW50IC5hY2NvdW50LWRldGFpbC1jYXJkLWNvbnRlbnRfX2xpbmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xufVxuLmFjY291bnQtZGV0YWlsLWNhcmQgLmFjY291bnQtZGV0YWlsLWNhcmQtY29udGVudCAuYWNjb3VudC1kZXRhaWwtY2FyZC1jb250ZW50X19saW5lIC5hY2NvdW50LWRldGFpbC1jYXJkLWNvbnRlbnRfX2xpbmUtdGl0bGUge1xuICBtaW4td2lkdGg6IDE5NnB4O1xufVxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmFjY291bnQtZGV0YWlsLWNhcmQgLmFjY291bnQtZGV0YWlsLWNhcmQtY29udGVudCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAuYWNjb3VudC1kZXRhaWwtY2FyZCAuYWNjb3VudC1kZXRhaWwtY2FyZC1jb250ZW50IG1hdC1kaXZpZGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5hY2NvdW50LWRldGFpbC1jYXJkIC5hY2NvdW50LWRldGFpbC1jYXJkLWNvbnRlbnQgLmFjY291bnQtZGV0YWlsLWNhcmQtY29udGVudF9fc3RhdHVzIHtcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/components/account-detail-card/account-detail-card.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/account-detail-card/account-detail-card.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AccountDetailCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountDetailCardComponent", function() { return AccountDetailCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/account.service */ "./src/app/services/account.service.ts");



let AccountDetailCardComponent = class AccountDetailCardComponent {
    constructor(accountService) {
        this.accountService = accountService;
        this.accountInterestPaid = { interestLastYear: '', interestThisYear: '' };
    }
    get account() {
        return this._account;
    }
    set account(value) {
        this._account = value;
        if (value) {
            this.accountInterestPaid = this.accountService.getAccountInterestPaid(value);
        }
    }
    ngOnInit() { }
};
AccountDetailCardComponent.ctorParameters = () => [
    { type: _services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
], AccountDetailCardComponent.prototype, "account", null);
AccountDetailCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ffdc-account-detail-card',
        template: __webpack_require__(/*! raw-loader!./account-detail-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/account-detail-card/account-detail-card.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        host: {
            class: 'account-detail-card'
        },
        styles: [__webpack_require__(/*! ./account-detail-card.component.scss */ "./src/app/components/account-detail-card/account-detail-card.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]])
], AccountDetailCardComponent);



/***/ }),

/***/ "./src/app/components/account-detail-card/account-detail-card.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/account-detail-card/account-detail-card.module.ts ***!
  \******************************************************************************/
/*! exports provided: AccountDetailCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountDetailCardModule", function() { return AccountDetailCardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _account_detail_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account-detail-card.component */ "./src/app/components/account-detail-card/account-detail-card.component.ts");
/* harmony import */ var _material_modules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../material-modules */ "./src/app/material-modules.ts");





let AccountDetailCardModule = class AccountDetailCardModule {
};
AccountDetailCardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_account_detail_card_component__WEBPACK_IMPORTED_MODULE_3__["AccountDetailCardComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _material_modules__WEBPACK_IMPORTED_MODULE_4__["MaterialModules"]
        ],
        exports: [_account_detail_card_component__WEBPACK_IMPORTED_MODULE_3__["AccountDetailCardComponent"]]
    })
], AccountDetailCardModule);



/***/ }),

/***/ "./src/app/containers/account-detail-page/account-detail-page.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/containers/account-detail-page/account-detail-page.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".account-detail-page {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  padding-bottom: 32px;\n}\n.account-detail-page .acount-detail-page-overview {\n  display: flex;\n  flex-grow: 100%;\n  margin-bottom: 32px;\n  padding: 32px 64px 32px 64px;\n  flex-direction: column;\n}\n.account-detail-page .acount-detail-page-overview .acount-detail-page-overview-info {\n  display: flex;\n  padding-top: 32px;\n  align-items: center;\n}\n.account-detail-page .acount-detail-page-overview .acount-detail-page-overview-info .acount-detail-page-overview-info-detail {\n  display: flex;\n  flex-direction: column;\n  padding-right: 64px;\n}\n.account-detail-page .acount-detail-page-overview .acount-detail-page-overview-info .acount-detail-page-overview-info-detail .uxg-subtitle-2 {\n  padding-bottom: 8px;\n  margin-top: 16px;\n}\n.account-detail-page .acount-detail-page-overview .acount-detail-page-overview-info .acount-detail-page-overview-info-action {\n  display: flex;\n  min-width: 196px;\n  justify-content: space-between;\n}\n.account-detail-page .account-page-detail-page-content {\n  display: flex;\n  padding-left: 32px;\n  padding-right: 64px;\n}\n.account-detail-page .account-page-detail-page-content .account-page-detail-page-content-column {\n  display: flex;\n  flex-direction: column;\n  flex: 50%;\n  padding-left: 32px;\n}\n@media all and (max-width: 600px) {\n  .account-detail-page .acount-detail-page-overview {\n    padding: 16px 32px 16px 32px;\n  }\n  .account-detail-page .acount-detail-page-overview .round-icon {\n    display: none;\n  }\n  .account-detail-page .acount-detail-page-overview .acount-detail-page-overview-info {\n    padding-top: 8px;\n    flex-direction: column;\n    align-items: end;\n  }\n  .account-detail-page .account-page-detail-page-content {\n    padding-left: 16px;\n    padding-right: 16px;\n    flex-direction: column;\n  }\n  .account-detail-page .account-page-detail-page-content .account-page-detail-page-content-column {\n    flex: 1;\n    padding-left: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFpbmVycy9hY2NvdW50LWRldGFpbC1wYWdlL0M6XFxQcm9qZWN0c1xcZmZkYy1zYW1wbGUtcmV0YWlsLXdlYmFwcC9zcmNcXGFwcFxcY29udGFpbmVyc1xcYWNjb3VudC1kZXRhaWwtcGFnZVxcYWNjb3VudC1kZXRhaWwtcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29udGFpbmVycy9hY2NvdW50LWRldGFpbC1wYWdlL2FjY291bnQtZGV0YWlsLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsT0FBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUNDRjtBREFFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUNFSjtBRERJO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNHTjtBREZNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUNJUjtBREhRO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtBQ0tWO0FERk07RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtBQ0lSO0FEQUU7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0VKO0FEREk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUNHTjtBRENFO0VBQ0U7SUFDRSw0QkFBQTtFQ0NKO0VEQ0k7SUFDRSxhQUFBO0VDQ047RURFSTtJQUNFLGdCQUFBO0lBQ0Esc0JBQUE7SUFDQSxnQkFBQTtFQ0FOO0VER0U7SUFDRSxrQkFBQTtJQUNBLG1CQUFBO0lBQ0Esc0JBQUE7RUNESjtFREVJO0lBQ0UsT0FBQTtJQUNBLGlCQUFBO0VDQU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhaW5lcnMvYWNjb3VudC1kZXRhaWwtcGFnZS9hY2NvdW50LWRldGFpbC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjY291bnQtZGV0YWlsLXBhZ2Uge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleDogMTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmctYm90dG9tOiAzMnB4O1xyXG4gIC5hY291bnQtZGV0YWlsLXBhZ2Utb3ZlcnZpZXcge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZ3JvdzogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDMycHg7XHJcbiAgICBwYWRkaW5nOiAzMnB4IDY0cHggMzJweCA2NHB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIC5hY291bnQtZGV0YWlsLXBhZ2Utb3ZlcnZpZXctaW5mbyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAzMnB4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAuYWNvdW50LWRldGFpbC1wYWdlLW92ZXJ2aWV3LWluZm8tZGV0YWlsIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogNjRweDtcclxuICAgICAgICAudXhnLXN1YnRpdGxlLTIgIHtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuYWNvdW50LWRldGFpbC1wYWdlLW92ZXJ2aWV3LWluZm8tYWN0aW9uIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG1pbi13aWR0aDogMTk2cHg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5hY2NvdW50LXBhZ2UtZGV0YWlsLXBhZ2UtY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMnB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNjRweDtcclxuICAgIC5hY2NvdW50LXBhZ2UtZGV0YWlsLXBhZ2UtY29udGVudC1jb2x1bW4ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBmbGV4OiA1MCU7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMzJweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuYWNvdW50LWRldGFpbC1wYWdlLW92ZXJ2aWV3IHtcclxuICAgICAgcGFkZGluZzogMTZweCAzMnB4IDE2cHggMzJweDtcclxuXHJcbiAgICAgIC5yb3VuZC1pY29uIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuYWNvdW50LWRldGFpbC1wYWdlLW92ZXJ2aWV3LWluZm8ge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogZW5kO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuYWNjb3VudC1wYWdlLWRldGFpbC1wYWdlLWNvbnRlbnQge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIC5hY2NvdW50LXBhZ2UtZGV0YWlsLXBhZ2UtY29udGVudC1jb2x1bW4ge1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgfVxyXG59XHJcbiIsIi5hY2NvdW50LWRldGFpbC1wYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZy1ib3R0b206IDMycHg7XG59XG4uYWNjb3VudC1kZXRhaWwtcGFnZSAuYWNvdW50LWRldGFpbC1wYWdlLW92ZXJ2aWV3IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1ncm93OiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICBwYWRkaW5nOiAzMnB4IDY0cHggMzJweCA2NHB4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmFjY291bnQtZGV0YWlsLXBhZ2UgLmFjb3VudC1kZXRhaWwtcGFnZS1vdmVydmlldyAuYWNvdW50LWRldGFpbC1wYWdlLW92ZXJ2aWV3LWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLXRvcDogMzJweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5hY2NvdW50LWRldGFpbC1wYWdlIC5hY291bnQtZGV0YWlsLXBhZ2Utb3ZlcnZpZXcgLmFjb3VudC1kZXRhaWwtcGFnZS1vdmVydmlldy1pbmZvIC5hY291bnQtZGV0YWlsLXBhZ2Utb3ZlcnZpZXctaW5mby1kZXRhaWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nLXJpZ2h0OiA2NHB4O1xufVxuLmFjY291bnQtZGV0YWlsLXBhZ2UgLmFjb3VudC1kZXRhaWwtcGFnZS1vdmVydmlldyAuYWNvdW50LWRldGFpbC1wYWdlLW92ZXJ2aWV3LWluZm8gLmFjb3VudC1kZXRhaWwtcGFnZS1vdmVydmlldy1pbmZvLWRldGFpbCAudXhnLXN1YnRpdGxlLTIge1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuLmFjY291bnQtZGV0YWlsLXBhZ2UgLmFjb3VudC1kZXRhaWwtcGFnZS1vdmVydmlldyAuYWNvdW50LWRldGFpbC1wYWdlLW92ZXJ2aWV3LWluZm8gLmFjb3VudC1kZXRhaWwtcGFnZS1vdmVydmlldy1pbmZvLWFjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1pbi13aWR0aDogMTk2cHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5hY2NvdW50LWRldGFpbC1wYWdlIC5hY2NvdW50LXBhZ2UtZGV0YWlsLXBhZ2UtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmctbGVmdDogMzJweDtcbiAgcGFkZGluZy1yaWdodDogNjRweDtcbn1cbi5hY2NvdW50LWRldGFpbC1wYWdlIC5hY2NvdW50LXBhZ2UtZGV0YWlsLXBhZ2UtY29udGVudCAuYWNjb3VudC1wYWdlLWRldGFpbC1wYWdlLWNvbnRlbnQtY29sdW1uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleDogNTAlO1xuICBwYWRkaW5nLWxlZnQ6IDMycHg7XG59XG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuYWNjb3VudC1kZXRhaWwtcGFnZSAuYWNvdW50LWRldGFpbC1wYWdlLW92ZXJ2aWV3IHtcbiAgICBwYWRkaW5nOiAxNnB4IDMycHggMTZweCAzMnB4O1xuICB9XG4gIC5hY2NvdW50LWRldGFpbC1wYWdlIC5hY291bnQtZGV0YWlsLXBhZ2Utb3ZlcnZpZXcgLnJvdW5kLWljb24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmFjY291bnQtZGV0YWlsLXBhZ2UgLmFjb3VudC1kZXRhaWwtcGFnZS1vdmVydmlldyAuYWNvdW50LWRldGFpbC1wYWdlLW92ZXJ2aWV3LWluZm8ge1xuICAgIHBhZGRpbmctdG9wOiA4cHg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZW5kO1xuICB9XG4gIC5hY2NvdW50LWRldGFpbC1wYWdlIC5hY2NvdW50LXBhZ2UtZGV0YWlsLXBhZ2UtY29udGVudCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAuYWNjb3VudC1kZXRhaWwtcGFnZSAuYWNjb3VudC1wYWdlLWRldGFpbC1wYWdlLWNvbnRlbnQgLmFjY291bnQtcGFnZS1kZXRhaWwtcGFnZS1jb250ZW50LWNvbHVtbiB7XG4gICAgZmxleDogMTtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/containers/account-detail-page/account-detail-page.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/containers/account-detail-page/account-detail-page.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AccountDetailPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountDetailPageComponent", function() { return AccountDetailPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/account.service */ "./src/app/services/account.service.ts");
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/reducers */ "./src/app/store/reducers/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _store_actions_account_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/actions/account.actions */ "./src/app/store/actions/account.actions.ts");









let AccountDetailPageComponent = class AccountDetailPageComponent {
    constructor(store, route, cd, accountService) {
        this.store = store;
        this.route = route;
        this.cd = cd;
        this.accountService = accountService;
        this.acountsOverview = { nickname: ' ', currentBalance: 0, availableBalance: 0, accountNumber: '' };
        this.destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ngOnInit() {
        this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(param => param.get('accountId') || ''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(accountId => !!accountId), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(accountId => this.store.dispatch(Object(_store_actions_account_actions__WEBPACK_IMPORTED_MODULE_8__["getExtendedAndDetailedForAccount"])({ accountId }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(accountId => this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["select"])(_store_reducers__WEBPACK_IMPORTED_MODULE_6__["selectAccountById"], { accountId }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroyed$))
            .subscribe(account => {
            if (account) {
                this.acountsOverview = this.accountService.getAccountOverview(account);
                this.account = account;
                console.log("account", this.account);
                this.cd.markForCheck();
            }
        });
    }
    ngOnDestroy() {
        this.destroyed$.next();
        this.destroyed$.complete();
    }
};
AccountDetailPageComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _services_account_service__WEBPACK_IMPORTED_MODULE_5__["AccountService"] }
];
AccountDetailPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ffdc-account-detail-page',
        template: __webpack_require__(/*! raw-loader!./account-detail-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/containers/account-detail-page/account-detail-page.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        host: {
            class: 'account-detail-page'
        },
        styles: [__webpack_require__(/*! ./account-detail-page.component.scss */ "./src/app/containers/account-detail-page/account-detail-page.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _services_account_service__WEBPACK_IMPORTED_MODULE_5__["AccountService"]])
], AccountDetailPageComponent);



/***/ }),

/***/ "./src/app/containers/account-detail-page/account-detail-page.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/containers/account-detail-page/account-detail-page.module.ts ***!
  \******************************************************************************/
/*! exports provided: AccountDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountDetailPageModule", function() { return AccountDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _account_detail_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account-detail-page.component */ "./src/app/containers/account-detail-page/account-detail-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_account_detail_card_account_detail_card_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/account-detail-card/account-detail-card.module */ "./src/app/components/account-detail-card/account-detail-card.module.ts");
/* harmony import */ var _material_modules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../material-modules */ "./src/app/material-modules.ts");
/* harmony import */ var _account_transaction_account_transaction_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../account-transaction/account-transaction.module */ "./src/app/containers/account-transaction/account-transaction.module.ts");








let AccountDetailPageModule = class AccountDetailPageModule {
};
AccountDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_account_detail_page_component__WEBPACK_IMPORTED_MODULE_3__["AccountDetailPageComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                {
                    path: '',
                    component: _account_detail_page_component__WEBPACK_IMPORTED_MODULE_3__["AccountDetailPageComponent"]
                }
            ]),
            _material_modules__WEBPACK_IMPORTED_MODULE_6__["MaterialModules"],
            _account_transaction_account_transaction_module__WEBPACK_IMPORTED_MODULE_7__["AccountTransactionModule"],
            _components_account_detail_card_account_detail_card_module__WEBPACK_IMPORTED_MODULE_5__["AccountDetailCardModule"]
        ],
        exports: [_account_detail_page_component__WEBPACK_IMPORTED_MODULE_3__["AccountDetailPageComponent"]],
        entryComponents: [_account_detail_page_component__WEBPACK_IMPORTED_MODULE_3__["AccountDetailPageComponent"]]
    })
], AccountDetailPageModule);



/***/ })

}]);
//# sourceMappingURL=containers-account-detail-page-account-detail-page-module.js.map