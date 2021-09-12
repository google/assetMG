(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/account-struct/account-struct.component.ts":
/*!************************************************************!*\
  !*** ./src/app/account-struct/account-struct.component.ts ***!
  \************************************************************/
/*! exports provided: AssetConn, AccountStructComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetConn", function() { return AssetConn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountStructComponent", function() { return AccountStructComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
/* harmony import */ var _model_asset__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/asset */ "./src/app/model/asset.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_asset_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/asset.service */ "./src/app/services/asset.service.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

















function AccountStructComponent_ng_container_7_th_1_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AccountStructComponent_ng_container_7_th_1_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return $event ? ctx_r22.masterToggle(ctx_r22.assetConn.ADGROUP) : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r20.adgroup_sel.hasValue() && ctx_r20.isAllSelected(ctx_r20.assetConn.ADGROUP))("indeterminate", ctx_r20.adgroup_sel.hasValue() && !ctx_r20.isAllSelected(ctx_r20.assetConn.ADGROUP));
} }
function AccountStructComponent_ng_container_7_td_2_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 27);
} }
function AccountStructComponent_ng_container_7_td_2_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AccountStructComponent_ng_container_7_td_2_i_1_Template, 1, 0, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-checkbox", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountStructComponent_ng_container_7_td_2_Template_mat_checkbox_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); return $event.stopPropagation(); })("change", function AccountStructComponent_ng_container_7_td_2_Template_mat_checkbox_change_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const row_r24 = ctx.$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r28.toggleSelection(row_r24, ctx_r28.assetConn.ADGROUP); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r24 = ctx.$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", row_r24.isEdited[ctx_r21.assetConn.ADGROUP]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", row_r24.disabled[ctx_r21.assetConn.ADGROUP])("checked", ctx_r21.adgroup_sel.isSelected(row_r24));
} }
function AccountStructComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AccountStructComponent_ng_container_7_th_1_Template, 2, 2, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AccountStructComponent_ng_container_7_td_2_Template, 3, 3, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function AccountStructComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AccountStructComponent_th_9_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return $event ? ctx_r29.masterToggle(ctx_r29.assetConn.HEADLINE) : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Headline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r2.headline_sel.hasValue() && ctx_r2.isAllSelected(ctx_r2.assetConn.HEADLINE))("indeterminate", ctx_r2.headline_sel.hasValue() && !ctx_r2.isAllSelected(ctx_r2.assetConn.HEADLINE));
} }
function AccountStructComponent_td_10_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 27);
} }
function AccountStructComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AccountStructComponent_td_10_i_1_Template, 1, 0, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-checkbox", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountStructComponent_td_10_Template_mat_checkbox_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); return $event.stopPropagation(); })("change", function AccountStructComponent_td_10_Template_mat_checkbox_change_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const row_r31 = ctx.$implicit; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.toggleSelection(row_r31, ctx_r35.assetConn.HEADLINE); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r31 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", row_r31.isEdited[ctx_r3.assetConn.HEADLINE]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", row_r31.disabled[ctx_r3.assetConn.HEADLINE])("checked", ctx_r3.headline_sel.isSelected(row_r31));
} }
function AccountStructComponent_ng_container_11_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Headline Performance ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountStructComponent_ng_container_11_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r38.headlinePerformance, " ");
} }
function AccountStructComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AccountStructComponent_ng_container_11_th_1_Template, 2, 0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AccountStructComponent_ng_container_11_td_2_Template, 2, 1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function AccountStructComponent_th_13_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AccountStructComponent_th_13_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return $event ? ctx_r39.masterToggle(ctx_r39.assetConn.DESC) : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Desc. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r5.description_sel.hasValue() && ctx_r5.isAllSelected(ctx_r5.assetConn.DESC))("indeterminate", ctx_r5.description_sel.hasValue() && !ctx_r5.isAllSelected(ctx_r5.assetConn.DESC));
} }
function AccountStructComponent_td_14_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 27);
} }
function AccountStructComponent_td_14_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AccountStructComponent_td_14_i_1_Template, 1, 0, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-checkbox", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountStructComponent_td_14_Template_mat_checkbox_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); return $event.stopPropagation(); })("change", function AccountStructComponent_td_14_Template_mat_checkbox_change_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const row_r41 = ctx.$implicit; const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r45.toggleSelection(row_r41, ctx_r45.assetConn.DESC); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r41 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", row_r41.isEdited[ctx_r6.assetConn.DESC]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", row_r41.disabled[ctx_r6.assetConn.DESC])("checked", ctx_r6.description_sel.isSelected(row_r41));
} }
function AccountStructComponent_ng_container_15_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Description Performance ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountStructComponent_ng_container_15_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r48.descriptionPerformance, " ");
} }
function AccountStructComponent_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AccountStructComponent_ng_container_15_th_1_Template, 2, 0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AccountStructComponent_ng_container_15_td_2_Template, 2, 1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function AccountStructComponent_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Ad group ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountStructComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r49.name, " ");
} }
function AccountStructComponent_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Active ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountStructComponent_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r50.status, " ");
} }
function AccountStructComponent_ng_container_22_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Performance ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountStructComponent_ng_container_22_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r53.performance, " ");
} }
function AccountStructComponent_ng_container_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AccountStructComponent_ng_container_22_th_1_Template, 2, 0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AccountStructComponent_ng_container_22_td_2_Template, 2, 1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function AccountStructComponent_th_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Campaign ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountStructComponent_td_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r54.campaign_name, " ");
} }
function AccountStructComponent_th_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Active ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AccountStructComponent_td_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r55.campaign_status, " ");
} }
function AccountStructComponent_tr_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 32);
} }
function AccountStructComponent_tr_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 33);
} }
function AccountStructComponent_tr_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("No data matching the filter \"", _r0.value, "\"");
} }
/** checkmark options allows the storing of states for all three checkboxes at the same time
 * adGroup, headlines and description - to be accessed by AssetConn
 */
var AssetConn;
(function (AssetConn) {
    AssetConn[AssetConn["ADGROUP"] = 0] = "ADGROUP";
    AssetConn[AssetConn["HEADLINE"] = 1] = "HEADLINE";
    AssetConn[AssetConn["DESC"] = 2] = "DESC";
})(AssetConn || (AssetConn = {}));
/**
 * This component works in two modes: Update and Upload
 * . Update mode has 3 selection columns (1 for non-text assets and 2 for text assets)
 *   Depending on the selected asset type, the selection columns are visible
 * . Upload mode only makes use of the adgroup selection column
 */
class AccountStructComponent {
    constructor(dataService, _changeDetectorRef) {
        this.dataService = dataService;
        this._changeDetectorRef = _changeDetectorRef;
        this._subscriptions = [];
        this.assetConn = AssetConn; /** connection types to be used in the html file */
        this.displayedColumns$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](null);
        /** Members that represent the table UI
         * There are three selectable columns; one for non-text assets
         * 2 for text assets (Headlines and Descriptions)
         * the visibility of the columns depends on the asset type
         */
        this.nonTextAssetCols = ['adgroup-sel', 'adgroup', 'adgroup-enabled', 'performance', 'campaign', 'campaign-enabled'];
        this.textAssetCols = ['headline-sel', 'headline-performance', 'desc-sel', 'desc-performance', 'adgroup', 'adgroup-enabled', 'campaign', 'campaign-enabled'];
        this.adgroup_sel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["SelectionModel"](true, []);
        this.headline_sel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["SelectionModel"](true, []);
        this.description_sel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["SelectionModel"](true, []);
        this.pageSizeOptions = [10, 25, 50];
        this.uploadMode = false;
        this.selectionMade = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    set account(account) {
        this._account = account;
    }
    get account() {
        return this._account;
    }
    set activeAsset(asset) {
        this._activeAsset = asset;
    }
    get activeAsset() {
        return this._activeAsset;
    }
    ngOnChanges(changes) {
        var _a, _b, _c, _d;
        // Get new adgroups if active account has changed
        if (((_b = (_a = changes.account) === null || _a === void 0 ? void 0 : _a.currentValue) === null || _b === void 0 ? void 0 : _b.id) != ((_d = (_c = changes.account) === null || _c === void 0 ? void 0 : _c.previousValue) === null || _d === void 0 ? void 0 : _d.id)) {
            this.addAdGroupsToTable();
        }
        if (changes.uploadMode) {
            this.displayedColumns$.next(this.getDisplayedColumns());
            this.pageSizeOptions = [5, 25, 50];
            this._changeDetectorRef.detectChanges();
        }
    }
    ngOnInit() {
        // Refresh asset to ad group
        this._subscriptions.push(this.dataService.activeAssetAdGroups$.subscribe((adGroups) => {
            var _a;
            this._assetToAdgroups = adGroups;
            if ((_a = this.dataSource) === null || _a === void 0 ? void 0 : _a.paginator) {
                this.dataSource.paginator.firstPage();
            }
            this.updateRowSelections();
        }));
        // Refresh the asset details in the table if asset changes
        this._subscriptions.push(this.dataService.activeAsset$.subscribe((asset) => {
            if (asset) {
                this._activeAsset = asset;
                // Update table according to asset type
                this.isTextAsset = this.activeAsset.type == _model_asset__WEBPACK_IMPORTED_MODULE_5__["AssetType"].TEXT;
                this.displayedColumns$.next(this.getDisplayedColumns());
                this._changeDetectorRef.detectChanges();
                this.applyFilterPredicate();
                // Reset the filter if any
                this.filter = '';
                this.dataSource.filter = '';
            }
        }));
    }
    ngOnDestroy() {
        for (let sub of this._subscriptions) {
            sub.unsubscribe();
        }
    }
    addAdGroupsToTable() {
        this._adGroupRows = this.createAdGroupRows();
        // Assign the data to the data source for the table to render
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this._adGroupRows);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.applyFilterPredicate();
        // Adjust sorting criteria
        this.dataSource.sortingDataAccessor = (item, property) => {
            switch (property) {
                case 'adgroup-sel':
                    return this.adgroup_sel.selected.includes(item);
                case 'headline-sel':
                case 'desc-sel':
                    return (this.headline_sel.selected.includes(item) ||
                        this.description_sel.selected.includes(item));
                default:
                    return item[property];
            }
        };
    }
    applyFilterPredicate() {
        /** Creates the Filter Predicate for searching within the adgroup table.
         *
         * A different predicate is made depending on whether the asset is a text asset
         * or not. This is due to text assets displaying a different set of columns.
         */
        if (this.isTextAsset) {
            this.dataSource.filterPredicate = function (data, filter) {
                var filterKeywords = filter.split(' ');
                var searchFilter = true;
                for (var i = 0; i < filterKeywords.length; i++) {
                    var keyword = filterKeywords[i];
                    searchFilter = searchFilter &&
                        (String(data.name).toLowerCase().includes(keyword) ||
                            String(data.campaign_name).toLowerCase().includes(keyword) ||
                            String(data.headlinePerformance).toLowerCase().includes(keyword) ||
                            String(data.descriptionPerformance).toLowerCase().includes(keyword) ||
                            String(data.status).toLowerCase().includes(keyword) ||
                            String(data.campaign_status).toLowerCase().includes(keyword));
                }
                return searchFilter;
            };
        }
        else {
            this.dataSource.filterPredicate = function (data, filter) {
                var filterKeywords = filter.split(' ');
                var searchFilter = true;
                for (var i = 0; i < filterKeywords.length; i++) {
                    var keyword = filterKeywords[i];
                    searchFilter = searchFilter &&
                        (String(data.name).toLowerCase().includes(keyword) ||
                            String(data.campaign_name).toLowerCase().includes(keyword) ||
                            String(data.performance).toLowerCase().includes(keyword) ||
                            String(data.status).toLowerCase().includes(keyword) ||
                            String(data.campaign_status).toLowerCase().includes(keyword));
                }
                return searchFilter;
            };
        }
    }
    getDisplayedColumns() {
        let cols = [];
        this.showAdGroupColOnly()
            ? (cols = this.nonTextAssetCols)
            : (cols = this.textAssetCols);
        return cols;
    }
    /** Creates adGroup rows for all account adgroups */
    createAdGroupRows() {
        let adgroups = this.account.adgroups;
        // Add any additional fields here
        adgroups.forEach(ag => {
            ag.isEdited = [false, false, false];
            ag.disabled = [false, false, false];
        });
        return adgroups;
    }
    updateRowSelections() {
        // Clear previous selections
        this.adgroup_sel.clear();
        this.headline_sel.clear();
        this.description_sel.clear();
        // Filter the rows that need to be selected
        if (this._assetToAdgroups) {
            if (this.showAdGroupColOnly()) {
                this.selectAdGroup(AssetConn.ADGROUP);
            }
            else {
                this.selectAdGroup(AssetConn.HEADLINE);
                this.selectAdGroup(AssetConn.DESC);
            }
        }
        this._changeDetectorRef.detectChanges();
    }
    selectAdGroup(assetConn) {
        var _a;
        let connType = _model_asset__WEBPACK_IMPORTED_MODULE_5__["AssetConnType"].ADGROUP;
        switch (assetConn) {
            case AssetConn.HEADLINE:
                connType = _model_asset__WEBPACK_IMPORTED_MODULE_5__["AssetConnType"].HEADLINE;
                break;
            case AssetConn.DESC:
                connType = _model_asset__WEBPACK_IMPORTED_MODULE_5__["AssetConnType"].DESC;
                break;
        }
        let selectAdGroups = (_a = this._assetToAdgroups) === null || _a === void 0 ? void 0 : _a.get(connType);
        if (selectAdGroups) {
            let selectedRows = this._adGroupRows.filter((agRow) => selectAdGroups.some((adGroup) => agRow.id == adGroup.id));
            this._adGroupRows.map(agRow => {
                selectAdGroups.filter(ag => ag.id == agRow.id).forEach(adGroup => {
                    switch (adGroup.performance_type) {
                        case 'adgroup': {
                            agRow.performance = adGroup.performance;
                            break;
                        }
                        case 'headlines': {
                            agRow.headlinePerformance = adGroup.performance;
                            break;
                        }
                        case 'descriptions': {
                            agRow.descriptionPerformance = adGroup.performance;
                            break;
                        }
                        default: {
                            agRow.performance = adGroup.performance;
                            break;
                        }
                    }
                });
            });
            let selArray = this.getSelectionArray(assetConn);
            selArray.select(...selectedRows);
        }
    }
    resetEditedRows() {
        var _a, _b;
        (_b = (_a = this.dataSource) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.forEach((row) => {
            row.isEdited = [false, false, false];
        });
    }
    sortBySelection() {
        if (this.showAdGroupColOnly()) {
            this.sort.sort({ id: 'adgroup-sel', start: 'desc' });
        }
        else {
            this.sort.sort({ id: 'desc-sel', start: 'desc' });
            this.sort.sort({ id: 'headline-sel', start: 'desc' });
        }
        this.sort.direction = 'desc';
        this.dataSource.sort = this.sort;
        this.dataSource.sort.sortChange.emit();
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
        this.clearSelection(AssetConn.HEADLINE);
        this.clearSelection(AssetConn.DESC);
        this.clearSelection(AssetConn.ADGROUP);
    }
    toggleSelection(agRow, assetConn) {
        if (agRow) {
            // Toggle the edited property then update the selection array
            switch (assetConn) {
                case AssetConn.HEADLINE:
                    agRow.isEdited[AssetConn.HEADLINE] = !agRow.isEdited[AssetConn.HEADLINE];
                    break;
                case AssetConn.DESC:
                    agRow.isEdited[AssetConn.DESC] = !agRow.isEdited[AssetConn.DESC];
                    break;
                default:
                    agRow.isEdited[AssetConn.ADGROUP] = !agRow.isEdited[AssetConn.ADGROUP];
                    break;
            }
            this.getSelectionArray(assetConn).toggle(agRow);
            this._changeDetectorRef.markForCheck();
            // Now that there is a selection change check if at least one row is selected
            // This is needed to enable the "Add Asset" button in the upload dialog
            // Note: the check is only made on the adgroup selection array because
            // the upload button opnly supports one selection column (adgroup_sel)
            this.selectionMade.emit(!this.adgroup_sel.isEmpty());
        }
    }
    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected(assetConn) {
        let selArr = this.getSelectionArray(assetConn);
        const numSelected = selArr.selected.length;
        const numRows = this.dataSource.filteredData.length;
        return numSelected === numRows;
    }
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle(assetConn) {
        this.isAllSelected(assetConn)
            ? this.clearSelection(assetConn)
            : this.selectAll(assetConn);
    }
    clearSelection(assetConn) {
        this.dataSource.data.forEach((row) => this.unselectRow(row, assetConn));
        this.adgroup_sel.clear();
        this.headline_sel.clear();
        this.description_sel.clear();
    }
    selectAll(assetConn) {
        this.dataSource.filteredData.forEach((row) => this.selectRow(row, assetConn));
    }
    getSelectionArray(assetConn) {
        let selArr;
        switch (assetConn) {
            case AssetConn.HEADLINE:
                selArr = this.headline_sel;
                break;
            case AssetConn.DESC:
                selArr = this.description_sel;
                break;
            default:
                selArr = this.adgroup_sel;
                break;
        }
        return selArr;
    }
    selectRow(row, assetConn) {
        let selArr = this.getSelectionArray(assetConn);
        if (!selArr.isSelected(row)) {
            this.toggleSelection(row, assetConn);
        }
    }
    unselectRow(row, assetConn) {
        let selArr = this.getSelectionArray(assetConn);
        if (selArr.isSelected(row)) {
            this.toggleSelection(row, assetConn);
        }
    }
    showAdGroupColOnly() {
        return !this.isTextAsset || this.uploadMode;
    }
    getUpdatedRows() {
        let updatedRows = this._adGroupRows.filter((agRow) => (this.showAdGroupColOnly() &&
            agRow.isEdited[AssetConn.ADGROUP] == true) ||
            (this.isTextAsset &&
                (agRow.isEdited[AssetConn.HEADLINE] == true ||
                    agRow.isEdited[AssetConn.DESC] == true)));
        return updatedRows;
    }
    getSelectedAdGroupIDs() {
        let rows = this.getUpdatedRows();
        let agIds = [];
        rows.forEach((row) => agIds.push(row.id));
        return agIds;
    }
}
AccountStructComponent.ɵfac = function AccountStructComponent_Factory(t) { return new (t || AccountStructComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_asset_service__WEBPACK_IMPORTED_MODULE_7__["AssetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
AccountStructComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccountStructComponent, selectors: [["app-account-struct"]], viewQuery: function AccountStructComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, inputs: { account: "account", activeAsset: "activeAsset", uploadMode: "uploadMode" }, outputs: { selectionMade: "selectionMade" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 35, vars: 14, consts: [["id", "accountFilter"], ["matInput", "", "placeholder", "Use spaces to separate search terms", 3, "ngModel", "ngModelChange", "keyup"], ["tableFilterInput", ""], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "adgroup-sel", 4, "ngIf"], ["matColumnDef", "headline-sel"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "headline-performance", 4, "ngIf"], ["matColumnDef", "desc-sel"], ["matColumnDef", "desc-performance", 4, "ngIf"], ["matColumnDef", "adgroup"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "adgroup-enabled"], ["matColumnDef", "performance", 4, "ngIf"], ["matColumnDef", "campaign"], ["matColumnDef", "campaign-enabled"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], [3, "pageSizeOptions", "showFirstLastButtons"], ["matColumnDef", "adgroup-sel"], ["mat-header-cell", ""], [1, "header-checkmark", 3, "checked", "indeterminate", "change"], ["mat-cell", ""], ["class", "fas fa-pen", 4, "ngIf"], [3, "disabled", "checked", "click", "change"], [1, "fas", "fa-pen"], ["matColumnDef", "headline-performance"], ["mat-header-cell", "", "mat-sort-header", ""], ["matColumnDef", "desc-performance"], ["matColumnDef", "performance"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "3", 1, "mat-cell"]], template: function AccountStructComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AccountStructComponent_Template_input_ngModelChange_3_listener($event) { return ctx.filter = $event; })("keyup", function AccountStructComponent_Template_input_keyup_3_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AccountStructComponent_ng_container_7_Template, 3, 0, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AccountStructComponent_th_9_Template, 3, 2, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AccountStructComponent_td_10_Template, 3, 3, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AccountStructComponent_ng_container_11_Template, 3, 0, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AccountStructComponent_th_13_Template, 3, 2, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AccountStructComponent_td_14_Template, 3, 3, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AccountStructComponent_ng_container_15_Template, 3, 0, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](16, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AccountStructComponent_th_17_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AccountStructComponent_td_18_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](19, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AccountStructComponent_th_20_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AccountStructComponent_td_21_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AccountStructComponent_ng_container_22_Template, 3, 0, "ng-container", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](23, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AccountStructComponent_th_24_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AccountStructComponent_td_25_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](26, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, AccountStructComponent_th_27_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, AccountStructComponent_td_28_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, AccountStructComponent_tr_29_Template, 1, 0, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, AccountStructComponent_tr_31_Template, 1, 0, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, AccountStructComponent_tr_33_Template, 3, 1, "tr", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "mat-paginator", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.filter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isTextAsset);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isTextAsset);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isTextAsset);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isTextAsset);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 10, ctx.displayedColumns$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 12, ctx.displayedColumns$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", ctx.pageSizeOptions)("showFirstLastButtons", true);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatNoDataRow"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckbox"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"]], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n#accountFilter[_ngcontent-%COMP%] {\n  width: 50%;\n  max-width: 500px;\n}\n\n.mat-column-campaign[_ngcontent-%COMP%] {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 auto !important;\n  width: auto !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n}\n\n.mat-column-adgroup[_ngcontent-%COMP%] {\n  flex: 0 0 40% !important;\n  width: 40% !important;\n}\n\n.mat-column-adgroup-sel[_ngcontent-%COMP%], .mat-column-headline-sel[_ngcontent-%COMP%], .mat-column-desc-sel[_ngcontent-%COMP%] {\n  flex: 0 0 60px !important;\n  width: 60px !important;\n}\n\n.mat-cell[_ngcontent-%COMP%], th.mat-header-cell[_ngcontent-%COMP%] {\n  text-align: left;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.mat-header-cell[_ngcontent-%COMP%]   .mat-checkbox[_ngcontent-%COMP%] {\n  background-color: white !important;\n}\n\nth.mat-header-cell[_ngcontent-%COMP%]:first-of-type, td.mat-cell[_ngcontent-%COMP%]:first-of-type {\n  padding-left: 5px!important;\n}\n\n#accountFilter[_ngcontent-%COMP%] {\n  float: left;\n}\n\ntd.mat-cell[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: gold;\n  float: left !important;\n  line-height: 20px;\n}\n\ntd.mat-cell[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%]{\n  float: right !important;\n  margin-right: 24px !important;\n}\n\n.header-checkmark[_ngcontent-%COMP%]{\n  margin-left: 20px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC1zdHJ1Y3QvYWNjb3VudC1zdHJ1Y3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsNkJBQTZCO0VBQzdCLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixxQkFBcUI7QUFDdkI7O0FBRUE7OztFQUdFLHlCQUF5QjtFQUN6QixzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUUsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7O0VBRUUsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCIiwiZmlsZSI6InNyYy9hcHAvYWNjb3VudC1zdHJ1Y3QvYWNjb3VudC1zdHJ1Y3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbiNhY2NvdW50RmlsdGVyIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbn1cblxuLm1hdC1jb2x1bW4tY2FtcGFpZ24ge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcbiAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGZsZXg6IDAgMCBhdXRvICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cblxuLm1hdC1jb2x1bW4tYWRncm91cCB7XG4gIGZsZXg6IDAgMCA0MCUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDQwJSAhaW1wb3J0YW50O1xufVxuXG4ubWF0LWNvbHVtbi1hZGdyb3VwLXNlbCxcbi5tYXQtY29sdW1uLWhlYWRsaW5lLXNlbCxcbi5tYXQtY29sdW1uLWRlc2Mtc2VsIHtcbiAgZmxleDogMCAwIDYwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDYwcHggIWltcG9ydGFudDtcbn1cblxuLm1hdC1jZWxsLFxudGgubWF0LWhlYWRlci1jZWxsIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuXG4ubWF0LWhlYWRlci1jZWxsIC5tYXQtY2hlY2tib3gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG50aC5tYXQtaGVhZGVyLWNlbGw6Zmlyc3Qtb2YtdHlwZSxcbnRkLm1hdC1jZWxsOmZpcnN0LW9mLXR5cGUge1xuICBwYWRkaW5nLWxlZnQ6IDVweCFpbXBvcnRhbnQ7XG59XG5cbiNhY2NvdW50RmlsdGVyIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbnRkLm1hdC1jZWxsIGkge1xuICBjb2xvcjogZ29sZDtcbiAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbnRkLm1hdC1jZWxsIG1hdC1jaGVja2JveHtcbiAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogMjRweCAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGVyLWNoZWNrbWFya3tcbiAgbWFyZ2luLWxlZnQ6IDIwcHggIWltcG9ydGFudDtcbn1cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountStructComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-account-struct',
                templateUrl: './account-struct.component.html',
                styleUrls: ['./account-struct.component.css'],
            }]
    }], function () { return [{ type: _services_asset_service__WEBPACK_IMPORTED_MODULE_7__["AssetService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { account: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], activeAsset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], uploadMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectionMade: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _asset_gallery_asset_gallery_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./asset-gallery/asset-gallery.component */ "./src/app/asset-gallery/asset-gallery.component.ts");
/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */





const routes = [
    { path: '', component: _asset_gallery_asset_gallery_component__WEBPACK_IMPORTED_MODULE_2__["AssetGalleryComponent"] },
    { path: '**', redirectTo: '' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app-setup/app-setup.component.ts":
/*!**************************************************!*\
  !*** ./src/app/app-setup/app-setup.component.ts ***!
  \**************************************************/
/*! exports provided: AppSetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSetupComponent", function() { return AppSetupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _shared_client_id_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/client-id.pipe */ "./src/app/shared/client-id.pipe.ts");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var _services_authorization_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/authorization.service */ "./src/app/services/authorization.service.ts");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _shared_config_credentials_credentials_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/config/credentials/credentials.component */ "./src/app/shared/config/credentials/credentials.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _shared_progress_btn_progress_btn_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/progress-btn/progress-btn.component */ "./src/app/shared/progress-btn/progress-btn.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/loader/loader.component */ "./src/app/shared/loader/loader.component.ts");
/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
















const _c0 = ["credentialsFormGroup"];
const _c1 = ["refreshCodeFormGroup"];
function AppSetupComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Enter your account credentials");
} }
function AppSetupComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Generate a refresh token");
} }
function AppSetupComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.verificationTitle);
} }
function AppSetupComponent_div_32_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Done");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
} }
function AppSetupComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppSetupComponent_div_32_button_3_Template, 2, 1, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.errorFound);
} }
const _c2 = function (a0) { return { "error-msg": a0 }; };
class AppSetupComponent {
    constructor(_configService, _authorizationService, _cidPipe, setupDialogRef, data) {
        this._configService = _configService;
        this._authorizationService = _authorizationService;
        this._cidPipe = _cidPipe;
        this.setupDialogRef = setupDialogRef;
        this.data = data;
        this._subscriptions = [];
        this.generateTokenURL = '';
        this.verificationTitle = 'Setup verification';
        this.verificationText = '';
        this.setupInProgress = true;
        this.isLoggedIn = false;
        this.errorFound = false;
    }
    ngOnInit() {
        this.setupDialogRef.updateSize('800px', '520px');
        this._subscriptions.push(this._authorizationService.loggedIn$.subscribe((loggedIn) => {
            this.isLoggedIn = loggedIn;
        }));
    }
    revertChanges() { }
    selectionChange(event) {
        this.resetState();
        let config = {
            client_customer_id: Number(this._cidPipe.transform(this.credentials.form.get('mccCtrl').value, _shared_client_id_pipe__WEBPACK_IMPORTED_MODULE_4__["transformAction"].REMOVE_DASHES)),
            client_id: this.credentials.form.get('clientIDCtrl').value.trim(),
            client_secret: this.credentials.form.get('clientSecretCtrl').value.trim(),
            developer_token: this.credentials.form.get('devTokenCtrl').value.trim(),
        };
        if (event.selectedIndex === 1) {
            // This is the login-to-server section.
            // Updates the config settings in the Auth service and on the
            // server-side to ensure correct gapi behaviour.
            this._configService.updateConfigCache(config);
            this._configService.setConfigCredentials(config.client_customer_id, config.client_id, config.client_secret, config.developer_token).subscribe();
        }
        else if (event.selectedIndex === 2) {
            // Update the refresh token - this will trigger a verification of
            // the credentials in the backend
            let subscription = this._configService
                .setConfigRefreshCode(this._authorizationService.getRefreshToken())
                .subscribe((response) => {
                config.refresh_token = response.body;
                config.config_valid = true;
                this._configService.updateConfigCache(config);
                this.setupInProgress = false;
                this.verificationText = 'Setup complete!';
                this._authorizationService.logout();
                subscription.unsubscribe();
            }, (error) => {
                this.setupInProgress = false;
                this.errorFound = true;
                this.verificationText = 'Setup failed. Invalid credentials.';
                subscription.unsubscribe();
            });
        }
    }
    forceLogin() {
        this.resetState();
        let subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this._authorizationService.authenticate(true))
            .subscribe((response) => {
            subscription.unsubscribe();
        }, (error) => {
            this.errorFound = true;
            this.verificationText = JSON.stringify(error.details);
            subscription.unsubscribe();
        });
    }
    resetState() {
        this.errorFound = false;
        this.verificationText = '';
        this.setupInProgress = true;
    }
}
AppSetupComponent.ɵfac = function AppSetupComponent_Factory(t) { return new (t || AppSetupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authorization_service__WEBPACK_IMPORTED_MODULE_6__["AuthorizationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_client_id_pipe__WEBPACK_IMPORTED_MODULE_4__["ClientIDPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])); };
AppSetupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppSetupComponent, selectors: [["app-app-setup"]], viewQuery: function AppSetupComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.credentials = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.refreshCode = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_3__["STEPPER_GLOBAL_OPTIONS"],
                useValue: { displayDefaultIndicatorType: false },
            },
        ])], decls: 33, vars: 13, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["linear", "true", 3, "selectionChange"], ["stepper", ""], [3, "stepControl"], ["matStepLabel", ""], ["editMode", "true", 3, "data"], ["credentialsFormGroup", ""], ["mat-stroked-button", "", "matStepperNext", "", "color", "primary", 1, "right-align", 3, "disabled"], ["btnLabel", "Server Login", 3, "btnClick"], [1, "vertical-padding", "setup-result"], [3, "ngClass"], ["mat-stroked-button", "", "matStepperPrevious", "", "color", "primary"], ["mat-dialog-actions", "", 4, "ngIf"], ["mat-dialog-actions", ""], ["mat-stroked-button", "", "color", "primary", "class", "right-align", 3, "mat-dialog-close", 4, "ngIf"], ["mat-stroked-button", "", "color", "primary", 1, "right-align", 3, "mat-dialog-close"]], template: function AppSetupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Setup AssetMG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-vertical-stepper", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function AppSetupComponent_Template_mat_vertical_stepper_selectionChange_3_listener($event) { return ctx.selectionChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-step", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppSetupComponent_ng_template_6_Template, 1, 0, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-credentials", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppSetupComponent_ng_template_13_Template, 1, 0, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Click below to login with your service account. Once you've done so, click next.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "app-progress-btn", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("btnClick", function AppSetupComponent_Template_app_progress_btn_btnClick_16_listener() { return ctx.forceLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AppSetupComponent_ng_template_26_Template, 1, 1, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "app-loader");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, AppSetupComponent_div_32_Template, 4, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r2.form.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c2, ctx.errorFound));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.verificationText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c2, ctx.errorFound));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.verificationText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.setupInProgress);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatVerticalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatStep"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatStepLabel"], _shared_config_credentials_credentials_component__WEBPACK_IMPORTED_MODULE_8__["CredentialsComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatStepperNext"], _shared_progress_btn_progress_btn_component__WEBPACK_IMPORTED_MODULE_10__["ProgressBtnComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatStepperPrevious"], _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_12__["LoaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"]], styles: [".right-align[_ngcontent-%COMP%] {\n  float: right;\n  margin-left: auto !important;\n}\n\n.error-msg[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.vertical-padding[_ngcontent-%COMP%] {\n  padding-top: 24px;\n  padding-bottom: 12px;\n\n  font-size: 115%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLXNldHVwL2FwcC1zZXR1cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7O0VBRXBCLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9hcHAtc2V0dXAvYXBwLXNldHVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmlnaHQtYWxpZ24ge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5lcnJvci1tc2cge1xuICBjb2xvcjogcmVkO1xufVxuXG4udmVydGljYWwtcGFkZGluZyB7XG4gIHBhZGRpbmctdG9wOiAyNHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcblxuICBmb250LXNpemU6IDExNSU7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppSetupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-app-setup',
                templateUrl: './app-setup.component.html',
                styleUrls: ['./app-setup.component.css'],
                providers: [
                    {
                        provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_3__["STEPPER_GLOBAL_OPTIONS"],
                        useValue: { displayDefaultIndicatorType: false },
                    },
                ],
            }]
    }], function () { return [{ type: _services_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"] }, { type: _services_authorization_service__WEBPACK_IMPORTED_MODULE_6__["AuthorizationService"] }, { type: _shared_client_id_pipe__WEBPACK_IMPORTED_MODULE_4__["ClientIDPipe"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }]; }, { credentials: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['credentialsFormGroup']
        }], refreshCode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['refreshCodeFormGroup']
        }] }); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




function AppComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "LOADING");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor() {
        this.title = 'Asset Manager';
        this.isLoaded = true;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 1, consts: [[1, "asset-mg-window"], ["id", "main-loader", 4, "ngIf"], ["id", "main-loader"], [1, "wrap"], [1, "loading"], ["src", "assets/gtech_logo.png"], [1, "text"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_div_2_Template, 6, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoaded);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".asset-mg-window[_ngcontent-%COMP%] {\n  text-align:center;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXNzZXQtbWctd2luZG93IHtcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _asset_gallery_asset_gallery_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./asset-gallery/asset-gallery.component */ "./src/app/asset-gallery/asset-gallery.component.ts");
/* harmony import */ var _asset_details_asset_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./asset-details/asset-details.component */ "./src/app/asset-details/asset-details.component.ts");
/* harmony import */ var _asset_asset_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./asset/asset.component */ "./src/app/asset/asset.component.ts");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "./src/app/toolbar/toolbar.component.ts");
/* harmony import */ var _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./search-bar/search-bar.component */ "./src/app/search-bar/search-bar.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _app_setup_app_setup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-setup/app-setup.component */ "./src/app/app-setup/app-setup.component.ts");
/* harmony import */ var _upload_assets_upload_assets_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./upload-assets/upload-assets.component */ "./src/app/upload-assets/upload-assets.component.ts");
/* harmony import */ var _upload_assets_upload_text_upload_text_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./upload-assets/upload-text/upload-text.component */ "./src/app/upload-assets/upload-text/upload-text.component.ts");
/* harmony import */ var _upload_assets_upload_img_upload_img_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./upload-assets/upload-img/upload-img.component */ "./src/app/upload-assets/upload-img/upload-img.component.ts");
/* harmony import */ var _upload_assets_upload_video_upload_video_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./upload-assets/upload-video/upload-video.component */ "./src/app/upload-assets/upload-video/upload-video.component.ts");
/* harmony import */ var _upload_assets_upload_html_upload_html_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./upload-assets/upload-html/upload-html.component */ "./src/app/upload-assets/upload-html/upload-html.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _preview_preview_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./preview/preview.component */ "./src/app/preview/preview.component.ts");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/youtube-player */ "./node_modules/@angular/youtube-player/__ivy_ngcc__/fesm2015/youtube-player.js");
/* harmony import */ var _account_struct_account_struct_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./account-struct//account-struct.component */ "./src/app/account-struct/account-struct.component.ts");
/* harmony import */ var _asset_grid_asset_grid_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./asset-grid/asset-grid.component */ "./src/app/asset-grid/asset-grid.component.ts");
/* harmony import */ var _error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./error-dialog/error-dialog.component */ "./src/app/error-dialog/error-dialog.component.ts");
/* harmony import */ var _upload_assets_video_select_video_select_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./upload-assets/video-select/video-select.component */ "./src/app/upload-assets/video-select/video-select.component.ts");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_progress_btn_progress_btn_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./shared/progress-btn/progress-btn.component */ "./src/app/shared/progress-btn/progress-btn.component.ts");
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./shared/loader/loader.component */ "./src/app/shared/loader/loader.component.ts");
/* harmony import */ var _shared_config_credentials_credentials_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./shared/config/credentials/credentials.component */ "./src/app/shared/config/credentials/credentials.component.ts");
/* harmony import */ var _shared_config_refresh_code_refresh_code_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./shared/config/refresh-code/refresh-code.component */ "./src/app/shared/config/refresh-code/refresh-code.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/text-field.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_upload_upload_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./shared/upload/upload.component */ "./src/app/shared/upload/upload.component.ts");
/* harmony import */ var _shared_config_yt_conifg_yt_conifg_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./shared/config/yt-conifg/yt-conifg.component */ "./src/app/shared/config/yt-conifg/yt-conifg.component.ts");
/* harmony import */ var _shared_error_msg_pipe__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./shared/error-msg.pipe */ "./src/app/shared/error-msg.pipe.ts");
/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


































































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_18__["SharedModule"],
            _angular_youtube_player__WEBPACK_IMPORTED_MODULE_20__["YouTubePlayerModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_25__["Ng2SearchPipeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _asset_gallery_asset_gallery_component__WEBPACK_IMPORTED_MODULE_6__["AssetGalleryComponent"],
        _asset_details_asset_details_component__WEBPACK_IMPORTED_MODULE_7__["AssetDetailsComponent"],
        _asset_asset_component__WEBPACK_IMPORTED_MODULE_8__["AssetComponent"],
        _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_9__["ToolbarComponent"],
        _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_10__["SearchBarComponent"],
        _settings_settings_component__WEBPACK_IMPORTED_MODULE_11__["SettingsComponent"],
        _app_setup_app_setup_component__WEBPACK_IMPORTED_MODULE_12__["AppSetupComponent"],
        _upload_assets_upload_assets_component__WEBPACK_IMPORTED_MODULE_13__["UploadAssetsComponent"],
        _upload_assets_upload_text_upload_text_component__WEBPACK_IMPORTED_MODULE_14__["UploadTextComponent"],
        _upload_assets_upload_img_upload_img_component__WEBPACK_IMPORTED_MODULE_15__["UploadImgComponent"],
        _upload_assets_upload_video_upload_video_component__WEBPACK_IMPORTED_MODULE_16__["UploadVideoComponent"],
        _upload_assets_upload_html_upload_html_component__WEBPACK_IMPORTED_MODULE_17__["UploadHtmlComponent"],
        _preview_preview_component__WEBPACK_IMPORTED_MODULE_19__["PreviewComponent"],
        _account_struct_account_struct_component__WEBPACK_IMPORTED_MODULE_21__["AccountStructComponent"],
        _asset_grid_asset_grid_component__WEBPACK_IMPORTED_MODULE_22__["AssetGridComponent"],
        _error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_23__["ErrorDialogComponent"],
        _upload_assets_video_select_video_select_component__WEBPACK_IMPORTED_MODULE_24__["VideoSelectComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_26__["LoginComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_18__["SharedModule"],
        _angular_youtube_player__WEBPACK_IMPORTED_MODULE_20__["YouTubePlayerModule"],
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_25__["Ng2SearchPipeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _asset_gallery_asset_gallery_component__WEBPACK_IMPORTED_MODULE_6__["AssetGalleryComponent"],
                    _asset_details_asset_details_component__WEBPACK_IMPORTED_MODULE_7__["AssetDetailsComponent"],
                    _asset_asset_component__WEBPACK_IMPORTED_MODULE_8__["AssetComponent"],
                    _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_9__["ToolbarComponent"],
                    _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_10__["SearchBarComponent"],
                    _settings_settings_component__WEBPACK_IMPORTED_MODULE_11__["SettingsComponent"],
                    _app_setup_app_setup_component__WEBPACK_IMPORTED_MODULE_12__["AppSetupComponent"],
                    _upload_assets_upload_assets_component__WEBPACK_IMPORTED_MODULE_13__["UploadAssetsComponent"],
                    _upload_assets_upload_text_upload_text_component__WEBPACK_IMPORTED_MODULE_14__["UploadTextComponent"],
                    _upload_assets_upload_img_upload_img_component__WEBPACK_IMPORTED_MODULE_15__["UploadImgComponent"],
                    _upload_assets_upload_video_upload_video_component__WEBPACK_IMPORTED_MODULE_16__["UploadVideoComponent"],
                    _upload_assets_upload_html_upload_html_component__WEBPACK_IMPORTED_MODULE_17__["UploadHtmlComponent"],
                    _preview_preview_component__WEBPACK_IMPORTED_MODULE_19__["PreviewComponent"],
                    _account_struct_account_struct_component__WEBPACK_IMPORTED_MODULE_21__["AccountStructComponent"],
                    _asset_grid_asset_grid_component__WEBPACK_IMPORTED_MODULE_22__["AssetGridComponent"],
                    _error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_23__["ErrorDialogComponent"],
                    _upload_assets_video_select_video_select_component__WEBPACK_IMPORTED_MODULE_24__["VideoSelectComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_26__["LoginComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_18__["SharedModule"],
                    _angular_youtube_player__WEBPACK_IMPORTED_MODULE_20__["YouTubePlayerModule"],
                    ng2_search_filter__WEBPACK_IMPORTED_MODULE_25__["Ng2SearchPipeModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            }]
    }], null, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_upload_assets_upload_assets_component__WEBPACK_IMPORTED_MODULE_13__["UploadAssetsComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_27__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_28__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_28__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_28__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_28__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_28__["ɵangular_packages_router_router_l"], _shared_progress_btn_progress_btn_component__WEBPACK_IMPORTED_MODULE_29__["ProgressBtnComponent"], _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_30__["LoaderComponent"], _shared_config_credentials_credentials_component__WEBPACK_IMPORTED_MODULE_31__["CredentialsComponent"], _shared_config_refresh_code_refresh_code_component__WEBPACK_IMPORTED_MODULE_32__["RefreshCodeComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_33__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_33__["MatAnchor"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_34__["Dir"], _angular_material_card__WEBPACK_IMPORTED_MODULE_35__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_35__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_35__["MatCardTitleGroup"], _angular_material_card__WEBPACK_IMPORTED_MODULE_35__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_35__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_35__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_35__["MatCardActions"], _angular_material_card__WEBPACK_IMPORTED_MODULE_35__["MatCardFooter"], _angular_material_card__WEBPACK_IMPORTED_MODULE_35__["MatCardSmImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_35__["MatCardMdImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_35__["MatCardLgImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_35__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_35__["MatCardXlImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_35__["MatCardAvatar"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_36__["MatCheckbox"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_36__["MatCheckboxRequiredValidator"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_37__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_37__["MatVerticalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_37__["MatStep"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_37__["MatStepLabel"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_37__["MatStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_37__["MatStepperNext"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_37__["MatStepperPrevious"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_37__["MatStepHeader"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_37__["MatStepperIcon"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_38__["MatDialogContainer"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_38__["MatDialogClose"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_38__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_38__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_38__["MatDialogActions"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_39__["MatDivider"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_40__["MatIcon"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_41__["CdkAutofill"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_41__["CdkTextareaAutosize"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_42__["MatError"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_42__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_42__["MatHint"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_42__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_42__["MatPlaceholder"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_42__["MatPrefix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_42__["MatSuffix"], _angular_material_input__WEBPACK_IMPORTED_MODULE_43__["MatInput"], _angular_material_input__WEBPACK_IMPORTED_MODULE_43__["MatTextareaAutosize"], _angular_material_list__WEBPACK_IMPORTED_MODULE_44__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_44__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_44__["MatListItem"], _angular_material_list__WEBPACK_IMPORTED_MODULE_44__["MatListAvatarCssMatStyler"], _angular_material_core__WEBPACK_IMPORTED_MODULE_45__["MatLine"], _angular_material_list__WEBPACK_IMPORTED_MODULE_44__["MatListIconCssMatStyler"], _angular_material_list__WEBPACK_IMPORTED_MODULE_44__["MatListSubheaderCssMatStyler"], _angular_material_core__WEBPACK_IMPORTED_MODULE_45__["MatPseudoCheckbox"], _angular_material_list__WEBPACK_IMPORTED_MODULE_44__["MatSelectionList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_44__["MatListOption"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_46__["MatPaginator"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_47__["MatProgressBar"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_48__["MatProgressSpinner"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_48__["MatSpinner"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_49__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_49__["MatRadioButton"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_50__["CdkScrollable"], _angular_material_select__WEBPACK_IMPORTED_MODULE_51__["MatSelect"], _angular_material_select__WEBPACK_IMPORTED_MODULE_51__["MatSelectTrigger"], _angular_material_core__WEBPACK_IMPORTED_MODULE_45__["MatOption"], _angular_material_core__WEBPACK_IMPORTED_MODULE_45__["MatOptgroup"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_52__["MatDrawer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_52__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_52__["MatDrawerContent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_52__["MatSidenav"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_52__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_52__["MatSidenavContent"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_53__["MatSnackBarContainer"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_54__["MatSort"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_54__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_55__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_55__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_55__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_55__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_55__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_55__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_55__["MatFooterCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_55__["MatFooterRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_55__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_55__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_55__["MatFooterCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_55__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_55__["MatRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_55__["MatFooterRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_55__["MatNoDataRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_55__["MatTextColumn"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_56__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_56__["MatTabLabel"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_56__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_56__["MatTabNav"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_56__["MatTabLink"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_56__["MatTabContent"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_57__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_57__["MatToolbarRow"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_58__["MatNestedTreeNode"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_58__["MatTreeNodeDef"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_58__["MatTreeNodePadding"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_58__["MatTreeNodeToggle"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_58__["MatTree"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_58__["MatTreeNode"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_58__["MatTreeNodeOutlet"], _angular_forms__WEBPACK_IMPORTED_MODULE_59__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_59__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_59__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_59__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_59__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_59__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_59__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_59__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_59__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_59__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_59__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_59__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_59__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_59__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_59__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_59__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_59__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_59__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_59__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_59__["NgModelGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_59__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_59__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_59__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_59__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_59__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_59__["FormArrayName"], _shared_upload_upload_component__WEBPACK_IMPORTED_MODULE_60__["UploadComponent"], _shared_config_yt_conifg_yt_conifg_component__WEBPACK_IMPORTED_MODULE_61__["YtConifgComponent"], _angular_youtube_player__WEBPACK_IMPORTED_MODULE_20__["YouTubePlayer"], _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
    _asset_gallery_asset_gallery_component__WEBPACK_IMPORTED_MODULE_6__["AssetGalleryComponent"],
    _asset_details_asset_details_component__WEBPACK_IMPORTED_MODULE_7__["AssetDetailsComponent"],
    _asset_asset_component__WEBPACK_IMPORTED_MODULE_8__["AssetComponent"],
    _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_9__["ToolbarComponent"],
    _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_10__["SearchBarComponent"],
    _settings_settings_component__WEBPACK_IMPORTED_MODULE_11__["SettingsComponent"],
    _app_setup_app_setup_component__WEBPACK_IMPORTED_MODULE_12__["AppSetupComponent"],
    _upload_assets_upload_assets_component__WEBPACK_IMPORTED_MODULE_13__["UploadAssetsComponent"],
    _upload_assets_upload_text_upload_text_component__WEBPACK_IMPORTED_MODULE_14__["UploadTextComponent"],
    _upload_assets_upload_img_upload_img_component__WEBPACK_IMPORTED_MODULE_15__["UploadImgComponent"],
    _upload_assets_upload_video_upload_video_component__WEBPACK_IMPORTED_MODULE_16__["UploadVideoComponent"],
    _upload_assets_upload_html_upload_html_component__WEBPACK_IMPORTED_MODULE_17__["UploadHtmlComponent"],
    _preview_preview_component__WEBPACK_IMPORTED_MODULE_19__["PreviewComponent"],
    _account_struct_account_struct_component__WEBPACK_IMPORTED_MODULE_21__["AccountStructComponent"],
    _asset_grid_asset_grid_component__WEBPACK_IMPORTED_MODULE_22__["AssetGridComponent"],
    _error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_23__["ErrorDialogComponent"],
    _upload_assets_video_select_video_select_component__WEBPACK_IMPORTED_MODULE_24__["VideoSelectComponent"],
    _login_login_component__WEBPACK_IMPORTED_MODULE_26__["LoginComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_27__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["KeyValuePipe"], _shared_error_msg_pipe__WEBPACK_IMPORTED_MODULE_62__["ErrorMsgPipe"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_25__["Ng2SearchPipe"]]);


/***/ }),

/***/ "./src/app/asset-details/asset-details.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/asset-details/asset-details.component.ts ***!
  \**********************************************************/
/*! exports provided: AssetDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetDetailsComponent", function() { return AssetDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _model_asset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../model/asset */ "./src/app/model/asset.ts");
/* harmony import */ var _model_response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/response */ "./src/app/model/response.ts");
/* harmony import */ var _account_struct_account_struct_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../account-struct/account-struct.component */ "./src/app/account-struct/account-struct.component.ts");
/* harmony import */ var _services_asset_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/asset.service */ "./src/app/services/asset.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _asset_asset_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../asset/asset.component */ "./src/app/asset/asset.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_progress_btn_progress_btn_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/progress-btn/progress-btn.component */ "./src/app/shared/progress-btn/progress-btn.component.ts");
/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */














const _c0 = ["accountAdGroups"];
function AssetDetailsComponent_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Dimensions: ", ctx_r0.asset == null ? null : ctx_r0.asset.image_width, " x ", ctx_r0.asset == null ? null : ctx_r0.asset.image_height, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Size: ", ctx_r0.asset == null ? null : ctx_r0.asset.file_size, "");
} }
function AssetDetailsComponent_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r1.asset == null ? null : ctx_r1.asset.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class AssetDetailsComponent {
    constructor(dataService, _snackBar) {
        this.dataService = dataService;
        this._snackBar = _snackBar;
        this._subscriptions = [];
        this.assetType = _model_asset__WEBPACK_IMPORTED_MODULE_1__["AssetType"];
        /** Update button params */
        this.updateInProgress = false;
        this.updateMessage = '';
        this.isErrorMessage = false;
    }
    get asset() {
        return this._activeAsset;
    }
    set account(account) {
        this._account = account;
    }
    get account() {
        return this._account;
    }
    ngOnInit() {
        this._subscriptions.push(this.dataService.activeAsset$.subscribe((asset) => {
            this._activeAsset = asset;
        }));
        this._subscriptions.push(this.dataService.activeAssetAdGroups$.subscribe((_) => {
            this.updateMessage = '';
            this.isErrorMessage = false;
        }));
        this._subscriptions.push(this.dataService.updateFinished$.subscribe((response) => {
            this.updateInProgress = false;
            if (response) {
                this.updateMessage = response.msg;
                this.isErrorMessage = response.status_code !== _model_response__WEBPACK_IMPORTED_MODULE_2__["STATUS"].SUCCESS;
                if (!this.isErrorMessage) {
                    // Update succeeded - reset the checkboxes edit state
                    this.accountAdGroups.resetEditedRows();
                    this._snackBar.open('Updated Successfully', '', {
                        duration: 2000,
                        horizontalPosition: 'center',
                        verticalPosition: 'bottom',
                    });
                }
            }
        }));
    }
    ngOnDestroy() {
        for (let sub of this._subscriptions) {
            sub.unsubscribe();
        }
    }
    onClose() {
        this.closeAssetDetails();
    }
    updateAsset() {
        let mutateRecords = [];
        this.accountAdGroups.getUpdatedRows().forEach((row) => {
            mutateRecords.push(...this.createMutateRecord(row));
        });
        console.log('Mutate: ', mutateRecords);
        if (mutateRecords.length) {
            this.updateInProgress = true;
            this.dataService.updateAsset(this.asset, mutateRecords);
        }
    }
    loadAdGroups() {
        this.accountAdGroups.sortBySelection();
        this.accountAdGroups.resetEditedRows();
    }
    createMutateRecord(row) {
        // Assume it's a non-text asset unless it is text
        let selArray;
        let mutateObjs = [];
        let connection = _model_asset__WEBPACK_IMPORTED_MODULE_1__["AssetConnType"].ADGROUP;
        if (this.asset.type != this.assetType.TEXT) {
            selArray = this.accountAdGroups.adgroup_sel;
            mutateObjs.push(this.createMutateObj(connection, row, selArray));
        }
        else {
            if (row.isEdited[_account_struct_account_struct_component__WEBPACK_IMPORTED_MODULE_3__["AssetConn"].HEADLINE]) {
                connection = _model_asset__WEBPACK_IMPORTED_MODULE_1__["AssetConnType"].HEADLINE;
                selArray = this.accountAdGroups.headline_sel;
                mutateObjs.push(this.createMutateObj(connection, row, selArray));
            }
            if (row.isEdited[_account_struct_account_struct_component__WEBPACK_IMPORTED_MODULE_3__["AssetConn"].DESC]) {
                connection = _model_asset__WEBPACK_IMPORTED_MODULE_1__["AssetConnType"].DESC;
                selArray = this.accountAdGroups.description_sel;
                mutateObjs.push(this.createMutateObj(connection, row, selArray));
            }
        }
        return mutateObjs;
    }
    /** Helper function to create the mutate Object */
    createMutateObj(connection, row, selArray) {
        // Check if its added or removed
        let action = selArray.isSelected(row)
            ? _model_asset__WEBPACK_IMPORTED_MODULE_1__["MutateAction"].ADD
            : _model_asset__WEBPACK_IMPORTED_MODULE_1__["MutateAction"].REMOVE;
        let assetObj = this.createAssetObj(connection);
        let mutateObj = {
            account: this._account.id,
            adgroup: row.id,
            action: action,
            asset: assetObj,
        };
        return mutateObj;
    }
    /** Helper function that creates the appropriate asset object */
    createAssetObj(connection) {
        let assetObj = {
            id: this._activeAsset.id,
            type: this._activeAsset.type,
        };
        switch (this._activeAsset.type) {
            case _model_asset__WEBPACK_IMPORTED_MODULE_1__["AssetType"].TEXT:
                assetObj.asset_text = this._activeAsset.asset_text;
                assetObj.text_type_to_assign = connection.toLowerCase();
                break;
            case _model_asset__WEBPACK_IMPORTED_MODULE_1__["AssetType"].VIDEO:
                assetObj.video_id = this._activeAsset.video_id;
                break;
        }
        return assetObj;
    }
}
AssetDetailsComponent.ɵfac = function AssetDetailsComponent_Factory(t) { return new (t || AssetDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_asset_service__WEBPACK_IMPORTED_MODULE_4__["AssetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"])); };
AssetDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AssetDetailsComponent, selectors: [["app-asset-details"]], viewQuery: function AssetDetailsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.accountAdGroups = _t.first);
    } }, inputs: { account: "account", closeAssetDetails: "closeAssetDetails" }, decls: 29, vars: 14, consts: [[1, "primary-color"], ["mat-icon-button", "", 1, "close-button", 3, "click"], [1, "close-icon"], [1, "asset-details"], [1, "asset-info"], [3, "asset"], [1, "primary-color", "info-header"], [3, "ngSwitch"], ["class", "img-details", 4, "ngSwitchCase"], ["class", "video-details", 4, "ngSwitchCase"], [1, "asset-stats"], [3, "account", "activeAsset"], ["accountAdGroups", ""], ["btnLabel", "Update", 3, "btnUpdateMsg", "isError", "inProgress", "btnClick"], [1, "img-details"], [1, "video-details"], ["target", "_blank", 3, "href"]], template: function AssetDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Asset Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AssetDetailsComponent_Template_button_click_2_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-asset", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AssetDetailsComponent_span_13_Template, 5, 3, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AssetDetailsComponent_span_14_Template, 4, 1, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Stats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-account-struct", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "app-progress-btn", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("btnClick", function AssetDetailsComponent_Template_app_progress_btn_btnClick_28_listener() { return ctx.updateAsset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("asset", ctx.asset);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.asset == null ? null : ctx.asset.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.asset == null ? null : ctx.asset.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.assetType.IMG);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.assetType.VIDEO);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Clicks: ", ctx.asset == null ? null : ctx.asset.stats == null ? null : ctx.asset.stats.clicks, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Impressions: ", ctx.asset == null ? null : ctx.asset.stats == null ? null : ctx.asset.stats.impressions, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Cost: ", ctx.asset == null ? null : ctx.asset.stats == null ? null : ctx.asset.stats.cost, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("All conversions: ", ctx.asset == null ? null : ctx.asset.stats == null ? null : ctx.asset.stats.all_conversions, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("account", ctx.account)("activeAsset", ctx.asset);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("btnUpdateMsg", ctx.updateMessage)("isError", ctx.isErrorMessage)("inProgress", ctx.updateInProgress);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDivider"], _asset_asset_component__WEBPACK_IMPORTED_MODULE_9__["AssetComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgSwitchCase"], _account_struct_account_struct_component__WEBPACK_IMPORTED_MODULE_3__["AccountStructComponent"], _shared_progress_btn_progress_btn_component__WEBPACK_IMPORTED_MODULE_11__["ProgressBtnComponent"]], styles: ["[_nghost-%COMP%] {\n  padding-bottom: 40px;\n}\n\nh1[_ngcontent-%COMP%] {\n  background-color: white;\n  margin: unset;\n  text-align: left;\n}\n\n.close-button[_ngcontent-%COMP%]{\n  float: right;\n}\n\n.close-icon[_ngcontent-%COMP%] {\n  height: 32px;\n}\n\n.asset-details[_ngcontent-%COMP%] {\n  display: grid;\n  grid-gap: 30px;\n  grid-template-columns: -webkit-max-content auto;\n  grid-template-columns: max-content auto;\n  padding-bottom: 0px;\n}\n\n.asset-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: grid;\n  width: 100%x;\n  padding: 5px;\n\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n}\n\n.asset-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.img-details[_ngcontent-%COMP%], .video-details[_ngcontent-%COMP%], .asset-stats[_ngcontent-%COMP%] {\n  display: grid;\n}\n\n.info-header[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  font-weight: bold;\n}\n\n.mat-card-image[_ngcontent-%COMP%]:first-child {\n  margin-top: unset !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXNzZXQtZGV0YWlscy9hc3NldC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2QsK0NBQXVDO0VBQXZDLHVDQUF1QztFQUN2QyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLFlBQVk7O0VBRVosZ0JBQWdCO0VBQ2hCLHVCQUF1Qjs7QUFFekI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7OztFQUdFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCIiwiZmlsZSI6InNyYy9hcHAvYXNzZXQtZGV0YWlscy9hc3NldC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xufVxuXG5oMSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IHVuc2V0O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uY2xvc2UtYnV0dG9ue1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5jbG9zZS1pY29uIHtcbiAgaGVpZ2h0OiAzMnB4O1xufVxuXG4uYXNzZXQtZGV0YWlscyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtZ2FwOiAzMHB4O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1heC1jb250ZW50IGF1dG87XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG5cbi5hc3NldC1pbmZvIHAge1xuICBkaXNwbGF5OiBncmlkO1xuICB3aWR0aDogMTAwJXg7XG4gIHBhZGRpbmc6IDVweDtcblxuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcblxufVxuXG4uYXNzZXQtaW5mbyBwIHNwYW4ge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uaW1nLWRldGFpbHMsXG4udmlkZW8tZGV0YWlscyxcbi5hc3NldC1zdGF0cyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG59XG5cbi5pbmZvLWhlYWRlciB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5tYXQtY2FyZC1pbWFnZTpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi10b3A6IHVuc2V0ICFpbXBvcnRhbnQ7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AssetDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-asset-details',
                templateUrl: './asset-details.component.html',
                styleUrls: ['./asset-details.component.css'],
            }]
    }], function () { return [{ type: _services_asset_service__WEBPACK_IMPORTED_MODULE_4__["AssetService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }]; }, { account: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], closeAssetDetails: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], accountAdGroups: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['accountAdGroups']
        }] }); })();


/***/ }),

/***/ "./src/app/asset-gallery/asset-gallery.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/asset-gallery/asset-gallery.component.ts ***!
  \**********************************************************/
/*! exports provided: AssetGalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetGalleryComponent", function() { return AssetGalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_setup_app_setup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app-setup/app-setup.component */ "./src/app/app-setup/app-setup.component.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _services_asset_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/asset.service */ "./src/app/services/asset.service.ts");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var _services_authorization_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/authorization.service */ "./src/app/services/authorization.service.ts");
/* harmony import */ var _services_reload_app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/reload-app.service */ "./src/app/services/reload-app.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../toolbar/toolbar.component */ "./src/app/toolbar/toolbar.component.ts");
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/loader/loader.component */ "./src/app/shared/loader/loader.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _asset_details_asset_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../asset-details/asset-details.component */ "./src/app/asset-details/asset-details.component.ts");
/* harmony import */ var _asset_grid_asset_grid_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../asset-grid/asset-grid.component */ "./src/app/asset-grid/asset-grid.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");

















const _c0 = ["sideNav"];
const _c1 = ["assetDetails"];
function AssetGalleryComponent_mat_sidenav_container_2_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-asset-grid", 7);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("account", ctx_r3.account)("openAssetDetails", ctx_r3.openAssetDetailsFunc)("closeAssetDetails", ctx_r3.closeAssetDetailsFunc);
} }
function AssetGalleryComponent_mat_sidenav_container_2_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please login to view assets.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AssetGalleryComponent_mat_sidenav_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-asset-details", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-sidenav-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AssetGalleryComponent_mat_sidenav_container_2_ng_template_6_Template, 1, 3, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AssetGalleryComponent_mat_sidenav_container_2_ng_template_7_Template, 3, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("account", ctx_r0.account)("closeAssetDetails", ctx_r0.closeAssetDetailsFunc);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showAssetGrid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.showAssetGrid);
} }
class AssetGalleryComponent {
    constructor(_dataService, _configService, _authorizationService, _reloadAppService, _setupDialog, _snackBar) {
        this._dataService = _dataService;
        this._configService = _configService;
        this._authorizationService = _authorizationService;
        this._reloadAppService = _reloadAppService;
        this._setupDialog = _setupDialog;
        this._snackBar = _snackBar;
        this._subscriptions = [];
        this.openSideNav = false;
        this.showAssetGrid = false;
    }
    getConfigService() {
        return this._configService;
    }
    ngOnInit() {
        this._configService.loadConfigSettings();
        this._configService.loadYtConfigSettings();
        this._configService.configLoaded$.subscribe((loaded) => {
            let config = this._configService.getConfigSettings();
            if (!loaded && config) {
                const configDialogRef = this._setupDialog.open(_app_setup_app_setup_component__WEBPACK_IMPORTED_MODULE_1__["AppSetupComponent"], {
                    disableClose: true,
                    data: config,
                });
                configDialogRef.afterClosed().subscribe((success) => {
                    if (success) {
                        console.log('Credentials Valid');
                    }
                });
            }
        });
        this._subscriptions.push(this._authorizationService.loggedIn$.subscribe((loggedIn) => {
            if (loggedIn) {
                this.showAssetGrid = true;
            }
            else {
                this.showAssetGrid = false;
            }
        }));
        this._subscriptions.push(this._dataService.accountAGs$.subscribe((account) => {
            var _a;
            this.account = account;
            (_a = this.sideNav) === null || _a === void 0 ? void 0 : _a.close();
        }));
    }
    ngOnDestroy() {
        for (let sub of this._subscriptions) {
            sub.unsubscribe();
        }
    }
    /** Binder functions to enable calling from child */
    get openAssetDetailsFunc() {
        return this.openAssetDetails.bind(this);
    }
    get closeAssetDetailsFunc() {
        return this.closeAssetDetails.bind(this);
    }
    /** Functions that may need to be called from a child component */
    openAssetDetails() {
        this.openSideNav = true;
        if (!this.sideNav.opened) {
            this.assetDetails.loadAdGroups();
            this.sideNav.open();
        }
    }
    closeAssetDetails() {
        this.sideNav.close();
        this._dataService.unselectAsset();
    }
    openSnackBar() {
        this._snackBar.open('Loading AssetMG. This may take a few mintues... ', '', {
            duration: undefined,
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
        });
    }
    openSnackBarStructFail() {
        this._snackBar.open('Failed Loading AssetMG', '', {
            duration: undefined,
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
        });
    }
    dismissSnackBar() {
        this._snackBar.dismiss();
    }
}
AssetGalleryComponent.ɵfac = function AssetGalleryComponent_Factory(t) { return new (t || AssetGalleryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_asset_service__WEBPACK_IMPORTED_MODULE_3__["AssetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authorization_service__WEBPACK_IMPORTED_MODULE_5__["AuthorizationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_reload_app_service__WEBPACK_IMPORTED_MODULE_6__["ReloadAppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"])); };
AssetGalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AssetGalleryComponent, selectors: [["app-asset-gallery"]], viewQuery: function AssetGalleryComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sideNav = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.assetDetails = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 3, vars: 2, consts: [[1, "toolbar", 3, "loadAccounts"], [4, "ngIf"], ["position", "end", "mode", "over", "closed", "", 1, "asset-details-container", "mat-elevation-z8"], ["sideNav", ""], [3, "account", "closeAssetDetails"], ["assetDetails", ""], [3, "ngIf"], [3, "account", "openAssetDetails", "closeAssetDetails", "hidden"], [1, "pad-div"]], template: function AssetGalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loader");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AssetGalleryComponent_mat_sidenav_container_2_Template, 8, 4, "mat-sidenav-container", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loadAccounts", ctx.getConfigService().configValid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getConfigService().configValid);
    } }, directives: [_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_9__["ToolbarComponent"], _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_10__["LoaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenav"], _asset_details_asset_details_component__WEBPACK_IMPORTED_MODULE_13__["AssetDetailsComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavContent"], _asset_grid_asset_grid_component__WEBPACK_IMPORTED_MODULE_14__["AssetGridComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCard"]], styles: ["mat-sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n\n  flex: 1;\n  position: fixed;\n  width: 100%;\n  min-width: 100%;\n\n  height: calc(100% - 64px);\n  min-height: calc(100% - 64px);\n}\n\nmat-sidenav-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 90%;\n  height: 100%;\n  margin: auto;\n  padding-left: 40px;\n  padding-right: 40px;\n}\n\nmat-sidenav[_ngcontent-%COMP%] {\n  padding: 20px;\n  padding-top: 0px;\n}\n\napp-asset-grid[_ngcontent-%COMP%] {\n  display: contents;\n}\n\n.asset-details-container[_ngcontent-%COMP%] {\n  max-width: 1500;\n  width: 90%;\n  height: 100%;\n}\n\n.left-align-content[_ngcontent-%COMP%] {\n  margin: unset;\n}\n\n.pad-div[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXNzZXQtZ2FsbGVyeS9hc3NldC1nYWxsZXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZOztFQUVaLE9BQU87RUFDUCxlQUFlO0VBQ2YsV0FBVztFQUNYLGVBQWU7O0VBRWYseUJBQXlCO0VBQ3pCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsVUFBVTtFQUNWLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2Fzc2V0LWdhbGxlcnkvYXNzZXQtZ2FsbGVyeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIGZsZXg6IDE7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogMTAwJTtcblxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDY0cHgpO1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMCUgLSA2NHB4KTtcbn1cblxubWF0LXNpZGVuYXYtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG59XG5cbm1hdC1zaWRlbmF2IHtcbiAgcGFkZGluZzogMjBweDtcbiAgcGFkZGluZy10b3A6IDBweDtcbn1cbmFwcC1hc3NldC1ncmlkIHtcbiAgZGlzcGxheTogY29udGVudHM7XG59XG5cbi5hc3NldC1kZXRhaWxzLWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTUwMDtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubGVmdC1hbGlnbi1jb250ZW50IHtcbiAgbWFyZ2luOiB1bnNldDtcbn1cblxuLnBhZC1kaXYge1xuICBwYWRkaW5nOiAyMHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AssetGalleryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-asset-gallery',
                templateUrl: './asset-gallery.component.html',
                styleUrls: ['./asset-gallery.component.css'],
            }]
    }], function () { return [{ type: _services_asset_service__WEBPACK_IMPORTED_MODULE_3__["AssetService"] }, { type: _services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }, { type: _services_authorization_service__WEBPACK_IMPORTED_MODULE_5__["AuthorizationService"] }, { type: _services_reload_app_service__WEBPACK_IMPORTED_MODULE_6__["ReloadAppService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"] }]; }, { sideNav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['sideNav']
        }], assetDetails: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['assetDetails']
        }], paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]]
        }] }); })();


/***/ }),

/***/ "./src/app/asset-grid/asset-grid.component.ts":
/*!****************************************************!*\
  !*** ./src/app/asset-grid/asset-grid.component.ts ***!
  \****************************************************/
/*! exports provided: AssetGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetGridComponent", function() { return AssetGridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _model_asset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/asset */ "./src/app/model/asset.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _upload_assets_upload_assets_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../upload-assets/upload-assets.component */ "./src/app/upload-assets/upload-assets.component.ts");
/* harmony import */ var _services_asset_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/asset.service */ "./src/app/services/asset.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../search-bar/search-bar.component */ "./src/app/search-bar/search-bar.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _asset_asset_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../asset/asset.component */ "./src/app/asset/asset.component.ts");














function AssetGridComponent_app_search_bar_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-search-bar", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("searchCriteria", function AssetGridComponent_app_search_bar_0_Template_app_search_bar_searchCriteria_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.filterByStr($event); })("filterCriteria", function AssetGridComponent_app_search_bar_0_Template_app_search_bar_filterCriteria_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.filterByType($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("filterOptions", ctx_r0.filterOptions);
} }
function AssetGridComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AssetGridComponent_div_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.uploadAsset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add Assets");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AssetGridComponent_app_asset_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-asset", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AssetGridComponent_app_asset_3_Template_app_asset_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const asset_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.selectAsset(asset_r8.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const asset_r8 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("asset", asset_r8)("selectedAssetId", ctx_r2.activeAssetId);
} }
const _c0 = function () { return [25, 50, 100]; };
const ASSET_TYPES = [
    {
        label: 'All Assets',
        value: _model_asset__WEBPACK_IMPORTED_MODULE_1__["AssetType"].ALL,
    },
    {
        label: 'Image',
        value: _model_asset__WEBPACK_IMPORTED_MODULE_1__["AssetType"].IMG,
    },
    {
        label: 'Text',
        value: _model_asset__WEBPACK_IMPORTED_MODULE_1__["AssetType"].TEXT,
    },
    {
        label: 'Video',
        value: _model_asset__WEBPACK_IMPORTED_MODULE_1__["AssetType"].VIDEO,
    },
    {
        label: 'HTML',
        value: _model_asset__WEBPACK_IMPORTED_MODULE_1__["AssetType"].HTML,
    },
];
class AssetGridComponent {
    constructor(_dataService, _uploadDialog) {
        this._dataService = _dataService;
        this._uploadDialog = _uploadDialog;
        this._subscriptions = [];
        this.filterOptions = ASSET_TYPES;
        this.filterStr = '';
        this.filterType = _model_asset__WEBPACK_IMPORTED_MODULE_1__["AssetType"].ALL;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.filteredAssets);
    }
    ngOnInit() {
        this.assetsPerPage$ = this.dataSource.connect();
        this._subscriptions.push(this._dataService.allAssets$.subscribe((assets) => {
            this.assets = assets;
            this.filteredAssets = assets;
            if (this.filteredAssets && this.assets) {
                this.dataSource.data = this.filteredAssets;
                this.dataSource.paginator = this.paginator;
            }
        }));
    }
    ngOnDestroy() {
        for (let sub of this._subscriptions) {
            sub.unsubscribe();
        }
        if (this.dataSource) {
            this.dataSource.disconnect();
        }
    }
    uploadAsset() {
        // Make sure to unselect any assets to avoid loading the campaign selection
        // of any previously selected assets
        this.unselectAsset();
        const uploadDialogRef = this._uploadDialog.open(_upload_assets_upload_assets_component__WEBPACK_IMPORTED_MODULE_4__["UploadAssetsComponent"], {
            disableClose: true,
            data: this.account,
        });
        uploadDialogRef.afterClosed().subscribe((response) => {
            if (response === null || response === void 0 ? void 0 : response.successful) {
                this.paginator.lastPage();
            }
        });
    }
    selectAsset(id) {
        this.activeAssetId = id;
        this.openAssetDetails(id);
    }
    unselectAsset() {
        this.activeAssetId = null;
        this.closeAssetDetails();
    }
    /** Close side nav when escape is pressed */
    onKeydownHandler(event) {
        this.unselectAsset();
    }
    filterByStr(searchStr) {
        this.filterStr = searchStr;
        this.filteredAssets = this.applyFilter();
        this.dataSource.data = this.filteredAssets;
    }
    filterByType(filterAssetType) {
        this.filterType = filterAssetType;
        this.filteredAssets = this.applyFilter();
        this.dataSource.data = this.filteredAssets;
    }
    /** Resturns assets with the search string their name or
     * in their text (for text assets) */
    applyFilter() {
        // Nothing to filter - return full set of assets
        if (!this.filterStr.length && this.filterType == _model_asset__WEBPACK_IMPORTED_MODULE_1__["AssetType"].ALL) {
            return this.assets;
        }
        // Filter by name and/or type
        let searchStr = this.filterStr.toLocaleLowerCase();
        return this.assets.filter((asset) => 
        // Filter assets by string
        (!searchStr.length ||
            asset.name.toLocaleLowerCase().indexOf(searchStr) != -1 ||
            (asset.type === _model_asset__WEBPACK_IMPORTED_MODULE_1__["AssetType"].TEXT &&
                asset.asset_text
                    .toLocaleLowerCase()
                    .indexOf(searchStr) != -1)) &&
            // filter assets by type
            (this.filterType === _model_asset__WEBPACK_IMPORTED_MODULE_1__["AssetType"].ALL || asset.type === this.filterType));
    }
}
AssetGridComponent.ɵfac = function AssetGridComponent_Factory(t) { return new (t || AssetGridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_asset_service__WEBPACK_IMPORTED_MODULE_5__["AssetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"])); };
AssetGridComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AssetGridComponent, selectors: [["app-asset-grid"]], viewQuery: function AssetGridComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, hostBindings: function AssetGridComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.escape", function AssetGridComponent_keydown_escape_HostBindingHandler($event) { return ctx.onKeydownHandler($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, inputs: { account: "account", openAssetDetails: "openAssetDetails", closeAssetDetails: "closeAssetDetails" }, decls: 6, vars: 8, consts: [["searchPlaceholderTxt", "Search your assets", 3, "filterOptions", "searchCriteria", "filterCriteria", 4, "ngIf"], [1, "grid-layout"], ["class", "placeholder-card", 4, "ngIf"], [3, "asset", "selectedAssetId", "click", 4, "ngFor", "ngForOf"], [3, "pageSizeOptions", "showFirstLastButtons"], ["searchPlaceholderTxt", "Search your assets", 3, "filterOptions", "searchCriteria", "filterCriteria"], [1, "placeholder-card"], ["mat-mini-fab", "", "color", "accent", "aria-label", "Add Asset", 3, "click"], [3, "asset", "selectedAssetId", "click"]], template: function AssetGridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AssetGridComponent_app_search_bar_0_Template, 1, 1, "app-search-bar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AssetGridComponent_div_2_Template, 6, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AssetGridComponent_app_asset_3_Template, 1, 2, "app-asset", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-paginator", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filteredAssets);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filteredAssets);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, ctx.assetsPerPage$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0))("showFirstLastButtons", true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_8__["SearchBarComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _asset_asset_component__WEBPACK_IMPORTED_MODULE_11__["AssetComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: [".grid-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-gap: 15px;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  padding-bottom: 40px;\n}\n\n.placeholder-card[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  height: 8rem;\n  width: auto;\n\n  color: grey;\n  display: flex;\n  flex-direction: column;\n  border: 1px dashed lightgray;\n  justify-content: center;\n  align-items: center;\n\n  \n  padding-top: 16px;\n  padding-bottom: 16px;\n}\n\n.placeholder-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: revert;\n}\n\nmat-paginator[_ngcontent-%COMP%] {\n  background-color: #f1f1f1;\n  border: 1px solid #d2d2d2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXNzZXQtZ3JpZC9hc3NldC1ncmlkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCw0REFBNEQ7RUFDNUQsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXOztFQUVYLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1Qix1QkFBdUI7RUFDdkIsbUJBQW1COztFQUVuQixxRUFBcUU7RUFDckUsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvYXNzZXQtZ3JpZC9hc3NldC1ncmlkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5ncmlkLWxheW91dCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtZ2FwOiAxNXB4O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyMDBweCwgMWZyKSk7XG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xufVxuXG4ucGxhY2Vob2xkZXItY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgaGVpZ2h0OiA4cmVtO1xuICB3aWR0aDogYXV0bztcblxuICBjb2xvcjogZ3JleTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm9yZGVyOiAxcHggZGFzaGVkIGxpZ2h0Z3JheTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgLyogQWRkIHRoaXMgcGFkZGluZyB0byBtYWtlIHVvIGZvciBtYXRlcmlhbCBjYXJkIHBhZGRpbmcgaW4gdGhlIGdyaWQqL1xuICBwYWRkaW5nLXRvcDogMTZweDtcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XG59XG5cbi5wbGFjZWhvbGRlci1jYXJkIHAge1xuICBtYXJnaW46IHJldmVydDtcbn1cblxubWF0LXBhZ2luYXRvciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkMmQyZDI7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AssetGridComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-asset-grid',
                templateUrl: './asset-grid.component.html',
                styleUrls: ['./asset-grid.component.css'],
            }]
    }], function () { return [{ type: _services_asset_service__WEBPACK_IMPORTED_MODULE_5__["AssetService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }]; }, { account: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], openAssetDetails: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], closeAssetDetails: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]]
        }], onKeydownHandler: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:keydown.escape', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/asset/asset.component.ts":
/*!******************************************!*\
  !*** ./src/app/asset/asset.component.ts ***!
  \******************************************/
/*! exports provided: AssetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetComponent", function() { return AssetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _model_asset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../model/asset */ "./src/app/model/asset.ts");
/* harmony import */ var _preview_preview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../preview/preview.component */ "./src/app/preview/preview.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_asset_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/asset.service */ "./src/app/services/asset.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */











const _c0 = function (a0) { return { "accent-border": a0 }; };
function AssetComponent_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AssetComponent_mat_card_1_Template_mat_card_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.openDetails(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AssetComponent_mat_card_1_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.openPreview(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "pageview");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r0.selectedAssetId === ctx_r0.asset.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.asset.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.asset.image_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AssetComponent_mat_card_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AssetComponent_mat_card_2_Template_mat_card_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.openDetails(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AssetComponent_mat_card_2_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.openPreview(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "pageview");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r1.selectedAssetId === ctx_r1.asset.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.asset.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.asset.image_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c1 = function (a0) { return { "fit-more-text": a0 }; };
function AssetComponent_mat_card_3_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AssetComponent_mat_card_3_Template_mat_card_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.openDetails(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Text ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r2.selectedAssetId === ctx_r2.asset.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx_r2.asset.asset_text.length >= 60));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.asset.asset_text, " ");
} }
function AssetComponent_mat_card_4_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AssetComponent_mat_card_4_Template_mat_card_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.openDetails(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r3.selectedAssetId === ctx_r3.asset.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.asset.name, " ");
} }
class AssetComponent {
    constructor(router, dataService, _previewDialog, _cd) {
        this.router = router;
        this.dataService = dataService;
        this._previewDialog = _previewDialog;
        this._cd = _cd;
        this.assetType = _model_asset__WEBPACK_IMPORTED_MODULE_1__["AssetType"];
    }
    set asset(asset) {
        this._asset = asset;
    }
    get asset() {
        return this._asset;
    }
    ngOnInit() { }
    openDetails() {
        this.dataService.changeAsset(this.asset);
    }
    openPreview() {
        let url = '';
        if (this._asset.type === _model_asset__WEBPACK_IMPORTED_MODULE_1__["AssetType"].IMG) {
            url = this._asset.image_url;
        }
        else if (this._asset.type === _model_asset__WEBPACK_IMPORTED_MODULE_1__["AssetType"].VIDEO) {
            let full_url = this._asset.link.split('=');
            url = full_url[full_url.length - 1];
        }
        this._previewDialog.open(_preview_preview_component__WEBPACK_IMPORTED_MODULE_2__["PreviewComponent"], {
            data: {
                type: this.asset.type,
                url: url,
            },
        });
    }
}
AssetComponent.ɵfac = function AssetComponent_Factory(t) { return new (t || AssetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_asset_service__WEBPACK_IMPORTED_MODULE_4__["AssetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
AssetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AssetComponent, selectors: [["app-asset"]], inputs: { asset: "asset", selectedAssetId: "selectedAssetId" }, decls: 5, vars: 5, consts: [[1, "asset-card", 3, "ngSwitch"], [3, "ngClass", "click", 4, "ngSwitchCase"], [3, "ngClass", "click"], [1, "far", "fa-image"], ["mat-card-image", "", "alt", "", 3, "src"], ["mat-icon-button", "", 3, "click"], [1, "fab", "fa-youtube"], [1, "fas", "fa-font"], [3, "ngClass"], [1, "fab", "fa-html5"], ["mat-card-image", "", "src", "./../../assets/html5_logo.png", "alt", ""]], template: function AssetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AssetComponent_mat_card_1_Template, 9, 5, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AssetComponent_mat_card_2_Template, 9, 5, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AssetComponent_mat_card_3_Template, 7, 7, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AssetComponent_mat_card_4_Template, 6, 4, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.asset == null ? null : ctx.asset.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.assetType.IMG);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.assetType.VIDEO);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.assetType.TEXT);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.assetType.HTML);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitchCase"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardImage"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"]], styles: ["[_nghost-%COMP%] {\n  height: 8rem;\n  width: auto;\n\n  display: flex;\n  align-items: center;\n\n  \n  padding-top: 16px;\n  padding-bottom: 16px;\n  margin-top: 2px;\n  margin-left: 2px;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flow-root;\n  width: 180px;\n  max-height: 100%;\n}\n\nmat-card-subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  border-bottom: groove;\n  border-width: thin;\n  display: inline-block;\n  width: 160px;\n  white-space: nowrap;\n  overflow: hidden !important;\n  text-overflow: ellipsis;\n}\n\nmat-card-content[_ngcontent-%COMP%] {\n  height: calc(100% - 2rem);\n}\n\nmat-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  -o-object-fit:scale-down ;\n     object-fit:scale-down ; \n  height: 100%;\n  width: 100%;\n  margin: auto;\n}\n\n.asset-card[_ngcontent-%COMP%] {\n  display: contents;\n  cursor: pointer;\n}\n\nmat-card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  position: relative;\n  top: 20%;\n  font-size: larger;\n}\n\n.fit-more-text[_ngcontent-%COMP%] {\n  top: 0% !important;\n  font-size: medium !important;\n}\n\nmat-card-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: relative;\n}\n\nmat-card-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 75%;\n  right: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXNzZXQvYXNzZXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixXQUFXOztFQUVYLGFBQWE7RUFDYixtQkFBbUI7O0VBRW5CLHFFQUFxRTtFQUNyRSxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLHVCQUF1QjtBQUN6Qjs7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUFzQjtLQUF0QixzQkFBc0IsRUFBRSw4REFBOEQ7RUFDdEYsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7QUFDWCIsImZpbGUiOiJzcmMvYXBwL2Fzc2V0L2Fzc2V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGhlaWdodDogOHJlbTtcbiAgd2lkdGg6IGF1dG87XG5cbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAvKiBBZGQgdGhpcyBwYWRkaW5nIHRvIG1ha2UgdW8gZm9yIG1hdGVyaWFsIGNhcmQgcGFkZGluZyBpbiB0aGUgZ3JpZCovXG4gIHBhZGRpbmctdG9wOiAxNnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgbWFyZ2luLXRvcDogMnB4O1xuICBtYXJnaW4tbGVmdDogMnB4O1xufVxuXG5tYXQtY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsb3ctcm9vdDtcbiAgd2lkdGg6IDE4MHB4O1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuXG5tYXQtY2FyZC1zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyLWJvdHRvbTogZ3Jvb3ZlO1xuICBib3JkZXItd2lkdGg6IHRoaW47XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDE2MHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxubWF0LWNhcmQtY29udGVudCB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMnJlbSk7XG59XG5cbm1hdC1jYXJkIGltZyB7XG4gIG9iamVjdC1maXQ6c2NhbGUtZG93biA7IC8qdGhpcyBtYWtlcyB0aGUgaW1hZ2UgaW4gc3JjIGZpdCB0byB0aGUgc2l6ZSBzcGVjaWZpZWQgYmVsb3cqL1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5hc3NldC1jYXJkIHtcbiAgZGlzcGxheTogY29udGVudHM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxubWF0LWNhcmQtY29udGVudCBwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMjAlO1xuICBmb250LXNpemU6IGxhcmdlcjtcbn1cblxuLmZpdC1tb3JlLXRleHQge1xuICB0b3A6IDAlICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogbWVkaXVtICFpbXBvcnRhbnQ7XG59XG5cbm1hdC1jYXJkLWNvbnRlbnQgaW1nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxubWF0LWNhcmQtY29udGVudCBidXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNzUlO1xuICByaWdodDogMiU7XG59XG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AssetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-asset',
                templateUrl: './asset.component.html',
                styleUrls: ['./asset.component.css'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _services_asset_service__WEBPACK_IMPORTED_MODULE_4__["AssetService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { asset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectedAssetId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/error-dialog/error-dialog.component.ts":
/*!********************************************************!*\
  !*** ./src/app/error-dialog/error-dialog.component.ts ***!
  \********************************************************/
/*! exports provided: ErrorDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorDialogComponent", function() { return ErrorDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _shared_progress_btn_progress_btn_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/progress-btn/progress-btn.component */ "./src/app/shared/progress-btn/progress-btn.component.ts");
/* harmony import */ var _shared_error_msg_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/error-msg.pipe */ "./src/app/shared/error-msg.pipe.ts");
/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */






class ErrorDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    reloadApp() {
        this.updateInProgress = true;
        this.dialogRef.close({ success: true });
    }
}
ErrorDialogComponent.ɵfac = function ErrorDialogComponent_Factory(t) { return new (t || ErrorDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
ErrorDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorDialogComponent, selectors: [["error-dialog"]], decls: 5, vars: 6, consts: [["mat-dialog-title", ""], [1, "error-message", 3, "innerHtml"], ["btnLabel", "Retry", 3, "btnUpdateMsg", "isError", "inProgress", "btnClick"]], template: function ErrorDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "styleErrorMsg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-progress-btn", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("btnClick", function ErrorDialogComponent_Template_app_progress_btn_btnClick_4_listener() { return ctx.reloadApp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx.data.errorMessage), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("btnUpdateMsg", ctx.updateMessage)("isError", ctx.isErrorMessage)("inProgress", ctx.updateInProgress);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _shared_progress_btn_progress_btn_component__WEBPACK_IMPORTED_MODULE_2__["ProgressBtnComponent"]], pipes: [_shared_error_msg_pipe__WEBPACK_IMPORTED_MODULE_3__["ErrorMsgPipe"]], styles: [".error-message[_ngcontent-%COMP%] {\n  white-space: break-spaces !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXJyb3ItZGlhbG9nL2Vycm9yLWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQW9DO0FBQ3RDIiwiZmlsZSI6InNyYy9hcHAvZXJyb3ItZGlhbG9nL2Vycm9yLWRpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yLW1lc3NhZ2Uge1xuICB3aGl0ZS1zcGFjZTogYnJlYWstc3BhY2VzICFpbXBvcnRhbnQ7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'error-dialog',
                templateUrl: 'error-dialog.component.html',
                styleUrls: ['./error-dialog.component.css'],
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/interceptors/http-error.interceptor.ts":
/*!********************************************************!*\
  !*** ./src/app/interceptors/http-error.interceptor.ts ***!
  \********************************************************/
/*! exports provided: HttpErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorInterceptor", function() { return HttpErrorInterceptor; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../error-dialog/error-dialog.component */ "./src/app/error-dialog/error-dialog.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _services_reload_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/reload-app.service */ "./src/app/services/reload-app.service.ts");







class HttpErrorInterceptor {
    constructor(dialog, reloadAppService) {
        this.dialog = dialog;
        this.reloadAppService = reloadAppService;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((error) => {
            if (error.error instanceof ErrorEvent) {
                // client-side error
                let errorMessage = `Client Side Error: ${error.error.message}`;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(errorMessage);
            }
            if (error.status === 403) {
                this.openErrorDialog(error.error);
            }
            // server-side error
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(error);
        }));
    }
    openErrorDialog(errorMessage) {
        const dialogRef = this.dialog.open(_error_dialog_error_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ErrorDialogComponent"], {
            width: '700px',
            disableClose: true,
            autoFocus: false,
            data: { errorMessage: errorMessage },
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result.success) {
                this.reloadAppService.reloadMcc.next(true);
            }
        });
    }
}
HttpErrorInterceptor.ɵfac = function HttpErrorInterceptor_Factory(t) { return new (t || HttpErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_reload_app_service__WEBPACK_IMPORTED_MODULE_5__["ReloadAppService"])); };
HttpErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: HttpErrorInterceptor, factory: HttpErrorInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](HttpErrorInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }, { type: _services_reload_app_service__WEBPACK_IMPORTED_MODULE_5__["ReloadAppService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/interceptors/loader.interceptor.ts":
/*!****************************************************!*\
  !*** ./src/app/interceptors/loader.interceptor.ts ***!
  \****************************************************/
/*! exports provided: LoaderInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderInterceptor", function() { return LoaderInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/loader.service */ "./src/app/services/loader.service.ts");
/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




class LoaderInterceptor {
    constructor(loaderService) {
        this.loaderService = loaderService;
        this.totalRequests = 0;
    }
    intercept(req, next) {
        this.totalRequests++;
        this.loaderService.show();
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(() => {
            this.totalRequests--;
            if (this.totalRequests === 0) {
                this.loaderService.hide();
            }
        }));
    }
}
LoaderInterceptor.ɵfac = function LoaderInterceptor_Factory(t) { return new (t || LoaderInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"])); };
LoaderInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoaderInterceptor, factory: LoaderInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _services_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_authorization_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/authorization.service */ "./src/app/services/authorization.service.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




class LoginComponent {
    constructor(_authService) {
        this._authService = _authService;
        this.btnLabel = "";
        this._subscriptions = [];
        this.btnClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this._subscriptions.push(this._authService.loggedIn$.subscribe((loggedIn) => {
            this.setLabel(loggedIn);
        }));
    }
    ngOnDestroy() {
        for (let sub of this._subscriptions) {
            sub.unsubscribe();
        }
    }
    onClick(event) {
        this.btnClick.emit(event);
    }
    setLabel(loggedIn) {
        if (loggedIn) {
            this.btnLabel = "Logout";
        }
        else {
            this.btnLabel = "Login";
        }
    }
    loginOrOut() {
        this._authService.loginOrOut();
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authorization_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizationService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], hostBindings: function LoginComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } }, inputs: { btnLabel: "btnLabel" }, outputs: { btnClick: "btnClick" }, decls: 2, vars: 1, consts: [["mat-flat-button", "", "color", "primary", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_0_listener() { return ctx.loginOrOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n", ctx.btnLabel, "\n");
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]], styles: ["button[_ngcontent-%COMP%] {\n    min-width: 50px;\n    display: inline-block;\n    margin: 0 auto;\n    padding: 2px;\n    padding-left: 5px;\n    padding-right: 5px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsY0FBYztJQUNkLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0VBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XG4gICAgbWluLXdpZHRoOiA1MHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nOiAycHg7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _services_authorization_service__WEBPACK_IMPORTED_MODULE_1__["AuthorizationService"] }]; }, { btnLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], btnClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/model/asset.ts":
/*!********************************!*\
  !*** ./src/app/model/asset.ts ***!
  \********************************/
/*! exports provided: AssetType, AssetConnType, MutateAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetType", function() { return AssetType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetConnType", function() { return AssetConnType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MutateAction", function() { return MutateAction; });
/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Different kinds of assets as returned from API */
var AssetType;
(function (AssetType) {
    AssetType["TEXT"] = "TEXT";
    AssetType["TEXT_HEADLINE"] = "headlines";
    AssetType["TEXT_DESC"] = "descriptions";
    AssetType["IMG"] = "IMAGE";
    AssetType["VIDEO"] = "YOUTUBE_VIDEO";
    AssetType["HTML"] = "MEDIA_BUNDLE";
    AssetType["ALL"] = "ALL";
})(AssetType || (AssetType = {}));
/** Different kind of adgroups connections to assets */
var AssetConnType;
(function (AssetConnType) {
    AssetConnType["ADGROUP"] = "AdGroup";
    AssetConnType["HEADLINE"] = "Headlines";
    AssetConnType["DESC"] = "Descriptions";
})(AssetConnType || (AssetConnType = {}));
var MutateAction;
(function (MutateAction) {
    MutateAction["ADD"] = "ADD";
    MutateAction["REMOVE"] = "REMOVE";
})(MutateAction || (MutateAction = {}));


/***/ }),

/***/ "./src/app/model/response.ts":
/*!***********************************!*\
  !*** ./src/app/model/response.ts ***!
  \***********************************/
/*! exports provided: STATUS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATUS", function() { return STATUS; });
var STATUS;
(function (STATUS) {
    STATUS[STATUS["SUCCESS"] = 200] = "SUCCESS";
    STATUS[STATUS["PARTIAL_SUCCESS"] = 206] = "PARTIAL_SUCCESS";
    STATUS[STATUS["FAIL"] = 500] = "FAIL";
})(STATUS || (STATUS = {}));


/***/ }),

