webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__demo_custom_pages_dashboard_v1_dashboard_v1_component__ = __webpack_require__("../../../../../src/app/demo/custom-pages/dashboard-v1/dashboard-v1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_admin_admin_component__ = __webpack_require__("../../../../../src/app/core/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__demo_components_buttons_buttons_component__ = __webpack_require__("../../../../../src/app/demo/components/buttons/buttons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__demo_components_cards_cards_component__ = __webpack_require__("../../../../../src/app/demo/components/cards/cards.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__demo_components_dialogs_dialogs_component__ = __webpack_require__("../../../../../src/app/demo/components/dialogs/dialogs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__demo_components_grid_list_grid_list_component__ = __webpack_require__("../../../../../src/app/demo/components/grid-list/grid-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__demo_components_lists_lists_component__ = __webpack_require__("../../../../../src/app/demo/components/lists/lists.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__demo_components_menu_menu_component__ = __webpack_require__("../../../../../src/app/demo/components/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__demo_components_slider_slider_component__ = __webpack_require__("../../../../../src/app/demo/components/slider/slider.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__demo_components_snack_bar_snack_bar_component__ = __webpack_require__("../../../../../src/app/demo/components/snack-bar/snack-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__demo_components_tooltip_tooltip_component__ = __webpack_require__("../../../../../src/app/demo/components/tooltip/tooltip.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__demo_forms_form_elements_form_elements_component__ = __webpack_require__("../../../../../src/app/demo/forms/form-elements/form-elements.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__demo_forms_form_wizard_form_wizard_component__ = __webpack_require__("../../../../../src/app/demo/forms/form-wizard/form-wizard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__demo_icons_icons_component__ = __webpack_require__("../../../../../src/app/demo/icons/icons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__demo_levels_level5_level5_component__ = __webpack_require__("../../../../../src/app/demo/levels/level5/level5.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__demo_maps_google_maps_google_maps_component__ = __webpack_require__("../../../../../src/app/demo/maps/google-maps/google-maps.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__demo_tables_simple_table_simple_table_component__ = __webpack_require__("../../../../../src/app/demo/tables/simple-table/simple-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__demo_tables_fixed_header_table_fixed_header_table_component__ = __webpack_require__("../../../../../src/app/demo/tables/fixed-header-table/fixed-header-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__demo_custom_pages_forgot_password_forgot_password_component__ = __webpack_require__("../../../../../src/app/demo/custom-pages/forgot-password/forgot-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__demo_custom_pages_registration_registration_component__ = __webpack_require__("../../../../../src/app/demo/custom-pages/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__demo_custom_pages_login_login_component__ = __webpack_require__("../../../../../src/app/demo/custom-pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__demo_editor_editor_component__ = __webpack_require__("../../../../../src/app/demo/editor/editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__demo_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/demo/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__demo_drag_and_drop_drag_and_drop_component__ = __webpack_require__("../../../../../src/app/demo/drag-and-drop/drag-and-drop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__demo_apps_inbox_inbox_component__ = __webpack_require__("../../../../../src/app/demo/apps/inbox/inbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__demo_apps_calendar_calendar_component__ = __webpack_require__("../../../../../src/app/demo/apps/calendar/calendar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__demo_components_autocomplete_autocomplete_component__ = __webpack_require__("../../../../../src/app/demo/components/autocomplete/autocomplete.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var routes = [
    {
        path: 'forgot-password',
        component: __WEBPACK_IMPORTED_MODULE_20__demo_custom_pages_forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */]
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_21__demo_custom_pages_registration_registration_component__["a" /* RegistrationComponent */]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_22__demo_custom_pages_login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'dashboard-v1',
        component: __WEBPACK_IMPORTED_MODULE_2__demo_custom_pages_dashboard_v1_dashboard_v1_component__["a" /* DashboardV1Component */]
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_3__core_admin_admin_component__["a" /* AdminComponent */],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_24__demo_dashboard_dashboard_component__["a" /* DashboardComponent */],
                pathMatch: 'full'
            },
            {
                path: 'apps/inbox',
                component: __WEBPACK_IMPORTED_MODULE_26__demo_apps_inbox_inbox_component__["a" /* InboxComponent */]
            },
            {
                path: 'apps/calendar',
                component: __WEBPACK_IMPORTED_MODULE_27__demo_apps_calendar_calendar_component__["a" /* CalendarComponent */]
            },
            {
                path: 'dashboard-v1',
                component: __WEBPACK_IMPORTED_MODULE_2__demo_custom_pages_dashboard_v1_dashboard_v1_component__["a" /* DashboardV1Component */],
            },
            {
                path: 'components/autocomplete',
                component: __WEBPACK_IMPORTED_MODULE_28__demo_components_autocomplete_autocomplete_component__["a" /* AutocompleteComponent */]
            },
            {
                path: 'components/buttons',
                component: __WEBPACK_IMPORTED_MODULE_4__demo_components_buttons_buttons_component__["a" /* ButtonsComponent */]
            },
            {
                path: 'components/cards',
                component: __WEBPACK_IMPORTED_MODULE_5__demo_components_cards_cards_component__["a" /* CardsComponent */]
            },
            {
                path: 'components/dialogs',
                component: __WEBPACK_IMPORTED_MODULE_6__demo_components_dialogs_dialogs_component__["a" /* DialogsComponent */]
            },
            {
                path: 'components/grid-list',
                component: __WEBPACK_IMPORTED_MODULE_7__demo_components_grid_list_grid_list_component__["a" /* GridListComponent */]
            },
            {
                path: 'components/lists',
                component: __WEBPACK_IMPORTED_MODULE_8__demo_components_lists_lists_component__["a" /* ListsComponent */]
            },
            {
                path: 'components/menu',
                component: __WEBPACK_IMPORTED_MODULE_9__demo_components_menu_menu_component__["a" /* MenuComponent */]
            },
            {
                path: 'components/slider',
                component: __WEBPACK_IMPORTED_MODULE_10__demo_components_slider_slider_component__["a" /* SliderComponent */]
            },
            {
                path: 'components/snack-bar',
                component: __WEBPACK_IMPORTED_MODULE_11__demo_components_snack_bar_snack_bar_component__["a" /* SnackBarComponent */]
            },
            {
                path: 'components/tooltips',
                component: __WEBPACK_IMPORTED_MODULE_12__demo_components_tooltip_tooltip_component__["a" /* TooltipComponent */]
            },
            {
                path: 'forms/form-elements',
                component: __WEBPACK_IMPORTED_MODULE_13__demo_forms_form_elements_form_elements_component__["a" /* FormElementsComponent */]
            },
            {
                path: 'forms/form-wizard',
                component: __WEBPACK_IMPORTED_MODULE_14__demo_forms_form_wizard_form_wizard_component__["a" /* FormWizardComponent */]
            },
            {
                path: 'icons',
                component: __WEBPACK_IMPORTED_MODULE_15__demo_icons_icons_component__["a" /* IconsComponent */]
            },
            {
                path: 'level1/level2/level3/level4/level5',
                component: __WEBPACK_IMPORTED_MODULE_16__demo_levels_level5_level5_component__["a" /* Level5Component */]
            },
            {
                path: 'maps/google-maps',
                component: __WEBPACK_IMPORTED_MODULE_17__demo_maps_google_maps_google_maps_component__["a" /* GoogleMapsComponent */]
            },
            {
                path: 'tables/simple-table',
                component: __WEBPACK_IMPORTED_MODULE_18__demo_tables_simple_table_simple_table_component__["a" /* SimpleTableComponent */]
            },
            {
                path: 'tables/fixed-header-table',
                component: __WEBPACK_IMPORTED_MODULE_19__demo_tables_fixed_header_table_fixed_header_table_component__["a" /* FixedHeaderTableComponent */]
            },
            {
                path: 'drag-and-drop',
                component: __WEBPACK_IMPORTED_MODULE_25__demo_drag_and_drop_drag_and_drop_component__["a" /* DragAndDropComponent */]
            },
            {
                path: 'editor',
                component: __WEBPACK_IMPORTED_MODULE_23__demo_editor_editor_component__["a" /* EditorComponent */]
            }
        ]
    }
];
var RoutingModule = (function () {
    function RoutingModule() {
    }
    return RoutingModule;
}());
RoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
        providers: []
    })
], RoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-load-animation\">\r\n</div>\r\n<router-outlet></router-outlet>\r\n<!--<ms-registration></ms-registration>-->"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_sidenav_mediareplay_media_replay_service__ = __webpack_require__("../../../../../src/app/core/sidenav/mediareplay/media-replay.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(mediaReplayService) {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_sidenav_mediareplay_media_replay_service__["a" /* MediaReplayService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_sidenav_mediareplay_media_replay_service__["a" /* MediaReplayService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_sidenav_sidenav_component__ = __webpack_require__("../../../../../src/app/core/sidenav/sidenav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__ = __webpack_require__("../../../flex-layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_sidenav_sidenav_item_sidenav_item_component__ = __webpack_require__("../../../../../src/app/core/sidenav/sidenav-item/sidenav-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__core_sidenav_sidenav_service__ = __webpack_require__("../../../../../src/app/core/sidenav/sidenav.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__core_sidenav_icon_sidenav_directive__ = __webpack_require__("../../../../../src/app/core/sidenav/icon-sidenav.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__demo_custom_pages_dashboard_v1_dashboard_v1_component__ = __webpack_require__("../../../../../src/app/demo/custom-pages/dashboard-v1/dashboard-v1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__demo_components_buttons_buttons_component__ = __webpack_require__("../../../../../src/app/demo/components/buttons/buttons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__core_highlightjs_highlight_module__ = __webpack_require__("../../../../../src/app/core/highlightjs/highlight.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__demo_forms_form_elements_form_elements_component__ = __webpack_require__("../../../../../src/app/demo/forms/form-elements/form-elements.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__core_search_search_component__ = __webpack_require__("../../../../../src/app/core/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__core_breadcrumb_breadcrumb_component__ = __webpack_require__("../../../../../src/app/core/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__core_breadcrumb_breadcrumb_service__ = __webpack_require__("../../../../../src/app/core/breadcrumb/breadcrumb.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__demo_components_lists_lists_component__ = __webpack_require__("../../../../../src/app/demo/components/lists/lists.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__core_widgets_widgets_v1_widget_v1_widget_v1_component__ = __webpack_require__("../../../../../src/app/core/widgets/widgets-v1/widget-v1/widget-v1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__core_charts_nvD3_nvD3_service__ = __webpack_require__("../../../../../src/app/core/charts/nvD3/nvD3.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__core_charts_nvD3_nvD3_component__ = __webpack_require__("../../../../../src/app/core/charts/nvD3/nvD3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__core_widgets_widgets_v1_line_chart_widget_line_chart_widget_component__ = __webpack_require__("../../../../../src/app/core/widgets/widgets-v1/line-chart-widget/line-chart-widget.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__core_widgets_widgets_v1_source_overview_widget_source_overview_widget_component__ = __webpack_require__("../../../../../src/app/core/widgets/widgets-v1/source-overview-widget/source-overview-widget.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__demo_tables_simple_table_simple_table_component__ = __webpack_require__("../../../../../src/app/demo/tables/simple-table/simple-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__demo_tables_fixed_header_table_fixed_header_table_component__ = __webpack_require__("../../../../../src/app/demo/tables/fixed-header-table/fixed-header-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__demo_forms_form_wizard_form_wizard_component__ = __webpack_require__("../../../../../src/app/demo/forms/form-wizard/form-wizard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__demo_maps_google_maps_google_maps_component__ = __webpack_require__("../../../../../src/app/demo/maps/google-maps/google-maps.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__demo_components_cards_cards_component__ = __webpack_require__("../../../../../src/app/demo/components/cards/cards.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__demo_components_dialogs_dialogs_component__ = __webpack_require__("../../../../../src/app/demo/components/dialogs/dialogs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__demo_icons_icons_component__ = __webpack_require__("../../../../../src/app/demo/icons/icons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__demo_components_grid_list_grid_list_component__ = __webpack_require__("../../../../../src/app/demo/components/grid-list/grid-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__demo_components_menu_menu_component__ = __webpack_require__("../../../../../src/app/demo/components/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__demo_components_slider_slider_component__ = __webpack_require__("../../../../../src/app/demo/components/slider/slider.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__demo_components_snack_bar_snack_bar_component__ = __webpack_require__("../../../../../src/app/demo/components/snack-bar/snack-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__demo_components_tooltip_tooltip_component__ = __webpack_require__("../../../../../src/app/demo/components/tooltip/tooltip.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__demo_levels_level5_level5_component__ = __webpack_require__("../../../../../src/app/demo/levels/level5/level5.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__core_admin_admin_component__ = __webpack_require__("../../../../../src/app/core/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__demo_custom_pages_forgot_password_forgot_password_component__ = __webpack_require__("../../../../../src/app/demo/custom-pages/forgot-password/forgot-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42_ngx_quill__ = __webpack_require__("../../../../ngx-quill/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__demo_editor_editor_component__ = __webpack_require__("../../../../../src/app/demo/editor/editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__core_quickpanel_quickpanel_component__ = __webpack_require__("../../../../../src/app/core/quickpanel/quickpanel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__demo_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/demo/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__core_widgets_bar_chart_bar_chart_component__ = __webpack_require__("../../../../../src/app/core/widgets/bar-chart/bar-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__core_widgets_line_chart_line_chart_component__ = __webpack_require__("../../../../../src/app/core/widgets/line-chart/line-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__core_widgets_recent_sales_recent_sales_component__ = __webpack_require__("../../../../../src/app/core/widgets/recent-sales/recent-sales.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__core_widgets_pie_chart_pie_chart_component__ = __webpack_require__("../../../../../src/app/core/widgets/pie-chart/pie-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__core_widgets_google_maps_widget_google_maps_widget_component__ = __webpack_require__("../../../../../src/app/core/widgets/google-maps-widget/google-maps-widget.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__core_widgets_activity_activity_component__ = __webpack_require__("../../../../../src/app/core/widgets/activity/activity.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__core_widgets_traffic_sources_traffic_sources_component__ = __webpack_require__("../../../../../src/app/core/widgets/traffic-sources/traffic-sources.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__core_loading_overlay_loading_overlay_component__ = __webpack_require__("../../../../../src/app/core/loading-overlay/loading-overlay.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54_angular_sortablejs__ = __webpack_require__("../../../../angular-sortablejs/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54_angular_sortablejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_54_angular_sortablejs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__demo_drag_and_drop_drag_and_drop_component__ = __webpack_require__("../../../../../src/app/demo/drag-and-drop/drag-and-drop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__demo_apps_inbox_inbox_component__ = __webpack_require__("../../../../../src/app/demo/apps/inbox/inbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__demo_apps_inbox_mail_service__ = __webpack_require__("../../../../../src/app/demo/apps/inbox/mail.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__demo_apps_inbox_inbox_compose_inbox_compose_component__ = __webpack_require__("../../../../../src/app/demo/apps/inbox/inbox-compose/inbox-compose.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59_angular_calendar__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__demo_apps_calendar_calendar_component__ = __webpack_require__("../../../../../src/app/demo/apps/calendar/calendar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__demo_apps_calendar_calendar_edit_calendar_edit_component__ = __webpack_require__("../../../../../src/app/demo/apps/calendar/calendar-edit/calendar-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__demo_components_autocomplete_autocomplete_component__ = __webpack_require__("../../../../../src/app/demo/components/autocomplete/autocomplete.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64_ngx_perfect_scrollbar__ = __webpack_require__("../../../../ngx-perfect-scrollbar/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64_ngx_perfect_scrollbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_64_ngx_perfect_scrollbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__core_sidenav_mediareplay_media_replay_service__ = __webpack_require__("../../../../../src/app/core/sidenav/mediareplay/media-replay.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__core_toolbar_toolbar_component__ = __webpack_require__("../../../../../src/app/core/toolbar/toolbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__core_toolbar_favorites_favorites_component__ = __webpack_require__("../../../../../src/app/core/toolbar/favorites/favorites.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__demo_custom_pages_registration_registration_component__ = __webpack_require__("../../../../../src/app/demo/custom-pages/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__demo_custom_pages_login_login_component__ = __webpack_require__("../../../../../src/app/demo/custom-pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__demo_custom_pages_registration_password_match_directive__ = __webpack_require__("../../../../../src/app/demo/custom-pages/registration/password.match.directive.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









































































var perfectScrollbarConfig = {
    suppressScrollX: true,
    swipePropagation: false
};
var sortablejsConfig = {
    animation: 300
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__core_sidenav_sidenav_component__["a" /* SidenavComponent */],
            __WEBPACK_IMPORTED_MODULE_9__core_sidenav_sidenav_item_sidenav_item_component__["a" /* SidenavItemComponent */],
            __WEBPACK_IMPORTED_MODULE_11__core_sidenav_icon_sidenav_directive__["a" /* IconSidenavDirective */],
            __WEBPACK_IMPORTED_MODULE_13__demo_custom_pages_dashboard_v1_dashboard_v1_component__["a" /* DashboardV1Component */],
            __WEBPACK_IMPORTED_MODULE_14__demo_components_buttons_buttons_component__["a" /* ButtonsComponent */],
            __WEBPACK_IMPORTED_MODULE_16__demo_forms_form_elements_form_elements_component__["a" /* FormElementsComponent */],
            __WEBPACK_IMPORTED_MODULE_17__core_search_search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_18__core_breadcrumb_breadcrumb_component__["a" /* BreadcrumbsComponent */],
            __WEBPACK_IMPORTED_MODULE_20__demo_components_lists_lists_component__["a" /* ListsComponent */],
            __WEBPACK_IMPORTED_MODULE_21__core_widgets_widgets_v1_widget_v1_widget_v1_component__["a" /* WidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_23__core_charts_nvD3_nvD3_component__["a" /* nvD3 */],
            __WEBPACK_IMPORTED_MODULE_24__core_widgets_widgets_v1_line_chart_widget_line_chart_widget_component__["a" /* LineChartWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_25__core_widgets_widgets_v1_source_overview_widget_source_overview_widget_component__["a" /* SourceOverviewWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_26__demo_tables_simple_table_simple_table_component__["a" /* SimpleTableComponent */],
            __WEBPACK_IMPORTED_MODULE_27__demo_tables_fixed_header_table_fixed_header_table_component__["a" /* FixedHeaderTableComponent */],
            __WEBPACK_IMPORTED_MODULE_28__demo_forms_form_wizard_form_wizard_component__["a" /* FormWizardComponent */],
            __WEBPACK_IMPORTED_MODULE_29__demo_maps_google_maps_google_maps_component__["a" /* GoogleMapsComponent */],
            __WEBPACK_IMPORTED_MODULE_30__demo_components_cards_cards_component__["a" /* CardsComponent */],
            __WEBPACK_IMPORTED_MODULE_31__demo_components_dialogs_dialogs_component__["a" /* DialogsComponent */],
            __WEBPACK_IMPORTED_MODULE_31__demo_components_dialogs_dialogs_component__["b" /* DemoDialog */],
            __WEBPACK_IMPORTED_MODULE_32__demo_icons_icons_component__["a" /* IconsComponent */],
            __WEBPACK_IMPORTED_MODULE_33__demo_components_grid_list_grid_list_component__["a" /* GridListComponent */],
            __WEBPACK_IMPORTED_MODULE_34__demo_components_menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_35__demo_components_slider_slider_component__["a" /* SliderComponent */],
            __WEBPACK_IMPORTED_MODULE_36__demo_components_snack_bar_snack_bar_component__["a" /* SnackBarComponent */],
            __WEBPACK_IMPORTED_MODULE_37__demo_components_tooltip_tooltip_component__["a" /* TooltipComponent */],
            __WEBPACK_IMPORTED_MODULE_39__demo_levels_level5_level5_component__["a" /* Level5Component */],
            __WEBPACK_IMPORTED_MODULE_40__core_admin_admin_component__["a" /* AdminComponent */],
            __WEBPACK_IMPORTED_MODULE_41__demo_custom_pages_forgot_password_forgot_password_component__["a" /* ForgotPasswordComponent */],
            __WEBPACK_IMPORTED_MODULE_72__demo_custom_pages_registration_password_match_directive__["a" /* EqualValidator */],
            __WEBPACK_IMPORTED_MODULE_43__demo_editor_editor_component__["a" /* EditorComponent */],
            __WEBPACK_IMPORTED_MODULE_44__core_quickpanel_quickpanel_component__["a" /* QuickpanelComponent */],
            __WEBPACK_IMPORTED_MODULE_45__demo_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_46__core_widgets_bar_chart_bar_chart_component__["a" /* BarChartComponent */],
            __WEBPACK_IMPORTED_MODULE_47__core_widgets_line_chart_line_chart_component__["a" /* LineChartComponent */],
            __WEBPACK_IMPORTED_MODULE_48__core_widgets_recent_sales_recent_sales_component__["a" /* RecentSalesComponent */],
            __WEBPACK_IMPORTED_MODULE_49__core_widgets_pie_chart_pie_chart_component__["a" /* PieChartComponent */],
            __WEBPACK_IMPORTED_MODULE_50__core_widgets_google_maps_widget_google_maps_widget_component__["a" /* GoogleMapsWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_51__core_widgets_activity_activity_component__["a" /* ActivityComponent */],
            __WEBPACK_IMPORTED_MODULE_52__core_widgets_traffic_sources_traffic_sources_component__["a" /* TrafficSourcesComponent */],
            __WEBPACK_IMPORTED_MODULE_53__core_loading_overlay_loading_overlay_component__["a" /* LoadingOverlayComponent */],
            __WEBPACK_IMPORTED_MODULE_55__demo_drag_and_drop_drag_and_drop_component__["a" /* DragAndDropComponent */],
            __WEBPACK_IMPORTED_MODULE_56__demo_apps_inbox_inbox_component__["a" /* InboxComponent */],
            __WEBPACK_IMPORTED_MODULE_58__demo_apps_inbox_inbox_compose_inbox_compose_component__["a" /* InboxComposeComponent */],
            __WEBPACK_IMPORTED_MODULE_60__demo_apps_calendar_calendar_component__["a" /* CalendarComponent */],
            __WEBPACK_IMPORTED_MODULE_61__demo_apps_calendar_calendar_edit_calendar_edit_component__["a" /* CalendarEditComponent */],
            __WEBPACK_IMPORTED_MODULE_63__demo_components_autocomplete_autocomplete_component__["a" /* AutocompleteComponent */],
            __WEBPACK_IMPORTED_MODULE_68__core_toolbar_toolbar_component__["a" /* ToolbarComponent */],
            __WEBPACK_IMPORTED_MODULE_69__core_toolbar_favorites_favorites_component__["a" /* FavoritesComponent */],
            __WEBPACK_IMPORTED_MODULE_70__demo_custom_pages_registration_registration_component__["a" /* RegistrationComponent */],
            __WEBPACK_IMPORTED_MODULE_71__demo_custom_pages_login_login_component__["a" /* LoginComponent */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_31__demo_components_dialogs_dialogs_component__["b" /* DemoDialog */],
            __WEBPACK_IMPORTED_MODULE_58__demo_apps_inbox_inbox_compose_inbox_compose_component__["a" /* InboxComposeComponent */],
            __WEBPACK_IMPORTED_MODULE_61__demo_apps_calendar_calendar_edit_calendar_edit_component__["a" /* CalendarEditComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_62__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__["a" /* ToasterModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_12__app_routing_module__["a" /* RoutingModule */],
            __WEBPACK_IMPORTED_MODULE_66__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_64_ngx_perfect_scrollbar__["PerfectScrollbarModule"].forRoot(perfectScrollbarConfig),
            __WEBPACK_IMPORTED_MODULE_65__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: __WEBPACK_IMPORTED_MODULE_38__environments_environment__["a" /* environment */].googleApi
            }),
            __WEBPACK_IMPORTED_MODULE_42_ngx_quill__["a" /* QuillModule */],
            __WEBPACK_IMPORTED_MODULE_15__core_highlightjs_highlight_module__["a" /* HighlightModule */],
            __WEBPACK_IMPORTED_MODULE_54_angular_sortablejs__["SortablejsModule"],
            __WEBPACK_IMPORTED_MODULE_59_angular_calendar__["a" /* CalendarModule */].forRoot(),
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__core_sidenav_sidenav_service__["a" /* SidenavService */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["b" /* MdIconRegistry */],
            __WEBPACK_IMPORTED_MODULE_19__core_breadcrumb_breadcrumb_service__["a" /* BreadcrumbService */],
            __WEBPACK_IMPORTED_MODULE_22__core_charts_nvD3_nvD3_service__["a" /* D3ChartService */],
            __WEBPACK_IMPORTED_MODULE_57__demo_apps_inbox_mail_service__["a" /* MailService */],
            __WEBPACK_IMPORTED_MODULE_67__core_sidenav_mediareplay_media_replay_service__["a" /* MediaReplayService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<md-sidenav-container>\r\n\r\n  <md-sidenav class=\"quickpanel\" [opened]=\"quickpanelOpen\" align=\"end\" mode=\"over\" #quickpanel>\r\n\r\n    <ms-quickpanel></ms-quickpanel>\r\n\r\n  </md-sidenav>\r\n\r\n  <md-sidenav class=\"sidenav\" [opened]=\"sidenavOpen\" align=\"start\" [mode]=\"sidenavMode\" msIconSidenav #sidenav>\r\n\r\n    <ms-sidenav></ms-sidenav>\r\n\r\n  </md-sidenav>\r\n\r\n  <ms-toolbar [quickpanel]=\"quickpanel\" [sidenav]=\"sidenav\"></ms-toolbar>\r\n\r\n  <div class=\"main-container\" #scrollContainer>\r\n    <router-outlet (activate)=\"onActivate($event, scrollContainer)\"></router-outlet>\r\n  </div>\r\n\r\n</md-sidenav-container>\r\n"

/***/ }),

/***/ "../../../../../src/app/core/admin/admin.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@-webkit-keyframes fadein {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes fadein {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@-webkit-keyframes fadeout {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@keyframes fadeout {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n.main-toolbar {\n  background: #ffffff;\n  position: relative;\n  overflow-x: hidden;\n  z-index: 4;\n  padding-right: 0; }\n  .main-toolbar .user-button-container {\n    height: 100%; }\n    .main-toolbar .user-button-container .user-button {\n      height: 100%;\n      border-radius: 0; }\n      .main-toolbar .user-button-container .user-button md-icon {\n        font-size: 16px;\n        width: 16px;\n        height: 16px; }\n      .main-toolbar .user-button-container .user-button .name {\n        margin: 0 8px 0 10px; }\n  .main-toolbar button.fullscreen-toggle {\n    border-radius: 0;\n    padding: 0;\n    min-width: 50px;\n    max-width: 50px;\n    height: 100%; }\n  .main-toolbar button.quickpanel-toggle {\n    border-radius: 0;\n    padding: 0;\n    min-width: 75px;\n    max-width: 75px;\n    height: 100%; }\n\n.mat-sidenav.quickpanel {\n  z-index: 100;\n  width: 330px;\n  min-width: 330px;\n  max-width: 330px; }\n\n@media screen and (max-width: 959px) {\n  .mat-sidenav.quickpanel {\n    width: 250px;\n    min-width: 250px;\n    max-width: 250px; }\n  button.user-button {\n    min-width: 72px; } }\n\n@media screen and (min-width: 960px) {\n  .mat-sidenav-backdrop {\n    z-index: 50 !important; } }\n\n.sidenav {\n  width: 250px;\n  max-width: 250px;\n  background: #2B303B;\n  overflow-x: hidden;\n  z-index: 4; }\n\n.main-container {\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: calc(100% - 64px);\n  position: relative; }\n\n@media screen and (min-width: 960px) {\n  .sidenav + .cdk-visually-hidden + .mat-sidenav-content, .sidenav + .mat-sidenav-content {\n    transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n    transition-property: max-width, margin-left, margin-right, -webkit-transform !important;\n    transition-property: transform, max-width, margin-left, margin-right !important;\n    transition-property: transform, max-width, margin-left, margin-right, -webkit-transform !important;\n    margin-left: 0 !important;\n    background: #EEE;\n    z-index: 5;\n    overflow: hidden;\n    box-shadow: inset 7px 0 9px -7px rgba(0, 0, 0, 0.4); }\n  .sidenav + .cdk-visually-hidden + .mat-sidenav-content, .sidenav + .mat-sidenav-content {\n    max-width: calc(100% - 250px);\n    -webkit-transform: translate3d(250px, 0, 0) !important;\n            transform: translate3d(250px, 0, 0) !important; }\n  .sidenav.icon-sidenav.collapsed + .cdk-visually-hidden + .mat-sidenav-content, .sidenav.icon-sidenav.collapsed + .mat-sidenav-content {\n    max-width: calc(100% - 68px);\n    -webkit-transform: translate3d(68px, 0, 0) !important;\n            transform: translate3d(68px, 0, 0) !important; }\n  .sidenav.icon-sidenav + .cdk-visually-hidden + .mat-sidenav-content, .sidenav.icon-sidenav + .mat-sidenav-content {\n    max-width: calc(100% - 68px); }\n  .sidenav.collapsed .fade-in-on-icon-sidenav {\n    -webkit-animation: 0.5s cubic-bezier(0.25, 0.8, 0.25, 1) 0s normal forwards 1 fadeout;\n            animation: 0.5s cubic-bezier(0.25, 0.8, 0.25, 1) 0s normal forwards 1 fadeout; }\n  .sidenav:not(.collapsed) .fade-in-on-icon-sidenav {\n    -webkit-animation: 0.5s cubic-bezier(0.25, 0.8, 0.25, 1) 0s normal forwards 1 fadein;\n            animation: 0.5s cubic-bezier(0.25, 0.8, 0.25, 1) 0s normal forwards 1 fadein; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sidenav_mediareplay_media_replay_service__ = __webpack_require__("../../../../../src/app/core/sidenav/mediareplay/media-replay.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminComponent = (function () {
    function AdminComponent(router, mediaReplayService) {
        this.router = router;
        this.mediaReplayService = mediaReplayService;
        this.quickpanelOpen = false;
        this.sidenavOpen = true;
        this.sidenavMode = 'side';
        this.isMobile = false;
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._mediaSubscription = this.mediaReplayService.media$.subscribe(function (change) {
            var isMobile = (change.mqAlias == 'xs') || (change.mqAlias == 'sm');
            _this.isMobile = isMobile;
            _this.sidenavMode = (isMobile) ? 'over' : 'side';
            _this.sidenavOpen = !isMobile;
        });
        this._routerEventsSubscription = this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationEnd */] && _this.isMobile) {
                _this.sidenav.close();
            }
        });
    };
    AdminComponent.prototype.ngOnDestroy = function () {
        this._mediaSubscription.unsubscribe();
    };
    AdminComponent.prototype.onActivate = function (e, scrollContainer) {
        scrollContainer.scrollTop = 0;
    };
    return AdminComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('sidenav'),
    __metadata("design:type", Object)
], AdminComponent.prototype, "sidenav", void 0);
AdminComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-admin',
        template: __webpack_require__("../../../../../src/app/core/admin/admin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/admin/admin.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__sidenav_mediareplay_media_replay_service__["a" /* MediaReplayService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__sidenav_mediareplay_media_replay_service__["a" /* MediaReplayService */]) === "function" && _b || Object])
], AdminComponent);

var _a, _b;
//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/breadcrumb/breadcrumb.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"breadcrumbs\" fxLayout=\"row\">\r\n  <li *ngFor=\"let url of urls; let last = last; let first = first\" [ngClass]=\"{'active': last}\" fxLayout=\"row\" fxLayoutAlign=\"center center\"> <!-- disable link of last item -->\r\n    <md-icon *ngIf=\"!first\">keyboard_arrow_right</md-icon>\r\n    <a role=\"button\" *ngIf=\"!last && url == prefix\">{{url}}</a>\r\n    <a role=\"button\" *ngIf=\"!last && url != prefix\">{{friendlyName(url)}}</a>\r\n    <span *ngIf=\"last\">{{friendlyName(url)}}</span>\r\n    <span *ngIf=\"last && url == prefix\">{{friendlyName('/')}}</span>\r\n  </li>\r\n</ul>\r\n"

/***/ }),

/***/ "../../../../../src/app/core/breadcrumb/breadcrumb.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".breadcrumbs {\n  margin: 0;\n  padding: 0 16px;\n  list-style: none;\n  font-weight: 400; }\n  .breadcrumbs li {\n    line-height: 64px; }\n    .breadcrumbs li md-icon {\n      margin: 0 8px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/breadcrumb/breadcrumb.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__breadcrumb_service__ = __webpack_require__("../../../../../src/app/core/breadcrumb/breadcrumb.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreadcrumbsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BreadcrumbsComponent = (function () {
    function BreadcrumbsComponent(router, breadcrumbService) {
        this.router = router;
        this.breadcrumbService = breadcrumbService;
        this.prefix = '';
    }
    BreadcrumbsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.urls = [];
        if (this.prefix.length > 0) {
            this.urls.unshift(this.prefix);
        }
        this._routerSubscription = this.router.events.subscribe(function (navigationEnd) {
            _this.urls.length = 0; //Fastest way to clear out array
            _this.generateBreadcrumbTrail(navigationEnd.urlAfterRedirects ? navigationEnd.urlAfterRedirects : navigationEnd.url);
        });
    };
    BreadcrumbsComponent.prototype.ngOnChanges = function () {
        if (!this.urls) {
            return;
        }
        this.urls.length = 0;
        this.generateBreadcrumbTrail(this.router.url);
    };
    BreadcrumbsComponent.prototype.generateBreadcrumbTrail = function (url) {
        if (!this.breadcrumbService.isRouteHidden(url)) {
            //Add url to beginning of array (since the url is being recursively broken down from full url to its parent)
            this.urls.unshift(url);
        }
        if (url.lastIndexOf('/') > 0) {
            this.generateBreadcrumbTrail(url.substr(0, url.lastIndexOf('/'))); //Find last '/' and add everything before it as a parent route
        }
        else if (this.prefix.length > 0) {
            this.urls.unshift(this.prefix);
        }
    };
    BreadcrumbsComponent.prototype.navigateTo = function (url) {
        this.router.navigateByUrl(url);
    };
    BreadcrumbsComponent.prototype.friendlyName = function (url) {
        return !url ? '' : this.breadcrumbService.getFriendlyNameForRoute(url);
    };
    BreadcrumbsComponent.prototype.ngOnDestroy = function () {
        this._routerSubscription.unsubscribe();
    };
    return BreadcrumbsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('prefix'),
    __metadata("design:type", String)
], BreadcrumbsComponent.prototype, "prefix", void 0);
BreadcrumbsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-breadcrumbs',
        template: __webpack_require__("../../../../../src/app/core/breadcrumb/breadcrumb.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/breadcrumb/breadcrumb.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__breadcrumb_service__["a" /* BreadcrumbService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__breadcrumb_service__["a" /* BreadcrumbService */]) === "function" && _b || Object])
], BreadcrumbsComponent);

var _a, _b;
//# sourceMappingURL=breadcrumb.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/breadcrumb/breadcrumb.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreadcrumbService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BreadcrumbService = (function () {
    function BreadcrumbService() {
        this.routesFriendlyNames = new Map();
        this.routesFriendlyNamesRegex = new Map();
        this.routesWithCallback = new Map();
        this.routesWithCallbackRegex = new Map();
        this.hideRoutes = [];
        this.hideRoutesRegex = [];
    }
    /**
     * Specify a friendly name for the corresponding route.
     *
     * @param route
     * @param name
     */
    BreadcrumbService.prototype.addFriendlyNameForRoute = function (route, name) {
        this.routesFriendlyNames.set(route, name);
    };
    /**
     * Specify a friendly name for the corresponding route matching a regular expression.
     *
     * @param routeRegex
     * @param name
     */
    BreadcrumbService.prototype.addFriendlyNameForRouteRegex = function (routeRegex, name) {
        this.routesFriendlyNamesRegex.set(routeRegex, name);
    };
    /**
     * Specify a callback for the corresponding route.
     * When a mathing url is navigatedd to, the callback function is invoked to get the name to be displayed in the breadcrumb.
     */
    BreadcrumbService.prototype.addCallbackForRoute = function (route, callback) {
        this.routesWithCallback.set(route, callback);
    };
    /**
     * Specify a callback for the corresponding route matching a regular expression.
     * When a mathing url is navigatedd to, the callback function is invoked to get the name to be displayed in the breadcrumb.
     */
    BreadcrumbService.prototype.addCallbackForRouteRegex = function (routeRegex, callback) {
        this.routesWithCallbackRegex.set(routeRegex, callback);
    };
    /**
     * Show the friendly name for a given route (url). If no match is found the url (without the leading '/') is shown.
     *
     * @param route
     * @returns {*}
     */
    BreadcrumbService.prototype.getFriendlyNameForRoute = function (route) {
        var name;
        var routeEnd = route.substr(route.lastIndexOf('/') + 1, route.length);
        this.routesFriendlyNames.forEach(function (value, key, map) {
            if (key === route) {
                name = value;
            }
        });
        this.routesFriendlyNamesRegex.forEach(function (value, key, map) {
            if (new RegExp(key).exec(route)) {
                name = value;
            }
        });
        this.routesWithCallback.forEach(function (value, key, map) {
            if (key === route) {
                name = value(routeEnd);
            }
        });
        this.routesWithCallbackRegex.forEach(function (value, key, map) {
            if (new RegExp(key).exec(route)) {
                name = value(routeEnd);
            }
        });
        return name ? name : routeEnd;
    };
    /**
     * Specify a route (url) that should not be shown in the breadcrumb.
     */
    BreadcrumbService.prototype.hideRoute = function (route) {
        if (!(this.hideRoutes.indexOf(route) != -1)) {
            this.hideRoutes.push(route);
        }
    };
    /**
     * Specify a route (url) regular expression that should not be shown in the breadcrumb.
     */
    BreadcrumbService.prototype.hideRouteRegex = function (routeRegex) {
        if (!(this.hideRoutesRegex.indexOf(routeRegex) != -1)) {
            this.hideRoutesRegex.push(routeRegex);
        }
    };
    /**
     * Returns true if a route should be hidden.
     */
    BreadcrumbService.prototype.isRouteHidden = function (route) {
        var hide = (this.hideRoutes.indexOf(route) != -1);
        this.hideRoutesRegex.forEach(function (value) {
            if (new RegExp(value).exec(route)) {
                hide = true;
            }
        });
        return hide;
    };
    return BreadcrumbService;
}());
BreadcrumbService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], BreadcrumbService);

//# sourceMappingURL=breadcrumb.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/charts/nvD3/nvD3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nvD3_service__ = __webpack_require__("../../../../../src/app/core/charts/nvD3/nvD3.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return nvD3; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var nvD3 = (function () {
    function nvD3(elementRef, nvD3Service) {
        this.el = elementRef.nativeElement;
        this.d3 = nvD3Service.getD3();
        this.nv = nvD3Service.getNv();
    }
    nvD3.prototype.ngOnChanges = function (changes) {
        if (this.options) {
            if (!this.chart || this.chartType !== this.options.chart.type) {
                this.initChart(this.options);
            }
            else {
                this.updateWithOptions(this.options);
            }
        }
    };
    nvD3.prototype.initChart = function (options) {
        var _this = this;
        // Clearing
        this.clearElement();
        if (!options)
            return;
        // Initialize chart with specific type
        this.chart = this.nv.models[options.chart.type]();
        this.chartType = this.options.chart.type;
        // Generate random chart ID
        this.chart.id = Math.random().toString(36).substr(2, 15);
        this.updateWithOptions(options);
        this.nv.addGraph(function () {
            if (!_this.chart)
                return;
            // Remove resize handler. Due to async execution should be placed here, not in the clearElement
            if (_this.chart.resizeHandler)
                _this.chart.resizeHandler.clear();
            _this.chart.resizeHandler = _this.nv.utils.windowResize(function () {
                _this.chart && _this.chart.update && _this.chart.update();
            });
            return _this.chart;
        }, options.chart['callback']);
        setTimeout(function () {
            window.dispatchEvent(new Event('resize'));
        }, 0);
    };
    /**
     * Update chart with new options.
     * @param options
     */
    nvD3.prototype.updateWithOptions = function (options) {
        // Exit if options are not yet bound
        if (!options)
            return;
        for (var key in this.chart) {
            if (!this.chart.hasOwnProperty(key))
                continue;
            var value = this.chart[key];
            if (key[0] === '_') { }
            else if ([
                'clearHighlights',
                'highlightPoint',
                'id',
                'options',
                'resizeHandler',
                'state',
                'open',
                'close',
                'tooltipContent'
            ].indexOf(key) >= 0) { }
            else if (key === 'dispatch')
                this.configureEvents(this.chart[key], options.chart[key]);
            else if ([
                'bars',
                'bars1',
                'bars2',
                'boxplot',
                'bullet',
                'controls',
                'discretebar',
                'distX',
                'distY',
                'interactiveLayer',
                'legend',
                'lines',
                'lines1',
                'lines2',
                'multibar',
                'pie',
                'scatter',
                'scatters1',
                'scatters2',
                'sparkline',
                'stack1',
                'stack2',
                'sunburst',
                'tooltip',
                'x2Axis',
                'xAxis',
                'y1Axis',
                'y2Axis',
                'y3Axis',
                'y4Axis',
                'yAxis',
                'yAxis1',
                'yAxis2'
            ].indexOf(key) >= 0 ||
                // stacked is a component for stackedAreaChart, but a boolean for multiBarChart and multiBarHorizontalChart
                (key === 'stacked' && options.chart.type === 'stackedAreaChart')) {
                this.configure(this.chart[key], options.chart[key], options.chart.type);
            }
            else if ((key === 'xTickFormat' || key === 'yTickFormat') && options.chart.type === 'lineWithFocusChart') {
            }
            else if ((key === 'tooltips') && options.chart.type === 'boxPlotChart') {
            }
            else if ((key === 'tooltipXContent' || key === 'tooltipYContent') && options.chart.type === 'scatterChart') {
            }
            else if (options.chart[key] === undefined || options.chart[key] === null) {
            }
            else
                this.chart[key](options.chart[key]);
        }
        this.updateWithData(this.data);
    };
    /**
     * Update chart with new chartDataArray.
     * @param data
     */
    nvD3.prototype.updateWithData = function (data) {
        if (data) {
            // Select the add <svg> element (create it if necessary) and to render the chart in
            {
                var svgElement = this.el.querySelector('svg');
                if (!svgElement) {
                    this.svg = this.d3.select(this.el).append('svg');
                }
                else {
                    this.svg = this.d3.select(svgElement);
                }
            }
            this.updateSize();
            this.svg.datum(data).call(this.chart);
        }
    };
    /**
     * Update the chart size.
     */
    nvD3.prototype.updateSize = function () {
        if (this.svg) {
            var h = void 0, w = void 0;
            if (h = this.options.chart.height) {
                if (!isNaN(+h))
                    h += 'px';
                this.svg.attr('height', h).style({ height: h });
            }
            if (w = this.options.chart.width) {
                if (!isNaN(+w))
                    w += 'px';
                this.svg.attr('width', w).style({ width: w });
            }
            else {
                this.svg.attr('width', '100%').style({ width: '100%' });
            }
        }
    };
    /**
     * Synchronize the options with the options of the nvd3 chart.
     * @param chart
     * @param options
     * @param chartType
     */
    nvD3.prototype.configure = function (chart, options, chartType) {
        if (chart && options) {
            for (var key in chart) {
                if (!chart.hasOwnProperty(key))
                    continue;
                var value = chart[key];
                if (key[0] === '_') {
                }
                else if (key === 'dispatch')
                    this.configureEvents(value, options[key]);
                else if (key === 'tooltip')
                    this.configure(chart[key], options[key], chartType);
                else if (key === 'contentGenerator') {
                    if (options[key])
                        chart[key](options[key]);
                }
                else if ([
                    'axis',
                    'clearHighlights',
                    'defined',
                    'highlightPoint',
                    'nvPointerEventsClass',
                    'options',
                    'rangeBand',
                    'rangeBands',
                    'scatter',
                    'open',
                    'close'
                ].indexOf(key) === -1) {
                    if (options[key] === undefined || options[key] === null) {
                    }
                    else
                        chart[key](options[key]);
                }
            }
        }
    };
    /**
     * Configure dispatch events.
     * @param dispatch
     * @param options
     */
    nvD3.prototype.configureEvents = function (dispatch, options) {
        if (dispatch && options) {
            for (var key in dispatch) {
                if (!dispatch.hasOwnProperty(key))
                    continue;
                var value = dispatch[key];
                if (options[key] === undefined || options[key] === null) {
                }
                else
                    dispatch.on(key + '._', options[key]);
            }
        }
    };
    /**
     * Cleanup an element.
     */
    nvD3.prototype.clearElement = function () {
        var nv = this.nv;
        this.el.innerHTML = '';
        // remove tooltip if exists
        if (this.chart && this.chart.tooltip && this.chart.tooltip.id) {
            this.d3.select('#' + this.chart.tooltip.id()).remove();
        }
        // To be compatible with old nvd3 (v1.7.1)
        if (nv['graphs'] && this.chart) {
            for (var i = nv['graphs'].length - 1; i >= 0; i--) {
                if (nv['graphs'][i] && (nv['graphs'][i].id === this.chart.id)) {
                    nv['graphs'].splice(i, 1);
                }
            }
        }
        if (nv.tooltip && nv.tooltip.cleanup) {
            nv.tooltip.cleanup();
        }
        if (this.chart && this.chart.resizeHandler)
            this.chart.resizeHandler.clear();
        this.chart = null;
    };
    return nvD3;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], nvD3.prototype, "options", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], nvD3.prototype, "data", void 0);
nvD3 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'nvd3',
        template: ""
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__nvD3_service__["a" /* D3ChartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nvD3_service__["a" /* D3ChartService */]) === "function" && _b || Object])
], nvD3);

var _a, _b;
//# sourceMappingURL=nvD3.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/charts/nvD3/nvD3.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("../../../../d3/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nvd3__ = __webpack_require__("../../../../nvd3/build/nv.d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nvd3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_nvd3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3ChartService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var D3ChartService = (function () {
    function D3ChartService() {
    }
    D3ChartService.prototype.getD3 = function () {
        return __WEBPACK_IMPORTED_MODULE_1_d3__;
    };
    D3ChartService.prototype.getNv = function () {
        return __WEBPACK_IMPORTED_MODULE_2_nvd3__;
    };
    return D3ChartService;
}());
D3ChartService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], D3ChartService);

//# sourceMappingURL=nvD3.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/highlightjs/highlight.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HighlightDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HighlightDirective = (function () {
    function HighlightDirective(elem) {
        this.elem = elem;
    }
    HighlightDirective.prototype.ngAfterViewInit = function () {
        hljs.highlightBlock(this.elem.nativeElement);
    };
    return HighlightDirective;
}());
HighlightDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: 'code[msHighlight]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], HighlightDirective);

var _a;
//# sourceMappingURL=highlight.directive.js.map

/***/ }),

/***/ "../../../../../src/app/core/highlightjs/highlight.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__highlight_directive__ = __webpack_require__("../../../../../src/app/core/highlightjs/highlight.directive.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HighlightModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var HighlightModule = (function () {
    function HighlightModule() {
    }
    return HighlightModule;
}());
HighlightModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [],
        declarations: [__WEBPACK_IMPORTED_MODULE_1__highlight_directive__["a" /* HighlightDirective */]],
        exports: [__WEBPACK_IMPORTED_MODULE_1__highlight_directive__["a" /* HighlightDirective */]]
    })
], HighlightModule);

//# sourceMappingURL=highlight.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/loading-overlay/loading-overlay.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loading-overlay\" [class.show]=\"isLoading\">\r\n  <md-progress-bar mode=\"indeterminate\"></md-progress-bar>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/core/loading-overlay/loading-overlay.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".loading-overlay {\n  background-color: rgba(255, 255, 255, 0.7);\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 10;\n  transition: all .25s ease-in-out;\n  opacity: 0;\n  visibility: hidden; }\n  .loading-overlay.show {\n    opacity: 1;\n    visibility: visible; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/loading-overlay/loading-overlay.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingOverlayComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingOverlayComponent = (function () {
    function LoadingOverlayComponent() {
    }
    LoadingOverlayComponent.prototype.ngOnInit = function () {
    };
    return LoadingOverlayComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('isLoading'),
    __metadata("design:type", Boolean)
], LoadingOverlayComponent.prototype, "isLoading", void 0);
LoadingOverlayComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-loading-overlay',
        template: __webpack_require__("../../../../../src/app/core/loading-overlay/loading-overlay.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/loading-overlay/loading-overlay.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], LoadingOverlayComponent);

//# sourceMappingURL=loading-overlay.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/quickpanel/quickpanel.component.html":
/***/ (function(module, exports) {

module.exports = "<md-tab-group>\r\n  <md-tab label=\"Overview\">\r\n      <perfect-scrollbar class=\"overflow-container\">\r\n          <div class=\"text-padding\">\r\n            <p>TODAY</p>\r\n            <p class=\"h1\">\r\n              <span>{{ todayDay }}</span> <br/>\r\n              <span>{{ todayDate }}</span><span style=\"font-size: 18px; vertical-align: top;\">{{ todayDateSuffix }}</span><span>{{ todayMonth }}</span>\r\n            </p>\r\n          </div>\r\n\r\n          <md-divider></md-divider>\r\n\r\n          <md-nav-list>\r\n            <h3 md-subheader>Upcoming Events</h3>\r\n            <a href=\"javascript:;\" md-list-item>\r\n              <h4 md-line>Business Meeting</h4>\r\n              <p md-line>In 16 Minutes, Meeting Room</p>\r\n            </a>\r\n            <a href=\"javascript:;\" md-list-item>\r\n              <h4 md-line>Ask for Vacation</h4>\r\n              <p md-line>12:00 PM</p>\r\n            </a>\r\n            <a href=\"javascript:;\" md-list-item>\r\n              <h4 md-line>Dinner with Sophie</h4>\r\n              <p md-line>18:30 PM</p>\r\n            </a>\r\n            <a href=\"javascript:;\" md-list-item>\r\n              <h4 md-line>Deadline for Project X</h4>\r\n              <p  md-line>21:00 PM</p>\r\n            </a>\r\n            <md-divider></md-divider>\r\n            <h3 md-subheader>TODO-List</h3>\r\n            <a md-list-item>\r\n              <h4 md-line>Invite Jack to play golf</h4>\r\n              <p md-line>Added: 6 hours ago</p>\r\n            </a>\r\n            <a md-list-item>\r\n              <h4 md-line>Get to know Angular more</h4>\r\n              <p md-line>Added: 2 days ago</p>\r\n            </a>\r\n            <a md-list-item>\r\n              <h4 md-line>Configure that new router</h4>\r\n              <p md-line>Added: 5 days ago</p>\r\n            </a>\r\n            <md-divider></md-divider>\r\n            <h3 md-subheader>Server Statistics</h3>\r\n            <a md-list-item>\r\n              <p md-line>CPU Load (71% / 100%)</p>\r\n              <p md-line><md-progress-bar mode=\"determinate\" color=\"primary\" value=\"71\"></md-progress-bar></p>\r\n            </a>\r\n            <a md-list-item>\r\n              <p md-line>RAM Usage (6,175 MB / 16,384 MB)</p>\r\n              <p md-line><md-progress-bar mode=\"determinate\" color=\"accent\" value=\"34\"></md-progress-bar></p>\r\n            </a>\r\n            <a md-list-item>\r\n              <p md-line>CPU Temp (43° / 80°)</p>\r\n              <p md-line><md-progress-bar mode=\"determinate\" color=\"warn\" value=\"54\"></md-progress-bar></p>\r\n            </a>\r\n          </md-nav-list>\r\n      </perfect-scrollbar>\r\n  </md-tab>\r\n  <md-tab label=\"Notifications\">\r\n    <perfect-scrollbar class=\"overflow-container\">\r\n      <md-nav-list>\r\n        <h3 md-subheader>Friends</h3>\r\n        <a href=\"javascript:;\" md-list-item>\r\n          <img md-list-avatar src=\"assets/img/avatars/1.png\">\r\n          <h3 md-line> Sophie </h3>\r\n          <p md-line>\r\n            <span> Dinner? </span>\r\n            <span class=\"\"> -- Are we still going out tonight? </span>\r\n          </p>\r\n        </a>\r\n        <a href=\"javascript:;\" md-list-item>\r\n          <img md-list-avatar src=\"assets/img/avatars/4.png\">\r\n          <h3 md-line> Jack </h3>\r\n          <p md-line>\r\n            <span> Golf weekend </span>\r\n            <span class=\"\"> -- Hey! You wanted to go play Golf? </span>\r\n          </p>\r\n        </a>\r\n        <a href=\"javascript:;\" md-list-item>\r\n          <img md-list-avatar src=\"assets/img/avatars/9.png\">\r\n          <h3 md-line> Cody </h3>\r\n          <p md-line>\r\n            <span> Code Quality </span>\r\n            <span class=\"\"> -- Love your newest theme, so clean and slick! </span>\r\n          </p>\r\n        </a>\r\n        <a href=\"javascript:;\" md-list-item>\r\n          <img md-list-avatar src=\"assets/img/avatars/16.png\">\r\n          <h3 md-line> James </h3>\r\n          <p md-line>\r\n            <span> Gaming? </span>\r\n            <span class=\"\"> -- You wanna throw a party this weekend? </span>\r\n          </p>\r\n        </a>\r\n        <a href=\"javascript:;\" md-list-item>\r\n          <img md-list-avatar src=\"assets/img/avatars/19.png\">\r\n          <h3 md-line> Jessica </h3>\r\n          <p md-line>\r\n            <span> Love you... </span>\r\n            <span class=\"\"> -- Hope we can see us again soon :) </span>\r\n          </p>\r\n        </a>\r\n\r\n        <md-divider></md-divider>\r\n\r\n        <h3 md-subheader>Server Statistics</h3>\r\n        <a md-list-item>\r\n          <p md-line>CPU Load (71% / 100%)</p>\r\n          <p md-line><md-progress-bar mode=\"determinate\" color=\"primary\" value=\"71\"></md-progress-bar></p>\r\n        </a>\r\n        <a md-list-item>\r\n          <p md-line>RAM Usage (6,175 MB / 16,384 MB)</p>\r\n          <p md-line><md-progress-bar mode=\"determinate\" color=\"accent\" value=\"34\"></md-progress-bar></p>\r\n        </a>\r\n        <a md-list-item>\r\n          <p md-line>CPU Temp (43° / 80°)</p>\r\n          <p md-line><md-progress-bar mode=\"determinate\" color=\"warn\" value=\"54\"></md-progress-bar></p>\r\n        </a>\r\n      </md-nav-list>\r\n    </perfect-scrollbar>\r\n  </md-tab>\r\n</md-tab-group>\r\n"

/***/ }),

/***/ "../../../../../src/app/core/quickpanel/quickpanel.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".overflow-container {\n  height: 100%;\n  overflow-x: hidden;\n  position: absolute;\n  width: 100%; }\n\n.text-padding {\n  padding: 24px; }\n\np {\n  color: #444; }\n\n.h1 {\n  font-size: 32px;\n  font-weight: 500;\n  margin-bottom: 0; }\n\nh4 {\n  color: #212121; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/quickpanel/quickpanel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuickpanelComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuickpanelComponent = (function () {
    function QuickpanelComponent() {
    }
    QuickpanelComponent.prototype.ngOnInit = function () {
        this.todayDay = __WEBPACK_IMPORTED_MODULE_1_moment__().format('dddd');
        this.todayDate = __WEBPACK_IMPORTED_MODULE_1_moment__().format('Do');
        this.todayDate = this.todayDate.replace(/\D/g, '');
        this.todayDateSuffix = __WEBPACK_IMPORTED_MODULE_1_moment__().format('Do');
        this.todayDateSuffix = this.todayDateSuffix.replace(/[0-9]/g, '');
        this.todayMonth = __WEBPACK_IMPORTED_MODULE_1_moment__().format('MMMM');
    };
    return QuickpanelComponent;
}());
QuickpanelComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-quickpanel',
        template: __webpack_require__("../../../../../src/app/core/quickpanel/quickpanel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/quickpanel/quickpanel.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], QuickpanelComponent);

//# sourceMappingURL=quickpanel.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center stretch\" style=\"height: 100%;\">\r\n  <button class=\"search-button\" md-button (click)=\"open()\">\r\n    <md-icon>search</md-icon>\r\n  </button>\r\n  <md-input-container class=\"search\" floatingPlaceholder=\"false\" [class.search-open]=\"isOpen\">\r\n    <input #input (blur)=\"close()\" mdInput placeholder=\"Search...\">\r\n  </md-input-container>\r\n</div>\r\n\r\n\r\n<!--<div fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n  <div class=\"search-wrapper\" fxLayout=\"row\" [class.focus]=\"isFocused()\" fxShow=\"false\" fxShow.gt-md=\"true\">\r\n    <md-icon class=\"search-icon\">search</md-icon>\r\n    <input type=\"search\"\r\n           autocomplete=\"off\"\r\n           spellcheck=\"off\"\r\n           class=\"search-input\"\r\n           [(ngModel)]=\"search\"\r\n           (focus)=\"focus()\"\r\n           (blur)=\"blur()\"\r\n           placeholder=\"Search\">\r\n  </div>\r\n</div>\r\n-->\r\n"

/***/ }),

/***/ "../../../../../src/app/core/search/search.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  height: 100%; }\n\n.search {\n  margin-left: 8px;\n  width: 0;\n  overflow: hidden;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.4s cubic-bezier(0.35, 0, 0.25, 1);\n  margin-top: 7px; }\n  .search.search-open {\n    width: 250px;\n    visibility: visible;\n    opacity: 1; }\n\n.search-button {\n  border-radius: 0;\n  padding: 0;\n  min-width: 50px;\n  max-width: 50px; }\n\ninput[type=\"search\"] {\n  -webkit-appearance: none; }\n\n.search-wrapper {\n  position: relative;\n  -webkit-box-flex: 1.5;\n      -ms-flex-positive: 1.5;\n          flex-grow: 1.5; }\n  .search-wrapper .search-icon {\n    position: absolute;\n    font-size: 24px;\n    top: 6px;\n    left: 24px;\n    transition: color 0.2s ease; }\n  .search-wrapper input.search-input {\n    display: block;\n    padding: 8px 8px 8px 72px;\n    box-shadow: 0 1px 1.5px rgba(0, 0, 0, 0.06), 0 1px 1px rgba(0, 0, 0, 0.12);\n    height: 36px;\n    transition: all 0.2s ease;\n    border: none;\n    font-size: 16px;\n    -webkit-appearance: textfield;\n       -moz-appearance: textfield;\n            appearance: textfield;\n    font-weight: 300;\n    outline: none;\n    border-radius: 3px;\n    box-sizing: border-box;\n    color: currentColor;\n    background: rgba(255, 255, 255, 0.2);\n    width: 100%; }\n    .search-wrapper input.search-input:hover {\n      background: rgba(255, 255, 255, 0.5); }\n    .search-wrapper input.search-input::-webkit-input-placeholder {\n      color: currentColor; }\n    .search-wrapper input.search-input:-moz-placeholder {\n      opacity: 1;\n      color: currentColor; }\n    .search-wrapper input.search-input::-moz-placeholder {\n      opacity: 1;\n      color: currentColor; }\n    .search-wrapper input.search-input:-ms-input-placeholder {\n      color: currentColor; }\n  .search-wrapper.focus .search-icon {\n    color: rgba(0, 0, 0, 0.87); }\n  .search-wrapper.focus input.search-input {\n    background: white;\n    color: rgba(0, 0, 0, 0.87); }\n    .search-wrapper.focus input.search-input::-webkit-input-placeholder {\n      color: rgba(0, 0, 0, 0.87); }\n    .search-wrapper.focus input.search-input:-moz-placeholder {\n      opacity: 1;\n      color: rgba(0, 0, 0, 0.87); }\n    .search-wrapper.focus input.search-input::-moz-placeholder {\n      opacity: 1;\n      color: rgba(0, 0, 0, 0.87); }\n    .search-wrapper.focus input.search-input:-ms-input-placeholder {\n      color: rgba(0, 0, 0, 0.87); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchComponent = (function () {
    function SearchComponent(renderer) {
        this.renderer = renderer;
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.open = function () {
        var _this = this;
        this.isOpen = true;
        setTimeout(function () {
            _this.renderer.invokeElementMethod(_this.input.nativeElement, 'focus', []);
        }, 100);
    };
    SearchComponent.prototype.close = function () {
        this.isOpen = false;
    };
    return SearchComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('input'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], SearchComponent.prototype, "input", void 0);
SearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-search',
        template: __webpack_require__("../../../../../src/app/core/search/search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/search/search.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _b || Object])
], SearchComponent);

var _a, _b;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/sidenav/icon-sidenav.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidenav_service__ = __webpack_require__("../../../../../src/app/core/sidenav/sidenav.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mediareplay_media_replay_service__ = __webpack_require__("../../../../../src/app/core/sidenav/mediareplay/media-replay.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconSidenavDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IconSidenavDirective = (function () {
    function IconSidenavDirective(sidenavService, mediaReplayService) {
        this.sidenavService = sidenavService;
        this.mediaReplayService = mediaReplayService;
        this.isMobile = false;
    }
    Object.defineProperty(IconSidenavDirective.prototype, "isIconSidenav", {
        get: function () {
            return this.sidenavService.isIconSidenav;
        },
        enumerable: true,
        configurable: true
    });
    IconSidenavDirective.prototype.onMouseEnter = function () {
        if (this.isIconSidenav && !this.isMobile) {
            this.collapsed = false;
            this.sidenavService.nextCurrentlyOpen(this.currentlyOpen);
        }
    };
    IconSidenavDirective.prototype.onMouseLeave = function () {
        if (this.isIconSidenav && !this.isMobile) {
            this.collapsed = true;
            this.currentlyOpen = this.sidenavService.currentlyOpen;
            this.sidenavService.nextCurrentlyOpen([]);
        }
    };
    IconSidenavDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._mediaSubscription = this.mediaReplayService.media$.subscribe(function (change) {
            _this.isMobile = (change.mqAlias == 'xs') || (change.mqAlias == 'sm');
        });
    };
    IconSidenavDirective.prototype.ngOnDestroy = function () {
        this._mediaSubscription.unsubscribe();
    };
    return IconSidenavDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.icon-sidenav'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [])
], IconSidenavDirective.prototype, "isIconSidenav", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.collapsed'),
    __metadata("design:type", Boolean)
], IconSidenavDirective.prototype, "collapsed", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseenter'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], IconSidenavDirective.prototype, "onMouseEnter", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseleave'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], IconSidenavDirective.prototype, "onMouseLeave", null);
IconSidenavDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[msIconSidenav]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__sidenav_service__["a" /* SidenavService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__sidenav_service__["a" /* SidenavService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__mediareplay_media_replay_service__["a" /* MediaReplayService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__mediareplay_media_replay_service__["a" /* MediaReplayService */]) === "function" && _b || Object])
], IconSidenavDirective);

var _a, _b;
//# sourceMappingURL=icon-sidenav.directive.js.map

/***/ }),

/***/ "../../../../../src/app/core/sidenav/mediareplay/media-replay.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__ = __webpack_require__("../../../../rxjs/ReplaySubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__ = __webpack_require__("../../../flex-layout/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaReplayService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MediaReplayService = (function () {
    function MediaReplayService(media) {
        var _this = this;
        this._media$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["ReplaySubject"](1);
        media.asObservable()
            .subscribe(function (res) { return _this._media$.next(res); }, function (err) { return _this._media$.error(err); }, function () { return _this._media$.complete(); });
    }
    Object.defineProperty(MediaReplayService.prototype, "media$", {
        get: function () {
            return this._media$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    return MediaReplayService;
}());
MediaReplayService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["b" /* ObservableMedia */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_flex_layout__["b" /* ObservableMedia */]) === "function" && _a || Object])
], MediaReplayService);

var _a;
//# sourceMappingURL=media-replay.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/sidenav/sidenav-item/sidenav-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"item.isRouteString(); then routeNavItem else functionNavItem\"></div>\r\n\r\n<ng-template #functionNavItem>\r\n  <a class=\"sidenav-anchor\" [ngClass]=\"item.customClass\"\r\n     *ngIf=\"!item.hasSubItems()\"\r\n     md-list-item md-ripple (click)=\"item.route()\">\r\n\r\n    <md-icon>{{ item.icon }}</md-icon>\r\n    <span class=\"sidenav-item-name fade-in-on-icon-sidenav\">{{ item.name }}</span>\r\n    <span fxFlex><!-- fill space --></span>\r\n    <span class=\"badge fade-in-on-icon-sidenav\" *ngIf=\"item.badge\" [style.background-color]=\"item.badgeColor\">{{ item.badge }}</span>\r\n  </a>\r\n</ng-template>\r\n\r\n\r\n<ng-template #routeNavItem>\r\n  <a class=\"sidenav-anchor\" [ngClass]=\"item.customClass\"\r\n     *ngIf=\"!item.hasSubItems()\"\r\n     md-list-item md-ripple\r\n     [routerLink]=\"[item.route]\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n\r\n    <md-icon>{{ item.icon }}</md-icon>\r\n    <span class=\"sidenav-item-name fade-in-on-icon-sidenav\">{{ item.name }}</span>\r\n    <span fxFlex><!-- fill space --></span>\r\n    <span class=\"badge fade-in-on-icon-sidenav\" *ngIf=\"item.badge\" [style.background-color]=\"item.badgeColor\">{{ item.badge }}</span>\r\n  </a>\r\n</ng-template>\r\n\r\n<a class=\"sidenav-anchor\"\r\n   *ngIf=\"item.hasSubItems()\"\r\n   md-list-item md-ripple\r\n   (click)=\"toggleDropdown()\"\r\n   [ngClass]=\"item.customClass\">\r\n\r\n  <md-icon>{{ item.icon }}</md-icon>\r\n  <span class=\"sidenav-item-name fade-in-on-icon-sidenav\">{{ item.name }}</span>\r\n  <span fxFlex><!-- fill space --></span>\r\n  <span class=\"badge fade-in-on-icon-sidenav\" *ngIf=\"item.badge\" [style.background-color]=\"item.badgeColor\" style=\"margin-right: 12px;\">{{ item.badge }}</span>\r\n  <md-icon *ngIf=\"item.hasSubItems()\" class=\"sidenav-item-dropdown-indicator rotate fade-in-on-icon-sidenav\">expand_more</md-icon>\r\n\r\n</a>\r\n\r\n<md-nav-list class=\"sidenav-list sidenav-list-nested\"\r\n     fxLayout=\"column\" [style.height]=\"getSubItemsHeight()\">\r\n  <ms-sidenav-item *ngFor=\"let subItem of item.subItems\" [item]=\"subItem\"></ms-sidenav-item>\r\n</md-nav-list>\r\n"

/***/ }),

/***/ "../../../../../src/app/core/sidenav/sidenav-item/sidenav-item.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block; }\n\nmd-nav-list a.sidenav-anchor.mat-list-item .mat-list-item-content {\n  padding-left: 24px;\n  padding-right: 24px; }\n\nmd-nav-list a.sidenav-anchor .sidenav-item-name {\n  margin-left: 24px;\n  font-size: 14px; }\n\nmd-nav-list a.sidenav-anchor md-icon {\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n  line-height: 18px; }\n\n.sidenav-list {\n  transition: height 0.4s cubic-bezier(0.35, 0, 0.25, 1); }\n  .sidenav-list > ms-sidenav-item.open > .sidenav-anchor .sidenav-item-dropdown-indicator {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg); }\n  .sidenav-list > ms-sidenav-item .sidenav-item-dropdown-indicator {\n    transition: -webkit-transform .25s;\n    transition: transform .25s;\n    transition: transform .25s, -webkit-transform .25s; }\n  .sidenav-list > ms-sidenav-item .badge {\n    padding: 4px 8px;\n    font-size: 12px;\n    background: #2196F3;\n    border-radius: 5px;\n    color: #FFF; }\n\n.sidenav-toplevel .sidenav-anchor {\n  position: relative;\n  cursor: pointer;\n  color: #A7A9AE;\n  transition: color .1s; }\n  .sidenav-toplevel .sidenav-anchor:hover {\n    color: #FFFFFF; }\n  .sidenav-toplevel .sidenav-anchor.active {\n    color: #FFFFFF; }\n\n.sidenav-toplevel > .sidenav-item > .sidenav-anchor:hover {\n  background: #272b35; }\n\n.sidenav-toplevel > .sidenav-item > .sidenav-anchor.active {\n  background: #272b35; }\n\n.sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item {\n  background: #262a34; }\n  .sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-anchor:hover {\n    background: #22262f; }\n  .sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-anchor.active {\n    background: #22262f; }\n  .sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item {\n    background: #20242c; }\n    .sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-anchor {\n      padding-left: 10px; }\n      .sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-anchor:hover {\n        background: #1d2028; }\n      .sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-anchor.active {\n        background: #1d2028; }\n    .sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item {\n      background: #1b1e25; }\n      .sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-anchor {\n        padding-left: 20px; }\n        .sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-anchor:hover {\n          background: #181a20; }\n        .sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-anchor.active {\n          background: #181a20; }\n      .sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item {\n        background: #16181e; }\n        .sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-anchor {\n          padding-left: 30px; }\n          .sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-anchor:hover {\n            background: #121419; }\n          .sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-anchor.active {\n            background: #121419; }\n        .sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item {\n          background: #101216; }\n          .sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-anchor {\n            padding-left: 40px; }\n            .sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-anchor:hover {\n              background: #0d0e12; }\n            .sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-anchor.active {\n              background: #0d0e12; }\n          .sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item .sidenav-list-nested > .sidenav-item > .sidenav-anchor {\n            padding-left: 40px; }\n            .sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item .sidenav-list-nested > .sidenav-item > .sidenav-anchor:hover {\n              background: #08080a; }\n            .sidenav-toplevel > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item > .sidenav-list-nested > .sidenav-item .sidenav-list-nested > .sidenav-item > .sidenav-anchor.active {\n              background: #08080a; }\n\n.sidenav-toplevel .sidenav-item .sidenav-list-nested {\n  position: relative;\n  padding: 0;\n  overflow: hidden; }\n  .sidenav-toplevel .sidenav-item .sidenav-list-nested:before, .sidenav-toplevel .sidenav-item .sidenav-list-nested:after {\n    content: \" \";\n    left: 0;\n    position: absolute;\n    width: 100%;\n    height: 2px;\n    z-index: 3; }\n  .sidenav-toplevel .sidenav-item .sidenav-list-nested:before {\n    background: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0, transparent);\n    top: 0; }\n  .sidenav-toplevel .sidenav-item .sidenav-list-nested:after {\n    background: linear-gradient(-180deg, rgba(0, 0, 0, 0.3) 0, transparent);\n    bottom: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/sidenav/sidenav-item/sidenav-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidenav_item_model__ = __webpack_require__("../../../../../src/app/core/sidenav/sidenav-item/sidenav-item.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sidenav_service__ = __webpack_require__("../../../../../src/app/core/sidenav/sidenav.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidenavItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SidenavItemComponent = (function () {
    function SidenavItemComponent(sidenavService) {
        this.sidenavService = sidenavService;
        this.sidenavItemClass = true;
    }
    Object.defineProperty(SidenavItemComponent.prototype, "isOpen", {
        get: function () {
            return this.sidenavService.isOpen(this.item);
        },
        enumerable: true,
        configurable: true
    });
    SidenavItemComponent.prototype.ngOnInit = function () {
    };
    SidenavItemComponent.prototype.toggleDropdown = function () {
        if (this.item.hasSubItems()) {
            this.sidenavService.toggleCurrentlyOpen(this.item);
        }
    };
    // Receives the count of Sub Items and multiplies it with 48 (height of one SidenavItem) to set the height for animation.
    SidenavItemComponent.prototype.getSubItemsHeight = function () {
        return (this.getOpenSubItemsCount(this.item) * 48) + "px";
    };
    // Counts the amount of Sub Items there is and returns the count.
    SidenavItemComponent.prototype.getOpenSubItemsCount = function (item) {
        var _this = this;
        var count = 0;
        if (item.hasSubItems() && this.sidenavService.isOpen(item)) {
            count += item.subItems.length;
            item.subItems.forEach(function (subItem) {
                count += _this.getOpenSubItemsCount(subItem);
            });
        }
        return count;
    };
    return SidenavItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('item'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__sidenav_item_model__["a" /* SidenavItem */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__sidenav_item_model__["a" /* SidenavItem */]) === "function" && _a || Object)
], SidenavItemComponent.prototype, "item", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.open'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], SidenavItemComponent.prototype, "isOpen", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.sidenav-item'),
    __metadata("design:type", Boolean)
], SidenavItemComponent.prototype, "sidenavItemClass", void 0);
SidenavItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-sidenav-item',
        template: __webpack_require__("../../../../../src/app/core/sidenav/sidenav-item/sidenav-item.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/sidenav/sidenav-item/sidenav-item.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__sidenav_service__["a" /* SidenavService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__sidenav_service__["a" /* SidenavService */]) === "function" && _b || Object])
], SidenavItemComponent);

var _a, _b;
//# sourceMappingURL=sidenav-item.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/sidenav/sidenav-item/sidenav-item.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidenavItem; });
var SidenavItem = (function () {
    function SidenavItem(model) {
        if (model === void 0) { model = null; }
        if (model) {
            this.name = model.name;
            this.icon = model.icon;
            this.route = model.route;
            this.parent = model.parent;
            this.subItems = this.mapSubItems(model.subItems);
            this.position = model.position;
            this.badge = model.badge;
            this.badgeColor = model.badgeColor;
            this.customClass = model.customClass;
        }
    }
    SidenavItem.prototype.hasSubItems = function () {
        if (this.subItems) {
            return this.subItems.length > 0;
        }
        return false;
    };
    SidenavItem.prototype.hasParent = function () {
        return !!this.parent;
    };
    SidenavItem.prototype.mapSubItems = function (list) {
        if (list) {
            list.forEach(function (item, index) {
                list[index] = new SidenavItem(item);
            });
            return list;
        }
    };
    SidenavItem.prototype.isRouteString = function () {
        return this.route instanceof String || typeof this.route === 'string';
    };
    return SidenavItem;
}());

//# sourceMappingURL=sidenav-item.model.js.map

/***/ }),

/***/ "../../../../../src/app/core/sidenav/sidenav.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sidenav-container\" fxLayout=\"column\">\r\n\r\n  <md-toolbar color=\"primary\" class=\"sidenav-toolbar mat-elevation-z2\">\r\n    <div fxLayout=\"row\" style=\"width: 100%;\">\r\n      <span style=\"width: 22px; text-align: center; margin-left: -3px;\" fxFlexAlign=\"center\"><img src=\"assets/img/icon.png\" style=\"width: 25px; vertical-align: text-top;\"></span>\r\n      <img style=\"height: 35px; margin-left: 24px; margin-bottom: -5px;\" src=\"assets/img/logo.png\" fxFlexAlign=\"center\" class=\"fade-in-on-icon-sidenav\">\r\n      <span fxFlex><!-- fill space --></span>\r\n      <div fxHide=\"true\" fxHide.gt-sm=\"false\" fxFlexAlign=\"center\">\r\n        <button md-icon-button (click)=\"toggleIconSidenav()\">\r\n          <md-icon class=\"icon-sidenav-toggle fade-in-on-icon-sidenav\" [class.rotate]=\"isIconSidenav()\">chevron_left</md-icon>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </md-toolbar>\r\n\r\n  <div class=\"sidenav-scrollbar-container\" fxLayout=\"column\">\r\n      <md-nav-list [perfect-scrollbar] fxLayout=\"column\" class=\"sidenav-list sidenav-toplevel\">\r\n        <ms-sidenav-item *ngFor=\"let item of items\" [item]=\"item\"></ms-sidenav-item>\r\n      </md-nav-list>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/core/sidenav/sidenav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "md-toolbar.mat-toolbar.sidenav-toolbar {\n  background: #272B35;\n  padding: 0 14px 0 24px;\n  z-index: 3; }\n\n.sidenav-container, .sidenav-scrollbar-container {\n  height: 100%; }\n\n.cdk-focus-trap-content, md-sidenav {\n  overflow-y: hidden !important;\n  overflow-x: hidden; }\n\n.icon-sidenav-toggle {\n  color: #A7A9AE;\n  transition: -webkit-transform .25s;\n  transition: transform .25s;\n  transition: transform .25s, -webkit-transform .25s; }\n  .icon-sidenav-toggle.rotate {\n    -webkit-transform: rotate(-180deg);\n            transform: rotate(-180deg); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/sidenav/sidenav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidenav_service__ = __webpack_require__("../../../../../src/app/core/sidenav/sidenav.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__breadcrumb_breadcrumb_service__ = __webpack_require__("../../../../../src/app/core/breadcrumb/breadcrumb.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidenavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SidenavComponent = (function () {
    function SidenavComponent(sidenavService, router, breadcrumbService, snackBar) {
        this.sidenavService = sidenavService;
        this.router = router;
        this.breadcrumbService = breadcrumbService;
        this.snackBar = snackBar;
    }
    SidenavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._itemsSubscription = this.sidenavService.items$
            .subscribe(function (items) {
            _this.items = _this.sortRecursive(items, 'position');
        });
        this._routerEventsSubscription = this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* NavigationEnd */]) {
                _this.sidenavService.nextCurrentlyOpenByRoute(event.url);
                setTimeout(function () {
                    window.dispatchEvent(new Event('resize'));
                }, 400);
            }
        });
        this.breadcrumbService.addFriendlyNameForRoute('/', "Dashboard");
        this.breadcrumbService.addFriendlyNameForRoute('/apps', "Apps");
        this.breadcrumbService.addFriendlyNameForRoute('/apps/inbox', "Inbox");
        this.breadcrumbService.addFriendlyNameForRoute('/apps/calendar', "Calendar");
        this.breadcrumbService.addFriendlyNameForRoute('/apps/chat', "Chat");
        this.breadcrumbService.addFriendlyNameForRoute('/components', "Components");
        this.breadcrumbService.addFriendlyNameForRoute('/components/autocomplete', "Autocomplete");
        this.breadcrumbService.addFriendlyNameForRoute('/components/buttons', "Buttons");
        this.breadcrumbService.addFriendlyNameForRoute('/components/cards', "Cards");
        this.breadcrumbService.addFriendlyNameForRoute('/components/dialogs', "Dialogs");
        this.breadcrumbService.addFriendlyNameForRoute('/components/grid-list', "Grid List");
        this.breadcrumbService.addFriendlyNameForRoute('/components/lists', "Lists");
        this.breadcrumbService.addFriendlyNameForRoute('/components/menu', "Menu");
        this.breadcrumbService.addFriendlyNameForRoute('/components/slider', "Slider");
        this.breadcrumbService.addFriendlyNameForRoute('/components/snack-bar', "Snack-Bar");
        this.breadcrumbService.addFriendlyNameForRoute('/components/tooltips', "Tooltips");
        this.breadcrumbService.addFriendlyNameForRoute('/forms', "Forms");
        this.breadcrumbService.addFriendlyNameForRoute('/forms/form-elements', "Form Elements");
        this.breadcrumbService.addFriendlyNameForRoute('/forms/form-wizard', "Form Wizard");
        this.breadcrumbService.addFriendlyNameForRoute('/tables', "Tables");
        this.breadcrumbService.addFriendlyNameForRoute('/tables/simple-table', "Simple Table");
        this.breadcrumbService.addFriendlyNameForRoute('/tables/fixed-header-table', "Fixed Header Table");
        this.breadcrumbService.addFriendlyNameForRoute('/maps', "Maps");
        this.breadcrumbService.addFriendlyNameForRoute('/maps/google-maps', "Google Maps");
        this.breadcrumbService.addFriendlyNameForRoute('/icons', "Material Icons");
        this.breadcrumbService.addFriendlyNameForRoute('/dashboard-v1', "Dashboard v1");
        this.breadcrumbService.addFriendlyNameForRoute('/drag-and-drop', "Drag & Drop");
        this.breadcrumbService.addFriendlyNameForRoute('/editor', "WYSISYG Editor");
        this.breadcrumbService.addFriendlyNameForRoute('/dynamic-menu', "Dynamic Menu");
        this.breadcrumbService.addFriendlyNameForRoute('/level1', "Level 1");
        this.breadcrumbService.addFriendlyNameForRoute('/level1/level2', "Level 2");
        this.breadcrumbService.addFriendlyNameForRoute('/level1/level2/level3', "Level 3");
        this.breadcrumbService.addFriendlyNameForRoute('/level1/level2/level3/level4', "Level 4");
        this.breadcrumbService.addFriendlyNameForRoute('/level1/level2/level3/level4/level5', "Level 5");
    };
    SidenavComponent.prototype.toggleIconSidenav = function () {
        setTimeout(function () {
            window.dispatchEvent(new Event('resize'));
        }, 300);
        this.sidenavService.isIconSidenav = !this.sidenavService.isIconSidenav;
        var snackBarConfig = {
            duration: 10000
        };
        if (this.sidenavService.isIconSidenav) {
            this.snackBar.open('You activated Icon-Sidenav, move your mouse to the content and see what happens!', '', snackBarConfig);
        }
    };
    SidenavComponent.prototype.isIconSidenav = function () {
        return this.sidenavService.isIconSidenav;
    };
    SidenavComponent.prototype.sortRecursive = function (array, propertyName) {
        var that = this;
        array.forEach(function (item) {
            var keys = __WEBPACK_IMPORTED_MODULE_2_lodash__["keys"](item);
            keys.forEach(function (key) {
                if (__WEBPACK_IMPORTED_MODULE_2_lodash__["isArray"](item[key])) {
                    item[key] = that.sortRecursive(item[key], propertyName);
                }
            });
        });
        return __WEBPACK_IMPORTED_MODULE_2_lodash__["sortBy"](array, propertyName);
    };
    ;
    SidenavComponent.prototype.ngOnDestroy = function () {
        this._itemsSubscription.unsubscribe();
        this._routerEventsSubscription.unsubscribe();
    };
    return SidenavComponent;
}());
SidenavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-sidenav',
        template: __webpack_require__("../../../../../src/app/core/sidenav/sidenav.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/sidenav/sidenav.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__sidenav_service__["a" /* SidenavService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__sidenav_service__["a" /* SidenavService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__breadcrumb_breadcrumb_service__["a" /* BreadcrumbService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__breadcrumb_breadcrumb_service__["a" /* BreadcrumbService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MdSnackBar */]) === "function" && _d || Object])
], SidenavComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=sidenav.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/sidenav/sidenav.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidenav_item_sidenav_item_model__ = __webpack_require__("../../../../../src/app/core/sidenav/sidenav-item/sidenav-item.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidenavService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SidenavService = (function () {
    function SidenavService(snackbar) {
        this._itemsSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"]([]);
        this._items = [];
        this.items$ = this._itemsSubject.asObservable();
        this._currentlyOpenSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"]([]);
        this._currentlyOpen = [];
        this.currentlyOpen$ = this._currentlyOpenSubject.asObservable();
        var menu = this;
        var dashboard = menu.addItem('Dashboard', 'dashboard', '/', 1);
        menu.addItem('Inbox', 'mail', '/apps/inbox', 1, '22', '#7986CC');
        menu.addItem('Chat', 'chat', '/apps/chat', 2, '14', '#E15C74');
        menu.addItem('Calendar', 'date_range', '/apps/calendar', 3);
        var components = menu.addItem('Components', 'layers', null, 3);
        menu.addSubItem(components, 'Autocomplete', '/components/autocomplete', 1);
        menu.addSubItem(components, 'Buttons', '/components/buttons', 2);
        menu.addSubItem(components, 'Cards', '/components/cards', 3);
        menu.addSubItem(components, 'Dialogs', '/components/dialogs', 4);
        menu.addSubItem(components, 'Grid List', '/components/grid-list', 5);
        menu.addSubItem(components, 'Lists', '/components/lists', 6);
        menu.addSubItem(components, 'Menu', '/components/menu', 7);
        menu.addSubItem(components, 'Slider', '/components/slider', 8);
        menu.addSubItem(components, 'Snack-Bar', '/components/snack-bar', 9);
        menu.addSubItem(components, 'Tooltips', '/components/tooltips', 10);
        var forms = menu.addItem('Forms', 'insert_comment', null, 4);
        menu.addSubItem(forms, 'Form Elements', '/forms/form-elements', 1);
        menu.addSubItem(forms, 'Form Wizard', '/forms/form-wizard', 1);
        var tables = menu.addItem('Tables', 'format_line_spacing', null, 5);
        menu.addSubItem(tables, 'Simple Table', '/tables/simple-table', 1);
        menu.addSubItem(tables, 'Fixed Header Table', '/tables/fixed-header-table', 2);
        var maps = menu.addItem('Maps', 'map', null, 6, '3', '#4CAF50');
        menu.addSubItem(maps, 'Google Maps', '/maps/google-maps', 1);
        var icons = menu.addItem('Material Icons', 'grade', '/icons', 7);
        var customPages = menu.addItem('Custom Pages', 'web', null, 8);
        menu.addSubItem(customPages, 'Login Page', '/login', 1);
        menu.addSubItem(customPages, 'Register Page', '/register', 2);
        menu.addSubItem(customPages, 'Forgot Password', '/forgot-password', 3);
        menu.addSubItem(customPages, 'Dashboard v1', '/dashboard-v1', 4);
        var dragAndDrop = menu.addItem('Drag & Drop', 'mouse', '/drag-and-drop', 9);
        var editor = menu.addItem('WYSIWYG Editor', 'format_shapes', '/editor', 10, 'NEW', '#3F51B5');
        var multiLevel = menu.addItem('Multi-Level Menu', 'menu', null, 11);
        var level1 = menu.addSubItem(multiLevel, 'Level 1', '/level1', 1);
        var level2 = menu.addSubItem(level1, 'Level 2', '/level1/level2', 2);
        var level3 = menu.addSubItem(level2, 'Level 3', '/level1/level2/level3', 3);
        var level4 = menu.addSubItem(level3, 'Level 4', '/level1/level2/level3/level4', 4);
        var level5 = menu.addSubItem(level4, 'Level 5', '/level1/level2/level3/level4/level5', 5);
        var dynamicMenuFunctionDemo = function () {
            var dynamicFunction = function () {
                var snackbarRef = snackbar.open('This menu item got added dynamically!', 'Remove item', {
                    duration: 5000
                });
                snackbarRef.onAction().subscribe(function () {
                    menu.removeItem(dynamicMenu);
                });
            };
            var dynamicMenu = menu.addItem('Dynamic Menu Item', 'extension', dynamicFunction, 12);
        };
        var addMenu = menu.addItem('Add Menu Item', 'add', dynamicMenuFunctionDemo, 99, null, null, 'add-dynamic-menu');
    }
    SidenavService.prototype.addItem = function (name, icon, route, position, badge, badgeColor, customClass) {
        var item = new __WEBPACK_IMPORTED_MODULE_1__sidenav_item_sidenav_item_model__["a" /* SidenavItem */]({
            name: name,
            icon: icon,
            route: route,
            subItems: [],
            position: position || 99,
            badge: badge || null,
            badgeColor: badgeColor || null,
            customClass: customClass || null
        });
        this._items.push(item);
        this._itemsSubject.next(this._items);
        return item;
    };
    SidenavService.prototype.addSubItem = function (parent, name, route, position) {
        var item = new __WEBPACK_IMPORTED_MODULE_1__sidenav_item_sidenav_item_model__["a" /* SidenavItem */]({
            name: name,
            route: route,
            parent: parent,
            subItems: [],
            position: position || 99
        });
        parent.subItems.push(item);
        this._itemsSubject.next(this._items);
        return item;
    };
    SidenavService.prototype.removeItem = function (item) {
        var index = this._items.indexOf(item);
        if (index > -1) {
            this._items.splice(index, 1);
        }
        this._itemsSubject.next(this._items);
    };
    SidenavService.prototype.isOpen = function (item) {
        return (this._currentlyOpen.indexOf(item) != -1);
    };
    SidenavService.prototype.toggleCurrentlyOpen = function (item) {
        var currentlyOpen = this._currentlyOpen;
        if (this.isOpen(item)) {
            if (currentlyOpen.length > 1) {
                currentlyOpen.length = this._currentlyOpen.indexOf(item);
            }
            else {
                currentlyOpen = [];
            }
        }
        else {
            currentlyOpen = this.getAllParents(item);
        }
        this._currentlyOpen = currentlyOpen;
        this._currentlyOpenSubject.next(currentlyOpen);
    };
    SidenavService.prototype.getAllParents = function (item, currentlyOpen) {
        if (currentlyOpen === void 0) { currentlyOpen = []; }
        currentlyOpen.unshift(item);
        if (item.hasParent()) {
            return this.getAllParents(item.parent, currentlyOpen);
        }
        else {
            return currentlyOpen;
        }
    };
    SidenavService.prototype.nextCurrentlyOpen = function (currentlyOpen) {
        this._currentlyOpen = currentlyOpen;
        this._currentlyOpenSubject.next(currentlyOpen);
    };
    SidenavService.prototype.nextCurrentlyOpenByRoute = function (route) {
        var currentlyOpen = [];
        var item = this.findByRouteRecursive(route, this._items);
        if (item && item.hasParent()) {
            currentlyOpen = this.getAllParents(item);
        }
        else if (item) {
            currentlyOpen = [item];
        }
        this.nextCurrentlyOpen(currentlyOpen);
    };
    SidenavService.prototype.findByRouteRecursive = function (route, collection) {
        var _this = this;
        var result = __WEBPACK_IMPORTED_MODULE_3_lodash__["find"](collection, { 'route': route });
        if (!result) {
            __WEBPACK_IMPORTED_MODULE_3_lodash__["each"](collection, function (item) {
                if (item.hasSubItems()) {
                    var found = _this.findByRouteRecursive(route, item.subItems);
                    if (found) {
                        result = found;
                        return false;
                    }
                }
            });
        }
        return result;
    };
    Object.defineProperty(SidenavService.prototype, "currentlyOpen", {
        get: function () {
            return this._currentlyOpen;
        },
        enumerable: true,
        configurable: true
    });
    return SidenavService;
}());
SidenavService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MdSnackBar */]) === "function" && _a || Object])
], SidenavService);

var _a;
//# sourceMappingURL=sidenav.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/toolbar/favorites/favorites.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"favorites-container\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n  <div [sortablejs]=\"currentFavorites\" [sortablejsOptions]=\"sortableOptions\" fxLayout=\"row\">\r\n    <!-- remove mdTooltip from button to enable drag & drop -->\r\n    <button *ngFor=\"let favorite of currentFavorites\" class=\"favorite\" type=\"button\" md-icon-button [routerLink]=\"[favorite.route]\"\r\n            [mdTooltip]=\"favorite.name\" mdTooltipPosition=\"below\">\r\n      <md-icon *ngIf=\"favorite.icon\">{{ favorite.icon }}</md-icon>\r\n      <span class=\"letter-icon\" *ngIf=\"!favorite.icon\">{{ favorite.name.charAt(0).toUpperCase() }}</span>\r\n    </button>\r\n  </div>\r\n  <button class=\"add-favorite\" type=\"button\" md-icon-button\r\n          mdTooltip=\"Add/Remove favorites\" mdTooltipPosition=\"below\"\r\n          [mdMenuTriggerFor]=\"favoriteMenu\" (onMenuClose)=\"clearSearchInput()\">\r\n    <md-icon>star</md-icon>\r\n  </button>\r\n</div>\r\n\r\n<md-menu xPosition=after yPosition=\"below\" [overlapTrigger]=\"false\" #favoriteMenu=\"mdMenu\">\r\n  <div class=\"favorite-menu\" (click)=\"$event.stopPropagation()\">\r\n    <div class=\"favorite-search\" fxLayout=\"row\">\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n        <md-icon>search</md-icon>\r\n      </div>\r\n      <input class=\"favorite-search-input\" type=\"search\" placeholder=\"Search...\" [(ngModel)]=\"searchValue\">\r\n    </div>\r\n    <md-divider></md-divider>\r\n    <div class=\"favorite-results\" [perfect-scrollbar]>\r\n      <button md-menu-item fxLayout=\"row\" fxLayoutAlign=\"start center\" *ngFor=\"let item of displayingItems\" (click)=\"toggleFavorite(item)\">\r\n        <md-icon>{{ item.icon }}</md-icon>\r\n        <span>{{ item.name }}</span>\r\n        <span fxFlex></span>\r\n        <md-icon *ngIf=\"isFavorite(item)\">star</md-icon>\r\n        <md-icon *ngIf=\"!isFavorite(item)\">star_border</md-icon>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</md-menu>\r\n"

/***/ }),

/***/ "../../../../../src/app/core/toolbar/favorites/favorites.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  height: 100%;\n  border-right: 1px solid rgba(0, 0, 0, 0.12);\n  padding-right: 14px; }\n\n.favorites-container {\n  height: 100%; }\n  .favorites-container .add-favorite {\n    color: #FFB300; }\n  .favorites-container .favorite {\n    color: rgba(0, 0, 0, 0.54);\n    margin: 0 2px; }\n    .favorites-container .favorite md-icon {\n      height: 22px;\n      width: 22px;\n      line-height: 22px;\n      font-size: 22px; }\n    .favorites-container .favorite .letter-icon {\n      font-size: 20px; }\n    .favorites-container .favorite:first-child {\n      margin: 0 2px 0 0; }\n\n.favorite-menu .favorite-search {\n  padding: 12px 16px 20px; }\n  .favorite-menu .favorite-search md-icon {\n    color: rgba(0, 0, 0, 0.54); }\n  .favorite-menu .favorite-search .favorite-search-input {\n    border: 0;\n    margin-left: 12px; }\n    .favorite-menu .favorite-search .favorite-search-input:focus {\n      outline: none; }\n\n.favorite-menu .favorite-results {\n  margin-top: 8px;\n  max-height: 265px;\n  overflow-y: hidden; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/toolbar/favorites/favorites.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidenav_sidenav_service__ = __webpack_require__("../../../../../src/app/core/sidenav/sidenav.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FavoritesComponent = (function () {
    function FavoritesComponent(sidenavService) {
        this.sidenavService = sidenavService;
        this.sidenavItems = [];
        this.currentFavorites = [];
        this._displayingItems = [];
        this.sortableOptions = {
            animation: 200
        };
    }
    Object.defineProperty(FavoritesComponent.prototype, "displayingItems", {
        get: function () {
            var _this = this;
            if (this.searchValue) {
                return this.sidenavItems.filter(function (item) {
                    return item.name.toUpperCase().includes(_this.searchValue.toUpperCase());
                });
            }
            else {
                return this.currentFavorites;
            }
        },
        enumerable: true,
        configurable: true
    });
    FavoritesComponent.prototype.ngOnInit = function () {
        var _this = this;
        var addedDemoShortcuts = false;
        this._sidenavItemsSubscriptions = this.sidenavService.items$
            .subscribe(function (items) {
            items.forEach(function (item) {
                _this.merge(_this.sidenavItems, item);
                // Used for default favorites - implement your own favorites-saving technique here
                if (!addedDemoShortcuts) {
                    if (item.name === 'Chat' || item.name === 'WYSIWYG Editor' || item.name === 'Inbox' || item.name === 'Drag & Drop' || item.name === 'Calendar') {
                        _this.currentFavorites.push(item);
                    }
                }
            });
            addedDemoShortcuts = true;
        });
    };
    FavoritesComponent.prototype.merge = function (collector, item) {
        var _this = this;
        if (item.subItems && item.subItems.length > 0) {
            item.subItems.forEach(function (subItem) {
                _this.merge(collector, subItem);
            });
        }
        collector.push(item);
    };
    FavoritesComponent.prototype.isFavorite = function (item) {
        return (this.currentFavorites.indexOf(item) > -1);
    };
    FavoritesComponent.prototype.toggleFavorite = function (item) {
        var index = this.currentFavorites.indexOf(item);
        if (index > -1) {
            this.currentFavorites.splice(index, 1);
        }
        else {
            this.currentFavorites.push(item);
        }
    };
    FavoritesComponent.prototype.clearSearchInput = function () {
        this.searchValue = '';
    };
    return FavoritesComponent;
}());
FavoritesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-favorites',
        template: __webpack_require__("../../../../../src/app/core/toolbar/favorites/favorites.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/toolbar/favorites/favorites.component.scss")],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__sidenav_sidenav_service__["a" /* SidenavService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__sidenav_sidenav_service__["a" /* SidenavService */]) === "function" && _a || Object])
], FavoritesComponent);

var _a;
//# sourceMappingURL=favorites.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/toolbar/toolbar.component.html":
/***/ (function(module, exports) {

module.exports = "<md-toolbar class=\"main-toolbar mat-elevation-z2\">\r\n  <div fxHide=\"false\" fxHide.gt-sm>\r\n    <button (click)=\"sidenav.open()\" md-icon-button>\r\n      <md-icon>menu</md-icon>\r\n    </button>\r\n  </div>\r\n\r\n  <ms-favorites *ngIf=\"showFavorites\" fxHide=\"true\" fxHide.gt-sm=\"false\"></ms-favorites>\r\n\r\n  <ms-breadcrumbs *ngIf=\"showBreadcrumbs\" fxHide=\"true\" fxHide.gt-sm=\"false\"></ms-breadcrumbs>\r\n\r\n  <span fxFlex></span>\r\n\r\n  <button fxHide=\"true\" fxHide.gt-sm=\"false\" md-button class=\"fullscreen-toggle\" (click)=\"toggleFullscreen()\">\r\n    <md-icon *ngIf=\"!isFullscreen\">fullscreen</md-icon>\r\n    <md-icon *ngIf=\"isFullscreen\">fullscreen_exit</md-icon>\r\n  </button>\r\n\r\n  <ms-search></ms-search>\r\n\r\n  <div class=\"user-button-container\" #userButton>\r\n    <button class=\"user-button\" md-button [mdMenuTriggerFor]=\"menu\">\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n        <img src=\"assets/img/avatars/noavatar.png\" class=\"avatar-flex\">\r\n        <span class=\"name\" fxHide=\"true\" fxHide.gt-sm=\"false\">David Smith</span>\r\n        <md-icon fxHide=\"true\" fxHide.gt-sm=\"false\">keyboard_arrow_down</md-icon>\r\n      </div>\r\n    </button>\r\n  </div>\r\n\r\n  <button md-button class=\"quickpanel-toggle\" (click)=\"quickpanel.open()\">\r\n    <md-icon>format_align_right</md-icon>\r\n  </button>\r\n</md-toolbar>\r\n\r\n\r\n<md-menu class=\"user-menu\" yPosition=\"below\" [overlapTrigger]=\"false\" #menu=\"mdMenu\">\r\n  <div class=\"user-menu-inner\" [style.min-width]=\"userButtonWidth\">\r\n    <button md-menu-item>\r\n      <md-icon>account_circle</md-icon>\r\n      <span>Profile</span>\r\n    </button>\r\n    <button md-menu-item>\r\n      <md-icon>settings</md-icon>\r\n      <span>Settings</span>\r\n    </button>\r\n    <button md-menu-item>\r\n      <md-icon>help</md-icon>\r\n      <span>Help</span>\r\n    </button>\r\n    <md-divider></md-divider>\r\n    <button [routerLink]=\"['/login']\" md-menu-item>\r\n      <md-icon>exit_to_app</md-icon>\r\n      <span>Logout</span>\r\n    </button>\r\n  </div>\r\n</md-menu>\r\n"

/***/ }),

/***/ "../../../../../src/app/core/toolbar/toolbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ms-favorites + ms-breadcrumbs {\n  padding-left: 6px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/toolbar/toolbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_screenfull__ = __webpack_require__("../../../../screenfull/dist/screenfull.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_screenfull___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_screenfull__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToolbarComponent = (function () {
    function ToolbarComponent() {
        this.isFullscreen = false;
        this.showBreadcrumbs = true;
        this.showFavorites = true;
    }
    Object.defineProperty(ToolbarComponent.prototype, "userButtonWidth", {
        get: function () {
            return this._userButtonWidth + "px";
        },
        enumerable: true,
        configurable: true
    });
    ToolbarComponent.prototype.ngOnInit = function () { };
    ToolbarComponent.prototype.ngAfterViewInit = function () {
        this._userButtonWidth = this.userButton.first.nativeElement.clientWidth;
    };
    ToolbarComponent.prototype.toggleFullscreen = function () {
        if (__WEBPACK_IMPORTED_MODULE_1_screenfull__["enabled"]) {
            __WEBPACK_IMPORTED_MODULE_1_screenfull__["toggle"]();
            this.isFullscreen = !this.isFullscreen;
        }
    };
    return ToolbarComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('quickpanel'),
    __metadata("design:type", Object)
], ToolbarComponent.prototype, "quickpanel", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('sidenav'),
    __metadata("design:type", Object)
], ToolbarComponent.prototype, "sidenav", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])('userButton'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"]) === "function" && _a || Object)
], ToolbarComponent.prototype, "userButton", void 0);
ToolbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-toolbar',
        template: __webpack_require__("../../../../../src/app/core/toolbar/toolbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/toolbar/toolbar.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ToolbarComponent);

var _a;
//# sourceMappingURL=toolbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/widgets/activity/activity.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"activity-card mat-elevation-z2\">\r\n  <div class=\"title-container\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n    <div fxLayout=\"column\">\r\n      <span class=\"title\">{{ title }}</span>\r\n      <span class=\"extra\">{{ subTitle }}</span>\r\n    </div>\r\n    <span fxFlex></span>\r\n    <button md-icon-button (click)=\"reload()\">\r\n      <md-icon>refresh</md-icon>\r\n    </button>\r\n    <button md-icon-button [mdMenuTriggerFor]=\"options\">\r\n      <md-icon>more_vert</md-icon>\r\n    </button>\r\n  </div>\r\n  <div class=\"content\">\r\n    <md-nav-list>\r\n      <a href=\"javascript:\" md-list-item *ngFor=\"let feed of feeds\">\r\n        <img md-list-avatar [src]=\"feed.image\" alt=\"...\">\r\n        <h3 md-line> {{ feed.name }} </h3>\r\n        <p md-line>\r\n          <span class=\"title\"> {{ feed.subject }} </span>\r\n          <span class=\"extra\"> -- {{ feed.content }} </span>\r\n        </p>\r\n      </a>\r\n    </md-nav-list>\r\n  </div>\r\n  <ms-loading-overlay [isLoading]=\"isLoading\"></ms-loading-overlay>\r\n</div>\r\n\r\n<md-menu #options=\"mdMenu\">\r\n  <button md-menu-item>\r\n    <md-icon> settings </md-icon>\r\n    <span> Settings </span>\r\n  </button>\r\n  <button md-menu-item disabled>\r\n    <md-icon> more </md-icon>\r\n    <span> More Info </span>\r\n  </button>\r\n  <button md-menu-item>\r\n    <md-icon> remove_circle </md-icon>\r\n    <span> Remove Widget </span>\r\n  </button>\r\n</md-menu>\r\n"

/***/ }),

/***/ "../../../../../src/app/core/widgets/activity/activity.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ActivityComponent = (function () {
    function ActivityComponent() {
        this.title = 'Recent Activities';
        this.subTitle = 'Your daily news feed';
        this.isLoading = false;
    }
    ActivityComponent.prototype.ngOnInit = function () {
    };
    ActivityComponent.prototype.reload = function () {
        var _this = this;
        this.isLoading = true;
        setTimeout(function () {
            _this.isLoading = false;
        }, 3000);
    };
    return ActivityComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('feeds'),
    __metadata("design:type", Array)
], ActivityComponent.prototype, "feeds", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('title'),
    __metadata("design:type", String)
], ActivityComponent.prototype, "title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('subTitle'),
    __metadata("design:type", String)
], ActivityComponent.prototype, "subTitle", void 0);
ActivityComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-activity',
        template: __webpack_require__("../../../../../src/app/core/widgets/activity/activity.component.html")
    }),
    __metadata("design:paramtypes", [])
], ActivityComponent);

//# sourceMappingURL=activity.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/widgets/bar-chart/bar-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"chart-widget mat-elevation-z2\" [style.background]=\"bgColor\">\r\n  <div class=\"title-container\" [style.color]=\"textColor\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n    <div fxLayout=\"column\">\r\n      <span class=\"title\">{{ title }}</span>\r\n      <span class=\"extra\">\r\n        <md-icon class=\"arrow\" *ngIf=\"gain > 0\">\r\n          arrow_upward\r\n        </md-icon>\r\n        <md-icon class=\"arrow\" *ngIf=\"gain < 0\">\r\n          arrow_downward\r\n        </md-icon>\r\n        <span>{{ gain }}{{ comparedTo }}</span>\r\n      </span>\r\n    </div>\r\n    <span fxFlex></span>\r\n    <button md-icon-button (click)=\"reload()\">\r\n      <md-icon>refresh</md-icon>\r\n    </button>\r\n    <button md-icon-button [mdMenuTriggerFor]=\"options\">\r\n      <md-icon>more_vert</md-icon>\r\n    </button>\r\n  </div>\r\n  <div class=\"chart-container\">\r\n    <nvd3 class=\"thin-discrete-bar\" [options]=\"chartOptions\" [data]=\"data\"></nvd3>\r\n  </div>\r\n  <ms-loading-overlay [isLoading]=\"isLoading\"></ms-loading-overlay>\r\n</div>\r\n\r\n<md-menu #options=\"mdMenu\">\r\n  <button md-menu-item>\r\n    <md-icon> settings </md-icon>\r\n    <span> Settings </span>\r\n  </button>\r\n  <button md-menu-item disabled>\r\n    <md-icon> more </md-icon>\r\n    <span> More Info </span>\r\n  </button>\r\n  <button md-menu-item>\r\n    <md-icon> remove_circle </md-icon>\r\n    <span> Remove Widget </span>\r\n  </button>\r\n</md-menu>\r\n"

/***/ }),

/***/ "../../../../../src/app/core/widgets/bar-chart/bar-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__charts_nvD3_nvD3_service__ = __webpack_require__("../../../../../src/app/core/charts/nvD3/nvD3.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var BarChartComponent = (function () {
    function BarChartComponent(d3ChartService) {
        this.isLoading = false;
        this.d3 = d3ChartService.getD3();
    }
    BarChartComponent.prototype.ngOnInit = function () {
        var d3 = this.d3;
        if (!this.chartOptions) {
            this.chartOptions = {
                chart: {
                    type: 'discreteBarChart',
                    height: 120,
                    margin: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    },
                    x: function (d) { return d.date; },
                    y: function (d) { return d.value; },
                    showXAxis: false,
                    showYAxis: false,
                    xAxis: {
                        ticks: d3.time.days,
                        axisLabel: '',
                        tickFormat: function (d) {
                            return d3.time.format('%a %d.%m.%Y')(new Date(d));
                        }
                    },
                    showLegend: false,
                    useInteractiveGuideline: true,
                    color: [this.chartColor],
                    rectClass: 'bar-rect'
                },
            };
        }
    };
    BarChartComponent.prototype.reload = function () {
        var _this = this;
        this.isLoading = true;
        setTimeout(function () {
            _this.isLoading = false;
        }, 3000);
    };
    return BarChartComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('data'),
    __metadata("design:type", Object)
], BarChartComponent.prototype, "data", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('chartOptions'),
    __metadata("design:type", Object)
], BarChartComponent.prototype, "chartOptions", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('title'),
    __metadata("design:type", String)
], BarChartComponent.prototype, "title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('bgColor'),
    __metadata("design:type", String)
], BarChartComponent.prototype, "bgColor", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('textColor'),
    __metadata("design:type", String)
], BarChartComponent.prototype, "textColor", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('chartColor'),
    __metadata("design:type", String)
], BarChartComponent.prototype, "chartColor", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('gain'),
    __metadata("design:type", Object)
], BarChartComponent.prototype, "gain", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('comparedTo'),
    __metadata("design:type", String)
], BarChartComponent.prototype, "comparedTo", void 0);
BarChartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-bar-chart',
        template: __webpack_require__("../../../../../src/app/core/widgets/bar-chart/bar-chart.component.html"),
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__charts_nvD3_nvD3_service__["a" /* D3ChartService */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__charts_nvD3_nvD3_service__["a" /* D3ChartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__charts_nvD3_nvD3_service__["a" /* D3ChartService */]) === "function" && _a || Object])
], BarChartComponent);

var _a;
//# sourceMappingURL=bar-chart.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/widgets/google-maps-widget/google-maps-widget.component.html":
/***/ (function(module, exports) {

module.exports = "<agm-map [style.height]=\"height\" [latitude]=\"lat\" [longitude]=\"lng\" [styles]=\"styles\" [scrollwheel]=\"false\"></agm-map>\r\n"

/***/ }),

/***/ "../../../../../src/app/core/widgets/google-maps-widget/google-maps-widget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleMapsWidgetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GoogleMapsWidgetComponent = (function () {
    function GoogleMapsWidgetComponent() {
        this.height = '450px';
        this.lat = 40.730610;
        this.lng = -73.935242;
        this.styles = [
            {
                "featureType": "water",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "invert_lightness": false
                    },
                    {
                        "color": "#004963"
                    },
                    {
                        "weight": 8
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "invert_lightness": false
                    },
                    {
                        "color": "#b7ebeb"
                    },
                    {
                        "saturation": -53
                    },
                    {
                        "lightness": 2
                    }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "invert_lightness": false
                    },
                    {
                        "hue": "#767878"
                    },
                    {
                        "saturation": -93
                    },
                    {
                        "lightness": 56
                    }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#b8dbe0"
                    },
                    {
                        "saturation": -7
                    },
                    {
                        "lightness": 33
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": -1
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#d1e6d7"
                    }
                ]
            },
            {
                "featureType": "poi.sports_complex",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 61
                    }
                ]
            },
            {
                "featureType": "poi.school",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    },
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 80
                    }
                ]
            },
            {
                "featureType": "poi.place_of_worship",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.business",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "color": "#d74340"
                    },
                    {
                        "saturation": -32
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit.station.rail",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#d74340"
                    }
                ]
            },
            {
                "featureType": "transit.station.rail",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "lightness": 0
                    },
                    {
                        "gamma": 2.05
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "lightness": 100
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 78
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 40
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 54
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 28
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            }
        ];
    }
    GoogleMapsWidgetComponent.prototype.ngOnInit = function () {
    };
    return GoogleMapsWidgetComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('height'),
    __metadata("design:type", String)
], GoogleMapsWidgetComponent.prototype, "height", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('lat'),
    __metadata("design:type", Number)
], GoogleMapsWidgetComponent.prototype, "lat", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('lng'),
    __metadata("design:type", Number)
], GoogleMapsWidgetComponent.prototype, "lng", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('styles'),
    __metadata("design:type", Object)
], GoogleMapsWidgetComponent.prototype, "styles", void 0);
GoogleMapsWidgetComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-google-maps-widget',
        template: __webpack_require__("../../../../../src/app/core/widgets/google-maps-widget/google-maps-widget.component.html")
    }),
    __metadata("design:paramtypes", [])
], GoogleMapsWidgetComponent);

//# sourceMappingURL=google-maps-widget.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/widgets/line-chart/line-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"chart-widget mat-elevation-z2\" [style.background]=\"bgColor\">\r\n  <div class=\"title-container\" [style.color]=\"textColor\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n    <div fxLayout=\"column\">\r\n      <span class=\"title\">{{ title }}</span>\r\n      <span class=\"extra\">\r\n        <md-icon class=\"arrow\" *ngIf=\"gain > 0\">\r\n          arrow_upward\r\n        </md-icon>\r\n        <md-icon class=\"arrow\" *ngIf=\"gain < 0\">\r\n          arrow_downward\r\n        </md-icon>\r\n        <span>{{ gain }}{{ comparedTo }}</span>\r\n      </span>\r\n    </div>\r\n    <span fxFlex></span>\r\n    <button md-icon-button (click)=\"reload()\">\r\n      <md-icon>refresh</md-icon>\r\n    </button>\r\n    <button md-icon-button [mdMenuTriggerFor]=\"options\">\r\n      <md-icon>more_vert</md-icon>\r\n    </button>\r\n  </div>\r\n  <div class=\"chart-container\">\r\n    <nvd3 class=\"display-dots-line-chart\" [options]=\"chartOptions\" [data]=\"data\"></nvd3>\r\n  </div>\r\n  <ms-loading-overlay [isLoading]=\"isLoading\"></ms-loading-overlay>\r\n</div>\r\n\r\n<md-menu #options=\"mdMenu\">\r\n  <button md-menu-item>\r\n    <md-icon> settings </md-icon>\r\n    <span> Settings </span>\r\n  </button>\r\n  <button md-menu-item disabled>\r\n    <md-icon> more </md-icon>\r\n    <span> More Info </span>\r\n  </button>\r\n  <button md-menu-item>\r\n    <md-icon> remove_circle </md-icon>\r\n    <span> Remove Widget </span>\r\n  </button>\r\n</md-menu>\r\n"

/***/ }),

/***/ "../../../../../src/app/core/widgets/line-chart/line-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__charts_nvD3_nvD3_service__ = __webpack_require__("../../../../../src/app/core/charts/nvD3/nvD3.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__demo_data_widgetDemoData_data__ = __webpack_require__("../../../../../src/app/demo/data/widgetDemoData.data.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LineChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var LineChartComponent = (function () {
    function LineChartComponent(d3ChartService) {
        this.interpolate = false;
        this.isLoading = false;
        this.d3 = d3ChartService.getD3();
    }
    LineChartComponent.prototype.ngOnInit = function () {
        var d3 = this.d3;
        var interpolate = (this.interpolate) ? 'cardinal' : false;
        var min = d3.min(__WEBPACK_IMPORTED_MODULE_2__demo_data_widgetDemoData_data__["b" /* lineChartDemoValues */]) - 20;
        var max = d3.max(__WEBPACK_IMPORTED_MODULE_2__demo_data_widgetDemoData_data__["b" /* lineChartDemoValues */]) + 20;
        if (!this.chartOptions) {
            this.chartOptions = {
                chart: {
                    type: 'lineChart',
                    height: 120,
                    margin: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    },
                    x: function (d) { return d.date; },
                    y: function (d) { return d.value; },
                    showXAxis: false,
                    showYAxis: false,
                    xAxis: {
                        ticks: d3.time.days,
                        axisLabel: '',
                        tickFormat: function (d) {
                            return d3.time.format('%a %d.%m.%Y')(new Date(d));
                        }
                    },
                    yDomain: [min, max],
                    showLegend: false,
                    useInteractiveGuideline: true,
                    color: [this.chartColor],
                    interpolate: interpolate
                },
            };
        }
    };
    LineChartComponent.prototype.reload = function () {
        var _this = this;
        this.isLoading = true;
        setTimeout(function () {
            _this.isLoading = false;
        }, 3000);
    };
    return LineChartComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('data'),
    __metadata("design:type", Object)
], LineChartComponent.prototype, "data", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('chartOptions'),
    __metadata("design:type", Object)
], LineChartComponent.prototype, "chartOptions", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('title'),
    __metadata("design:type", String)
], LineChartComponent.prototype, "title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('bgColor'),
    __metadata("design:type", String)
], LineChartComponent.prototype, "bgColor", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('textColor'),
    __metadata("design:type", String)
], LineChartComponent.prototype, "textColor", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('chartColor'),
    __metadata("design:type", String)
], LineChartComponent.prototype, "chartColor", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('interpolate'),
    __metadata("design:type", Boolean)
], LineChartComponent.prototype, "interpolate", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('gain'),
    __metadata("design:type", Object)
], LineChartComponent.prototype, "gain", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('comparedTo'),
    __metadata("design:type", String)
], LineChartComponent.prototype, "comparedTo", void 0);
LineChartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-line-chart',
        template: __webpack_require__("../../../../../src/app/core/widgets/line-chart/line-chart.component.html"),
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__charts_nvD3_nvD3_service__["a" /* D3ChartService */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__charts_nvD3_nvD3_service__["a" /* D3ChartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__charts_nvD3_nvD3_service__["a" /* D3ChartService */]) === "function" && _a || Object])
], LineChartComponent);

var _a;
//# sourceMappingURL=line-chart.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/widgets/pie-chart/pie-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"piechart-widget chart-widget mat-elevation-z2\" [style.background]=\"bgColor\">\r\n  <div class=\"title-container\" [style.color]=\"textColor\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n    <div fxLayout=\"column\">\r\n      <span class=\"title\">{{ title }}</span>\r\n      <span class=\"extra\">{{ subTitle }}</span>\r\n    </div>\r\n    <span fxFlex></span>\r\n    <button md-icon-button (click)=\"reload()\">\r\n      <md-icon>refresh</md-icon>\r\n    </button>\r\n    <button md-icon-button [mdMenuTriggerFor]=\"options\">\r\n      <md-icon>more_vert</md-icon>\r\n    </button>\r\n  </div>\r\n  <div class=\"chart-container\">\r\n    <nvd3 class=\"intense-colors-pie-chart white-labels-pie-chart\" [options]=\"chartOptions\" [data]=\"data\"></nvd3>\r\n  </div>\r\n  <div class=\"chart-footer\" fxLayout=\"row\">\r\n    <div class=\"border-right text-center\" fxFlex fxLayout=\"column\">\r\n      <span class=\"title\">1096</span>\r\n      <span class=\"extra\">Total Sales</span>\r\n    </div>\r\n    <div class=\"text-center\" fxFlex fxLayout=\"column\">\r\n      <span class=\"title\">598</span>\r\n      <span class=\"extra\">Sales from these Categories</span>\r\n    </div>\r\n  </div>\r\n  <ms-loading-overlay [isLoading]=\"isLoading\"></ms-loading-overlay>\r\n</div>\r\n\r\n<md-menu #options=\"mdMenu\">\r\n  <button md-menu-item>\r\n    <md-icon> settings </md-icon>\r\n    <span> Settings </span>\r\n  </button>\r\n  <button md-menu-item disabled>\r\n    <md-icon> more </md-icon>\r\n    <span> More Info </span>\r\n  </button>\r\n  <button md-menu-item>\r\n    <md-icon> remove_circle </md-icon>\r\n    <span> Remove Widget </span>\r\n  </button>\r\n</md-menu>\r\n"

/***/ }),

/***/ "../../../../../src/app/core/widgets/pie-chart/pie-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__charts_nvD3_nvD3_service__ = __webpack_require__("../../../../../src/app/core/charts/nvD3/nvD3.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PieChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var PieChartComponent = (function () {
    function PieChartComponent(d3ChartService) {
        this.isLoading = false;
        this.d3 = d3ChartService.getD3();
    }
    PieChartComponent.prototype.ngOnInit = function () {
        var d3 = this.d3;
        if (!this.chartOptions) {
            this.chartOptions = {
                chart: {
                    type: 'pieChart',
                    height: 400,
                    margin: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    },
                    x: function (d) { return d.label; },
                    y: function (d) { return d.value; },
                    showXAxis: false,
                    showYAxis: false,
                    showLegend: true,
                    useInteractiveGuideline: true,
                    donut: true,
                    color: ['#1E88E5', '#D81B60', '#00897B', '#3949AB', '#e53935']
                },
            };
        }
    };
    PieChartComponent.prototype.reload = function () {
        var _this = this;
        this.isLoading = true;
        setTimeout(function () {
            _this.isLoading = false;
        }, 3000);
    };
    return PieChartComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('data'),
    __metadata("design:type", Object)
], PieChartComponent.prototype, "data", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('chartOptions'),
    __metadata("design:type", Object)
], PieChartComponent.prototype, "chartOptions", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('title'),
    __metadata("design:type", String)
], PieChartComponent.prototype, "title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('subTitle'),
    __metadata("design:type", String)
], PieChartComponent.prototype, "subTitle", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('bgColor'),
    __metadata("design:type", String)
], PieChartComponent.prototype, "bgColor", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('textColor'),
    __metadata("design:type", String)
], PieChartComponent.prototype, "textColor", void 0);
PieChartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-pie-chart',
        template: __webpack_require__("../../../../../src/app/core/widgets/pie-chart/pie-chart.component.html")
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__charts_nvD3_nvD3_service__["a" /* D3ChartService */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__charts_nvD3_nvD3_service__["a" /* D3ChartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__charts_nvD3_nvD3_service__["a" /* D3ChartService */]) === "function" && _a || Object])
], PieChartComponent);

var _a;
//# sourceMappingURL=pie-chart.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/widgets/recent-sales/recent-sales.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"recent-sales mat-elevation-z2\">\r\n  <table class=\"table table-condensed table-grey-header table-bordered table-hover\">\r\n    <thead>\r\n    <tr>\r\n      <th></th>\r\n      <th>Recent Sales</th>\r\n      <th>Value</th>\r\n      <th>Time ago</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr class=\"pointer\" *ngFor=\"let sale of sales\">\r\n      <td style=\"text-align: center;\"><img class=\"middle avatar\" [src]=\"sale.image\" [alt]=\"sale.itemName\"/></td>\r\n      <td>{{ sale.itemName }}</td>\r\n      <td>{{ sale.value | currency:'EUR':true }}</td>\r\n      <td>{{ sale.timeAgo }}</td>\r\n    </tr>\r\n    </tbody>\r\n  </table>\r\n\r\n  <div class=\"chart-container\">\r\n    <nvd3 class=\"fill-bg-opacity\" [options]=\"chartOptions\" [data]=\"chartData\" ></nvd3>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/core/widgets/recent-sales/recent-sales.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".recent-sales {\n  background: white; }\n  .recent-sales table {\n    font-size: 14px; }\n    .recent-sales table thead th {\n      padding-top: 12px;\n      padding-bottom: 12px; }\n    .recent-sales table tbody {\n      color: #555; }\n  .recent-sales .chart-container {\n    margin-top: 24px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/widgets/recent-sales/recent-sales.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__charts_nvD3_nvD3_service__ = __webpack_require__("../../../../../src/app/core/charts/nvD3/nvD3.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__demo_data_widgetDemoData_data__ = __webpack_require__("../../../../../src/app/demo/data/widgetDemoData.data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecentSalesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var RecentSalesComponent = (function () {
    function RecentSalesComponent(d3ChartService) {
        this.d3 = d3ChartService.getD3();
    }
    RecentSalesComponent.prototype.ngOnInit = function () {
        var d3 = this.d3;
        var min = 0;
        var max = d3.max(__WEBPACK_IMPORTED_MODULE_2__demo_data_widgetDemoData_data__["a" /* recentCustomersDemoValues */]);
        this.chartOptions = {
            chart: {
                type: 'lineChart',
                height: 100,
                margin: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
                x: function (d) { return d.date; },
                y: function (d) { return d.value; },
                showXAxis: false,
                showYAxis: false,
                xAxis: {
                    ticks: d3.time.days,
                    axisLabel: '',
                    tickFormat: function (d) {
                        //return d3.time.format('%H:00')(new Date(d));
                        return __WEBPACK_IMPORTED_MODULE_3_moment__(new Date(d)).calendar();
                    }
                },
                yDomain: [min, max],
                showLegend: false,
                useInteractiveGuideline: true,
                color: ['#DBF6F9']
            },
        };
    };
    return RecentSalesComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('sales'),
    __metadata("design:type", Array)
], RecentSalesComponent.prototype, "sales", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('chartData'),
    __metadata("design:type", Array)
], RecentSalesComponent.prototype, "chartData", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('chartOptions'),
    __metadata("design:type", Object)
], RecentSalesComponent.prototype, "chartOptions", void 0);
RecentSalesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-recent-sales',
        template: __webpack_require__("../../../../../src/app/core/widgets/recent-sales/recent-sales.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/widgets/recent-sales/recent-sales.component.scss")]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__charts_nvD3_nvD3_service__["a" /* D3ChartService */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__charts_nvD3_nvD3_service__["a" /* D3ChartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__charts_nvD3_nvD3_service__["a" /* D3ChartService */]) === "function" && _a || Object])
], RecentSalesComponent);

var _a;
//# sourceMappingURL=recent-sales.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/widgets/traffic-sources/traffic-sources.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"traffic-sources-card chart-widget mat-elevation-z2\">\r\n  <div class=\"title-container\" [style.color]=\"textColor\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n    <div fxLayout=\"column\">\r\n      <span class=\"title\">{{ title }}</span>\r\n      <span class=\"extra\">{{ subTitle }}</span>\r\n    </div>\r\n    <span fxFlex></span>\r\n    <button md-icon-button (click)=\"reload()\">\r\n      <md-icon>refresh</md-icon>\r\n    </button>\r\n    <button md-icon-button [mdMenuTriggerFor]=\"options\">\r\n      <md-icon>more_vert</md-icon>\r\n    </button>\r\n  </div>\r\n\r\n  <div class=\"content\" fxLayout=\"column\" fxLayoutAlign=\"space-around stretch\">\r\n\r\n    <div class=\"section\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\" *ngFor=\"let data of chartData\">\r\n\r\n      <div class=\"source\" fxFlex=\"100px\" fxLayout=\"row\" fxLayoutAlign=\"center center\" [style.background-color]=\"data[0].color\">\r\n        {{ data[0].key }}\r\n      </div>\r\n\r\n      <span class=\"value\" fxFlex=\"150px\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n        {{ data[0].sum | number: '1.0-0' }}\r\n      </span>\r\n\r\n      <nvd3 fxFlex fxLayout=\"row\" fxLayoutAlign=\"center center\" [options]=\"chartOptions\" [data]=\"data\"></nvd3>\r\n\r\n    </div>\r\n\r\n  </div>\r\n  <ms-loading-overlay [isLoading]=\"isLoading\"></ms-loading-overlay>\r\n</div>\r\n\r\n<md-menu #options=\"mdMenu\">\r\n  <button md-menu-item>\r\n    <md-icon> settings </md-icon>\r\n    <span> Settings </span>\r\n  </button>\r\n  <button md-menu-item disabled>\r\n    <md-icon> more </md-icon>\r\n    <span> More Info </span>\r\n  </button>\r\n  <button md-menu-item>\r\n    <md-icon> remove_circle </md-icon>\r\n    <span> Remove Widget </span>\r\n  </button>\r\n</md-menu>\r\n"

/***/ }),

/***/ "../../../../../src/app/core/widgets/traffic-sources/traffic-sources.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__charts_nvD3_nvD3_service__ = __webpack_require__("../../../../../src/app/core/charts/nvD3/nvD3.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrafficSourcesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TrafficSourcesComponent = (function () {
    function TrafficSourcesComponent(nvD3Service) {
        this.title = 'Traffic Sources';
        this.subTitle = 'Total Visits over the last week';
        this.isLoading = false;
        this.d3 = nvD3Service.getD3();
    }
    TrafficSourcesComponent.prototype.ngOnInit = function () {
        var d3 = this.d3;
        this.chartOptions = {
            chart: {
                type: 'lineChart',
                height: 50,
                margin: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
                x: function (d) { return d.date; },
                y: function (d) { return d.value; },
                showXAxis: false,
                showYAxis: false,
                xAxis: {
                    ticks: d3.time.days,
                    axisLabel: '',
                    tickFormat: function (d) {
                        return d3.time.format('%a %d.%m.%Y')(new Date(d));
                    }
                },
                showLegend: false,
                useInteractiveGuideline: true
            },
        };
    };
    TrafficSourcesComponent.prototype.reload = function () {
        var _this = this;
        this.isLoading = true;
        setTimeout(function () {
            _this.isLoading = false;
        }, 3000);
    };
    return TrafficSourcesComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('title'),
    __metadata("design:type", String)
], TrafficSourcesComponent.prototype, "title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('subTitle'),
    __metadata("design:type", String)
], TrafficSourcesComponent.prototype, "subTitle", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('chartData'),
    __metadata("design:type", Array)
], TrafficSourcesComponent.prototype, "chartData", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('chartOptions'),
    __metadata("design:type", Object)
], TrafficSourcesComponent.prototype, "chartOptions", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('textColor'),
    __metadata("design:type", Object)
], TrafficSourcesComponent.prototype, "textColor", void 0);
TrafficSourcesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-traffic-sources',
        template: __webpack_require__("../../../../../src/app/core/widgets/traffic-sources/traffic-sources.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__charts_nvD3_nvD3_service__["a" /* D3ChartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__charts_nvD3_nvD3_service__["a" /* D3ChartService */]) === "function" && _a || Object])
], TrafficSourcesComponent);

var _a;
//# sourceMappingURL=traffic-sources.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/widgets/widgets-v1/line-chart-widget/line-chart-widget.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card class=\"widget line-chart-widget\">\r\n  <md-card-title fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n    <md-icon class=\"icon\">{{ options.icon }}</md-icon>\r\n    <span class=\"name\">{{ options.name }}</span>\r\n  </md-card-title>\r\n\r\n  <md-card-content>\r\n    <nvd3 [options]=\"chartOptions\" [data]=\"data\"></nvd3>\r\n  </md-card-content>\r\n\r\n  <div class=\"footer\">\r\n    <md-divider></md-divider>\r\n    <div class=\"extra-info\" fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"space-around stretch\" style=\"background-color: #FAFAFA\">\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n        <div style=\"width: 5px; height: 90%; background-color: #2196F3; margin-right: 10px;\"></div>\r\n        <div fxLayout=\"column\">\r\n          <span class=\"value\">${{ revenueSum | number: '1.0-2' }}</span>\r\n          <span class=\"property\">{{ data[0].key }}</span>\r\n        </div>\r\n      </div>\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n        <div style=\"width: 5px; height: 90%; background-color: #3F51B5; margin-right: 10px;\"></div>\r\n        <div fxLayout=\"column\">\r\n          <span class=\"value\">${{ taxSum | number: '1.0-2' }}</span>\r\n          <span class=\"property\">{{ data[1].key }}</span>\r\n        </div>\r\n      </div>\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n        <div style=\"width: 5px; height: 90%; background-color: #4CAF50; margin-right: 10px;\"></div>\r\n        <div fxLayout=\"column\">\r\n          <span class=\"value\">${{ shippingSum | number: '1.0-2' }}</span>\r\n          <span class=\"property\">{{ data[2].key }}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</md-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/core/widgets/widgets-v1/line-chart-widget/line-chart-widget.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".widget {\n  color: #333;\n  margin: 12px; }\n  .widget .icon {\n    vertical-align: middle;\n    color: #7A8B93; }\n  .widget .name {\n    margin-left: 5px;\n    font-size: 22px; }\n  .widget md-card-title {\n    margin-bottom: 20px; }\n  .widget .footer {\n    margin: 0 -24px -24px -24px; }\n  .widget .extra-info {\n    color: #555;\n    padding: 12px 0;\n    font-size: 20px; }\n    .widget .extra-info .value {\n      font-weight: 500; }\n    .widget .extra-info .property {\n      color: #888; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/widgets/widgets-v1/line-chart-widget/line-chart-widget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__charts_nvD3_nvD3_service__ = __webpack_require__("../../../../../src/app/core/charts/nvD3/nvD3.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LineChartWidgetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LineChartWidgetComponent = (function () {
    function LineChartWidgetComponent(nvD3Service) {
        this.d3 = nvD3Service.getD3();
    }
    LineChartWidgetComponent.prototype.ngOnInit = function () {
        this.revenueSum = this.data[0].values.reduce(function (a, b) { return a + b.value; }, 0);
        this.taxSum = this.data[1].values.reduce(function (a, b) { return a + b.value; }, 0);
        this.shippingSum = this.data[2].values.reduce(function (a, b) { return a + b.value; }, 0);
        var d3 = this.d3;
        this.chartOptions = {
            chart: {
                type: 'stackedAreaChart',
                height: 400,
                margin: {
                    top: 0,
                    right: 60,
                    bottom: 20,
                    left: 0
                },
                x: function (d) { return d.date; },
                y: function (d) { return d.value; },
                xAxis: {
                    tickFormat: function (d) {
                        return d3.time.format('%B')(new Date(d));
                    },
                    showMaxMin: false
                },
                yAxis: {
                    tickFormat: d3.format(',.2f')
                },
                rightAlignYAxis: true,
                useInteractiveGuideline: true,
                interpolate: 'cardinal'
            },
        };
    };
    return LineChartWidgetComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('data'),
    __metadata("design:type", Object)
], LineChartWidgetComponent.prototype, "data", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('options'),
    __metadata("design:type", Object)
], LineChartWidgetComponent.prototype, "options", void 0);
LineChartWidgetComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-line-chart-widget',
        template: __webpack_require__("../../../../../src/app/core/widgets/widgets-v1/line-chart-widget/line-chart-widget.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/widgets/widgets-v1/line-chart-widget/line-chart-widget.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__charts_nvD3_nvD3_service__["a" /* D3ChartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__charts_nvD3_nvD3_service__["a" /* D3ChartService */]) === "function" && _a || Object])
], LineChartWidgetComponent);

var _a;
//# sourceMappingURL=line-chart-widget.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/widgets/widgets-v1/source-overview-widget/source-overview-widget.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card class=\"widget source-overview-widget\">\r\n  <md-card-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n    <span class=\"name\">{{ options.name }}</span>\r\n    <button md-icon-button [mdMenuTriggerFor]=\"menu\">\r\n      <md-icon>more_vert</md-icon>\r\n    </button>\r\n  </md-card-title>\r\n\r\n  <md-divider></md-divider>\r\n\r\n  <md-card-content>\r\n    <div fxLayout=\"column\" fxLayoutAlign=\"space-around stretch\">\r\n\r\n      <div class=\"section\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\" *ngFor=\"let chartData of chartDataArray\">\r\n        <div fxFlex=\"100px\" fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"source\" [style.background-color]=\"chartData[0].color\">\r\n          {{ chartData[0].key }}\r\n        </div>\r\n        <span fxFlex fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"value\">\r\n          {{ chartData[0].sum | number: '1.0-0' }}\r\n        </span>\r\n        <nvd3 fxFlex fxLayout=\"row\" fxLayoutAlign=\"center center\" [options]=\"chartOptions\" [data]=\"chartData\"></nvd3>\r\n      </div>\r\n\r\n    </div>\r\n  </md-card-content>\r\n</md-card>\r\n\r\n<md-menu #menu=\"mdMenu\">\r\n  <button md-menu-item>\r\n    <md-icon> settings </md-icon>\r\n    <span> Settings </span>\r\n  </button>\r\n  <button md-menu-item disabled>\r\n    <md-icon> more </md-icon>\r\n    <span> More Info </span>\r\n  </button>\r\n  <button md-menu-item>\r\n    <md-icon> remove_circle </md-icon>\r\n    <span> Remove Widget </span>\r\n  </button>\r\n</md-menu>\r\n"

/***/ }),

/***/ "../../../../../src/app/core/widgets/widgets-v1/source-overview-widget/source-overview-widget.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".widget {\n  color: #333;\n  margin: 12px;\n  width: 100%; }\n  .widget .name {\n    font-size: 22px; }\n  .widget .source {\n    font-size: 16px;\n    color: #FFF;\n    background-color: #000;\n    padding: 5px 0;\n    border-radius: 15px; }\n  .widget .value {\n    color: #555;\n    font-size: 20px;\n    font-weight: 500; }\n  .widget md-card-content {\n    position: relative;\n    height: calc(100% - 57px); }\n  .widget md-card-content > div {\n    height: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/widgets/widgets-v1/source-overview-widget/source-overview-widget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__charts_nvD3_nvD3_service__ = __webpack_require__("../../../../../src/app/core/charts/nvD3/nvD3.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SourceOverviewWidgetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SourceOverviewWidgetComponent = (function () {
    function SourceOverviewWidgetComponent(nvD3Service) {
        this.d3 = nvD3Service.getD3();
    }
    SourceOverviewWidgetComponent.prototype.ngOnInit = function () {
        var d3 = this.d3;
        this.chartOptions = {
            chart: {
                type: 'lineChart',
                height: 40,
                margin: {
                    top: 10,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
                x: function (d) { return d.date; },
                y: function (d) { return d.value; },
                showXAxis: false,
                showYAxis: false,
                xAxis: {
                    ticks: d3.time.days,
                    axisLabel: '',
                    tickFormat: function (d) {
                        return d3.time.format('%a %d.%m.%Y')(new Date(d));
                    }
                },
                interpolate: 'cardinal',
                showLegend: false,
                useInteractiveGuideline: true
            },
        };
    };
    return SourceOverviewWidgetComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('chartDataArray'),
    __metadata("design:type", Object)
], SourceOverviewWidgetComponent.prototype, "chartDataArray", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('options'),
    __metadata("design:type", Object)
], SourceOverviewWidgetComponent.prototype, "options", void 0);
SourceOverviewWidgetComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-source-overview-widget',
        template: __webpack_require__("../../../../../src/app/core/widgets/widgets-v1/source-overview-widget/source-overview-widget.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/widgets/widgets-v1/source-overview-widget/source-overview-widget.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__charts_nvD3_nvD3_service__["a" /* D3ChartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__charts_nvD3_nvD3_service__["a" /* D3ChartService */]) === "function" && _a || Object])
], SourceOverviewWidgetComponent);

var _a;
//# sourceMappingURL=source-overview-widget.component.js.map

/***/ }),

/***/ "../../../../../src/app/core/widgets/widgets-v1/widget-v1/widget-v1.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card class=\"widget\">\r\n  <md-card-title fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n    <md-icon class=\"icon\">{{ options.icon }}</md-icon>\r\n    <span class=\"name\">{{ options.name }}</span>\r\n    <span fxFlex></span>\r\n    <span class=\"number\">{{ options.number | number: '1.0-0' }}</span>\r\n  </md-card-title>\r\n  <md-card-subtitle>\r\n    <md-icon class=\"arrow\"\r\n             [class.green]=\"options.gain > 0\"\r\n             [class.red]=\"options.gain < 0\">\r\n      {{ options.arrow }}\r\n    </md-icon>\r\n    <span class=\"description\">{{ options.gain }}{{ options.description }}</span>\r\n  </md-card-subtitle>\r\n\r\n  <md-card-content>\r\n    <nvd3 class=\"fill-bg-opacity\" [options]=\"chartOptions\" [data]=\"data\"></nvd3>\r\n  </md-card-content>\r\n</md-card>\r\n"

/***/ }),

/***/ "../../../../../src/app/core/widgets/widgets-v1/widget-v1/widget-v1.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".widget {\n  margin: 12px;\n  color: #333; }\n  .widget .icon {\n    vertical-align: middle;\n    color: #7A8B93; }\n  .widget .name {\n    margin-left: 10px;\n    font-size: 18px; }\n  .widget .number {\n    font-size: 30px;\n    font-weight: 300;\n    letter-spacing: 0.05em; }\n  .widget .arrow {\n    width: 22px;\n    height: 22px;\n    font-size: 22px;\n    vertical-align: top; }\n    .widget .arrow.red {\n      color: red; }\n    .widget .arrow.green {\n      color: green; }\n  .widget .description {\n    font-size: 16px; }\n  .widget md-card-title {\n    margin-bottom: 10px; }\n  .widget md-card-subtitle {\n    margin-bottom: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/core/widgets/widgets-v1/widget-v1/widget-v1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__charts_nvD3_nvD3_service__ = __webpack_require__("../../../../../src/app/core/charts/nvD3/nvD3.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WidgetComponent = (function () {
    function WidgetComponent(d3ChartService) {
        this.d3 = d3ChartService.getD3();
    }
    WidgetComponent.prototype.ngOnInit = function () {
        var d3 = this.d3;
        this.chartOptions = {
            chart: {
                type: 'lineChart',
                height: 60,
                margin: {
                    top: 10,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
                x: function (d) { return d.date; },
                y: function (d) { return d.value; },
                showXAxis: false,
                showYAxis: false,
                xAxis: {
                    ticks: d3.time.days,
                    axisLabel: '',
                    tickFormat: function (d) {
                        return d3.time.format('%a %d.%m.%Y')(new Date(d));
                    }
                },
                interpolate: 'cardinal',
                showLegend: false,
                useInteractiveGuideline: true
            },
        };
    };
    return WidgetComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('data'),
    __metadata("design:type", Object)
], WidgetComponent.prototype, "data", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('options'),
    __metadata("design:type", Object)
], WidgetComponent.prototype, "options", void 0);
WidgetComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-widget-v1',
        template: __webpack_require__("../../../../../src/app/core/widgets/widgets-v1/widget-v1/widget-v1.component.html"),
        styles: [__webpack_require__("../../../../../src/app/core/widgets/widgets-v1/widget-v1/widget-v1.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__charts_nvD3_nvD3_service__["a" /* D3ChartService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__charts_nvD3_nvD3_service__["a" /* D3ChartService */]) === "function" && _a || Object])
], WidgetComponent);

var _a;
//# sourceMappingURL=widget-v1.component.js.map

/***/ }),

/***/ "../../../../../src/app/demo/apps/calendar/calendar-edit/calendar-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"event-edit\">\r\n  <div md-dialog-title>\r\n    Edit Event\r\n  </div>\r\n  <div class=\"content\" md-dialog-content>\r\n    <p fxLayout=\"row\">\r\n      <md-input-container fxFlex>\r\n        <input mdInput placeholder=\"Event Name\" [(ngModel)]=\"event.title\">\r\n      </md-input-container>\r\n    </p>\r\n    <p fxLayout=\"row\">\r\n      <md-input-container fxFlex>\r\n        <input mdInput placeholder=\"Event Start Time\" [(ngModel)]=\"eventStart\">\r\n      </md-input-container>\r\n    </p>\r\n    <p fxLayout=\"row\">\r\n      <md-input-container fxFlex>\r\n        <input mdInput placeholder=\"Event End Time\" [(ngModel)]=\"eventEnd\">\r\n      </md-input-container>\r\n    </p>\r\n  </div>\r\n  <div md-dialog-actions fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n    <button md-dialog-close md-button>Cancel</button>\r\n    <button class=\"save\" md-raised-button color=\"primary\" (click)=\"save()\">Save</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/demo/apps/calendar/calendar-edit/calendar-edit.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/demo/apps/calendar/calendar-edit/calendar-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var eventDateFormat = 'DD.MM.YYYY, HH:mm';
var CalendarEditComponent = (function () {
    function CalendarEditComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    CalendarEditComponent.prototype.ngOnInit = function () {
        this.event = this.dialogRef.componentInstance.event;
        this.eventStart = __WEBPACK_IMPORTED_MODULE_2_moment__(this.event.start).format(eventDateFormat);
        this.eventEnd = __WEBPACK_IMPORTED_MODULE_2_moment__(this.event.end).format(eventDateFormat);
    };
    CalendarEditComponent.prototype.save = function () {
        if (this.eventStart) {
            this.event.start = __WEBPACK_IMPORTED_MODULE_2_moment__(this.eventStart, eventDateFormat).toDate();
        }
        if (this.eventEnd) {
            this.event.end = __WEBPACK_IMPORTED_MODULE_2_moment__(this.eventEnd, eventDateFormat).toDate();
        }
        this.dialogRef.close(this.event);
    };
    return CalendarEditComponent;
}());
CalendarEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-calendar-edit',
        template: __webpack_require__("../../../../../src/app/demo/apps/calendar/calendar-edit/calendar-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/demo/apps/calendar/calendar-edit/calendar-edit.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialogRef */]) === "function" && _a || Object])
], CalendarEditComponent);

var _a;
//# sourceMappingURL=calendar-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/demo/apps/calendar/calendar.component.html":
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\"></md-toolbar>\r\n<md-toolbar color=\"primary\">\r\n  <div class=\"calendar-header\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n    <span>{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</span>\r\n    <span fxFlex></span>\r\n    <div class=\"chevrons\">\r\n      <button md-icon-button mwlCalendarPreviousView [view]=\"view\" [(viewDate)]=\"viewDate\">\r\n        <md-icon>chevron_left</md-icon>\r\n      </button>\r\n      <button md-icon-button mwlCalendarNextView [view]=\"view\" [(viewDate)]=\"viewDate\">\r\n        <md-icon>chevron_right</md-icon>\r\n      </button>\r\n    </div>\r\n    <button md-button (click)=\"view = 'month'\">Month</button>\r\n    <button md-button (click)=\"view = 'week'\">Week</button>\r\n    <button md-button (click)=\"view = 'day'\">Day</button>\r\n  </div>\r\n</md-toolbar>\r\n\r\n<div class=\"calendar\">\r\n  <div [ngSwitch]=\"view\">\r\n    <mwl-calendar-month-view\r\n      *ngSwitchCase=\"'month'\"\r\n      [viewDate]=\"viewDate\"\r\n      [events]=\"events\"\r\n      [refresh]=\"refresh\"\r\n      [activeDayIsOpen]=\"activeDayIsOpen\"\r\n      (dayClicked)=\"dayClicked($event.day)\"\r\n      (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n      (eventTimesChanged)=\"eventTimesChanged($event)\">\r\n    </mwl-calendar-month-view>\r\n    <mwl-calendar-week-view\r\n      *ngSwitchCase=\"'week'\"\r\n      [viewDate]=\"viewDate\"\r\n      [events]=\"events\"\r\n      [refresh]=\"refresh\"\r\n      (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n      (eventTimesChanged)=\"eventTimesChanged($event)\">\r\n    </mwl-calendar-week-view>\r\n    <mwl-calendar-day-view\r\n      *ngSwitchCase=\"'day'\"\r\n      [viewDate]=\"viewDate\"\r\n      [events]=\"events\"\r\n      [refresh]=\"refresh\"\r\n      (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n      (eventTimesChanged)=\"eventTimesChanged($event)\">\r\n    </mwl-calendar-day-view>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/demo/apps/calendar/calendar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block; }\n\n.calendar-header {\n  width: 100%; }\n  .calendar-header button {\n    margin-left: 8px; }\n\n.calendar {\n  background: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/demo/apps/calendar/calendar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__calendar_edit_calendar_edit_component__ = __webpack_require__("../../../../../src/app/demo/apps/calendar/calendar-edit/calendar-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__route_animation__ = __webpack_require__("../../../../../src/app/route.animation.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CalendarComponent = (function () {
    function CalendarComponent(dialogRef, snackBar) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.snackBar = snackBar;
        this.view = 'month';
        this.refresh = new __WEBPACK_IMPORTED_MODULE_4_rxjs__["Subject"]();
        this.activeDayIsOpen = true;
        this.actions = [{
                label: '<i class="icon">mode_edit</i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.handleEvent('Edited', event);
                }
            }, {
                label: '<i class="icon">delete</i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.events = _this.events.filter(function (iEvent) { return iEvent !== event; });
                    _this.snackBar.open('Deleted Event: ' + event.title);
                    //this.handleEvent('Deleted', event);
                }
            }];
        this.viewDate = new Date();
        this.events = [{
                start: __WEBPACK_IMPORTED_MODULE_1_moment__().subtract(1, "days"),
                end: __WEBPACK_IMPORTED_MODULE_1_moment__().add(1, "days"),
                title: 'A 3 day event',
                color: 'red',
                actions: this.actions
            }, {
                start: __WEBPACK_IMPORTED_MODULE_1_moment__(),
                end: __WEBPACK_IMPORTED_MODULE_1_moment__(),
                title: 'A draggable one day event',
                color: 'yellow',
                actions: this.actions,
                draggable: true
            }, {
                start: __WEBPACK_IMPORTED_MODULE_1_moment__().add(9, "days"),
                end: __WEBPACK_IMPORTED_MODULE_1_moment__().add(9, "days").add(2, "months"),
                title: 'A long event that spans 2 months',
                color: 'blue'
            }, {
                start: __WEBPACK_IMPORTED_MODULE_1_moment__().add(2, "hours"),
                end: __WEBPACK_IMPORTED_MODULE_1_moment__(),
                title: 'A draggable and resizable event',
                color: 'yellow',
                actions: this.actions,
                resizable: {
                    beforeStart: true,
                    afterEnd: true
                },
                draggable: true
            }];
    }
    CalendarComponent.prototype.handleEvent = function (action, event) {
        var _this = this;
        var dialogRef = this.dialogRef.open(__WEBPACK_IMPORTED_MODULE_3__calendar_edit_calendar_edit_component__["a" /* CalendarEditComponent */]);
        dialogRef.componentInstance.event = event;
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                event.title = result.title;
                _this.snackBar.open('Changed Event: ' + event.title);
                _this.refresh.next();
            }
        });
    };
    CalendarComponent.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (__WEBPACK_IMPORTED_MODULE_1_moment__(this.viewDate).isSame(date, 'month')) {
            if ((__WEBPACK_IMPORTED_MODULE_1_moment__(this.viewDate).isSame(date, 'day') && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
                this.viewDate = date;
            }
        }
    };
    CalendarComponent.prototype.eventTimesChanged = function (_a) {
        var event = _a.event, newStart = _a.newStart, newEnd = _a.newEnd;
        event.start = newStart;
        event.end = newEnd;
        this.snackBar.open('Moved Event: \'' + event.title + '\' to ' + newEnd.getDate() + '.' + newEnd.getMonth() + '.' + newEnd.getFullYear());
        //this.handleEvent('Dropped or resized', event);
        this.refresh.next();
    };
    CalendarComponent.prototype.ngOnInit = function () {
    };
    return CalendarComponent;
}());
CalendarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-calendar',
        template: __webpack_require__("../../../../../src/app/demo/apps/calendar/calendar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/demo/apps/calendar/calendar.component.scss")],
        host: {
            "[@fadeInAnimation]": 'true'
        },
        animations: [__WEBPACK_IMPORTED_MODULE_5__route_animation__["a" /* fadeInAnimation */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdSnackBar */]) === "function" && _b || Object])
], CalendarComponent);

var _a, _b;
//# sourceMappingURL=calendar.component.js.map

/***/ }),

/***/ "../../../../../src/app/demo/apps/inbox/inbox-compose/inbox-compose.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"inbox-compose\">\r\n  <div md-dialog-content fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n    <span>New Email</span>\r\n    <button md-dialog-close md-icon-button>\r\n      <md-icon>close</md-icon>\r\n    </button>\r\n  </div>\r\n  <div class=\"content\" md-dialog-content>\r\n    <p>\r\n      <md-input-container class=\"input-container\">\r\n        <input mdInput placeholder=\"To\">\r\n      </md-input-container>\r\n    </p>\r\n\r\n    <p>\r\n      <md-input-container class=\"input-container\">\r\n        <input mdInput placeholder=\"From\" disabled value=\"david.smith@demomail.com\">\r\n      </md-input-container>\r\n    </p>\r\n\r\n    <p>\r\n      <md-input-container class=\"input-container\">\r\n        <input mdInput placeholder=\"Title\">\r\n      </md-input-container>\r\n    </p>\r\n\r\n    <p class=\"editor\">\r\n      <quill-editor></quill-editor>\r\n    </p>\r\n\r\n  </div>\r\n  <div md-dialog-actions fxLayout=\"row\">\r\n    <button md-dialog-close md-icon-button>\r\n      <md-icon>delete</md-icon>\r\n    </button>\r\n    <span fxFlex><!-- fill space --></span>\r\n    <button md-icon-button>\r\n      <md-icon>attachment</md-icon>\r\n    </button>\r\n    <button (click)=\"send()\" class=\"send\" md-raised-button color=\"primary\">\r\n      Send <md-icon>send</md-icon>\r\n    </button>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/demo/apps/inbox/inbox-compose/inbox-compose.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InboxComposeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InboxComposeComponent = (function () {
    function InboxComposeComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    InboxComposeComponent.prototype.ngOnInit = function () {
    };
    InboxComposeComponent.prototype.send = function () {
        this.dialogRef.close('Your message has been send.');
    };
    return InboxComposeComponent;
}());
InboxComposeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: './ms-inbox-compose',
        template: __webpack_require__("../../../../../src/app/demo/apps/inbox/inbox-compose/inbox-compose.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialogRef */]) === "function" && _a || Object])
], InboxComposeComponent);

var _a;
//# sourceMappingURL=inbox-compose.component.js.map

/***/ }),

/***/ "../../../../../src/app/demo/apps/inbox/inbox.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"inbox\" fxLayout=\"column\">\r\n  <div class=\"header mat-elevation-z2\"></div>\r\n  <div class=\"container\" fxLayout=\"row\">\r\n    <div class=\"navigation\" fxFlex=\"250px\" fxHide=\"true\" fxHide.gt-md=\"false\">\r\n\r\n      <div class=\"title-container\">\r\n        <md-icon>mail</md-icon>\r\n        <span class=\"title\">Inbox</span>\r\n      </div>\r\n\r\n      <div class=\"compose-container\">\r\n        <button (click)=\"openComposeDialog()\" class=\"compose\" md-raised-button color=\"primary\">\r\n          <md-icon>mode_edit</md-icon>\r\n          <span>Compose</span>\r\n        </button>\r\n      </div>\r\n\r\n      <md-nav-list class=\"nav-list\">\r\n        <h3 md-subheader>Inbox</h3>\r\n        <a class=\"nav-item mt0\" (click)=\"setShownMailsByGroup('primary')\" [class.active]=\"shownMailsTypeGroup == 'primary'\" md-list-item>\r\n          <h3 class=\"nav-title\" md-line>\r\n            <md-icon class=\"icon\">inbox</md-icon>\r\n            <span class=\"text\">Primary {{ unreadMailsCount('primary') }}</span>\r\n          </h3>\r\n        </a>\r\n        <a class=\"nav-item\" (click)=\"setShownMailsByGroup('social')\" [class.active]=\"shownMailsTypeGroup == 'social'\" md-list-item>\r\n          <h3 class=\"nav-title\" md-line>\r\n            <md-icon class=\"icon\">group</md-icon>\r\n            <span class=\"text\">Social {{ unreadMailsCount('social') }}</span>\r\n          </h3>\r\n        </a>\r\n        <a class=\"nav-item\" (click)=\"setShownMailsByGroup('promotions')\" [class.active]=\"shownMailsTypeGroup == 'promotions'\" md-list-item>\r\n          <h3 class=\"nav-title\" md-line>\r\n            <md-icon class=\"icon\">local_offer</md-icon>\r\n            <span class=\"text\">Promotions {{ unreadMailsCount('promotions') }}</span>\r\n          </h3>\r\n        </a>\r\n        <md-divider></md-divider>\r\n        <a class=\"nav-item\" (click)=\"setShownMailsToStarred()\" [class.active]=\"shownMailsTypeGroup == 'starred'\" md-list-item>\r\n          <h3 class=\"nav-title\" md-line>\r\n            <md-icon class=\"icon\">star</md-icon>\r\n            <span class=\"text\">Starred</span>\r\n          </h3>\r\n        </a>\r\n        <a class=\"nav-item\" (click)=\"setShownMailsByType('sent')\" [class.active]=\"shownMailsTypeGroup == 'sent'\" md-list-item>\r\n          <h3 class=\"nav-title\" md-line>\r\n            <md-icon class=\"icon\">send</md-icon>\r\n            <span class=\"text\">Sent Mails</span>\r\n          </h3>\r\n        </a>\r\n        <a class=\"nav-item\" (click)=\"setShownMailsByType('draft')\" [class.active]=\"shownMailsTypeGroup == 'draft'\" md-list-item>\r\n          <h3 class=\"nav-title\" md-line>\r\n            <md-icon class=\"icon\">drafts</md-icon>\r\n            <span class=\"text\">Drafts</span>\r\n          </h3>\r\n        </a>\r\n        <md-divider></md-divider>\r\n        <a class=\"nav-item\" (click)=\"setShownMailsByType('spam')\" [class.active]=\"shownMailsTypeGroup == 'spam'\" md-list-item>\r\n          <h3 class=\"nav-title\" md-line>\r\n            <md-icon class=\"icon\">backspace</md-icon>\r\n            <span class=\"text\">Spam</span>\r\n          </h3>\r\n        </a>\r\n        <a class=\"nav-item\" (click)=\"setShownMailsByType('trash')\" [class.active]=\"shownMailsTypeGroup == 'trash'\" md-list-item>\r\n          <h3 class=\"nav-title\" md-line>\r\n            <md-icon class=\"icon\">delete</md-icon>\r\n            <span class=\"text\">Trash</span>\r\n          </h3>\r\n        </a>\r\n      </md-nav-list>\r\n    </div>\r\n\r\n    <div class=\"content-container\" fxFlex fxLayout=\"column\">\r\n\r\n      <div class=\"search mat-elevation-z2\" fxLayout=\"row\">\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n          <md-icon>search</md-icon>\r\n        </div>\r\n        <input fxFlex type=\"search\" placeholder=\"Search...\">\r\n      </div>\r\n\r\n      <div class=\"mails-container mat-elevation-z2\" fxFlex>\r\n        <div *ngIf=\"!shownMailDetail\" class=\"toolbar\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n          <md-checkbox class=\"checkbox\" (click)=\"toggleSelectAllThreads()\"></md-checkbox>\r\n          <span fxFlex><!-- fill space --></span>\r\n          <span>1 - 25 of {{ shownMails.length }}</span>\r\n          <div class=\"chevrons\">\r\n            <button md-icon-button>\r\n              <md-icon>chevron_left</md-icon>\r\n            </button>\r\n            <button md-icon-button>\r\n              <md-icon>chevron_right</md-icon>\r\n            </button>\r\n          </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"shownMailDetail\" class=\"toolbar toolbar-detail\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n          <div class=\"icon-group\">\r\n            <button class=\"back\" (click)=\"resetTemporaries()\" md-icon-button mdTooltip=\"Back\">\r\n              <md-icon>arrow_back</md-icon>\r\n            </button>\r\n          </div>\r\n          <div class=\"icon-group\">\r\n            <button class=\"archive\" md-icon-button mdTooltip=\"Archive\">\r\n              <md-icon>archive</md-icon>\r\n            </button>\r\n            <button class=\"spam\" md-icon-button mdTooltip=\"Mark as Spam\">\r\n              <md-icon>backspace</md-icon>\r\n            </button>\r\n            <button class=\"delete\" md-icon-button mdTooltip=\"Delete\">\r\n              <md-icon>delete</md-icon>\r\n            </button>\r\n          </div>\r\n          <div class=\"icon-group\">\r\n            <button class=\"archive\" md-icon-button mdTooltip=\"Move to\">\r\n              <md-icon>folder</md-icon>\r\n            </button>\r\n            <button class=\"spam\" md-icon-button mdTooltip=\"Label\">\r\n              <md-icon>label</md-icon>\r\n            </button>\r\n          </div>\r\n          <button class=\"delete\" [mdMenuTriggerFor]=\"mailOptions\" md-icon-button>\r\n            <md-icon>more_vert</md-icon>\r\n          </button>\r\n          <span fxFlex><!-- fill space --></span>\r\n          <span>1 - 25 of {{ shownMails.length }}</span>\r\n          <div class=\"chevrons\">\r\n            <button md-icon-button>\r\n              <md-icon>chevron_left</md-icon>\r\n            </button>\r\n            <button md-icon-button>\r\n              <md-icon>chevron_right</md-icon>\r\n            </button>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"mails\">\r\n          <div *ngIf=\"!shownMailDetail\" class=\"mail-list\">\r\n            <a class=\"mail\" #mailList *ngFor=\"let mail of shownMails\" fxLayout=\"row\" [class.read]=\"mail.read\">\r\n              <div fxHide=\"true\" fxHide.gt-xs=\"false\" class=\"start-wrapper\" fxFlex=\"180px\" fxFlex.gt-sm=\"270px\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                <md-checkbox class=\"checkbox\" [checked]=\"isSelected(mail)\"></md-checkbox>\r\n                <button fxHide=\"true\" fxHide.gt-sm=\"false\" md-icon-button (click)=\"toggleStarred(mail)\">\r\n                  <md-icon *ngIf=\"!mail.starred\" class=\"star\">star_border</md-icon>\r\n                  <md-icon *ngIf=\"mail.starred\" class=\"star active\">star</md-icon>\r\n                </button>\r\n                <img fxHide=\"true\" fxHide.gt-sm=\"false\" class=\"from-avatar\" src=\"//placehold.it/40x40\">\r\n                <span class=\"from-name\">{{ mail.from.name }}</span>\r\n              </div>\r\n              <p class=\"content-wrapper\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                <span class=\"labels\">\r\n                  <span class=\"label\" *ngFor=\"let label of mail.labels\" [style.background]=\"label.color\">{{ label.name }}</span>\r\n                </span>\r\n                <span class=\"subject\">{{ mail.subject }}</span>\r\n                <span class=\"middot\">&middot;</span>\r\n                <span class=\"content\">{{ mail.content }}</span>\r\n              </p>\r\n              <div fxHide=\"true\" fxHide.gt-xs=\"false\" fxFlex=\"100px\" fxFlex.gt-sm=\"200px\" class=\"end-wrapper\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n                <span class=\"when\">{{ mail.when.fromNow() }}</span>\r\n                <button fxHide=\"true\" fxHide.gt-sm=\"false\"  class=\"options\" [mdMenuTriggerFor]=\"mailOptions\" md-icon-button>\r\n                  <md-icon>more_vert</md-icon>\r\n                </button>\r\n              </div>\r\n            </a>\r\n          </div>\r\n\r\n          <div class=\"no-mails-container\" *ngIf=\"shownMails.length == 0 && !shownMailDetail\" fxLayout=\"column\" fxLayoutAlign=\"start center\">\r\n            <span class=\"no-mails\">No mails in {{ shownMailsTypeGroup }}</span>\r\n          </div>\r\n\r\n          <div class=\"mail-detail\" *ngIf=\"shownMailDetail\">\r\n\r\n            <div class=\"mail-header\" fxLayout=\"row\">\r\n              <img class=\"avatar\" src=\"//placehold.it/40x40\">\r\n              <div class=\"mail-info\" fxLayout=\"column\">\r\n                <span class=\"from\">{{ shownMailDetail.from.name }}</span>\r\n                <span class=\"to\">to me <md-icon>arrow_drop_down</md-icon></span>\r\n              </div>\r\n              <span fxFlex><!-- fill space--></span>\r\n              <div class=\"mail-extra\">\r\n                <span class=\"when\">{{ shownMailDetail.when.fromNow() }}</span>\r\n                <button class=\"options\" [mdMenuTriggerFor]=\"mailOptions\" md-icon-button>\r\n                  <md-icon>more_vert</md-icon>\r\n                </button>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"mail-content\">\r\n              <div class=\"mail-content-text\">\r\n                <p>{{ shownMailDetail.content }}</p>\r\n              </div>\r\n\r\n              <div class=\"attachments-container\" *ngIf=\"shownMailDetail.attachments\">\r\n                <div class=\"attachments-header\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n                  <span class=\"title\">Attachments</span>\r\n                  <md-divider fxFlex></md-divider>\r\n                  <button class=\"download\" md-icon-button>\r\n                    <md-icon>file_download</md-icon>\r\n                  </button>\r\n                </div>\r\n\r\n                <div class=\"attachments\" fxLayout=\"row\" fxLayoutWrap=\"wrap\">\r\n                  <div class=\"attachment\" *ngFor=\"let attachment of shownMailDetail.attachments\">\r\n                    <img class=\"pointer\" [src]=\"attachment\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"respond\" (click)=\"setRespondActive(true)\" fxLayout=\"row\" fxLayoutAlign=\"start center\" *ngIf=\"!respondActive\">\r\n              <img class=\"avatar\" src=\"assets/img/avatars/noavatar.png\">\r\n              <span class=\"click-reply\">Click to <span class=\"semi-bold\">Reply</span> or <span class=\"semi-bold\">Forward</span></span>\r\n              <span fxFlex><!-- fill space --></span>\r\n              <md-icon class=\"reply\">reply</md-icon>\r\n              <md-icon class=\"forward\">forward</md-icon>\r\n            </div>\r\n\r\n            <div class=\"respond respond-active\" *ngIf=\"respondActive\">\r\n              <quill-editor></quill-editor>\r\n              <div class=\"respond-buttons\" fxLayout=\"row\" fxLayoutAlign=\"end stretch\">\r\n                <button md-button (click)=\"setRespondActive(false)\">Cancel</button>\r\n                <button md-raised-button color=\"primary\" (click)=\"setRespondActive(false)\">Send <md-icon>send</md-icon></button>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n<md-menu #mailOptions=\"mdMenu\">\r\n  <button md-menu-item> <md-icon>markunread_mailbox</md-icon> Mark as unread </button>\r\n  <button md-menu-item> <md-icon>label</md-icon> Labels </button>\r\n  <md-divider></md-divider>\r\n  <button md-menu-item> <md-icon>delete</md-icon> Delete </button>\r\n</md-menu>\r\n"

/***/ }),

/***/ "../../../../../src/app/demo/apps/inbox/inbox.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  position: relative;\n  height: 100%; }\n\n.inbox {\n  height: 100%; }\n  .inbox .header {\n    min-height: 200px;\n    max-height: 200px;\n    background: #fff url(\"/assets/img/backgrounds/2.jpg\") no-repeat center center fixed;\n    background-size: cover; }\n  .inbox .container {\n    margin-top: -200px;\n    max-height: 100%;\n    box-sizing: border-box;\n    height: 100%; }\n  .inbox .navigation {\n    padding: 42px 24px 0; }\n    .inbox .navigation .title-container {\n      min-height: 56px;\n      max-height: 56px;\n      padding-left: 16px;\n      padding-right: 16px;\n      color: white;\n      font-size: 28px; }\n      .inbox .navigation .title-container md-icon {\n        margin-right: 4px;\n        height: 24px;\n        width: 24px;\n        font-size: 24px;\n        vertical-align: sub; }\n      .inbox .navigation .title-container .title {\n        vertical-align: middle; }\n    .inbox .navigation .compose-container {\n      margin: 52px 16px 0 12px; }\n      .inbox .navigation .compose-container .compose {\n        padding-left: 20px;\n        padding-right: 32px;\n        width: 100%; }\n        .inbox .navigation .compose-container .compose md-icon {\n          margin-right: 10px; }\n    .inbox .navigation .nav-list {\n      margin-top: 28px; }\n      .inbox .navigation .nav-list .nav-item {\n        color: #616161;\n        margin: 8px 0; }\n        .inbox .navigation .nav-list .nav-item .nav-title .icon {\n          margin-right: 12px;\n          font-size: 22px;\n          width: 22px;\n          height: 22px; }\n        .inbox .navigation .nav-list .nav-item .nav-title .text {\n          font-size: 14px; }\n        .inbox .navigation .nav-list .nav-item .nav-title .icon, .inbox .navigation .nav-list .nav-item .nav-title .text {\n          font-weight: 500;\n          vertical-align: middle; }\n        .inbox .navigation .nav-list .nav-item.active {\n          color: #3F51B5; }\n    .inbox .navigation md-divider {\n      margin: 0 16px; }\n  .inbox .content-container {\n    max-width: 100%;\n    height: 100%; }\n    .inbox .content-container .search {\n      background: white;\n      margin-top: 42px;\n      min-height: 56px;\n      max-height: 56px; }\n      .inbox .content-container .search md-icon {\n        vertical-align: middle;\n        margin-right: 14px;\n        margin-left: 16px; }\n      .inbox .content-container .search input {\n        border: 0;\n        height: 56px;\n        outline: none; }\n    .inbox .content-container .mails-container {\n      margin-top: 43px;\n      background: white;\n      position: relative;\n      height: 100%;\n      overflow-y: hidden; }\n      .inbox .content-container .mails-container .toolbar {\n        box-sizing: border-box;\n        min-height: 60px;\n        max-height: 60px;\n        border-bottom: 1px solid #EEE;\n        padding: 8px 24px;\n        color: #616161; }\n        .inbox .content-container .mails-container .toolbar .chevrons {\n          margin-left: 16px; }\n      .inbox .content-container .mails-container .toolbar-detail .icon-group {\n        border-right: 1px solid #EEE; }\n      .inbox .content-container .mails-container .toolbar-detail .back {\n        margin-left: -12px;\n        margin-right: 12px; }\n      .inbox .content-container .mails-container .toolbar-detail .archive {\n        margin-left: 12px;\n        margin-right: 6px; }\n      .inbox .content-container .mails-container .toolbar-detail .spam {\n        margin-left: 6px;\n        margin-right: 6px; }\n      .inbox .content-container .mails-container .toolbar-detail .delete {\n        margin-left: 6px;\n        margin-right: 12px; }\n      .inbox .content-container .mails-container .toolbar-detail .move {\n        margin-left: 12px;\n        margin-right: 6px; }\n      .inbox .content-container .mails-container .toolbar-detail .label {\n        margin-left: 6px;\n        margin-right: 12px; }\n      .inbox .content-container .mails-container .toolbar-detail .options {\n        margin-left: 12px;\n        margin-right: 12px; }\n      .inbox .content-container .mails-container .mails {\n        overflow-y: auto;\n        height: calc(100% - 54px);\n        position: relative; }\n        .inbox .content-container .mails-container .mails .mail {\n          padding: 8px 24px;\n          white-space: nowrap;\n          font-weight: 500;\n          font-size: 15px;\n          text-decoration: none;\n          color: #616161;\n          transition: background .1s ease-in-out;\n          position: relative;\n          border-bottom: 1px solid #EEE;\n          cursor: pointer;\n          min-height: 42px; }\n          .inbox .content-container .mails-container .mails .mail.read {\n            color: #9F9F9F;\n            font-weight: normal; }\n          .inbox .content-container .mails-container .mails .mail .start-wrapper {\n            padding-right: 8px; }\n            .inbox .content-container .mails-container .mails .mail .start-wrapper .checkbox {\n              margin: 0 8px 0 0;\n              color: #616161; }\n            .inbox .content-container .mails-container .mails .mail .start-wrapper .star {\n              margin: 0 8px;\n              color: #616161; }\n              .inbox .content-container .mails-container .mails .mail .start-wrapper .star.active {\n                color: #FFC107; }\n            .inbox .content-container .mails-container .mails .mail .start-wrapper .from-avatar {\n              margin: 0 8px;\n              border-radius: 50%; }\n            .inbox .content-container .mails-container .mails .mail .start-wrapper .from-name {\n              margin: 0 8px;\n              overflow-x: hidden;\n              text-overflow: ellipsis; }\n          .inbox .content-container .mails-container .mails .mail .content-wrapper {\n            white-space: nowrap;\n            overflow-x: hidden;\n            display: block;\n            margin: 0; }\n            .inbox .content-container .mails-container .mails .mail .content-wrapper .labels .label {\n              padding: 2px 8px;\n              font-size: 13px;\n              color: #FFFFFF; }\n            .inbox .content-container .mails-container .mails .mail .content-wrapper .labels .label + .label {\n              margin-left: 6px; }\n            .inbox .content-container .mails-container .mails .mail .content-wrapper .subject {\n              margin: 0 8px; }\n            .inbox .content-container .mails-container .mails .mail .content-wrapper .middot {\n              font-weight: bold; }\n            .inbox .content-container .mails-container .mails .mail .content-wrapper .content {\n              overflow-x: hidden;\n              text-overflow: ellipsis;\n              margin: 0 8px; }\n          .inbox .content-container .mails-container .mails .mail .end-wrapper {\n            margin-left: 16px; }\n            .inbox .content-container .mails-container .mails .mail .end-wrapper .when {\n              margin: 0 8px; }\n            .inbox .content-container .mails-container .mails .mail .end-wrapper .options {\n              margin: 0 0 0 8px;\n              color: #616161; }\n          .inbox .content-container .mails-container .mails .mail:hover {\n            background: #EEE; }\n        .inbox .content-container .mails-container .mails .no-mails-container {\n          margin-top: 16px; }\n          .inbox .content-container .mails-container .mails .no-mails-container .no-mails {\n            font-size: 18px; }\n        .inbox .content-container .mails-container .mails .mail-detail {\n          padding: 24px 32px; }\n          .inbox .content-container .mails-container .mails .mail-detail .mail-header .avatar {\n            height: 45px;\n            width: 45px;\n            margin-right: 20px; }\n          .inbox .content-container .mails-container .mails .mail-detail .mail-header .from {\n            font-weight: 500;\n            font-size: 15px; }\n          .inbox .content-container .mails-container .mails .mail-detail .mail-header .to {\n            color: #999;\n            font-size: 15px;\n            margin-top: 2px;\n            font-weight: 500; }\n            .inbox .content-container .mails-container .mails .mail-detail .mail-header .to md-icon {\n              height: 16px;\n              width: 16px;\n              font-size: 16px;\n              vertical-align: middle; }\n          .inbox .content-container .mails-container .mails .mail-detail .mail-header .mail-extra {\n            color: #999;\n            font-size: 15px;\n            font-weight: 500; }\n            .inbox .content-container .mails-container .mails .mail-detail .mail-header .mail-extra .when {\n              vertical-align: middle; }\n            .inbox .content-container .mails-container .mails .mail-detail .mail-header .mail-extra .options {\n              vertical-align: middle;\n              margin-left: 16px; }\n          .inbox .content-container .mails-container .mails .mail-detail .mail-content {\n            margin-top: 32px;\n            margin-bottom: 240px; }\n          .inbox .content-container .mails-container .mails .mail-detail .attachments-container .attachments-header {\n            color: #999; }\n            .inbox .content-container .mails-container .mails .mail-detail .attachments-container .attachments-header .title {\n              font-size: 13px;\n              font-weight: 500;\n              margin-right: 24px; }\n            .inbox .content-container .mails-container .mails .mail-detail .attachments-container .attachments-header .download {\n              margin-left: 24px; }\n          .inbox .content-container .mails-container .mails .mail-detail .attachments-container .attachments {\n            margin-top: 12px;\n            margin-bottom: 12px; }\n            .inbox .content-container .mails-container .mails .mail-detail .attachments-container .attachments .attachment {\n              margin-right: 12px; }\n              .inbox .content-container .mails-container .mails .mail-detail .attachments-container .attachments .attachment img {\n                max-height: 140px;\n                max-width: 80px; }\n          .inbox .content-container .mails-container .mails .mail-detail .respond {\n            width: 100%;\n            position: absolute;\n            bottom: 0;\n            left: 0;\n            padding: 24px 32px;\n            border-top: 1px solid #EEE;\n            cursor: pointer; }\n            .inbox .content-container .mails-container .mails .mail-detail .respond .avatar {\n              margin-right: 28px; }\n            .inbox .content-container .mails-container .mails .mail-detail .respond .click-reply {\n              color: #999; }\n              .inbox .content-container .mails-container .mails .mail-detail .respond .click-reply .semi-bold {\n                font-weight: 500; }\n            .inbox .content-container .mails-container .mails .mail-detail .respond .reply {\n              color: #2B303B;\n              margin-right: 24px; }\n            .inbox .content-container .mails-container .mails .mail-detail .respond .respond-buttons {\n              margin-top: 12px; }\n              .inbox .content-container .mails-container .mails .mail-detail .respond .respond-buttons md-icon {\n                font-size: 18px;\n                height: 18px;\n                width: 18px;\n                margin-left: 6px; }\n              .inbox .content-container .mails-container .mails .mail-detail .respond .respond-buttons button {\n                margin-left: 12px; }\n\n@media only screen and (min-width: 1280px) {\n  .inbox .content-container {\n    max-width: calc(100% - 290px); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/demo/apps/inbox/inbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__route_animation__ = __webpack_require__("../../../../../src/app/route.animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mail_service__ = __webpack_require__("../../../../../src/app/demo/apps/inbox/mail.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__inbox_compose_inbox_compose_component__ = __webpack_require__("../../../../../src/app/demo/apps/inbox/inbox-compose/inbox-compose.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InboxComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var InboxComponent = (function () {
    function InboxComponent(mailService, renderer, composeDialog, snackBar) {
        this.mailService = mailService;
        this.renderer = renderer;
        this.composeDialog = composeDialog;
        this.snackBar = snackBar;
        this.shownMails = [];
        this.allMails = [];
        this.selectedMails = [];
        this.clickListeners = [];
    }
    InboxComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mailSubscription = this.mailService.mails$.subscribe(function (mails) {
            _this.allMails = __WEBPACK_IMPORTED_MODULE_2_lodash__["sortBy"](mails, 'when').reverse();
        });
        this.setShownMailsByGroup('primary');
    };
    InboxComponent.prototype.ngAfterViewChecked = function () {
        this.createMailListClickListeners();
    };
    InboxComponent.prototype.openComposeDialog = function () {
        var _this = this;
        var dialogRef = this.composeDialog.open(__WEBPACK_IMPORTED_MODULE_5__inbox_compose_inbox_compose_component__["a" /* InboxComposeComponent */]);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.snackBar.open(result);
            }
        });
    };
    InboxComponent.prototype.createMailListClickListeners = function () {
        var _this = this;
        this.clickListeners.forEach(function (listener) {
            listener();
        });
        this.mailList.forEach(function (elem, index) {
            _this.clickListeners.push(_this.renderer.listen(elem.nativeElement, 'click', function (event) {
                if (event.target.className != 'md-checkbox-inner-container' && event.target.className != 'md-ripple-background') {
                    _this.showMailDetail(_this.shownMails[index]);
                }
            }));
        });
    };
    InboxComponent.prototype.resetTemporaries = function () {
        this.shownMailDetail = null;
        this.respondActive = false;
    };
    InboxComponent.prototype.showMailDetail = function (mail) {
        this.shownMailDetail = mail;
        mail.read = true;
    };
    InboxComponent.prototype.setShownMailsByGroup = function (group) {
        this.shownMails = this.allMails.filter(function (mail) {
            return (mail.group == group);
        });
        this.shownMailsTypeGroup = group;
        this.resetTemporaries();
    };
    InboxComponent.prototype.setShownMailsByType = function (type) {
        this.shownMails = this.allMails.filter(function (mail) {
            return (mail.type == type);
        });
        this.shownMailsTypeGroup = type;
        this.resetTemporaries();
    };
    InboxComponent.prototype.setShownMailsToStarred = function () {
        this.shownMails = this.allMails.filter(function (mail) {
            return (mail.starred == true);
        });
        this.shownMailsTypeGroup = 'starred';
        this.resetTemporaries();
    };
    InboxComponent.prototype.toggleSelectAllThreads = function () {
        if (this.selectedMails && this.selectedMails.length > 0) {
            this.selectedMails = this.shownMails;
        }
        else {
            this.selectedMails = [];
        }
    };
    InboxComponent.prototype.toggleStarred = function (mail) {
        mail.starred = !mail.starred;
    };
    InboxComponent.prototype.isSelected = function (mail) {
        return __WEBPACK_IMPORTED_MODULE_2_lodash__["includes"](this.selectedMails, mail);
    };
    InboxComponent.prototype.unreadMailsCount = function (group) {
        var count = this.allMails.filter(function (mail) { return (mail.read == false && mail.group == group); }).length;
        var text = '';
        if (count > 0) {
            text = "(" + count + ")";
        }
        return text;
    };
    InboxComponent.prototype.setRespondActive = function (active) {
        this.respondActive = active;
    };
    InboxComponent.prototype.ngOnDestroy = function () {
        this.mailSubscription.unsubscribe();
        this.clickListeners.forEach(function (listener) {
            listener();
        });
    };
    return InboxComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])('mailList'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"]) === "function" && _a || Object)
], InboxComponent.prototype, "mailList", void 0);
InboxComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-inbox',
        template: __webpack_require__("../../../../../src/app/demo/apps/inbox/inbox.component.html"),
        styles: [__webpack_require__("../../../../../src/app/demo/apps/inbox/inbox.component.scss")],
        host: {
            "[@fadeInAnimation]": 'true'
        },
        animations: [__WEBPACK_IMPORTED_MODULE_1__route_animation__["a" /* fadeInAnimation */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__mail_service__["a" /* MailService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__mail_service__["a" /* MailService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MdDialog */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MdSnackBar */]) === "function" && _e || Object])
], InboxComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=inbox.component.js.map

/***/ }),

/***/ "../../../../../src/app/demo/apps/inbox/mail.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mails_demo__ = __webpack_require__("../../../../../src/app/demo/apps/inbox/mails.demo.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MailService = (function () {
    function MailService() {
        this._mailsSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"]([]);
        this._mails = [];
        this.mails$ = this._mailsSubject.asObservable();
        this._mails = __WEBPACK_IMPORTED_MODULE_2__mails_demo__["a" /* demoMails */];
        this._mailsSubject.next(this._mails);
    }
    Object.defineProperty(MailService.prototype, "unreadMailsCount", {
        get: function () {
            return this._mails.filter(function (mail) { return (mail.read == false); }).length;
        },
        enumerable: true,
        configurable: true
    });
    return MailService;
}());
MailService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], MailService);

//# sourceMappingURL=mail.service.js.map

/***/ }),

/***/ "../../../../../src/app/demo/apps/inbox/mails.demo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return demoMails; });

var demoMails = [
    {
        "from": {
            "name": "Mccormick Hinton",
            "mail": "demo@justademomail.com"
        },
        "subject": "est cillum magna",
        "content": "Sint eiusmod pariatur veniam esse dolor exercitation in cillum sunt proident anim. Amet sunt amet incididunt ad enim sit culpa dolor velit veniam elit in nulla. Ad aliqua ut do sint nulla quis velit. Nisi ullamco do occaecat culpa. Ut duis enim cillum eiusmod magna nisi esse pariatur veniam mollit esse esse nulla. Ad excepteur ipsum ut cupidatat eu ad aliquip ullamco deserunt. Esse fugiat magna ut non ex proident eiusmod consectetur ea pariatur.\n\nUllamco nulla eu esse do ut. Laborum officia eu amet laborum velit mollit exercitation. Anim veniam eiusmod est consectetur deserunt. Minim voluptate id in quis voluptate ut do incididunt consectetur fugiat consequat elit pariatur. Culpa in occaecat ipsum nulla.\n\nDo labore magna esse laboris enim minim ea cupidatat nisi in. Enim ullamco reprehenderit deserunt in dolore voluptate exercitation consectetur adipisicing pariatur. Nulla ad et sint est laborum. Non exercitation ea cupidatat do laborum nostrud. Enim elit officia nostrud voluptate nostrud reprehenderit.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(18, "minutes"),
        "read": true,
        "starred": true,
        "labels": [
            {
                "name": "Private",
                "color": "darkgrey"
            }
        ],
        "group": "promotions",
        "type": "sent",
        "attachments": ["assets/img/backgrounds/1.jpg"]
    },
    {
        "from": {
            "name": "Rutledge Hammond",
            "mail": "demo@justademomail.com"
        },
        "subject": "non non ex",
        "content": "Exercitation Lorem laborum veniam ea fugiat esse fugiat commodo cupidatat. Laborum dolore labore quis consectetur ex. Magna deserunt id nostrud esse occaecat sint dolore aliqua id enim ad mollit. Cillum minim duis ut commodo eiusmod amet magna aute sunt aliquip fugiat sit.\n\nDo sint cupidatat ullamco nulla do dolor anim aliquip non consequat. Eu eiusmod ipsum nisi velit esse enim. Pariatur in eiusmod sit Lorem.\n\nEt minim incididunt dolore velit. Aliqua officia irure adipisicing magna quis consequat commodo reprehenderit excepteur ipsum cillum sit velit magna. Deserunt id sit qui ex nulla qui irure aliquip ex. Eu dolore tempor velit quis veniam commodo deserunt aliquip reprehenderit exercitation aute. Velit anim sint irure ipsum. Labore cupidatat aliquip eu dolor occaecat. Eiusmod ex minim reprehenderit elit nisi id quis dolor aliquip exercitation dolore.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(126, "minutes"),
        "read": false,
        "starred": true,
        "labels": [],
        "group": "social",
        "type": "trash",
        "attachments": ["assets/img/backgrounds/2.jpg"]
    },
    {
        "from": {
            "name": "Vilma Russo",
            "mail": "demo@justademomail.com"
        },
        "subject": "veniam ipsum irure",
        "content": "Mollit voluptate ea nostrud minim deserunt laborum quis proident adipisicing culpa. Excepteur reprehenderit dolore non officia aliqua laboris pariatur cillum ad. Eu anim cillum labore excepteur id duis est sit sint officia.\n\nConsequat id esse ea aute ullamco. Adipisicing deserunt occaecat ut eiusmod nostrud nulla duis amet consequat laborum sunt labore sunt. Id ipsum commodo tempor adipisicing ullamco non esse incididunt nisi et eu aliquip. Nostrud aute cupidatat veniam dolor do elit ullamco proident.\n\nVeniam aute consectetur excepteur consequat tempor mollit nisi id irure culpa. Velit quis cupidatat Lorem esse reprehenderit ad proident tempor ut ullamco sunt ea. Qui tempor reprehenderit culpa id ut laboris aliqua occaecat tempor cupidatat ex nulla duis. Ipsum ex magna pariatur ea sit ad est. Excepteur aliquip tempor voluptate labore laboris ut consectetur consequat aliquip non cillum laborum laborum laboris. Tempor officia ipsum est non id do aliqua excepteur aute do cillum. Incididunt magna veniam enim cupidatat dolore laborum reprehenderit excepteur enim ad excepteur sit.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(89, "minutes"),
        "read": true,
        "starred": false,
        "labels": [],
        "group": "promotions",
        "type": "spam",
        "attachments": ["assets/img/backgrounds/1.jpg"]
    },
    {
        "from": {
            "name": "Blankenship Clarke",
            "mail": "demo@justademomail.com"
        },
        "subject": "consectetur qui irure",
        "content": "Ex labore culpa eu quis commodo nulla excepteur minim elit. Veniam deserunt occaecat voluptate aliqua sint magna qui dolore minim nisi incididunt nulla. Aute aliquip ea laborum eiusmod dolor consectetur non est anim minim. Non ut anim commodo cupidatat id pariatur cupidatat ipsum voluptate laboris pariatur irure. Reprehenderit dolore incididunt minim consequat aute nisi anim ullamco anim in aute aliquip. Ut ex esse eiusmod aliquip dolor magna sunt amet cupidatat minim sit sit.\n\nDolor ex ea ex cillum quis eiusmod aute sint adipisicing non mollit adipisicing. Anim veniam voluptate est quis id commodo magna fugiat. Nisi nulla est consequat non deserunt ullamco nostrud dolor mollit. Adipisicing aliqua ullamco cupidatat ut sunt culpa deserunt incididunt cupidatat. Tempor minim elit officia tempor est labore mollit voluptate exercitation velit officia aute. Sint quis magna quis laborum enim minim do irure exercitation.\n\nEst pariatur proident consectetur enim irure consectetur non labore. Ipsum adipisicing dolor magna dolore non consectetur minim excepteur amet minim veniam velit consequat. Cillum in nostrud duis ullamco elit consequat labore Lorem excepteur. Nulla culpa adipisicing est eiusmod sunt ipsum ex in.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(80, "minutes"),
        "read": true,
        "starred": true,
        "labels": [
            {
                "name": "Project X",
                "color": "#4CA9BB"
            }
        ],
        "group": "primary",
        "type": "none",
        "attachments": ["assets/img/backgrounds/1.jpg"]
    },
    {
        "from": {
            "name": "Harper Deleon",
            "mail": "demo@justademomail.com"
        },
        "subject": "ad laborum duis",
        "content": "Dolore consequat aliqua id Lorem do in laborum veniam proident occaecat reprehenderit aute laborum. Ipsum incididunt Lorem consectetur aliquip ullamco eiusmod sint veniam excepteur voluptate cupidatat in deserunt. Occaecat sit aute sit consequat deserunt eiusmod quis nostrud ea aliquip magna Lorem elit. Velit amet non ut labore commodo ipsum labore nisi incididunt.\n\nElit excepteur non aute excepteur nulla veniam non irure. Id minim sunt adipisicing magna consequat. Cillum esse id duis ut cillum reprehenderit irure in proident nisi aliqua cillum eu. Enim esse veniam laboris voluptate labore enim voluptate sunt aliquip enim excepteur eiusmod sit in.\n\nIn laborum anim occaecat sint sint laboris aliquip deserunt ea incididunt consequat. Lorem cillum proident anim officia magna nisi irure aliquip ad qui. Reprehenderit in ut duis aliqua irure occaecat ea quis minim amet mollit cillum non. Mollit veniam exercitation Lorem tempor labore esse duis in consequat occaecat qui. Eu eiusmod sint sint nulla deserunt minim irure est quis qui. Nostrud eu eu nisi aute adipisicing proident irure eiusmod sit culpa pariatur exercitation ut id. Consequat occaecat Lorem nostrud adipisicing aliquip exercitation dolor.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(139, "minutes"),
        "read": true,
        "starred": false,
        "labels": [],
        "group": "primary",
        "type": "spam",
        "attachments": ["assets/img/backgrounds/2.jpg"]
    },
    {
        "from": {
            "name": "Jimmie Hicks",
            "mail": "demo@justademomail.com"
        },
        "subject": "do sit amet",
        "content": "Veniam cillum culpa veniam irure sint quis exercitation ex ex. Sint irure culpa consectetur in veniam duis. Et voluptate elit dolore enim occaecat laboris laboris et. Do veniam esse sit reprehenderit ut consectetur veniam incididunt mollit adipisicing proident ea ipsum.\n\nAd laborum sit duis deserunt ad reprehenderit reprehenderit adipisicing mollit sit. Irure sint excepteur proident commodo nostrud duis qui nisi. Incididunt ipsum duis qui pariatur deserunt magna consequat ut minim. Reprehenderit sit tempor consequat ipsum elit amet esse elit ullamco sint quis Lorem fugiat eu. Velit amet quis anim sit non magna velit consectetur minim cillum consectetur incididunt eu. Consequat nisi ullamco nulla eiusmod excepteur excepteur magna duis ad aliquip est fugiat nostrud nulla. Minim aliqua ipsum excepteur do ut occaecat magna est do aliquip reprehenderit.\n\nFugiat reprehenderit laborum consectetur est minim est excepteur. Sunt labore sunt consectetur pariatur sint sit aute ex culpa voluptate esse mollit velit ex. Anim sunt incididunt commodo do deserunt excepteur minim quis reprehenderit. Ut qui ipsum excepteur nostrud aute et deserunt ut cupidatat eiusmod veniam dolor quis deserunt.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(21, "days"),
        "read": true,
        "starred": false,
        "labels": [
            {
                "name": "Priority!",
                "color": "#4BAE4F"
            }
        ],
        "group": "promotions",
        "type": "none",
        "attachments": ["assets/img/backgrounds/2.jpg"]
    },
    {
        "from": {
            "name": "Valentine Ray",
            "mail": "demo@justademomail.com"
        },
        "subject": "nulla adipisicing consectetur",
        "content": "Exercitation fugiat Lorem mollit dolore. Excepteur irure ullamco fugiat sunt laboris sit do consequat labore labore. Tempor id est enim laborum magna est pariatur qui et cillum commodo commodo. Culpa commodo ea aute nulla occaecat. Ut ipsum in amet culpa Lorem ipsum ipsum enim. Enim laborum exercitation do culpa eu deserunt eiusmod voluptate ut.\n\nCulpa reprehenderit aliquip nisi voluptate ullamco. Duis nisi ex et deserunt elit nostrud eu. Enim labore dolor elit consequat sint irure minim ipsum consequat nisi adipisicing. Aliquip ea irure minim deserunt ad id officia nulla excepteur labore ullamco pariatur. Consectetur amet ea aute voluptate minim veniam laboris sunt ipsum non aliquip. Exercitation enim ex velit ut incididunt cillum voluptate ullamco eu in sint.\n\nCillum deserunt duis aliqua ullamco. Nisi magna sit id fugiat aliqua consequat excepteur est incididunt et ex duis. Eiusmod et nostrud eiusmod aliquip cupidatat ad esse. Elit tempor eiusmod fugiat velit ad nostrud culpa. Incididunt eu labore aute excepteur velit nisi id magna laboris.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(132, "hours"),
        "read": false,
        "starred": true,
        "labels": [],
        "group": "social",
        "type": "draft",
        "attachments": ["assets/img/backgrounds/2.jpg"]
    },
    {
        "from": {
            "name": "Kristi Burch",
            "mail": "demo@justademomail.com"
        },
        "subject": "id ad qui",
        "content": "Officia consectetur exercitation anim mollit officia est do aute proident aute mollit eiusmod ullamco incididunt. Aliquip et sit non tempor et ipsum ea laborum amet non non cillum nulla. Adipisicing elit aliquip veniam id do pariatur deserunt pariatur deserunt. Qui minim adipisicing qui mollit exercitation irure deserunt sint nulla mollit. Eiusmod reprehenderit Lorem cillum irure non cupidatat laboris enim proident veniam ullamco.\n\nNostrud sint commodo culpa ipsum mollit aute minim nostrud magna officia aliqua ad cillum elit. Aute adipisicing aliqua sunt voluptate Lorem eu proident deserunt nulla dolor labore ex deserunt aliqua. Magna nostrud ad eu qui. Nisi proident dolore deserunt deserunt tempor magna duis culpa.\n\nIpsum dolore cillum pariatur fugiat laboris consequat in irure ullamco. Labore velit officia do consequat nostrud dolore enim deserunt dolore laborum. Adipisicing laboris irure veniam sit incididunt consectetur aute tempor exercitation. Id quis voluptate minim cupidatat commodo aliquip eiusmod pariatur ea. Dolor incididunt exercitation aliquip cupidatat mollit dolore irure. Mollit dolor voluptate dolore non veniam sint enim fugiat proident culpa sit est irure.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(53, "hours"),
        "read": false,
        "starred": false,
        "labels": [
            {
                "name": "Private",
                "color": "#4BAE4F"
            }
        ],
        "group": "promotions",
        "type": "sent",
        "attachments": ["assets/img/backgrounds/2.jpg", "assets/img/backgrounds/3.jpg"]
    },
    {
        "from": {
            "name": "Gay Herrera",
            "mail": "demo@justademomail.com"
        },
        "subject": "tempor occaecat est",
        "content": "Labore ad consequat laborum aliquip nulla laboris ut reprehenderit eiusmod sint aute. Non minim deserunt dolore esse. Eiusmod id ea ut tempor eu do ut qui in commodo deserunt. Consequat nulla deserunt ad incididunt nulla officia cupidatat commodo. Eiusmod qui incididunt ad id ullamco minim labore mollit ullamco. Sit mollit veniam eu est Lorem veniam adipisicing officia.\n\nSit labore sit ullamco aliqua officia irure quis nulla elit duis minim nostrud aliqua. Do non anim et laboris aliquip aliqua culpa et et voluptate tempor eu sunt consectetur. Sunt officia magna ut ullamco sit. Ullamco quis ut magna culpa consectetur ut Lorem labore Lorem ut.\n\nNisi non officia adipisicing velit. Aliqua aliqua aliquip consequat aliquip laboris officia quis sunt mollit ut id cillum tempor pariatur. Minim reprehenderit elit officia occaecat cupidatat qui pariatur sunt Lorem exercitation commodo do esse ipsum. Aliquip veniam id esse esse adipisicing et sit reprehenderit consectetur ullamco consectetur aliquip. Aliqua tempor excepteur sit reprehenderit amet eiusmod commodo adipisicing sunt non sint veniam nisi.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(6, "minutes"),
        "read": false,
        "starred": false,
        "labels": [
            {
                "name": "Outreach",
                "color": "darkgrey"
            }
        ],
        "group": "primary",
        "type": "spam",
        "attachments": ["assets/img/backgrounds/2.jpg"]
    },
    {
        "from": {
            "name": "Lynnette Williamson",
            "mail": "demo@justademomail.com"
        },
        "subject": "quis ex elit",
        "content": "Aute dolor elit eu cillum ullamco laboris et sunt elit eiusmod minim in. Eiusmod tempor anim exercitation occaecat consectetur id eu velit. Eu nulla irure tempor laboris et consectetur in esse duis. Elit culpa aute irure esse occaecat exercitation et minim. Non incididunt minim reprehenderit officia eu quis sunt nostrud ad in eu cupidatat nulla.\n\nEsse esse irure occaecat qui commodo sint ullamco do consequat eiusmod deserunt laboris occaecat. Aute ut et cillum aliqua nisi consequat qui eiusmod duis dolore laboris pariatur tempor sunt. Veniam fugiat cupidatat non exercitation Lorem esse ipsum fugiat exercitation adipisicing. Est ipsum laboris labore consequat adipisicing aute sunt aliquip exercitation in quis veniam incididunt veniam. Exercitation id anim velit id do incididunt adipisicing labore ea sit ea. Officia id minim nostrud minim veniam officia laborum consequat. Cupidatat est officia ipsum enim dolore voluptate.\n\nLabore deserunt culpa ut commodo. Amet ex dolore dolore sint excepteur est esse. Consequat veniam Lorem anim duis do aliqua pariatur mollit velit exercitation. Aliqua laboris cupidatat Lorem voluptate elit eiusmod ullamco consequat do non irure id nulla excepteur.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(40, "minutes"),
        "read": false,
        "starred": true,
        "labels": [],
        "group": "primary",
        "type": "sent",
        "attachments": ["assets/img/backgrounds/2.jpg", "assets/img/backgrounds/3.jpg"]
    },
    {
        "from": {
            "name": "Erna Clemons",
            "mail": "demo@justademomail.com"
        },
        "subject": "nostrud minim veniam",
        "content": "Minim exercitation Lorem velit reprehenderit irure nostrud tempor fugiat. Officia proident proident do ipsum fugiat nostrud. Minim consequat irure pariatur velit qui Lorem sunt officia deserunt laboris labore fugiat aliqua ad. Laborum voluptate aliquip est ullamco mollit et Lorem nostrud dolor aliquip laboris nostrud. Incididunt non tempor officia ad et laboris fugiat nisi in veniam aliquip ea. Est ipsum nulla id reprehenderit dolor id fugiat eiusmod irure voluptate non Lorem aute.\n\nFugiat commodo officia proident cupidatat cillum amet proident est in magna amet occaecat et qui. Lorem ullamco Lorem nisi proident et velit adipisicing. Eiusmod culpa est commodo cillum.\n\nDeserunt pariatur nulla fugiat laboris magna tempor nostrud tempor. Esse deserunt aliquip nisi aliquip dolore mollit Lorem ipsum amet quis eu. Id ipsum incididunt adipisicing sunt nulla dolor proident do occaecat veniam proident reprehenderit. Aliqua ut mollit officia esse. Commodo incididunt exercitation est est duis.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(167, "days"),
        "read": true,
        "starred": true,
        "labels": [
            {
                "name": "Private",
                "color": "red"
            }
        ],
        "group": "social",
        "type": "trash",
        "attachments": ["assets/img/backgrounds/2.jpg", "assets/img/backgrounds/3.jpg"]
    },
    {
        "from": {
            "name": "Delia Robbins",
            "mail": "demo@justademomail.com"
        },
        "subject": "qui et elit",
        "content": "Do adipisicing exercitation sint incididunt duis cupidatat consectetur consequat labore fugiat cupidatat enim. Adipisicing elit fugiat anim cupidatat irure veniam consequat. Officia dolor tempor reprehenderit cillum dolore eiusmod aute fugiat. Mollit consectetur mollit aute anim quis eu sint deserunt veniam proident labore tempor consectetur laboris.\n\nAnim sunt deserunt nostrud nisi aliquip non veniam labore ullamco nisi dolore laborum quis ad. Culpa laborum aliquip dolore deserunt laboris ex eiusmod commodo ut. Nulla sint amet dolore consequat culpa esse do. Aliquip aliqua magna anim ut id. Dolor adipisicing qui in voluptate excepteur officia proident amet aliqua cupidatat aliqua quis est duis. Non quis ullamco consequat dolore cillum non consectetur. Sit ut mollit laborum cupidatat adipisicing nisi.\n\nVelit mollit non ullamco incididunt proident velit commodo velit ad ullamco excepteur sunt quis laboris. Incididunt labore exercitation excepteur consectetur. Sunt et in consequat Lorem mollit quis minim Lorem enim velit quis. Ut tempor incididunt voluptate amet eu aute ea. Labore occaecat sit ullamco ullamco amet ipsum.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(85, "minutes"),
        "read": false,
        "starred": true,
        "labels": [],
        "group": "promotions",
        "type": "spam",
        "attachments": ["assets/img/backgrounds/2.jpg", "assets/img/backgrounds/3.jpg"]
    },
    {
        "from": {
            "name": "Vicki Atkinson",
            "mail": "demo@justademomail.com"
        },
        "subject": "id voluptate exercitation",
        "content": "Non occaecat proident non do fugiat excepteur qui aliqua dolore est culpa. Reprehenderit qui commodo in sint magna aliquip eiusmod ex dolore ut deserunt dolore. Est sit laborum amet eiusmod et dolore. Velit magna laboris amet labore elit enim laborum laborum labore nisi aliqua sint nisi fugiat. Reprehenderit ipsum fugiat dolore enim et nostrud et minim cupidatat pariatur consequat consectetur. Pariatur elit aliquip anim esse proident in ex id incididunt cupidatat sint irure. Incididunt cupidatat sit consectetur sint ipsum minim pariatur laboris et nostrud.\n\nMinim ullamco sunt laboris ea minim excepteur non id ullamco elit sint laboris fugiat. Commodo consectetur cillum anim pariatur fugiat quis sint. Ipsum est velit minim duis. Culpa est enim aute nisi laboris id ipsum officia occaecat id dolor. Elit aliqua mollit reprehenderit adipisicing ipsum commodo cillum exercitation sit irure ut do culpa. Officia dolore cillum cupidatat sunt ad adipisicing culpa culpa nisi Lorem dolore. Culpa fugiat nulla aute in amet commodo.\n\nUllamco et ullamco magna amet. Proident cillum velit incididunt sit esse laborum. Tempor duis cupidatat pariatur culpa et elit pariatur laboris deserunt adipisicing reprehenderit enim. Aliquip ad consequat minim occaecat ut nostrud consectetur et et irure exercitation laborum sunt. Amet mollit commodo ad magna mollit occaecat pariatur. Occaecat non nisi nulla amet.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(48, "hours"),
        "read": false,
        "starred": true,
        "labels": [],
        "group": "primary",
        "type": "sent",
        "attachments": ["assets/img/backgrounds/1.jpg"]
    },
    {
        "from": {
            "name": "Marian Newman",
            "mail": "demo@justademomail.com"
        },
        "subject": "adipisicing sint commodo",
        "content": "Ullamco veniam Lorem mollit irure enim eu nulla fugiat consectetur nisi consequat tempor sit. Velit excepteur do ad ipsum ipsum reprehenderit laboris anim enim. Dolor do eu qui et do ullamco ad laboris reprehenderit amet. Cillum occaecat cillum minim laborum veniam do nisi deserunt irure ad.\n\nEiusmod exercitation aliquip duis elit nulla non exercitation exercitation cillum qui veniam cillum reprehenderit nostrud. Sunt officia sunt minim occaecat ullamco nulla amet irure id commodo eiusmod irure. Nostrud consequat nostrud magna eu laboris sunt occaecat proident deserunt adipisicing magna excepteur ipsum. Ad veniam enim fugiat qui sunt amet. Commodo labore deserunt tempor anim veniam aute magna culpa mollit et do. Sunt nulla Lorem irure dolore reprehenderit id deserunt ut sunt voluptate fugiat.\n\nDuis consequat minim ea laboris. Elit labore qui incididunt commodo. Sit consequat aliquip proident elit magna labore est consectetur. Officia officia nisi aute amet mollit incididunt veniam elit ullamco ipsum.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(119, "hours"),
        "read": true,
        "starred": false,
        "labels": [],
        "group": "social",
        "type": "spam",
        "attachments": ["assets/img/backgrounds/1.jpg"]
    },
    {
        "from": {
            "name": "Foley Prince",
            "mail": "demo@justademomail.com"
        },
        "subject": "occaecat et eiusmod",
        "content": "Mollit eu aliquip incididunt irure qui consequat sint commodo anim magna irure exercitation. Dolor sint aliquip enim officia ea deserunt culpa nulla ut voluptate exercitation deserunt eiusmod. Occaecat laborum nulla eu amet mollit aliquip nulla. Dolore exercitation magna do et. Dolore aliquip cillum nisi minim. Elit non enim occaecat proident commodo laborum irure laboris et adipisicing.\n\nExercitation occaecat laborum officia pariatur sunt tempor nulla sint. Commodo sunt ut irure ipsum nisi laborum officia nulla. Nulla ut nulla pariatur tempor. Laboris cupidatat aute fugiat minim deserunt nulla. Ullamco fugiat nisi tempor laboris minim adipisicing exercitation sunt dolor sunt non cupidatat cillum non. Dolor commodo do eiusmod occaecat minim.\n\nEt nulla magna nulla deserunt sint et commodo mollit in tempor cillum qui. Esse enim sit dolor ex ea elit consectetur cupidatat. Minim irure consectetur Lorem Lorem laboris laborum enim. Aute laborum ullamco consequat id magna quis eu fugiat culpa non exercitation fugiat sit. Proident voluptate pariatur aliqua non et pariatur dolor labore nostrud laborum in anim. Proident magna non ea proident labore commodo laborum aliqua nostrud occaecat id in tempor.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(24, "days"),
        "read": true,
        "starred": true,
        "labels": [],
        "group": "social",
        "type": "sent",
        "attachments": ["assets/img/backgrounds/2.jpg", "assets/img/backgrounds/3.jpg"]
    },
    {
        "from": {
            "name": "Shaw Sanford",
            "mail": "demo@justademomail.com"
        },
        "subject": "eu magna ut",
        "content": "Adipisicing esse laborum aliquip tempor ullamco mollit esse est commodo nostrud amet anim minim. Adipisicing dolor quis proident eu id minim labore sunt aliquip sunt ea ea reprehenderit sunt. Do id aliquip officia aliqua ad commodo.\n\nVelit non culpa reprehenderit officia. Ullamco occaecat quis et nisi est reprehenderit excepteur ut enim dolor deserunt eu deserunt mollit. Pariatur nulla aliqua Lorem sunt veniam minim veniam excepteur. Laboris veniam Lorem irure dolor ut dolor ipsum esse incididunt. Aute ex minim ipsum aliqua quis proident. Occaecat aliquip do est irure reprehenderit adipisicing.\n\nCillum anim tempor non pariatur ad excepteur minim. Elit aliquip exercitation est magna quis anim nisi est exercitation. Nisi ex eiusmod cupidatat ullamco id. Anim cupidatat ut ut dolor proident anim aute fugiat excepteur cupidatat. Qui sit aliquip ullamco reprehenderit labore sit ad. Lorem reprehenderit aliquip labore adipisicing sit non magna amet in. Ad ipsum cillum ullamco aliqua labore amet irure proident sit consequat veniam duis cupidatat.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(167, "days"),
        "read": false,
        "starred": false,
        "labels": [],
        "group": "social",
        "type": "none",
        "attachments": ["assets/img/backgrounds/2.jpg", "assets/img/backgrounds/3.jpg"]
    },
    {
        "from": {
            "name": "Fernandez Wilcox",
            "mail": "demo@justademomail.com"
        },
        "subject": "ut aliqua reprehenderit",
        "content": "Dolor voluptate do sunt irure cupidatat commodo occaecat. Deserunt consectetur Lorem amet qui ullamco mollit dolore qui in est. Eiusmod nostrud Lorem ex laboris deserunt esse culpa elit voluptate ad irure est culpa veniam. Ut ut sunt dolor exercitation. Enim incididunt sint proident incididunt duis aute magna eu duis dolor pariatur cupidatat velit magna.\n\nAmet in aute minim non nulla deserunt fugiat sint ex officia aliqua laboris. Eu deserunt deserunt ullamco officia culpa incididunt laboris irure laboris nisi nulla cupidatat. Laboris quis culpa aliquip aliquip duis occaecat duis excepteur proident nulla.\n\nAmet mollit magna sunt do enim consectetur. Labore fugiat Lorem reprehenderit veniam. Officia ea qui exercitation voluptate id occaecat cillum sunt in ipsum elit. Qui ullamco nisi tempor nostrud cupidatat. Ex occaecat laborum amet officia proident laborum culpa voluptate. Magna veniam ea velit pariatur est.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(22, "hours"),
        "read": false,
        "starred": true,
        "labels": [],
        "group": "promotions",
        "type": "sent",
        "attachments": ["assets/img/backgrounds/2.jpg"]
    },
    {
        "from": {
            "name": "Little Baird",
            "mail": "demo@justademomail.com"
        },
        "subject": "eiusmod enim ad",
        "content": "Ut labore anim cillum nostrud. Aute do amet dolore aliqua ullamco proident cupidatat deserunt dolor pariatur nulla esse anim do. Incididunt tempor amet ea commodo proident esse nostrud elit excepteur sint laborum aute sunt in. Duis mollit nisi ex irure non eiusmod ea esse. Nostrud commodo qui ea consectetur.\n\nId velit in exercitation ipsum quis. Proident veniam cupidatat sunt exercitation occaecat anim. Ex esse enim velit est duis. Enim magna Lorem laborum nostrud tempor laboris laboris. Sit reprehenderit irure nulla est anim voluptate anim eiusmod.\n\nVelit incididunt exercitation irure aliquip magna in fugiat proident. Consectetur ullamco pariatur minim commodo officia aliquip tempor. Elit id excepteur elit do irure do ad aliqua. Aliqua aliqua proident nisi sunt fugiat tempor. Laborum exercitation tempor sint commodo quis eu in commodo tempor id tempor laboris deserunt. Esse amet mollit anim culpa fugiat ea eu ad magna quis reprehenderit mollit laboris. Nulla labore cillum aliquip anim velit aute veniam cillum ad irure pariatur aliqua reprehenderit.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(89, "minutes"),
        "read": true,
        "starred": false,
        "labels": [],
        "group": "promotions",
        "type": "draft",
        "attachments": ["assets/img/backgrounds/2.jpg"]
    },
    {
        "from": {
            "name": "Dorsey Mayo",
            "mail": "demo@justademomail.com"
        },
        "subject": "velit magna reprehenderit",
        "content": "Cillum non ipsum ex voluptate velit adipisicing elit voluptate excepteur Lorem deserunt est nisi nostrud. Mollit sit veniam aliqua exercitation incididunt in ullamco mollit nisi ea qui. Laboris minim do proident voluptate pariatur eu ad enim laborum qui officia cupidatat. Sint id ad irure voluptate sint voluptate esse laborum tempor labore. Nulla nisi magna laboris sunt amet culpa anim.\n\nTempor do in reprehenderit dolore esse. Enim et id incididunt eu ex nulla quis nisi nulla dolore. Velit tempor voluptate proident culpa aliqua nisi id dolor occaecat esse ad reprehenderit non. Et mollit id nisi veniam veniam est sit aute excepteur do et. Voluptate do eu reprehenderit commodo commodo non mollit quis cillum. In ea qui adipisicing esse quis ipsum voluptate cupidatat aliqua consectetur nulla sunt laboris consequat.\n\nLabore in culpa enim elit cillum Lorem labore quis do veniam est mollit officia mollit. Nostrud reprehenderit consequat ullamco quis deserunt. Sit consequat aliquip ad ad proident quis occaecat nisi nisi id. Qui deserunt id enim eiusmod consectetur magna et cillum. Duis enim commodo anim qui aute consequat consequat elit laboris Lorem enim adipisicing sit. Dolor duis ipsum ut aliquip dolore proident. Reprehenderit ex sunt nisi culpa nisi cupidatat enim nostrud amet aliqua in amet.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(83, "hours"),
        "read": false,
        "starred": false,
        "labels": [],
        "group": "promotions",
        "type": "spam",
        "attachments": ["assets/img/backgrounds/1.jpg"]
    },
    {
        "from": {
            "name": "Castaneda Hunt",
            "mail": "demo@justademomail.com"
        },
        "subject": "aute nostrud deserunt",
        "content": "Adipisicing irure ad aliqua est irure. Labore duis proident aute laboris do enim. Elit eiusmod ea ad minim irure reprehenderit dolore duis ipsum.\n\nDo qui non eu labore culpa ipsum excepteur anim sunt aute ut magna nisi commodo. Est reprehenderit non amet culpa Lorem elit dolore elit pariatur adipisicing voluptate ut. Est velit excepteur commodo irure ad ad laboris in consectetur ad sint eu incididunt. Nisi non dolore id enim ad laboris reprehenderit id irure. Tempor deserunt est nostrud do exercitation culpa quis ad id officia adipisicing commodo elit. Id sunt Lorem et magna quis.\n\nEa ipsum labore ea reprehenderit quis nostrud est labore ut in amet id. Aute esse cillum eu proident consectetur elit fugiat sunt velit velit in. Reprehenderit ea nisi nisi consequat non. Duis exercitation anim quis sunt sint elit magna voluptate et cillum deserunt. Est eu reprehenderit pariatur dolore exercitation proident eu non minim adipisicing cupidatat. Excepteur consequat irure sunt dolor laborum esse nulla culpa minim eu cupidatat consectetur aute culpa. Reprehenderit aliquip elit ex occaecat eu mollit non culpa ut.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(180, "minutes"),
        "read": true,
        "starred": false,
        "labels": [],
        "group": "promotions",
        "type": "spam",
        "attachments": ["assets/img/backgrounds/1.jpg"]
    },
    {
        "from": {
            "name": "Helen Roberson",
            "mail": "demo@justademomail.com"
        },
        "subject": "incididunt irure magna",
        "content": "Cillum cillum sint reprehenderit mollit dolor cillum ullamco laborum ullamco est duis laborum culpa. Est aute non irure esse officia. Velit culpa cillum nulla sunt adipisicing consequat sit labore est elit aute laboris irure quis. Est cupidatat voluptate ullamco cillum minim ex consectetur anim dolore exercitation. Laborum deserunt labore est nostrud. Consequat deserunt magna esse irure sit eiusmod esse veniam consectetur ad tempor voluptate. Fugiat laboris quis enim labore incididunt minim et fugiat dolor sit magna laborum sit dolor.\n\nAliqua eu veniam velit elit nisi adipisicing proident nulla enim ipsum tempor aliqua. Incididunt ullamco eu aute officia. Magna eu cupidatat aute exercitation labore do.\n\nOfficia aliquip consectetur do ut sit. Nulla cillum amet mollit commodo et ea non anim voluptate duis dolore sunt. Laborum labore cupidatat sint mollit consequat duis ad tempor velit consequat duis nisi id.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(117, "hours"),
        "read": false,
        "starred": true,
        "labels": [],
        "group": "promotions",
        "type": "spam",
        "attachments": ["assets/img/backgrounds/2.jpg"]
    },
    {
        "from": {
            "name": "Oliver Short",
            "mail": "demo@justademomail.com"
        },
        "subject": "laboris do sunt",
        "content": "Officia deserunt Lorem id ex deserunt fugiat ex consequat laborum cupidatat ullamco. Ut excepteur quis quis velit est. Dolor veniam Lorem pariatur adipisicing. Ad consectetur commodo veniam fugiat excepteur qui elit tempor ipsum laborum. Elit nisi tempor exercitation anim esse.\n\nCommodo do anim fugiat magna. Est non eu occaecat magna eiusmod eu dolor eiusmod sint nulla ullamco incididunt pariatur. Anim ea eiusmod dolor Lorem elit commodo esse do fugiat amet esse cillum eu. Ut velit minim mollit do cupidatat dolore nisi reprehenderit est commodo anim mollit in pariatur. Esse commodo laboris amet reprehenderit.\n\nOccaecat ea commodo ullamco consectetur sunt eu officia duis irure. Nostrud laboris voluptate ex labore do dolore non. Aliquip veniam nisi reprehenderit exercitation ut reprehenderit.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(193, "hours"),
        "read": true,
        "starred": true,
        "labels": [],
        "group": "promotions",
        "type": "spam",
        "attachments": ["assets/img/backgrounds/1.jpg"]
    },
    {
        "from": {
            "name": "Hendricks Whitley",
            "mail": "demo@justademomail.com"
        },
        "subject": "Lorem ut sit",
        "content": "Laborum exercitation esse ad elit pariatur ullamco dolor nisi. Magna non ea labore mollit eu fugiat. Qui occaecat nostrud quis veniam ipsum proident ea proident. Officia esse excepteur qui non sit dolore mollit aliqua deserunt officia. Occaecat sit enim fugiat veniam sunt. Quis sit duis do cupidatat cillum officia irure exercitation deserunt.\n\nDeserunt nostrud anim sit aute eiusmod do consequat ipsum proident ex. Do nisi do elit consequat. Mollit aute duis ut quis amet ea excepteur laboris ea deserunt. Cillum fugiat sunt incididunt velit pariatur cillum quis reprehenderit ut ex sunt reprehenderit.\n\nVelit ipsum qui labore ullamco sit do sit cupidatat ea in. Incididunt commodo commodo Lorem qui eiusmod incididunt incididunt irure veniam adipisicing eiusmod adipisicing. Cillum dolore in enim irure enim duis nostrud sit ad qui Lorem. Excepteur amet est dolor minim aliqua commodo consequat labore ea dolore sint commodo magna.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(194, "days"),
        "read": false,
        "starred": false,
        "labels": [],
        "group": "promotions",
        "type": "sent",
        "attachments": ["assets/img/backgrounds/1.jpg"]
    },
    {
        "from": {
            "name": "Herring Palmer",
            "mail": "demo@justademomail.com"
        },
        "subject": "dolor do consectetur",
        "content": "Commodo tempor nisi cupidatat sit laborum duis in sunt et sint. Minim eiusmod incididunt magna anim officia. Commodo officia aliquip incididunt aliquip elit ullamco tempor et ex minim veniam veniam nisi. Dolor sunt eiusmod ipsum laborum Lorem esse eu ullamco amet deserunt non pariatur.\n\nEiusmod et laborum sit irure amet ad occaecat est occaecat voluptate sunt reprehenderit. Eiusmod et labore ut sit aute ut adipisicing. Ea cillum id cupidatat velit non velit. Commodo do esse est adipisicing consequat occaecat cupidatat culpa. Ut ut consectetur velit nulla fugiat ut ex quis nostrud pariatur. Ea ullamco sit aliquip exercitation consequat voluptate laborum enim excepteur ad aute deserunt consectetur.\n\nProident ad tempor reprehenderit eu. Laborum ipsum non eu sit sunt cupidatat quis. Nisi excepteur deserunt veniam quis cillum voluptate deserunt culpa elit aliquip esse et incididunt. Fugiat aliquip est dolore nisi ullamco exercitation anim veniam. Esse aliquip esse dolore esse sunt sint aute aliquip et elit irure. Minim id eiusmod reprehenderit proident qui in non aliqua do adipisicing.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(181, "days"),
        "read": false,
        "starred": false,
        "labels": [],
        "group": "social",
        "type": "draft",
        "attachments": ["assets/img/backgrounds/2.jpg"]
    },
    {
        "from": {
            "name": "Rosa Gallegos",
            "mail": "demo@justademomail.com"
        },
        "subject": "nisi nulla ut",
        "content": "Cupidatat elit aliquip ad velit cupidatat aliqua tempor velit proident. Enim sit commodo consequat pariatur occaecat aliqua ut occaecat tempor quis commodo non officia qui. Aliquip officia excepteur excepteur ea incididunt culpa fugiat consequat esse aliqua velit. Ea enim qui nulla nostrud eu commodo incididunt laboris. In minim dolor occaecat id ut.\n\nVoluptate do voluptate esse aliquip consectetur reprehenderit sit. Ullamco elit amet anim pariatur ea ea sit tempor labore voluptate irure dolore labore do. Ad ut dolor consectetur in aute labore dolore non. Fugiat veniam in incididunt in aliquip commodo ut elit. Consectetur aliqua ea adipisicing amet. Occaecat officia id nisi anim sit. Adipisicing laboris culpa amet nostrud qui mollit sit est esse cillum incididunt.\n\nAdipisicing mollit ad est incididunt in anim nisi eiusmod exercitation enim. Voluptate irure nisi cillum esse aliquip sit elit est. Lorem adipisicing dolor ullamco excepteur minim nostrud elit Lorem nisi in consectetur sunt.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(50, "hours"),
        "read": false,
        "starred": true,
        "labels": [],
        "group": "primary",
        "type": "spam",
        "attachments": ["assets/img/backgrounds/2.jpg"]
    },
    {
        "from": {
            "name": "Candy Kline",
            "mail": "demo@justademomail.com"
        },
        "subject": "reprehenderit et enim",
        "content": "Lorem ea consequat non nisi do do deserunt excepteur do ex. Est laboris nulla officia laborum incididunt pariatur exercitation incididunt. Incididunt minim laboris ex amet est in in. Aliquip aliquip commodo ex dolor quis. Ex commodo magna nostrud tempor occaecat fugiat excepteur et pariatur dolor ut. Officia nulla et eu ipsum proident labore cupidatat laboris. Commodo aliquip esse elit velit cupidatat veniam anim quis nulla officia esse velit proident.\n\nCulpa id non et in commodo et eiusmod do labore. Labore proident id sint et esse mollit officia nisi voluptate occaecat pariatur amet do magna. Ea exercitation irure est magna excepteur consectetur voluptate est quis qui. Aliqua proident duis officia occaecat dolor id culpa ex qui velit ullamco. Nostrud eu duis anim reprehenderit consequat laboris mollit reprehenderit eu esse.\n\nDo nulla magna aute culpa enim qui consequat elit eu enim duis non cupidatat. Aute non ipsum officia consectetur. Sint id quis do irure adipisicing incididunt ea tempor aliqua deserunt consectetur quis fugiat. Officia est eiusmod cillum nostrud reprehenderit occaecat commodo non dolore irure. Eiusmod ut sit labore ea anim cupidatat nostrud ex laborum commodo. Aute reprehenderit reprehenderit ut proident adipisicing eiusmod dolor in veniam.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(148, "minutes"),
        "read": true,
        "starred": false,
        "labels": [],
        "group": "social",
        "type": "spam",
        "attachments": ["assets/img/backgrounds/2.jpg", "assets/img/backgrounds/3.jpg"]
    },
    {
        "from": {
            "name": "Ebony Hart",
            "mail": "demo@justademomail.com"
        },
        "subject": "minim do quis",
        "content": "Sit deserunt enim ex Lorem ullamco pariatur nisi sunt reprehenderit sit labore laborum consectetur reprehenderit. Commodo non laboris in labore amet voluptate est in dolore deserunt. Do enim cillum aliquip fugiat dolor amet excepteur duis magna fugiat ex eiusmod. Cillum officia ipsum laborum consectetur. Mollit commodo dolore deserunt Lorem mollit officia sit do laborum ad. Commodo et excepteur aute consequat sunt fugiat dolore qui veniam enim duis eiusmod sit. Aute qui sint id cillum et proident ad reprehenderit culpa elit.\n\nEst nisi aliquip mollit dolore nulla dolore velit elit pariatur esse. Fugiat enim labore sunt nulla labore sunt in anim officia ad. Do minim pariatur excepteur irure. Pariatur ipsum occaecat esse laborum exercitation non reprehenderit consequat qui ad sunt consequat magna in. Occaecat dolor cupidatat aute amet amet non amet elit ad veniam aute ad. Id Lorem adipisicing consectetur sint magna consequat.\n\nExercitation duis Lorem ea consequat tempor minim nostrud culpa consequat nisi nostrud. Consequat irure consequat occaecat aliqua fugiat aute veniam duis laborum exercitation enim duis voluptate. Enim incididunt ullamco tempor irure amet commodo do Lorem. Deserunt est eu duis nisi do culpa qui fugiat. Sit anim in pariatur et dolore deserunt nostrud cupidatat.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(101, "days"),
        "read": false,
        "starred": true,
        "labels": [],
        "group": "primary",
        "type": "sent",
        "attachments": ["assets/img/backgrounds/1.jpg"]
    },
    {
        "from": {
            "name": "Elba Grimes",
            "mail": "demo@justademomail.com"
        },
        "subject": "pariatur eu sint",
        "content": "Qui consectetur tempor ullamco do in occaecat ullamco magna voluptate ea ea irure. Do labore officia tempor id consectetur cupidatat sit magna. Nisi velit nostrud fugiat labore duis non sint aute ullamco ullamco officia voluptate irure. Mollit minim deserunt ipsum est enim consequat et quis eu in consequat sint cillum sint. Nisi ut excepteur occaecat irure do adipisicing non ad. Amet excepteur elit irure exercitation ullamco sunt laboris enim eiusmod. Ad laboris proident laboris minim aute do adipisicing dolore tempor et.\n\nExercitation eiusmod quis dolor deserunt aliquip amet esse eu anim pariatur cillum. Velit reprehenderit nulla culpa dolore voluptate laboris est exercitation elit aute in. Sint consectetur consequat fugiat magna ullamco officia nisi ut et ea pariatur et est. Sit esse tempor proident elit. Commodo qui eiusmod deserunt tempor ad veniam deserunt. Proident cupidatat pariatur eu nulla.\n\nVelit nostrud aliqua mollit labore adipisicing pariatur cupidatat voluptate Lorem exercitation excepteur dolor. Ex eiusmod nisi sit occaecat. Sint cillum amet et esse dolore consequat consectetur qui anim id laboris est. Officia dolore aliquip amet exercitation ad.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(50, "hours"),
        "read": true,
        "starred": true,
        "labels": [],
        "group": "primary",
        "type": "none",
        "attachments": ["assets/img/backgrounds/2.jpg"]
    },
    {
        "from": {
            "name": "Marjorie Rivas",
            "mail": "demo@justademomail.com"
        },
        "subject": "aliqua id veniam",
        "content": "Officia laborum exercitation nostrud aliquip minim est duis velit veniam eiusmod reprehenderit. Dolor aliqua commodo enim id dolore est ut proident sit dolor ut amet. Ad cillum non consequat non anim. Esse magna in aute culpa et proident culpa reprehenderit ullamco commodo ut excepteur velit. Officia laboris nulla do consequat et culpa aliqua nulla dolor ex. Lorem exercitation dolor qui labore in.\n\nLaborum id Lorem adipisicing pariatur. Ea commodo eu nisi ullamco cupidatat cillum incididunt aute ad incididunt id tempor minim. Ad quis culpa elit et ex in laboris dolore culpa culpa fugiat consequat anim.\n\nEiusmod nostrud duis nostrud do consectetur nostrud do non ullamco nulla ad pariatur. Magna adipisicing culpa laborum labore esse laboris in officia. Labore fugiat Lorem consequat incididunt aute ea aliqua eu pariatur cupidatat.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(112, "days"),
        "read": true,
        "starred": true,
        "labels": [
            {
                "name": "Business",
                "color": "#3E50B4"
            },
            {
                "name": "Priority",
                "color": "#4CA9BB"
            }
        ],
        "group": "promotions",
        "type": "none",
        "attachments": ["assets/img/backgrounds/1.jpg"]
    },
    {
        "from": {
            "name": "Maldonado Bentley",
            "mail": "demo@justademomail.com"
        },
        "subject": "irure velit ex",
        "content": "Proident mollit elit adipisicing voluptate ex eiusmod Lorem aute ipsum incididunt quis qui reprehenderit. Commodo dolore commodo excepteur ea adipisicing cupidatat eiusmod consequat. Enim magna ea sit nulla ipsum fugiat aliqua sit exercitation. Ullamco adipisicing cillum tempor ea cillum. Anim ea do sint id deserunt do consectetur eu enim. Reprehenderit ullamco aliqua veniam sunt aute consequat enim id.\n\nIrure deserunt anim enim laboris qui nulla cillum. Ut ex aliqua non voluptate tempor ipsum pariatur cupidatat est enim sit tempor. Mollit irure veniam anim qui ipsum magna. Consequat in sint ea fugiat id est adipisicing culpa minim labore minim sint labore fugiat.\n\nId aliqua cillum aliqua irure Lorem occaecat consectetur. Consequat duis in ut dolor consectetur aliqua nostrud consectetur officia non aliquip anim. Do nisi magna dolore officia duis consequat reprehenderit sunt minim ea tempor. Reprehenderit minim et anim labore nulla excepteur deserunt minim enim tempor sunt laboris incididunt mollit.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(53, "hours"),
        "read": true,
        "starred": false,
        "labels": [
            {
                "name": "Outreach",
                "color": "#3E50B4"
            }
        ],
        "group": "promotions",
        "type": "sent",
        "attachments": ["assets/img/backgrounds/1.jpg"]
    },
    {
        "from": {
            "name": "Ballard Oneill",
            "mail": "demo@justademomail.com"
        },
        "subject": "proident et esse",
        "content": "Commodo velit quis ex elit anim dolor Lorem magna. Labore ad nulla laboris id exercitation. Nostrud est deserunt esse elit commodo nulla aliqua aute nostrud. Enim ullamco et eiusmod ea mollit Lorem.\n\nDo minim sint sint occaecat ex incididunt veniam. Magna dolore enim eiusmod est officia laborum occaecat ut. Qui duis cupidatat et magna incididunt nostrud esse ex mollit proident Lorem nulla ipsum. Velit adipisicing tempor magna ipsum exercitation commodo anim ut. Do voluptate qui ea esse Lorem dolore quis.\n\nIrure nisi mollit in ea velit irure aliqua. Enim ea consequat fugiat aliqua in aliqua Lorem nostrud adipisicing nulla et ex qui ullamco. Qui Lorem Lorem Lorem minim. In excepteur culpa commodo eu eu ad consectetur pariatur ullamco sunt esse ipsum consequat.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(139, "days"),
        "read": false,
        "starred": false,
        "labels": [
            {
                "name": "Private",
                "color": "#3E50B4"
            }
        ],
        "group": "promotions",
        "type": "none",
        "attachments": ["assets/img/backgrounds/2.jpg"]
    },
    {
        "from": {
            "name": "Strickland Battle",
            "mail": "demo@justademomail.com"
        },
        "subject": "id fugiat velit",
        "content": "Commodo id non anim exercitation sint aliqua culpa esse. Nulla fugiat culpa sit Lorem quis veniam do laborum adipisicing veniam excepteur est velit reprehenderit. Aliqua et id eiusmod excepteur. Officia sunt eu ea velit cupidatat sit mollit incididunt aliqua elit adipisicing incididunt. Lorem consequat elit adipisicing ullamco in ad nostrud do elit enim.\n\nIrure laborum velit excepteur veniam do ex. Veniam aliquip est aute pariatur sint deserunt aliquip culpa sint aliqua. Sint consectetur laboris ea labore excepteur sit ad sit aute sunt elit duis ipsum. Non fugiat officia qui id excepteur ad nostrud sint laboris ipsum esse.\n\nVeniam consectetur ex ipsum magna Lorem sint ut consequat elit deserunt magna ex. Esse proident voluptate proident deserunt commodo proident ea Lorem qui velit do. Ex mollit quis pariatur culpa excepteur. Aliqua tempor ea quis commodo consectetur qui Lorem occaecat. Non nulla reprehenderit tempor irure culpa exercitation esse fugiat ad est aliqua.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(18, "days"),
        "read": false,
        "starred": false,
        "labels": [],
        "group": "social",
        "type": "sent",
        "attachments": ["assets/img/backgrounds/2.jpg"]
    },
    {
        "from": {
            "name": "Tanner Leach",
            "mail": "demo@justademomail.com"
        },
        "subject": "nisi excepteur ex",
        "content": "Elit nisi ut nulla et culpa velit ut quis quis eu qui. Proident voluptate dolor consectetur proident id culpa esse non. Ipsum pariatur ipsum aliqua ex consequat reprehenderit irure est esse. Sunt veniam velit deserunt exercitation Lorem ad et occaecat. Consequat fugiat fugiat nisi adipisicing Lorem laborum in do sunt aute Lorem labore et occaecat. Quis proident in ex tempor. Irure et culpa proident cupidatat do nisi ullamco adipisicing aliqua labore ipsum veniam duis et.\n\nTempor in commodo nostrud deserunt officia. Ipsum deserunt dolor anim do exercitation velit est Lorem nisi officia exercitation velit. Duis anim et mollit exercitation ad laboris ipsum commodo.\n\nLabore elit minim nulla aliquip officia incididunt anim non. Proident dolor velit fugiat in ex sint eu consequat proident anim ipsum veniam sint. Lorem incididunt eu dolore pariatur. Velit magna et occaecat ad eiusmod dolore mollit tempor aliqua laborum sit eu elit et. Sint elit consequat pariatur esse enim tempor esse nisi reprehenderit laboris esse sit eu aliqua.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(42, "days"),
        "read": true,
        "starred": false,
        "labels": [],
        "group": "promotions",
        "type": "spam",
        "attachments": ["assets/img/backgrounds/2.jpg"]
    },
    {
        "from": {
            "name": "Kimberly Weaver",
            "mail": "demo@justademomail.com"
        },
        "subject": "exercitation ea pariatur",
        "content": "Do aliquip est consequat id adipisicing dolor cillum exercitation proident fugiat occaecat. Ex mollit aliquip dolor sit qui cillum non. Commodo officia Lorem excepteur aliqua cillum aliqua nisi dolore deserunt laboris officia.\n\nEu elit enim excepteur aliqua occaecat. Pariatur consequat nostrud in reprehenderit mollit cupidatat anim elit amet. Eu proident cupidatat ut labore. Eiusmod reprehenderit voluptate quis eiusmod nostrud voluptate quis et incididunt amet. Dolor sit eiusmod Lorem officia ad ad ad est duis dolor nulla. Laboris eiusmod cupidatat commodo pariatur esse enim. Consectetur culpa amet minim labore.\n\nLaboris enim adipisicing tempor reprehenderit tempor et laboris sit pariatur velit sint quis non. Quis veniam fugiat cillum sit est nisi ex incididunt exercitation labore esse. Sint ea tempor minim nulla eiusmod nisi tempor voluptate adipisicing. Minim dolor commodo consequat incididunt consequat adipisicing cupidatat ullamco tempor pariatur dolore do.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(165, "days"),
        "read": false,
        "starred": true,
        "labels": [],
        "group": "promotions",
        "type": "sent",
        "attachments": ["assets/img/backgrounds/2.jpg", "assets/img/backgrounds/3.jpg"]
    },
    {
        "from": {
            "name": "Addie Barber",
            "mail": "demo@justademomail.com"
        },
        "subject": "eiusmod elit sunt",
        "content": "Labore veniam nisi non cupidatat nostrud enim ullamco esse culpa nostrud laboris labore voluptate duis. Ex deserunt proident Lorem reprehenderit ut. Tempor irure anim ad sit dolore in cillum ut proident et. Eiusmod officia irure deserunt occaecat anim ullamco ex enim adipisicing tempor occaecat ut reprehenderit. Fugiat labore voluptate adipisicing elit nisi voluptate proident qui sunt. Enim culpa aliqua reprehenderit qui.\n\nMinim tempor minim ex duis aliqua id enim do aute laboris nisi dolore dolor quis. Ea nisi amet ea pariatur culpa non ullamco do cupidatat aliqua qui commodo nulla. Fugiat excepteur mollit adipisicing eu aliqua veniam in non ullamco laborum. Elit nulla elit adipisicing elit aliqua dolore non consectetur. Ut ullamco consectetur consequat eiusmod consequat eu tempor aliquip ex veniam pariatur in. Ullamco tempor ullamco nisi ad reprehenderit. Culpa eiusmod exercitation in labore incididunt esse.\n\nVeniam qui fugiat anim aute ullamco cillum laborum do amet esse occaecat eu ea labore. Et nisi laboris et in ex nulla consectetur Lorem cillum consequat minim nisi reprehenderit elit. Incididunt excepteur eu tempor enim excepteur in minim.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(100, "days"),
        "read": false,
        "starred": false,
        "labels": [],
        "group": "promotions",
        "type": "spam",
        "attachments": ["assets/img/backgrounds/1.jpg"]
    },
    {
        "from": {
            "name": "Dodson Steele",
            "mail": "demo@justademomail.com"
        },
        "subject": "officia pariatur do",
        "content": "Non aliqua aliquip excepteur labore ad. Aute laborum mollit magna esse ad aliqua nostrud nostrud cupidatat est consequat. Quis tempor sint in elit proident nisi cupidatat et voluptate reprehenderit. Cillum pariatur nostrud sint duis ex Lorem culpa duis commodo mollit ea veniam labore. Id cillum pariatur incididunt elit nostrud aute eu aute sunt dolor. Commodo sit voluptate do laboris consequat ad reprehenderit. Officia consectetur reprehenderit ut pariatur incididunt laboris velit laborum elit.\n\nDolor culpa sit adipisicing nostrud excepteur aliquip dolore aute ad ullamco cillum cillum. Quis eiusmod ut cillum qui commodo reprehenderit ipsum pariatur. Aute tempor est nisi tempor occaecat proident. Est culpa eiusmod mollit excepteur officia enim reprehenderit qui anim magna amet cillum. Et mollit eu Lorem eu ad aliqua quis enim velit elit.\n\nConsequat in deserunt culpa cupidatat proident. Occaecat aliqua ex aute ut nostrud fugiat voluptate ea ipsum. Consectetur laborum aute excepteur nisi voluptate tempor non excepteur amet exercitation incididunt.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(154, "minutes"),
        "read": false,
        "starred": true,
        "labels": [],
        "group": "primary",
        "type": "trash",
        "attachments": ["assets/img/backgrounds/1.jpg"]
    },
    {
        "from": {
            "name": "Rena Hanson",
            "mail": "demo@justademomail.com"
        },
        "subject": "deserunt aliqua dolore",
        "content": "Aliquip esse ullamco culpa ullamco irure deserunt velit non enim id ipsum. Amet laborum ipsum enim nostrud est ad. Fugiat cupidatat deserunt enim anim do quis dolore ad duis laboris consequat eiusmod aliquip ipsum. Et nostrud deserunt et ex. Cillum voluptate laborum proident sit deserunt consectetur labore.\n\nConsectetur adipisicing officia ea ipsum dolor qui Lorem veniam ullamco incididunt dolore do pariatur dolore. Voluptate aliquip esse quis labore esse sit quis ullamco irure veniam consequat sit Lorem. Adipisicing consectetur enim nulla excepteur. Incididunt proident ullamco laborum laboris mollit pariatur anim quis est. Ex sunt aliquip esse reprehenderit et nulla cillum duis qui cillum velit laboris ea.\n\nDuis consequat reprehenderit in aute dolor enim. Est et do cupidatat commodo dolor excepteur anim aliqua sunt. Velit reprehenderit consectetur magna excepteur et enim duis elit reprehenderit eu fugiat proident qui nulla. Duis laboris deserunt magna culpa duis eiusmod Lorem voluptate ea. Magna tempor adipisicing labore in id magna proident ad excepteur voluptate esse eu. Eu sunt cillum amet ut laborum quis. Tempor cupidatat aliquip elit sint et incididunt occaecat.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(47, "days"),
        "read": true,
        "starred": false,
        "labels": [],
        "group": "social",
        "type": "sent",
        "attachments": ["assets/img/backgrounds/2.jpg", "assets/img/backgrounds/3.jpg"]
    },
    {
        "from": {
            "name": "Charity Cole",
            "mail": "demo@justademomail.com"
        },
        "subject": "ut ullamco duis",
        "content": "Nisi velit id reprehenderit velit exercitation sunt. Nostrud ipsum occaecat consequat anim mollit laboris ut laborum minim. Amet cillum veniam aute cupidatat incididunt labore in nostrud adipisicing. Id qui nulla et pariatur labore incididunt cillum tempor commodo adipisicing laboris duis consectetur. Aute non Lorem veniam culpa occaecat non quis est. Elit deserunt do proident ut nulla duis incididunt velit pariatur enim veniam ex. Cillum ullamco dolore excepteur non elit esse id in consequat nisi veniam eu elit.\n\nNostrud esse incididunt duis aliquip. Id mollit quis tempor mollit. Magna amet qui in elit cupidatat do mollit exercitation minim qui aute dolor ea. Adipisicing adipisicing do nulla labore in sint Lorem occaecat ad cupidatat occaecat qui labore ea.\n\nIn sunt eu cillum elit aliqua. Amet tempor culpa non in adipisicing aliquip ipsum sint occaecat labore veniam consectetur irure ut. Tempor eiusmod qui cupidatat adipisicing aliquip ad proident minim laboris enim. Aute anim mollit occaecat dolore consequat nostrud anim.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(187, "days"),
        "read": false,
        "starred": false,
        "labels": [],
        "group": "primary",
        "type": "trash",
        "attachments": ["assets/img/backgrounds/2.jpg", "assets/img/backgrounds/3.jpg"]
    },
    {
        "from": {
            "name": "Lewis Sandoval",
            "mail": "demo@justademomail.com"
        },
        "subject": "anim esse exercitation",
        "content": "Eu tempor ea cupidatat adipisicing irure. Ut aute elit in eiusmod dolore cillum enim reprehenderit consectetur. Dolore anim magna aliquip anim mollit nulla reprehenderit id magna amet.\n\nDolore reprehenderit in id consequat esse ipsum minim consectetur nisi. Laborum duis in dolore exercitation magna culpa labore aliqua veniam nulla est. In mollit anim laboris incididunt.\n\nCupidatat aute ex dolore culpa tempor incididunt in eu voluptate duis ipsum id duis. Occaecat aliqua proident sunt minim veniam dolor sint. Magna exercitation minim veniam amet qui. Enim qui irure aute eu minim magna nisi sunt consequat velit irure velit ea duis.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(155, "minutes"),
        "read": false,
        "starred": true,
        "labels": [],
        "group": "primary",
        "type": "spam",
        "attachments": ["assets/img/backgrounds/1.jpg"]
    },
    {
        "from": {
            "name": "Brittney Maynard",
            "mail": "demo@justademomail.com"
        },
        "subject": "consequat dolor sint",
        "content": "Ullamco non amet enim non laborum aliquip cillum. Esse ad dolore pariatur qui proident in minim nisi nostrud ex velit sunt. Voluptate sunt labore deserunt consectetur adipisicing ad minim. Consequat qui ea commodo laborum anim ipsum dolore deserunt et culpa. Est culpa aliquip minim laborum enim ea laboris excepteur consectetur nostrud aliquip. Incididunt ea laboris voluptate ex aliquip eiusmod exercitation.\n\nCillum do commodo deserunt esse mollit aliqua ullamco occaecat sint. Laboris qui nisi irure cillum sit nulla veniam adipisicing veniam laborum deserunt. Sint labore minim ex pariatur proident exercitation eiusmod ea. Cupidatat culpa in ullamco et culpa enim aliqua aliquip nulla ipsum. Cupidatat eiusmod do id irure sunt do.\n\nEsse pariatur et ex pariatur. Esse nisi quis eiusmod aliquip duis ullamco ullamco et nulla qui. Officia velit irure fugiat esse commodo.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(154, "minutes"),
        "read": true,
        "starred": true,
        "labels": [],
        "group": "primary",
        "type": "draft",
        "attachments": ["assets/img/backgrounds/2.jpg"]
    },
    {
        "from": {
            "name": "Kim Garrison",
            "mail": "demo@justademomail.com"
        },
        "subject": "adipisicing quis ex",
        "content": "Esse cillum voluptate mollit deserunt aute. Cupidatat duis aliqua eu dolor nulla ad anim aliquip. Labore ex proident consectetur ad nostrud laborum sint aute anim voluptate amet veniam ex. Lorem consectetur tempor nulla reprehenderit. Elit reprehenderit sit sit laboris.\n\nNisi mollit ex consectetur nulla enim est. Sit fugiat mollit elit est deserunt. Voluptate sint ea ad aliquip ex exercitation mollit nulla et sunt dolor consequat aute aliqua. Labore culpa ipsum ullamco aute dolore adipisicing adipisicing cillum ut excepteur est dolor excepteur.\n\nExercitation consequat enim quis tempor fugiat esse sit et pariatur sunt adipisicing ad cillum incididunt. Ea est dolore in consectetur mollit consequat proident commodo. Mollit velit Lorem veniam qui nulla est labore anim ipsum nulla laboris excepteur labore amet. Fugiat nostrud ipsum aliqua excepteur nostrud adipisicing elit ad aute est velit incididunt commodo proident. Quis laborum labore nisi Lorem ipsum anim quis laboris ut velit esse consectetur aute dolore. Ad amet ea consectetur cillum.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(73, "minutes"),
        "read": false,
        "starred": false,
        "labels": [],
        "group": "social",
        "type": "draft",
        "attachments": ["assets/img/backgrounds/2.jpg", "assets/img/backgrounds/3.jpg"]
    },
    {
        "from": {
            "name": "Huffman Neal",
            "mail": "demo@justademomail.com"
        },
        "subject": "culpa quis non",
        "content": "Eiusmod id ipsum proident officia magna. Aute veniam ex ullamco eiusmod dolore fugiat sint culpa voluptate. Sit fugiat labore veniam sit. Laboris sint Lorem adipisicing deserunt excepteur ex duis deserunt id elit adipisicing adipisicing. Non pariatur eiusmod sit quis elit minim laboris nisi in exercitation. Deserunt sint Lorem minim consequat officia.\n\nProident nostrud qui ad sunt ut labore culpa proident. Elit qui officia adipisicing fugiat mollit mollit ex eiusmod eiusmod nostrud exercitation proident. Excepteur amet occaecat eiusmod aliquip culpa ex aute anim nostrud commodo exercitation ullamco. Irure magna do commodo eu Lorem nulla sint laborum laborum adipisicing laboris consectetur anim. Veniam nulla nostrud nisi ex. Veniam aliqua esse aliqua occaecat proident ipsum minim velit excepteur.\n\nUt ut mollit proident nisi sunt nulla. Voluptate esse aute officia anim id cupidatat. Velit voluptate consectetur mollit laborum ut culpa reprehenderit est reprehenderit fugiat dolore voluptate. Dolor aliqua et id nisi magna ad excepteur cupidatat aliquip ut anim.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(77, "hours"),
        "read": false,
        "starred": false,
        "labels": [],
        "group": "primary",
        "type": "draft",
        "attachments": ["assets/img/backgrounds/2.jpg", "assets/img/backgrounds/3.jpg"]
    },
    {
        "from": {
            "name": "Vanessa Ramos",
            "mail": "demo@justademomail.com"
        },
        "subject": "laborum do aute",
        "content": "Ullamco et excepteur aliqua excepteur. Adipisicing id aliquip excepteur ipsum nisi mollit tempor ut Lorem. Non Lorem veniam incididunt anim mollit nostrud do fugiat sit anim est amet. Pariatur culpa quis sit irure nisi aute sit labore consequat commodo aliqua deserunt consectetur ipsum. Dolore est ea fugiat voluptate aliquip Lorem officia ad cupidatat ipsum laborum officia labore magna.\n\nMollit mollit est in eiusmod id amet occaecat eu culpa eu laboris non ea. Ad sunt mollit aute sunt elit ea. Exercitation fugiat occaecat elit ut ex deserunt id irure officia ut eu. Qui Lorem reprehenderit nulla labore officia tempor occaecat ut sunt ad officia aliqua consectetur enim. Fugiat elit laborum non occaecat reprehenderit ex ex pariatur non. Do ipsum velit proident eiusmod esse velit ipsum aute occaecat consequat excepteur irure reprehenderit.\n\nNulla Lorem occaecat pariatur magna quis. Duis tempor sit sunt quis dolore. Do eiusmod magna cillum irure culpa sit tempor laborum ipsum do. Eu laboris duis ea nisi minim ex eu veniam. Amet dolor veniam aliqua amet proident non commodo voluptate magna in anim laboris ipsum laborum. Duis minim qui Lorem laborum enim pariatur. Eu laboris ullamco minim culpa labore deserunt laboris cupidatat sit excepteur fugiat non nisi.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(6, "days"),
        "read": true,
        "starred": false,
        "labels": [],
        "group": "promotions",
        "type": "trash",
        "attachments": ["assets/img/backgrounds/2.jpg"]
    },
    {
        "from": {
            "name": "Hodges Obrien",
            "mail": "demo@justademomail.com"
        },
        "subject": "enim adipisicing consequat",
        "content": "Ex labore ut esse amet incididunt excepteur tempor mollit do duis non culpa sint tempor. Sit Lorem ea incididunt dolore sint eiusmod sint voluptate occaecat cillum dolor commodo duis. Aliquip Lorem voluptate quis fugiat adipisicing fugiat dolore ad consequat sunt exercitation. Amet non elit cupidatat velit ullamco ullamco id nisi ea. Duis ipsum eu sunt do non ad in incididunt sunt aliquip ut do pariatur est. Est sit mollit irure laboris labore dolor ut ullamco do eu tempor aliqua quis commodo. Ipsum sint ex deserunt cillum magna.\n\nEiusmod exercitation commodo cupidatat ipsum est laborum occaecat voluptate consequat sit adipisicing ipsum ex non. Labore exercitation velit laboris amet ipsum. Veniam laboris eu exercitation nostrud exercitation laboris eu exercitation velit commodo. Sit adipisicing velit velit qui consectetur.\n\nIncididunt eiusmod consequat dolor minim velit cupidatat aute exercitation cillum occaecat. Mollit culpa occaecat amet nulla. Nulla amet ullamco in excepteur velit non. Nostrud eiusmod ea anim esse Lorem sint cupidatat pariatur qui sunt consectetur.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(6, "minutes"),
        "read": false,
        "starred": false,
        "labels": [],
        "group": "primary",
        "type": "none",
        "attachments": ["assets/img/backgrounds/1.jpg"]
    },
    {
        "from": {
            "name": "Rosalind Meadows",
            "mail": "demo@justademomail.com"
        },
        "subject": "exercitation commodo excepteur",
        "content": "Qui quis labore ullamco reprehenderit excepteur fugiat. Eiusmod quis veniam tempor pariatur exercitation sit. In tempor dolor non incididunt aliqua non ex nisi ipsum cupidatat ad deserunt commodo mollit.\n\nExercitation do Lorem adipisicing velit ullamco velit fugiat Lorem nulla labore proident. In eu minim cupidatat aliquip laborum. Fugiat minim deserunt ipsum culpa consectetur elit mollit aute proident ipsum deserunt veniam officia. Aliquip in amet ad aliqua officia cillum dolor culpa labore adipisicing sunt laborum. Irure in ipsum reprehenderit enim laborum anim magna ex dolore. Velit ad pariatur cupidatat dolore ut sint. Exercitation enim sunt magna dolor.\n\nIpsum voluptate aute aliquip aliquip veniam velit ad. Sint non sint sint et consectetur commodo magna. Non consectetur amet laborum ullamco aliqua culpa dolor nostrud esse do sint tempor Lorem adipisicing. Ex ullamco reprehenderit ut ullamco aliquip do aliquip.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(39, "days"),
        "read": false,
        "starred": true,
        "labels": [
            {
                "name": "Private",
                "color": "red"
            }
        ],
        "group": "primary",
        "type": "spam",
        "attachments": ["assets/img/backgrounds/2.jpg"]
    },
    {
        "from": {
            "name": "Alice Brock",
            "mail": "demo@justademomail.com"
        },
        "subject": "aute duis nisi",
        "content": "Culpa amet amet ut duis eu nostrud adipisicing magna do. Sunt anim tempor sit eiusmod velit minim. Nulla fugiat Lorem dolore nostrud ipsum minim in minim. Dolore Lorem officia laboris Lorem aliquip enim ex cillum consectetur tempor proident officia laborum duis.\n\nExercitation nulla do aliquip et eiusmod nisi veniam officia est Lorem eu adipisicing anim tempor. Incididunt adipisicing quis sit sunt. Duis irure eu ullamco pariatur ad Lorem velit. Et cupidatat id labore eiusmod magna et. Dolore sit et anim laboris cupidatat eu deserunt esse Lorem elit esse consectetur amet tempor.\n\nAliqua dolor officia ut eu pariatur mollit irure. Aliquip enim ex et in voluptate nisi ea velit deserunt veniam fugiat cillum proident fugiat. Duis enim fugiat tempor consequat laboris mollit est ad id aute dolore. Labore consequat ad dolore laborum anim tempor. Labore officia ex consequat ex dolore est adipisicing.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(140, "days"),
        "read": true,
        "starred": false,
        "labels": [],
        "group": "primary",
        "type": "none",
        "attachments": ["assets/img/backgrounds/2.jpg", "assets/img/backgrounds/3.jpg"]
    },
    {
        "from": {
            "name": "Fry Berg",
            "mail": "demo@justademomail.com"
        },
        "subject": "et incididunt incididunt",
        "content": "Cupidatat ullamco sint cillum cupidatat ea id. Lorem proident aliquip labore quis consectetur sint qui eiusmod esse est. Laborum qui laborum ea eu eiusmod magna labore consectetur duis amet. Sit voluptate esse nulla labore adipisicing voluptate. Velit qui qui adipisicing qui consequat culpa voluptate eiusmod excepteur eiusmod cillum. Cillum cupidatat laborum irure et irure eiusmod deserunt fugiat elit consequat dolore voluptate. Excepteur eu aliqua irure velit laboris Lorem reprehenderit qui mollit nostrud.\n\nDo aliqua proident aliqua officia eu veniam Lorem nulla amet non magna nostrud. Aute incididunt labore magna ex ipsum elit in in ad ex velit cupidatat incididunt pariatur. Ad incididunt deserunt occaecat reprehenderit sint aliquip cillum ea deserunt irure. Est fugiat minim velit laborum ipsum sunt velit ex minim eu cupidatat exercitation ea. Ex ea excepteur consequat deserunt enim.\n\nCulpa anim magna et consequat non. Reprehenderit aliquip et do nulla dolore ut consectetur reprehenderit cillum ut sit cupidatat est. Enim eu Lorem quis elit sunt cupidatat labore culpa nisi tempor commodo. Consectetur adipisicing dolor mollit ad tempor irure. Aute qui id voluptate non tempor Lorem nostrud sit minim sint cillum cillum est Lorem.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(165, "hours"),
        "read": true,
        "starred": true,
        "labels": [],
        "group": "social",
        "type": "none",
        "attachments": ["assets/img/backgrounds/2.jpg"]
    },
    {
        "from": {
            "name": "Josefina Romero",
            "mail": "demo@justademomail.com"
        },
        "subject": "et tempor occaecat",
        "content": "Aliqua ex eu veniam duis aute mollit amet commodo aliquip excepteur. Magna et esse ea qui mollit reprehenderit eu minim Lorem. Et laborum laboris fugiat dolor excepteur adipisicing consequat ea amet laboris dolor. Ex anim laboris occaecat cillum aliquip tempor enim tempor dolor cupidatat duis ipsum. Sint quis excepteur minim elit sint aute.\n\nTempor eiusmod ut culpa nulla voluptate reprehenderit aliqua laborum consequat ipsum esse nisi. Occaecat do velit consectetur fugiat proident cillum nulla nulla pariatur. Do sint voluptate adipisicing consequat enim excepteur adipisicing esse quis magna sit et.\n\nAliqua sunt in occaecat non ullamco minim irure enim adipisicing pariatur ut consequat voluptate. Aliqua aliquip enim incididunt dolore consectetur veniam proident minim est dolor minim sint consectetur. Irure enim dolor ut eiusmod reprehenderit sit.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(31, "days"),
        "read": true,
        "starred": true,
        "labels": [
            {
                "name": "Business",
                "color": "#4CA9BB"
            }
        ],
        "group": "primary",
        "type": "sent",
        "attachments": ["assets/img/backgrounds/1.jpg"]
    },
    {
        "from": {
            "name": "Daisy Gallagher",
            "mail": "demo@justademomail.com"
        },
        "subject": "quis sunt magna",
        "content": "Et cupidatat elit reprehenderit ex laborum enim proident aliqua aliquip est. Reprehenderit dolor ad veniam laborum. Ipsum nostrud elit duis consequat incididunt. Tempor nisi excepteur mollit incididunt ea ipsum amet sunt. Non velit proident consequat duis enim commodo ipsum esse minim. Ea aute pariatur do qui sit non magna consequat do. Duis laboris aliquip labore ea adipisicing cupidatat quis dolore elit eiusmod qui.\n\nOccaecat ut commodo consequat nisi nisi culpa. Pariatur consectetur duis proident laboris dolor mollit esse ea culpa deserunt. In sint nostrud sunt do magna elit. Cupidatat excepteur labore est occaecat dolor velit cillum duis ad. Velit irure sit enim eiusmod ad aute exercitation laborum magna. Sit anim ex esse cupidatat consequat est.\n\nEnim eiusmod dolor nostrud elit aliquip officia dolore cillum pariatur sint sunt amet elit aliqua. Officia sint culpa irure consequat elit est irure officia reprehenderit adipisicing est amet cupidatat. Magna mollit officia voluptate commodo duis et quis nostrud. Lorem pariatur ullamco elit aute voluptate do qui incididunt excepteur mollit. Lorem ut amet laborum magna pariatur proident cupidatat nulla. Elit qui irure tempor ad veniam nulla occaecat sunt id elit irure exercitation. Consequat qui tempor sit laboris dolor.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(66, "hours"),
        "read": true,
        "starred": true,
        "labels": [],
        "group": "social",
        "type": "none",
        "attachments": ["assets/img/backgrounds/1.jpg"]
    },
    {
        "from": {
            "name": "Schwartz Patterson",
            "mail": "demo@justademomail.com"
        },
        "subject": "et est est",
        "content": "Ipsum reprehenderit esse ex tempor reprehenderit. Deserunt adipisicing veniam Lorem laboris tempor nulla tempor. Nulla mollit nulla enim culpa eu laborum et aute. Amet sit esse excepteur voluptate pariatur labore dolore nostrud occaecat laboris exercitation duis fugiat.\n\nAliquip labore voluptate ullamco in irure nisi anim dolor adipisicing ut nulla proident labore est. Pariatur sunt amet aliquip irure aliquip esse do nostrud anim esse cupidatat fugiat eiusmod. Quis et aliquip excepteur nulla ut in irure.\n\nExcepteur irure dolore consectetur nulla ad aliquip in irure deserunt commodo laboris ea exercitation. In ad incididunt irure laboris voluptate cupidatat sunt. Duis duis mollit incididunt irure eu sunt esse. Id ullamco enim labore reprehenderit laboris sunt exercitation quis excepteur dolore. Est ex dolore est ullamco laboris cillum qui cillum ad consequat ad nulla reprehenderit esse. Lorem voluptate incididunt magna in consequat. Laborum velit amet minim ullamco Lorem duis culpa pariatur.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(200, "minutes"),
        "read": true,
        "starred": true,
        "labels": [],
        "group": "promotions",
        "type": "draft",
        "attachments": ["assets/img/backgrounds/2.jpg"]
    },
    {
        "from": {
            "name": "Lavonne Sykes",
            "mail": "demo@justademomail.com"
        },
        "subject": "nulla deserunt occaecat",
        "content": "Velit duis commodo aliquip officia duis ad nulla aliqua officia enim dolore excepteur sit velit. Velit fugiat amet occaecat nulla nostrud ipsum. Labore adipisicing irure eu veniam. Ad nostrud incididunt adipisicing cillum veniam adipisicing enim qui aliquip ad incididunt deserunt excepteur quis. Amet quis laboris cillum ad tempor ullamco eiusmod proident ullamco dolor ipsum velit.\n\nLorem elit quis consectetur culpa ex. Eiusmod cupidatat sit ea sunt non incididunt pariatur do sunt Lorem dolore. Excepteur aliqua proident aliqua excepteur aliqua excepteur amet deserunt esse officia pariatur aliqua eiusmod minim. Nulla nostrud et dolore cillum laboris sit. Dolore non officia cupidatat amet magna officia culpa reprehenderit consequat amet deserunt do officia. Consequat id magna amet reprehenderit Lorem.\n\nEsse laborum irure consequat qui enim ipsum velit aute quis do nisi qui. Nostrud sit commodo do in sunt amet sit aliquip cillum deserunt cupidatat sint anim. In minim Lorem officia cupidatat. Mollit sit id consectetur Lorem esse culpa culpa deserunt elit duis sint sint pariatur. Quis sunt labore et occaecat esse nisi elit Lorem esse et. Minim qui esse eu do voluptate aute qui ex dolor magna.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(135, "hours"),
        "read": false,
        "starred": true,
        "labels": [],
        "group": "social",
        "type": "none",
        "attachments": ["assets/img/backgrounds/1.jpg"]
    },
    {
        "from": {
            "name": "Hester Haney",
            "mail": "demo@justademomail.com"
        },
        "subject": "excepteur cupidatat est",
        "content": "Non consequat fugiat do quis eiusmod exercitation culpa amet fugiat. Tempor aute consectetur quis esse id non eu mollit. Ad laboris laboris consectetur eu duis anim culpa non id aliquip ullamco.\n\nExercitation in veniam non veniam reprehenderit dolor ut. Ullamco sint voluptate magna aliqua qui. Cupidatat commodo do quis amet reprehenderit ullamco elit nulla non velit. Consequat culpa voluptate cillum officia laboris reprehenderit nisi occaecat qui deserunt velit id fugiat.\n\nSint laborum veniam anim culpa labore cillum est eu ex excepteur laboris exercitation laborum. Deserunt ipsum ad aliqua nostrud aliquip quis sint labore culpa exercitation deserunt culpa. Pariatur eu excepteur id irure reprehenderit excepteur pariatur quis eu. Do culpa sit duis velit ipsum irure amet in dolor. Proident laborum excepteur qui non officia est voluptate nulla duis veniam culpa amet minim.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(54, "days"),
        "read": false,
        "starred": false,
        "labels": [],
        "group": "promotions",
        "type": "none",
        "attachments": ["assets/img/backgrounds/2.jpg", "assets/img/backgrounds/3.jpg"]
    },
    {
        "from": {
            "name": "Daugherty George",
            "mail": "demo@justademomail.com"
        },
        "subject": "aliquip aliquip ex",
        "content": "Ut officia ex ad consequat ex eiusmod Lorem voluptate consectetur excepteur ex. Sunt dolor aute cillum eiusmod do anim. Aliqua est nostrud aute ad sint esse qui minim ut consequat id. Non in laborum quis adipisicing est deserunt dolor pariatur esse esse cupidatat dolore commodo nisi. Ipsum eu sit qui quis non fugiat qui magna amet do Lorem.\n\nLaboris pariatur minim ut mollit exercitation. Elit reprehenderit ut velit aliquip proident voluptate dolore tempor labore sunt. Sint nostrud ad incididunt ea do ipsum. Esse elit adipisicing dolore esse esse magna laborum sit id sint do. Adipisicing qui anim voluptate quis enim exercitation. Exercitation tempor aliqua laboris amet qui deserunt dolor Lorem nostrud pariatur cupidatat laborum anim. Pariatur velit laboris sit in aliqua elit incididunt ipsum.\n\nMagna magna eiusmod aute sit sit aliqua pariatur incididunt reprehenderit proident. Laborum elit dolore ipsum proident et mollit anim quis officia quis laboris. Ea ullamco elit mollit eiusmod id magna et deserunt ad officia incididunt nostrud.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(25, "minutes"),
        "read": true,
        "starred": false,
        "labels": [],
        "group": "primary",
        "type": "none",
        "attachments": ["assets/img/backgrounds/1.jpg"]
    },
    {
        "from": {
            "name": "Leola Schneider",
            "mail": "demo@justademomail.com"
        },
        "subject": "Lorem excepteur duis",
        "content": "Veniam ullamco eiusmod reprehenderit cupidatat consectetur proident officia consectetur. Aute tempor enim reprehenderit dolore id nostrud commodo officia culpa qui esse. Voluptate minim occaecat pariatur aliquip velit consequat enim ut ullamco in excepteur minim voluptate Lorem.\n\nMollit amet proident consectetur anim non. Duis officia occaecat do sit. Anim qui laborum laborum quis sit aliquip id. Consequat laborum mollit qui sit officia commodo sunt.\n\nConsectetur exercitation exercitation laborum proident quis non. Nostrud duis aute voluptate deserunt. Exercitation laborum sit cupidatat nisi non. Commodo incididunt Lorem in adipisicing occaecat enim nisi ad id et ea dolore.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(133, "hours"),
        "read": false,
        "starred": true,
        "labels": [],
        "group": "primary",
        "type": "none",
        "attachments": ["assets/img/backgrounds/1.jpg"]
    },
    {
        "from": {
            "name": "Sims Mcguire",
            "mail": "demo@justademomail.com"
        },
        "subject": "ipsum minim do",
        "content": "Aute tempor amet aute adipisicing. Cupidatat deserunt culpa laboris anim in eu in qui culpa ipsum. Dolore in cupidatat quis non ut ullamco cillum tempor. Anim pariatur consequat exercitation nisi nulla.\n\nNon laboris anim pariatur labore reprehenderit officia irure in ipsum. Ipsum non amet sunt mollit proident. Incididunt sit amet laboris mollit. Qui qui elit incididunt nostrud ea officia consequat eiusmod reprehenderit id dolor amet.\n\nAd culpa fugiat quis voluptate mollit consectetur occaecat occaecat id. Aute ad pariatur eiusmod veniam eu minim culpa commodo commodo ex cillum deserunt. Velit ex laboris culpa ad eiusmod anim aliqua Lorem amet commodo ipsum consectetur do duis. Qui in aute qui aliquip duis dolor veniam excepteur nostrud pariatur commodo eu incididunt. Consectetur nisi ipsum proident reprehenderit. Ipsum proident sint voluptate deserunt magna ad ipsum aliquip fugiat enim exercitation exercitation cupidatat. Irure aliquip culpa consectetur Lorem nulla magna nostrud laborum irure.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(70, "hours"),
        "read": false,
        "starred": false,
        "labels": [
            {
                "name": "Project X",
                "color": "red"
            }
        ],
        "group": "promotions",
        "type": "draft",
        "attachments": ["assets/img/backgrounds/2.jpg"]
    },
    {
        "from": {
            "name": "Evangelina Fleming",
            "mail": "demo@justademomail.com"
        },
        "subject": "ad ut excepteur",
        "content": "Occaecat aute ea non fugiat amet esse eu cillum commodo ea dolor et. Dolor proident nulla dolore adipisicing nisi. Esse adipisicing velit nulla velit sunt anim magna deserunt voluptate eu enim deserunt.\n\nFugiat consectetur exercitation non est. Magna exercitation nulla do commodo veniam anim. Esse incididunt tempor voluptate excepteur ea. Deserunt reprehenderit mollit adipisicing sit deserunt enim dolor officia labore magna consequat ea nostrud. Excepteur ex esse veniam deserunt sint eiusmod. Nisi amet sunt labore occaecat voluptate excepteur. Sit cupidatat est pariatur exercitation esse irure sit tempor deserunt non cupidatat velit consequat laboris.\n\nAnim labore duis ut sunt sunt ut enim consectetur exercitation ipsum et nisi. Tempor consequat tempor ullamco proident nostrud anim. Minim adipisicing irure cupidatat nisi dolor aliquip voluptate cillum do sit ea dolor nulla. Consequat fugiat magna consectetur magna. Ullamco esse mollit exercitation mollit proident do magna ullamco non duis exercitation culpa et. Ullamco eiusmod mollit reprehenderit eiusmod qui irure id irure velit veniam nulla fugiat commodo id. Nostrud ipsum aliqua esse ipsum consequat nisi pariatur reprehenderit culpa anim ipsum.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(185, "minutes"),
        "read": false,
        "starred": false,
        "labels": [],
        "group": "promotions",
        "type": "trash",
        "attachments": ["assets/img/backgrounds/2.jpg", "assets/img/backgrounds/3.jpg"]
    },
    {
        "from": {
            "name": "David Vaughn",
            "mail": "demo@justademomail.com"
        },
        "subject": "culpa id commodo",
        "content": "Incididunt laboris enim irure id commodo. Nisi velit occaecat voluptate deserunt. Nulla laboris do ut non sint cupidatat enim. Anim commodo duis nisi et reprehenderit sint adipisicing magna enim commodo velit nulla. Labore in aliqua incididunt aliquip reprehenderit laborum sint nisi. Nulla dolor ea labore in ex. Sint ex esse quis in Lorem est dolore eu do in excepteur anim adipisicing nostrud.\n\nMagna et proident occaecat sunt sit minim est nisi laborum irure veniam in. Sunt sint laborum anim quis dolore anim nostrud ut dolor amet nulla non exercitation. Consequat quis ad tempor reprehenderit est officia ullamco ea pariatur mollit aliqua incididunt. Id voluptate veniam nisi laborum quis magna sit eiusmod et dolor nulla. Sit ex consequat aute cupidatat et aliquip exercitation.\n\nNon in magna elit proident aute aliquip et enim sint ullamco eu. Proident fugiat aliquip et dolor. Occaecat ut eu cupidatat aute enim irure cupidatat aute ipsum ullamco voluptate deserunt id cillum.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(15, "hours"),
        "read": true,
        "starred": true,
        "labels": [],
        "group": "primary",
        "type": "spam",
        "attachments": ["assets/img/backgrounds/1.jpg"]
    },
    {
        "from": {
            "name": "Jenna Sanchez",
            "mail": "demo@justademomail.com"
        },
        "subject": "tempor aute sint",
        "content": "Ex nulla consequat velit commodo commodo enim ipsum magna cupidatat exercitation excepteur ullamco qui occaecat. Consectetur cupidatat est irure nisi mollit cillum culpa veniam nostrud. Non incididunt excepteur cupidatat irure exercitation non adipisicing sint voluptate nulla fugiat sunt. Sit id est velit ad. Officia enim voluptate amet dolor ad do Lorem exercitation non do. Veniam excepteur anim elit occaecat quis labore irure tempor ad adipisicing consequat consequat.\n\nOfficia id non aliquip ullamco ad pariatur eu ad commodo ut. Excepteur dolor consectetur tempor magna ex nostrud. Culpa in aute aliqua ad sit amet magna occaecat dolor Lorem qui laboris nostrud consequat. Aute laborum ut est cillum minim ad pariatur.\n\nOfficia ut culpa est occaecat do. Id Lorem nulla adipisicing voluptate deserunt est voluptate culpa nulla ullamco commodo. Nulla cillum aliqua ipsum sint duis sunt exercitation exercitation non cupidatat non. Ad pariatur esse eiusmod sunt voluptate sit nostrud nostrud laboris occaecat sunt officia. Occaecat veniam Lorem pariatur incididunt elit incididunt excepteur laboris. Adipisicing ex mollit qui aliqua velit quis quis Lorem proident officia sit dolor dolor.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(12, "hours"),
        "read": true,
        "starred": false,
        "labels": [],
        "group": "primary",
        "type": "draft",
        "attachments": ["assets/img/backgrounds/2.jpg", "assets/img/backgrounds/3.jpg"]
    },
    {
        "from": {
            "name": "Montoya Davenport",
            "mail": "demo@justademomail.com"
        },
        "subject": "commodo ad aliquip",
        "content": "Sint veniam ipsum ea id nostrud non tempor ipsum ad cupidatat id. Amet minim qui proident proident eu labore qui culpa. Eu id dolore sit et laborum aliqua in velit. Voluptate commodo esse mollit Lorem nulla pariatur cupidatat pariatur adipisicing duis aliquip.\n\nFugiat excepteur ut proident tempor cillum aute non Lorem sunt consectetur pariatur non tempor. Irure Lorem irure tempor aliquip velit dolore mollit magna sunt sit in eu. Incididunt cillum pariatur consequat do esse irure cupidatat consectetur officia consequat velit duis nulla. Duis sunt consequat sit elit excepteur excepteur nulla eu excepteur. Nisi ipsum adipisicing ad ut magna. Magna pariatur pariatur commodo officia duis. Anim aute commodo nostrud eiusmod reprehenderit officia esse adipisicing.\n\nAmet ut cillum ex laborum. Laboris nulla velit ad labore enim tempor sint tempor excepteur id. Sint fugiat sunt irure qui dolor irure velit ad non culpa nulla eiusmod excepteur. Fugiat mollit dolor consequat officia ex enim ullamco officia reprehenderit dolore velit voluptate.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(74, "days"),
        "read": false,
        "starred": true,
        "labels": [],
        "group": "primary",
        "type": "sent",
        "attachments": ["assets/img/backgrounds/1.jpg"]
    },
    {
        "from": {
            "name": "Lucia Talley",
            "mail": "demo@justademomail.com"
        },
        "subject": "Lorem sint pariatur",
        "content": "Ex ex aute laborum elit reprehenderit commodo anim fugiat ipsum deserunt. Ex consequat culpa Lorem cillum voluptate officia aliqua aliquip consectetur tempor incididunt. Voluptate ipsum ea do consectetur cupidatat laboris amet ea pariatur adipisicing nostrud culpa et nostrud. Incididunt est elit qui nisi excepteur esse esse pariatur officia esse veniam et minim. Reprehenderit enim nostrud eu consectetur cupidatat id laboris et velit. Incididunt est et nostrud qui.\n\nNon amet culpa culpa et irure est minim. Commodo aute duis sunt ut pariatur tempor consequat officia incididunt adipisicing. Lorem cupidatat ea mollit consequat aliquip consequat magna cupidatat.\n\nLorem esse dolore labore veniam pariatur minim occaecat. Lorem exercitation labore quis minim pariatur consectetur duis velit aliqua tempor consectetur sint. Quis fugiat officia ea laborum ipsum velit.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(192, "minutes"),
        "read": true,
        "starred": true,
        "labels": [],
        "group": "primary",
        "type": "sent",
        "attachments": ["assets/img/backgrounds/1.jpg"]
    },
    {
        "from": {
            "name": "Hamilton Hendricks",
            "mail": "demo@justademomail.com"
        },
        "subject": "elit nulla eu",
        "content": "Veniam esse cillum excepteur sit commodo tempor. Est quis elit ipsum aute. Reprehenderit dolor non reprehenderit aliquip enim. Do ut amet adipisicing sunt deserunt labore reprehenderit ex tempor in incididunt. Id reprehenderit sunt Lorem consectetur duis aute. Enim Lorem magna ex elit irure ad sit voluptate enim minim pariatur nisi sint adipisicing. Exercitation dolor dolore nisi proident est excepteur mollit ut proident ea.\n\nIrure voluptate enim consequat excepteur esse. Consequat commodo sint occaecat non mollit labore ullamco proident proident nisi aute fugiat officia laboris. Exercitation aliqua est laborum laboris consectetur ipsum irure id. Pariatur do amet esse esse cillum. Qui mollit velit ea enim ullamco laborum consequat.\n\nNostrud enim anim ipsum proident eu ad id. Adipisicing qui consectetur ea sit ad magna ea culpa non velit commodo. Elit ullamco aute reprehenderit irure adipisicing ipsum ad aute magna tempor ullamco dolor. Cupidatat pariatur tempor aliquip officia minim laboris laborum commodo. Qui est sint incididunt enim fugiat commodo amet.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(168, "minutes"),
        "read": false,
        "starred": false,
        "labels": [],
        "group": "social",
        "type": "draft",
        "attachments": ["assets/img/backgrounds/2.jpg"]
    },
    {
        "from": {
            "name": "Staci Puckett",
            "mail": "demo@justademomail.com"
        },
        "subject": "eiusmod commodo eu",
        "content": "Duis excepteur magna mollit nostrud aliquip velit minim deserunt laboris enim. Anim sunt est dolor nulla nisi ipsum tempor. Mollit veniam qui non aliquip consequat proident. Aliquip laborum officia voluptate culpa eiusmod in veniam.\n\nMinim adipisicing excepteur ullamco proident velit enim nulla minim dolor dolore cillum laborum minim est. Ullamco nisi voluptate nisi ipsum. Consectetur sunt magna tempor aliqua voluptate veniam eu veniam non officia est reprehenderit. Aliquip duis aliquip occaecat do sunt incididunt tempor enim. Ut voluptate consectetur sit eu adipisicing ea consequat dolore voluptate ea. Ex in magna nostrud duis dolor sint Lorem exercitation dolore occaecat sit minim nisi Lorem. Cupidatat consectetur cillum voluptate tempor irure labore proident nostrud in aliqua ullamco cillum.\n\nPariatur ut ex est eu qui. Laborum id amet proident esse sit duis eiusmod et. Reprehenderit cillum adipisicing in ad nulla velit elit pariatur veniam ad ex reprehenderit. Quis cillum non dolor eu incididunt est sit excepteur voluptate.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(118, "hours"),
        "read": false,
        "starred": false,
        "labels": [],
        "group": "primary",
        "type": "draft",
        "attachments": ["assets/img/backgrounds/2.jpg", "assets/img/backgrounds/3.jpg"]
    },
    {
        "from": {
            "name": "Jewell Black",
            "mail": "demo@justademomail.com"
        },
        "subject": "esse esse aliquip",
        "content": "Est aliquip culpa aute nostrud dolor sint sint consectetur id. Lorem ex aliquip labore sint voluptate ea ea dolor. Sint et quis mollit officia anim ex ut aliqua ut ea consequat. Ut cupidatat dolor culpa eu id occaecat ad Lorem incididunt commodo laborum. In aute dolore proident proident ipsum cillum irure commodo consectetur nostrud irure et adipisicing. Cillum qui minim laborum commodo non. Minim cillum qui exercitation consectetur velit eu.\n\nAdipisicing aute ex occaecat irure est exercitation do dolore. Excepteur enim nulla proident excepteur veniam quis. Et quis commodo ut deserunt mollit. Aute irure cillum commodo aliquip fugiat aute. Dolor esse laborum id culpa do nostrud. Irure amet et laboris duis cillum in aliquip elit amet ex aliquip irure eiusmod laboris. Tempor commodo culpa sunt laborum laborum cillum.\n\nCupidatat incididunt aliqua pariatur voluptate id consectetur eu fugiat exercitation aliquip. Exercitation labore aliqua enim ipsum anim aliquip est Lorem incididunt. Qui minim aliqua reprehenderit et. Mollit labore adipisicing enim deserunt tempor ipsum ipsum officia sint velit deserunt. Aute dolore reprehenderit minim ea occaecat duis deserunt reprehenderit velit voluptate nulla ex ut. Sunt veniam Lorem dolore tempor sint. Aute et culpa pariatur ipsum eu velit ullamco minim ea sunt.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(145, "days"),
        "read": false,
        "starred": true,
        "labels": [],
        "group": "social",
        "type": "spam",
        "attachments": ["assets/img/backgrounds/1.jpg"]
    },
    {
        "from": {
            "name": "Della Morse",
            "mail": "demo@justademomail.com"
        },
        "subject": "id adipisicing cupidatat",
        "content": "Nulla quis dolor culpa proident qui mollit consequat consectetur ad voluptate et. Anim cillum consectetur cillum deserunt irure sint veniam reprehenderit excepteur. Incididunt aliquip aute ex Lorem commodo deserunt elit amet. Ex magna fugiat commodo incididunt sit et ipsum sit non qui. Amet reprehenderit cillum commodo ullamco do exercitation. Incididunt do ad anim occaecat dolor dolor tempor non deserunt. Amet est sint quis non voluptate et adipisicing velit irure eiusmod mollit.\n\nCommodo ex id eu id do incididunt laborum voluptate aute ex incididunt eiusmod eiusmod. Aliquip occaecat aute in aliqua est labore ut. Fugiat pariatur in irure pariatur deserunt aute incididunt ad.\n\nConsectetur voluptate reprehenderit nostrud ut deserunt exercitation consequat sunt. Pariatur aliquip velit non ut officia elit enim duis Lorem fugiat. Aliquip enim esse amet do do magna voluptate do. Aliquip anim id aute incididunt voluptate aliqua consectetur exercitation excepteur est. Elit anim esse enim non nostrud consequat magna pariatur labore id nostrud. Anim esse incididunt non incididunt sint.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(137, "days"),
        "read": true,
        "starred": false,
        "labels": [],
        "group": "promotions",
        "type": "none",
        "attachments": ["assets/img/backgrounds/1.jpg"]
    },
    {
        "from": {
            "name": "Jasmine Chandler",
            "mail": "demo@justademomail.com"
        },
        "subject": "consequat velit ipsum",
        "content": "Ea pariatur duis incididunt dolore officia laboris est magna. Commodo sunt nostrud pariatur exercitation officia elit voluptate minim commodo. Eu ex cupidatat culpa culpa proident. Ad labore amet nulla nisi. Ullamco sint tempor labore officia fugiat qui enim in velit sint officia tempor occaecat pariatur.\n\nSunt veniam ullamco ipsum est commodo. Aute reprehenderit cupidatat aute incididunt esse duis laborum eiusmod magna. Fugiat cillum irure duis ullamco fugiat amet. Veniam ex velit labore culpa eu occaecat velit cillum non dolore deserunt sunt. Enim aute ex ut ex ullamco sit esse enim labore eiusmod id ullamco sint. Laborum duis cillum do velit dolor ea. Eiusmod labore ex mollit amet reprehenderit eu fugiat eiusmod sit laborum ex.\n\nPariatur laborum reprehenderit amet officia ex ex velit officia. Ea in sunt cillum dolore ut labore pariatur aliquip pariatur officia non irure nostrud. Sunt eu ut deserunt laboris fugiat mollit aute fugiat nulla quis anim commodo nostrud. Nostrud Lorem enim ea dolore laboris commodo laborum sunt aliquip ipsum id eu sint.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(22, "minutes"),
        "read": true,
        "starred": true,
        "labels": [
            {
                "name": "Project X",
                "color": "#3E50B4"
            }
        ],
        "group": "social",
        "type": "none",
        "attachments": ["assets/img/backgrounds/1.jpg"]
    },
    {
        "from": {
            "name": "Rachel Norman",
            "mail": "demo@justademomail.com"
        },
        "subject": "enim proident nulla",
        "content": "Laboris consectetur fugiat dolore enim ullamco irure adipisicing quis aute commodo enim exercitation. Ullamco aliquip nostrud eiusmod velit cupidatat non voluptate ipsum proident fugiat laboris. Commodo aliqua et cillum sunt dolor ipsum esse Lorem veniam incididunt magna cillum irure sint. Eiusmod nisi aliqua dolor sint amet ad minim proident culpa laboris irure elit amet fugiat. Reprehenderit amet magna in Lorem nulla aute duis do. Aliquip in quis et ipsum in laboris ut.\n\nAliqua Lorem sint Lorem id et ut fugiat commodo. Amet sit enim nisi laboris ullamco aute et irure. Commodo nulla velit ea do qui tempor velit fugiat ut culpa sint. Veniam irure reprehenderit cupidatat ad ullamco. Eiusmod aliqua labore irure sint. Enim do excepteur elit cillum. Proident deserunt sit dolore adipisicing nulla culpa ex consequat duis veniam proident.\n\nEx duis non eiusmod amet sit magna est cillum do cillum et et ea do. Occaecat qui culpa officia ut ipsum excepteur. Duis ullamco esse duis ex fugiat aliqua voluptate. Minim deserunt amet ea sit voluptate.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(111, "hours"),
        "read": false,
        "starred": true,
        "labels": [
            {
                "name": "Private",
                "color": "#4CA9BB"
            }
        ],
        "group": "social",
        "type": "sent",
        "attachments": ["assets/img/backgrounds/2.jpg", "assets/img/backgrounds/3.jpg"]
    },
    {
        "from": {
            "name": "Lillian Wilson",
            "mail": "demo@justademomail.com"
        },
        "subject": "commodo sunt enim",
        "content": "Mollit aliquip ad mollit consectetur incididunt excepteur. Aliquip commodo laboris ea commodo. Consequat aliquip ullamco proident commodo nulla et. In in et magna tempor laboris sit exercitation Lorem quis. Magna est esse tempor veniam ex nisi ad. Sunt sunt Lorem velit id ullamco culpa.\n\nSunt non quis enim qui sunt. Aliquip nulla sint incididunt tempor id fugiat minim officia occaecat. Adipisicing non officia nulla elit deserunt. Consectetur cillum deserunt qui cupidatat nostrud irure in eiusmod ullamco duis incididunt aliqua aute occaecat. Aliqua est est culpa ullamco mollit laborum irure quis enim incididunt veniam. Mollit officia fugiat labore est irure nulla nostrud quis ullamco Lorem dolor ad velit aliquip. Nisi do sint ut magna esse minim quis fugiat id nisi id dolor.\n\nQui magna eu sint exercitation labore cillum voluptate fugiat do amet magna labore. Commodo minim anim culpa ad mollit labore laborum cillum culpa excepteur mollit dolor anim et. Fugiat ullamco cupidatat cillum irure ullamco velit minim consectetur. Amet exercitation aliquip ullamco irure mollit aliquip nulla sint velit esse sunt deserunt consequat aute. Sit duis reprehenderit duis eu qui sit quis.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(93, "days"),
        "read": false,
        "starred": false,
        "labels": [
            {
                "name": "Project X",
                "color": "#4BAE4F"
            }
        ],
        "group": "promotions",
        "type": "draft",
        "attachments": ["assets/img/backgrounds/1.jpg"]
    },
    {
        "from": {
            "name": "Wilkerson Ferguson",
            "mail": "demo@justademomail.com"
        },
        "subject": "labore elit adipisicing",
        "content": "Veniam eu et eu duis eu est dolor officia nostrud commodo voluptate. Dolor ea sunt et velit. In reprehenderit fugiat officia labore velit sit qui eu. Quis duis consectetur incididunt ea nulla proident minim officia in sunt anim dolore. Aute magna exercitation est eu excepteur fugiat proident proident ea duis.\n\nLaborum esse adipisicing non sint cupidatat eu reprehenderit officia sunt sint minim cillum culpa do. Ex aliquip officia dolor do mollit. Aute sint dolore esse esse aute incididunt sunt irure consequat incididunt irure dolore.\n\nOfficia reprehenderit do sit Lorem officia est ut mollit commodo duis nostrud excepteur. Quis veniam tempor ea amet irure eiusmod irure nisi officia. Qui Lorem sit elit ea culpa nostrud commodo amet occaecat anim non. Non veniam eiusmod cillum cupidatat. Adipisicing non incididunt ullamco ullamco ipsum ea qui. Veniam aute enim est consectetur commodo ex adipisicing nulla aliquip ipsum incididunt voluptate ea reprehenderit.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(87, "minutes"),
        "read": false,
        "starred": true,
        "labels": [
            {
                "name": "Private",
                "color": "red"
            }
        ],
        "group": "social",
        "type": "sent",
        "attachments": ["assets/img/backgrounds/2.jpg", "assets/img/backgrounds/3.jpg"]
    },
    {
        "from": {
            "name": "Mercer Barnett",
            "mail": "demo@justademomail.com"
        },
        "subject": "culpa incididunt aliquip",
        "content": "Incididunt ut culpa nulla culpa quis sint ipsum aliqua occaecat nulla deserunt sunt. Quis sint minim id amet aliqua. Ut nulla id fugiat veniam excepteur quis minim voluptate reprehenderit.\n\nEt excepteur laborum in culpa cillum ut irure eu qui adipisicing sunt sint ipsum deserunt. Sint nulla magna amet esse consectetur ullamco non velit non ex minim irure. Do sit nisi occaecat consectetur ut voluptate anim elit tempor et et exercitation culpa deserunt. Reprehenderit ea voluptate sint consectetur ipsum adipisicing ad elit ut esse in sint sit.\n\nLaboris in amet quis irure laboris. Enim et esse in id proident deserunt laboris adipisicing id labore commodo minim sit. Ut esse deserunt deserunt sint officia ipsum consectetur.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(15, "days"),
        "read": false,
        "starred": true,
        "labels": [
            {
                "name": "Business",
                "color": "red"
            }
        ],
        "group": "primary",
        "type": "spam",
        "attachments": ["assets/img/backgrounds/2.jpg", "assets/img/backgrounds/3.jpg"]
    },
    {
        "from": {
            "name": "Herrera Knowles",
            "mail": "demo@justademomail.com"
        },
        "subject": "mollit aliqua in",
        "content": "Nostrud enim ea ipsum non duis. Incididunt minim occaecat eu esse aliquip cillum quis magna. Incididunt ea cupidatat non occaecat excepteur non.\n\nConsectetur tempor ullamco officia id ea ad irure non anim sunt cillum. Nostrud tempor pariatur occaecat minim eu dolore. Voluptate cupidatat velit elit ut nulla dolore enim ipsum commodo ad officia reprehenderit labore. Laborum ad elit duis ullamco anim adipisicing. Reprehenderit enim aute cupidatat laboris est dolor Lorem in. Ad sit proident ea sit cupidatat pariatur. Eu esse nisi sunt ut velit nisi.\n\nDolore deserunt nulla eiusmod in. Consectetur quis proident eu Lorem duis excepteur dolor nisi sit velit fugiat sint. Laboris id dolore dolore irure occaecat minim qui amet enim sit nulla aliqua. Magna incididunt veniam consectetur laboris cillum laboris.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(74, "days"),
        "read": false,
        "starred": true,
        "labels": [
            {
                "name": "Project X",
                "color": "#4BAE4F"
            }
        ],
        "group": "primary",
        "type": "trash",
        "attachments": ["assets/img/backgrounds/2.jpg", "assets/img/backgrounds/3.jpg"]
    },
    {
        "from": {
            "name": "Ruiz Berry",
            "mail": "demo@justademomail.com"
        },
        "subject": "veniam ipsum sint",
        "content": "Reprehenderit deserunt incididunt aliquip velit pariatur adipisicing aliquip ipsum duis adipisicing. Officia ut anim tempor amet ex labore velit minim sunt pariatur eiusmod anim. Do enim aute qui ut nisi ut sint sit culpa magna eiusmod ex deserunt incididunt. Ea qui laboris ea mollit labore fugiat est. Adipisicing ea officia cupidatat ipsum. Elit officia magna ipsum non. Commodo magna ex minim tempor consectetur minim qui aliqua cillum culpa sunt adipisicing nostrud tempor.\n\nSit reprehenderit in excepteur sit deserunt sit id ea eu non ad voluptate. Consequat pariatur ullamco reprehenderit fugiat aute do irure ipsum aute. Aliquip sunt pariatur in elit ad veniam consectetur. Id eiusmod proident fugiat excepteur esse Lorem esse. In voluptate do aliqua mollit tempor ipsum et quis exercitation fugiat do.\n\nEsse pariatur voluptate exercitation duis fugiat nostrud pariatur dolor officia. Ullamco quis ex dolore id ex ad duis aute pariatur deserunt. Elit cillum est fugiat proident. Quis nostrud ullamco id in non ullamco mollit officia est est. Aliqua laboris nisi aliqua ut eiusmod occaecat ipsum pariatur cillum eiusmod occaecat. Eu officia ipsum minim officia culpa consectetur.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(21, "hours"),
        "read": false,
        "starred": false,
        "labels": [
            {
                "name": "Project X",
                "color": "darkgrey"
            }
        ],
        "group": "primary",
        "type": "sent",
        "attachments": ["assets/img/backgrounds/2.jpg", "assets/img/backgrounds/3.jpg"]
    },
    {
        "from": {
            "name": "Cathryn Allen",
            "mail": "demo@justademomail.com"
        },
        "subject": "labore tempor anim",
        "content": "Culpa labore ullamco duis magna proident et. Aliquip aliquip nulla id tempor minim ut dolor velit sint do. Excepteur laboris id irure mollit tempor ea proident anim consequat consequat amet. Nulla veniam velit eiusmod aute proident nostrud duis dolor dolor incididunt magna enim ut. Dolor nulla fugiat duis dolore veniam tempor laboris eiusmod deserunt irure.\n\nExercitation anim exercitation Lorem ipsum reprehenderit Lorem. Occaecat ex est nulla officia. Nostrud sit anim anim amet. Commodo incididunt quis pariatur ullamco sint amet. Enim excepteur cillum nostrud dolore mollit.\n\nAd tempor veniam esse deserunt. Cupidatat sint nisi minim adipisicing sint veniam dolor sunt tempor sit proident reprehenderit sit. Magna consectetur tempor nulla nisi culpa irure labore in qui irure magna. Ullamco anim ad et reprehenderit esse culpa proident enim.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(198, "hours"),
        "read": true,
        "starred": false,
        "labels": [
            {
                "name": "Business",
                "color": "darkgrey"
            }
        ],
        "group": "promotions",
        "type": "sent",
        "attachments": ["assets/img/backgrounds/2.jpg", "assets/img/backgrounds/3.jpg"]
    },
    {
        "from": {
            "name": "Jenkins Harmon",
            "mail": "demo@justademomail.com"
        },
        "subject": "dolor eiusmod ullamco",
        "content": "Esse pariatur excepteur ut quis id nulla exercitation. Do enim laboris amet esse ex fugiat ex cillum ullamco duis proident laboris. Et consequat irure duis elit ad. Mollit est nisi nostrud minim in elit aliqua ad ea cillum veniam ad ullamco. Aute ullamco labore qui dolore ullamco adipisicing. Occaecat nisi laboris magna labore.\n\nEu enim do sit incididunt irure. Duis ullamco dolor occaecat laboris dolor ea officia. Aliqua labore aute ex id voluptate aute in incididunt.\n\nExercitation aute ullamco nostrud reprehenderit elit. Aliqua ad enim laborum aliqua qui deserunt labore aliquip occaecat. Culpa pariatur ipsum culpa laborum. Aliquip aute reprehenderit cillum magna id laboris cupidatat cillum exercitation nulla exercitation irure veniam duis.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(61, "days"),
        "read": false,
        "starred": false,
        "labels": [
            {
                "name": "Private",
                "color": "#4CA9BB"
            }
        ],
        "group": "promotions",
        "type": "none",
        "attachments": ["assets/img/backgrounds/2.jpg", "assets/img/backgrounds/3.jpg"]
    },
    {
        "from": {
            "name": "Lupe Pugh",
            "mail": "demo@justademomail.com"
        },
        "subject": "minim dolor consectetur",
        "content": "Ad proident incididunt veniam aute aliquip voluptate irure veniam id consequat eu esse. Tempor labore aute nulla ea do tempor nulla. Exercitation anim cillum nulla ut minim anim deserunt anim enim id irure aute. Labore sunt fugiat aliquip exercitation exercitation mollit est exercitation. Nostrud amet commodo reprehenderit magna laboris occaecat. Aliqua sunt reprehenderit duis deserunt duis consequat id exercitation non id voluptate consectetur amet.\n\nDolor aute aliquip cillum tempor velit pariatur ipsum sit cupidatat quis aliquip. Deserunt pariatur eiusmod magna occaecat mollit nulla dolor proident et deserunt laboris et do. Et elit esse sunt nulla eiusmod labore veniam est ex. Fugiat irure proident tempor aliqua laboris magna culpa ullamco ullamco cupidatat aute. Irure duis esse ut cillum cillum occaecat sunt id ut occaecat officia velit. Aliqua cillum amet magna officia velit magna mollit dolor.\n\nEu pariatur et non pariatur in pariatur laboris anim irure occaecat labore ex. Sint excepteur ad aliquip enim fugiat minim commodo dolore esse veniam. Anim nisi ipsum ullamco aute. Id mollit sunt ut exercitation qui aute magna eu labore cillum.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(150, "hours"),
        "read": false,
        "starred": true,
        "labels": [
            {
                "name": "Priority!",
                "color": "red"
            }
        ],
        "group": "primary",
        "type": "draft",
        "attachments": ["assets/img/backgrounds/2.jpg"]
    },
    {
        "from": {
            "name": "Becky Cote",
            "mail": "demo@justademomail.com"
        },
        "subject": "magna magna in",
        "content": "Lorem elit adipisicing pariatur pariatur exercitation sint excepteur anim. Aliquip consectetur ut mollit anim fugiat ut. Ullamco minim consequat ea velit laboris. Aute enim sit incididunt commodo dolore anim cupidatat labore ipsum.\n\nFugiat anim est sit irure adipisicing excepteur ullamco sit voluptate et occaecat irure. Et tempor commodo enim adipisicing nulla exercitation culpa consequat fugiat proident anim. Qui sint amet aute elit eu aute ullamco Lorem pariatur ad commodo. Culpa officia velit dolore fugiat adipisicing commodo id fugiat est magna. Ex tempor enim deserunt ut elit cupidatat pariatur reprehenderit exercitation officia enim duis aute incididunt.\n\nDuis culpa aliqua excepteur elit exercitation quis ad. Irure ullamco cillum minim do. Veniam deserunt pariatur est Lorem in. Est exercitation magna aliquip elit eiusmod duis velit amet enim. Velit irure excepteur laboris ut adipisicing tempor ut exercitation nostrud. Ea irure aute elit et.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(120, "days"),
        "read": true,
        "starred": false,
        "labels": [
            {
                "name": "Business",
                "color": "darkgrey"
            }
        ],
        "group": "promotions",
        "type": "none",
        "attachments": ["assets/img/backgrounds/2.jpg", "assets/img/backgrounds/3.jpg"]
    },
    {
        "from": {
            "name": "Floyd Dyer",
            "mail": "demo@justademomail.com"
        },
        "subject": "laborum culpa ut",
        "content": "Nisi Lorem duis minim in. Ex Lorem labore nisi ad ex proident veniam consectetur. Quis aliqua id in eiusmod tempor voluptate tempor magna reprehenderit occaecat enim. Voluptate ut Lorem nulla fugiat est aliqua labore mollit nostrud. Consectetur exercitation elit irure officia adipisicing ea ipsum. Ullamco minim id excepteur eu excepteur excepteur dolor. Excepteur duis fugiat qui proident.\n\nDeserunt mollit occaecat nisi excepteur amet culpa occaecat eiusmod magna non. Irure nulla in deserunt veniam est nulla nulla eu amet do consequat eiusmod qui. Magna id sunt amet nisi esse labore officia ut aliqua qui proident non ea. Non aliqua consequat velit in proident excepteur sint aute minim proident minim laboris aliquip. Nostrud dolore incididunt ullamco eiusmod et.\n\nCommodo laborum non Lorem dolor sint adipisicing voluptate est labore aliquip cupidatat. Irure amet incididunt elit eiusmod tempor proident esse id laborum culpa. Ipsum dolore est ullamco fugiat ad anim commodo consectetur non. Fugiat est ea sit minim officia consectetur commodo culpa sunt.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(143, "days"),
        "read": true,
        "starred": true,
        "labels": [
            {
                "name": "Private",
                "color": "red"
            }
        ],
        "group": "primary",
        "type": "sent",
        "attachments": ["assets/img/backgrounds/2.jpg", "assets/img/backgrounds/3.jpg"]
    },
    {
        "from": {
            "name": "Porter Dennis",
            "mail": "demo@justademomail.com"
        },
        "subject": "fugiat tempor consequat",
        "content": "Incididunt sit eu labore commodo. Est veniam id est qui non aliqua veniam quis magna. Nulla esse labore occaecat reprehenderit excepteur.\n\nIpsum in aliqua dolore irure adipisicing velit voluptate enim nostrud non nisi. Elit ex quis culpa dolor consequat nisi ad eiusmod Lorem quis elit elit voluptate. Elit veniam quis adipisicing voluptate aliquip. Exercitation consequat amet veniam proident laboris Lorem et.\n\nDuis consequat ad qui laboris ipsum ut eiusmod consectetur. Ut reprehenderit esse ullamco amet mollit culpa dolore laboris ullamco dolore ex dolor. Fugiat labore sit excepteur in est consequat consequat aute. Laboris excepteur mollit reprehenderit veniam consectetur irure. Id do irure et irure ullamco exercitation anim ad. Anim incididunt excepteur esse est quis magna.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(104, "days"),
        "read": true,
        "starred": false,
        "labels": [
            {
                "name": "Private",
                "color": "#4CA9BB"
            }
        ],
        "group": "promotions",
        "type": "trash",
        "attachments": ["assets/img/backgrounds/2.jpg", "assets/img/backgrounds/3.jpg"]
    },
    {
        "from": {
            "name": "Dean Caldwell",
            "mail": "demo@justademomail.com"
        },
        "subject": "minim labore dolore",
        "content": "Id aute nisi velit excepteur nostrud cillum aliquip esse in ad reprehenderit occaecat. Culpa irure anim non voluptate eiusmod consequat proident. Esse ex cillum exercitation eiusmod. Fugiat irure laboris deserunt quis. Duis ipsum id enim ex excepteur ullamco enim labore ex consequat ullamco tempor officia elit. Ipsum anim nisi dolore aliqua nostrud.\n\nDolore velit id laboris aliquip proident nostrud. Reprehenderit anim excepteur laborum dolor Lorem proident. Aliquip ut duis ut ipsum enim officia irure in culpa. Pariatur nisi voluptate aliqua commodo exercitation aliqua proident. Amet cillum sint excepteur sunt duis exercitation sint. Commodo esse sint labore est qui consequat aliqua dolore ipsum qui sunt fugiat sint. Sint non enim nostrud aute nulla laboris do tempor cillum duis quis exercitation anim.\n\nEiusmod officia in quis anim. Consectetur in adipisicing duis enim est excepteur elit eu laborum cupidatat sit. Non aliquip mollit magna mollit.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(93, "minutes"),
        "read": true,
        "starred": true,
        "labels": [
            {
                "name": "Priority!",
                "color": "#4CA9BB"
            }
        ],
        "group": "promotions",
        "type": "sent",
        "attachments": ["assets/img/backgrounds/1.jpg"]
    },
    {
        "from": {
            "name": "Berta Lawson",
            "mail": "demo@justademomail.com"
        },
        "subject": "dolor cupidatat adipisicing",
        "content": "Eiusmod nisi occaecat proident do qui cupidatat pariatur. Amet mollit laboris irure sint anim aute duis sit exercitation dolore. Adipisicing ea anim aute enim duis exercitation dolor do aliquip est exercitation duis veniam ex. Incididunt proident cupidatat fugiat aliquip ad velit cillum sint excepteur do cupidatat ut. Duis qui non dolor excepteur veniam adipisicing esse excepteur veniam minim ex ad commodo in. Laboris tempor do exercitation cillum cillum voluptate consectetur incididunt sunt nisi incididunt. Magna et eiusmod cillum incididunt proident nisi est cupidatat occaecat ad velit ullamco.\n\nDo minim voluptate sit sit et sit mollit. Est eu non tempor ut excepteur sit veniam adipisicing velit est. Cillum esse non voluptate minim laborum sunt ex deserunt in adipisicing laboris sit duis. Reprehenderit laborum pariatur nostrud eiusmod dolore anim in ea anim. Exercitation aliqua deserunt qui fugiat commodo id ea culpa quis incididunt. Pariatur eu ut nisi in eu nostrud irure tempor.\n\nAdipisicing occaecat ipsum aute incididunt. Est fugiat nostrud duis nostrud reprehenderit ut. Exercitation do excepteur ex magna non et amet ut cupidatat voluptate incididunt minim. Laboris nisi aliquip ullamco irure ex proident consectetur do id do dolore sit aute dolor. Do deserunt incididunt consectetur non magna do anim duis. Eu voluptate eu occaecat eiusmod. Adipisicing nisi ex laborum minim in tempor qui qui enim et aliqua consequat.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(33, "days"),
        "read": false,
        "starred": true,
        "labels": [
            {
                "name": "Business",
                "color": "red"
            }
        ],
        "group": "primary",
        "type": "sent",
        "attachments": ["assets/img/backgrounds/2.jpg"]
    },
    {
        "from": {
            "name": "Johanna Rice",
            "mail": "demo@justademomail.com"
        },
        "subject": "eu eiusmod irure",
        "content": "In ad sit consequat cupidatat do enim tempor ut officia laboris duis Lorem nulla aute. Amet ipsum veniam pariatur enim laborum anim ex non pariatur cillum consectetur tempor voluptate. Ullamco cupidatat nisi anim elit labore et nulla eu ad irure in officia culpa. Eiusmod eu proident amet nostrud et elit consequat amet voluptate Lorem. Occaecat culpa laboris in ullamco amet ex consectetur proident culpa eiusmod.\n\nDo sunt elit laborum ea mollit. Nulla veniam sit aliquip quis elit ullamco. Ut voluptate reprehenderit duis eu in ullamco deserunt dolore anim dolore excepteur incididunt. Officia ad commodo veniam mollit in duis mollit.\n\nOfficia exercitation pariatur labore voluptate reprehenderit nostrud cupidatat nostrud. Nisi adipisicing officia minim sunt eu nostrud cillum. Laborum id eiusmod ipsum deserunt aute nisi cillum dolore.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(133, "hours"),
        "read": false,
        "starred": true,
        "labels": [
            {
                "name": "Business",
                "color": "#3E50B4"
            }
        ],
        "group": "primary",
        "type": "trash",
        "attachments": ["assets/img/backgrounds/1.jpg"]
    },
    {
        "from": {
            "name": "Schneider Bean",
            "mail": "demo@justademomail.com"
        },
        "subject": "voluptate pariatur nulla",
        "content": "Ad mollit est eiusmod incididunt incididunt enim ad ullamco enim labore est sint. Anim laboris sunt sit adipisicing cillum id deserunt do consequat aliqua proident. Deserunt sint reprehenderit ut incididunt et mollit velit incididunt dolore et ex tempor irure. Excepteur commodo ea officia exercitation occaecat deserunt commodo laborum aliqua. Non eiusmod excepteur enim aliquip laborum elit aute culpa. Occaecat labore ea ex irure officia reprehenderit laboris amet pariatur laboris veniam eu ex elit. Proident ad sint velit nisi sint.\n\nMinim nostrud nulla fugiat est ullamco ipsum ut occaecat dolore magna ad ut exercitation. Fugiat et cupidatat duis consequat mollit minim mollit anim quis amet. Mollit do minim excepteur non veniam ullamco esse. Occaecat ad nostrud et consequat occaecat mollit sit consectetur velit nostrud elit cupidatat. Reprehenderit cillum irure et ipsum esse amet exercitation nisi nostrud esse elit sint. Sunt occaecat amet consequat proident id Lorem ut elit anim nostrud sit labore duis amet. Duis id elit dolor laboris pariatur proident pariatur.\n\nExcepteur nisi excepteur aliqua cillum dolor duis mollit mollit Lorem veniam labore culpa ullamco. Fugiat occaecat velit ipsum est ad ad. In sit cupidatat sunt minim.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(68, "minutes"),
        "read": false,
        "starred": false,
        "labels": [
            {
                "name": "Business",
                "color": "#3E50B4"
            }
        ],
        "group": "social",
        "type": "none",
        "attachments": ["assets/img/backgrounds/2.jpg"]
    },
    {
        "from": {
            "name": "Jimenez Duffy",
            "mail": "demo@justademomail.com"
        },
        "subject": "sint ex tempor",
        "content": "Consequat exercitation irure qui dolor incididunt esse occaecat ea sunt eu voluptate sint id. Aliqua non aliquip non commodo cillum velit. Consectetur deserunt magna occaecat qui duis proident eiusmod. Ad cupidatat dolore adipisicing laborum proident. Non esse dolore mollit dolore. Dolore voluptate in ullamco in nostrud aliqua Lorem aliquip. Nulla consequat eu amet proident aliqua ex est aute voluptate.\n\nUllamco cillum aliquip irure sint in ipsum voluptate cupidatat nostrud eiusmod. Pariatur ex non proident culpa dolor occaecat pariatur duis ut esse irure ad. Et sunt nulla id aliquip dolore consectetur veniam ullamco proident laboris. Officia do nulla occaecat velit dolor non dolore duis et laborum culpa qui fugiat duis. Pariatur laboris magna in anim labore irure nisi deserunt duis exercitation officia. Fugiat nostrud non irure fugiat fugiat deserunt est ipsum adipisicing consequat ut.\n\nEnim non ut aliqua cupidatat. Duis velit mollit esse dolore exercitation non consequat excepteur Lorem ea cupidatat. Lorem veniam sint eu exercitation do incididunt.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(149, "minutes"),
        "read": false,
        "starred": true,
        "labels": [
            {
                "name": "Business",
                "color": "#3E50B4"
            }
        ],
        "group": "promotions",
        "type": "sent",
        "attachments": ["assets/img/backgrounds/1.jpg"]
    },
    {
        "from": {
            "name": "Brooks Warner",
            "mail": "demo@justademomail.com"
        },
        "subject": "in deserunt veniam",
        "content": "Quis reprehenderit duis aute sit anim duis qui sint. Et ipsum dolore minim excepteur veniam proident. Quis officia aute ipsum id deserunt officia sunt pariatur est. Dolore incididunt est non exercitation in deserunt quis elit magna commodo eiusmod commodo. Aliqua duis enim deserunt incididunt. Est consequat ipsum exercitation fugiat Lorem irure ad nostrud minim reprehenderit velit voluptate.\n\nLorem consequat aliqua culpa sint ea nostrud consectetur aute. Nostrud anim adipisicing dolor amet laborum occaecat. Ex pariatur minim esse est in deserunt. Est velit enim cupidatat ad deserunt nostrud. Eu proident sunt culpa sit dolor minim occaecat Lorem do.\n\nCupidatat eu fugiat nostrud laboris amet deserunt ut sint nulla eiusmod. Exercitation elit Lorem elit irure nostrud deserunt tempor aliqua. Consequat labore nostrud deserunt commodo elit id ad.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(141, "minutes"),
        "read": false,
        "starred": false,
        "labels": [
            {
                "name": "Project X",
                "color": "darkgrey"
            }
        ],
        "group": "social",
        "type": "trash",
        "attachments": ["assets/img/backgrounds/1.jpg"]
    },
    {
        "from": {
            "name": "Vera Branch",
            "mail": "demo@justademomail.com"
        },
        "subject": "minim ea laborum",
        "content": "Esse commodo deserunt id dolore aliquip minim anim qui velit tempor ut quis irure eu. Reprehenderit consectetur velit incididunt anim mollit reprehenderit minim cillum irure ut eu et. Sit dolore esse ea nisi voluptate in officia. Occaecat ad enim commodo laboris qui nulla deserunt magna officia fugiat consectetur. Consequat nostrud consequat ullamco dolor. Labore laboris culpa aliqua duis eu labore. Sint et officia Lorem quis minim culpa adipisicing quis magna laborum et eiusmod.\n\nIrure tempor fugiat amet officia do deserunt magna dolor in fugiat sint adipisicing dolor eiusmod. Eiusmod laboris qui aliquip minim. Culpa elit amet nisi consectetur aute irure tempor laboris excepteur aliquip amet incididunt consequat deserunt. Adipisicing ad ipsum dolor ad ea quis.\n\nNostrud labore est amet deserunt exercitation ut. Aliquip velit exercitation sint eiusmod elit minim labore enim non non amet commodo adipisicing anim. Consequat aliqua do ex elit tempor in anim. Amet tempor esse Lorem est ad amet eiusmod enim.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(78, "hours"),
        "read": true,
        "starred": false,
        "labels": [
            {
                "name": "Project X",
                "color": "#3E50B4"
            }
        ],
        "group": "promotions",
        "type": "spam",
        "attachments": ["assets/img/backgrounds/2.jpg", "assets/img/backgrounds/3.jpg"]
    },
    {
        "from": {
            "name": "Gilbert Bradley",
            "mail": "demo@justademomail.com"
        },
        "subject": "voluptate mollit nostrud",
        "content": "Mollit magna do sunt adipisicing irure dolore quis tempor excepteur ipsum sit excepteur duis occaecat. Ex ullamco Lorem voluptate reprehenderit. Tempor dolor do proident officia eiusmod culpa eiusmod cupidatat culpa. Tempor consequat quis aliquip duis reprehenderit labore esse ex nisi incididunt ullamco sint adipisicing. Dolor nostrud qui irure aute commodo ullamco exercitation. Eiusmod fugiat laborum dolore sit voluptate labore anim. Non dolor irure aute est dolor nostrud excepteur consectetur deserunt qui.\n\nCulpa et commodo fugiat ullamco do. Qui velit consectetur enim labore ea non voluptate officia culpa duis do ipsum nostrud. Velit id eiusmod officia officia nostrud mollit laborum fugiat minim. Irure aliquip consequat non elit Lorem cillum esse.\n\nDuis aliqua pariatur tempor nulla ex minim consectetur fugiat commodo non occaecat sunt. Dolor ut enim anim ad laboris et laboris pariatur commodo velit. Veniam adipisicing cupidatat non ea ullamco amet mollit mollit. Labore duis eiusmod amet laboris laborum consectetur commodo sit pariatur Lorem eu commodo laborum incididunt. Incididunt veniam sunt mollit elit ipsum ea elit sunt laboris dolor et minim. Reprehenderit nostrud enim ut anim. Fugiat excepteur voluptate elit veniam amet.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(110, "hours"),
        "read": false,
        "starred": false,
        "labels": [
            {
                "name": "Project X",
                "color": "red"
            }
        ],
        "group": "promotions",
        "type": "draft",
        "attachments": ["assets/img/backgrounds/2.jpg"]
    },
    {
        "from": {
            "name": "Madeline Hawkins",
            "mail": "demo@justademomail.com"
        },
        "subject": "eu pariatur amet",
        "content": "Id proident sit laboris veniam mollit non exercitation qui enim occaecat aliquip aliquip. Nulla in aliquip in amet adipisicing culpa ut ad non. Commodo ex sint magna adipisicing id irure elit do. Nisi culpa nostrud consectetur do eu. Quis irure incididunt incididunt reprehenderit aliqua laborum sint sunt aliqua est elit tempor.\n\nVelit aliqua tempor ullamco nostrud proident sit labore proident eiusmod. Veniam nulla consectetur enim est et non mollit voluptate officia adipisicing exercitation et ullamco in. Labore occaecat est pariatur incididunt aute reprehenderit Lorem. Enim consectetur eu aliquip proident qui laborum ipsum ut exercitation ut ipsum deserunt. Id sint quis consectetur aliqua consequat ullamco qui sint. Amet duis aliquip nostrud anim nostrud magna exercitation aute ad ipsum adipisicing. Esse fugiat velit in officia exercitation.\n\nSint nisi irure excepteur sint exercitation exercitation. Est irure aute cupidatat fugiat anim ipsum sunt minim laboris. Commodo adipisicing veniam nostrud non amet sit magna qui voluptate. Consectetur adipisicing excepteur ut deserunt minim ut qui tempor nisi. Voluptate et consectetur deserunt id eiusmod aliquip sint. Velit incididunt occaecat labore aliqua ad ullamco irure Lorem. Nisi do labore id consectetur ut mollit.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(179, "days"),
        "read": false,
        "starred": true,
        "labels": [
            {
                "name": "Private",
                "color": "#4BAE4F"
            }
        ],
        "group": "primary",
        "type": "trash",
        "attachments": ["assets/img/backgrounds/2.jpg"]
    },
    {
        "from": {
            "name": "Lenora Boyle",
            "mail": "demo@justademomail.com"
        },
        "subject": "id quis est",
        "content": "Occaecat minim tempor irure magna. Esse ut incididunt et labore ipsum qui minim cillum elit do excepteur occaecat quis et. Id nostrud exercitation ipsum nisi aute sunt amet tempor eu consectetur qui reprehenderit commodo velit. Incididunt Lorem eu deserunt pariatur.\n\nCulpa Lorem voluptate sit occaecat nostrud laboris veniam est esse eu id sunt non nisi. Adipisicing duis aliquip fugiat ad occaecat dolore enim quis elit. Occaecat consectetur quis aliqua cupidatat laborum culpa.\n\nDo labore sit duis sint occaecat elit nulla ullamco commodo ut. Fugiat fugiat esse duis deserunt quis labore. Commodo eu fugiat ipsum est laboris nulla. Aute consectetur do sunt culpa aliquip ut est commodo nostrud elit enim. Laborum nostrud aute dolore cillum. Sint et ipsum non tempor esse quis nulla ullamco.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(175, "days"),
        "read": false,
        "starred": false,
        "labels": [
            {
                "name": "Business",
                "color": "#4BAE4F"
            }
        ],
        "group": "primary",
        "type": "draft",
        "attachments": ["assets/img/backgrounds/2.jpg", "assets/img/backgrounds/3.jpg"]
    },
    {
        "from": {
            "name": "Lyons Callahan",
            "mail": "demo@justademomail.com"
        },
        "subject": "officia deserunt nulla",
        "content": "Cillum sit et anim veniam qui in minim officia incididunt velit dolor dolor. Excepteur cupidatat sunt do anim. Est nisi ea dolore et ad do enim minim nulla fugiat aliqua.\n\nId laborum quis magna laborum esse nulla culpa minim dolore culpa esse aliquip occaecat. Eiusmod sit eiusmod magna est. Cillum dolore occaecat eiusmod velit Lorem ad esse magna esse consequat. Sunt do commodo velit dolor id quis cillum nisi eu. Ea minim dolor in ad deserunt dolor reprehenderit. Minim et ad commodo anim eu sunt reprehenderit aute excepteur irure.\n\nEst non eiusmod excepteur mollit veniam non. Reprehenderit minim ipsum sint proident commodo ipsum fugiat ex minim. Excepteur tempor ad enim esse nulla velit dolore id tempor ut dolore in ad cupidatat. Nulla voluptate velit dolor do. Laborum eiusmod voluptate et eiusmod laboris minim proident aliqua quis Lorem. Laborum deserunt laboris cillum labore ex consequat nostrud nostrud nostrud minim ullamco magna.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(155, "minutes"),
        "read": true,
        "starred": true,
        "labels": [
            {
                "name": "Outreach",
                "color": "#4BAE4F"
            }
        ],
        "group": "primary",
        "type": "none",
        "attachments": ["assets/img/backgrounds/2.jpg", "assets/img/backgrounds/3.jpg"]
    },
    {
        "from": {
            "name": "Moss Howe",
            "mail": "demo@justademomail.com"
        },
        "subject": "duis do Lorem",
        "content": "Exercitation consequat labore deserunt consectetur. Est aute do dolore fugiat sunt dolor mollit culpa. Mollit sit sit enim cillum dolore consequat et occaecat sit commodo nulla culpa. Tempor aliquip esse cupidatat pariatur duis quis fugiat duis dolore esse cillum amet consectetur. Proident non id sunt elit officia consectetur aliqua quis elit sit proident magna sit sint. Est pariatur pariatur laborum eiusmod eiusmod est et aliquip ipsum consequat in labore ut fugiat.\n\nAnim deserunt voluptate duis sint qui ad sint culpa est id ex incididunt. Anim nostrud cupidatat et fugiat in eiusmod qui magna minim. Enim sint duis aute eiusmod do qui ut culpa amet ut anim voluptate.\n\nEx proident eu voluptate id occaecat ad ad elit esse magna. Labore in mollit est sunt. Duis veniam consequat sunt incididunt consequat deserunt Lorem dolor pariatur elit deserunt culpa dolor exercitation. Incididunt cupidatat fugiat fugiat consectetur minim deserunt aute culpa nulla veniam elit.",
        "when": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(173, "days"),
        "read": true,
        "starred": false,
        "labels": [
            {
                "name": "Priority!",
                "color": "#4CA9BB"
            }
        ],
        "group": "social",
        "type": "spam",
        "attachments": ["assets/img/backgrounds/2.jpg"]
    }
];
//# sourceMappingURL=mails.demo.js.map

/***/ }),

/***/ "../../../../../src/app/demo/components/autocomplete/autocomplete.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"margin: 24px 0;\">\r\n  <md-card fxFlex=\"90%\">\r\n    <md-card-title>Material Autocomplete</md-card-title>\r\n\r\n    <md-divider></md-divider>\r\n\r\n    <md-card-content fxLayout=\"column\">\r\n\r\n      <div fxLayout=\"column\" fxLayout.gt-md=\"row\" fxLayoutAlign=\"start stretch\" fxLayoutAlign.gt-md=\"start start\" style=\"margin: 24px 0\">\r\n        <div fxFlex fxFlex.gt-md=\"30%\" style=\"margin-right: 24px;\">\r\n          <div fxLayout=\"column\">\r\n            <h3>Autocomplete</h3>\r\n            <h4>&lt;md-autocomplete&gt;</h4>\r\n            <p>MdAutocomplete can be used to allow for quick selection of predictable entities.</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"demo-tabs mat-elevation-z2\" fxFlex>\r\n          <md-tab-group>\r\n            <md-tab label=\"PREVIEW\">\r\n              <div class=\"demo-preview\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                <md-card fxFlex=\"80%\" fxFlex.sm=\"90%\">\r\n                  <md-card-content fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n                    <form #autoForm=\"ngForm\">\r\n                      <md-input-container>\r\n                        <input mdInput placeholder=\"State\" [mdAutocomplete]=\"reactiveAuto\" [formControl]=\"stateCtrl\">\r\n                      </md-input-container>\r\n\r\n                      <md-autocomplete #reactiveAuto=\"mdAutocomplete\" [displayWith]=\"displayFn\">\r\n                        <md-option *ngFor=\"let state of reactiveStates | async\" [value]=\"state\">\r\n                          <span>{{ state.name }}</span>\r\n                          <span class=\"demo-secondary-text\"> ({{state.code}}) </span>\r\n                        </md-option>\r\n                      </md-autocomplete>\r\n                    </form>\r\n                  </md-card-content>\r\n                </md-card>\r\n              </div>\r\n            </md-tab>\r\n            <md-tab label=\"HTML\">\r\n              <code [innerHTML]=\"getEscaped(autocompleteHTML)\" msHighlight class=\"html\"></code>\r\n            </md-tab>\r\n          </md-tab-group>\r\n        </div>\r\n      </div>\r\n\r\n    </md-card-content>\r\n\r\n  </md-card>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/demo/components/autocomplete/autocomplete.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/demo/components/autocomplete/autocomplete.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__route_animation__ = __webpack_require__("../../../../../src/app/route.animation.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutocompleteComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AutocompleteComponent = (function () {
    function AutocompleteComponent() {
        var _this = this;
        this.autocompleteHTML = "\n<md-input-container>\n  <input type=\"text\" mdInput [mdAutocomplete]=\"auto\">\n</md-input-container>\n\n<md-autocomplete #auto=\"mdAutocomplete\">\n  <md-option *ngFor=\"let option of options\" [value]=\"option\">\n    {{ option }}\n  </md-option>\n</md-autocomplete>\n";
        this.states = [
            { code: 'AL', name: 'Alabama' },
            { code: 'AK', name: 'Alaska' },
            { code: 'AZ', name: 'Arizona' },
            { code: 'AR', name: 'Arkansas' },
            { code: 'CA', name: 'California' },
            { code: 'CO', name: 'Colorado' },
            { code: 'CT', name: 'Connecticut' },
            { code: 'DE', name: 'Delaware' },
            { code: 'FL', name: 'Florida' },
            { code: 'GA', name: 'Georgia' },
            { code: 'HI', name: 'Hawaii' },
            { code: 'ID', name: 'Idaho' },
            { code: 'IL', name: 'Illinois' },
            { code: 'IN', name: 'Indiana' },
            { code: 'IA', name: 'Iowa' },
            { code: 'KS', name: 'Kansas' },
            { code: 'KY', name: 'Kentucky' },
            { code: 'LA', name: 'Louisiana' },
            { code: 'ME', name: 'Maine' },
            { code: 'MD', name: 'Maryland' },
            { code: 'MA', name: 'Massachusetts' },
            { code: 'MI', name: 'Michigan' },
            { code: 'MN', name: 'Minnesota' },
            { code: 'MS', name: 'Mississippi' },
            { code: 'MO', name: 'Missouri' },
            { code: 'MT', name: 'Montana' },
            { code: 'NE', name: 'Nebraska' },
            { code: 'NV', name: 'Nevada' },
            { code: 'NH', name: 'New Hampshire' },
            { code: 'NJ', name: 'New Jersey' },
            { code: 'NM', name: 'New Mexico' },
            { code: 'NY', name: 'New York' },
            { code: 'NC', name: 'North Carolina' },
            { code: 'ND', name: 'North Dakota' },
            { code: 'OH', name: 'Ohio' },
            { code: 'OK', name: 'Oklahoma' },
            { code: 'OR', name: 'Oregon' },
            { code: 'PA', name: 'Pennsylvania' },
            { code: 'RI', name: 'Rhode Island' },
            { code: 'SC', name: 'South Carolina' },
            { code: 'SD', name: 'South Dakota' },
            { code: 'TN', name: 'Tennessee' },
            { code: 'TX', name: 'Texas' },
            { code: 'UT', name: 'Utah' },
            { code: 'VT', name: 'Vermont' },
            { code: 'VA', name: 'Virginia' },
            { code: 'WA', name: 'Washington' },
            { code: 'WV', name: 'West Virginia' },
            { code: 'WI', name: 'Wisconsin' },
            { code: 'WY', name: 'Wyoming' },
        ];
        this.currentState = '';
        this.stateCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* FormControl */]({ code: '', name: '' });
        this.reactiveStates = this.stateCtrl.valueChanges
            .startWith(this.stateCtrl.value)
            .map(function (val) { return _this.displayFn(val); })
            .map(function (name) { return _this.filterStates(name); });
    }
    AutocompleteComponent.prototype.ngOnInit = function () {
    };
    AutocompleteComponent.prototype.getEscaped = function (text) {
        return __WEBPACK_IMPORTED_MODULE_1_lodash__["escape"](text);
    };
    AutocompleteComponent.prototype.filterStates = function (val) {
        return val ? this.states.filter(function (s) { return new RegExp("^" + val, 'gi').test(s.name); })
            : this.states;
    };
    AutocompleteComponent.prototype.displayFn = function (value) {
        return value && typeof value === 'object' ? value.name : value;
    };
    return AutocompleteComponent;
}());
AutocompleteComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-autocomplete',
        template: __webpack_require__("../../../../../src/app/demo/components/autocomplete/autocomplete.component.html"),
        styles: [__webpack_require__("../../../../../src/app/demo/components/autocomplete/autocomplete.component.scss")],
        host: {
            '[@routeAnimation]': 'true'
        },
        animations: [__WEBPACK_IMPORTED_MODULE_3__route_animation__["b" /* routeAnimation */]]
    }),
    __metadata("design:paramtypes", [])
], AutocompleteComponent);

//# sourceMappingURL=autocomplete.component.js.map

/***/ }),

/***/ "../../../../../src/app/demo/components/buttons/buttons.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"margin: 24px 0;\">\r\n  <md-card fxFlex=\"90%\">\r\n    <md-card-title>Material Buttons</md-card-title>\r\n\r\n    <md-divider></md-divider>\r\n\r\n    <md-card-content fxLayout=\"column\">\r\n\r\n      <div fxLayout=\"column\" fxLayout.gt-md=\"row\" fxLayoutAlign=\"start stretch\" fxLayoutAlign.gt-md=\"start start\" style=\"margin: 24px 0\">\r\n        <div fxFlex fxFlex.gt-md=\"30%\" style=\"margin-right: 24px;\">\r\n          <div fxLayout=\"column\">\r\n            <h3>Flat Buttons</h3>\r\n            <h4>&lt;md-button&gt;</h4>\r\n            <p>Flat buttons are printed on material. They do not lift, but fill with color on press.</p>\r\n            <h5>Example:</h5>\r\n            <p><code msHighlight class=\"html\">&lt;button md-button&gt;Button&lt;/button&gt;</code></p>\r\n          </div>\r\n        </div>\r\n        <div class=\"demo-tabs mat-elevation-z2\" fxFlex>\r\n          <md-tab-group>\r\n            <md-tab label=\"PREVIEW\">\r\n              <div class=\"demo-preview\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                <md-card fxFlex=\"80%\" fxFlex.sm=\"90%\">\r\n                  <md-card-content fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"space-around center\" fxLayoutWrap=\"wrap\">\r\n                    <button md-button>Button</button>\r\n                    <button md-button color=\"primary\">Primary</button>\r\n                    <button md-button color=\"accent\">Accent</button>\r\n                    <button md-button color=\"warn\">Warn</button>\r\n                    <button md-button disabled=\"true\">Disabled</button>\r\n                  </md-card-content>\r\n                </md-card>\r\n              </div>\r\n            </md-tab>\r\n            <md-tab label=\"HTML\">\r\n              <code [innerHTML]=\"getEscaped(flatButtonsHTML)\" msHighlight class=\"html\"></code>\r\n            </md-tab>\r\n          </md-tab-group>\r\n        </div>\r\n      </div>\r\n\r\n      <md-divider></md-divider>\r\n\r\n      <div fxLayout=\"column\" fxLayout.gt-md=\"row\" fxLayoutAlign=\"start stretch\" fxLayoutAlign.gt-md=\"start start\" style=\"margin: 24px 0\">\r\n        <div fxFlex fxFlex.gt-md=\"30%\" style=\"margin-right: 24px;\">\r\n          <h3>Raised Buttons</h3>\r\n          <h4>&lt;md-raised-button&gt;</h4>\r\n          <p>Raised buttons add dimension to mostly flat layouts. They emphasize functions on busy or wide spaces.</p>\r\n          <h5>Example:</h5>\r\n          <p><code msHighlight class=\"html\">&lt;button md-raised-button&gt;<br/>  Button<br/>&lt;/button&gt;</code></p>\r\n        </div>\r\n        <div class=\"demo-tabs mat-elevation-z2\" fxFlex>\r\n          <md-tab-group>\r\n            <md-tab label=\"PREVIEW\">\r\n              <div class=\"demo-preview\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                <md-card fxFlex=\"80%\" fxFlex.sm=\"90%\">\r\n                  <md-card-content fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"space-around center\" fxLayoutWrap=\"wrap\">\r\n                    <button md-raised-button>Button</button>\r\n                    <button md-raised-button color=\"primary\">Primary</button>\r\n                    <button md-raised-button color=\"accent\">Accent</button>\r\n                    <button md-raised-button color=\"warn\">Warn</button>\r\n                    <button md-raised-button disabled=\"true\">Disabled</button>\r\n                  </md-card-content>\r\n                </md-card>\r\n              </div>\r\n            </md-tab>\r\n            <md-tab label=\"HTML\">\r\n              <code [innerHTML]=\"getEscaped(raisedButtonsHTML)\" msHighlight class=\"html\"></code>\r\n            </md-tab>\r\n          </md-tab-group>\r\n        </div>\r\n      </div>\r\n\r\n      <md-divider></md-divider>\r\n\r\n      <div fxLayout=\"column\" fxLayout.gt-md=\"row\" fxLayoutAlign=\"start stretch\" fxLayoutAlign.gt-md=\"start start\" style=\"margin: 24px 0\">\r\n        <div fxFlex fxFlex.gt-md=\"30%\" style=\"margin-right: 24px;\">\r\n          <h3>Floating Action Buttons (FAB)</h3>\r\n          <h4>&lt;md-fab&gt;</h4>\r\n          <p>Floating action buttons are used for a promoted action. They are distinguished by a circled icon floating above the UI and have motion behaviors that include morphing, launching, and a transferring anchor point.</p>\r\n          <h5>md-fab Example:</h5>\r\n          <p><code msHighlight class=\"html\">&lt;button md-fab&gt;<br/>  &lt;md-icon&gt;grade&lt;/md-icon&gt;<br/>&lt;/button&gt;</code></p>\r\n          <h5>md-mini-fab Example:</h5>\r\n          <p><code msHighlight class=\"html\">&lt;button md-mini-fab&gt;<br/>  &lt;md-icon&gt;favorite&lt;/md-icon&gt;<br/>&lt;/button&gt;</code></p>\r\n        </div>\r\n        <div class=\"demo-tabs mat-elevation-z2\" fxFlex>\r\n          <md-tab-group>\r\n            <md-tab label=\"PREVIEW\">\r\n              <div class=\"demo-preview\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                <div fxFlex=\"80%\" fxFlex.sm=\"90%\" fxLayout=\"column\">\r\n                  <md-card>\r\n                    <md-card-content fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"space-around center\" fxLayoutWrap=\"wrap\">\r\n                      <button md-fab color=\"primary\"><md-icon>grade</md-icon></button>\r\n                      <button md-fab color=\"accent\"><md-icon>favorite</md-icon></button>\r\n                      <button md-fab color=\"warn\"><md-icon>build</md-icon></button>\r\n                      <button md-fab disabled=\"true\"><md-icon>lock</md-icon></button>\r\n                    </md-card-content>\r\n                  </md-card>\r\n                  <md-card>\r\n                    <md-card-content fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"space-around center\" fxLayoutWrap=\"wrap\">\r\n                      <button md-mini-fab color=\"primary\"><md-icon>favorite</md-icon></button>\r\n                      <button md-mini-fab color=\"accent\"><md-icon>thumb_up</md-icon></button>\r\n                      <button md-mini-fab color=\"warn\"><md-icon>build</md-icon></button>\r\n                      <button md-mini-fab disabled=\"true\"><md-icon>lock</md-icon></button>\r\n                    </md-card-content>\r\n                  </md-card>\r\n                </div>\r\n              </div>\r\n            </md-tab>\r\n            <md-tab label=\"HTML\">\r\n              <code [innerHTML]=\"getEscaped(fabHTML)\" msHighlight class=\"html\"></code>\r\n            </md-tab>\r\n          </md-tab-group>\r\n        </div>\r\n      </div>\r\n\r\n      <md-divider></md-divider>\r\n\r\n      <div fxLayout=\"column\" fxLayout.gt-md=\"row\" fxLayoutAlign=\"start stretch\" fxLayoutAlign.gt-md=\"start start\" style=\"margin: 24px 0\">\r\n        <div fxFlex fxFlex.gt-md=\"30%\" style=\"margin-right: 24px;\">\r\n          <h3>Button Toggle</h3>\r\n          <h4>&lt;md-button-toggle&gt;</h4>\r\n          <p>Toggle buttons may be used to group related options. Arrange layout and spacing to convey that certain toggle buttons are part of a group.</p>\r\n          <h5>Example:</h5>\r\n          <p><code msHighlight class=\"html\">&lt;md-button-toggle&gt;<br/>  &lt;md-icon&gt;favorite&lt;/md-icon&gt;<br/>&lt;/md-button-toggle&gt;</code></p>\r\n        </div>\r\n        <div class=\"demo-tabs mat-elevation-z2\" fxFlex>\r\n          <md-tab-group>\r\n            <md-tab label=\"PREVIEW\">\r\n              <div class=\"demo-preview\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                <div fxFlex=\"80%\" fxFlex.sm=\"90%\" fxLayout=\"column\">\r\n                  <md-card>\r\n                    <md-card-content fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"space-around center\" fxLayoutWrap=\"wrap\">\r\n                      <md-button-toggle-group name=\"alignment\">\r\n                        <md-button-toggle value=\"left\"><md-icon>format_align_left</md-icon></md-button-toggle>\r\n                        <md-button-toggle value=\"center\"><md-icon>format_align_center</md-icon></md-button-toggle>\r\n                        <md-button-toggle value=\"right\"><md-icon>format_align_right</md-icon></md-button-toggle>\r\n                        <md-button-toggle value=\"justify\"><md-icon>format_align_justify</md-icon></md-button-toggle>\r\n                      </md-button-toggle-group>\r\n                      <md-button-toggle-group multiple>\r\n                        <md-button-toggle>Flour</md-button-toggle>\r\n                        <md-button-toggle>Eggs</md-button-toggle>\r\n                        <md-button-toggle>Sugar</md-button-toggle>\r\n                        <md-button-toggle>Milk</md-button-toggle>\r\n                      </md-button-toggle-group>\r\n                    </md-card-content>\r\n                  </md-card>\r\n                </div>\r\n              </div>\r\n            </md-tab>\r\n            <md-tab label=\"HTML\">\r\n              <code [innerHTML]=\"getEscaped(buttonToggleHTML)\" msHighlight class=\"html\"></code>\r\n            </md-tab>\r\n          </md-tab-group>\r\n        </div>\r\n      </div>\r\n\r\n      <md-divider></md-divider>\r\n\r\n      <div fxLayout=\"column\" fxLayout.gt-md=\"row\" fxLayoutAlign=\"start stretch\" fxLayoutAlign.gt-md=\"start start\" style=\"margin: 24px 0\">\r\n        <div fxFlex fxFlex.gt-md=\"30%\" style=\"margin-right: 24px;\">\r\n          <h3>Icon Buttons</h3>\r\n          <h4>&lt;md-icon-button&gt;</h4>\r\n          <p>A circular material button that only contains an icon and displays an ink reaction on press.</p>\r\n          <h5>Example:</h5>\r\n          <p><code msHighlight class=\"html\">&lt;button md-icon-button&gt;<br/>  &lt;md-icon&gt;grade&lt;/md-icon&gt;<br/>&lt;/button&gt;</code></p>\r\n        </div>\r\n        <div class=\"demo-tabs mat-elevation-z2\" fxFlex>\r\n          <md-tab-group>\r\n            <md-tab label=\"PREVIEW\">\r\n              <div class=\"demo-preview\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                <div fxFlex=\"80%\" fxFlex.sm=\"90%\" fxLayout=\"column\">\r\n                  <md-card>\r\n                    <md-card-content fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"space-around center\" fxLayoutWrap=\"wrap\">\r\n                      <button md-icon-button><md-icon>menu</md-icon></button>\r\n                      <button md-icon-button color=\"primary\"><md-icon>grade</md-icon></button>\r\n                      <button md-icon-button color=\"accent\"><md-icon>favorite</md-icon></button>\r\n                      <button md-icon-button color=\"warn\"><md-icon>build</md-icon></button>\r\n                      <button md-icon-button disabled=\"true\"><md-icon>lock</md-icon></button>\r\n                    </md-card-content>\r\n                  </md-card>\r\n                </div>\r\n              </div>\r\n            </md-tab>\r\n            <md-tab label=\"HTML\">\r\n              <code [innerHTML]=\"getEscaped(iconButtonHTML)\" msHighlight class=\"html\"></code>\r\n            </md-tab>\r\n          </md-tab-group>\r\n        </div>\r\n      </div>\r\n\r\n    </md-card-content>\r\n\r\n  </md-card>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/demo/components/buttons/buttons.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/demo/components/buttons/buttons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__route_animation__ = __webpack_require__("../../../../../src/app/route.animation.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ButtonsComponent = (function () {
    function ButtonsComponent() {
        this.flatButtonsHTML = "\n  <md-card>\n    <md-card-content fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"space-around center\">\n      <button md-button>Button</button>\n      <button md-button color=\"primary\">Primary</button>\n      <button md-button color=\"accent\">Accent</button>\n      <button md-button color=\"warn\">Warn</button>\n      <button md-button disabled=\"true\">Disabled</button>\n    </md-card-content>\n  </md-card>\n  ";
        this.raisedButtonsHTML = "\n  <md-card>\n    <md-card-content fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"space-around center\">\n      <button md-raised-button>Button</button>\n      <button md-raised-button color=\"primary\">Primary</button>\n      <button md-raised-button color=\"accent\">Accent</button>\n      <button md-raised-button color=\"warn\">Warn</button>\n      <button md-raised-button disabled=\"true\">Disabled</button>\n    </md-card-content>\n  </md-card>\n  ";
        this.fabHTML = "\n  <md-card>\n    <md-card-content fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"space-around center\">\n      <button md-fab color=\"primary\"><md-icon>grade</md-icon></button>\n      <button md-fab color=\"accent\"><md-icon>favorite</md-icon></button>\n      <button md-fab color=\"warn\"><md-icon>build</md-icon></button>\n      <button md-fab disabled=\"true\"><md-icon>lock</md-icon></button>\n      <button md-mini-fab color=\"primary\"><md-icon>favorite</md-icon></button>\n      <button md-mini-fab color=\"accent\"><md-icon>thumb_up</md-icon></button>\n      <button md-mini-fab color=\"warn\"><md-icon>build</md-icon></button>\n      <button md-mini-fab disabled=\"true\"><md-icon>lock</md-icon></button>\n    </md-card-content>\n  </md-card>\n  ";
        this.buttonToggleHTML = "\n  <md-card>\n    <md-card-content fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"space-around center\">\n      <md-button-toggle-group name=\"alignment\">\n        <md-button-toggle value=\"left\"><md-icon>format_align_left</md-icon></md-button-toggle>\n        <md-button-toggle value=\"center\"><md-icon>format_align_center</md-icon></md-button-toggle>\n        <md-button-toggle value=\"right\"><md-icon>format_align_right</md-icon></md-button-toggle>\n        <md-button-toggle value=\"justify\"><md-icon>format_align_justify</md-icon></md-button-toggle>\n      </md-button-toggle-group>\n      <md-button-toggle-group multiple>\n        <md-button-toggle>Flour</md-button-toggle>\n        <md-button-toggle>Eggs</md-button-toggle>\n        <md-button-toggle>Sugar</md-button-toggle>\n        <md-button-toggle>Milk</md-button-toggle>\n      </md-button-toggle-group>\n    </md-card-content>\n  </md-card>\n  ";
        this.iconButtonHTML = "\n  <md-card>\n    <md-card-content fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"space-around center\">\n      <button md-icon-button><md-icon>menu</md-icon></button>\n      <button md-icon-button color=\"primary\"><md-icon>grade</md-icon></button>\n      <button md-icon-button color=\"accent\"><md-icon>favorite</md-icon></button>\n      <button md-icon-button color=\"warn\"><md-icon>build</md-icon></button>\n      <button md-icon-button disabled=\"true\"><md-icon>lock</md-icon></button>\n    </md-card-content>\n  </md-card>\n  ";
    }
    ButtonsComponent.prototype.ngOnInit = function () {
    };
    ButtonsComponent.prototype.getEscaped = function (text) {
        return __WEBPACK_IMPORTED_MODULE_1_lodash__["escape"](text);
    };
    return ButtonsComponent;
}());
ButtonsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-buttons',
        template: __webpack_require__("../../../../../src/app/demo/components/buttons/buttons.component.html"),
        styles: [__webpack_require__("../../../../../src/app/demo/components/buttons/buttons.component.scss")],
        host: {
            '[@routeAnimation]': 'true'
        },
        animations: [__WEBPACK_IMPORTED_MODULE_2__route_animation__["b" /* routeAnimation */]]
    }),
    __metadata("design:paramtypes", [])
], ButtonsComponent);

//# sourceMappingURL=buttons.component.js.map

/***/ }),

/***/ "../../../../../src/app/demo/components/cards/cards.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"margin: 24px 0;\">\r\n  <md-card fxFlex=\"90%\">\r\n    <md-card-title>Material Cards</md-card-title>\r\n\r\n    <md-divider></md-divider>\r\n\r\n    <md-card-content fxLayout=\"column\">\r\n\r\n      <div fxLayout=\"column\" fxLayout.gt-md=\"row\" fxLayoutAlign=\"start stretch\" fxLayoutAlign.gt-md=\"start start\" style=\"margin: 24px 0\">\r\n        <div fxFlex fxFlex.gt-md=\"30%\" style=\"margin-right: 24px;\">\r\n          <div fxLayout=\"column\">\r\n            <h3>Image + Action Card</h3>\r\n            <h4>&lt;md-card&gt;</h4>\r\n            <p>Cards are containers for text, photos and actions. They are intented to provide information on a single subject.</p>\r\n            <h5>Example:</h5>\r\n            <p><code msHighlight class=\"html\">&lt;md-card&gt;<br/>  &lt;md-card-title&gt;Card Title&lt;/md-card-title&gt;<br/>  &lt;md-card-content&gt;Card Content&lt;/md-card-content&gt;<br/>  &lt;md-card-actions&gt;<br/>    &lt;button&gt;Click Me!&lt;/button&gt;<br/> &lt;/md-card-actions&gt;<br/>&lt;/md-card&gt;</code></p>\r\n        </div>\r\n        </div>\r\n        <div class=\"demo-tabs mat-elevation-z2\" fxFlex>\r\n          <md-tab-group>\r\n            <md-tab label=\"PREVIEW\">\r\n              <div class=\"demo-preview\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                <md-card fxFlex=\"80%\">\r\n                  <md-card-header>\r\n                    <img md-card-avatar src=\"assets/img/avatars/3.png\">\r\n                    <md-card-subtitle>\r\n                      Yesterday\r\n                    </md-card-subtitle>\r\n                    <md-card-title>Gerald Morris</md-card-title>\r\n                  </md-card-header>\r\n                  <img md-card-image src=\"assets/img/backgrounds/1.jpg\">\r\n                  <md-card-content>\r\n                    <p>Piqued favour stairs it enable exeter as seeing. Remainder met improving but engrossed sincerity age. Better but length gay denied abroad are. Attachment astonished to on appearance imprudence so collecting in excellence. Tiled way blind lived whose new. The for fully had she there leave merit enjoy forth. </p>\r\n                  </md-card-content>\r\n                  <md-divider></md-divider>\r\n                  <md-card-actions>\r\n                    <div fxLayout=\"row\">\r\n                      <button md-icon-button>\r\n                        <md-icon>share</md-icon>\r\n                      </button>\r\n                      <button md-icon-button>\r\n                        <md-icon>favorite</md-icon>\r\n                      </button>\r\n                      <span fxFlex></span>\r\n                      <button md-button>\r\n                        More Info\r\n                      </button>\r\n                      <button md-button>\r\n                        Save as\r\n                      </button>\r\n                    </div>\r\n                  </md-card-actions>\r\n                </md-card>\r\n              </div>\r\n            </md-tab>\r\n            <md-tab label=\"HTML\">\r\n              <code [innerHTML]=\"getEscaped(card1HTML)\" msHighlight class=\"html\"></code>\r\n            </md-tab>\r\n          </md-tab-group>\r\n        </div>\r\n      </div>\r\n\r\n      <md-divider></md-divider>\r\n\r\n      <div fxLayout=\"column\" fxLayout.gt-md=\"row\" fxLayoutAlign=\"start stretch\" fxLayoutAlign.gt-md=\"start start\" style=\"margin: 24px 0\">\r\n\r\n        <div fxFlex>\r\n          <h3>Standard Card with Actions</h3>\r\n          <div class=\"demo-tabs mat-elevation-z2\" fxFlex>\r\n            <md-tab-group>\r\n              <md-tab label=\"PREVIEW\">\r\n                <div class=\"demo-preview\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                  <md-card fxFlex=\"80%\">\r\n                    <md-card-title>Standard Card with Actions</md-card-title>\r\n                    <md-card-subtitle>Subtitle</md-card-subtitle>\r\n                    <md-card-content>\r\n                      <p>Old there any widow law rooms. Agreed but expect repair she nay sir silent person. Direction\r\n                        can dependent one bed situation attempted. His she are man their spite avoid. Her pretended\r\n                        fulfilled extremely education yet. Satisfied did one admitting incommode tolerably how are. </p>\r\n                    </md-card-content>\r\n                    <md-card-actions align=\"end\">\r\n                      <button md-button>Cancel</button>\r\n                      <button color=\"primary\" md-raised-button>Action</button>\r\n                    </md-card-actions>\r\n                  </md-card>\r\n                </div>\r\n              </md-tab>\r\n              <md-tab label=\"HTML\">\r\n                <code [innerHTML]=\"getEscaped(card2HTML)\" msHighlight class=\"html\"></code>\r\n              </md-tab>\r\n            </md-tab-group>\r\n          </div>\r\n        </div>\r\n\r\n        <span fxFlex=\"24px\"></span>\r\n\r\n        <div fxFlex>\r\n          <h3>Standard Card</h3>\r\n          <div class=\"demo-tabs mat-elevation-z2\">\r\n            <md-tab-group>\r\n              <md-tab label=\"PREVIEW\">\r\n                <div class=\"demo-preview\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                  <md-card fxFlex=\"80%\">\r\n                    <md-card-title>Standard Card</md-card-title>\r\n                    <md-card-subtitle>Subtitle</md-card-subtitle>\r\n                    <md-card-content>\r\n                      <p>Do play they miss give so up. Words to up style of since world. We leaf to snug on no need. Way\r\n                        own uncommonly travelling now acceptance bed compliment solicitude. Dissimilar admiration so\r\n                        terminated no in contrasted it. Advantages entreaties mr he apartments do. Limits far yet turned\r\n                        highly repair parish talked six. Draw fond rank form nor the day eat. </p>\r\n                    </md-card-content>\r\n                  </md-card>\r\n                </div>\r\n              </md-tab>\r\n              <md-tab label=\"HTML\">\r\n                <code [innerHTML]=\"getEscaped(card3HTML)\" msHighlight class=\"html\"></code>\r\n              </md-tab>\r\n            </md-tab-group>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </md-card-content>\r\n\r\n  </md-card>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/demo/components/cards/cards.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block; }\n\nmd-card-subtitle:not(:first-child), md-card-title:not(:first-child) {\n  margin-top: -14px; }\n\n.demo-preview md-card > md-card-content > * {\n  margin: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/demo/components/cards/cards.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__route_animation__ = __webpack_require__("../../../../../src/app/route.animation.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CardsComponent = (function () {
    function CardsComponent() {
        this.card1HTML = "\n  <md-card fxFlex=\"80%\">\n    <md-card-header>\n      <img md-card-avatar=\"\" src=\"assets/img/avatars/Avatar.png\">\n      <md-card-subtitle>\n        Yesterday\n      </md-card-subtitle>\n      <md-card-title>Gerald Morris</md-card-title>\n    </md-card-header>\n    <img md-card-image src=\"assets/img/backgrounds/1.jpg\">\n    <md-card-content>\n      <p>Piqued favour stairs it enable exeter as seeing. Remainder met improving but engrossed sincerity age. Better but length gay denied abroad are. Attachment astonished to on appearance imprudence so collecting in excellence. Tiled way blind lived whose new. The for fully had she there leave merit enjoy forth. </p>\n    </md-card-content>\n    <md-divider></md-divider>\n    <md-card-actions>\n      <div fxLayout=\"row\">\n        <button md-icon-button>\n          <md-icon>share</md-icon>\n        </button>\n        <button md-icon-button>\n          <md-icon>favorite</md-icon>\n        </button>\n        <span fxFlex></span>\n        <button md-button>\n          More Info\n        </button>\n        <button md-button>\n          Save as\n        </button>\n      </div>\n    </md-card-actions>\n  </md-card>\n  ";
        this.card2HTML = "\n  <md-card fxFlex=\"80%\">\n    <md-card-title>Standard Card with Actions</md-card-title>\n    <md-card-subtitle>Subtitle</md-card-subtitle>\n    <md-card-content>\n      <p>Old there any widow law rooms. Agreed but expect repair she nay sir silent person. Direction\n        can dependent one bed situation attempted. His she are man their spite avoid. Her pretended\n        fulfilled extremely education yet. Satisfied did one admitting incommode tolerably how are. </p>\n    </md-card-content>\n    <md-card-actions align=\"end\">\n      <button md-button>Cancel</button>\n      <button color=\"primary\" md-raised-button>Action</button>\n    </md-card-actions>\n  </md-card>\n  ";
        this.card3HTML = "\n  <md-card fxFlex=\"80%\">\n    <md-card-title>Standard Card</md-card-title>\n    <md-card-subtitle>Subtitle</md-card-subtitle>\n    <md-card-content>\n      <p>Do play they miss give so up. Words to up style of since world. We leaf to snug on no need. Way\n        own uncommonly travelling now acceptance bed compliment solicitude. Dissimilar admiration so\n        terminated no in contrasted it. Advantages entreaties mr he apartments do. Limits far yet turned\n        highly repair parish talked six. Draw fond rank form nor the day eat. </p>\n    </md-card-content>\n  </md-card>\n  ";
    }
    CardsComponent.prototype.ngOnInit = function () {
    };
    CardsComponent.prototype.getEscaped = function (text) {
        return __WEBPACK_IMPORTED_MODULE_1_lodash__["escape"](text);
    };
    return CardsComponent;
}());
CardsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-cards',
        template: __webpack_require__("../../../../../src/app/demo/components/cards/cards.component.html"),
        styles: [__webpack_require__("../../../../../src/app/demo/components/cards/cards.component.scss")],
        host: {
            '[@routeAnimation]': 'true'
        },
        animations: [__WEBPACK_IMPORTED_MODULE_2__route_animation__["b" /* routeAnimation */]]
    }),
    __metadata("design:paramtypes", [])
], CardsComponent);

//# sourceMappingURL=cards.component.js.map

/***/ }),

/***/ "../../../../../src/app/demo/components/dialogs/dialogs.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"margin: 24px 0;\">\r\n  <md-card fxFlex=\"90%\">\r\n    <md-card-title>Material Dialogs</md-card-title>\r\n\r\n    <md-divider></md-divider>\r\n\r\n    <md-card-content fxLayout=\"column\">\r\n\r\n      <div fxLayout=\"column\" fxLayout.gt-md=\"row\" fxLayoutAlign=\"start stretch\" fxLayoutAlign.gt-md=\"start start\" style=\"margin: 24px 0\">\r\n        <div fxFlex fxFlex.gt-md=\"30%\" style=\"margin-right: 24px;\">\r\n          <div fxLayout=\"column\">\r\n            <h3>Dialog</h3>\r\n            <h4>&lt;md-dialog&gt;</h4>\r\n            <p>MdDialogs can be used to open modal dialogs with Material Design styling and animations.</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"demo-tabs mat-elevation-z2\" fxFlex>\r\n          <md-tab-group>\r\n            <md-tab label=\"PREVIEW\">\r\n              <div class=\"demo-preview\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                <md-card fxFlex=\"80%\" fxFlex.sm=\"90%\">\r\n                  <md-card-content fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n                    <button md-raised-button type=\"button\" (click)=\"openDialog()\" color=\"primary\">Open Dialog</button>\r\n                    <p *ngIf=\"result\">You chose: {{ result }}</p>\r\n                  </md-card-content>\r\n                </md-card>\r\n              </div>\r\n            </md-tab>\r\n            <md-tab label=\"HTML\">\r\n              <code [innerHTML]=\"getEscaped(dialogHTML)\" msHighlight class=\"html\"></code>\r\n            </md-tab>\r\n          </md-tab-group>\r\n        </div>\r\n      </div>\r\n\r\n    </md-card-content>\r\n\r\n  </md-card>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/demo/components/dialogs/dialogs.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/demo/components/dialogs/dialogs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__route_animation__ = __webpack_require__("../../../../../src/app/route.animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DemoDialog; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DialogsComponent = (function () {
    function DialogsComponent(dialog) {
        this.dialog = dialog;
        this.dialogHTML = "\n  <button md-raised-button type=\"button\" (click)=\"openDialog()\" color=\"primary\">Open Dialog</button>\n  <p *ngIf=\"result\">You chose: {{ result }}</p>\n  ";
    }
    DialogsComponent.prototype.openDialog = function () {
        var _this = this;
        this.dialogRef = this.dialog.open(DemoDialog, {
            disableClose: false
        });
        this.dialogRef.afterClosed().subscribe(function (result) {
            _this.result = result;
            _this.dialogRef = null;
        });
    };
    DialogsComponent.prototype.getEscaped = function (text) {
        return __WEBPACK_IMPORTED_MODULE_2_lodash__["escape"](text);
    };
    return DialogsComponent;
}());
DialogsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-dialogs',
        template: __webpack_require__("../../../../../src/app/demo/components/dialogs/dialogs.component.html"),
        styles: [__webpack_require__("../../../../../src/app/demo/components/dialogs/dialogs.component.scss")],
        host: {
            '[@routeAnimation]': 'true'
        },
        animations: [__WEBPACK_IMPORTED_MODULE_1__route_animation__["b" /* routeAnimation */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MdDialog */]) === "function" && _a || Object])
], DialogsComponent);

var DemoDialog = (function () {
    function DemoDialog(dialogRef) {
        this.dialogRef = dialogRef;
    }
    return DemoDialog;
}());
DemoDialog = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-demo-dialog',
        template: "\n  <h1>Would you like to order pizza?</h1>\n\n  <md-dialog-actions align=\"end\">\n    <button md-button (click)=\"dialogRef.close('No!')\">No</button>\n    <button md-button color=\"primary\" (click)=\"dialogRef.close('Yes!')\">Yes</button>\n  </md-dialog-actions>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdDialogRef */]) === "function" && _b || Object])
], DemoDialog);

var _a, _b;
//# sourceMappingURL=dialogs.component.js.map

/***/ }),

/***/ "../../../../../src/app/demo/components/grid-list/grid-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"margin: 24px 0;\">\r\n  <md-card fxFlex=\"90%\">\r\n    <md-card-title>Material Grid List</md-card-title>\r\n\r\n    <md-divider></md-divider>\r\n\r\n    <md-card-content fxLayout=\"column\">\r\n\r\n      <div fxLayout=\"column\" fxLayout.gt-md=\"row\" fxLayoutAlign=\"start stretch\" fxLayoutAlign.gt-md=\"start start\" style=\"margin: 24px 0\">\r\n        <div fxFlex fxFlex.gt-md=\"30%\" style=\"margin-right: 24px;\">\r\n          <div fxLayout=\"column\">\r\n            <h3>Grid List</h3>\r\n            <h4>&lt;md-grid-list&gt;</h4>\r\n            <p>An md-grid-list is an alternative list view that arranges cells into grid-based layout.</p>\r\n            <h5>Example:</h5>\r\n            <p><code msHighlight class=\"html\">&lt;md-grid-list cols=\"4\"&gt;<br/>  &lt;md-grid-tile&gt;Content 1&lt;/md-grid-tile&gt;<br/>&lt;/md-grid-list&gt;</code></p>\r\n          </div>\r\n        </div>\r\n        <div class=\"demo-tabs mat-elevation-z2\" fxFlex>\r\n          <md-tab-group>\r\n            <md-tab label=\"PREVIEW\">\r\n              <div class=\"demo-preview\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                <md-card fxFlex=\"80%\" fxFlex.sm=\"90%\">\r\n                  <md-card-content>\r\n                    <md-grid-list cols=\"4\" rowHeight=\"100px\">\r\n                      <md-grid-tile *ngFor=\"let tile of tiles\" [colspan]=\"tile.cols\" [rowspan]=\"tile.rows\"\r\n                                    [style.background]=\"tile.color\">\r\n                        {{tile.text}}\r\n                      </md-grid-tile>\r\n                    </md-grid-list>\r\n                  </md-card-content>\r\n                </md-card>\r\n              </div>\r\n            </md-tab>\r\n            <md-tab label=\"HTML\">\r\n              <code [innerHTML]=\"getEscaped(gridListHTML)\" msHighlight class=\"html\"></code>\r\n            </md-tab>\r\n          </md-tab-group>\r\n        </div>\r\n      </div>\r\n\r\n    </md-card-content>\r\n\r\n  </md-card>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/demo/components/grid-list/grid-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/demo/components/grid-list/grid-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__route_animation__ = __webpack_require__("../../../../../src/app/route.animation.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GridListComponent = (function () {
    function GridListComponent() {
        this.tiles = [
            { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
            { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
            { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
            { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
        ];
        this.gridListHTML = "\n  <md-grid-list cols=\"4\" rowHeight=\"100px\">\n    <md-grid-tile *ngFor=\"let tile of tiles\" [colspan]=\"tile.cols\" [rowspan]=\"tile.rows\"\n                  [style.background]=\"tile.color\">\n      {{tile.text}}\n    </md-grid-tile>\n  </md-grid-list>\n  ";
    }
    GridListComponent.prototype.ngOnInit = function () {
    };
    GridListComponent.prototype.getEscaped = function (text) {
        return __WEBPACK_IMPORTED_MODULE_1_lodash__["escape"](text);
    };
    return GridListComponent;
}());
GridListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-grid-list',
        template: __webpack_require__("../../../../../src/app/demo/components/grid-list/grid-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/demo/components/grid-list/grid-list.component.scss")],
        host: {
            '[@routeAnimation]': 'true'
        },
        animations: [__WEBPACK_IMPORTED_MODULE_2__route_animation__["b" /* routeAnimation */]]
    }),
    __metadata("design:paramtypes", [])
], GridListComponent);

//# sourceMappingURL=grid-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/demo/components/lists/lists.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"margin: 24px 0;\">\r\n  <md-card fxFlex=\"90%\">\r\n    <md-card-title>Material Lists</md-card-title>\r\n\r\n    <md-divider></md-divider>\r\n\r\n    <md-card-content fxLayout=\"column\">\r\n\r\n      <div fxLayout=\"column\" fxLayout.gt-md=\"row\" fxLayoutAlign=\"start stretch\" fxLayoutAlign.gt-md=\"start start\" style=\"margin: 24px 0\">\r\n        <div fxFlex fxFlex.gt-md=\"30%\" style=\"margin-right: 24px;\">\r\n          <div fxLayout=\"column\">\r\n            <h3>Two-Line List with Avatars</h3>\r\n            <h4>&lt;md-list&gt;</h4>\r\n            <p>Lists are made up of a continuous column of rows. Each row contains a tile. Primary actions fill the tile, and supplemental actions are represented by icons and text.</p>\r\n            <h5>Example:</h5>\r\n            <p><code msHighlight class=\"html\">&lt;md-list&gt;<br/>  &lt;md-list-item&gt;<br/>    &lt;img md-list-avatar src=\"avatar.png\"&gt;<br/>    &lt;h3 md-line&gt;John&lt;/h3&gt;<br/>    &lt;p md-line&gt;Brunch?&lt;/p&gt;<br/>  &lt;md-list-item&gt;<br/>&lt;/md-list&gt;</code></p>\r\n          </div>\r\n        </div>\r\n        <div class=\"demo-tabs mat-elevation-z2\" fxFlex>\r\n          <md-tab-group>\r\n            <md-tab label=\"PREVIEW\">\r\n              <div class=\"demo-preview\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                <md-list class=\"demo-list mat-elevation-z2\">\r\n                  <md-list-item>\r\n                    <img md-list-avatar src=\"assets/img/avatars/1.png\">\r\n                    <h3 md-line>John</h3>\r\n                    <p md-line>\r\n                      <span>Brunch?</span>\r\n                      <span class=\"subline\">-- Did you want to go on Sunday? I was thinking</span>\r\n                    </p>\r\n                  </md-list-item>\r\n                  <md-list-item>\r\n                    <img md-list-avatar src=\"assets/img/avatars/2.png\">\r\n                    <h3 md-line>Peter</h3>\r\n                    <p md-line>\r\n                      <span>Summer BBQ</span>\r\n                      <span class=\"subline\">-- Wish I could come, but I have some special</span>\r\n                    </p>\r\n                  </md-list-item>\r\n                  <md-list-item>\r\n                    <img md-list-avatar src=\"assets/img/avatars/3.png\">\r\n                    <h3 md-line>Nancy</h3>\r\n                    <p md-line>\r\n                      <span>Oui oui</span>\r\n                      <span class=\"subline\">-- Have you booked the Paris trip?</span>\r\n                    </p>\r\n                  </md-list-item>\r\n                </md-list>\r\n              </div>\r\n            </md-tab>\r\n            <md-tab label=\"HTML\">\r\n              <code [innerHTML]=\"getEscaped(twoLineListHTML)\" msHighlight class=\"html\"></code>\r\n            </md-tab>\r\n          </md-tab-group>\r\n        </div>\r\n      </div>\r\n\r\n      <md-divider></md-divider>\r\n\r\n      <div fxLayout=\"column\" fxLayout.gt-md=\"row\" fxLayoutAlign=\"start stretch\" fxLayoutAlign.gt-md=\"start start\" style=\"margin: 24px 0\">\r\n        <div fxFlex fxFlex.gt-md=\"30%\" style=\"margin-right: 24px;\">\r\n          <h3>Three-Line List with Avatars</h3>\r\n          <p>Lists with three lines add extra content to distinguish your list-item.</p>\r\n          <h5>Example:</h5>\r\n          <p><code msHighlight class=\"html\">&lt;md-list&gt;<br/>  &lt;md-list-item&gt;<br/>    &lt;img md-list-avatar src=\"avatar.png\"&gt;<br/>    &lt;h3 md-line&gt;John&lt;/h3&gt;<br/>    &lt;p md-line&gt;Brunch?&lt;/p&gt;<br/>    &lt;p md-line class=\"subline\"&gt;<br/>      Did you want to go on Sunday?<br/>    &lt;/p&gt;<br/>  &lt;md-list-item&gt;<br/>&lt;/md-list&gt;</code></p>\r\n        </div>\r\n        <div class=\"demo-tabs mat-elevation-z2\" fxFlex>\r\n          <md-tab-group>\r\n            <md-tab label=\"PREVIEW\">\r\n              <div class=\"demo-preview\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                <md-list class=\"demo-list mat-elevation-z2\">\r\n                  <md-list-item>\r\n                    <img md-list-avatar src=\"assets/img/avatars/1.png\">\r\n                    <h3 md-line>John</h3>\r\n                    <p md-line>Brunch?</p>\r\n                    <p md-line class=\"subline\">Did you want to go on Sunday? I was thinking</p>\r\n                  </md-list-item>\r\n                  <md-list-item>\r\n                    <img md-list-avatar src=\"assets/img/avatars/2.png\">\r\n                    <h3 md-line>Peter</h3>\r\n                    <p md-line>Summer BBQ</p>\r\n                    <p md-line class=\"subline\">Wish I could come, but I have some special</p>\r\n                  </md-list-item>\r\n                  <md-list-item>\r\n                    <img md-list-avatar src=\"assets/img/avatars/3.png\">\r\n                    <h3 md-line>Nancy</h3>\r\n                    <p md-line>Oui oui</p>\r\n                    <p md-line class=\"subline\">Have you booked the Paris trip?</p>\r\n                  </md-list-item>\r\n                </md-list>\r\n              </div>\r\n            </md-tab>\r\n            <md-tab label=\"HTML\">\r\n              <code [innerHTML]=\"getEscaped(threeLineListHTML)\" msHighlight class=\"html\"></code>\r\n            </md-tab>\r\n          </md-tab-group>\r\n        </div>\r\n      </div>\r\n\r\n      <md-divider></md-divider>\r\n\r\n      <div fxLayout=\"column\" fxLayout.gt-md=\"row\" fxLayoutAlign=\"start stretch\" fxLayoutAlign.gt-md=\"start start\" style=\"margin: 24px 0\">\r\n\r\n        <div fxFlex>\r\n          <h3>Three-Line List</h3>\r\n          <div class=\"demo-tabs mat-elevation-z2\" fxFlex>\r\n            <md-tab-group>\r\n              <md-tab label=\"PREVIEW\">\r\n                <div class=\"demo-preview\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                  <md-list class=\"demo-list mat-elevation-z2\">\r\n                    <md-list-item>\r\n                      <h3 md-line>John</h3>\r\n                      <p md-line>Brunch?</p>\r\n                      <p md-line class=\"subline\">Did you want to go on Sunday? I was thinking</p>\r\n                    </md-list-item>\r\n                    <md-list-item>\r\n                      <h3 md-line>Peter</h3>\r\n                      <p md-line>Summer BBQ</p>\r\n                      <p md-line class=\"subline\">Wish I could come, but I have some special</p>\r\n                    </md-list-item>\r\n                    <md-list-item>\r\n                      <h3 md-line>Nancy</h3>\r\n                      <p md-line>Oui oui</p>\r\n                      <p md-line class=\"subline\">Have you booked the Paris trip?</p>\r\n                    </md-list-item>\r\n                  </md-list>\r\n                </div>\r\n              </md-tab>\r\n              <md-tab label=\"HTML\">\r\n                <code [innerHTML]=\"getEscaped(threeLineListWithoutAvatarsHTML)\" msHighlight class=\"html\"></code>\r\n              </md-tab>\r\n            </md-tab-group>\r\n          </div>\r\n        </div>\r\n\r\n        <span fxFlex=\"24px\"></span>\r\n\r\n        <div fxFlex>\r\n          <h3>One-Line List</h3>\r\n          <div class=\"demo-tabs mat-elevation-z2\">\r\n            <md-tab-group>\r\n              <md-tab label=\"PREVIEW\">\r\n                <div class=\"demo-preview\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                  <md-list class=\"demo-list mat-elevation-z2\">\r\n                    <md-list-item>\r\n                      <h3 md-line>John</h3>\r\n                    </md-list-item>\r\n                    <md-list-item>\r\n                      <h3 md-line>Peter</h3>\r\n                    </md-list-item>\r\n                    <md-list-item>\r\n                      <h3 md-line>Nancy</h3>\r\n                    </md-list-item>\r\n                  </md-list>\r\n                </div>\r\n              </md-tab>\r\n              <md-tab label=\"HTML\">\r\n                <code [innerHTML]=\"getEscaped(oneLineList)\" msHighlight class=\"html\"></code>\r\n              </md-tab>\r\n            </md-tab-group>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </md-card-content>\r\n\r\n  </md-card>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/demo/components/lists/lists.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/demo/components/lists/lists.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__route_animation__ = __webpack_require__("../../../../../src/app/route.animation.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListsComponent = (function () {
    function ListsComponent() {
        this.twoLineListHTML = "\n  <md-list class=\"demo-list mat-elevation-z2\">\n    <md-list-item>\n      <img md-list-avatar src=\"assets/img/avatars/John.png\">\n      <h3 md-line>John</h3>\n      <p md-line>\n        <span>Brunch?</span>\n        <span class=\"subline\">-- Did you want to go on Sunday? I was thinking</span>\n      </p>\n    </md-list-item>\n    <md-list-item>\n      <img md-list-avatar src=\"assets/img/avatars/Peter.png\">\n      <h3 md-line>Peter</h3>\n      <p md-line>\n        <span>Summer BBQ</span>\n        <span class=\"subline\">-- Wish I could come, but I have some special</span>\n      </p>\n    </md-list-item>\n    <md-list-item>\n      <img md-list-avatar src=\"assets/img/avatars/Nancy.png\">\n      <h3 md-line>Nancy</h3>\n      <p md-line>\n        <span>Oui oui</span>\n        <span class=\"subline\">-- Have you booked the Paris trip?</span>\n      </p>\n    </md-list-item>\n  </md-list>\n  ";
        this.threeLineListHTML = "\n  <md-list class=\"demo-list mat-elevation-z2\">\n    <md-list-item>\n      <img md-list-avatar src=\"assets/img/avatars/John.png\">\n      <h3 md-line>John</h3>\n      <p md-line>Brunch?</p>\n      <p md-line class=\"subline\">Did you want to go on Sunday? I was thinking</p>\n    </md-list-item>\n    <md-list-item>\n      <img md-list-avatar src=\"assets/img/avatars/Peter.png\">\n      <h3 md-line>Peter</h3>\n      <p md-line>Summer BBQ</p>\n      <p md-line class=\"subline\">Wish I could come, but I have some special</p>\n    </md-list-item>\n    <md-list-item>\n      <img md-list-avatar src=\"assets/img/avatars/Nancy.png\">\n      <h3 md-line>Nancy</h3>\n      <p md-line>Oui oui</p>\n      <p md-line class=\"subline\">Have you booked the Paris trip?</p>\n    </md-list-item>\n  </md-list>\n  ";
        this.threeLineListWithoutAvatarsHTML = "\n  <md-list class=\"demo-list mat-elevation-z2\">\n    <md-list-item>\n      <h3 md-line>John</h3>\n      <p md-line>Brunch?</p>\n      <p md-line class=\"subline\">Did you want to go on Sunday? I was thinking</p>\n    </md-list-item>\n    <md-list-item>\n      <h3 md-line>Peter</h3>\n      <p md-line>Summer BBQ</p>\n      <p md-line class=\"subline\">Wish I could come, but I have some special</p>\n    </md-list-item>\n    <md-list-item>\n      <h3 md-line>Nancy</h3>\n      <p md-line>Oui oui</p>\n      <p md-line class=\"subline\">Have you booked the Paris trip?</p>\n    </md-list-item>\n  </md-list>\n  ";
        this.oneLineList = "\n  <md-list class=\"demo-list mat-elevation-z2\">\n    <md-list-item>\n      <h3 md-line>John</h3>\n    </md-list-item>\n    <md-list-item>\n      <h3 md-line>Peter</h3>\n    </md-list-item>\n    <md-list-item>\n      <h3 md-line>Nancy</h3>\n    </md-list-item>\n  </md-list>\n  ";
    }
    ListsComponent.prototype.ngOnInit = function () {
    };
    ListsComponent.prototype.getEscaped = function (text) {
        return __WEBPACK_IMPORTED_MODULE_1_lodash__["escape"](text);
    };
    return ListsComponent;
}());
ListsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-lists',
        template: __webpack_require__("../../../../../src/app/demo/components/lists/lists.component.html"),
        styles: [__webpack_require__("../../../../../src/app/demo/components/lists/lists.component.scss")],
        host: {
            '[@routeAnimation]': 'true'
        },
        animations: [
            __WEBPACK_IMPORTED_MODULE_2__route_animation__["b" /* routeAnimation */]
        ]
    }),
    __metadata("design:paramtypes", [])
], ListsComponent);

//# sourceMappingURL=lists.component.js.map

/***/ }),

/***/ "../../../../../src/app/demo/components/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"margin: 24px 0;\">\r\n  <md-card fxFlex=\"90%\">\r\n    <md-card-title>Material Menu</md-card-title>\r\n\r\n    <md-divider></md-divider>\r\n\r\n    <md-card-content fxLayout=\"column\">\r\n\r\n      <div fxLayout=\"column\" fxLayout.gt-md=\"row\" fxLayoutAlign=\"start stretch\" fxLayoutAlign.gt-md=\"start start\" style=\"margin: 24px 0\">\r\n        <div fxFlex fxFlex.gt-md=\"30%\" style=\"margin-right: 24px;\">\r\n          <div fxLayout=\"column\">\r\n            <h3>Menu with Icons</h3>\r\n            <h4>&lt;md-menu&gt;</h4>\r\n            <p>Menus offer a list of options that are displayed when triggered. The position (before, after) and (above, below) is automatically decided, but can be overridden with e.g. x-position='before'.</p>\r\n            <h5>Example:</h5>\r\n            <p><code msHighlight class=\"html\">&lt;md-menu&gt;<br/>  &lt;button md-menu-item&gt;<br/>    &lt;md-icon&gt;dialpad&lt;/md-icon&gt;<br/>  &lt;/button&gt;<br/>&lt;/md-menu&gt;</code></p>\r\n          </div>\r\n        </div>\r\n        <div class=\"demo-tabs mat-elevation-z2\" fxFlex>\r\n          <md-tab-group>\r\n            <md-tab label=\"PREVIEW\">\r\n              <div class=\"demo-preview\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                <md-card fxFlex=\"80%\" fxFlex.sm=\"90%\">\r\n                  <md-card-content fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"center center\">\r\n                    <button md-icon-button [mdMenuTriggerFor]=\"menu\">\r\n                      <md-icon>more_vert</md-icon>\r\n                    </button>\r\n\r\n                    <md-menu #menu=\"mdMenu\">\r\n                      <button md-menu-item>\r\n                        <md-icon> dialpad </md-icon>\r\n                        <span> Redial </span>\r\n                      </button>\r\n                      <button md-menu-item disabled>\r\n                        <md-icon> voicemail </md-icon>\r\n                        <span> Check voicemail </span>\r\n                      </button>\r\n                      <button md-menu-item>\r\n                        <md-icon> notifications_off </md-icon>\r\n                        <span> Disable alerts </span>\r\n                      </button>\r\n                    </md-menu>\r\n                  </md-card-content>\r\n                </md-card>\r\n              </div>\r\n            </md-tab>\r\n            <md-tab label=\"HTML\">\r\n              <code [innerHTML]=\"getEscaped(menuHTML)\" msHighlight class=\"html\"></code>\r\n            </md-tab>\r\n          </md-tab-group>\r\n        </div>\r\n      </div>\r\n\r\n      <md-divider></md-divider>\r\n\r\n      <div fxLayout=\"column\" fxLayout.gt-md=\"row\" fxLayoutAlign=\"start stretch\" fxLayoutAlign.gt-md=\"start start\" style=\"margin: 24px 0\">\r\n\r\n        <div fxFlex>\r\n          <h3>Menu without Icons</h3>\r\n          <div class=\"demo-tabs mat-elevation-z2\" fxFlex>\r\n            <md-tab-group>\r\n              <md-tab label=\"PREVIEW\">\r\n                <div class=\"demo-preview\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                  <md-card fxFlex=\"80%\" fxFlex.sm=\"90%\">\r\n                    <md-card-content fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"center center\">\r\n                      <button md-icon-button [mdMenuTriggerFor]=\"menu2\">\r\n                        <md-icon>grade</md-icon>\r\n                      </button>\r\n\r\n                      <md-menu #menu2=\"mdMenu\">\r\n                        <button md-menu-item> Refresh </button>\r\n                        <button md-menu-item> Settings </button>\r\n                        <button md-menu-item> Help </button>\r\n                        <button md-menu-item disabled> Sign Out </button>\r\n                      </md-menu>\r\n                    </md-card-content>\r\n                  </md-card>\r\n                </div>\r\n              </md-tab>\r\n              <md-tab label=\"HTML\">\r\n                <code [innerHTML]=\"getEscaped(menu2HTML)\" msHighlight class=\"html\"></code>\r\n              </md-tab>\r\n            </md-tab-group>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </md-card-content>\r\n\r\n  </md-card>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/demo/components/menu/menu.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/demo/components/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__route_animation__ = __webpack_require__("../../../../../src/app/route.animation.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuComponent = (function () {
    function MenuComponent() {
        this.menuHTML = "\n  <button md-icon-button [mdMenuTriggerFor]=\"menu\">\n    <md-icon>more_vert</md-icon>\n  </button>\n\n  <md-menu #menu=\"mdMenu\">\n    <button md-menu-item>\n      <md-icon> dialpad </md-icon>\n      <span> Redial </span>\n    </button>\n    <button md-menu-item disabled>\n      <md-icon> voicemail </md-icon>\n      <span> Check voicemail </span>\n    </button>\n    <button md-menu-item>\n      <md-icon> notifications_off </md-icon>\n      <span> Disable alerts </span>\n    </button>\n  </md-menu>\n  ";
        this.menu2HTML = "\n  <button md-icon-button [mdMenuTriggerFor]=\"menu2\">\n    <md-icon>grade</md-icon>\n  </button>\n  \n  <md-menu #menu2=\"mdMenu\">\n    <button md-menu-item> Refresh </button>\n    <button md-menu-item> Settings </button>\n    <button md-menu-item> Help </button>\n    <button md-menu-item disabled> Sign Out </button>\n  </md-menu>\n  ";
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.prototype.getEscaped = function (text) {
        return __WEBPACK_IMPORTED_MODULE_1_lodash__["escape"](text);
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-menu',
        template: __webpack_require__("../../../../../src/app/demo/components/menu/menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/demo/components/menu/menu.component.scss")],
        host: {
            '[@routeAnimation]': 'true'
        },
        animations: [__WEBPACK_IMPORTED_MODULE_2__route_animation__["b" /* routeAnimation */]]
    }),
    __metadata("design:paramtypes", [])
], MenuComponent);

//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/demo/components/slider/slider.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"margin: 24px 0;\">\r\n  <md-card fxFlex=\"90%\">\r\n    <md-card-title>Material Sliders</md-card-title>\r\n\r\n    <md-divider></md-divider>\r\n\r\n    <md-card-content fxLayout=\"column\">\r\n\r\n      <div fxLayout=\"column\" fxLayout.gt-md=\"row\" fxLayoutAlign=\"start stretch\" fxLayoutAlign.gt-md=\"start start\" style=\"margin: 24px 0\">\r\n        <div fxFlex fxFlex.gt-md=\"30%\" style=\"margin-right: 24px;\">\r\n          <div fxLayout=\"column\">\r\n            <h3>Slider with Thumb Label and Ticks</h3>\r\n            <h4>&lt;md-slider&gt;</h4>\r\n            <p>Sliders allow for selection of a value from a range via mouse, touch, or keyboard.</p>\r\n            <h5>Example:</h5>\r\n            <p><code msHighlight class=\"html\">&lt;md-slider min=\"1\" max=\"5\" step=\"0.5\" value=\"1.5\"&gt;&lt;/md-slider&gt;</code></p>\r\n          </div>\r\n        </div>\r\n        <div class=\"demo-tabs mat-elevation-z2\" fxFlex>\r\n          <md-tab-group>\r\n            <md-tab label=\"PREVIEW\">\r\n              <div class=\"demo-preview\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                <md-card fxFlex=\"80%\" fxFlex.sm=\"90%\">\r\n                  <md-card-content>\r\n                    <md-slider style=\"width: 100%;\" min=\"1\" max=\"10\" thumbLabel tickInterval=\"1\" value=\"7\"></md-slider>\r\n                    <md-slider color=\"primary\" style=\"width: 100%;\" min=\"1\" max=\"10\" value=\"2\"></md-slider>\r\n                    <md-slider color=\"warn\" style=\"width: 100%;\" min=\"1\" max=\"10\" value=\"8\"></md-slider>\r\n                  </md-card-content>\r\n                </md-card>\r\n              </div>\r\n            </md-tab>\r\n            <md-tab label=\"HTML\">\r\n              <code [innerHTML]=\"getEscaped(slider1HTML)\" msHighlight class=\"html\"></code>\r\n            </md-tab>\r\n          </md-tab-group>\r\n        </div>\r\n      </div>\r\n\r\n      <md-divider></md-divider>\r\n\r\n      <div fxLayout=\"column\" fxLayout.gt-md=\"row\" fxLayoutAlign=\"start stretch\" fxLayoutAlign.gt-md=\"start start\" style=\"margin: 24px 0\">\r\n\r\n        <div fxFlex>\r\n          <h3>Vertical Slider with Thumb-Label</h3>\r\n          <div class=\"demo-tabs mat-elevation-z2\" fxFlex>\r\n            <md-tab-group>\r\n              <md-tab label=\"PREVIEW\">\r\n                <div class=\"demo-preview\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                  <md-card fxFlex=\"80%\" fxFlex.sm=\"90%\">\r\n                    <md-card-content fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                      <md-slider vertical min=\"1\" max=\"10\" thumbLabel tickInterval=\"1\" value=\"4\"></md-slider>\r\n                    </md-card-content>\r\n                  </md-card>\r\n                </div>\r\n              </md-tab>\r\n              <md-tab label=\"HTML\">\r\n                <code [innerHTML]=\"getEscaped(slider2HTML)\" msHighlight class=\"html\"></code>\r\n              </md-tab>\r\n            </md-tab-group>\r\n          </div>\r\n        </div>\r\n\r\n        <span fxFlex=\"24px\"></span>\r\n\r\n        <div fxFlex>\r\n          <h3>Simple Slider without Thumb-Label and Ticks</h3>\r\n          <div class=\"demo-tabs mat-elevation-z2\">\r\n            <md-tab-group>\r\n              <md-tab label=\"PREVIEW\">\r\n                <div class=\"demo-preview\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                  <md-card fxFlex=\"80%\" fxFlex.sm=\"90%\">\r\n                    <md-card-content fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                      <md-slider min=\"1\" max=\"10\" value=\"7\"></md-slider>\r\n                    </md-card-content>\r\n                  </md-card>\r\n                </div>\r\n              </md-tab>\r\n              <md-tab label=\"HTML\">\r\n                <code [innerHTML]=\"getEscaped(slider3HTML)\" msHighlight class=\"html\"></code>\r\n              </md-tab>\r\n            </md-tab-group>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </md-card-content>\r\n\r\n  </md-card>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/demo/components/slider/slider.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/demo/components/slider/slider.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__route_animation__ = __webpack_require__("../../../../../src/app/route.animation.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SliderComponent = (function () {
    function SliderComponent() {
        this.slider1HTML = "\n  <md-slider min=\"1\" max=\"10\" thumbLabel tickInterval=\"1\"></md-slider>\n  ";
        this.slider2HTML = "<md-slider vertical min=\"1\" max=\"10\" thumbLabel tickInterval=\"1\"></md-slider>";
        this.slider3HTML = "<md-slider min=\"1\" max=\"10\"></md-slider>";
    }
    SliderComponent.prototype.ngOnInit = function () {
    };
    SliderComponent.prototype.getEscaped = function (text) {
        return __WEBPACK_IMPORTED_MODULE_1_lodash__["escape"](text);
    };
    return SliderComponent;
}());
SliderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-slider',
        template: __webpack_require__("../../../../../src/app/demo/components/slider/slider.component.html"),
        styles: [__webpack_require__("../../../../../src/app/demo/components/slider/slider.component.scss")],
        host: {
            '[@routeAnimation]': 'true'
        },
        animations: [__WEBPACK_IMPORTED_MODULE_2__route_animation__["b" /* routeAnimation */]]
    }),
    __metadata("design:paramtypes", [])
], SliderComponent);

//# sourceMappingURL=slider.component.js.map

/***/ }),

/***/ "../../../../../src/app/demo/components/snack-bar/snack-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"margin: 24px 0;\">\r\n  <md-card fxFlex=\"90%\">\r\n    <md-card-title>Material Snack-Bars</md-card-title>\r\n\r\n    <md-divider></md-divider>\r\n\r\n    <md-card-content fxLayout=\"column\">\r\n\r\n      <div fxLayout=\"column\" fxLayout.gt-md=\"row\" fxLayoutAlign=\"start stretch\" fxLayoutAlign.gt-md=\"start start\" style=\"margin: 24px 0\">\r\n        <div fxFlex fxFlex.gt-md=\"30%\" style=\"margin-right: 24px;\">\r\n          <div fxLayout=\"column\">\r\n            <h3>Snack-Bar Notification</h3>\r\n            <p>Snack-Bars are a great way to display notifications to users or to give the user the status on something.</p>\r\n            <h5>Example:</h5>\r\n            <p><code [innerHTML]=\"getEscaped(snackbarTS)\" msHighlight class=\"typescript\"></code></p>\r\n          </div>\r\n        </div>\r\n        <div class=\"demo-tabs mat-elevation-z2\" fxFlex>\r\n          <md-tab-group>\r\n            <md-tab label=\"PREVIEW\">\r\n              <div class=\"demo-preview\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                <md-card fxFlex=\"80%\" fxFlex.sm=\"90%\">\r\n                  <md-card-content fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"space-around center\" fxLayoutWrap=\"wrap\">\r\n                    <button md-button (click)=\"openSnackbar()\">Trigger Snackbar</button>\r\n                  </md-card-content>\r\n                </md-card>\r\n              </div>\r\n            </md-tab>\r\n            <md-tab label=\"HTML\">\r\n              <code [innerHTML]=\"getEscaped(snackbarHTML)\" msHighlight class=\"html\"></code>\r\n            </md-tab>\r\n            <md-tab label=\"TS\">\r\n              <code [innerHTML]=\"getEscaped(snackbarTS)\" msHighlight class=\"typescript\"></code>\r\n            </md-tab>\r\n          </md-tab-group>\r\n        </div>\r\n      </div>\r\n\r\n    </md-card-content>\r\n\r\n  </md-card>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/demo/components/snack-bar/snack-bar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/demo/components/snack-bar/snack-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__route_animation__ = __webpack_require__("../../../../../src/app/route.animation.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SnackBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SnackBarComponent = (function () {
    function SnackBarComponent(snackBar) {
        this.snackBar = snackBar;
        this.snackbarHTML = "<button md-button (click)=\"openSnackbar()\">Trigger Snackbar</button>";
        this.snackbarTS = "this.snackBar.open('I'm a notification!', 'Close', {\n  duration: 3000\n});";
    }
    SnackBarComponent.prototype.ngOnInit = function () {
    };
    SnackBarComponent.prototype.openSnackbar = function () {
        this.snackBar.open('I\'m a notification!', 'Close', {
            duration: 3000
        });
    };
    SnackBarComponent.prototype.getEscaped = function (text) {
        return __WEBPACK_IMPORTED_MODULE_2_lodash__["escape"](text);
    };
    return SnackBarComponent;
}());
SnackBarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-snack-bar',
        template: __webpack_require__("../../../../../src/app/demo/components/snack-bar/snack-bar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/demo/components/snack-bar/snack-bar.component.scss")],
        host: {
            '[@routeAnimation]': 'true'
        },
        animations: [__WEBPACK_IMPORTED_MODULE_3__route_animation__["b" /* routeAnimation */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdSnackBar */]) === "function" && _a || Object])
], SnackBarComponent);

var _a;
//# sourceMappingURL=snack-bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/demo/components/tooltip/tooltip.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"margin: 24px 0;\">\r\n  <md-card fxFlex=\"90%\">\r\n    <md-card-title>Material Tooltips</md-card-title>\r\n\r\n    <md-divider></md-divider>\r\n\r\n    <md-card-content fxLayout=\"column\">\r\n\r\n      <div fxLayout=\"column\" fxLayout.gt-md=\"row\" fxLayoutAlign=\"start stretch\" fxLayoutAlign.gt-md=\"start start\" style=\"margin: 24px 0\">\r\n        <div fxFlex fxFlex.gt-md=\"30%\" style=\"margin-right: 24px;\">\r\n          <div fxLayout=\"column\">\r\n            <h3>Tooltips</h3>\r\n            <h4>&lt;md-button&gt;</h4>\r\n            <p>Tooltips offer space for additional information on e.g. an icon.</p>\r\n            <h5>Example:</h5>\r\n            <p><code msHighlight class=\"html\">&lt;button md-button mdTooltip=\"I'm a Tooltip!\"&gt;<br/>  Button<br/>&lt;/button&gt;</code></p>\r\n          </div>\r\n        </div>\r\n        <div class=\"demo-tabs mat-elevation-z2\" fxFlex>\r\n          <md-tab-group>\r\n            <md-tab label=\"PREVIEW\">\r\n              <div class=\"demo-preview\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                <md-card fxFlex=\"80%\" fxFlex.sm=\"90%\">\r\n                  <md-card-content fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"space-around center\" fxLayoutWrap=\"wrap\">\r\n                    <button md-icon-button mdTooltip=\"Favorite this\"><md-icon>favorite</md-icon></button>\r\n                  </md-card-content>\r\n                </md-card>\r\n              </div>\r\n            </md-tab>\r\n            <md-tab label=\"HTML\">\r\n              <code [innerHTML]=\"getEscaped(tooltipHTML)\" msHighlight class=\"html\"></code>\r\n            </md-tab>\r\n          </md-tab-group>\r\n        </div>\r\n      </div>\r\n\r\n    </md-card-content>\r\n\r\n  </md-card>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/demo/components/tooltip/tooltip.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/demo/components/tooltip/tooltip.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__route_animation__ = __webpack_require__("../../../../../src/app/route.animation.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TooltipComponent = (function () {
    function TooltipComponent() {
        this.tooltipHTML = "<button md-icon-button mdTooltip=\"Favorite this\"><md-icon>favorite</md-icon></button>";
    }
    TooltipComponent.prototype.ngOnInit = function () {
    };
    TooltipComponent.prototype.getEscaped = function (text) {
        return __WEBPACK_IMPORTED_MODULE_1_lodash__["escape"](text);
    };
    return TooltipComponent;
}());
TooltipComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-tooltip',
        template: __webpack_require__("../../../../../src/app/demo/components/tooltip/tooltip.component.html"),
        styles: [__webpack_require__("../../../../../src/app/demo/components/tooltip/tooltip.component.scss")],
        host: {
            '[@routeAnimation]': 'true'
        },
        animations: [__WEBPACK_IMPORTED_MODULE_2__route_animation__["b" /* routeAnimation */]]
    }),
    __metadata("design:paramtypes", [])
], TooltipComponent);

//# sourceMappingURL=tooltip.component.js.map

/***/ }),

/***/ "../../../../../src/app/demo/custom-pages/dashboard-v1/dashboard-v1.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"center stretch\">\r\n\r\n  <div fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"space-between stretch\">\r\n\r\n    <div fxLayout=\"column\" fxLayout.gt-md=\"row\" fxFlex=\"100%\" fxFlex.gt-sm>\r\n      <ms-widget-v1 [data]=\"widget1Data\" [options]=\"widget1Options\" fxFlex=\"100%\" fxFlex.gt-sm></ms-widget-v1>\r\n\r\n      <ms-widget-v1 [data]=\"widget2Data\" [options]=\"widget2Options\" fxFlex=\"100%\" fxFlex.gt-sm></ms-widget-v1>\r\n\r\n    </div>\r\n\r\n    <div fxLayout=\"column\" fxLayout.gt-md=\"row\" fxFlex=\"100%\" fxFlex.gt-sm>\r\n      <ms-widget-v1 [data]=\"widget3Data\" [options]=\"widget3Options\" fxFlex=\"100%\" fxFlex.gt-sm></ms-widget-v1>\r\n\r\n      <ms-widget-v1 [data]=\"widget4Data\" [options]=\"widget4Options\" fxFlex=\"100%\" fxFlex.gt-sm></ms-widget-v1>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div fxLayout=\"column\" fxLayout.gt-md=\"row\" fxLayoutAlign=\"center stretch\">\r\n    <ms-line-chart-widget fxFlex=\"70%\" [data]=\"lineChartWidgetData\" [options]=\"lineChartWidgetOptions\"></ms-line-chart-widget>\r\n    <ms-source-overview-widget fxFlex=\"30%\" fxLayout=\"column\" fxLayout.gt-md=\"row\" [chartDataArray]=\"sourceOverviewWidgetData\" [options]=\"sourceOverviewWidgetOptions\"></ms-source-overview-widget>\r\n  </div>\r\n\r\n  <div fxLayout=\"row\">\r\n    <md-card class=\"widget\" fxFlex>\r\n      <md-card-title fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n        <span>Team Members</span>\r\n        <button md-icon-button [mdMenuTriggerFor]=\"teamMenu\">\r\n          <md-icon>more_vert</md-icon>\r\n        </button>\r\n      </md-card-title>\r\n      <md-card-content>\r\n        <table class=\"table table-hover table-condensed\">\r\n          <thead>\r\n          <tr>\r\n            <th></th>\r\n            <th>Name</th>\r\n            <th>Country</th>\r\n            <th>E-Mail</th>\r\n            <th>Phone</th>\r\n            <th>Balance</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr *ngFor=\"let member of team\">\r\n            <td style=\"width: 40px;\"><img class=\"avatar\" [src]=\"member.picture\"></td>\r\n            <td>{{ member.name.first }} {{ member.name.last }}</td>\r\n            <td>{{ member.company }}</td>\r\n            <td>{{ member.email }}</td>\r\n            <td>{{ member.phone }}</td>\r\n            <td>{{ member.balance }}</td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n\r\n        <md-menu #teamMenu=\"mdMenu\">\r\n          <button md-menu-item>\r\n            <md-icon> settings </md-icon>\r\n            <span> Settings </span>\r\n          </button>\r\n          <button md-menu-item disabled>\r\n            <md-icon> more </md-icon>\r\n            <span> More Info </span>\r\n          </button>\r\n          <button md-menu-item>\r\n            <md-icon> remove_circle </md-icon>\r\n            <span> Remove Widget </span>\r\n          </button>\r\n        </md-menu>\r\n      </md-card-content>\r\n    </md-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/demo/custom-pages/dashboard-v1/dashboard-v1.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  margin: 24px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/demo/custom-pages/dashboard-v1/dashboard-v1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__route_animation__ = __webpack_require__("../../../../../src/app/route.animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_widgetDemoData_data__ = __webpack_require__("../../../../../src/app/demo/data/widgetDemoData.data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_lineChartWidget_data__ = __webpack_require__("../../../../../src/app/demo/data/lineChartWidget.data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_source_overview_widget_data__ = __webpack_require__("../../../../../src/app/demo/data/source-overview-widget.data.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardV1Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DashboardV1Component = (function () {
    function DashboardV1Component() {
    }
    DashboardV1Component.prototype.ngOnInit = function () {
        this.team = [
            {
                "name": {
                    "first": "Laverne",
                    "last": "Chaney"
                },
                "picture": "assets/img/avatars/15.png",
                "company": "BUZZNESS",
                "email": "laverne.chaney@buzzness.me",
                "phone": "+1 (821) 438-2168",
                "balance": "$1,484.35"
            },
            {
                "name": {
                    "first": "Christensen",
                    "last": "Little"
                },
                "picture": "assets/img/avatars/9.png",
                "company": "ANIMALIA",
                "email": "christensen.little@animalia.biz",
                "phone": "+1 (975) 437-2092",
                "balance": "$3,465.24"
            },
            {
                "name": {
                    "first": "Hensley",
                    "last": "Mccormick"
                },
                "picture": "assets/img/avatars/5.png",
                "company": "MAINELAND",
                "email": "hensley.mccormick@maineland.org",
                "phone": "+1 (902) 550-3925",
                "balance": "$1,648.43"
            },
            {
                "name": {
                    "first": "Phillips",
                    "last": "Cline"
                },
                "picture": "assets/img/avatars/12.png",
                "company": "ZENTIME",
                "email": "phillips.cline@zentime.tv",
                "phone": "+1 (803) 472-3384",
                "balance": "$1,410.87"
            },
            {
                "name": {
                    "first": "Parks",
                    "last": "Buckley"
                },
                "picture": "assets/img/avatars/6.png",
                "company": "KINETICA",
                "email": "parks.buckley@kinetica.biz",
                "phone": "+1 (970) 598-2567",
                "balance": "$2,833.12"
            },
            {
                "name": {
                    "first": "Berger",
                    "last": "Kennedy"
                },
                "picture": "assets/img/avatars/1.png",
                "company": "GOGOL",
                "email": "berger.kennedy@gogol.io",
                "phone": "+1 (912) 598-3397",
                "balance": "$1,416.68"
            },
            {
                "name": {
                    "first": "Roxie",
                    "last": "Higgins"
                },
                "picture": "assets/img/avatars/7.png",
                "company": "WATERBABY",
                "email": "roxie.higgins@waterbaby.co.uk",
                "phone": "+1 (845) 435-2041",
                "balance": "$2,237.80"
            },
            {
                "name": {
                    "first": "Marcella",
                    "last": "Mack"
                },
                "picture": "assets/img/avatars/8.png",
                "company": "OPTICOM",
                "email": "marcella.mack@opticom.info",
                "phone": "+1 (894) 476-2978",
                "balance": "$2,923.40"
            },
            {
                "name": {
                    "first": "Hallie",
                    "last": "Gilliam"
                },
                "picture": "assets/img/avatars/5.png",
                "company": "GOLISTIC",
                "email": "hallie.gilliam@golistic.ca",
                "phone": "+1 (998) 476-3035",
                "balance": "$3,032.34"
            },
            {
                "name": {
                    "first": "Naomi",
                    "last": "Warren"
                },
                "picture": "assets/img/avatars/3.png",
                "company": "SCENTY",
                "email": "naomi.warren@scenty.net",
                "phone": "+1 (854) 406-2360",
                "balance": "$3,958.67"
            },
            {
                "name": {
                    "first": "Rochelle",
                    "last": "Cohen"
                },
                "picture": "assets/img/avatars/2.png",
                "company": "CRUSTATIA",
                "email": "rochelle.cohen@crustatia.name",
                "phone": "+1 (851) 520-2579",
                "balance": "$1,934.25"
            }
        ];
        this.widget1Data = __WEBPACK_IMPORTED_MODULE_2__data_widgetDemoData_data__["j" /* widget1Data */];
        this.widget1Options = {
            icon: 'person',
            name: 'Users',
            number: this.widget1Data[0].values.reduce(function (a, b) { return a + b.value; }, 0),
            gain: '14.8',
            description: '% compared to last week',
            arrow: 'arrow_upward'
        };
        this.widget2Data = __WEBPACK_IMPORTED_MODULE_2__data_widgetDemoData_data__["k" /* widget2Data */];
        this.widget2Options = {
            icon: 'flash_on',
            name: 'Visits',
            number: this.widget2Data[0].values.reduce(function (a, b) { return a + b.value; }, 0),
            gain: '42.5',
            description: '% compared to last week',
            arrow: 'arrow_upward'
        };
        this.widget3Data = __WEBPACK_IMPORTED_MODULE_2__data_widgetDemoData_data__["l" /* widget3Data */];
        this.widget3Options = {
            icon: 'public',
            name: 'Total Clicks',
            number: this.widget3Data[0].values.reduce(function (a, b) { return a + b.value; }, 0),
            gain: '-25.3',
            description: '% compared to last week',
            arrow: 'arrow_downward'
        };
        this.widget4Data = __WEBPACK_IMPORTED_MODULE_2__data_widgetDemoData_data__["m" /* widget4Data */];
        this.widget4Options = {
            icon: 'layers',
            name: 'Conversions',
            number: this.widget4Data[0].values.reduce(function (a, b) { return a + b.value; }, 0),
            gain: '16.3',
            description: '% compared to last week',
            arrow: 'arrow_upward'
        };
        this.lineChartWidgetData = __WEBPACK_IMPORTED_MODULE_3__data_lineChartWidget_data__["a" /* lineChartWidgetData */];
        this.lineChartWidgetOptions = {
            icon: 'attach_money',
            name: 'Earnings Overview',
        };
        this.sourceOverviewWidgetData = __WEBPACK_IMPORTED_MODULE_4__data_source_overview_widget_data__["a" /* sourceOverviewWidgetData */];
        this.sourceOverviewWidgetOptions = {
            name: 'Traffic Sources'
        };
    };
    return DashboardV1Component;
}());
DashboardV1Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-dashboard-v1',
        template: __webpack_require__("../../../../../src/app/demo/custom-pages/dashboard-v1/dashboard-v1.component.html"),
        styles: [__webpack_require__("../../../../../src/app/demo/custom-pages/dashboard-v1/dashboard-v1.component.scss")],
        host: {
            '[@fadeInAnimation]': 'true'
        },
        animations: [__WEBPACK_IMPORTED_MODULE_1__route_animation__["a" /* fadeInAnimation */]]
    })
], DashboardV1Component);

//# sourceMappingURL=dashboard-v1.component.js.map

/***/ }),

/***/ "../../../../../src/app/demo/custom-pages/forgot-password/forgot-password.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"height: 100%;\">\r\n  <div class=\"forgot mat-elevation-z12\">\r\n    <div class=\"forgot-header\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n      <img src=\"assets/img/icon.png\">\r\n    </div>\r\n    <form #form=\"ngForm\" (ngSubmit)=\"send(form.value)\">\r\n       <div *ngIf=\"forgotSuccess\" class=\"form-success\">{{forgotSuccessMessage}}</div>\r\n       <div *ngIf=\"forgotFail\" class=\"form-fail\">{{forgotFailMessage}}</div>\r\n      <div class=\"forgot-content\" fxLayout=\"column\" fxLayoutAlign=\"start stretch\">\r\n        <md-input-container>\r\n          <input mdInput placeholder=\"E-Mail\" type=\"text\" name=\"email\" required [(ngModel)]=\"email\">\r\n        </md-input-container>\r\n        <button color=\"primary\" md-raised-button [disabled]=\"!form.valid\">RECOVER PASSWORD</button>\r\n        <p class=\"note\"><a [routerLink]=\"['/login']\">Back to login</a></p>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/demo/custom-pages/forgot-password/forgot-password.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  background: #fff url(\"/assets/img/backgrounds/3.jpg\") no-repeat center center fixed;\n  background-size: cover;\n  height: 100%;\n  width: 100%; }\n\n.forgot {\n  background: white;\n  width: 380px; }\n  .forgot .forgot-header {\n    background: #2B303B;\n    padding: 24px; }\n  .forgot .forgot-content {\n    padding: 24px 42px 42px; }\n    .forgot .forgot-content md-input-container {\n      width: 100%;\n      margin: 6px 0 18px; }\n    .forgot .forgot-content a {\n      text-decoration: none;\n      color: #2196F3; }\n      .forgot .forgot-content a:hover {\n        text-decoration: underline; }\n    .forgot .forgot-content .note {\n      color: #777;\n      margin: 24px 0 0;\n      text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/demo/custom-pages/forgot-password/forgot-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__route_animation__ = __webpack_require__("../../../../../src/app/route.animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forgot_password_service__ = __webpack_require__("../../../../../src/app/demo/custom-pages/forgot-password/forgot-password.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForgotPasswordComponent = (function () {
    function ForgotPasswordComponent(router, forgotPasswrodService) {
        this.router = router;
        this.forgotPasswrodService = forgotPasswrodService;
        this.forgotSuccess = false;
        this.forgotFail = false;
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent.prototype.send = function (formValues) {
        var _this = this;
        console.log(formValues);
        this.forgotPasswrodService.forgotPasswrod(formValues)
            .subscribe(function (response) {
            _this.forgotFail = false;
            console.log(response.message);
            _this.forgotSuccessMessage = response.message;
            _this.forgotSuccess = true;
        }, function (error) {
            _this.forgotSuccess = false;
            console.log(error);
            var forgotFailErrorMessage = JSON.parse(error._body);
            _this.forgotFailMessage = forgotFailErrorMessage.message.email;
            _this.forgotFail = true;
        });
    };
    return ForgotPasswordComponent;
}());
ForgotPasswordComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-forgot-password',
        template: __webpack_require__("../../../../../src/app/demo/custom-pages/forgot-password/forgot-password.component.html"),
        styles: [__webpack_require__("../../../../../src/app/demo/custom-pages/forgot-password/forgot-password.component.scss")],
        host: {
            '[@fadeInAnimation]': 'true'
        },
        animations: [__WEBPACK_IMPORTED_MODULE_1__route_animation__["a" /* fadeInAnimation */]],
        providers: [__WEBPACK_IMPORTED_MODULE_3__forgot_password_service__["a" /* ForgotPasswrodService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__forgot_password_service__["a" /* ForgotPasswrodService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__forgot_password_service__["a" /* ForgotPasswrodService */]) === "function" && _b || Object])
], ForgotPasswordComponent);

var _a, _b;
//# sourceMappingURL=forgot-password.component.js.map

/***/ }),

/***/ "../../../../../src/app/demo/custom-pages/forgot-password/forgot-password.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswrodService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ForgotPasswrodService = (function () {
    function ForgotPasswrodService(http) {
        this.http = http;
        /**  private baseUrl = 'http://107.180.72.134/api/'; */
        this.baseUrl = 'http://localhost/odcs-backend/public/api/';
    }
    ForgotPasswrodService.prototype.forgotPasswrod = function (data) {
        return this.http.post(this.baseUrl + 'forgot_password', data)
            .map(function (res) { return res.json(); });
    };
    return ForgotPasswrodService;
}());
ForgotPasswrodService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ForgotPasswrodService);

var _a;
//# sourceMappingURL=forgot-password.service.js.map

/***/ }),

/***/ "../../../../../src/app/demo/custom-pages/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"height: 100%;\">\n  <div class=\"forgot mat-elevation-z12\">\n    <div class=\"forgot-header\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n      <img src=\"assets/img/icon.png\">\n    </div>\n    <form #form=\"ngForm\" (ngSubmit)=\"send(form.value)\">\n       <div *ngIf=\"forgotSuccess\" class=\"form-success\">{{forgotSuccessMessage}}</div>\n       <div *ngIf=\"forgotFail\" class=\"form-fail\">{{forgotFailMessage}}</div>\n      <div class=\"forgot-content\" fxLayout=\"column\" fxLayoutAlign=\"start stretch\">\n\n        <h2 align=\"center\">Login page</h2>\n        \n        <md-input-container>\n          <input mdInput placeholder=\"email\" type=\"text\" name=\"email\" required [(ngModel)]=\"email\">\n        </md-input-container>\n        \n        <md-input-container>\n          <input mdInput placeholder=\"password\" type=\"password\" name=\"password\" required [(ngModel)]=\"password\">\n        </md-input-container>\n        \n        <button color=\"primary\" type=\"submit\" md-raised-button [disabled]=\"!form.valid\" >LOGIN</button>\n        <p class=\"note\"><a [routerLink]=\"['/register']\">Back to registration</a></p>\n      </div>\n    </form>\n  </div>\n</div>\n <toaster-container></toaster-container>"

/***/ }),

/***/ "../../../../../src/app/demo/custom-pages/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  background: #fff url(\"/assets/img/backgrounds/3.jpg\") no-repeat center center fixed;\n  background-size: cover;\n  height: 100%;\n  width: 100%; }\n\n.forgot {\n  background: white;\n  width: 380px; }\n  .forgot .forgot-header {\n    background: #2B303B;\n    padding: 24px; }\n  .forgot .forgot-content {\n    padding: 24px 42px 42px; }\n    .forgot .forgot-content md-input-container {\n      width: 100%;\n      margin: 6px 0 18px; }\n    .forgot .forgot-content a {\n      text-decoration: none;\n      color: #2196F3; }\n      .forgot .forgot-content a:hover {\n        text-decoration: underline; }\n    .forgot .forgot-content .note {\n      color: #777;\n      margin: 24px 0 0;\n      text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/demo/custom-pages/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__route_animation__ = __webpack_require__("../../../../../src/app/route.animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_service__ = __webpack_require__("../../../../../src/app/demo/custom-pages/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(router, toastr, toasterService, LoginService) {
        this.router = router;
        this.toastr = toastr;
        this.toasterService = toasterService;
        this.LoginService = LoginService;
        this.forgotSuccess = false;
        this.forgotFail = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.send = function (formValues) {
        var _this = this;
        console.log(formValues);
        this.LoginService.login(formValues)
            .subscribe(function (response) {
            _this.forgotFail = false;
            console.log(response.message);
            _this.toasterService.pop('success', 'Args title', 'Args body');
            _this.router.navigate(['/dashboard-v1']);
            console.log('Logged in successfully. A verification message is sent on your email id.');
            _this.forgotSuccessMessage = response.message;
            _this.forgotSuccess = true;
        }, function (error) {
            _this.forgotSuccess = false;
            console.log(error);
            console.log('You have entered invalid credentials');
            _this.toasterService.pop('error', 'title', 'body');
            var forgotFailErrorMessage = JSON.parse(error._body);
            _this.forgotFailMessage = forgotFailErrorMessage.message.email;
            _this.forgotFail = true;
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-login',
        template: __webpack_require__("../../../../../src/app/demo/custom-pages/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/demo/custom-pages/login/login.component.scss")],
        host: {
            '[@fadeInAnimation]': 'true'
        },
        animations: [__WEBPACK_IMPORTED_MODULE_1__route_animation__["a" /* fadeInAnimation */]],
        providers: [__WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* LoginService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__["a" /* ToasterModule */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__["a" /* ToasterModule */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__["b" /* ToasterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_toaster__["b" /* ToasterService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* LoginService */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/demo/custom-pages/login/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService.prototype.login = function (data) {
        return this.http.post('http://107.180.72.134/api/login', data)
            .map(function (res) { return res.json(); });
    };
    return LoginService;
}());
LoginService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], LoginService);

var _a;
//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ "../../../../../src/app/demo/custom-pages/registration/password.match.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EqualValidator; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var EqualValidator = EqualValidator_1 = (function () {
    function EqualValidator(validateEqual) {
        this.validateEqual = validateEqual;
    }
    EqualValidator.prototype.validate = function (c) {
        // self value (e.g. retype password)
        var v = c.value;
        // control value (e.g. password)
        var e = c.root.get(this.validateEqual);
        // value not equal
        if (e && v !== e.value)
            return {
                validateEqual: false
            };
        return null;
    };
    return EqualValidator;
}());
EqualValidator = EqualValidator_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* NG_VALIDATORS */], useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return EqualValidator_1; }), multi: true }
        ]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Attribute"])('validateEqual')),
    __metadata("design:paramtypes", [String])
], EqualValidator);

var EqualValidator_1;
//# sourceMappingURL=password.match.directive.js.map

/***/ }),

/***/ "../../../../../src/app/demo/custom-pages/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"height: 100%;\">\n  <div class=\"forgot mat-elevation-z12\">\n    \n       <div class=\"forgot-header\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n      <img src=\"assets/img/icon.png\">\n       </div>\n       \n    <form #formCtrl=\"ngForm\" (ngSubmit)=\"send(formCtrl.value)\">\n\n       <div *ngIf=\"forgotSuccess\" class=\"form-success\">{{forgotSuccessMessage}}</div>\n       <div *ngIf=\"forgotFail\" class=\"form-fail\">{{forgotFailMessage}}</div>\n\n      <div class=\"forgot-content\" fxLayout=\"column\" fxLayoutAlign=\"start stretch\">\n\n    <div class=\"form-group\">\n        <md-input-container >\n          <input mdInput placeholder=\"Name\" type=\"text\" name=\"name\" [(ngModel)]=\"formCtrl.name\" minlength=\"5\" maxlength=\"15\" #name=\"ngModel\" required>\n        </md-input-container>\n        <div *ngIf=\"name.errors && (name.dirty || name.valid)\" >\n          <div [hidden]=\"!name.errors.required\" class=\"alert-alert-danger\">\n            Username is required.\n          </div>\n          <div [hidden]=\"!name.errors.minlength\" class=\"alert-alert-danger\">\n          Username must be at least 5 characters long.\n          </div>\n        </div>\n    </div>\n  \n    \n      <div class=\"form-group\">\n        <md-input-container>\n          <input mdInput placeholder=\"E-mail\" type=\"text\" name=\"email\" [(ngModel)]=\"formCtrl.email\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" #email=\"ngModel\" required>\n        </md-input-container>\n        <div *ngIf=\"email.errors && (email.dirty || email.valid)\" >\n          <div [hidden]=\"!email.errors.required\" class=\"alert-alert-danger\">\n            Email is required. \n          </div>\n          <div [hidden]=\"!email.errors.pattern\" class=\"alert-alert-danger\">\n          Email must be in the form of abc@xyz.com\n          </div>\n        </div>\n     </div>\n\n      <div class=\"form-group\">\n        <md-input-container>\n          <input mdInput placeholder=\"Password\" type=\"password\" name=\"password\" pattern=\"((?=.*\\d)(?=.*[a-zA-Z]).{8,15})\" minlength=\"8\" maxlength=\"15\" [(ngModel)]=\"formCtrl.password\" #password=\"ngModel\" required >\n        </md-input-container>\n        <div *ngIf=\"password.errors && (password.dirty || password.valid)\" >\n          <div [hidden]=\"!password.errors.required\" class=\"alert-alert-danger\">\n            Password is required.\n          </div>\n          <div [hidden]=\"!password.errors.pattern\" class=\"alert-alert-danger\">\n            Password must contain at least one alphabet, one number and 8 digit.\n          </div>\n            \n        </div>\n      </div>\n      \n      <div class=\"form-group\">\n        <md-input-container>\n          <input mdInput placeholder=\"Re-password\" type=\"password\" name=\"rePassword\"  [(ngModel)]=\"formCtrl.rePassword\"  validateEqual=\"password\" #rePassword=\"ngModel\" required>\n        </md-input-container>\n      <div *ngIf=\"rePassword.errors && (rePassword.dirty || rePassword.valid)\" >  \n          <div [hidden]=\"rePassword.valid || rePassword.pristine\" class=\"alert-alert-danger\">\n          Password and re-password did not match.\n         </div>\n        </div>\n      </div>\n      \n       <div class=\"form-group\">\n        <md-input-container>\n          <input mdInput placeholder=\"CountryCode. \" type=\"text\" name=\"countryCode\" [(ngModel)]=\"formCtrl.counryCode\" #countryCode=\"ngModel\" required >\n        </md-input-container>\n       \n        <div *ngIf=\"countryCode.errors && (countryCode.dirty || countryCode.valid)\" >\n          <div [hidden]=\"!countryCode.errors.required\" class=\"alert-alert-danger\">\n           Country Code is required.\n          </div>\n          \n        </div>\n      </div>\n        \n      <div class=\"form-group\">\n        <md-input-container>\n          <input mdInput placeholder=\"Phone\" type=\"text\" name=\"phone\" maxlength=\"10\" minlength=\"10\" pattern=\"[0-9]*\" [(ngModel)]=\"formCtrl.phone\" #phone=\"ngModel\" required>\n        </md-input-container>\n\n        <div *ngIf=\"phone.errors && (phone.dirty || phone.valid)\" >\n\n          <div [hidden]=\"!phone.errors.required\" class=\"alert-alert-danger\">\n            Phone no.is required.\n          </div>\n     \n          <div [hidden]=\"!phone.errors.pattern\" class=\"alert-alert-danger\">\n           Mobile number should be only numbers\n          </div>\n        \n        </div>\n\n    \n      </div>\n     \n     <div class=\"form-group\">\n       <input type=\"checkbox\" name=\"confirm\" value=\"T\" [(ngModel)]=\"formCtrl.confirm\" #confirm=\"ngModel\" required>I have read and agree to the Terms and Conditions and Privacy Policy\n         <div *ngIf=\"confirm.errors && (confirm.dirty || confirm.touched)\" >\n          <div [hidden]=\"!confirm.errors.required\" class=\"alert-alert-danger\">\n            Confirm field is required. \n          </div>\n        </div>\n      </div>\n\n        <button color=\"primary\" type=\"submit\" id=\"submitBtn\" md-raised-button [disabled]=\"!formCtrl.form.valid\" >SUBMIT</button>\n        <p class=\"note\"><a [routerLink]=\"['/login']\">Go to login</a></p>\n    \n      </div>\n      \n    </form>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/demo/custom-pages/registration/registration.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  background: #fff url(\"/assets/img/backgrounds/3.jpg\") no-repeat center center fixed;\n  background-size: cover;\n  height: 100%;\n  width: 100%; }\n\n.forgot {\n  background: white;\n  width: 380px; }\n  .forgot .forgot-header {\n    background: #2B303B;\n    padding: 24px; }\n  .forgot .forgot-content {\n    padding: 3px 5px 5px; }\n    .forgot .forgot-content md-input-container {\n      width: 100%;\n      margin: 6px 0 18px; }\n    .forgot .forgot-content a {\n      text-decoration: none;\n      color: #2196F3; }\n      .forgot .forgot-content a:hover {\n        text-decoration: underline; }\n    .forgot .forgot-content .note {\n      color: #777;\n      margin: 24px 0 0;\n      text-align: center; }\n    .forgot .forgot-content .mat-input-wrapper {\n      margin-bottom: 24px; }\n    .forgot .forgot-content .alert-alert-danger {\n      color: red;\n      margin-top: -25px; }\n    .forgot .forgot-content .color {\n      color: #A9A9A9; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/demo/custom-pages/registration/registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__route_animation__ = __webpack_require__("../../../../../src/app/route.animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registration_service__ = __webpack_require__("../../../../../src/app/demo/custom-pages/registration/registration.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegistrationComponent = (function () {
    function RegistrationComponent(router, RegistrationService) {
        this.router = router;
        this.RegistrationService = RegistrationService;
        this.forgotSuccess = false;
        this.forgotFail = false;
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent.prototype.send = function (formValues) {
        var _this = this;
        console.log(formValues);
        this.RegistrationService.registration(formValues)
            .subscribe(function (response) {
            _this.forgotFail = false;
            console.log(response.message);
            _this.router.navigate(['/login']);
            _this.forgotSuccessMessage = response.message;
            _this.forgotSuccess = true;
        }, function (error) {
            _this.forgotSuccess = false;
            console.log(error);
            alert('Please check all the fields and enter valid credentials.');
            var forgotFailErrorMessage = JSON.parse(error._body);
            _this.forgotFailMessage = forgotFailErrorMessage.message.email;
            _this.forgotFail = true;
        });
    };
    return RegistrationComponent;
}());
RegistrationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-registration',
        template: __webpack_require__("../../../../../src/app/demo/custom-pages/registration/registration.component.html"),
        styles: [__webpack_require__("../../../../../src/app/demo/custom-pages/registration/registration.component.scss")],
        host: {
            '[@fadeInAnimation]': 'true'
        },
        animations: [__WEBPACK_IMPORTED_MODULE_1__route_animation__["a" /* fadeInAnimation */]],
        providers: [__WEBPACK_IMPORTED_MODULE_3__registration_service__["a" /* RegistrationService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__registration_service__["a" /* RegistrationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__registration_service__["a" /* RegistrationService */]) === "function" && _b || Object])
], RegistrationComponent);

var _a, _b;
//# sourceMappingURL=registration.component.js.map

/***/ }),

/***/ "../../../../../src/app/demo/custom-pages/registration/registration.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegistrationService = (function () {
    function RegistrationService(http) {
        this.http = http;
    }
    RegistrationService.prototype.registration = function (data) {
        return this.http.post('http://107.180.72.134/api/customers', data)
            .map(function (res) { return res.json(); });
    };
    return RegistrationService;
}());
RegistrationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], RegistrationService);

var _a;
//# sourceMappingURL=registration.service.js.map

/***/ }),

/***/ "../../../../../src/app/demo/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard-container\" fxLayout=\"column\" fxLayoutAlign=\"start stretch\">\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"center stretch\" fxLayoutWrap=\"wrap\">\r\n    <ms-bar-chart class=\"margin-bottom-sm\"\r\n                  title=\"Total Sales\" subTitle=\"Latest 10 May, 10:00\" bgColor=\"linear-gradient(60deg, #8C99E0, #6572B8)\" textColor=\"#FFFFFF\" chartColor=\"#FFFFFF\" gain=\"16.3\" comparedTo=\"% compared to last month\"\r\n                  [data]=\"discreteBarDemoData\"\r\n                  fxFlex=\"100%\" fxFlex.md=\"49.5%\" fxFlex.sm=\"100%\" fxFlex.gt-md>\r\n    </ms-bar-chart>\r\n    <ms-line-chart class=\"margin-bottom-sm\"\r\n                   title=\"Visits\" bgColor=\"linear-gradient(60deg, #4DD0E2, #4CA8BA)\" textColor=\"#FFFFFF\" chartColor=\"#FFFFFF\" gain=\"42.5\" comparedTo=\"% compared to last month\"\r\n                   [data]=\"lineChartDemoData\"\r\n                   fxFlex=\"100%\" fxFlex.md=\"49.5%\" fxFlex.sm=\"100%\" fxFlex.gt-md fxFlexOffset.gt-sm=\"1%\">\r\n    </ms-line-chart>\r\n    <ms-line-chart class=\"margin-top-md\"\r\n                   title=\"Total Clicks\" subTitle=\"Latest 10 May, 10:00\" bgColor=\"linear-gradient(60deg, #81C683, #62A864)\" textColor=\"#FFFFFF\" chartColor=\"#FFFFFF\" interpolate=\"true\" gain=\"-6.1\" comparedTo=\"% compared to last month\"\r\n                   [data]=\"lineChartInterpolatedDemoData\"\r\n                   fxFlex=\"100%\" fxFlex.sm=\"100%\" fxFlex.gt-md fxFlexOffset.gt-md=\"1%\">\r\n    </ms-line-chart>\r\n  </div>\r\n\r\n  <div class=\"margin-top\" fxLayout=\"row\" fxLayoutAlign=\"center stretch\" fxLayoutWrap=\"wrap\">\r\n\r\n    <div class=\"margin-bottom-sm\" fxLayout=\"column\" fxFlex=\"100%\" fxFlex.md=\"49.5%\" fxFlex.gt-md>\r\n\r\n      <ms-traffic-sources [chartData]=\"trafficSourcesDemoData\"></ms-traffic-sources>\r\n\r\n      <div class=\"margin-top\">\r\n        <ms-activity [feeds]=\"activityFeedsDemoData\"></ms-activity>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"margin-bottom-sm\" fxLayout=\"column\" fxFlex.gt-md fxFlex=\"100%\" fxFlex.md=\"49.5%\" fxFlexOffset.gt-sm=\"1%\">\r\n      <ms-pie-chart [data]=\"pieChartDemoData\" title=\"Top 5 Categories\" subTitle=\"Compared by sale share\" textColor=\"#757575\"></ms-pie-chart>\r\n\r\n      <div class=\"margin-top\">\r\n        <md-card class=\"social-card\">\r\n          <md-card-header>\r\n            <img md-card-avatar src=\"assets/img/avatars/3.png\">\r\n            <md-card-subtitle>\r\n              Yesterday\r\n            </md-card-subtitle>\r\n            <md-card-title>Sophie Miller</md-card-title>\r\n          </md-card-header>\r\n          <img md-card-image src=\"assets/img/backgrounds/1.jpg\">\r\n          <md-card-content>\r\n            <p>Piqued favour stairs it enable exeter as seeing. Remainder met improving but engrossed sincerity age.</p>\r\n          </md-card-content>\r\n          <md-divider></md-divider>\r\n          <md-card-actions>\r\n            <div fxLayout=\"row\">\r\n              <button md-icon-button>\r\n                <md-icon>share</md-icon>\r\n              </button>\r\n              <button md-icon-button>\r\n                <md-icon>favorite</md-icon>\r\n              </button>\r\n              <span fxFlex></span>\r\n              <button md-button>\r\n                More Info\r\n              </button>\r\n              <button md-button>\r\n                Save as\r\n              </button>\r\n            </div>\r\n          </md-card-actions>\r\n        </md-card>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"margin-top-md\" fxLayout=\"column\" fxFlex.gt-md fxFlex=\"100%\" fxFlex.sm=\"100%\" fxFlexOffset.gt-md=\"1%\">\r\n\r\n      <ms-recent-sales [sales]=\"recentSalesProductsDemoData\" [chartData]=\"recentSalesDemoData\"></ms-recent-sales>\r\n\r\n      <div class=\"margin-top\">\r\n        <ms-google-maps-widget height=\"450px\"></ms-google-maps-widget>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/demo/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block; }\n\n.dashboard-container {\n  padding: 1%;\n  position: relative; }\n  .dashboard-container .header {\n    min-height: 220px;\n    background: linear-gradient(60deg, #2196F3, #3F51B5); }\n\n.margin-top {\n  margin-top: 12px; }\n\n@media screen and (min-width: 960px) and (max-width: 1279px) {\n  .margin-top-md {\n    margin-top: 12px; } }\n\n@media screen and (max-width: 959px) {\n  .margin-bottom-sm {\n    margin-bottom: 12px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/demo/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_widgetDemoData_data__ = __webpack_require__("../../../../../src/app/demo/data/widgetDemoData.data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__route_animation__ = __webpack_require__("../../../../../src/app/route.animation.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.discreteBarDemoData = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__data_widgetDemoData_data__["c" /* discreteBarDemoDataGenerator */])();
        this.lineChartDemoData = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__data_widgetDemoData_data__["d" /* lineChartDemoDataGenerator */])();
        this.lineChartInterpolatedDemoData = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__data_widgetDemoData_data__["e" /* lineChartInterpolatedDemoDataGenerator */])();
        this.activityFeedsDemoData = [
            {
                image: 'assets/img/avatars/10.png',
                name: 'Sophie',
                subject: 'Dinner?',
                content: 'Are we still going out tonight?'
            },
            {
                image: 'assets/img/avatars/11.png',
                name: 'Jack',
                subject: 'Golf weekend',
                content: 'Hey! You wanted to go play Golf?'
            },
            {
                image: 'assets/img/avatars/12.png',
                name: 'Cody',
                subject: 'Code Quality',
                content: 'Love your newest theme, so clean and slick!'
            },
            {
                image: 'assets/img/avatars/13.png',
                name: 'James',
                subject: 'Party?',
                content: 'You wanna throw a party this weekend?'
            },
            {
                image: 'assets/img/avatars/14.png',
                name: 'Jessica',
                subject: 'Love you...',
                content: 'Hope we can see us again soon :)'
            }
        ];
        this.serverLoadDemoData = __WEBPACK_IMPORTED_MODULE_1__data_widgetDemoData_data__["f" /* serverLoadDemoData */];
        this.pieChartDemoData = __WEBPACK_IMPORTED_MODULE_1__data_widgetDemoData_data__["g" /* pieChartDemoData */];
        this.recentSalesDemoData = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__data_widgetDemoData_data__["h" /* recentSalesDemoDataGenerator */])();
        this.recentSalesProductsDemoData = [
            {
                image: 'assets/img/avatars/1.png',
                itemName: 'Design Lamp',
                value: 39.54,
                timeAgo: '2 minutes ago'
            },
            {
                image: 'assets/img/avatars/2.png',
                itemName: 'Apple MacBook',
                value: 699,
                timeAgo: '19 minutes ago'
            },
            {
                image: 'assets/img/avatars/3.png',
                itemName: 'Apple iPhone 8',
                value: 3113.12,
                timeAgo: '2 hours ago'
            },
            {
                image: 'assets/img/avatars/4.png',
                itemName: 'USB-C Cable',
                value: 87.58,
                timeAgo: '6 hours ago'
            },
            {
                image: 'assets/img/avatars/5.png',
                itemName: 'Lighting Cable',
                value: 24.99,
                timeAgo: '13 hours ago'
            }
        ];
        this.trafficSourcesDemoData = __WEBPACK_IMPORTED_MODULE_1__data_widgetDemoData_data__["i" /* trafficSourcesDemoData */];
    };
    DashboardComponent.prototype.ngAfterViewInit = function () {
        setTimeout(function () {
            window.dispatchEvent(new Event('resize'));
        }, 1000);
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-dashboard',
        template: __webpack_require__("../../../../../src/app/demo/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/demo/dashboard/dashboard.component.scss")],
        host: {
            '[@fadeInAnimation]': 'true'
        },
        animations: [__WEBPACK_IMPORTED_MODULE_2__route_animation__["a" /* fadeInAnimation */]]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/demo/data/lineChartWidget.data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return lineChartWidgetData; });
var january = new Date(2017, 0);
var february = new Date(2017, 1);
var march = new Date(2017, 2);
var april = new Date(2017, 3);
var may = new Date(2017, 4);
var june = new Date(2017, 5);
var july = new Date(2017, 6);
var august = new Date(2017, 7);
var september = new Date(2017, 8);
var october = new Date(2017, 9);
var november = new Date(2017, 10);
var december = new Date(2017, 11);
var lineChartWidgetData = [
    {
        "key": "Revenue",
        "color": "#2196F3",
        "values": [
            {
                "date": january,
                "value": 2356,
            },
            {
                "date": february,
                "value": 3212,
            },
            {
                "date": march,
                "value": 6163,
            },
            {
                "date": april,
                "value": 10573,
            },
            {
                "date": may,
                "value": 10123,
            },
            {
                "date": june,
                "value": 6876,
            },
            {
                "date": july,
                "value": 2567,
            },
            {
                "date": august,
                "value": 2856,
            },
            {
                "date": september,
                "value": 7323,
            },
            {
                "date": october,
                "value": 12978,
            },
            {
                "date": november,
                "value": 1876,
            },
            {
                "date": december,
                "value": 854,
            },
        ]
    },
    {
        "key": "Tax",
        "color": "#3F51B5",
        "values": [
            {
                "date": january,
                "value": 523,
            },
            {
                "date": february,
                "value": 873,
            },
            {
                "date": march,
                "value": 1503,
            },
            {
                "date": april,
                "value": 1321,
            },
            {
                "date": may,
                "value": 3215,
            },
            {
                "date": june,
                "value": 1803,
            },
            {
                "date": july,
                "value": 804,
            },
            {
                "date": august,
                "value": 2034,
            },
            {
                "date": september,
                "value": 1873,
            },
            {
                "date": october,
                "value": 1004,
            },
            {
                "date": november,
                "value": 1503,
            },
            {
                "date": december,
                "value": 325,
            },
        ]
    },
    {
        "key": "Shipping Cost",
        "color": "#4CAF50",
        "values": [
            {
                "date": january,
                "value": 101,
            },
            {
                "date": february,
                "value": 235,
            },
            {
                "date": march,
                "value": 523,
            },
            {
                "date": april,
                "value": 325,
            },
            {
                "date": may,
                "value": 842,
            },
            {
                "date": june,
                "value": 602,
            },
            {
                "date": july,
                "value": 423,
            },
            {
                "date": august,
                "value": 752,
            },
            {
                "date": september,
                "value": 539,
            },
            {
                "date": october,
                "value": 352,
            },
            {
                "date": november,
                "value": 603,
            },
            {
                "date": december,
                "value": 231,
            },
        ]
    }
];
//# sourceMappingURL=lineChartWidget.data.js.map

/***/ }),

/***/ "../../../../../src/app/demo/data/source-overview-widget.data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sourceOverviewWidgetData; });
var today = new Date().getTime();
var sourceOverviewWidgetData = [
    [
        {
            key: 'Direct',
            area: true,
            color: '#3F51B5',
            sum: 1348,
            values: [
                {
                    "date": today - 1000 * 60 * 60 * 24 * 7,
                    "value": 0
                },
                {
                    "date": today - 1000 * 60 * 60 * 24 * 6,
                    "value": 89
                },
                {
                    "date": today - 1000 * 60 * 60 * 24 * 5,
                    "value": 145
                },
                {
                    "date": today - 1000 * 60 * 60 * 24 * 4,
                    "value": 173
                },
                {
                    "date": today - 1000 * 60 * 60 * 24 * 3,
                    "value": 262
                },
                {
                    "date": today - 1000 * 60 * 60 * 24 * 2,
                    "value": 142
                },
                {
                    "date": today - 1000 * 60 * 60 * 24,
                    "value": 174
                },
                {
                    "date": today,
                    "value": 0
                },
            ]
        }
    ],
    [
        {
            key: 'Referral',
            area: true,
            color: '#2196F3',
            sum: 1252,
            values: [
                {
                    "date": today - 1000 * 60 * 60 * 24 * 7,
                    "value": 0
                },
                {
                    "date": today - 1000 * 60 * 60 * 24 * 6,
                    "value": 89
                },
                {
                    "date": today - 1000 * 60 * 60 * 24 * 5,
                    "value": 12
                },
                {
                    "date": today - 1000 * 60 * 60 * 24 * 4,
                    "value": 80
                },
                {
                    "date": today - 1000 * 60 * 60 * 24 * 3,
                    "value": 157
                },
                {
                    "date": today - 1000 * 60 * 60 * 24 * 2,
                    "value": 195
                },
                {
                    "date": today - 1000 * 60 * 60 * 24,
                    "value": 142
                },
                {
                    "date": today,
                    "value": 94
                },
            ]
        }
    ],
    [
        {
            key: 'Social',
            area: true,
            color: '#FF9800',
            sum: 954,
            values: [
                {
                    "date": today - 1000 * 60 * 60 * 24 * 7,
                    "value": 0
                },
                {
                    "date": today - 1000 * 60 * 60 * 24 * 6,
                    "value": 90
                },
                {
                    "date": today - 1000 * 60 * 60 * 24 * 5,
                    "value": 76
                },
                {
                    "date": today - 1000 * 60 * 60 * 24 * 4,
                    "value": 185
                },
                {
                    "date": today - 1000 * 60 * 60 * 24 * 3,
                    "value": 234
                },
                {
                    "date": today - 1000 * 60 * 60 * 24 * 2,
                    "value": 142
                },
                {
                    "date": today - 1000 * 60 * 60 * 24,
                    "value": 198
                },
                {
                    "date": today,
                    "value": 188
                },
            ]
        }
    ],
    [
        {
            key: 'Search',
            area: true,
            color: '#4CAF50',
            sum: 720,
            values: [
                {
                    "date": today - 1000 * 60 * 60 * 24 * 7,
                    "value": 89
                },
                {
                    "date": today - 1000 * 60 * 60 * 24 * 6,
                    "value": 54
                },
                {
                    "date": today - 1000 * 60 * 60 * 24 * 5,
                    "value": 99
                },
                {
                    "date": today - 1000 * 60 * 60 * 24 * 4,
                    "value": 132
                },
                {
                    "date": today - 1000 * 60 * 60 * 24 * 3,
                    "value": 85
                },
                {
                    "date": today - 1000 * 60 * 60 * 24 * 2,
                    "value": 54
                },
                {
                    "date": today - 1000 * 60 * 60 * 24,
                    "value": 104
                },
                {
                    "date": today,
                    "value": 80
                },
            ]
        }
    ],
    [
        {
            key: 'Internal',
            area: true,
            color: '#f44336',
            sum: 42,
            values: [
                {
                    "date": today - 1000 * 60 * 60 * 24 * 7,
                    "value": 0
                },
                {
                    "date": today - 1000 * 60 * 60 * 24 * 6,
                    "value": 12
                },
                {
                    "date": today - 1000 * 60 * 60 * 24 * 5,
                    "value": 6
                },
                {
                    "date": today - 1000 * 60 * 60 * 24 * 4,
                    "value": 10
                },
                {
                    "date": today - 1000 * 60 * 60 * 24 * 3,
                    "value": 16
                },
                {
                    "date": today - 1000 * 60 * 60 * 24 * 2,
                    "value": 14
                },
                {
                    "date": today - 1000 * 60 * 60 * 24,
                    "value": 18
                },
                {
                    "date": today,
                    "value": 10
                },
            ]
        }
    ],
];
//# sourceMappingURL=source-overview-widget.data.js.map

/***/ }),

/***/ "../../../../../src/app/demo/data/widgetDemoData.data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return widget1Data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return widget2Data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return widget3Data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return widget4Data; });
/* unused harmony export discreteBarDemoValues */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return discreteBarDemoDataGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return lineChartDemoValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return lineChartDemoDataGenerator; });
/* unused harmony export lineChartInterpolatedDemoValues */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return lineChartInterpolatedDemoDataGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return recentCustomersDemoValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return recentSalesDemoDataGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return serverLoadDemoData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return pieChartDemoData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return trafficSourcesDemoData; });

var today = __WEBPACK_IMPORTED_MODULE_0_moment__().minutes(0).valueOf();
var widget1Data = [
    {
        key: 'Users',
        area: true,
        color: '#7986CC',
        values: [
            {
                "date": today - 1000 * 60 * 60 * 24 * 7,
                "value": 0
            },
            {
                "date": today - 1000 * 60 * 60 * 24 * 6,
                "value": 135
            },
            {
                "date": today - 1000 * 60 * 60 * 24 * 5,
                "value": 412
            },
            {
                "date": today - 1000 * 60 * 60 * 24 * 4,
                "value": 242
            },
            {
                "date": today - 1000 * 60 * 60 * 24 * 3,
                "value": 546
            },
            {
                "date": today - 1000 * 60 * 60 * 24 * 2,
                "value": 167
            },
            {
                "date": today - 1000 * 60 * 60 * 24,
                "value": 240
            },
            {
                "date": today,
                "value": 0
            },
        ]
    }
];
var widget2Data = [
    {
        key: 'Visits',
        area: true,
        color: '#FFD54F',
        values: [
            {
                "date": today - 1000 * 60 * 60 * 24 * 7,
                "value": 0
            },
            {
                "date": today - 1000 * 60 * 60 * 24 * 6,
                "value": 122
            },
            {
                "date": today - 1000 * 60 * 60 * 24 * 5,
                "value": 732
            },
            {
                "date": today - 1000 * 60 * 60 * 24 * 4,
                "value": 555
            },
            {
                "date": today - 1000 * 60 * 60 * 24 * 3,
                "value": 332
            },
            {
                "date": today - 1000 * 60 * 60 * 24 * 2,
                "value": 585
            },
            {
                "date": today - 1000 * 60 * 60 * 24,
                "value": 287
            },
            {
                "date": today,
                "value": 0
            },
        ]
    }
];
var widget3Data = [
    {
        key: 'Total Clicks',
        area: true,
        color: '#4DD0E2',
        values: [
            {
                "date": today - 1000 * 60 * 60 * 24 * 7,
                "value": 0
            },
            {
                "date": today - 1000 * 60 * 60 * 24 * 6,
                "value": 360
            },
            {
                "date": today - 1000 * 60 * 60 * 24 * 5,
                "value": 186
            },
            {
                "date": today - 1000 * 60 * 60 * 24 * 4,
                "value": 434
            },
            {
                "date": today - 1000 * 60 * 60 * 24 * 3,
                "value": 558
            },
            {
                "date": today - 1000 * 60 * 60 * 24 * 2,
                "value": 372
            },
            {
                "date": today - 1000 * 60 * 60 * 24,
                "value": 496
            },
            {
                "date": today,
                "value": 0
            },
        ]
    }
];
var widget4Data = [
    {
        key: 'Conversions',
        area: true,
        color: '#81C683',
        values: [
            {
                "date": today - 1000 * 60 * 60 * 24 * 7,
                "value": 0
            },
            {
                "date": today - 1000 * 60 * 60 * 24 * 6,
                "value": 89
            },
            {
                "date": today - 1000 * 60 * 60 * 24 * 5,
                "value": 145
            },
            {
                "date": today - 1000 * 60 * 60 * 24 * 4,
                "value": 173
            },
            {
                "date": today - 1000 * 60 * 60 * 24 * 3,
                "value": 262
            },
            {
                "date": today - 1000 * 60 * 60 * 24 * 2,
                "value": 142
            },
            {
                "date": today - 1000 * 60 * 60 * 24,
                "value": 174
            },
            {
                "date": today,
                "value": 0
            },
        ]
    }
];
var discreteBarDemoValues = [
    193, 82, 195, 62, 112, 73, 193, 199, 111, 177, 34, 143, 53, 90, 161, 31, 190, 129, 185, 133, 188, 107, 123, 125, 184, 152, 78, 172, 86, 152, 185, 139, 147, 65, 111, 86, 89, 117, 101, 128, 126, 178, 198, 110, 140, 121, 151, 142, 178, 11, 88, 182, 104, 26, 38, 72, 196, 132, 22, 81, 22, 159, 40, 124, 123, 133, 135, 167, 83, 111, 179, 83, 121, 136, 113
];
var discreteBarDemoDataGenerator = function () {
    var temp = [
        {
            key: 'Total Sales',
            values: []
        }
    ];
    discreteBarDemoValues.forEach(function (value, index) {
        temp[0].values.unshift({
            "date": today - 1000 * 60 * 60 * 24 * index,
            "value": value
        });
    });
    return temp;
};
var lineChartDemoValues = [
    55, 128, 155, 26, 37, 136, 91, 12, 7, 184, 88, 107, 128, 153, 59, 24, 135, 26, 85, 123, 161, 53, 116, 134
];
var lineChartDemoDataGenerator = function () {
    var temp = [
        {
            key: 'Visits',
            values: []
        }
    ];
    lineChartDemoValues.forEach(function (value, index) {
        temp[0].values.unshift({
            "date": today - 1000 * 60 * 60 * 24 * index,
            "value": value
        });
    });
    return temp;
};
var lineChartInterpolatedDemoValues = [
    186, 34, 172, 161, 27, 163, 87, 119, 123, 15, 180, 7, 72, 107, 181, 33, 45, 143, 91, 200
];
var lineChartInterpolatedDemoDataGenerator = function () {
    var temp = [
        {
            key: 'Total Clicks',
            values: []
        }
    ];
    lineChartInterpolatedDemoValues.forEach(function (value, index) {
        temp[0].values.unshift({
            "date": today - 1000 * 60 * 60 * 24 * index,
            "value": value
        });
    });
    return temp;
};
var recentCustomersDemoValues = [
    13, 11, 11, 18, 10, 15, 18, 21, 19, 14, 20, 20, 19, 25, 30, 26, 26, 16, 24, 26, 29, 21, 28, 20, 22, 26, 16, 11, 19, 10, 14, 15, 10, 14, 22, 12, 13, 18, 11, 12, 22, 12, 12, 12, 11, 19, 23, 20, 11, 17
];
var recentSalesDemoDataGenerator = function () {
    var temp = [
        {
            key: 'Sales',
            area: true,
            values: []
        }
    ];
    recentCustomersDemoValues.forEach(function (value, index) {
        temp[0].values.unshift({
            "date": today - 1000 * 60 * 60 * index,
            "value": value
        });
    });
    return temp;
};
var serverLoadDemoData = [
    {
        key: 'Web Server',
        area: true,
        color: '#E6E6E6',
        values: [
            {
                "xAxis": 8,
                "value": 0
            },
            {
                "xAxis": 7,
                "value": 89
            },
            {
                "xAxis": 6,
                "value": 145
            },
            {
                "xAxis": 5,
                "value": 173
            },
            {
                "xAxis": 4,
                "value": 262
            },
            {
                "xAxis": 3,
                "value": 142
            },
            {
                "xAxis": 2,
                "value": 174
            },
            {
                "xAxis": 1,
                "value": 0
            },
        ]
    }
];
var pieChartDemoData = [
    {
        "label": "TVs",
        "value": 24
    },
    {
        "label": "Smartphones",
        "value": 33
    },
    {
        "label": "Printers",
        "value": 16
    },
    {
        "label": "Scanners",
        "value": 8
    },
    {
        "label": "DVDs",
        "value": 19
    }
];
var trafficSourcesDemoData = [
    [
        {
            key: 'Direct',
            area: true,
            color: '#3F51B5',
            sum: 1348,
            values: [
                {
                    "date": today - 1000 * 60 * 60 * 24 * 7,
                    "value": 0
                },
                {
                    "date": today - 1000 * 60 * 60 * 24 * 6,
                    "value": 89
                },
                {
                    "date": today - 1000 * 60 * 60 * 24 * 5,
                    "value": 145
                },
                {
                    "date": today - 1000 * 60 * 60 * 24 * 4,
                    "value": 173
                },
                {
                    "date": today - 1000 * 60 * 60 * 24 * 3,
                    "value": 262
                },
                {
                    "date": today - 1000 * 60 * 60 * 24 * 2,
                    "value": 142
                },
                {
                    "date": today - 1000 * 60 * 60 * 24,
                    "value": 174
                },
                {
                    "date": today,
                    "value": 0
                },
            ]
        }
    ],
    [
        {
            key: 'Referral',
            area: true,
            color: '#2196F3',
            sum: 1252,
            values: [
                {
                    "date": today - 1000 * 60 * 60 * 24 * 7,
                    "value": 0
                },
                {
                    "date": today - 1000 * 60 * 60 * 24 * 6,
                    "value": 89
                },
                {
                    "date": today - 1000 * 60 * 60 * 24 * 5,
                    "value": 12
                },
                {
                    "date": today - 1000 * 60 * 60 * 24 * 4,
                    "value": 80
                },
                {
                    "date": today - 1000 * 60 * 60 * 24 * 3,
                    "value": 157
                },
                {
                    "date": today - 1000 * 60 * 60 * 24 * 2,
                    "value": 195
                },
                {
                    "date": today - 1000 * 60 * 60 * 24,
                    "value": 142
                },
                {
                    "date": today,
                    "value": 94
                },
            ]
        }
    ],
    [
        {
            key: 'Social',
            area: true,
            color: '#FF9800',
            sum: 954,
            values: [
                {
                    "date": today - 1000 * 60 * 60 * 24 * 7,
                    "value": 0
                },
                {
                    "date": today - 1000 * 60 * 60 * 24 * 6,
                    "value": 90
                },
                {
                    "date": today - 1000 * 60 * 60 * 24 * 5,
                    "value": 76
                },
                {
                    "date": today - 1000 * 60 * 60 * 24 * 4,
                    "value": 185
                },
                {
                    "date": today - 1000 * 60 * 60 * 24 * 3,
                    "value": 234
                },
                {
                    "date": today - 1000 * 60 * 60 * 24 * 2,
                    "value": 142
                },
                {
                    "date": today - 1000 * 60 * 60 * 24,
                    "value": 198
                },
                {
                    "date": today,
                    "value": 188
                },
            ]
        }
    ],
    [
        {
            key: 'Search',
            area: true,
            color: '#4CAF50',
            sum: 720,
            values: [
                {
                    "date": today - 1000 * 60 * 60 * 24 * 7,
                    "value": 89
                },
                {
                    "date": today - 1000 * 60 * 60 * 24 * 6,
                    "value": 54
                },
                {
                    "date": today - 1000 * 60 * 60 * 24 * 5,
                    "value": 99
                },
                {
                    "date": today - 1000 * 60 * 60 * 24 * 4,
                    "value": 132
                },
                {
                    "date": today - 1000 * 60 * 60 * 24 * 3,
                    "value": 85
                },
                {
                    "date": today - 1000 * 60 * 60 * 24 * 2,
                    "value": 54
                },
                {
                    "date": today - 1000 * 60 * 60 * 24,
                    "value": 104
                },
                {
                    "date": today,
                    "value": 80
                },
            ]
        }
    ],
    [
        {
            key: 'Internal',
            area: true,
            color: '#f44336',
            sum: 42,
            values: [
                {
                    "date": today - 1000 * 60 * 60 * 24 * 7,
                    "value": 0
                },
                {
                    "date": today - 1000 * 60 * 60 * 24 * 6,
                    "value": 12
                },
                {
                    "date": today - 1000 * 60 * 60 * 24 * 5,
                    "value": 6
                },
                {
                    "date": today - 1000 * 60 * 60 * 24 * 4,
                    "value": 10
                },
                {
                    "date": today - 1000 * 60 * 60 * 24 * 3,
                    "value": 16
                },
                {
                    "date": today - 1000 * 60 * 60 * 24 * 2,
                    "value": 14
                },
                {
                    "date": today - 1000 * 60 * 60 * 24,
                    "value": 18
                },
                {
                    "date": today,
                    "value": 10
                },
            ]
        }
    ],
];
//# sourceMappingURL=widgetDemoData.data.js.map

/***/ }),

/***/ "../../../../../src/app/demo/drag-and-drop/drag-and-drop.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" fxLayout=\"column\" fxLayoutAlign=\"start center\" style=\"height: 100%;\">\r\n\r\n  <h1><md-icon class=\"middle\">mouse</md-icon> Drag & Drop</h1>\r\n\r\n  <div class=\"list-container\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n    <div class=\"mat-elevation-z4\">\r\n      <md-toolbar>Drag & Drop Anything!</md-toolbar>\r\n      <md-list [sortablejs]=\"listArray\" [sortablejsOptions]=\"simpleOptions\">\r\n        <md-list-item class=\"draggable\" *ngFor=\"let list of listArray\">\r\n          <img md-list-avatar [src]=\"list.image\" alt=\"...\">\r\n          <h3 md-line> {{ list.name }} </h3>\r\n          <p md-line>\r\n            <span class=\"title\"> {{ list.subject }} </span>\r\n            <span class=\"extra\"> -- {{ list.content }} </span>\r\n          </p>\r\n        </md-list-item>\r\n      </md-list>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"list-container\" fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"center center\" fxLayoutWrap=\"wrap\">\r\n   <div class=\"list mat-elevation-z4\">\r\n     <md-toolbar>Group 1</md-toolbar>\r\n     <md-list [sortablejs]=\"listWithoutAvatarArray\" [sortablejsOptions]=\"groupOptions\">\r\n       <md-list-item class=\"small-list-item\" *ngFor=\"let list of listWithoutAvatarArray\">\r\n         <h3 class=\"middle\" md-line> <md-icon class=\"drag-handle\">drag_handle</md-icon> {{ list.name }} </h3>\r\n       </md-list-item>\r\n     </md-list>\r\n   </div>\r\n\r\n    <md-icon class=\"left-right-compare\">compare_arrows</md-icon>\r\n\r\n    <div class=\"list mat-elevation-z4\">\r\n      <md-toolbar>Group 2</md-toolbar>\r\n      <md-list [sortablejs]=\"numberListArray\" [sortablejsOptions]=\"groupOptions\">\r\n        <md-list-item class=\"small-list-item\" *ngFor=\"let list of numberListArray\">\r\n          <h3 class=\"middle\" md-line> <md-icon class=\"drag-handle\">drag_handle</md-icon> {{ list.name }} </h3>\r\n        </md-list-item>\r\n      </md-list>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/demo/drag-and-drop/drag-and-drop.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  background: #fff url(\"/assets/img/backgrounds/2.jpg\") no-repeat center center fixed;\n  background-size: cover;\n  min-height: 100%;\n  min-width: 100%; }\n\nh1 {\n  color: white;\n  text-shadow: 0 0 10px black; }\n\n.container {\n  width: 90%;\n  padding: 100px 0 0;\n  margin: 0 auto; }\n\n.list-container {\n  width: 100%;\n  margin: 24px; }\n  .list-container md-list-item {\n    background: white; }\n  .list-container .list {\n    margin: 24px; }\n  .list-container md-list {\n    padding-top: 0;\n    max-width: 100%; }\n\nmd-icon.left-right-compare {\n  text-shadow: 0px 0px 20px #444;\n  font-size: 60px;\n  width: 60px;\n  height: 60px;\n  color: white; }\n\n.small-list-item {\n  padding-left: 6px;\n  padding-right: 16px; }\n\n.draggable {\n  cursor: move;\n  cursor: -webkit-grabbing; }\n\n.drag-handle {\n  cursor: move;\n  cursor: -webkit-grabbing;\n  vertical-align: middle;\n  margin-right: 8px; }\n\n.sortable-ghost {\n  opacity: .5; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/demo/drag-and-drop/drag-and-drop.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__route_animation__ = __webpack_require__("../../../../../src/app/route.animation.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragAndDropComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DragAndDropComponent = (function () {
    function DragAndDropComponent() {
        this.groupOptions = {
            group: 'testGroup',
            handle: '.drag-handle',
            animation: 300
        };
        this.simpleOptions = {
            animation: 300
        };
    }
    DragAndDropComponent.prototype.ngOnInit = function () {
        this.listArray = [
            {
                image: 'assets/img/avatars/10.png',
                name: 'Sophie',
                subject: 'Dinner?',
                content: 'Are we still going out tonight?'
            },
            {
                image: 'assets/img/avatars/11.png',
                name: 'Jack',
                subject: 'Golf weekend',
                content: 'Hey! You wanted to go play Golf?'
            },
            {
                image: 'assets/img/avatars/12.png',
                name: 'Cody',
                subject: 'Code Quality',
                content: 'Love your newest theme, so clean and slick!'
            },
            {
                image: 'assets/img/avatars/13.png',
                name: 'James',
                subject: 'Party?',
                content: 'You wanna throw a party this weekend?'
            },
            {
                image: 'assets/img/avatars/14.png',
                name: 'Jessica',
                subject: 'Love you...',
                content: 'Hope we can see us again soon :)'
            }
        ];
        this.listWithoutAvatarArray = [
            {
                name: 'Sophia Levin'
            },
            {
                name: 'James Long'
            },
            {
                name: 'Jennifer Miller'
            },
            {
                name: 'John Don'
            }
        ];
        this.numberListArray = [
            {
                name: 'Number 1'
            },
            {
                name: 'Number 2'
            },
            {
                name: 'Number 3'
            },
            {
                name: 'Number 4'
            }
        ];
    };
    return DragAndDropComponent;
}());
DragAndDropComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-drag-and-drop',
        template: __webpack_require__("../../../../../src/app/demo/drag-and-drop/drag-and-drop.component.html"),
        styles: [__webpack_require__("../../../../../src/app/demo/drag-and-drop/drag-and-drop.component.scss")],
        host: {
            "[@fadeInAnimation]": 'true'
        },
        animations: [__WEBPACK_IMPORTED_MODULE_1__route_animation__["a" /* fadeInAnimation */]]
    }),
    __metadata("design:paramtypes", [])
], DragAndDropComponent);

//# sourceMappingURL=drag-and-drop.component.js.map

/***/ }),

/***/ "../../../../../src/app/demo/editor/editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" fxLayout=\"column\" fxLayoutAlign=\"start center\" style=\"height: 100%;\">\r\n  <h1><md-icon class=\"middle\">format_shapes</md-icon> WYSIWYG Editor</h1>\r\n  <div class=\"editor-container mat-elevation-z16\">\r\n    <quill-editor></quill-editor>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/demo/editor/editor.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  background: #fff url(\"/assets/img/backgrounds/1.jpg\") no-repeat center center fixed;\n  background-size: cover;\n  min-height: 100%;\n  min-width: 100%; }\n\nh1 {\n  color: white;\n  text-shadow: 0 0 10px black; }\n\n.container {\n  width: 90%;\n  padding: 100px 0 0;\n  margin: 0 auto; }\n\n.editor-container {\n  background: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/demo/editor/editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__route_animation__ = __webpack_require__("../../../../../src/app/route.animation.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditorComponent = (function () {
    function EditorComponent() {
    }
    EditorComponent.prototype.ngOnInit = function () {
    };
    return EditorComponent;
}());
EditorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-editor',
        template: __webpack_require__("../../../../../src/app/demo/editor/editor.component.html"),
        styles: [__webpack_require__("../../../../../src/app/demo/editor/editor.component.scss")],
        host: {
            "[@fadeInAnimation]": 'true'
        },
        animations: [__WEBPACK_IMPORTED_MODULE_1__route_animation__["a" /* fadeInAnimation */]]
    }),
    __metadata("design:paramtypes", [])
], EditorComponent);

//# sourceMappingURL=editor.component.js.map

/***/ }),

/***/ "../../../../../src/app/demo/forms/form-elements/form-elements.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"margin: 24px 0;\">\r\n    <md-card fxFlex>\r\n      <md-card-title>Basic Form Elements</md-card-title>\r\n\r\n      <md-divider></md-divider>\r\n\r\n      <md-card-content fxLayout=\"column\">\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\" fxLayoutAlign=\"start stretch\" fxLayoutAlign.gt-md=\"start start\" style=\"margin: 24px 0\">\r\n\r\n          <div fxFlex fxFlex.gt-md=\"30%\" style=\"margin-right: 24px;\">\r\n            <div fxLayout=\"column\">\r\n              <h3>Input field</h3>\r\n              <h4>&lt;md-input&gt;</h4>\r\n              <p>\r\n                Input fields with float labels greatly improve the usability of Forms. The user focuses the input and does not\r\n                lose the context of the field.\r\n              </p>\r\n              <h5>Example:</h5>\r\n              <p><code msHighlight class=\"html\">&lt;md-input-container&gt;<br/> &lt;input mdInput&gt;<br/>&lt;/md-input-container&gt;</code></p>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"demo-tabs mat-elevation-z2\" fxFlex>\r\n            <md-tab-group>\r\n              <md-tab label=\"PREVIEW\">\r\n                <div class=\"demo-preview\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                  <md-card fxFlex=\"80%\" fxFlex.sm=\"90%\">\r\n                    <md-card-content fxLayout=\"column\">\r\n                      <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n                        <md-input-container fxFlex>\r\n                          <input mdInput\r\n                                 placeholder=\"First Name\">\r\n                        </md-input-container>\r\n                        <md-input-container fxFlex>\r\n                          <input mdInput\r\n                                 placeholder=\"Last Name\">\r\n                        </md-input-container>\r\n                      </div>\r\n                      <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n                        <md-input-container fxFlex dividerColor=\"accent\">\r\n                          <input mdInput\r\n                                 placeholder=\"Pre-filled Input + Accent color\" value=\"Material Design\">\r\n                        </md-input-container>\r\n                      </div>\r\n                      <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n                        <md-input-container fxFlex>\r\n                          <input mdInput\r\n                                 placeholder=\"Address\">\r\n                          <span md-prefix><md-icon>place</md-icon></span>\r\n                        </md-input-container>\r\n                        <md-input-container fxFlex>\r\n                          <input mdInput\r\n                                 placeholder=\"City\">\r\n                          <span md-prefix><md-icon>location_city</md-icon></span>\r\n                        </md-input-container>\r\n                        <md-input-container fxFlex>\r\n                          <input mdInput\r\n                                 placeholder=\"Country\">\r\n                          <span md-suffix><md-icon>local_airport</md-icon></span>\r\n                        </md-input-container>\r\n                      </div>\r\n                      <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n                        <md-input-container fxFlex>\r\n                          <input mdInput\r\n                                 placeholder=\"Character count (max. 100)\"\r\n                                 maxlength=\"100\"\r\n                                 #characterCountHintExample\r\n                                 value=\"Hello! How are you today?\">\r\n                          <md-hint align=\"end\">{{ characterCountHintExample.value.length }} / 100</md-hint>\r\n                        </md-input-container>\r\n                      </div>\r\n                      <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n                        <md-input-container fxFlex>\r\n                          <input mdInput\r\n                                 placeholder=\"Primary Color\">\r\n                        </md-input-container>\r\n                        <md-input-container dividerColor=\"accent\" fxFlex>\r\n                          <input mdInput\r\n                                 placeholder=\"Accent Color\">\r\n                        </md-input-container>\r\n                        <md-input-container dividerColor=\"warn\" fxFlex>\r\n                          <input mdInput\r\n                                 placeholder=\"Warn Color\">\r\n                        </md-input-container>\r\n                      </div>\r\n                    </md-card-content>\r\n                  </md-card>\r\n                </div>\r\n              </md-tab>\r\n              <md-tab label=\"HTML\">\r\n                <code [innerHTML]=\"getEscaped(inputFieldHTML)\" msHighlight class=\"html\"></code>\r\n              </md-tab>\r\n            </md-tab-group>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <h3>API Summary</h3>\r\n\r\n        <div fxLayout=\"row\">\r\n          <table class=\"table table-striped table-condensed\">\r\n            <thead>\r\n              <tr>\r\n                <th>Name</th>\r\n                <th>Type</th>\r\n                <th>Description</th>\r\n                <th>Default Value</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td><code msHighlight class=\"inline\">align</code></td>\r\n                <td><code msHighlight class=\"inline\">\"start\" | \"end\"</code></td>\r\n                <td>The alignment of the <code msHighlight class=\"inline\">input</code> or <code msHighlight class=\"inline\">textarea</code>.</td>\r\n                <td><code msHighlight class=\"inline\">\"start\"</code></td>\r\n              </tr>\r\n              <tr>\r\n                <td><code msHighlight class=\"inline\">dividerColor</code></td>\r\n                <td><code msHighlight class=\"inline\">\"primary\" | \"accent\" | \"warn\"</code></td>\r\n                <td>The color of the placeholder and underline.</td>\r\n                <td><code msHighlight class=\"inline\">\"primary\"</code></td>\r\n              </tr>\r\n              <tr>\r\n                <td><code msHighlight class=\"inline\">floatingPlaceholder</code></td>\r\n                <td><code msHighlight class=\"inline\">boolean</code></td>\r\n                <td>Whether the placeholder should float above the input after text is entered.</td>\r\n                <td><code msHighlight class=\"inline\">true</code></td>\r\n              </tr>\r\n              <tr>\r\n                <td><code msHighlight class=\"inline\">hintLabel</code></td>\r\n                <td><code msHighlight class=\"inline\">string</code></td>\r\n                <td>The hint text to show on the start end of the <code msHighlight class=\"inline\">md-input-container</code></td>\r\n                <td><code msHighlight class=\"inline\">null</code></td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n\r\n      </md-card-content>\r\n    </md-card>\r\n  </div>\r\n\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"margin: 0 0 24px;\">\r\n    <md-card fxFlex>\r\n\r\n      <md-card-content fxLayout=\"column\">\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\" fxLayoutAlign=\"start stretch\" fxLayoutAlign.gt-md=\"start start\" style=\"margin: 0 0 24px\">\r\n\r\n          <div fxFlex fxFlex.gt-md=\"30%\" style=\"margin-right: 24px;\">\r\n            <div fxLayout=\"column\">\r\n              <h3>Switches</h3>\r\n              <h4>&lt;md-slide-toggle&gt;</h4>\r\n              <p>\r\n                Switches toggle the state of a single settings option. The option that the switch controls, as well as the state it’s in, should be made clear from the corresponding inline label.\r\n              </p>\r\n              <h5>Example:</h5>\r\n              <p><code msHighlight class=\"html\">&lt;md-slide-toggle&gt;<br/> Switch<br/>&lt;/md-slide-toggle&gt;</code></p>\r\n            </div>\r\n          </div>\r\n\r\n          <div fxFlex>\r\n            <div fxLayout=\"column\">\r\n              <md-slide-toggle [(ngModel)]=\"switch1\">\r\n                Simple Switch: {{ switch1 }}\r\n              </md-slide-toggle>\r\n              <md-slide-toggle color=\"primary\" [(ngModel)]=\"switch2\">\r\n                Primary Color Switch: {{ switch2 }}\r\n              </md-slide-toggle>\r\n              <md-slide-toggle color=\"warn\" [(ngModel)]=\"switch3\">\r\n                Warn Color Switch: {{ switch3 }}\r\n              </md-slide-toggle>\r\n              <md-slide-toggle [(ngModel)]=\"switch4\" disabled>\r\n                Disabled Switch\r\n              </md-slide-toggle>\r\n              <md-slide-toggle [(ngModel)]=\"switch5\" disabled>\r\n                Disabled Switch (Active)\r\n              </md-slide-toggle>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <h3>API Summary</h3>\r\n\r\n        <div fxLayout=\"row\">\r\n          <table class=\"table table-striped table-condensed\">\r\n            <thead>\r\n            <tr>\r\n              <th>Name</th>\r\n              <th>Type</th>\r\n              <th>Description</th>\r\n              <th>Default Value</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr>\r\n              <td><code msHighlight class=\"inline\">disabled</code></td>\r\n              <td><code msHighlight class=\"inline\">boolean</code></td>\r\n              <td>Disables the <code msHighlight class=\"inline\">switch</code></td>\r\n              <td><code msHighlight class=\"inline\">false</code></td>\r\n            </tr>\r\n            <tr>\r\n              <td><code msHighlight class=\"inline\">color</code></td>\r\n              <td><code msHighlight class=\"inline\">\"primary\" | \"accent\" | \"warn\"</code></td>\r\n              <td>The color palette of the <code msHighlight class=\"inline\">switch</code></td>\r\n              <td><code msHighlight class=\"inline\">\"accent\"</code></td>\r\n            </tr>\r\n            <tr>\r\n              <td><code msHighlight class=\"inline\">checked</code></td>\r\n              <td><code msHighlight class=\"inline\">boolean</code></td>\r\n              <td>Sets the value of the <code msHighlight class=\"inline\">switch</code></td>\r\n              <td><code msHighlight class=\"inline\">false</code></td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n\r\n      </md-card-content>\r\n    </md-card>\r\n  </div>\r\n\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"margin: 0 0 24px;\">\r\n    <md-card fxFlex>\r\n\r\n      <md-card-content fxLayout=\"column\">\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\" fxLayoutAlign=\"start stretch\" fxLayoutAlign.gt-md=\"start start\" style=\"margin: 0 0 24px\">\r\n\r\n          <div fxFlex fxFlex.gt-md=\"30%\" style=\"margin-right: 24px;\">\r\n            <div fxLayout=\"column\">\r\n              <h3>Checkboxes</h3>\r\n              <h4>&lt;md-slide-toggle&gt;</h4>\r\n              <p>\r\n                Checkboxes allow the user to select multiple options from a set.\r\n                If you have multiple options appearing in a list, you can preserve space by using checkboxes instead of switches.\r\n              </p>\r\n              <h5>Example:</h5>\r\n              <p><code msHighlight class=\"html\">&lt;md-checkbox&gt;<br/> Checkbox<br/>&lt;/md-checkbox&gt;</code></p>\r\n            </div>\r\n          </div>\r\n\r\n          <div fxFlex>\r\n            <div fxLayout=\"column\">\r\n              <md-checkbox [(ngModel)]=\"checkbox1\" style=\"margin-bottom: 15px;\">\r\n                Simple Checkbox: {{ checkbox1 }}\r\n              </md-checkbox>\r\n              <md-checkbox color=\"primary\" [(ngModel)]=\"checkbox2\" style=\"margin-bottom: 15px;\">\r\n                Primary Color Checkbox: {{ checkbox2 }}\r\n              </md-checkbox>\r\n              <md-checkbox color=\"warn\" [(ngModel)]=\"checkbox3\" style=\"margin-bottom: 15px;\">\r\n                Warn Color Checkbox: {{ checkbox3 }}\r\n              </md-checkbox>\r\n              <md-checkbox [(ngModel)]=\"checkbox4\" disabled style=\"margin-bottom: 15px;\">\r\n                Disabled Checkbox\r\n              </md-checkbox>\r\n              <md-checkbox [(ngModel)]=\"checkbox5\" disabled style=\"margin-bottom: 15px;\">\r\n                Disabled Checkbox (Active)\r\n              </md-checkbox>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <h3>API Summary</h3>\r\n\r\n        <div fxLayout=\"row\">\r\n          <table class=\"table table-striped table-condensed\">\r\n            <thead>\r\n            <tr>\r\n              <th>Name</th>\r\n              <th>Type</th>\r\n              <th>Description</th>\r\n              <th>Default Value</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr>\r\n              <td><code msHighlight class=\"inline\">disabled</code></td>\r\n              <td><code msHighlight class=\"inline\">boolean</code></td>\r\n              <td>Disables the <code msHighlight class=\"inline\">checkbox</code></td>\r\n              <td><code msHighlight class=\"inline\">false</code></td>\r\n            </tr>\r\n            <tr>\r\n              <td><code msHighlight class=\"inline\">color</code></td>\r\n              <td><code msHighlight class=\"inline\">\"primary\" | \"accent\" | \"warn\"</code></td>\r\n              <td>The color palette of the <code msHighlight class=\"inline\">checkbox</code></td>\r\n              <td><code msHighlight class=\"inline\">\"accent\"</code></td>\r\n            </tr>\r\n            <tr>\r\n              <td><code msHighlight class=\"inline\">checked</code></td>\r\n              <td><code msHighlight class=\"inline\">boolean</code></td>\r\n              <td>Sets the value of the <code msHighlight class=\"inline\">checkbox</code></td>\r\n              <td><code msHighlight class=\"inline\">false</code></td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n\r\n      </md-card-content>\r\n    </md-card>\r\n  </div>\r\n\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"margin: 0 0 24px;\">\r\n    <md-card fxFlex>\r\n\r\n      <md-card-content fxLayout=\"column\">\r\n\r\n        <div fxLayout=\"column\" fxLayout.gt-md=\"row\" fxLayoutAlign=\"start stretch\" fxLayoutAlign.gt-md=\"start start\" style=\"margin: 0 0 24px\">\r\n\r\n          <div fxFlex fxFlex.gt-md=\"30%\" style=\"margin-right: 24px;\">\r\n            <div fxLayout=\"column\">\r\n              <h3>Selects</h3>\r\n              <h4>&lt;md-select&gt;</h4>\r\n              <p>\r\n                Selects should be used when there is a great variety of options to choose from.\r\n              </p>\r\n              <h5>Example:</h5>\r\n              <p><code msHighlight class=\"html\">&lt;md-select&gt;<br/> &lt;md-option&gt;Option 1&lt;/md-option&gt;<br/> &lt;md-option&gt;Option 2&lt;/md-option&gt;<br/>&lt;/md-select&gt;</code></p>\r\n            </div>\r\n          </div>\r\n\r\n          <div>\r\n            <div fxLayout=\"column\">\r\n              <md-select [(ngModel)]=\"select1\" placeholder=\"Select your favorite drink\" style=\"margin: 20px 0;\">\r\n                <md-option value=\"Coke\">Coke</md-option>\r\n                <md-option value=\"Pepsi\">Pepsi</md-option>\r\n                <md-option value=\"Fanta\">Fanta</md-option>\r\n                <md-option value=\"Water\">Water</md-option>\r\n              </md-select>\r\n\r\n              Your favorite drink is: {{ select1 }}\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <h3>API Summary</h3>\r\n\r\n        <div fxLayout=\"row\">\r\n          <table class=\"table table-striped table-condensed\">\r\n            <thead>\r\n            <tr>\r\n              <th>Name</th>\r\n              <th>Type</th>\r\n              <th>Description</th>\r\n              <th>Default Value</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr>\r\n              <td><code msHighlight class=\"inline\">disabled</code></td>\r\n              <td><code msHighlight class=\"inline\">boolean</code></td>\r\n              <td>Disables the <code msHighlight class=\"inline\">checkbox</code></td>\r\n              <td><code msHighlight class=\"inline\">false</code></td>\r\n            </tr>\r\n            <tr>\r\n              <td><code msHighlight class=\"inline\">color</code></td>\r\n              <td><code msHighlight class=\"inline\">\"primary\" | \"accent\" | \"warn\"</code></td>\r\n              <td>The color palette of the <code msHighlight class=\"inline\">checkbox</code></td>\r\n              <td><code msHighlight class=\"inline\">\"accent\"</code></td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n\r\n      </md-card-content>\r\n    </md-card>\r\n  </div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/demo/forms/form-elements/form-elements.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block; }\n\nmd-card {\n  max-width: 90%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/demo/forms/form-elements/form-elements.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__route_animation__ = __webpack_require__("../../../../../src/app/route.animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormElementsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormElementsComponent = (function () {
    function FormElementsComponent() {
        this.switch1 = false;
        this.switch2 = true;
        this.switch3 = true;
        this.switch4 = false;
        this.switch5 = true;
        this.checkbox1 = false;
        this.checkbox2 = true;
        this.checkbox3 = true;
        this.checkbox4 = false;
        this.checkbox5 = true;
        this.inputFieldHTML = "\n  <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n    <md-input-container fxFlex>\n      <input mdInput\n             placeholder=\"First Name\">\n    </md-input-container>\n    <md-input-container fxFlex>\n      <input mdInput\n             placeholder=\"Last Name\">\n    </md-input-container>\n  </div>\n  <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n    <md-input-container fxFlex dividerColor=\"accent\">\n      <input mdInput\n             placeholder=\"Pre-filled Input + Accent color\" value=\"Material Design\">\n    </md-input-container>\n  </div>\n  <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n    <md-input-container fxFlex>\n      <input mdInput\n             placeholder=\"Address\">\n      <span md-prefix><md-icon>place</md-icon></span>\n    </md-input-container>\n    <md-input-container fxFlex>\n      <input mdInput\n             placeholder=\"City\">\n      <span md-prefix><md-icon>location_city</md-icon></span>\n    </md-input-container>\n    <md-input-container fxFlex>\n      <input mdInput\n             placeholder=\"Country\">\n      <span md-suffix><md-icon>local_airport</md-icon></span>\n    </md-input-container>\n  </div>\n  <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n    <md-input-container fxFlex>\n      <input mdInput\n             placeholder=\"Character count (max. 100)\"\n             maxlength=\"100\"\n             #characterCountHintExample\n             value=\"Hello! How are you today?\">\n      <md-hint align=\"end\">{{ characterCountHintExample.value.length }} / 100</md-hint>\n    </md-input-container>\n  </div>\n  <div fxLayout=\"column\" fxLayout.gt-md=\"row\">\n    <md-input-container fxFlex>\n      <input mdInput\n             placeholder=\"Primary Color\">\n    </md-input-container>\n    <md-input-container dividerColor=\"accent\" fxFlex>\n      <input mdInput\n             placeholder=\"Accent Color\">\n    </md-input-container>\n    <md-input-container dividerColor=\"warn\" fxFlex>\n      <input mdInput\n             placeholder=\"Warn Color\">\n    </md-input-container>\n  </div>\n  ";
    }
    FormElementsComponent.prototype.ngOnInit = function () {
    };
    FormElementsComponent.prototype.getEscaped = function (text) {
        return __WEBPACK_IMPORTED_MODULE_2_lodash__["escape"](text);
    };
    return FormElementsComponent;
}());
FormElementsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-form-elements',
        template: __webpack_require__("../../../../../src/app/demo/forms/form-elements/form-elements.component.html"),
        styles: [__webpack_require__("../../../../../src/app/demo/forms/form-elements/form-elements.component.scss")],
        host: {
            '[@routeAnimation]': 'true'
        },
        animations: [__WEBPACK_IMPORTED_MODULE_1__route_animation__["b" /* routeAnimation */]]
    }),
    __metadata("design:paramtypes", [])
], FormElementsComponent);

//# sourceMappingURL=form-elements.component.js.map

/***/ }),

/***/ "../../../../../src/app/demo/forms/form-wizard/form-wizard.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n  <md-card fxFlex=\"90%\" style=\"padding: 0;\">\r\n    <md-toolbar color=\"primary\">Form Wizard</md-toolbar>\r\n    <md-card-content>\r\n      <md-tab-group [selectedIndex]=\"selectedIndex\">\r\n        <md-tab label=\"ACCOUNT DETAILS\">\r\n          <form #form=\"ngForm\">\r\n            <div fxLayout=\"column\" style=\"padding: 16px;\">\r\n              <md-input-container>\r\n                <input mdInput\r\n                       name=\"username\"\r\n                       placeholder=\"Username\"\r\n                       required\r\n                       ngModel=\"DavidSmith33\">\r\n              </md-input-container>\r\n              <md-input-container>\r\n                <input mdInput\r\n                       name=\"email\"\r\n                       type=\"email\"\r\n                       required\r\n                       ngModel\r\n                       placeholder=\"E-Mail\">\r\n              </md-input-container>\r\n              <div fxLayout=\"column\" fxLayout.gt-sm=\"row\">\r\n                <md-input-container fxFlex>\r\n                  <input mdInput\r\n                         name=\"password\"\r\n                         type=\"password\"\r\n                         required\r\n                         ngModel\r\n                         placeholder=\"Password\">\r\n                </md-input-container>\r\n                <md-input-container fxFlex>\r\n                  <input mdInput\r\n                         name=\"password_confirm\"\r\n                         type=\"password\"\r\n                         required\r\n                         ngModel\r\n                         placeholder=\"Confirm Password\">\r\n                </md-input-container>\r\n              </div>\r\n\r\n              <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n                <button md-button\r\n                        type=\"button\"\r\n                        disabled>Previous</button>\r\n\r\n                <button color=\"primary\"\r\n                        md-raised-button\r\n                        style=\"margin-left: 8px;\"\r\n                        [disabled]=\"!form.valid\"\r\n                        (click)=\"nextStep()\"\r\n                        type=\"button\">Next</button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </md-tab>\r\n        <md-tab label=\"YOUR ADDRESS\" [disabled]=\"!form.valid\">\r\n          <form #form2=\"ngForm\">\r\n            <div fxLayout=\"column\" style=\"padding: 16px;\">\r\n              <div fxLayout=\"column\" fxLayout.gt-sm=\"row\">\r\n                <md-input-container fxFlex>\r\n                  <input mdInput\r\n                         name=\"firstname\"\r\n                         placeholder=\"First Name\"\r\n                         required>\r\n                </md-input-container>\r\n                <md-input-container fxFlex>\r\n                  <input mdInput\r\n                         name=\"lastname\"\r\n                         placeholder=\"Last Name\"\r\n                         required\r\n                         ngModel>\r\n                </md-input-container>\r\n              </div>\r\n\r\n              <md-input-container fxFlex>\r\n                <input mdInput\r\n                       name=\"street\"\r\n                       required\r\n                       ngModel\r\n                       placeholder=\"Street\">\r\n              </md-input-container>\r\n\r\n              <div fxLayout=\"column\" fxLayout.gt-sm=\"row\">\r\n                <md-input-container fxFlex>\r\n                  <input mdInput\r\n                         name=\"zipcode\"\r\n                         required\r\n                         ngModel\r\n                         placeholder=\"Zipcode\">\r\n                </md-input-container>\r\n                <md-input-container fxFlex>\r\n                  <input mdInput\r\n                         name=\"city\"\r\n                         required\r\n                         ngModel\r\n                         placeholder=\"City\">\r\n                </md-input-container>\r\n              </div>\r\n\r\n              <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n                <button md-button\r\n                        type=\"button\"\r\n                        (click)=\"previousStep()\">Previous</button>\r\n\r\n                <button color=\"primary\"\r\n                        md-raised-button\r\n                        style=\"margin-left: 8px;\"\r\n                        [disabled]=\"!form2.valid\"\r\n                        (click)=\"nextStep()\"\r\n                        type=\"button\">Next</button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </md-tab>\r\n        <md-tab label=\"BILLING DETAILS\"  [disabled]=\"!form2.valid\">\r\n          <form #form3=\"ngForm\">\r\n            <div fxLayout=\"column\" style=\"padding: 16px;\">\r\n              <md-input-container fxFlex>\r\n                <input mdInput\r\n                       name=\"creditcard\"\r\n                       placeholder=\"Credit Card Number\"\r\n                       required>\r\n              </md-input-container>\r\n\r\n              <md-input-container fxFlex>\r\n                <input mdInput\r\n                       name=\"creditcardname\"\r\n                       required\r\n                       ngModel\r\n                       placeholder=\"Credit Card Owner\">\r\n              </md-input-container>\r\n\r\n              <md-input-container fxFlex>\r\n                <input mdInput\r\n                       name=\"expirydate\"\r\n                       required\r\n                       ngModel\r\n                       placeholder=\"Expiry Date (MM/YYYY)\">\r\n              </md-input-container>\r\n\r\n              <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n                <button md-button\r\n                        type=\"button\"\r\n                        (click)=\"previousStep()\">Previous</button>\r\n\r\n                <button color=\"primary\"\r\n                        md-raised-button\r\n                        style=\"margin-left: 8px;\"\r\n                        [disabled]=\"!form3.valid\"\r\n                        (click)=\"nextStep()\"\r\n                        type=\"button\">Next</button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </md-tab>\r\n        <md-tab label=\"CONFIRMATION\"  [disabled]=\"!form3.valid\">\r\n          <div fxLayout=\"column\" style=\"padding: 16px;\">\r\n            <h1>Congratulations!</h1>\r\n            <p>You submitted the form.</p>\r\n          </div>\r\n        </md-tab>\r\n      </md-tab-group>\r\n    </md-card-content>\r\n  </md-card>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/demo/forms/form-wizard/form-wizard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  padding: 36px;\n  height: calc(100% - 72px);\n  background: url(\"/assets/img/backgrounds/2.jpg\") no-repeat center center fixed;\n  background-size: cover; }\n\nmd-input-container {\n  margin: 8px 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/demo/forms/form-wizard/form-wizard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__route_animation__ = __webpack_require__("../../../../../src/app/route.animation.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormWizardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormWizardComponent = (function () {
    function FormWizardComponent() {
        this.selectedIndex = 0;
    }
    FormWizardComponent.prototype.ngOnInit = function () {
    };
    FormWizardComponent.prototype.nextStep = function () {
        this.selectedIndex += 1;
    };
    FormWizardComponent.prototype.previousStep = function () {
        this.selectedIndex -= 1;
    };
    return FormWizardComponent;
}());
FormWizardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-form-wizard',
        template: __webpack_require__("../../../../../src/app/demo/forms/form-wizard/form-wizard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/demo/forms/form-wizard/form-wizard.component.scss")],
        host: {
            '[@fadeInAnimation]': 'true'
        },
        animations: [__WEBPACK_IMPORTED_MODULE_1__route_animation__["a" /* fadeInAnimation */]]
    }),
    __metadata("design:paramtypes", [])
], FormWizardComponent);

//# sourceMappingURL=form-wizard.component.js.map

/***/ }),

/***/ "../../../../../src/app/demo/icons/icons.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"margin: 24px 0;\">\r\n  <md-card fxFlex=\"90%\">\r\n    <md-card-title>Material Buttons</md-card-title>\r\n\r\n    <md-divider></md-divider>\r\n\r\n    <md-card-content fxLayout=\"column\">\r\n\r\n      <div fxLayout=\"column\" fxLayout.gt-md=\"row\" fxLayoutAlign=\"start stretch\" fxLayoutAlign.gt-md=\"start start\" style=\"margin: 24px 0\">\r\n        <div fxFlex fxFlex.gt-md=\"30%\" style=\"margin-right: 24px;\">\r\n          <div fxLayout=\"column\">\r\n            <h3>Material Icons</h3>\r\n            <h4>&lt;md-icon&gt;</h4>\r\n            <p>Icons are a neat way to add some live to only-text lists. Our theme comes with a great variety of icons from the official Material Icons font.</p>\r\n            <h5>Example:</h5>\r\n            <p><code msHighlight class=\"html\">&lt;md-icon&gt;grade&lt;/md-icon&gt;</code></p>\r\n          </div>\r\n        </div>\r\n        <div class=\"demo-tabs mat-elevation-z2\" fxFlex>\r\n          <md-tab-group>\r\n            <md-tab label=\"PREVIEW\">\r\n              <div class=\"demo-preview\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n                <md-card fxFlex=\"80%\" fxFlex.sm=\"90%\">\r\n                  <md-card-content fxLayout=\"column\" fxLayout.gt-sm=\"row\" fxLayoutAlign=\"space-around center\" fxLayoutWrap=\"wrap\">\r\n                    <md-icon>grade</md-icon>\r\n                  </md-card-content>\r\n                </md-card>\r\n              </div>\r\n            </md-tab>\r\n            <md-tab label=\"HTML\">\r\n              <code [innerHTML]=\"getEscaped(iconsHTML)\" msHighlight class=\"html\"></code>\r\n            </md-tab>\r\n          </md-tab-group>\r\n        </div>\r\n      </div>\r\n\r\n      <md-divider></md-divider>\r\n\r\n      <div>\r\n        <h2>List of all Material Icons</h2>\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\" fxLayoutWrap=\"wrap\">\r\n          <div fxLayout=\"column\" fxLayoutAlign=\"center center\" fxFlex=\"20%\" *ngFor=\"let icon of icons\">\r\n            <md-icon>{{ icon }}</md-icon>\r\n            <span class=\"icon-name\">{{ icon }}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </md-card-content>\r\n\r\n  </md-card>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/demo/icons/icons.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block; }\n\nmd-icon {\n  font-size: 50px;\n  height: 50px;\n  width: 50px;\n  margin: 24px 16px 8px;\n  color: #333; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/demo/icons/icons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__route_animation__ = __webpack_require__("../../../../../src/app/route.animation.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IconsComponent = (function () {
    function IconsComponent() {
        this.iconsHTML = "<md-icon>grade</md-icon>";
        this.icons = [
            "3d_rotation",
            "access_alarm",
            "access_alarms",
            "access_time",
            "accessibility",
            "account_balance",
            "account_balance_wallet",
            "account_box",
            "account_circle",
            "adb",
            "add",
            "add_alarm",
            "add_alert",
            "add_box",
            "add_circle",
            "add_circle_outline",
            "add_shopping_cart",
            "add_to_photos",
            "adjust",
            "airline_seat_flat",
            "airline_seat_flat_angled",
            "airline_seat_individual_suite",
            "airline_seat_legroom_extra",
            "airline_seat_legroom_normal",
            "airline_seat_legroom_reduced",
            "airline_seat_recline_extra",
            "airline_seat_recline_normal",
            "airplanemode_active",
            "airplanemode_inactive",
            "airplay",
            "alarm",
            "alarm_add",
            "alarm_off",
            "alarm_on",
            "album",
            "android",
            "announcement",
            "apps",
            "archive",
            "arrow_back",
            "arrow_drop_down",
            "arrow_drop_down_circle",
            "arrow_drop_up",
            "arrow_forward",
            "aspect_ratio",
            "assessment",
            "assignment",
            "assignment_ind",
            "assignment_late",
            "assignment_return",
            "assignment_returned",
            "assignment_turned_in",
            "assistant",
            "assistant_photo",
            "attach_file",
            "attach_money",
            "attachment",
            "audiotrack",
            "autorenew",
            "av_timer",
            "backspace",
            "backup",
            "battery_alert",
            "battery_charging_full",
            "battery_full",
            "battery_std",
            "battery_unknown",
            "beenhere",
            "block",
            "bluetooth",
            "bluetooth_audio",
            "bluetooth_connected",
            "bluetooth_disabled",
            "bluetooth_searching",
            "blur_circular",
            "blur_linear",
            "blur_off",
            "blur_on",
            "book",
            "bookmark",
            "bookmark_border",
            "border_all",
            "border_bottom",
            "border_clear",
            "border_color",
            "border_horizontal",
            "border_inner",
            "border_left",
            "border_outer",
            "border_right",
            "border_style",
            "border_top",
            "border_vertical",
            "brightness_1",
            "brightness_2",
            "brightness_3",
            "brightness_4",
            "brightness_5",
            "brightness_6",
            "brightness_7",
            "brightness_auto",
            "brightness_high",
            "brightness_low",
            "brightness_medium",
            "broken_image",
            "brush",
            "bug_report",
            "build",
            "business",
            "cached",
            "cake",
            "call",
            "call_end",
            "call_made",
            "call_merge",
            "call_missed",
            "call_received",
            "call_split",
            "camera",
            "camera_alt",
            "camera_enhance",
            "camera_front",
            "camera_rear",
            "camera_roll",
            "cancel",
            "card_giftcard",
            "card_membership",
            "card_travel",
            "cast",
            "cast_connected",
            "center_focus_strong",
            "center_focus_weak",
            "change_history",
            "chat",
            "chat_bubble",
            "chat_bubble_outline",
            "check",
            "check_box",
            "check_box_outline_blank",
            "check_circle",
            "chevron_left",
            "chevron_right",
            "chrome_reader_mode",
            "class",
            "clear",
            "clear_all",
            "close",
            "closed_caption",
            "cloud",
            "cloud_circle",
            "cloud_done",
            "cloud_download",
            "cloud_off",
            "cloud_queue",
            "cloud_upload",
            "code",
            "collections",
            "collections_bookmark",
            "color_lens",
            "colorize",
            "comment",
            "compare",
            "computer",
            "confirmation_number",
            "contact_phone",
            "contacts",
            "content_copy",
            "content_cut",
            "content_paste",
            "control_point",
            "control_point_duplicate",
            "create",
            "credit_card",
            "crop",
            "crop_16_9",
            "crop_3_2",
            "crop_5_4",
            "crop_7_5",
            "crop_din",
            "crop_free",
            "crop_landscape",
            "crop_original",
            "crop_portrait",
            "crop_square",
            "dashboard",
            "data_usage",
            "dehaze",
            "delete",
            "description",
            "desktop_mac",
            "desktop_windows",
            "details",
            "developer_board",
            "developer_mode",
            "device_hub",
            "devices",
            "dialer_sip",
            "dialpad",
            "directions",
            "directions_bike",
            "directions_boat",
            "directions_bus",
            "directions_car",
            "directions_railway",
            "directions_run",
            "directions_subway",
            "directions_transit",
            "directions_walk",
            "disc_full",
            "dns",
            "do_not_disturb",
            "do_not_disturb_alt",
            "dock",
            "domain",
            "done",
            "done_all",
            "drafts",
            "drive_eta",
            "dvr",
            "edit",
            "eject",
            "email",
            "equalizer",
            "error",
            "error_outline",
            "event",
            "event_available",
            "event_busy",
            "event_note",
            "event_seat",
            "exit_to_app",
            "expand_less",
            "expand_more",
            "explicit",
            "explore",
            "exposure",
            "exposure_neg_1",
            "exposure_neg_2",
            "exposure_plus_1",
            "exposure_plus_2",
            "exposure_zero",
            "extension",
            "face",
            "fast_forward",
            "fast_rewind",
            "favorite",
            "favorite_border",
            "feedback",
            "file_download",
            "file_upload",
            "filter",
            "filter_1",
            "filter_2",
            "filter_3",
            "filter_4",
            "filter_5",
            "filter_6",
            "filter_7",
            "filter_8",
            "filter_9",
            "filter_9_plus",
            "filter_b_and_w",
            "filter_center_focus",
            "filter_drama",
            "filter_frames",
            "filter_hdr",
            "filter_list",
            "filter_none",
            "filter_tilt_shift",
            "filter_vintage",
            "find_in_page",
            "find_replace",
            "flag",
            "flare",
            "flash_auto",
            "flash_off",
            "flash_on",
            "flight",
            "flight_land",
            "flight_takeoff",
            "flip",
            "flip_to_back",
            "flip_to_front",
            "folder",
            "folder_open",
            "folder_shared",
            "folder_special",
            "font_download",
            "format_align_center",
            "format_align_justify",
            "format_align_left",
            "format_align_right",
            "format_bold",
            "format_clear",
            "format_color_fill",
            "format_color_reset",
            "format_color_text",
            "format_indent_decrease",
            "format_indent_increase",
            "format_italic",
            "format_line_spacing",
            "format_list_bulleted",
            "format_list_numbered",
            "format_paint",
            "format_quote",
            "format_size",
            "format_strikethrough",
            "format_textdirection_l_to_r",
            "format_textdirection_r_to_l",
            "format_underlined",
            "forum",
            "forward",
            "forward_10",
            "forward_30",
            "forward_5",
            "fullscreen",
            "fullscreen_exit",
            "functions",
            "gamepad",
            "games",
            "gesture",
            "get_app",
            "gif",
            "gps_fixed",
            "gps_not_fixed",
            "gps_off",
            "grade",
            "gradient",
            "grain",
            "graphic_eq",
            "grid_off",
            "grid_on",
            "group",
            "group_add",
            "group_work",
            "hd",
            "hdr_off",
            "hdr_on",
            "hdr_strong",
            "hdr_weak",
            "headset",
            "headset_mic",
            "healing",
            "hearing",
            "help",
            "help_outline",
            "high_quality",
            "highlight_off",
            "history",
            "home",
            "hotel",
            "hourglass_empty",
            "hourglass_full",
            "http",
            "https",
            "image",
            "image_aspect_ratio",
            "import_export",
            "inbox",
            "indeterminate_check_box",
            "info",
            "info_outline",
            "input",
            "insert_chart",
            "insert_comment",
            "insert_drive_file",
            "insert_emoticon",
            "insert_invitation",
            "insert_link",
            "insert_photo",
            "invert_colors",
            "invert_colors_off",
            "iso",
            "keyboard",
            "keyboard_arrow_down",
            "keyboard_arrow_left",
            "keyboard_arrow_right",
            "keyboard_arrow_up",
            "keyboard_backspace",
            "keyboard_capslock",
            "keyboard_hide",
            "keyboard_return",
            "keyboard_tab",
            "keyboard_voice",
            "label",
            "label_outline",
            "landscape",
            "language",
            "laptop",
            "laptop_chromebook",
            "laptop_mac",
            "laptop_windows",
            "launch",
            "layers",
            "layers_clear",
            "leak_add",
            "leak_remove",
            "lens",
            "library_add",
            "library_books",
            "library_music",
            "link",
            "list",
            "live_help",
            "live_tv",
            "local_activity",
            "local_airport",
            "local_atm",
            "local_bar",
            "local_cafe",
            "local_car_wash",
            "local_convenience_store",
            "local_dining",
            "local_drink",
            "local_florist",
            "local_gas_station",
            "local_grocery_store",
            "local_hospital",
            "local_hotel",
            "local_laundry_service",
            "local_library",
            "local_mall",
            "local_movies",
            "local_offer",
            "local_parking",
            "local_pharmacy",
            "local_phone",
            "local_pizza",
            "local_play",
            "local_post_office",
            "local_printshop",
            "local_see",
            "local_shipping",
            "local_taxi",
            "location_city",
            "location_disabled",
            "location_off",
            "location_on",
            "location_searching",
            "lock",
            "lock_open",
            "lock_outline",
            "looks",
            "looks_3",
            "looks_4",
            "looks_5",
            "looks_6",
            "looks_one",
            "looks_two",
            "loop",
            "loupe",
            "loyalty",
            "mail",
            "map",
            "markunread",
            "markunread_mailbox",
            "memory",
            "menu",
            "merge_type",
            "message",
            "mic",
            "mic_none",
            "mic_off",
            "mms",
            "mode_comment",
            "mode_edit",
            "money_off",
            "monochrome_photos",
            "mood",
            "mood_bad",
            "more",
            "more_horiz",
            "more_vert",
            "mouse",
            "movie",
            "movie_creation",
            "music_note",
            "my_location",
            "nature",
            "nature_people",
            "navigate_before",
            "navigate_next",
            "navigation",
            "network_cell",
            "network_locked",
            "network_wifi",
            "new_releases",
            "nfc",
            "no_sim",
            "not_interested",
            "note_add",
            "notifications",
            "notifications_active",
            "notifications_none",
            "notifications_off",
            "notifications_paused",
            "offline_pin",
            "ondemand_video",
            "open_in_browser",
            "open_in_new",
            "open_with",
            "pages",
            "pageview",
            "palette",
            "panorama",
            "panorama_fish_eye",
            "panorama_horizontal",
            "panorama_vertical",
            "panorama_wide_angle",
            "party_mode",
            "pause",
            "pause_circle_filled",
            "pause_circle_outline",
            "payment",
            "people",
            "people_outline",
            "perm_camera_mic",
            "perm_contact_calendar",
            "perm_data_setting",
            "perm_device_information",
            "perm_identity",
            "perm_media",
            "perm_phone_msg",
            "perm_scan_wifi",
            "person",
            "person_add",
            "person_outline",
            "person_pin",
            "personal_video",
            "phone",
            "phone_android",
            "phone_bluetooth_speaker",
            "phone_forwarded",
            "phone_in_talk",
            "phone_iphone",
            "phone_locked",
            "phone_missed",
            "phone_paused",
            "phonelink",
            "phonelink_erase",
            "phonelink_lock",
            "phonelink_off",
            "phonelink_ring",
            "phonelink_setup",
            "photo",
            "photo_album",
            "photo_camera",
            "photo_library",
            "photo_size_select_actual",
            "photo_size_select_large",
            "photo_size_select_small",
            "picture_as_pdf",
            "picture_in_picture",
            "pin_drop",
            "place",
            "play_arrow",
            "play_circle_filled",
            "play_circle_outline",
            "play_for_work",
            "playlist_add",
            "plus_one",
            "poll",
            "polymer",
            "portable_wifi_off",
            "portrait",
            "power",
            "power_input",
            "power_settings_new",
            "present_to_all",
            "print",
            "public",
            "publish",
            "query_builder",
            "question_answer",
            "queue",
            "queue_music",
            "radio",
            "radio_button_checked",
            "radio_button_unchecked",
            "rate_review",
            "receipt",
            "recent_actors",
            "redeem",
            "redo",
            "refresh",
            "remove",
            "remove_circle",
            "remove_circle_outline",
            "remove_red_eye",
            "reorder",
            "repeat",
            "repeat_one",
            "replay",
            "replay_10",
            "replay_30",
            "replay_5",
            "reply",
            "reply_all",
            "report",
            "report_problem",
            "restaurant_menu",
            "restore",
            "ring_volume",
            "room",
            "rotate_90_degrees_ccw",
            "rotate_left",
            "rotate_right",
            "router",
            "satellite",
            "save",
            "scanner",
            "schedule",
            "school",
            "screen_lock_landscape",
            "screen_lock_portrait",
            "screen_lock_rotation",
            "screen_rotation",
            "sd_card",
            "sd_storage",
            "search",
            "security",
            "select_all",
            "send",
            "settings",
            "settings_applications",
            "settings_backup_restore",
            "settings_bluetooth",
            "settings_brightness",
            "settings_cell",
            "settings_ethernet",
            "settings_input_antenna",
            "settings_input_component",
            "settings_input_composite",
            "settings_input_hdmi",
            "settings_input_svideo",
            "settings_overscan",
            "settings_phone",
            "settings_power",
            "settings_remote",
            "settings_system_daydream",
            "settings_voice",
            "share",
            "shop",
            "shop_two",
            "shopping_basket",
            "shopping_cart",
            "shuffle",
            "signal_cellular_4_bar",
            "signal_cellular_connected_no_internet_4_bar",
            "signal_cellular_no_sim",
            "signal_cellular_null",
            "signal_cellular_off",
            "signal_wifi_4_bar",
            "signal_wifi_4_bar_lock",
            "signal_wifi_off",
            "sim_card",
            "sim_card_alert",
            "skip_next",
            "skip_previous",
            "slideshow",
            "smartphone",
            "sms",
            "sms_failed",
            "snooze",
            "sort",
            "sort_by_alpha",
            "space_bar",
            "speaker",
            "speaker_group",
            "speaker_notes",
            "speaker_phone",
            "spellcheck",
            "star",
            "star_border",
            "star_half",
            "stars",
            "stay_current_landscape",
            "stay_current_portrait",
            "stay_primary_landscape",
            "stay_primary_portrait",
            "stop",
            "storage",
            "store",
            "store_mall_directory",
            "straighten",
            "strikethrough_s",
            "style",
            "subject",
            "subtitles",
            "supervisor_account",
            "surround_sound",
            "swap_calls",
            "swap_horiz",
            "swap_vert",
            "swap_vertical_circle",
            "switch_camera",
            "switch_video",
            "sync",
            "sync_disabled",
            "sync_problem",
            "system_update",
            "system_update_alt",
            "tab",
            "tab_unselected",
            "tablet",
            "tablet_android",
            "tablet_mac",
            "tag_faces",
            "tap_and_play",
            "terrain",
            "text_format",
            "textsms",
            "texture",
            "theaters",
            "thumb_down",
            "thumb_up",
            "thumbs_up_down",
            "time_to_leave",
            "timelapse",
            "timer",
            "timer_10",
            "timer_3",
            "timer_off",
            "toc",
            "today",
            "toll",
            "tonality",
            "toys",
            "track_changes",
            "traffic",
            "transform",
            "translate",
            "trending_down",
            "trending_flat",
            "trending_up",
            "tune",
            "turned_in",
            "turned_in_not",
            "tv",
            "undo",
            "unfold_less",
            "unfold_more",
            "usb",
            "verified_user",
            "vertical_align_bottom",
            "vertical_align_center",
            "vertical_align_top",
            "vibration",
            "video_library",
            "videocam",
            "videocam_off",
            "view_agenda",
            "view_array",
            "view_carousel",
            "view_column",
            "view_comfy",
            "view_compact",
            "view_day",
            "view_headline",
            "view_list",
            "view_module",
            "view_quilt",
            "view_stream",
            "view_week",
            "vignette",
            "visibility",
            "visibility_off",
            "voice_chat",
            "voicemail",
            "volume_down",
            "volume_mute",
            "volume_off",
            "volume_up",
            "vpn_key",
            "vpn_lock",
            "wallpaper",
            "warning",
            "watch",
            "wb_auto",
            "wb_cloudy",
            "wb_incandescent",
            "wb_iridescent",
            "wb_sunny",
            "wc",
            "web",
            "whatshot",
            "widgets",
            "wifi",
            "wifi_lock",
            "wifi_tethering",
            "work",
            "wrap_text",
            "youtube_searched_for",
            "zoom_in",
            "zoom_out"
        ];
    }
    IconsComponent.prototype.ngOnInit = function () {
    };
    IconsComponent.prototype.getEscaped = function (text) {
        return __WEBPACK_IMPORTED_MODULE_1_lodash__["escape"](text);
    };
    return IconsComponent;
}());
IconsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-icons',
        template: __webpack_require__("../../../../../src/app/demo/icons/icons.component.html"),
        styles: [__webpack_require__("../../../../../src/app/demo/icons/icons.component.scss")],
        host: {
            '[@fadeInAnimation]': 'true'
        },
        animations: [__WEBPACK_IMPORTED_MODULE_2__route_animation__["a" /* fadeInAnimation */]]
    }),
    __metadata("design:paramtypes", [])
], IconsComponent);

//# sourceMappingURL=icons.component.js.map

/***/ }),

/***/ "../../../../../src/app/demo/levels/level5/level5.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" style=\"margin: 24px 0;\">\r\n  <md-card fxFlex=\"90%\">\r\n    <md-card-title>This is Level 5</md-card-title>\r\n  </md-card>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/demo/levels/level5/level5.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/demo/levels/level5/level5.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__route_animation__ = __webpack_require__("../../../../../src/app/route.animation.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Level5Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Level5Component = (function () {
    function Level5Component() {
    }
    Level5Component.prototype.ngOnInit = function () {
    };
    return Level5Component;
}());
Level5Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-level5',
        template: __webpack_require__("../../../../../src/app/demo/levels/level5/level5.component.html"),
        styles: [__webpack_require__("../../../../../src/app/demo/levels/level5/level5.component.scss")],
        host: {
            '[@routeAnimation]': 'true'
        },
        animations: [__WEBPACK_IMPORTED_MODULE_1__route_animation__["b" /* routeAnimation */]]
    }),
    __metadata("design:paramtypes", [])
], Level5Component);

//# sourceMappingURL=level5.component.js.map

/***/ }),

/***/ "../../../../../src/app/demo/maps/google-maps/google-maps.component.html":
/***/ (function(module, exports) {

module.exports = "<agm-map [latitude]=\"lat\" [longitude]=\"lng\">\r\n  <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\r\n</agm-map>\r\n"

/***/ }),

/***/ "../../../../../src/app/demo/maps/google-maps/google-maps.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  height: 100%; }\n\n.agm-map-container-inner {\n  height: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/demo/maps/google-maps/google-maps.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleMapsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GoogleMapsComponent = (function () {
    function GoogleMapsComponent() {
        this.lat = 40.730610;
        this.lng = -73.935242;
    }
    GoogleMapsComponent.prototype.ngOnInit = function () {
    };
    return GoogleMapsComponent;
}());
GoogleMapsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-google-maps',
        template: __webpack_require__("../../../../../src/app/demo/maps/google-maps/google-maps.component.html"),
        styles: [__webpack_require__("../../../../../src/app/demo/maps/google-maps/google-maps.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], GoogleMapsComponent);

//# sourceMappingURL=google-maps.component.js.map

/***/ }),

/***/ "../../../../../src/app/demo/tables/fixed-header-table/fixed-header-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayout.gt-md=\"row\" style=\"height: 100%;\">\r\n  <md-card fxFlex.gt-md=\"300px\" style=\"margin-right: 16px;\">\r\n    <md-card-title>Fixed Header Table</md-card-title>\r\n    <md-card-content fxLayout=\"column\">\r\n      <p>Try the checkboxes and see what happens.</p>\r\n      <md-checkbox [(ngModel)]=\"tableHover\">\r\n        .table-hover\r\n      </md-checkbox>\r\n      <md-checkbox [(ngModel)]=\"tableStriped\">\r\n        .table-striped\r\n      </md-checkbox>\r\n      <md-checkbox [(ngModel)]=\"tableCondensed\">\r\n        .table-condensed\r\n      </md-checkbox>\r\n      <md-checkbox [(ngModel)]=\"tableBordered\">\r\n        .table-bordered\r\n      </md-checkbox>\r\n    </md-card-content>\r\n  </md-card>\r\n\r\n  <div fxFlex class=\"table-container mat-elevation-z2\">\r\n\r\n    <div class=\"table-header\" fxLayout=\"row\" [class.table-condensed]=\"tableCondensed\">\r\n      <div [style.width.px]=\"cellWidths[0]\"></div>\r\n      <div [style.width.px]=\"cellWidths[1]\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n        <span class=\"name\">Name</span>\r\n      </div>\r\n      <div [style.width.px]=\"cellWidths[2]\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n        <span class=\"name\">Company</span>\r\n      </div>\r\n      <div [style.width.px]=\"cellWidths[3]\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n        <span class=\"name\">E-Mail</span>\r\n      </div>\r\n      <div [style.width.px]=\"cellWidths[4]\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n        <span class=\"name\">Phone</span>\r\n      </div>\r\n      <div [style.width.px]=\"cellWidths[5]\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n        <span class=\"name\">Balance</span>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"table-content\">\r\n      <table class=\"table\" [class.table-hover]=\"tableHover\" [class.table-striped]=\"tableStriped\" [class.table-condensed]=\"tableCondensed\" [class.table-bordered]=\"tableBordered\">\r\n        <tbody #tbody>\r\n        <tr *ngFor=\"let row of rows\">\r\n          <td class=\"avatar-cell\"><img class=\"avatar\" [src]=\"row.picture\"></td>\r\n          <td>{{ row.name.first }} {{ row.name.last }}</td>\r\n          <td>{{ row.company }}</td>\r\n          <td>{{ row.email }}</td>\r\n          <td>{{ row.phone }}</td>\r\n          <td>{{ row.balance }}</td>\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/demo/tables/fixed-header-table/fixed-header-table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  height: calc(100% - 72px);\n  margin: 36px;\n  position: relative; }\n\n.table-container {\n  height: 100%; }\n\n.table-header {\n  height: 51px;\n  background-color: #fff;\n  color: #757575;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n  .table-header > div {\n    vertical-align: bottom; }\n    .table-header > div > .name {\n      padding-left: 16px; }\n  .table-header.table-condensed > div > .name {\n    padding-left: 8px; }\n\n.table-content {\n  height: calc(100% - 51px);\n  overflow: auto; }\n\n.avatar-cell {\n  text-align: center;\n  width: 40px;\n  padding-left: 24px;\n  padding-right: 8px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/demo/tables/fixed-header-table/fixed-header-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__route_animation__ = __webpack_require__("../../../../../src/app/route.animation.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FixedHeaderTableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FixedHeaderTableComponent = (function () {
    function FixedHeaderTableComponent() {
        this.cellWidths = [];
        this.tableHover = true;
        this.tableStriped = true;
        this.tableCondensed = true;
    }
    FixedHeaderTableComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var cells = this.tbody.nativeElement.children[0].children;
        for (var _i = 0, cells_1 = cells; _i < cells_1.length; _i++) {
            var cell = cells_1[_i];
            this.cellWidths.push(cell.offsetWidth);
        }
        var resizeSensor = new ResizeSensor(this.tbody.nativeElement, function () {
            _this.cellWidths.length = 0;
            for (var _i = 0, cells_2 = cells; _i < cells_2.length; _i++) {
                var cell = cells_2[_i];
                _this.cellWidths.push(cell.offsetWidth);
            }
        });
    };
    FixedHeaderTableComponent.prototype.ngOnInit = function () {
        this.rows = [
            {
                "name": {
                    "first": "Jeanne",
                    "last": "Riddle"
                },
                "picture": "assets/img/avatars/3.png",
                "company": "SUPPORTAL",
                "email": "jeanne.riddle@supportal.co.uk",
                "phone": "+1 (999) 474-3922",
                "balance": "$1,193.14"
            },
            {
                "name": {
                    "first": "Decker",
                    "last": "Bates"
                },
                "picture": "assets/img/avatars/13.png",
                "company": "DATACATOR",
                "email": "decker.bates@datacator.us",
                "phone": "+1 (894) 465-3124",
                "balance": "$1,317.23"
            },
            {
                "name": {
                    "first": "Bobbie",
                    "last": "Camacho"
                },
                "picture": "assets/img/avatars/18.png",
                "company": "SYNKGEN",
                "email": "bobbie.camacho@synkgen.info",
                "phone": "+1 (848) 510-2798",
                "balance": "$3,373.16"
            },
            {
                "name": {
                    "first": "Burke",
                    "last": "Mcclure"
                },
                "picture": "assets/img/avatars/20.png",
                "company": "INQUALA",
                "email": "burke.mcclure@inquala.io",
                "phone": "+1 (836) 527-2494",
                "balance": "$3,333.40"
            },
            {
                "name": {
                    "first": "Ellison",
                    "last": "Salas"
                },
                "picture": "assets/img/avatars/2.png",
                "company": "VIASIA",
                "email": "ellison.salas@viasia.ca",
                "phone": "+1 (935) 540-2655",
                "balance": "$2,832.23"
            },
            {
                "name": {
                    "first": "Mallory",
                    "last": "Stevenson"
                },
                "picture": "assets/img/avatars/2.png",
                "company": "VIXO",
                "email": "mallory.stevenson@vixo.net",
                "phone": "+1 (828) 461-2664",
                "balance": "$1,531.64"
            },
            {
                "name": {
                    "first": "Ola",
                    "last": "Perez"
                },
                "picture": "assets/img/avatars/11.png",
                "company": "INSURON",
                "email": "ola.perez@insuron.name",
                "phone": "+1 (811) 419-2398",
                "balance": "$2,488.98"
            },
            {
                "name": {
                    "first": "Beverly",
                    "last": "Mcintyre"
                },
                "picture": "assets/img/avatars/8.png",
                "company": "LUNCHPOD",
                "email": "beverly.mcintyre@lunchpod.biz",
                "phone": "+1 (943) 495-2938",
                "balance": "$3,639.15"
            },
            {
                "name": {
                    "first": "Silvia",
                    "last": "Willis"
                },
                "picture": "assets/img/avatars/6.png",
                "company": "KOG",
                "email": "silvia.willis@kog.biz",
                "phone": "+1 (981) 491-3905",
                "balance": "$1,244.21"
            },
            {
                "name": {
                    "first": "Golden",
                    "last": "Franklin"
                },
                "picture": "assets/img/avatars/3.png",
                "company": "UNISURE",
                "email": "golden.franklin@unisure.com",
                "phone": "+1 (937) 502-3222",
                "balance": "$2,036.64"
            },
            {
                "name": {
                    "first": "Dale",
                    "last": "Hayden"
                },
                "picture": "assets/img/avatars/2.png",
                "company": "MOTOVATE",
                "email": "dale.hayden@motovate.tv",
                "phone": "+1 (980) 455-2446",
                "balance": "$1,954.39"
            },
            {
                "name": {
                    "first": "Wendy",
                    "last": "Browning"
                },
                "picture": "assets/img/avatars/2.png",
                "company": "OATFARM",
                "email": "wendy.browning@oatfarm.me",
                "phone": "+1 (960) 529-3965",
                "balance": "$2,195.33"
            },
            {
                "name": {
                    "first": "Myers",
                    "last": "Shields"
                },
                "picture": "assets/img/avatars/16.png",
                "company": "FARMEX",
                "email": "myers.shields@farmex.co.uk",
                "phone": "+1 (934) 582-3368",
                "balance": "$3,290.54"
            },
            {
                "name": {
                    "first": "Harrington",
                    "last": "Figueroa"
                },
                "picture": "assets/img/avatars/10.png",
                "company": "CODAX",
                "email": "harrington.figueroa@codax.us",
                "phone": "+1 (978) 557-3570",
                "balance": "$2,571.18"
            },
            {
                "name": {
                    "first": "Jana",
                    "last": "Whitney"
                },
                "picture": "assets/img/avatars/18.png",
                "company": "ENTOGROK",
                "email": "jana.whitney@entogrok.info",
                "phone": "+1 (946) 586-2922",
                "balance": "$1,255.98"
            },
            {
                "name": {
                    "first": "Krystal",
                    "last": "Weiss"
                },
                "picture": "assets/img/avatars/11.png",
                "company": "COMVERGES",
                "email": "krystal.weiss@comverges.io",
                "phone": "+1 (962) 453-2642",
                "balance": "$1,110.59"
            },
            {
                "name": {
                    "first": "Lawson",
                    "last": "Dunlap"
                },
                "picture": "assets/img/avatars/9.png",
                "company": "CHORIZON",
                "email": "lawson.dunlap@chorizon.ca",
                "phone": "+1 (853) 492-2346",
                "balance": "$1,518.05"
            },
            {
                "name": {
                    "first": "Suzette",
                    "last": "Hubbard"
                },
                "picture": "assets/img/avatars/5.png",
                "company": "OCTOCORE",
                "email": "suzette.hubbard@octocore.net",
                "phone": "+1 (924) 421-3925",
                "balance": "$1,947.02"
            },
            {
                "name": {
                    "first": "Virginia",
                    "last": "Nixon"
                },
                "picture": "assets/img/avatars/3.png",
                "company": "NORSUP",
                "email": "virginia.nixon@norsup.name",
                "phone": "+1 (858) 434-2894",
                "balance": "$1,231.14"
            },
            {
                "name": {
                    "first": "Mccormick",
                    "last": "Barry"
                },
                "picture": "assets/img/avatars/19.png",
                "company": "VIAGREAT",
                "email": "mccormick.barry@viagreat.biz",
                "phone": "+1 (892) 481-2106",
                "balance": "$1,972.35"
            },
            {
                "name": {
                    "first": "Aguirre",
                    "last": "Edwards"
                },
                "picture": "assets/img/avatars/13.png",
                "company": "FISHLAND",
                "email": "aguirre.edwards@fishland.biz",
                "phone": "+1 (816) 506-3960",
                "balance": "$3,954.43"
            },
            {
                "name": {
                    "first": "Reynolds",
                    "last": "Wiley"
                },
                "picture": "assets/img/avatars/12.png",
                "company": "ZISIS",
                "email": "reynolds.wiley@zisis.com",
                "phone": "+1 (992) 581-2149",
                "balance": "$1,773.69"
            },
            {
                "name": {
                    "first": "Kathy",
                    "last": "Mcmahon"
                },
                "picture": "assets/img/avatars/18.png",
                "company": "PROSURE",
                "email": "kathy.mcmahon@prosure.tv",
                "phone": "+1 (881) 594-2014",
                "balance": "$2,642.83"
            },
            {
                "name": {
                    "first": "Della",
                    "last": "Gonzalez"
                },
                "picture": "assets/img/avatars/6.png",
                "company": "AMTAS",
                "email": "della.gonzalez@amtas.me",
                "phone": "+1 (919) 560-3480",
                "balance": "$2,953.71"
            },
            {
                "name": {
                    "first": "Lenore",
                    "last": "Mcguire"
                },
                "picture": "assets/img/avatars/4.png",
                "company": "ZILLACON",
                "email": "lenore.mcguire@zillacon.co.uk",
                "phone": "+1 (831) 453-2064",
                "balance": "$1,396.53"
            },
            {
                "name": {
                    "first": "Penelope",
                    "last": "Jacobs"
                },
                "picture": "assets/img/avatars/4.png",
                "company": "CIPROMOX",
                "email": "penelope.jacobs@cipromox.us",
                "phone": "+1 (952) 569-2514",
                "balance": "$1,214.28"
            },
            {
                "name": {
                    "first": "Bettye",
                    "last": "Conrad"
                },
                "picture": "assets/img/avatars/18.png",
                "company": "SULTRAXIN",
                "email": "bettye.conrad@sultraxin.info",
                "phone": "+1 (885) 487-2230",
                "balance": "$2,015.66"
            },
            {
                "name": {
                    "first": "Louisa",
                    "last": "Savage"
                },
                "picture": "assets/img/avatars/18.png",
                "company": "EZENT",
                "email": "louisa.savage@ezent.io",
                "phone": "+1 (836) 461-2129",
                "balance": "$1,260.52"
            },
            {
                "name": {
                    "first": "Black",
                    "last": "Patton"
                },
                "picture": "assets/img/avatars/20.png",
                "company": "EVIDENDS",
                "email": "black.patton@evidends.ca",
                "phone": "+1 (990) 599-3912",
                "balance": "$2,517.43"
            },
            {
                "name": {
                    "first": "Gilmore",
                    "last": "Donovan"
                },
                "picture": "assets/img/avatars/5.png",
                "company": "PYRAMIA",
                "email": "gilmore.donovan@pyramia.net",
                "phone": "+1 (865) 536-2179",
                "balance": "$3,221.32"
            },
            {
                "name": {
                    "first": "Abbott",
                    "last": "Farmer"
                },
                "picture": "assets/img/avatars/5.png",
                "company": "CALCU",
                "email": "abbott.farmer@calcu.name",
                "phone": "+1 (909) 516-2360",
                "balance": "$1,415.31"
            },
            {
                "name": {
                    "first": "Ferrell",
                    "last": "Wilder"
                },
                "picture": "assets/img/avatars/13.png",
                "company": "ZILLADYNE",
                "email": "ferrell.wilder@zilladyne.biz",
                "phone": "+1 (839) 464-3973",
                "balance": "$3,754.11"
            },
            {
                "name": {
                    "first": "Delia",
                    "last": "Horn"
                },
                "picture": "assets/img/avatars/7.png",
                "company": "GOKO",
                "email": "delia.horn@goko.biz",
                "phone": "+1 (873) 577-2753",
                "balance": "$3,204.10"
            },
            {
                "name": {
                    "first": "Josefina",
                    "last": "Mcdaniel"
                },
                "picture": "assets/img/avatars/15.png",
                "company": "BOINK",
                "email": "josefina.mcdaniel@boink.com",
                "phone": "+1 (816) 588-3229",
                "balance": "$2,783.07"
            },
            {
                "name": {
                    "first": "Walls",
                    "last": "Kelly"
                },
                "picture": "assets/img/avatars/6.png",
                "company": "SKINSERVE",
                "email": "walls.kelly@skinserve.tv",
                "phone": "+1 (972) 473-2027",
                "balance": "$3,439.00"
            },
            {
                "name": {
                    "first": "Kinney",
                    "last": "Cochran"
                },
                "picture": "assets/img/avatars/11.png",
                "company": "ECOLIGHT",
                "email": "kinney.cochran@ecolight.me",
                "phone": "+1 (876) 472-2157",
                "balance": "$2,948.15"
            },
            {
                "name": {
                    "first": "Althea",
                    "last": "York"
                },
                "picture": "assets/img/avatars/20.png",
                "company": "MAGNINA",
                "email": "althea.york@magnina.co.uk",
                "phone": "+1 (859) 557-2700",
                "balance": "$1,131.21"
            },
            {
                "name": {
                    "first": "Lula",
                    "last": "Walker"
                },
                "picture": "assets/img/avatars/16.png",
                "company": "ZIGGLES",
                "email": "lula.walker@ziggles.us",
                "phone": "+1 (955) 434-2394",
                "balance": "$2,500.72"
            },
            {
                "name": {
                    "first": "Craft",
                    "last": "Ramos"
                },
                "picture": "assets/img/avatars/13.png",
                "company": "ANDERSHUN",
                "email": "craft.ramos@andershun.info",
                "phone": "+1 (901) 578-2231",
                "balance": "$3,485.08"
            },
            {
                "name": {
                    "first": "Mckinney",
                    "last": "English"
                },
                "picture": "assets/img/avatars/7.png",
                "company": "BALOOBA",
                "email": "mckinney.english@balooba.io",
                "phone": "+1 (851) 497-3114",
                "balance": "$2,163.44"
            },
            {
                "name": {
                    "first": "Kirsten",
                    "last": "Mcfarland"
                },
                "picture": "assets/img/avatars/16.png",
                "company": "REMOLD",
                "email": "kirsten.mcfarland@remold.ca",
                "phone": "+1 (987) 570-3370",
                "balance": "$1,735.32"
            },
            {
                "name": {
                    "first": "Dale",
                    "last": "Kramer"
                },
                "picture": "assets/img/avatars/9.png",
                "company": "MAROPTIC",
                "email": "dale.kramer@maroptic.net",
                "phone": "+1 (871) 489-3969",
                "balance": "$1,500.19"
            },
            {
                "name": {
                    "first": "Owens",
                    "last": "Buchanan"
                },
                "picture": "assets/img/avatars/4.png",
                "company": "DATAGEN",
                "email": "owens.buchanan@datagen.name",
                "phone": "+1 (921) 459-3242",
                "balance": "$2,131.18"
            },
            {
                "name": {
                    "first": "Castro",
                    "last": "Combs"
                },
                "picture": "assets/img/avatars/8.png",
                "company": "MEDALERT",
                "email": "castro.combs@medalert.biz",
                "phone": "+1 (887) 492-2937",
                "balance": "$1,206.68"
            },
            {
                "name": {
                    "first": "Jeannette",
                    "last": "Fitzgerald"
                },
                "picture": "assets/img/avatars/12.png",
                "company": "GRUPOLI",
                "email": "jeannette.fitzgerald@grupoli.biz",
                "phone": "+1 (855) 547-2184",
                "balance": "$1,065.40"
            },
            {
                "name": {
                    "first": "Laurie",
                    "last": "Mays"
                },
                "picture": "assets/img/avatars/14.png",
                "company": "EURON",
                "email": "laurie.mays@euron.com",
                "phone": "+1 (952) 465-3803",
                "balance": "$3,464.62"
            },
            {
                "name": {
                    "first": "Ivy",
                    "last": "Booker"
                },
                "picture": "assets/img/avatars/2.png",
                "company": "EMPIRICA",
                "email": "ivy.booker@empirica.tv",
                "phone": "+1 (875) 482-2565",
                "balance": "$3,105.96"
            },
            {
                "name": {
                    "first": "Isabelle",
                    "last": "Avery"
                },
                "picture": "assets/img/avatars/16.png",
                "company": "MYOPIUM",
                "email": "isabelle.avery@myopium.me",
                "phone": "+1 (922) 525-2137",
                "balance": "$2,661.55"
            },
            {
                "name": {
                    "first": "Beryl",
                    "last": "Holcomb"
                },
                "picture": "assets/img/avatars/6.png",
                "company": "INDEXIA",
                "email": "beryl.holcomb@indexia.co.uk",
                "phone": "+1 (838) 450-2157",
                "balance": "$3,114.98"
            },
            {
                "name": {
                    "first": "Lorene",
                    "last": "West"
                },
                "picture": "assets/img/avatars/14.png",
                "company": "PRINTSPAN",
                "email": "lorene.west@printspan.us",
                "phone": "+1 (896) 467-3407",
                "balance": "$2,982.99"
            },
            {
                "name": {
                    "first": "Allie",
                    "last": "Flowers"
                },
                "picture": "assets/img/avatars/8.png",
                "company": "EXIAND",
                "email": "allie.flowers@exiand.info",
                "phone": "+1 (949) 469-2348",
                "balance": "$2,976.61"
            }
        ];
    };
    return FixedHeaderTableComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('tbody'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], FixedHeaderTableComponent.prototype, "tbody", void 0);
FixedHeaderTableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-fixed-header-table',
        template: __webpack_require__("../../../../../src/app/demo/tables/fixed-header-table/fixed-header-table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/demo/tables/fixed-header-table/fixed-header-table.component.scss")],
        host: {
            '[@routeAnimation]': 'true'
        },
        animations: [__WEBPACK_IMPORTED_MODULE_1__route_animation__["b" /* routeAnimation */]]
    }),
    __metadata("design:paramtypes", [])
], FixedHeaderTableComponent);

var _a;
//# sourceMappingURL=fixed-header-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/demo/tables/simple-table/simple-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayout.gt-md=\"row\">\r\n  <md-card fxFlex.gt-md=\"300px\" style=\"margin-right: 16px;\">\r\n    <md-card-title>Simple Table</md-card-title>\r\n    <md-card-content fxLayout=\"column\">\r\n      <p>Try the checkboxes and see what happens.</p>\r\n      <md-checkbox [(ngModel)]=\"tableHover\">\r\n        .table-hover\r\n      </md-checkbox>\r\n      <md-checkbox [(ngModel)]=\"tableStriped\">\r\n        .table-striped\r\n      </md-checkbox>\r\n      <md-checkbox [(ngModel)]=\"tableCondensed\">\r\n        .table-condensed\r\n      </md-checkbox>\r\n      <md-checkbox [(ngModel)]=\"tableBordered\">\r\n        .table-bordered\r\n      </md-checkbox>\r\n    </md-card-content>\r\n  </md-card>\r\n\r\n  <div fxFlex class=\"mat-elevation-z2\">\r\n\r\n    <table class=\"table\" [class.table-hover]=\"tableHover\" [class.table-striped]=\"tableStriped\" [class.table-condensed]=\"tableCondensed\" [class.table-bordered]=\"tableBordered\">\r\n      <thead>\r\n      <tr>\r\n        <th></th>\r\n        <th>Name</th>\r\n        <th>Company</th>\r\n        <th>E-Mail</th>\r\n        <th>Phone</th>\r\n        <th>Balance</th>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr *ngFor=\"let row of rows\">\r\n        <td class=\"avatar-cell\"><img class=\"avatar\" [src]=\"row.picture\"></td>\r\n        <td>{{ row.name.first }} {{ row.name.last }}</td>\r\n        <td>{{ row.company }}</td>\r\n        <td>{{ row.email }}</td>\r\n        <td>{{ row.phone }}</td>\r\n        <td>{{ row.balance }}</td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/demo/tables/simple-table/simple-table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  margin: 36px;\n  position: relative; }\n\n.avatar-cell {\n  text-align: center;\n  width: 40px;\n  padding-left: 24px;\n  padding-right: 8px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/demo/tables/simple-table/simple-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__route_animation__ = __webpack_require__("../../../../../src/app/route.animation.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleTableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SimpleTableComponent = (function () {
    function SimpleTableComponent() {
        this.tableHover = true;
    }
    SimpleTableComponent.prototype.ngOnInit = function () {
        this.rows = [
            {
                "name": {
                    "first": "Debora",
                    "last": "Castro"
                },
                "picture": "assets/img/avatars/15.png",
                "company": "SIGNIDYNE",
                "email": "debora.castro@signidyne.ca",
                "phone": "+1 (979) 427-3700",
                "balance": "$1,743.04"
            },
            {
                "name": {
                    "first": "Warren",
                    "last": "Gallegos"
                },
                "picture": "assets/img/avatars/8.png",
                "company": "XSPORTS",
                "email": "warren.gallegos@xsports.biz",
                "phone": "+1 (964) 433-3008",
                "balance": "$1,122.90"
            },
            {
                "name": {
                    "first": "Gordon",
                    "last": "Sloan"
                },
                "picture": "assets/img/avatars/17.png",
                "company": "FUTURIS",
                "email": "gordon.sloan@futuris.com",
                "phone": "+1 (904) 572-2860",
                "balance": "$1,505.24"
            },
            {
                "name": {
                    "first": "Nettie",
                    "last": "Hoover"
                },
                "picture": "assets/img/avatars/5.png",
                "company": "UNEEQ",
                "email": "nettie.hoover@uneeq.us",
                "phone": "+1 (943) 579-2855",
                "balance": "$2,206.32"
            },
            {
                "name": {
                    "first": "Bartlett",
                    "last": "Kramer"
                },
                "picture": "assets/img/avatars/13.png",
                "company": "MIXERS",
                "email": "bartlett.kramer@mixers.co.uk",
                "phone": "+1 (897) 410-2327",
                "balance": "$1,220.73"
            },
            {
                "name": {
                    "first": "Martina",
                    "last": "Barnes"
                },
                "picture": "assets/img/avatars/17.png",
                "company": "VERAQ",
                "email": "martina.barnes@veraq.biz",
                "phone": "+1 (917) 535-3821",
                "balance": "$1,236.69"
            },
            {
                "name": {
                    "first": "Vasquez",
                    "last": "Pugh"
                },
                "picture": "assets/img/avatars/8.png",
                "company": "MOMENTIA",
                "email": "vasquez.pugh@momentia.net",
                "phone": "+1 (903) 505-2458",
                "balance": "$1,734.39"
            },
            {
                "name": {
                    "first": "Moran",
                    "last": "Burris"
                },
                "picture": "assets/img/avatars/9.png",
                "company": "ZOLAVO",
                "email": "moran.burris@zolavo.org",
                "phone": "+1 (985) 531-3293",
                "balance": "$2,320.01"
            },
            {
                "name": {
                    "first": "Kayla",
                    "last": "Langley"
                },
                "picture": "assets/img/avatars/6.png",
                "company": "ELECTONIC",
                "email": "kayla.langley@electonic.tv",
                "phone": "+1 (901) 473-2752",
                "balance": "$2,600.99"
            },
            {
                "name": {
                    "first": "Hutchinson",
                    "last": "Golden"
                },
                "picture": "assets/img/avatars/4.png",
                "company": "CEDWARD",
                "email": "hutchinson.golden@cedward.name",
                "phone": "+1 (906) 540-2818",
                "balance": "$3,077.00"
            },
            {
                "name": {
                    "first": "Cherry",
                    "last": "Pollard"
                },
                "picture": "assets/img/avatars/6.png",
                "company": "ZOXY",
                "email": "cherry.pollard@zoxy.io",
                "phone": "+1 (962) 591-3338",
                "balance": "$2,528.52"
            },
            {
                "name": {
                    "first": "Samantha",
                    "last": "Flowers"
                },
                "picture": "assets/img/avatars/4.png",
                "company": "COMTOUR",
                "email": "samantha.flowers@comtour.me",
                "phone": "+1 (948) 513-3422",
                "balance": "$3,517.51"
            }
        ];
    };
    return SimpleTableComponent;
}());
SimpleTableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ms-simple-table',
        template: __webpack_require__("../../../../../src/app/demo/tables/simple-table/simple-table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/demo/tables/simple-table/simple-table.component.scss")],
        host: {
            '[@routeAnimation]': 'true'
        },
        animations: [__WEBPACK_IMPORTED_MODULE_1__route_animation__["b" /* routeAnimation */]]
    }),
    __metadata("design:paramtypes", [])
], SimpleTableComponent);

//# sourceMappingURL=simple-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/route.animation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routeAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fadeInAnimation; });

/*
Deprecated until Opacity works again

export let routeAnimation = trigger('routeAnimation', [
  transition('void => *', [
    style({
      transform: 'translate3d(0, 10%, 0)',
      opacity: 0,
    }),
    group([
      animate('400ms ease-in-out', style({
        //transform: 'translate3d(0, 0, 0)',
        transform: 'translate3d(0, 0, 0)',
        opacity: 1,
      })),
      animate('400ms 150ms ease-in-out', style({
        opacity: 1,
      }))
    ]),
  ]),
]);
*/
var routeAnimation = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('routeAnimation', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('void => *', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({
            opacity: 0,
        }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('400ms 150ms ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({
            opacity: 1,
        }))
    ]),
]);
var fadeInAnimation = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('fadeInAnimation', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('void => *', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({
            opacity: 0,
        }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('400ms 150ms ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({
            opacity: 1,
        }))
    ]),
]);
//# sourceMappingURL=route.animation.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    googleApi: ''
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map