/***/ "./src/app/preview/preview.component.ts":
/*!**********************************************!*\
  !*** ./src/app/preview/preview.component.ts ***!
  \**********************************************/
/*! exports provided: PreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewComponent", function() { return PreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _model_asset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../model/asset */ "./src/app/model/asset.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/youtube-player */ "./node_modules/@angular/youtube-player/__ivy_ngcc__/fesm2015/youtube-player.js");






function PreviewComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.data.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PreviewComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "youtube-player", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("videoId", ctx_r1.data.url);
} }
class PreviewComponent {
    constructor(data) {
        this.data = data;
        this.assetType = _model_asset__WEBPACK_IMPORTED_MODULE_2__["AssetType"];
    }
    ngOnInit() {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        document.body.appendChild(tag);
    }
}
PreviewComponent.ɵfac = function PreviewComponent_Factory(t) { return new (t || PreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
PreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PreviewComponent, selectors: [["app-preview"]], decls: 3, vars: 3, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [3, "src"], [3, "videoId"]], template: function PreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PreviewComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PreviewComponent_div_2_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.data.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.assetType.IMG);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.assetType.VIDEO);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"], _angular_youtube_player__WEBPACK_IMPORTED_MODULE_4__["YouTubePlayer"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByZXZpZXcvcHJldmlldy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-preview',
                templateUrl: './preview.component.html',
                styleUrls: ['./preview.component.css']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/search-bar/search-bar.component.ts":
/*!****************************************************!*\
  !*** ./src/app/search-bar/search-bar.component.ts ***!
  \****************************************************/
/*! exports provided: SearchBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarComponent", function() { return SearchBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _model_asset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/asset */ "./src/app/model/asset.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */









function SearchBarComponent_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r1.label, " ");
} }
class SearchBarComponent {
    constructor() {
        this.searchPlaceholder = '';
        this.searchStr = '';
        this.filterStr = _model_asset__WEBPACK_IMPORTED_MODULE_1__["AssetType"].ALL;
        this.searchCriteria = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.filterCriteria = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.searchPlaceholder = this.searchPlaceholderTxt;
    }
    checkPlaceHolder() {
        if (this.searchPlaceholder) {
            this.searchPlaceholder = null;
            return;
        }
        else {
            this.searchPlaceholder = this.searchPlaceholderTxt;
            return;
        }
    }
    searchThis() {
        this.searchCriteria.emit(this.searchStr);
    }
    applyFilter() {
        this.filterCriteria.emit(this.filterStr);
    }
}
SearchBarComponent.ɵfac = function SearchBarComponent_Factory(t) { return new (t || SearchBarComponent)(); };
SearchBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchBarComponent, selectors: [["app-search-bar"]], inputs: { searchPlaceholderTxt: "searchPlaceholderTxt", filterOptions: "filterOptions" }, outputs: { searchCriteria: "searchCriteria", filterCriteria: "filterCriteria" }, decls: 10, vars: 4, consts: [["id", "searchField", "floatLabel", "never", "appearance", "legacy"], ["matInput", "", "type", "text", "autocomplete", "off", 3, "ngModel", "ngModelChange", "input", "focus", "blur"], [1, "placeholder"], ["matPrefix", ""], [1, "fas", "fa-search"], ["id", "filterBtn"], ["matNativeControl", "", 3, "ngModel", "ngModelChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function SearchBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchBarComponent_Template_input_ngModelChange_1_listener($event) { return ctx.searchStr = $event; })("input", function SearchBarComponent_Template_input_input_1_listener() { return ctx.searchThis(); })("focus", function SearchBarComponent_Template_input_focus_1_listener() { return ctx.checkPlaceHolder(); })("blur", function SearchBarComponent_Template_input_blur_1_listener() { return ctx.checkPlaceHolder(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-placeholder", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchBarComponent_Template_mat_select_ngModelChange_8_listener($event) { return ctx.filterStr = $event; })("selectionChange", function SearchBarComponent_Template_mat_select_selectionChange_8_listener() { return ctx.applyFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SearchBarComponent_mat_option_9_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchStr);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.searchPlaceholder);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.filterStr);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filterOptions);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatPlaceholder"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatPrefix"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOption"]], styles: ["[_nghost-%COMP%] {\n  font-size: 16px;\n  color: grey;\n}\n\n#searchField[_ngcontent-%COMP%] {\n  width: 60%;\n  float: left;\n}\n\n.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%] {\n  height: 0 !important;\n}\n\nmat-placeholder[_ngcontent-%COMP%] {\n  color: rgb(161, 157, 157);\n}\n\n#filterBtn[_ngcontent-%COMP%] {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoLWJhci9zZWFyY2gtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC1iYXIvc2VhcmNoLWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiBncmV5O1xufVxuXG4jc2VhcmNoRmllbGQge1xuICB3aWR0aDogNjAlO1xuICBmbG9hdDogbGVmdDtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICBoZWlnaHQ6IDAgIWltcG9ydGFudDtcbn1cbm1hdC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiByZ2IoMTYxLCAxNTcsIDE1Nyk7XG59XG5cbiNmaWx0ZXJCdG4ge1xuICBmbG9hdDogcmlnaHQ7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search-bar',
                templateUrl: './search-bar.component.html',
                styleUrls: ['./search-bar.component.css'],
            }]
    }], function () { return []; }, { searchPlaceholderTxt: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], filterOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], searchCriteria: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], filterCriteria: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/services/asset.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/asset.service.ts ***!
  \*******************************************/
/*! exports provided: AssetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetService", function() { return AssetService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/observable/of */ "./node_modules/rxjs-compat/_esm2015/add/observable/of.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm2015/add/operator/catch.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _model_asset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../model/asset */ "./src/app/model/asset.ts");
/* harmony import */ var _model_response__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/response */ "./src/app/model/response.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _services_authorization_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/authorization.service */ "./src/app/services/authorization.service.ts");
/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */









class AssetService {
    constructor(_http, _authService) {
        this._http = _http;
        this._authService = _authService;
        this.API_SERVER = location.origin;
        /** Gets updated when the account changes */
        this._activeAccountId$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this._activeAccount$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this._accountAGs$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this._allAssets$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this._assetsToAdGroups = [];
        /** Gets updated when an asset is selected */
        this._activeAsset$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this._activeAssetAdGroups$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        /** Gets updated when the update Asset is called */
        this._updateFinished$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.allAssets$ = this._allAssets$.asObservable();
        this.activeAccount$ = this._activeAccount$.asObservable();
        this.activeAccountId$ = this._activeAccountId$.asObservable();
        this.accountAGs$ = this._accountAGs$.asObservable();
        this.activeAsset$ = this._activeAsset$.asObservable();
        this.activeAssetAdGroups$ = this._activeAssetAdGroups$.asObservable();
        this.updateFinished$ = this._updateFinished$.asObservable();
    }
    getAllAssets(accountId) {
        // Reset the asset observable till the http request is made
        this._allAssets$.next(null);
        // Call the API and update the asset observable
        const endpoint = this.API_SERVER + '/accounts-assets/';
        let subscription = this._http
            .get(endpoint, { params: { cid: accountId === null || accountId === void 0 ? void 0 : accountId.toString() } })
            .subscribe((assets) => {
            this._allAssets$.next(assets);
            subscription.unsubscribe();
        });
    }
    getAccountAdGroups(accountId) {
        const endpoint = this.API_SERVER + '/account-ag-struct';
        let subscription = this._http
            .get(endpoint, { params: { cid: accountId === null || accountId === void 0 ? void 0 : accountId.toString() } })
            .subscribe((accountAGs) => {
            this._accountAGs$.next(accountAGs);
            subscription.unsubscribe();
        });
    }
    /** Loads a specific asset to adgroups mapping */
    getAssetsToAdGroups(asset_id, asset_type) {
        let accountId;
        this.activeAccountId$.subscribe((id) => {
            accountId = id;
        });
        const endpoint = this.API_SERVER + '/assets-to-ag/';
        let subscription = this._http.get(endpoint, { params: {
                asset_id: asset_id,
                asset_type: asset_type,
                customer_id: JSON.stringify(accountId)
            }
        })
            .subscribe((assets) => {
            this._assetsToAdGroups = assets;
            this._activeAssetAdGroups$.next(this.getActiveAssetAdGroups(asset_id));
            subscription.unsubscribe();
        });
    }
    getAccountIds() {
        const endpoint = this.API_SERVER + '/accounts/';
        return this._http.get(endpoint);
    }
    changeAsset(asset) {
        this._activeAsset$.next(asset);
        if (asset) {
            this.getAssetsToAdGroups(asset.id, asset.type);
            this._activeAssetAdGroups$.next(this.getActiveAssetAdGroups(asset.id));
        }
        else {
            this._activeAssetAdGroups$.next(null);
        }
    }
    unselectAsset() {
        this.changeAsset(null);
    }
    changeAccount(accountId) {
        this._activeAccountId$.next(accountId);
        this.getAllAssets(accountId);
        this.getAccountAdGroups(accountId);
        this.changeAsset(null);
    }
    getActiveAssetAdGroups(assetId) {
        let assetAdGroups = new Map();
        this._assetsToAdGroups.filter(function (asset) {
            if (asset.id == assetId) {
                let AssetConnection = _model_asset__WEBPACK_IMPORTED_MODULE_4__["AssetConnType"].ADGROUP;
                if (asset.type == _model_asset__WEBPACK_IMPORTED_MODULE_4__["AssetType"].TEXT) {
                    asset.text_type.toLowerCase() ==
                        _model_asset__WEBPACK_IMPORTED_MODULE_4__["AssetConnType"].HEADLINE.toLowerCase()
                        ? (AssetConnection = _model_asset__WEBPACK_IMPORTED_MODULE_4__["AssetConnType"].HEADLINE)
                        : (AssetConnection = _model_asset__WEBPACK_IMPORTED_MODULE_4__["AssetConnType"].DESC);
                }
                assetAdGroups.set(AssetConnection, asset.adgroups);
            }
        });
        return assetAdGroups;
    }
    updateAsset(changedAsset, updateArray) {
        const endpoint = this.API_SERVER + '/mutate-ad/';
        var refresh_token = this._authService.getRefreshToken();
        var load = { 'refresh_token': refresh_token, 'data': updateArray };
        let subscription = this._http
            .post(endpoint, load, { observe: 'response' })
            .subscribe((response) => {
            var _a;
            // update the asset to adgroup cache
            let updatedAssets = [];
            for (let update of response.body) {
                updatedAssets.push(update.asset);
                if (update.index) {
                    // This is a non-text asset
                    this._assetsToAdGroups[update.index] = update.asset;
                }
                else if ((_a = update.asset) === null || _a === void 0 ? void 0 : _a.length) {
                    // Text asset, so index can be {found in the assets array (headlines and descriptions)
                    for (let txt_asset of update.asset) {
                        if (txt_asset.index) {
                            this._assetsToAdGroups[txt_asset.index] = txt_asset.asset;
                        }
                        else {
                            this._assetsToAdGroups.push(txt_asset.asset);
                        }
                    }
                }
                else {
                    this._assetsToAdGroups.push(update.asset);
                }
            }
            // Update the new selection
            this._activeAssetAdGroups$.next(this.getActiveAssetAdGroups(changedAsset.id));
            // Updated the caller that the API is done
            let msg = '';
            if (response.status === _model_response__WEBPACK_IMPORTED_MODULE_5__["STATUS"].PARTIAL_SUCCESS) {
                let failures = response.body[0].failures ||
                    response.body.failures;
                if (failures) {
                    for (let failure of failures) {
                        msg += `Update failed for the ad group "${failure.adgroup.adgroup_name}" of campaign "${failure.adgroup.campaign_name}":
                    ${failure.error_message}<br/>`;
                    }
                }
                else {
                    msg = 'Update failed for some ad groups.';
                }
            }
            this._updateFinished$.next({
                status_code: response.status,
                msg: msg,
                assets: updatedAssets,
            });
            subscription.unsubscribe();
        }, (error) => {
            var _a, _b;
            // API call failed - Returned status 500
            let errorMessage = '';
            let failures = ((_a = error.error[0]) === null || _a === void 0 ? void 0 : _a.failures) || ((_b = error.error) === null || _b === void 0 ? void 0 : _b.failures);
            if (failures) {
                for (let failure of failures) {
                    errorMessage += `Update failed for the ad group "${failure.adgroup.adgroup_name}" from campaign "${failure.adgroup.campaign_name}": 
              ${failure.error_message}<br/>`;
                }
            }
            else {
                errorMessage = `Error Code: ${error.status}<br/>Message: ${error.message}`;
            }
            this._updateFinished$.next({
                status_code: _model_response__WEBPACK_IMPORTED_MODULE_5__["STATUS"].FAIL,
                msg: errorMessage,
                assets: [],
            });
            subscription.unsubscribe();
        });
    }
    addNewAsset(asset) {
        // Update all assets with the newly uploaded asset
        if (asset) {
            console.log('Asset: ', asset);
            let waitTime = 0;
            if (asset.type == _model_asset__WEBPACK_IMPORTED_MODULE_4__["AssetType"].IMG) {
                waitTime = 12000;
            }
            this._assetsToAdGroups.push(asset);
            // This is a workaround to overcome the server not detecting the image
            // type and loading it - so we give it some time.
            setTimeout(() => {
                this._allAssets$.next(this._allAssets$.getValue().concat(asset));
            }, waitTime);
        }
    }
}
AssetService.ɵfac = function AssetService_Factory(t) { return new (t || AssetService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_authorization_service__WEBPACK_IMPORTED_MODULE_7__["AuthorizationService"])); };
AssetService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AssetService, factory: AssetService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AssetService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }, { type: _services_authorization_service__WEBPACK_IMPORTED_MODULE_7__["AuthorizationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/authorization.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/authorization.service.ts ***!
  \***************************************************/
/*! exports provided: AuthorizationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizationService", function() { return AuthorizationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config.service */ "./src/app/services/config.service.ts");

/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




class AuthorizationService {
    constructor(_configService) {
        this._configService = _configService;
        this.authInstance = null;
        this.refreshToken = null;
        this.retrieveStoredRefreshToken().then((token) => {
            if (token) {
                this.refreshToken = token;
                this.loggedInSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](true);
            }
            else {
                this.loggedInSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
            }
            this.loggedIn$ = this.loggedInSubject.asObservable();
        });
    }
    initGoogleAuth() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //  Create a new Promise where the resolve 
            // function is the callback passed to gapi.load
            const pload = new Promise((resolve) => {
                gapi.load('auth2', resolve);
            });
            // When the first promise resolves, it means we have gapi
            // loaded and that we can call gapi.init
            return pload.then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                var config = this._configService.getConfigSettings();
                yield gapi.auth2
                    .init({
                    client_id: config.client_id,
                    scope: "https://www.googleapis.com/auth/adwords https://www.googleapis.com/auth/youtube.readonly"
                })
                    .then(auth => {
                    this.authInstance = auth;
                });
            }));
        });
    }
    authenticate(force = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var error = "";
            var storedToken = yield this.retrieveStoredRefreshToken();
            if (!force && storedToken) {
                this.refreshToken = storedToken;
                this.loggedInSubject.next(true);
            }
            else {
                // Initialize gapi if not done yet
                if (!this.authInstance) {
                    yield this.initGoogleAuth();
                }
                // Get the refresh access token
                var refreshAccessToken = yield this.authInstance.grantOfflineAccess({
                    access_type: "offline",
                    prompt: "consent",
                    scope: "https://www.googleapis.com/auth/adwords https://www.googleapis.com/auth/youtube.readonly"
                })
                    .then((res) => {
                    var refreshAccessToken = res.code;
                    return refreshAccessToken;
                })
                    .catch((err) => {
                    error = err["error"];
                });
                // Quick exit
                if (error)
                    throw new Error(error);
                yield this._configService
                    .getConfigRefreshCode(refreshAccessToken)
                    .toPromise()
                    .then((response) => {
                    this.refreshToken = response.body;
                    this.loggedInSubject.next(true);
                    this.storeRefreshToken(this.refreshToken);
                })
                    .catch((err) => {
                    error = err["error"];
                });
            }
            if (error) {
                throw new Error(error);
            }
        });
    }
    storeRefreshToken(token) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            window.localStorage.setItem('refreshToken', token);
        });
    }
    retrieveStoredRefreshToken() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return window.localStorage.getItem('refreshToken');
        });
    }
    removeStoredRefreshToken() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            window.localStorage.removeItem('refreshToken');
        });
    }
    getRefreshToken() {
        if (!this.refreshToken) {
            throw new Error("No refresh token found. Please login.");
        }
        return this.refreshToken;
    }
    login() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.authenticate();
        });
    }
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.refreshToken = null;
            this.loggedInSubject.next(false);
            yield this.removeStoredRefreshToken();
        });
    }
    loginOrOut() {
        if (this.loggedInSubject.value) {
            this.logout();
        }
        else {
            this.login();
        }
    }
}
AuthorizationService.ɵfac = function AuthorizationService_Factory(t) { return new (t || AuthorizationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"])); };
AuthorizationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthorizationService, factory: AuthorizationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthorizationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/config.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/config.service.ts ***!
  \********************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




class ConfigService {
    constructor(http) {
        this.http = http;
        this.API_SERVER = location.origin;
        /** A cache of the configuration settings */
        this._configSettings = null;
        this._YtConfigSettings = null;
        this._configLoaded$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        /** Reflect the state of the config file */
        this.configValid = false;
        this.configLoaded$ = this._configLoaded$.asObservable();
    }
    loadConfigSettings() {
        const endpoint = this.API_SERVER + '/config/';
        let subscription = this.http
            .get(endpoint)
            .subscribe((config) => {
            this._configSettings = config;
            this.configValid = config.config_valid;
            this._configLoaded$.next(this.configValid);
            subscription.unsubscribe();
        });
    }
    getConfigSettings() {
        return this._configSettings;
    }
    updateConfigCache(config) {
        this._configSettings = config;
    }
    loadYtConfigSettings() {
        const endpoint = this.API_SERVER + '/yt-config/';
        let subscritpion = this.http
            .get(endpoint)
            .subscribe((config) => {
            this._YtConfigSettings = config;
            subscritpion.unsubscribe();
        });
    }
    getYtConfigSettings() {
        return this._YtConfigSettings;
    }
    updateYtConfigSettings(config) {
        this._YtConfigSettings = config;
    }
    setConfigCredentials(mcc, clientId, clientSecret, dev_token, redirect_uri) {
        const endpoint = this.API_SERVER + '/set-configs/';
        let configObj = {
            client_customer_id: mcc,
            client_id: clientId,
            client_secret: clientSecret,
            developer_token: dev_token,
            redirect_uri: redirect_uri,
        };
        return this.http.post(endpoint, configObj, { observe: 'response' });
    }
    getConfigRefreshCode(refreshCode) {
        const endpoint = this.API_SERVER + '/get-refresh-token/';
        return this.http.post(endpoint, { code: refreshCode }, { observe: 'response' });
    }
    setConfigRefreshCode(refreshCode) {
        const endpoint = this.API_SERVER + '/set-refresh/';
        return this.http.post(endpoint, { code: refreshCode }, { observe: 'response' });
    }
    setYouTubeConfig(conf) {
        const endpoint = this.API_SERVER + '/set-yt/';
        return this.http.post(endpoint, { channel_id: conf.channel_id }, { observe: 'response' });
    }
    revertConfigSettings(config) {
        if (config.config_valid) {
            const endpoint = this.API_SERVER + '/set-configs/';
            let subscription = this.http.post(endpoint, config).subscribe((_) => {
                this.updateConfigCache(config);
                subscription.unsubscribe();
            });
        }
    }
}
ConfigService.ɵfac = function ConfigService_Factory(t) { return new (t || ConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ConfigService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ConfigService, factory: ConfigService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/loader.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/loader.service.ts ***!
  \********************************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



class LoaderService {
    constructor() {
        this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    show() {
        this.isLoading.next(true);
    }
    hide() {
        this.isLoading.next(false);
    }
}
LoaderService.ɵfac = function LoaderService_Factory(t) { return new (t || LoaderService)(); };
LoaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoaderService, factory: LoaderService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/reload-app.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/reload-app.service.ts ***!
  \************************************************/
/*! exports provided: ReloadAppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReloadAppService", function() { return ReloadAppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



class ReloadAppService {
    constructor() {
        this.reloadMcc = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.reloadAccountIds = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
}
ReloadAppService.ɵfac = function ReloadAppService_Factory(t) { return new (t || ReloadAppService)(); };
ReloadAppService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ReloadAppService, factory: ReloadAppService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReloadAppService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/upload-asset.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/upload-asset.service.ts ***!
  \**************************************************/
/*! exports provided: UploadAssetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadAssetService", function() { return UploadAssetService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _model_asset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/asset */ "./src/app/model/asset.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _authorization_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authorization.service */ "./src/app/services/authorization.service.ts");
/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */






class UploadAssetService {
    constructor(http, _authorizationService) {
        this.http = http;
        this._authorizationService = _authorizationService;
        this.API_SERVER = location.origin;
        this._YtVidList$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.ytVidList$ = this._YtVidList$.asObservable();
    }
    /** Used for text assets only */
    addTextAsset(account, text, assetType, adGroups) {
        const endpoint = this.API_SERVER + '/upload-asset/';
        var refreshToken = this._authorizationService.getRefreshToken();
        let textAsset = {
            account: account,
            refresh_token: refreshToken,
            asset_type: assetType,
            asset_name: '',
            asset_text: text,
            adgroups: adGroups,
        };
        return this.http.post(endpoint, textAsset, { observe: 'response' });
    }
    /** Used for all non-text assets */
    uploadAsset(account, assetName, assetType, adGroups, url) {
        let asset;
        const endpoint = this.API_SERVER + '/upload-asset/';
        var refreshToken = this._authorizationService.getRefreshToken();
        if (assetType === _model_asset__WEBPACK_IMPORTED_MODULE_1__["AssetType"].VIDEO) {
            asset = {
                account: account,
                refresh_token: refreshToken,
                asset_type: assetType,
                asset_name: assetName,
                url: url,
                adgroups: adGroups,
            };
        }
        else {
            asset = {
                account: account,
                refresh_token: refreshToken,
                asset_type: assetType,
                asset_name: assetName,
                adgroups: adGroups,
            };
        }
        return this.http.post(endpoint, asset, { observe: 'response' });
    }
    validateDimensions(width, height) {
        let image = {
            width: width,
            height: height
        };
        const endpoint = this.API_SERVER + '/validate-dimensions/';
        return this.http.post(endpoint, image, { observe: 'response' });
    }
    clearUploads() {
        const endpoint = this.API_SERVER + '/clean-dir/';
        let subscritpion = this.http.get(endpoint).subscribe((_) => {
            subscritpion.unsubscribe();
        });
    }
    loadYtChannelVideos() {
        var endpoint = this.API_SERVER + '/get-yt-videos/';
        let subscription = this.http.get(endpoint)
            .subscribe((vids) => {
            this._YtVidList$.next(vids);
            subscription.unsubscribe();
        });
    }
    bulkUploadToYt(uploadList) {
        const endpoint = this.API_SERVER + '/upload-asset-bulk/';
        var refresh_token = this._authorizationService.getRefreshToken();
        var payload = { 'refresh_token': refresh_token, 'data': uploadList };
        return this.http.post(endpoint, payload, { observe: 'response' });
    }
}
UploadAssetService.ɵfac = function UploadAssetService_Factory(t) { return new (t || UploadAssetService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_authorization_service__WEBPACK_IMPORTED_MODULE_4__["AuthorizationService"])); };
UploadAssetService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UploadAssetService, factory: UploadAssetService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UploadAssetService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _authorization_service__WEBPACK_IMPORTED_MODULE_4__["AuthorizationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _app_setup_app_setup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-setup/app-setup.component */ "./src/app/app-setup/app-setup.component.ts");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _shared_config_credentials_credentials_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/config/credentials/credentials.component */ "./src/app/shared/config/credentials/credentials.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _shared_config_yt_conifg_yt_conifg_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/config/yt-conifg/yt-conifg.component */ "./src/app/shared/config/yt-conifg/yt-conifg.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */











const _c0 = ["ytFormGroup"];
const _c1 = function (a1) { return { "msg": true, "color-red": a1 }; };
class SettingsComponent {
    constructor(_setupDialog, _configService, dialogRef, data) {
        this._setupDialog = _setupDialog;
        this._configService = _configService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.editMode = false;
        this.verificationText = '';
        this.errorFound = false;
    }
    ngOnInit() {
        this.dialogRef.updateSize('900px', '450px');
    }
    onEdit() {
        this.dialogRef.close();
        const configDialogRef = this._setupDialog.open(_app_setup_app_setup_component__WEBPACK_IMPORTED_MODULE_2__["AppSetupComponent"], {
            data: this.data.config,
        });
        let subscription = configDialogRef.backdropClick().subscribe((_) => {
            // Revert back to old config
            this._configService.revertConfigSettings(this.data);
            subscription.unsubscribe();
        });
    }
    onYtSubmit() {
        let YtConf = {
            channel_id: this.ytCredentials.YTform.get('channel').value.trim()
        };
        return this._configService.setYouTubeConfig(YtConf).subscribe((response) => {
            this._configService.updateYtConfigSettings(YtConf);
            this.errorFound = false;
            this.verificationText = 'Channel Updated';
        }, (error) => {
            this.errorFound = true;
            this.verificationText = 'Invalid Credentials';
        });
    }
}
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
SettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SettingsComponent, selectors: [["app-settings"]], viewQuery: function SettingsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ytCredentials = _t.first);
    } }, decls: 24, vars: 9, consts: [["mat-dialog-title", ""], ["label", "General"], ["mat-dialog-content", ""], [1, "settings-form", 3, "data", "editMode"], ["credentialsFormGroup", ""], ["mat-dialog-actions", ""], ["mat-stroked-button", "", "color", "primary", 3, "click"], ["mat-stroked-button", "", "color", "primary", "cdkFocusInitial", "", 1, "right-align", 3, "mat-dialog-close"], ["label", "YouTube Config"], [1, "settings-form", 3, "ytData"], ["ytFormGroup", ""], [3, "ngClass"]], template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "AssetMG Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-tab-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-credentials", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_8_listener() { return ctx.onEdit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-tab", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-yt-config", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SettingsComponent_Template_button_click_20_listener() { return ctx.onYtSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.data.config)("editMode", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ytData", ctx.data.yt);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, ctx.errorFound));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.verificationText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTab"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _shared_config_credentials_credentials_component__WEBPACK_IMPORTED_MODULE_5__["CredentialsComponent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _shared_config_yt_conifg_yt_conifg_component__WEBPACK_IMPORTED_MODULE_7__["YtConifgComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"]], styles: [".right-align[_ngcontent-%COMP%]{\n  margin-left: auto !important;\n}\n\n.all[_ngcontent-%COMP%]{\n  width: 1300px;\n  height: 500px;\n}\n\n.mat-dialog-actions[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.mat-tab-group[_ngcontent-%COMP%]{\n  box-sizing: content-box !important;\n}\n\n.color-red[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.msg[_ngcontent-%COMP%]{\n  margin-bottom: 0px;\n  padding-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yaWdodC1hbGlnbntcbiAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuLmFsbHtcbiAgd2lkdGg6IDEzMDBweDtcbiAgaGVpZ2h0OiA1MDBweDtcbn1cbi5tYXQtZGlhbG9nLWFjdGlvbnMge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4ubWF0LXRhYi1ncm91cHtcbiAgYm94LXNpemluZzogY29udGVudC1ib3ggIWltcG9ydGFudDtcbn1cblxuLmNvbG9yLXJlZCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5tc2d7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-settings',
                templateUrl: './settings.component.html',
                styleUrls: ['./settings.component.css'],
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }, { type: _services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, { ytCredentials: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['ytFormGroup']
        }] }); })();


/***/ }),

/***/ "./src/app/shared/client-id.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/shared/client-id.pipe.ts ***!
  \******************************************/
/*! exports provided: transformAction, ClientIDPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformAction", function() { return transformAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientIDPipe", function() { return ClientIDPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


var transformAction;
(function (transformAction) {
    transformAction[transformAction["ADD_DASHES"] = 0] = "ADD_DASHES";
    transformAction[transformAction["REMOVE_DASHES"] = 1] = "REMOVE_DASHES";
})(transformAction || (transformAction = {}));
class ClientIDPipe {
    transform(value, action) {
        let newStr = value;
        if (action === transformAction.ADD_DASHES) {
            if (!value.includes('-')) {
                newStr =
                    value.slice(0, 3) +
                        '-' +
                        value.slice(3, 6) +
                        '-' +
                        value.slice(6, 10);
            }
        }
        else {
            newStr = value.replace(/-/g, '');
        }
        return newStr;
    }
}
ClientIDPipe.ɵfac = function ClientIDPipe_Factory(t) { return new (t || ClientIDPipe)(); };
ClientIDPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "cidPipe", type: ClientIDPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientIDPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'cidPipe',
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/config/credentials/credentials.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/config/credentials/credentials.component.ts ***!
  \********************************************************************/
/*! exports provided: CredentialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CredentialsComponent", function() { return CredentialsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _client_id_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../client-id.pipe */ "./src/app/shared/client-id.pipe.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */









function CredentialsComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Refresh Token");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CredentialsComponent {
    constructor(_formBuilder, _cidPipe) {
        this._formBuilder = _formBuilder;
        this._cidPipe = _cidPipe;
        this.mcc_cid = '';
        this.editMode = true;
    }
    ngOnInit() {
        this.form = this._formBuilder.group({
            mccCtrl: [
                {
                    value: this.data.client_customer_id
                        ? this._cidPipe.transform(this.data.client_customer_id.toString(), _client_id_pipe__WEBPACK_IMPORTED_MODULE_2__["transformAction"].ADD_DASHES)
                        : '',
                    disabled: !this.editMode,
                },
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(12),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9]{3}-[0-9]{3}-[0-9]{4}|[0-9]{10}'),
                ],
            ],
            clientIDCtrl: [
                {
                    value: this.data.client_id ? this.data.client_id : '',
                    disabled: !this.editMode,
                },
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ],
            clientSecretCtrl: [
                {
                    value: this.data.client_secret ? this.data.client_secret : '',
                    disabled: !this.editMode,
                },
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ],
            devTokenCtrl: [
                {
                    value: this.data.developer_token ? this.data.developer_token : '',
                    disabled: !this.editMode,
                },
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ],
            refreshCodeCtrl: [
                {
                    value: this.data.refresh_token ? this.data.refresh_token : '',
                    disabled: true,
                },
            ],
        });
    }
    onBlur() {
        // Update the cid to remove any spaces and have dashes if it doesn't
        let mccCtrl = this.form.get('mccCtrl');
        mccCtrl.setValue(mccCtrl.value.trim());
        if (!mccCtrl.invalid) {
            this.mcc_cid = this._cidPipe.transform(mccCtrl.value, _client_id_pipe__WEBPACK_IMPORTED_MODULE_2__["transformAction"].ADD_DASHES);
        }
    }
}
CredentialsComponent.ɵfac = function CredentialsComponent_Factory(t) { return new (t || CredentialsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_client_id_pipe__WEBPACK_IMPORTED_MODULE_2__["ClientIDPipe"])); };
CredentialsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CredentialsComponent, selectors: [["app-credentials"]], inputs: { data: "data", editMode: "editMode" }, decls: 22, vars: 2, consts: [[3, "formGroup"], [1, "settings-field"], ["matInput", "", "placeholder", "XXX-XXX-XXXX", "formControlName", "mccCtrl", "autocomplete", "off", "required", "", 3, "blur"], [1, "settings-field", "long-field"], ["matInput", "", "formControlName", "clientIDCtrl", "autocomplete", "off", "required", ""], ["matInput", "", "formControlName", "clientSecretCtrl", "autocomplete", "off", "required", ""], ["matInput", "", "formControlName", "devTokenCtrl", "autocomplete", "off", "required", ""], ["class", "settings-field long-field", 4, "ngIf"], ["matInput", "", "formControlName", "refreshCodeCtrl", "autocomplete", "off"]], template: function CredentialsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "MCC Customer ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function CredentialsComponent_Template_input_blur_5_listener() { return ctx.onBlur(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Client ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Client Secret");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Dev Token");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, CredentialsComponent_div_21_Template, 5, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.editMode);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".settings-field[_ngcontent-%COMP%] {\n  padding: inherit;\n  margin: inherit;\n}\n\n.long-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  width: inherit;\n}\n\n.settings-field[_ngcontent-%COMP%]{\n  padding: 15px 0 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbmZpZy9jb25maWcuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbmZpZy9jb25maWcuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNldHRpbmdzLWZpZWxkIHtcbiAgcGFkZGluZzogaW5oZXJpdDtcbiAgbWFyZ2luOiBpbmhlcml0O1xufVxuXG4ubG9uZy1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogaW5oZXJpdDtcbn1cblxuLnNldHRpbmdzLWZpZWxke1xuICBwYWRkaW5nOiAxNXB4IDAgMCAwO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CredentialsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-credentials',
                templateUrl: './credentials.component.html',
                styleUrls: ['./../config.css'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _client_id_pipe__WEBPACK_IMPORTED_MODULE_2__["ClientIDPipe"] }]; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], editMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/config/refresh-code/refresh-code.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/config/refresh-code/refresh-code.component.ts ***!
  \**********************************************************************/
/*! exports provided: RefreshCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefreshCodeComponent", function() { return RefreshCodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _progress_btn_progress_btn_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../progress-btn/progress-btn.component */ "./src/app/shared/progress-btn/progress-btn.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */







class RefreshCodeComponent {
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.updateMessage = '';
        this.isErrorMessage = false;
        this.workInProgress = false;
        this.openURL = '';
    }
    ngOnInit() {
        this.form = this._formBuilder.group({
            refreshCodeCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    onGenerateToken() {
        if (this.openURL.length) {
            window.open(this.openURL, '_blank');
        }
    }
}
RefreshCodeComponent.ɵfac = function RefreshCodeComponent_Factory(t) { return new (t || RefreshCodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
RefreshCodeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RefreshCodeComponent, selectors: [["app-refresh-code"]], inputs: { openURL: "openURL" }, decls: 7, vars: 4, consts: [[3, "formGroup"], ["btnLabel", "Generate Code", 3, "btnUpdateMsg", "isError", "inProgress", "btnClick"], [1, "settings-field", "long-field"], ["matInput", "", "formControlName", "refreshCodeCtrl", "autocomplete", "off", "required", ""]], template: function RefreshCodeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-progress-btn", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("btnClick", function RefreshCodeComponent_Template_app_progress_btn_btnClick_1_listener() { return ctx.onGenerateToken(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Refresh Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("btnUpdateMsg", ctx.updateMessage)("isError", ctx.isErrorMessage)("inProgress", ctx.workInProgress);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _progress_btn_progress_btn_component__WEBPACK_IMPORTED_MODULE_2__["ProgressBtnComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"]], styles: [".settings-field[_ngcontent-%COMP%] {\n  padding: inherit;\n  margin: inherit;\n}\n\n.long-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  width: inherit;\n}\n\n.settings-field[_ngcontent-%COMP%]{\n  padding: 15px 0 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbmZpZy9jb25maWcuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbmZpZy9jb25maWcuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNldHRpbmdzLWZpZWxkIHtcbiAgcGFkZGluZzogaW5oZXJpdDtcbiAgbWFyZ2luOiBpbmhlcml0O1xufVxuXG4ubG9uZy1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogaW5oZXJpdDtcbn1cblxuLnNldHRpbmdzLWZpZWxke1xuICBwYWRkaW5nOiAxNXB4IDAgMCAwO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RefreshCodeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-refresh-code',
                templateUrl: './refresh-code.component.html',
                styleUrls: ['./../config.css'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, { openURL: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/config/yt-conifg/yt-conifg.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/config/yt-conifg/yt-conifg.component.ts ***!
  \****************************************************************/
/*! exports provided: YtConifgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YtConifgComponent", function() { return YtConifgComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");






class YtConifgComponent {
    // "This is optional. " +
    //       "If you want to use the bulk upload from a YouTube channel feature, " +
    //       `please generate an <a href=${this.api_url} target='_blank' rel='noopener noreferrer'>API Key</a> ` +
    //       `(not Oauth2) and enable the YouTube Data API in the <a href=${this.console_url} target='_blank' rel='noopener noreferrer'>API console</a> `;
    constructor(fb) {
        this.fb = fb;
        this.api_url = 'https://developers.google.com/youtube/registering_an_application';
        this.console_url = 'https://developers.google.com/youtube/v3/getting-started#before-you-start';
        this.instructions = "To bulk upload videos from YouTube, please enable the YouTube Data API in the <a href=${this.console_url} target='_blank' rel='noopener noreferrer'>API console</a>. " +
            "After API enabled, paste a YouTube channel ID in the field above and click the update button bellow. If you are an owner in this channel you will see both unlisted and public videos, else you will only see public videos.";
    }
    ngOnInit() {
        let channel_id = this.ytData.channel_id ? this.ytData.channel_id : '';
        this.YTform = this.fb.group({
            channel: [
                channel_id,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)
                ]
            ],
        });
    }
}
YtConifgComponent.ɵfac = function YtConifgComponent_Factory(t) { return new (t || YtConifgComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
YtConifgComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: YtConifgComponent, selectors: [["app-yt-config"]], inputs: { ytData: "ytData" }, decls: 10, vars: 3, consts: [[3, "formGroup"], [1, "settings-field"], ["matInput", "", "formControlName", "channel", "autocomplete", "off"], [1, "settings-field", "long-field"], [3, "innerHTML"]], template: function YtConifgComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "YouTube Channel Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.YTform);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("innerHTML", ctx.instructions, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.instructions);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: [".settings-field[_ngcontent-%COMP%]{\n  padding: 15px 0 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbmZpZy95dC1jb25pZmcveXQtY29uaWZnLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29uZmlnL3l0LWNvbmlmZy95dC1jb25pZmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZXR0aW5ncy1maWVsZHtcbiAgcGFkZGluZzogMTVweCAwIDAgMDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](YtConifgComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-yt-config',
                templateUrl: './yt-conifg.component.html',
                styleUrls: ['./yt-conifg.component.css'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, { ytData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/error-msg.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/shared/error-msg.pipe.ts ***!
  \******************************************/
/*! exports provided: ErrorMsgPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMsgPipe", function() { return ErrorMsgPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */



class ErrorMsgPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(value, ...args) {
        // Remove Error code if it exists
        let newValue = value.replace('403 ', '');
        // Add new lines to make it more readible
        newValue = newValue.replaceAll('. ', '.\n\n');
        // add an html tag to links
        let urlStartIdx = newValue.indexOf('https://');
        let urlEndIdx = newValue.indexOf(' ', urlStartIdx);
        let startTag = '<a href="' +
            newValue.substring(urlStartIdx, urlEndIdx) +
            '"target="_blank">';
        let endTag = '</a>';
        newValue =
            newValue.substring(0, urlStartIdx) +
                startTag +
                newValue.substring(urlStartIdx, urlEndIdx) +
                endTag +
                newValue.substring(urlEndIdx);
        return this.sanitizer.bypassSecurityTrustHtml(newValue);
    }
}
ErrorMsgPipe.ɵfac = function ErrorMsgPipe_Factory(t) { return new (t || ErrorMsgPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
ErrorMsgPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "styleErrorMsg", type: ErrorMsgPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorMsgPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'styleErrorMsg',
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/loader/loader.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/loader/loader.component.ts ***!
  \***************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */





function LoaderComponent_mat_progress_bar_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 2);
} }
class LoaderComponent {
    constructor(loaderService, cdf) {
        this.loaderService = loaderService;
        this.cdf = cdf;
    }
    ngOnInit() {
        this.loaderService.isLoading.subscribe((loading) => {
            this.isLoading = loading;
            this.cdf.detectChanges();
        });
    }
}
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
LoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoaderComponent, selectors: [["app-loader"]], decls: 2, vars: 1, consts: [[1, "progress-bar"], ["mode", "indeterminate", "color", "accent", 4, "ngIf"], ["mode", "indeterminate", "color", "accent"]], template: function LoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoaderComponent_mat_progress_bar_1_Template, 1, 0, "mat-progress-bar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__["MatProgressBar"]], styles: ["[_nghost-%COMP%] {\n  background-color: whitesmoke;\n}\n\n.progress-bar[_ngcontent-%COMP%] {\n  height: 4px;\n  background-color: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuXG4ucHJvZ3Jlc3MtYmFyIHtcbiAgaGVpZ2h0OiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG59XG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loader',
                templateUrl: './loader.component.html',
                styleUrls: ['./loader.component.css'],
            }]
    }], function () { return [{ type: _services_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/material.module.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/material.module.ts ***!
  \*******************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");
/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// import {A11yModule} from '@angular/cdk/a11y';
// import {ClipboardModule} from '@angular/cdk/clipboard';
// import {DragDropModule} from '@angular/cdk/drag-drop';
// import {PortalModule} from '@angular/cdk/portal';
// import {ScrollingModule} from '@angular/cdk/scrolling';
// import {CdkStepperModule} from '@angular/cdk/stepper';
// import {CdkTableModule} from '@angular/cdk/table';
// import {CdkTreeModule} from '@angular/cdk/tree';
// import {MatAutocompleteModule} from '@angular/material/autocomplete';
// import {MatBadgeModule} from '@angular/material/badge';
// import {MatBottomSheetModule} from '@angular/material/bottom-sheet';

//import {MatButtonToggleModule} from '@angular/material/button-toggle';


// import {MatChipsModule} from '@angular/material/chips';

// import {MatDatepickerModule} from '@angular/material/datepicker';


// import {MatExpansionModule} from '@angular/material/expansion';
// import { MatGridListModule } from '@angular/material/grid-list';



// import {MatMenuModule} from '@angular/material/menu';
// import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';






// import {MatSliderModule} from '@angular/material/slider';
// import {MatSlideToggleModule} from '@angular/material/slide-toggle';





// import {MatTooltipModule} from '@angular/material/tooltip';


class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [
        // A11yModule,
        // ClipboardModule,
        // CdkStepperModule,
        // CdkTableModule,
        // CdkTreeModule,
        // DragDropModule,
        // MatAutocompleteModule,
        // MatBadgeModule,
        // MatBottomSheetModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        //MatButtonToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
        // MatChipsModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__["MatStepperModule"],
        // MatDatepickerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"],
        // MatExpansionModule,
        // MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
        // MatMenuModule,
        // MatNativeDateModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"],
        // MatRippleModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__["MatSidenavModule"],
        // MatSliderModule,
        // MatSlideToggleModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__["MatToolbarModule"],
        // MatTooltipModule,
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_21__["MatTreeModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { exports: [
        // A11yModule,
        // ClipboardModule,
        // CdkStepperModule,
        // CdkTableModule,
        // CdkTreeModule,
        // DragDropModule,
        // MatAutocompleteModule,
        // MatBadgeModule,
        // MatBottomSheetModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        //MatButtonToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
        // MatChipsModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__["MatStepperModule"],
        // MatDatepickerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"],
        // MatExpansionModule,
        // MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
        // MatMenuModule,
        // MatNativeDateModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"],
        // MatRippleModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__["MatSidenavModule"],
        // MatSliderModule,
        // MatSlideToggleModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__["MatToolbarModule"],
        // MatTooltipModule,
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_21__["MatTreeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [
                    // A11yModule,
                    // ClipboardModule,
                    // CdkStepperModule,
                    // CdkTableModule,
                    // CdkTreeModule,
                    // DragDropModule,
                    // MatAutocompleteModule,
                    // MatBadgeModule,
                    // MatBottomSheetModule,
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                    //MatButtonToggleModule,
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                    // MatChipsModule,
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__["MatStepperModule"],
                    // MatDatepickerModule,
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"],
                    // MatExpansionModule,
                    // MatGridListModule,
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
                    // MatMenuModule,
                    // MatNativeDateModule,
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__["MatProgressBarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"],
                    // MatRippleModule,
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__["MatSidenavModule"],
                    // MatSliderModule,
                    // MatSlideToggleModule,
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__["MatSortModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__["MatTabsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__["MatToolbarModule"],
                    // MatTooltipModule,
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_21__["MatTreeModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/progress-btn/progress-btn.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/progress-btn/progress-btn.component.ts ***!
  \***************************************************************/
/*! exports provided: ProgressBtnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBtnComponent", function() { return ProgressBtnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */





function ProgressBtnComponent_mat_progress_bar_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 4);
} }
const _c0 = function (a0) { return { "warning-msg": a0 }; };
function ProgressBtnComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r1.isError));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r1.btnUpdateMsg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
class ProgressBtnComponent {
    constructor() {
        this.isError = false;
        this.btnClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    onClick(event) {
        if (!this.disabled) {
            this.btnClick.emit(event);
        }
    }
}
ProgressBtnComponent.ɵfac = function ProgressBtnComponent_Factory(t) { return new (t || ProgressBtnComponent)(); };
ProgressBtnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProgressBtnComponent, selectors: [["app-progress-btn"]], hostBindings: function ProgressBtnComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProgressBtnComponent_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } }, inputs: { btnLabel: "btnLabel", inProgress: "inProgress", disabled: "disabled", btnUpdateMsg: "btnUpdateMsg", isError: "isError" }, outputs: { btnClick: "btnClick" }, decls: 5, vars: 4, consts: [[1, "addedPadding"], ["mat-stroked-button", "", "color", "primary", 3, "disabled"], ["mode", "indeterminate", "color", "accent", 4, "ngIf"], ["class", "margin-bottom-thin button-update-msg", 3, "ngClass", 4, "ngIf"], ["mode", "indeterminate", "color", "accent"], [1, "margin-bottom-thin", "button-update-msg", 3, "ngClass"], [1, "fas", "fa-info-circle"], [3, "innerHTML"]], template: function ProgressBtnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProgressBtnComponent_mat_progress_bar_3_Template, 1, 0, "mat-progress-bar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProgressBtnComponent_div_4_Template, 4, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.btnLabel, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.inProgress);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.btnUpdateMsg == null ? null : ctx.btnUpdateMsg.length);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__["MatProgressBar"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: ["mat-progress-bar[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 88%;\n  left: 0;\n}\n\nbutton[_ngcontent-%COMP%] {\n  min-width: 90px;\n  display: block;\n  margin: 0 auto;\n}\n\n.addedPadding[_ngcontent-%COMP%]{\n  padding: 12px;\n}\n\n.button-update-msg[_ngcontent-%COMP%] {\n  color: grey;\n  line-height: 1.2em;\n  transform: translateY(10px);\n  font-size: 75%;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3Byb2dyZXNzLWJ0bi9wcm9ncmVzcy1idG4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsT0FBTztBQUNUOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0IsY0FBYztFQUNkLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9wcm9ncmVzcy1idG4vcHJvZ3Jlc3MtYnRuLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtcHJvZ3Jlc3MtYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDg4JTtcbiAgbGVmdDogMDtcbn1cblxuYnV0dG9uIHtcbiAgbWluLXdpZHRoOiA5MHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5hZGRlZFBhZGRpbmd7XG4gIHBhZGRpbmc6IDEycHg7XG59XG4uYnV0dG9uLXVwZGF0ZS1tc2cge1xuICBjb2xvcjogZ3JleTtcbiAgbGluZS1oZWlnaHQ6IDEuMmVtO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XG4gIGZvbnQtc2l6ZTogNzUlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressBtnComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-progress-btn',
                templateUrl: './progress-btn.component.html',
                styleUrls: ['./progress-btn.component.css'],
            }]
    }], function () { return []; }, { btnLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], inProgress: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], btnUpdateMsg: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isError: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], btnClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _progress_btn_progress_btn_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./progress-btn/progress-btn.component */ "./src/app/shared/progress-btn/progress-btn.component.ts");
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loader/loader.component */ "./src/app/shared/loader/loader.component.ts");
/* harmony import */ var _config_credentials_credentials_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config/credentials/credentials.component */ "./src/app/shared/config/credentials/credentials.component.ts");
/* harmony import */ var _config_refresh_code_refresh_code_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config/refresh-code/refresh-code.component */ "./src/app/shared/config/refresh-code/refresh-code.component.ts");
/* harmony import */ var _config_yt_conifg_yt_conifg_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./config/yt-conifg/yt-conifg.component */ "./src/app/shared/config/yt-conifg/yt-conifg.component.ts");
/* harmony import */ var _client_id_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./client-id.pipe */ "./src/app/shared/client-id.pipe.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _interceptors_http_error_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../interceptors/http-error.interceptor */ "./src/app/interceptors/http-error.interceptor.ts");
/* harmony import */ var _interceptors_loader_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../interceptors/loader.interceptor */ "./src/app/interceptors/loader.interceptor.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./material.module */ "./src/app/shared/material.module.ts");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var _upload_upload_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./upload/upload.component */ "./src/app/shared/upload/upload.component.ts");
/* harmony import */ var _error_msg_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./error-msg.pipe */ "./src/app/shared/error-msg.pipe.ts");
/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

















class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, providers: [
        _services_loader_service__WEBPACK_IMPORTED_MODULE_13__["LoaderService"],
        _client_id_pipe__WEBPACK_IMPORTED_MODULE_8__["ClientIDPipe"],
        _error_msg_pipe__WEBPACK_IMPORTED_MODULE_15__["ErrorMsgPipe"],
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"], useClass: _interceptors_loader_interceptor__WEBPACK_IMPORTED_MODULE_11__["LoaderInterceptor"], multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"], useClass: _interceptors_http_error_interceptor__WEBPACK_IMPORTED_MODULE_10__["HttpErrorInterceptor"], multi: true },
    ], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _material_module__WEBPACK_IMPORTED_MODULE_12__["MaterialModule"]], _material_module__WEBPACK_IMPORTED_MODULE_12__["MaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_progress_btn_progress_btn_component__WEBPACK_IMPORTED_MODULE_3__["ProgressBtnComponent"],
        _loader_loader_component__WEBPACK_IMPORTED_MODULE_4__["LoaderComponent"],
        _config_credentials_credentials_component__WEBPACK_IMPORTED_MODULE_5__["CredentialsComponent"],
        _config_refresh_code_refresh_code_component__WEBPACK_IMPORTED_MODULE_6__["RefreshCodeComponent"],
        _upload_upload_component__WEBPACK_IMPORTED_MODULE_14__["UploadComponent"],
        _client_id_pipe__WEBPACK_IMPORTED_MODULE_8__["ClientIDPipe"],
        _error_msg_pipe__WEBPACK_IMPORTED_MODULE_15__["ErrorMsgPipe"],
        _config_yt_conifg_yt_conifg_component__WEBPACK_IMPORTED_MODULE_7__["YtConifgComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _material_module__WEBPACK_IMPORTED_MODULE_12__["MaterialModule"]], exports: [_progress_btn_progress_btn_component__WEBPACK_IMPORTED_MODULE_3__["ProgressBtnComponent"],
        _loader_loader_component__WEBPACK_IMPORTED_MODULE_4__["LoaderComponent"],
        _config_credentials_credentials_component__WEBPACK_IMPORTED_MODULE_5__["CredentialsComponent"],
        _config_refresh_code_refresh_code_component__WEBPACK_IMPORTED_MODULE_6__["RefreshCodeComponent"],
        _material_module__WEBPACK_IMPORTED_MODULE_12__["MaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _upload_upload_component__WEBPACK_IMPORTED_MODULE_14__["UploadComponent"],
        _error_msg_pipe__WEBPACK_IMPORTED_MODULE_15__["ErrorMsgPipe"],
        _config_yt_conifg_yt_conifg_component__WEBPACK_IMPORTED_MODULE_7__["YtConifgComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _progress_btn_progress_btn_component__WEBPACK_IMPORTED_MODULE_3__["ProgressBtnComponent"],
                    _loader_loader_component__WEBPACK_IMPORTED_MODULE_4__["LoaderComponent"],
                    _config_credentials_credentials_component__WEBPACK_IMPORTED_MODULE_5__["CredentialsComponent"],
                    _config_refresh_code_refresh_code_component__WEBPACK_IMPORTED_MODULE_6__["RefreshCodeComponent"],
                    _upload_upload_component__WEBPACK_IMPORTED_MODULE_14__["UploadComponent"],
                    _client_id_pipe__WEBPACK_IMPORTED_MODULE_8__["ClientIDPipe"],
                    _error_msg_pipe__WEBPACK_IMPORTED_MODULE_15__["ErrorMsgPipe"],
                    _config_yt_conifg_yt_conifg_component__WEBPACK_IMPORTED_MODULE_7__["YtConifgComponent"],
                ],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _material_module__WEBPACK_IMPORTED_MODULE_12__["MaterialModule"]],
                exports: [
                    _progress_btn_progress_btn_component__WEBPACK_IMPORTED_MODULE_3__["ProgressBtnComponent"],
                    _loader_loader_component__WEBPACK_IMPORTED_MODULE_4__["LoaderComponent"],
                    _config_credentials_credentials_component__WEBPACK_IMPORTED_MODULE_5__["CredentialsComponent"],
                    _config_refresh_code_refresh_code_component__WEBPACK_IMPORTED_MODULE_6__["RefreshCodeComponent"],
                    _material_module__WEBPACK_IMPORTED_MODULE_12__["MaterialModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _upload_upload_component__WEBPACK_IMPORTED_MODULE_14__["UploadComponent"],
                    _error_msg_pipe__WEBPACK_IMPORTED_MODULE_15__["ErrorMsgPipe"],
                    _config_yt_conifg_yt_conifg_component__WEBPACK_IMPORTED_MODULE_7__["YtConifgComponent"],
                ],
                providers: [
                    _services_loader_service__WEBPACK_IMPORTED_MODULE_13__["LoaderService"],
                    _client_id_pipe__WEBPACK_IMPORTED_MODULE_8__["ClientIDPipe"],
                    _error_msg_pipe__WEBPACK_IMPORTED_MODULE_15__["ErrorMsgPipe"],
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"], useClass: _interceptors_loader_interceptor__WEBPACK_IMPORTED_MODULE_11__["LoaderInterceptor"], multi: true },
                    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"], useClass: _interceptors_http_error_interceptor__WEBPACK_IMPORTED_MODULE_10__["HttpErrorInterceptor"], multi: true },
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/upload/upload.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/upload/upload.component.ts ***!
  \***************************************************/
/*! exports provided: FileType, UploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileType", function() { return FileType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadComponent", function() { return UploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_upload_asset_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/upload-asset.service */ "./src/app/services/upload-asset.service.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */







const _c0 = ["form"];
const _c1 = function (a0) { return { "warning-msg": a0 }; };
function UploadComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx_r2.isError));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.invalidDimensionsMsg, "");
} }
var FileType;
(function (FileType) {
    FileType["IMG"] = "image/*";
    FileType["VIDEO"] = "video/*";
    FileType["HTML"] = ".zip";
})(FileType || (FileType = {}));
class UploadComponent {
    constructor(_uploadService) {
        this._uploadService = _uploadService;
        this.action = location.origin + '/upload-files/';
        this.fileNames = [];
        this.selectedFileName = '';
        this.invalidDimensionsMsg = '';
        this.isError = false;
        this.isValid = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    onChange(event) {
        this.invalidDimensionsMsg = '';
        this.isError = false;
        this.fileNames = [];
        for (let file of event.target.files) {
            this.fileNames.push(file.name);
        }
        if (this.fileNames.length > 0) {
            this.isValid.emit(true);
        }
        else {
            this.isValid.emit(false);
        }
        // Image size validation
        if (this.acceptsType == FileType.IMG) {
            var file = event.target.files[0];
            var fileReader = new FileReader();
            var img = new Image();
            let self = this;
            fileReader.onload = function (event) {
                img.src = fileReader.result;
                img.onload = function () {
                    // Call the Validation API here -
                    let subscription = self._uploadService
                        .validateDimensions(img.width, img.height)
                        .subscribe((response) => {
                        self.isValid.emit(response.body.valid);
                        if (!response.body.valid) {
                            self.invalidDimensionsMsg = 'Invalid Image Dimensions';
                            self.isError = true;
                        }
                        subscription.unsubscribe();
                    });
                };
            };
            fileReader.readAsDataURL(file);
        }
        if (this.fileNames.length) {
            this.selectedFileName = this.fileNames[0];
        }
        else {
            this.selectedFileName = '';
        }
    }
    uploadToServer() {
        this.form.nativeElement.submit();
    }
}
UploadComponent.ɵfac = function UploadComponent_Factory(t) { return new (t || UploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_upload_asset_service__WEBPACK_IMPORTED_MODULE_1__["UploadAssetService"])); };
UploadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UploadComponent, selectors: [["app-upload"]], viewQuery: function UploadComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.form = _t.first);
    } }, inputs: { acceptsType: "acceptsType" }, outputs: { isValid: "isValid" }, decls: 11, vars: 4, consts: [["id", "hiddenFrame", "name", "hiddenFrame"], ["ngNoForm", "", "method", "POST", "enctype", "multipart/form-data", "target", "hiddenFrame", 3, "action"], ["form", ""], ["hidden", "", "name", "file", "type", "file", 3, "accept", "change"], ["fileInput", ""], ["mat-stroked-button", "", "color", "primary", 3, "click"], ["id", "selectedFile", "matInput", "", "type", "text", "placeholder", "No file chosen", "readonly", "true", 3, "value"], ["class", "margin-bottom-thin button-update-msg", 3, "ngClass", 4, "ngIf"], [1, "margin-bottom-thin", "button-update-msg", 3, "ngClass"], [1, "fas", "fa-info-circle"]], template: function UploadComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "iframe", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UploadComponent_Template_input_change_3_listener($event) { return ctx.onChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UploadComponent_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return _r1.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "file_upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Upload ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, UploadComponent_div_10_Template, 5, 4, "div", 7);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("action", ctx.action, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("accept", ctx.acceptsType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.selectedFileName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.invalidDimensionsMsg == null ? null : ctx.invalidDimensionsMsg.length);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], styles: ["#hiddenFrame[_ngcontent-%COMP%] {\n  width:0;\n  height:0;\n  border:0;\n  display: none;\n}\n\n#selectedFile[_ngcontent-%COMP%] {\n  padding: 8px;\n  padding-left: 20px;\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3VwbG9hZC91cGxvYWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLE9BQU87RUFDUCxRQUFRO0VBQ1IsUUFBUTtFQUNSLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3VwbG9hZC91cGxvYWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNoaWRkZW5GcmFtZSB7XG4gIHdpZHRoOjA7XG4gIGhlaWdodDowO1xuICBib3JkZXI6MDtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI3NlbGVjdGVkRmlsZSB7XG4gIHBhZGRpbmc6IDhweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICB3aWR0aDogNTAlO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UploadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-upload',
                templateUrl: './upload.component.html',
                styleUrls: ['./upload.component.css'],
            }]
    }], function () { return [{ type: _services_upload_asset_service__WEBPACK_IMPORTED_MODULE_1__["UploadAssetService"] }]; }, { acceptsType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], form: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['form']
        }], isValid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/toolbar/toolbar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/toolbar/toolbar.component.ts ***!
  \**********************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _services_asset_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/asset.service */ "./src/app/services/asset.service.ts");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var _services_authorization_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../services/authorization.service */ "./src/app/services/authorization.service.ts");
/* harmony import */ var _services_reload_app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/reload-app.service */ "./src/app/services/reload-app.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

















function ToolbarComponent_div_6_mat_select_4_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelectionChange", function ToolbarComponent_div_6_mat_select_4_mat_option_1_Template_mat_option_onSelectionChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r6.accountChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const account_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", account_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", !!account_r5.name ? account_r5.name : account_r5.id, " ");
} }
function ToolbarComponent_div_6_mat_select_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-select", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function ToolbarComponent_div_6_mat_select_4_Template_mat_select_valueChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.defaultAccount = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ToolbarComponent_div_6_mat_select_4_mat_option_1_Template, 2, 2, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r3.defaultAccount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r3.accounts$));
} }
function ToolbarComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ToolbarComponent_div_6_mat_select_4_Template, 3, 4, "mat-select", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loggedIn);
} }
function ToolbarComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarComponent_ng_container_9_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.refreshCache(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ToolbarComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.openSettings(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ToolbarComponent {
    constructor(_dataService, _configService, _authorizationService, _reloadAppService, _settingsDialog) {
        this._dataService = _dataService;
        this._configService = _configService;
        this._authorizationService = _authorizationService;
        this._reloadAppService = _reloadAppService;
        this._settingsDialog = _settingsDialog;
        this._subscriptions = [];
        this.loggedIn = false;
        this.loadAccounts = false;
        this._reloadAppService.reloadAccountIds.subscribe(() => {
            this.loadAccountIds();
        });
    }
    ngOnInit() {
        this.loadAccountIds();
        this._subscriptions.push(this._authorizationService.loggedIn$.subscribe((loggedIn) => {
            this.loggedIn = loggedIn;
        }));
    }
    loadAccountIds() {
        this.accounts$ = this._dataService.getAccountIds().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])((accounts) => {
            if (accounts.length) {
                this.defaultAccount = accounts[0].id;
                this._dataService.changeAccount(accounts[0].id);
            }
        }));
    }
    refreshCache() {
        // Manually force a cache refresh based on user trigger
        console.log("Refreshing cache manually.");
        this._reloadAppService.reloadMcc.next(true);
    }
    accountChanged(event) {
        // Only get a notification for the selected account not the "unselected" account
        if (event.isUserInput) {
            this._dataService.changeAccount(event.source.value);
        }
    }
    openSettings() {
        let config = this._configService.getConfigSettings();
        let ytConfig = this._configService.getYtConfigSettings();
        this._settingsDialog.open(_settings_settings_component__WEBPACK_IMPORTED_MODULE_2__["SettingsComponent"], {
            data: {
                config: {
                    client_customer_id: config.client_customer_id,
                    client_id: config.client_id,
                    client_secret: config.client_secret,
                    developer_token: config.developer_token,
                    refresh_token: config.refresh_token,
                    config_valid: config.config_valid
                },
                yt: {
                    channel_id: ytConfig.channel_id
                }
            }
        });
    }
    feedbackClicked() {
        let mailText = 'mailto:assetmg@google.com+?subject=AssetMG%Feedback';
        window.location.href = mailText;
    }
}
ToolbarComponent.ɵfac = function ToolbarComponent_Factory(t) { return new (t || ToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_asset_service__WEBPACK_IMPORTED_MODULE_3__["AssetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authorization_service__WEBPACK_IMPORTED_MODULE_5__["AuthorizationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_reload_app_service__WEBPACK_IMPORTED_MODULE_6__["ReloadAppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"])); };
ToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToolbarComponent, selectors: [["app-toolbar"]], inputs: { loadAccounts: "loadAccounts" }, decls: 14, vars: 3, consts: [[1, "toolbar_class"], [1, "toolbar_logo"], ["src", "assets/gtech_logo.png", 2, "width", "40px"], ["class", "toolbar_select", 4, "ngIf"], [1, "right-align"], [4, "ngIf"], ["mat-icon-button", "", 3, "click", 4, "ngIf"], ["mat-icon-button", "", 3, "click"], [1, "toolbar_select"], [1, "account_select"], [3, "value", "valueChange", 4, "ngIf"], [3, "value", "valueChange"], [3, "value", "onSelectionChange", 4, "ngFor", "ngForOf"], [3, "value", "onSelectionChange"]], template: function ToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "AssetMG - Prototype");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ToolbarComponent_div_6_Template, 5, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ToolbarComponent_ng_container_9_Template, 4, 0, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ToolbarComponent_button_10_Template, 3, 0, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToolbarComponent_Template_button_click_11_listener() { return ctx.feedbackClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadAccounts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedIn);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarRow"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]], styles: [".toolbar_class[_ngcontent-%COMP%]{\n  display: table;\n  color: grey;\n  font-size: 14px;\n}\n\n.toolbar_class[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n  margin-right: 15px;\n  vertical-align: middle;\n}\n\n.toolbar_class[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\n  color: grey;\n\tfont-size: 18px;\n}\n\n.toolbar_select[_ngcontent-%COMP%]{\n  margin-left: 2%;\n}\n\n.right-align[_ngcontent-%COMP%] {\n  margin-left: auto;\n  color: grey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztDQUNaLGVBQWU7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvb2xiYXJfY2xhc3N7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjb2xvcjogZ3JleTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4udG9vbGJhcl9jbGFzcyBpbWd7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLnRvb2xiYXJfY2xhc3Mgc3BhbntcbiAgY29sb3I6IGdyZXk7XG5cdGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnRvb2xiYXJfc2VsZWN0e1xuICBtYXJnaW4tbGVmdDogMiU7XG59XG5cbi5yaWdodC1hbGlnbiB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBjb2xvcjogZ3JleTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToolbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-toolbar',
                templateUrl: './toolbar.component.html',
                styleUrls: ['./toolbar.component.css'],
            }]
    }], function () { return [{ type: _services_asset_service__WEBPACK_IMPORTED_MODULE_3__["AssetService"] }, { type: _services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }, { type: _services_authorization_service__WEBPACK_IMPORTED_MODULE_5__["AuthorizationService"] }, { type: _services_reload_app_service__WEBPACK_IMPORTED_MODULE_6__["ReloadAppService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }]; }, { loadAccounts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/upload-assets/upload-assets.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/upload-assets/upload-assets.component.ts ***!
  \**********************************************************/
/*! exports provided: ErrorMatcher, UploadAssetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMatcher", function() { return ErrorMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadAssetsComponent", function() { return UploadAssetsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _model_asset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/asset */ "./src/app/model/asset.ts");
/* harmony import */ var _model_response__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/response */ "./src/app/model/response.ts");
/* harmony import */ var _services_upload_asset_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/upload-asset.service */ "./src/app/services/upload-asset.service.ts");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var _services_asset_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/asset.service */ "./src/app/services/asset.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */











const _c0 = ["uploadText"];
const _c1 = ["uploadImg"];
const _c2 = ["uploadVideo"];
const _c3 = ["uploadHtml"];
const _c4 = ["accountAdGroups"];
function UploadAssetsComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Type");
} }
function UploadAssetsComponent_mat_radio_button_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-radio-button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", type_r14.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", type_r14.value, " ");
} }
function UploadAssetsComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Asset");
} }
function UploadAssetsComponent_app_upload_img_21_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-upload-img", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("isChildFormValid", function UploadAssetsComponent_app_upload_img_21_Template_app_upload_img_isChildFormValid_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.updateStepValid($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UploadAssetsComponent_app_upload_video_22_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-upload-video", 25, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("isChildFormValid", function UploadAssetsComponent_app_upload_video_22_Template_app_upload_video_isChildFormValid_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.updateStepValid($event); })("isBulkUpload", function UploadAssetsComponent_app_upload_video_22_Template_app_upload_video_isBulkUpload_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.setIsBulkUpload($event); })("isBulkVidFilesSelected", function UploadAssetsComponent_app_upload_video_22_Template_app_upload_video_isBulkVidFilesSelected_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.setIsBulkFilesSelected($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UploadAssetsComponent_app_upload_html_23_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-upload-html", 23, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("isChildFormValid", function UploadAssetsComponent_app_upload_html_23_Template_app_upload_html_isChildFormValid_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.updateStepValid($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UploadAssetsComponent_app_upload_text_24_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-upload-text", 28, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("isChildFormValid", function UploadAssetsComponent_app_upload_text_24_Template_app_upload_text_isChildFormValid_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.updateStepValid($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isHeadline", ctx_r7.uploadAssetType === ctx_r7.assetTypes.TEXT_HEADLINE);
} }
function UploadAssetsComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Add");
} }
function UploadAssetsComponent_button_32_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UploadAssetsComponent_button_32_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return ctx_r29.onBack(_r0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UploadAssetsComponent_button_33_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UploadAssetsComponent_button_33_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return ctx_r31.onNext(_r0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r11.isChildFormValid);
} }
function UploadAssetsComponent_button_34_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UploadAssetsComponent_button_34_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33.bulkUploadVideos(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r12.isBulkFilesSelected);
} }
function UploadAssetsComponent_app_progress_btn_35_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-progress-btn", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("btnClick", function UploadAssetsComponent_app_progress_btn_35_Template_app_progress_btn_btnClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.onAddAsset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r13.canAddAsset)("btnUpdateMsg", ctx_r13.uploadMessage)("isError", ctx_r13.isErrorMessage)("inProgress", ctx_r13.uploadInProgress);
} }
/** Error when the parent is invalid */
class ErrorMatcher {
    isErrorState(control, form) {
        return control.dirty && form.invalid;
    }
}
class UploadAssetsComponent {
    constructor(_uploadService, _configService, _uploadAssetService, _assetService, _snackBar, uploadDialogRef, account) {
        this._uploadService = _uploadService;
        this._configService = _configService;
        this._uploadAssetService = _uploadAssetService;
        this._assetService = _assetService;
        this._snackBar = _snackBar;
        this.uploadDialogRef = uploadDialogRef;
        this.account = account;
        this.assetTypes = _model_asset__WEBPACK_IMPORTED_MODULE_3__["AssetType"];
        // used to disable the 'upload' button when no files are selected
        this.isBulkFilesSelected = false;
        this.isTextAsset = true;
        this.isChildFormValid = true;
        /** Update button params */
        this.uploadInProgress = false;
        this.uploadMessage = '';
        this.isErrorMessage = false;
    }
    ngOnInit() {
        this.types = new Map();
        this.types.set(this.assetTypes.TEXT_HEADLINE, 'Text - Headline');
        this.types.set(this.assetTypes.TEXT_DESC, 'Text - Description');
        this.types.set(this.assetTypes.IMG, 'Image');
        this.types.set(this.assetTypes.VIDEO, 'YouTube Video');
        this.types.set(this.assetTypes.HTML, 'HTML');
        // First selected asset type is image when the dialog loads
        this.canAddAsset = true;
        this.uploadAssetType = this.assetTypes.IMG;
        this.uploadDialogRef.updateSize('800px', '520px');
        this.uploadDialogRef.beforeClosed().subscribe((result) => {
            this._uploadService.clearUploads();
        });
        let yt_creds = this._configService.getYtConfigSettings();
        if (yt_creds.channel_id !== '') {
            this._uploadAssetService.loadYtChannelVideos();
        }
    }
    onClose() {
        this.uploadDialogRef.close();
    }
    onAssetTypeChange(type) {
        // Update whether an asset can be added without getting linked to an ad group
        if (type == this.assetTypes.TEXT_DESC ||
            type == this.assetTypes.TEXT_HEADLINE) {
            this.isTextAsset = true;
            this.canAddAsset = false;
        }
        else {
            this.isTextAsset = false;
            this.canAddAsset = true;
        }
    }
    setIsBulkUpload(value) {
        this.isBulkUpload = value;
    }
    // used to disable/enable the 'upload' button
    setIsBulkFilesSelected(value) {
        this.isBulkFilesSelected = value;
    }
    bulkUploadVideos() {
        let subscription = this.uploadVideo.uploadBulkVids();
        subscription.subscribe((response) => {
            if (response.status === _model_response__WEBPACK_IMPORTED_MODULE_4__["STATUS"].SUCCESS || response.status === _model_response__WEBPACK_IMPORTED_MODULE_4__["STATUS"].PARTIAL_SUCCESS) {
                for (let asset of response.body) {
                    this._assetService.addNewAsset(asset);
                }
                this.uploadDialogRef.close();
            }
        });
    }
    onNext(stepper) {
        if (stepper.selectedIndex == 1) {
            switch (this.uploadAssetType) {
                case this.assetTypes.IMG:
                    this.uploadImg.uploadToServer();
                    break;
                case this.assetTypes.VIDEO:
                    !this.uploadVideo.form.invalid;
                    break;
                case this.assetTypes.HTML:
                    this.uploadHtml.uploadToServer();
                    break;
                default:
                    !this.uploadText.form.invalid;
            }
            // Reset any errors before moving to the next step
            this.isErrorMessage = false;
            this.uploadMessage = '';
        }
        stepper.next();
        this.isChildFormValid = this.isCurrentStepValid(stepper);
    }
    onBack(stepper) {
        stepper.previous();
        this.isChildFormValid = this.isCurrentStepValid(stepper);
        this.isBulkUpload = false;
    }
    isCurrentStepValid(stepper) {
        if (stepper.selectedIndex == 0 || stepper.selectedIndex == 2) {
            return true;
        }
        else {
            switch (this.uploadAssetType) {
                case this.assetTypes.IMG:
                    return this.uploadImg.isValid;
                case this.assetTypes.HTML:
                    return this.uploadHtml.isValid;
                case this.assetTypes.VIDEO:
                    return !this.uploadVideo.form.invalid;
                default:
                    return !this.uploadText.form.invalid;
            }
        }
    }
    updateStepValid(isValid) {
        this.isChildFormValid = isValid;
    }
    updateCanAddAsset(canAdd) {
        if (this.uploadAssetType == this.assetTypes.TEXT_DESC ||
            this.uploadAssetType == this.assetTypes.TEXT_HEADLINE) {
            this.canAddAsset = canAdd;
        }
    }
    onAddAsset() {
        // Start the spinner
        this.uploadInProgress = true;
        let assetName = '';
        let assetText = '';
        let url = '';
        let adGroups = this.adGroups.getSelectedAdGroupIDs();
        switch (this.uploadAssetType) {
            case this.assetTypes.IMG:
                assetName = this.uploadImg.upload.fileNames[0];
                break;
            case this.assetTypes.HTML:
                assetName = this.uploadHtml.upload.fileNames[0];
                break;
            case this.assetTypes.VIDEO:
                assetName = this.uploadVideo.form.get('videoNameCtrl').value;
                url = this.uploadVideo.form.get('videoUrlCtrl').value;
                break;
            case this.assetTypes.TEXT_DESC:
            case this.assetTypes.TEXT_HEADLINE:
                assetText = this.uploadText.form.get('textCtrl').value;
                break;
        }
        if (this.uploadAssetType == this.assetTypes.TEXT_DESC ||
            this.uploadAssetType == this.assetTypes.TEXT_HEADLINE) {
            let subscription = this._uploadService
                .addTextAsset(this.account.id, assetText, this.uploadAssetType, adGroups)
                .subscribe((response) => {
                this.processUploadResponse(response.status, response.body);
                subscription.unsubscribe();
            }, (error) => {
                this.processUploadResponse(_model_response__WEBPACK_IMPORTED_MODULE_4__["STATUS"].FAIL, this.buildErrorResponse(error));
            });
        }
        else {
            let subscription = this._uploadService
                .uploadAsset(this.account.id, assetName, this.uploadAssetType, adGroups, url)
                .subscribe((response) => {
                this.processUploadResponse(response.status, response.body);
                subscription.unsubscribe();
            }, (error) => {
                this.processUploadResponse(_model_response__WEBPACK_IMPORTED_MODULE_4__["STATUS"].FAIL, this.buildErrorResponse(error));
            });
        }
    }
    processUploadResponse(status, response) {
        // Stop the progress bar
        this.uploadInProgress = false;
        if (status != _model_response__WEBPACK_IMPORTED_MODULE_4__["STATUS"].SUCCESS) {
            this.isErrorMessage = true;
            let msg = '';
            if (status === _model_response__WEBPACK_IMPORTED_MODULE_4__["STATUS"].FAIL) {
                msg = response.msg;
            }
            else if (status === _model_response__WEBPACK_IMPORTED_MODULE_4__["STATUS"].PARTIAL_SUCCESS) {
                let failures = response.unsuccessfull;
                console.log(failures);
                if (failures) {
                    for (let failure of failures) {
                        msg += `Update failed for the ad group "${failure.adgroup.adgroup_name}" from campaign "${failure.adgroup.campaign_name}":
                ${failure.error_message}<br/>`;
                    }
                }
                else {
                    msg = 'Update failed for some ad groups.';
                }
            }
            this.uploadMessage = msg;
        }
        else if (response === null || response === void 0 ? void 0 : response.asset) {
            // Notify the asset service of newly added asset
            if (response.asset) {
                this._assetService.addNewAsset(response.asset);
                this._snackBar.open('Uploaded Successfully', '', {
                    duration: 2000,
                    horizontalPosition: 'center',
                    verticalPosition: 'bottom',
                });
            }
            this.uploadDialogRef.close({ successful: status == _model_response__WEBPACK_IMPORTED_MODULE_4__["STATUS"].SUCCESS });
        }
    }
    buildErrorResponse(error) {
        var _a;
        let response = {};
        if (error.error) {
            let msg = '';
            msg += `${error.error.msg}<br/>`;
            let failures = ((_a = error.error) === null || _a === void 0 ? void 0 : _a.failures) || error.error;
            if (failures.length) {
                for (let failure of failures) {
                    msg += `Update failed for the ad group "${failure.adgroup.adgroup_name}" from campaign "${failure.adgroup.campaign_name}":
          ${failure.error_message}<br/>`;
                }
            }
            else {
                msg = `${msg}`;
            }
            response['msg'] = msg;
        }
        else {
            response['msg'] = 'Upload Failed';
        }
        return response;
    }
}
UploadAssetsComponent.ɵfac = function UploadAssetsComponent_Factory(t) { return new (t || UploadAssetsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_upload_asset_service__WEBPACK_IMPORTED_MODULE_5__["UploadAssetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_upload_asset_service__WEBPACK_IMPORTED_MODULE_5__["UploadAssetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_asset_service__WEBPACK_IMPORTED_MODULE_7__["AssetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
UploadAssetsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UploadAssetsComponent, selectors: [["app-upload-assets"]], viewQuery: function UploadAssetsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.uploadText = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.uploadImg = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.uploadVideo = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.uploadHtml = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.adGroups = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__["STEPPER_GLOBAL_OPTIONS"],
                useValue: { displayDefaultIndicatorType: false },
            },
        ])], decls: 36, vars: 16, consts: [[1, "fixActionRow"], ["mat-dialog-title", ""], ["mat-icon-button", "", 1, "close-button", 3, "click"], [1, "close-icon"], ["mat-dialog-content", ""], ["linear", "false"], ["stepper", ""], [3, "stepControl"], ["matStepLabel", ""], [1, "type-radio-group", 3, "ngModel", "change", "ngModelChange"], ["class", "type-radio-button", 3, "value", 4, "ngFor", "ngForOf"], [3, "ngSwitch"], [3, "isChildFormValid", 4, "ngSwitchCase"], [3, "isChildFormValid", "isBulkUpload", "isBulkVidFilesSelected", 4, "ngSwitchCase"], [3, "isHeadline", "isChildFormValid", 4, "ngSwitchDefault"], [3, "account", "uploadMode", "selectionMade"], ["accountAdGroups", ""], [1, "spacer"], ["mat-dialog-actions", ""], ["mat-stroked-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["mat-stroked-button", "", "color", "primary", "class", "right-align", 3, "disabled", "click", 4, "ngIf"], ["btnLabel", "Add Asset", "class", "right-align", 3, "disabled", "btnUpdateMsg", "isError", "inProgress", "btnClick", 4, "ngIf"], [1, "type-radio-button", 3, "value"], [3, "isChildFormValid"], ["uploadImg", ""], [3, "isChildFormValid", "isBulkUpload", "isBulkVidFilesSelected"], ["uploadVideo", ""], ["uploadHtml", ""], [3, "isHeadline", "isChildFormValid"], ["uploadText", ""], ["mat-stroked-button", "", "color", "primary", 3, "click"], ["mat-stroked-button", "", "color", "primary", 1, "right-align", 3, "disabled", "click"], ["btnLabel", "Add Asset", 1, "right-align", 3, "disabled", "btnUpdateMsg", "isError", "inProgress", "btnClick"]], template: function UploadAssetsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add Asset ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UploadAssetsComponent_Template_button_click_3_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-horizontal-stepper", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-step", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, UploadAssetsComponent_ng_template_10_Template, 1, 0, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Select Asset Type:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-radio-group", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UploadAssetsComponent_Template_mat_radio_group_change_13_listener($event) { return ctx.onAssetTypeChange($event.value); })("ngModelChange", function UploadAssetsComponent_Template_mat_radio_group_ngModelChange_13_listener($event) { return ctx.uploadAssetType = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, UploadAssetsComponent_mat_radio_button_14_Template, 2, 2, "mat-radio-button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-step", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, UploadAssetsComponent_ng_template_17_Template, 1, 0, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Add Asset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, UploadAssetsComponent_app_upload_img_21_Template, 2, 0, "app-upload-img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, UploadAssetsComponent_app_upload_video_22_Template, 2, 0, "app-upload-video", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, UploadAssetsComponent_app_upload_html_23_Template, 2, 0, "app-upload-html", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, UploadAssetsComponent_app_upload_text_24_Template, 2, 1, "app-upload-text", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, UploadAssetsComponent_ng_template_26_Template, 1, 0, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "app-account-struct", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionMade", function UploadAssetsComponent_Template_app_account_struct_selectionMade_27_listener($event) { return ctx.updateCanAddAsset($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, UploadAssetsComponent_button_32_Template, 2, 0, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, UploadAssetsComponent_button_33_Template, 2, 1, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, UploadAssetsComponent_button_34_Template, 2, 1, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, UploadAssetsComponent_app_progress_btn_35_Template, 1, 4, "app-progress-btn", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.typeFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.uploadAssetType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 14, ctx.types));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.uploadFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.uploadAssetType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.assetTypes.IMG);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.assetTypes.VIDEO);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.assetTypes.HTML);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("account", ctx.account)("uploadMode", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.selectedIndex !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.selectedIndex !== 2 && ctx.isBulkUpload != true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isBulkUpload === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.selectedIndex == 2);
    } }, styles: [".close-button[_ngcontent-%COMP%]{\n  float: right;\n}\n\n.close-icon[_ngcontent-%COMP%] {\n  height: 32px;\n}\n\n.type-radio-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 15px 0;\n}\n\n.type-radio-button[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.right-align[_ngcontent-%COMP%] {\n  float: right;\n  margin-left: auto !important;\n}\n\n.fixActionRow[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n\n  .mat-horizontal-stepper-header{\n  pointer-events: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBsb2FkLWFzc2V0cy91cGxvYWQtYXNzZXRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakMiLCJmaWxlIjoic3JjL2FwcC91cGxvYWQtYXNzZXRzL3VwbG9hZC1hc3NldHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbG9zZS1idXR0b257XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLmNsb3NlLWljb24ge1xuICBoZWlnaHQ6IDMycHg7XG59XG5cbi50eXBlLXJhZGlvLWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiAxNXB4IDA7XG59XG5cbi50eXBlLXJhZGlvLWJ1dHRvbiB7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4ucmlnaHQtYWxpZ24ge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5maXhBY3Rpb25Sb3cge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5zcGFjZXIge1xuICBmbGV4LWdyb3c6IDE7XG59XG5cbjo6bmctZGVlcCAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXJ7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQ7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UploadAssetsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-upload-assets',
                templateUrl: './upload-assets.component.html',
                styleUrls: ['./upload-assets.component.css'],
                providers: [
                    {
                        provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__["STEPPER_GLOBAL_OPTIONS"],
                        useValue: { displayDefaultIndicatorType: false },
                    },
                ],
            }]
    }], function () { return [{ type: _services_upload_asset_service__WEBPACK_IMPORTED_MODULE_5__["UploadAssetService"] }, { type: _services_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"] }, { type: _services_upload_asset_service__WEBPACK_IMPORTED_MODULE_5__["UploadAssetService"] }, { type: _services_asset_service__WEBPACK_IMPORTED_MODULE_7__["AssetService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, { uploadText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['uploadText']
        }], uploadImg: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['uploadImg']
        }], uploadVideo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['uploadVideo']
        }], uploadHtml: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['uploadHtml']
        }], adGroups: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['accountAdGroups']
        }] }); })();


/***/ }),

/***/ "./src/app/upload-assets/upload-html/upload-html.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/upload-assets/upload-html/upload-html.component.ts ***!
  \********************************************************************/
/*! exports provided: UploadHtmlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadHtmlComponent", function() { return UploadHtmlComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_upload_upload_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/upload/upload.component */ "./src/app/shared/upload/upload.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */





const _c0 = ["uploadHtml"];
class UploadHtmlComponent {
    constructor() {
        this.isValid = false;
        this.fileTypes = src_app_shared_upload_upload_component__WEBPACK_IMPORTED_MODULE_1__["FileType"].HTML;
        this.isChildFormValid = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    uploadToServer() {
        this.upload.uploadToServer();
    }
    updateIsValid(validEvent) {
        this.isValid = validEvent;
        this.isChildFormValid.emit(validEvent);
    }
}
UploadHtmlComponent.ɵfac = function UploadHtmlComponent_Factory(t) { return new (t || UploadHtmlComponent)(); };
UploadHtmlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UploadHtmlComponent, selectors: [["app-upload-html"]], viewQuery: function UploadHtmlComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.upload = _t.first);
    } }, outputs: { isChildFormValid: "isChildFormValid" }, decls: 5, vars: 1, consts: [[3, "acceptsType", "isValid"], ["uploadHtml", ""], ["mat-stroked-button", "", "href", "https://h5validator.appspot.com/adwords/asset", "target", "_blank"]], template: function UploadHtmlComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-upload", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("isValid", function UploadHtmlComponent_Template_app_upload_isValid_0_listener($event) { return ctx.updateIsValid($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "HTML5 Validator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("acceptsType", ctx.fileTypes);
    } }, directives: [src_app_shared_upload_upload_component__WEBPACK_IMPORTED_MODULE_1__["UploadComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatAnchor"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwbG9hZC1hc3NldHMvdXBsb2FkLWh0bWwvdXBsb2FkLWh0bWwuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UploadHtmlComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-upload-html',
                templateUrl: './upload-html.component.html',
                styleUrls: ['./upload-html.component.css'],
            }]
    }], function () { return []; }, { upload: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['uploadHtml']
        }], isChildFormValid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/upload-assets/upload-img/upload-img.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/upload-assets/upload-img/upload-img.component.ts ***!
  \******************************************************************/
/*! exports provided: UploadImgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadImgComponent", function() { return UploadImgComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_upload_upload_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/upload/upload.component */ "./src/app/shared/upload/upload.component.ts");
/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




const _c0 = ["uploadImg"];
class UploadImgComponent {
    constructor() {
        this.isValid = false;
        this.fileTypes = src_app_shared_upload_upload_component__WEBPACK_IMPORTED_MODULE_1__["FileType"].IMG;
        this.isChildFormValid = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    uploadToServer() {
        this.upload.uploadToServer();
    }
    updateIsValid(validEvent) {
        this.isValid = validEvent;
        this.isChildFormValid.emit(validEvent);
    }
}
UploadImgComponent.ɵfac = function UploadImgComponent_Factory(t) { return new (t || UploadImgComponent)(); };
UploadImgComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UploadImgComponent, selectors: [["app-upload-img"]], viewQuery: function UploadImgComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.upload = _t.first);
    } }, outputs: { isChildFormValid: "isChildFormValid" }, decls: 2, vars: 1, consts: [[3, "acceptsType", "isValid"], ["uploadImg", ""]], template: function UploadImgComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-upload", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("isValid", function UploadImgComponent_Template_app_upload_isValid_0_listener($event) { return ctx.updateIsValid($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("acceptsType", ctx.fileTypes);
    } }, directives: [src_app_shared_upload_upload_component__WEBPACK_IMPORTED_MODULE_1__["UploadComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwbG9hZC1hc3NldHMvdXBsb2FkLWltZy91cGxvYWQtaW1nLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UploadImgComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-upload-img',
                templateUrl: './upload-img.component.html',
                styleUrls: ['./upload-img.component.css'],
            }]
    }], function () { return []; }, { upload: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['uploadImg']
        }], isChildFormValid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/upload-assets/upload-text/upload-text.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/upload-assets/upload-text/upload-text.component.ts ***!
  \********************************************************************/
/*! exports provided: UploadTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadTextComponent", function() { return UploadTextComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _upload_assets_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../upload-assets.component */ "./src/app/upload-assets/upload-assets.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */








const _c0 = function (a0) { return { "short-input": a0 }; };
class UploadTextComponent {
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.errorMatcher = new _upload_assets_component__WEBPACK_IMPORTED_MODULE_2__["ErrorMatcher"]();
        this.isChildFormValid = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.form = this._formBuilder.group({
            textCtrl: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(this.maxLength)],
            ],
        });
        // Update parent form when the value changes to detect valid and invalid states
        this.form.valueChanges.subscribe((value) => {
            if (this.form.get('textCtrl').value.length) {
                this.isChildFormValid.emit(!this.form.invalid);
            }
        });
    }
    ngAfterViewInit() { }
    // Reflect valid/invalid state to parent - "empty space" is bypassed by the
    // event emitter previous
    onBackspace() {
        // This gets triggered before the actual text os deleted
        // so we want to emit it when there's one character in the textbox
        if (this.form.get('textCtrl').value.length == 1) {
            this.isChildFormValid.emit(false);
        }
    }
    ngOnChanges(change) {
        var _a, _b;
        // Reset the input control if the text asset type changed
        if (change.isHeadline.previousValue != change.isHeadline.currentValue) {
            (_a = this.form) === null || _a === void 0 ? void 0 : _a.get('textCtrl').setValue('');
        }
        // Reset the max allowed text size
        if (this.isHeadline) {
            this.maxLength = 30;
            this.textAssetType = 'Headline';
        }
        else {
            this.maxLength = 90;
            this.textAssetType = 'Description';
        }
        (_b = this.form) === null || _b === void 0 ? void 0 : _b.get('textCtrl').setValidators([
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(this.maxLength),
        ]);
    }
}
UploadTextComponent.ɵfac = function UploadTextComponent_Factory(t) { return new (t || UploadTextComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
UploadTextComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UploadTextComponent, selectors: [["app-upload-text"]], inputs: { isHeadline: "isHeadline" }, outputs: { isChildFormValid: "isChildFormValid" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 8, vars: 8, consts: [[3, "formGroup"], [3, "ngClass"], ["matInput", "", "formControlName", "textCtrl", "autocomplete", "off", "required", "", 3, "errorStateMatcher", "keydown.backspace"], ["textAsset", ""], ["align", "end"]], template: function UploadTextComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.backspace", function UploadTextComponent_Template_input_keydown_backspace_4_listener() { return ctx.onBackspace(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-hint", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.isHeadline));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.textAssetType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errorStateMatcher", ctx.errorMatcher);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _r0.value.length, " /", ctx.maxLength, " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatHint"]], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.short-input[_ngcontent-%COMP%] {\n  width: 35%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBsb2FkLWFzc2V0cy91cGxvYWQtdGV4dC91cGxvYWQtdGV4dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvdXBsb2FkLWFzc2V0cy91cGxvYWQtdGV4dC91cGxvYWQtdGV4dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNob3J0LWlucHV0IHtcbiAgd2lkdGg6IDM1JTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UploadTextComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-upload-text',
                templateUrl: './upload-text.component.html',
                styleUrls: ['./upload-text.component.css'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, { isHeadline: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isChildFormValid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/upload-assets/upload-video/upload-video.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/upload-assets/upload-video/upload-video.component.ts ***!
  \**********************************************************************/
/*! exports provided: UploadVideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadVideoComponent", function() { return UploadVideoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _video_select_video_select_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../video-select/video-select.component */ "./src/app/upload-assets/video-select/video-select.component.ts");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var _services_upload_asset_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/upload-asset.service */ "./src/app/services/upload-asset.service.ts");
/* harmony import */ var _services_asset_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/asset.service */ "./src/app/services/asset.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */















function UploadVideoComponent_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r3.name)("disabled", option_r3.disable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r3.display, " ");
} }
function UploadVideoComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Asset Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "YouTube Video Link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.backspace", function UploadVideoComponent_div_5_Template_input_keydown_backspace_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onBackspace($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.form);
} }
function UploadVideoComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UploadVideoComponent_div_6_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.openVidSelect(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total selected videos: ", ctx_r2.chosenVids.length, "");
} }
class UploadVideoComponent {
    // Used for upload csv option
    // @ViewChild('fileInput')
    // fileInput;
    // file: File | null = null;
    // onClickFileInputButton(): void {
    //   this.fileInput.nativeElement.click();
    // }
    // onChangeFileInput(): void {
    //   const files: { [key: string]: File } = this.fileInput.nativeElement.files;
    //   this.file = files[0];
    // }
    constructor(_formBuilder, _configService, _uploadAssetService, _assetService, _vidSelect, dialog) {
        this._formBuilder = _formBuilder;
        this._configService = _configService;
        this._uploadAssetService = _uploadAssetService;
        this._assetService = _assetService;
        this._vidSelect = _vidSelect;
        this.dialog = dialog;
        this.options = [
            { name: 'single', display: 'Single Video', disable: false },
            { name: 'channel', display: 'Choose From Channel', disable: false },
        ];
        this.chosenVids = [];
        this.isChildFormValid = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isBulkUpload = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isBulkVidFilesSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.form = this._formBuilder.group({
            videoNameCtrl: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            videoUrlCtrl: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
        // Update parent form when the value changes to detect valid and invalid states
        this.form.valueChanges.subscribe((value) => {
            if (this.form.get('videoUrlCtrl').value.length) {
                this.isChildFormValid.emit(!this.form.invalid);
            }
        });
        let yt_creds = this._configService.getYtConfigSettings();
        if (yt_creds.channel_id === '') {
            this.options[1].disable = true;
        }
    }
    openVidSelect() {
        this._vidSelect = this.dialog.open(_video_select_video_select_component__WEBPACK_IMPORTED_MODULE_2__["VideoSelectComponent"], { data: this.chosenVids });
        this._vidSelect.afterClosed().subscribe((vids) => {
            // TODO: concat, not append
            if (vids != null) {
                this.chosenVids = vids;
            }
            if (this.chosenVids.length > 0) {
                this.isBulkVidFilesSelected.emit(true);
            }
            else {
                this.isBulkVidFilesSelected.emit(false);
            }
            // fix for if user goes back and then returns
            this.isBulkUpload.emit(true);
        });
    }
    emitIsBulkUpload() {
        if (this.selected === 'single') {
            this.isBulkUpload.emit(false);
        }
        else {
            this.isBulkUpload.emit(true);
        }
    }
    uploadBulkVids() {
        var accountId;
        this._assetService.activeAccountId$.subscribe((id) => {
            accountId = id;
        });
        var uploadList = [];
        for (var item in this.chosenVids) {
            uploadList.push({
                account: accountId,
                name: this.chosenVids[item]['name'],
                url: this.chosenVids[item]['url']
            });
        }
        return this._uploadAssetService.bulkUploadToYt(uploadList);
    }
    // Reflect valid/invalid state to parent - "empty space" is bypassed by the
    // event emitter previous
    onBackspace(event) {
        console.log(event);
        // This gets triggered before the actual text os deleted
        // so we want to emit it when there's one character in the textbox
        if (this.form.get('videoUrlCtrl').value.length == 1) {
            this.isChildFormValid.emit(false);
        }
    }
}
UploadVideoComponent.ɵfac = function UploadVideoComponent_Factory(t) { return new (t || UploadVideoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_upload_asset_service__WEBPACK_IMPORTED_MODULE_4__["UploadAssetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_asset_service__WEBPACK_IMPORTED_MODULE_5__["AssetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"])); };
UploadVideoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UploadVideoComponent, selectors: [["app-upload-video"]], outputs: { isChildFormValid: "isChildFormValid", isBulkUpload: "isBulkUpload", isBulkVidFilesSelected: "isBulkVidFilesSelected" }, decls: 7, vars: 4, consts: [["appearance", "fill"], [3, "ngModel", "ngModelChange"], [3, "value", "disabled", 4, "ngFor", "ngForOf"], ["class", "single-div", 4, "ngIf"], ["class", "channel-div", 4, "ngIf"], [3, "value", "disabled"], [1, "single-div"], [3, "formGroup"], ["matInput", "", "formControlName", "videoNameCtrl", "autocomplete", "off", "required", ""], ["videoName", ""], ["matInput", "", "formControlName", "videoUrlCtrl", "autocomplete", "off", "required", "", 3, "keydown.backspace"], ["videoAsset", ""], [1, "channel-div"], ["mat-raised-button", "", 3, "click"], [1, "item-counter"]], template: function UploadVideoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Select an option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UploadVideoComponent_Template_mat_select_ngModelChange_3_listener($event) { return ctx.selected = $event; })("ngModelChange", function UploadVideoComponent_Template_mat_select_ngModelChange_3_listener() { return ctx.emitIsBulkUpload(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UploadVideoComponent_mat_option_4_Template, 2, 3, "mat-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UploadVideoComponent_div_5_Template, 12, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UploadVideoComponent_div_6_Template, 5, 1, "div", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selected === "single");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selected === "channel");
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"]], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.item-counter[_ngcontent-%COMP%] {\n  padding-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBsb2FkLWFzc2V0cy91cGxvYWQtdmlkZW8vdXBsb2FkLXZpZGVvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC91cGxvYWQtYXNzZXRzL3VwbG9hZC12aWRlby91cGxvYWQtdmlkZW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pdGVtLWNvdW50ZXIge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UploadVideoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-upload-video',
                templateUrl: './upload-video.component.html',
                styleUrls: ['./upload-video.component.css'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] }, { type: _services_upload_asset_service__WEBPACK_IMPORTED_MODULE_4__["UploadAssetService"] }, { type: _services_asset_service__WEBPACK_IMPORTED_MODULE_5__["AssetService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }]; }, { isChildFormValid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], isBulkUpload: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], isBulkVidFilesSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/upload-assets/video-select/video-select.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/upload-assets/video-select/video-select.component.ts ***!
  \**********************************************************************/
/*! exports provided: VideoSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoSelectComponent", function() { return VideoSelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _services_upload_asset_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/upload-asset.service */ "./src/app/services/upload-asset.service.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");













function VideoSelectComponent_mat_list_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vid_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", ctx_r1.mySelect.indexOf(vid_r2) > 0 - 1)("value", vid_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", vid_r2.thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", vid_r2.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", vid_r2.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", vid_r2.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class VideoSelectComponent {
    constructor(dialogRef, _uploadAssetService, formBuilder, data) {
        this.dialogRef = dialogRef;
        this._uploadAssetService = _uploadAssetService;
        this.formBuilder = formBuilder;
        this.data = data;
        this.mySelect = [];
    }
    ngOnInit() {
        this.mySelect = this.data;
        this.form = this.formBuilder.group({ myOtherControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.mySelect) });
        this.dialogRef.updateSize('900px', '450px');
        this._uploadAssetService.ytVidList$.subscribe((vids) => {
            this.videos = vids;
        });
    }
    submit(form) {
        this.dialogRef.close(form.value.myOtherControl);
    }
}
VideoSelectComponent.ɵfac = function VideoSelectComponent_Factory(t) { return new (t || VideoSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_upload_asset_service__WEBPACK_IMPORTED_MODULE_3__["UploadAssetService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])); };
VideoSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideoSelectComponent, selectors: [["app-video-select"]], decls: 16, vars: 6, consts: [[1, "vidSearchField"], ["floatLabel", "never", "appearance", "legacy"], ["matInput", "", "type", "text", "name", "search", "autocomplete", "off", "placeholder", "Search video by name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["matPrefix", ""], [1, "fas", "fa-search"], [3, "formGroup", "ngSubmit"], ["formControlName", "myOtherControl", 1, "video-list"], ["vids", ""], [3, "selected", "value", 4, "ngFor", "ngForOf"], [1, "actions"], ["mat-raised-button", "", "type", "submit", 1, "add-btn"], ["mat-raised-button", "", "type", "button", 1, "cancel-btn", 3, "click"], [3, "selected", "value"], ["matListAvatar", "", 3, "src", "alt"], ["target", "_blank", 3, "href"]], template: function VideoSelectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VideoSelectComponent_Template_input_ngModelChange_2_listener($event) { return ctx.searchText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function VideoSelectComponent_Template_form_ngSubmit_6_listener() { return ctx.submit(ctx.form); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-selection-list", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, VideoSelectComponent_mat_list_option_9_Template, 5, 6, "mat-list-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideoSelectComponent_Template_button_click_14_listener() { return ctx.dialogRef.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 3, ctx.videos, ctx.searchText));
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatPrefix"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatSelectionList"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListOption"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListAvatarCssMatStyler"]], pipes: [ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__["Ng2SearchPipe"]], styles: [".actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  margin-top: 15px;\n}\n\n.video-list[_ngcontent-%COMP%] {\n  height: 360px;\n  overflow-y: auto;\n  display: inline-block;\n  width: -webkit-fill-available;\n}\n\n.vidSearchField[_ngcontent-%COMP%] {\n  width: 60%;\n  float: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBsb2FkLWFzc2V0cy92aWRlby1zZWxlY3QvdmlkZW8tc2VsZWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvdXBsb2FkLWFzc2V0cy92aWRlby1zZWxlY3QvdmlkZW8tc2VsZWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLnZpZGVvLWxpc3Qge1xuICBoZWlnaHQ6IDM2MHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xufVxuXG4udmlkU2VhcmNoRmllbGQge1xuICB3aWR0aDogNjAlO1xuICBmbG9hdDogbGVmdDtcbn1cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoSelectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-video-select',
                templateUrl: './video-select.component.html',
                styleUrls: ['./video-select.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: _services_upload_asset_service__WEBPACK_IMPORTED_MODULE_3__["UploadAssetService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/eylong/Projects/dev/assetMG/app/asset_browser/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map