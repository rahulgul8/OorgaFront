webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "  mat-sidenav {\r\n    position: fixed;\r\n    background-color: grey;\r\n  }\r\n\r\n  body, html {\r\n    margin: 0;\r\n    height: 100%;\r\n  }\r\n  \r\n  mat-sidenav-container{\r\n    height: 100%;\r\n  }\r\n  \r\n  mat-sidenav-container /deep/ .md-sidenav-content {\r\n    overflow: hidden;\r\n  }\r\n  \r\n  mat-sidenav {\r\n    width: 250px;\r\n    height: 100%;\r\n    padding: 0;\r\n    background-color: lightgray;\r\n  }\r\n  \r\n  .sidenav-title {\r\n    color: white;\r\n    text-align: center;\r\n  }\r\n  \r\n  .sidenav-menu {\r\n    text-indent: 20px;\r\n  }\r\n  \r\n  .app-content {\r\n    height: calc(100% - 64px);\r\n    overflow: auto;\r\n    background: rgb(211, 209, 209);\r\n  }\r\n  \r\n  .app-toolbar-menu {\r\n    padding: 0 14px 0 14px;\r\n    color: white;\r\n  }\r\n  \r\n  .app-icon-button {\r\n    box-shadow: none;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n    background: none;\r\n    border: none;\r\n    cursor: pointer;\r\n    -webkit-filter: none;\r\n            filter: none;\r\n    font-weight: normal;\r\n    height: auto;\r\n    line-height: inherit;\r\n    margin: 0;\r\n    min-width: 0;\r\n    padding: 0;\r\n    text-align: left;\r\n    text-decoration: none;\r\n  }\r\n  \r\n  .image{\r\n    width: 8em;\r\n    height: 3em;\r\n    margin: 2em;\r\n  }\r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <mat-sidenav-container class=\"example-container\" autosize>\r\n\r\n    <mat-sidenav #sideNav [mode]=\"isLargeScreen() ? 'side' : 'over'\" [opened]=\"isLargeScreen()\"><side-bar></side-bar></mat-sidenav>\r\n    <mat-sidenav-content>\r\n        <button mat-button color=\"warn\" *ngIf=\"!isLargeScreen()\" (click)=\"sideNav.toggle()\" class=\"mat-icon-button md-primary\" aria-label=\"Settings\">\r\n            <i class=\"material-icons\">dehaze</i>\r\n        </button>\r\n        <router-outlet></router-outlet>\r\n    </mat-sidenav-content>\r\n\r\n</mat-sidenav-container> -->\r\n<mat-sidenav-container>\r\n\r\n    <!-- <mat-sidenav #sidenav class=\"app-sidenav\" [mode]=\"isLargeScreen() ? 'side' : 'over'\" [opened]=\"isLargeScreen()\">\r\n        <div class=\"sidenav-title\">\r\n            <img class=\"image\" src=\"/assets/oorga.png\">\r\n        </div>\r\n        <side-bar></side-bar>\r\n    </mat-sidenav> -->\r\n\r\n    <div class=\"app-content\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n\r\n</mat-sidenav-container>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_sharing_service__ = __webpack_require__("../../../../../src/app/services/sharing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
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
    function AppComponent(share, router, observableMedia) {
        this.share = share;
        this.router = router;
        this.observableMedia = observableMedia;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var grid = new Map([
            ["xs", 1],
            ["sm", 2],
            ["md", 3],
            ["lg", 4],
            ["xl", 4]
        ]);
        var start;
        grid.forEach(function (cols, mqAlias) {
            if (_this.observableMedia.isActive(mqAlias)) {
                start = cols;
            }
        });
        this.cols = this.observableMedia.asObservable()
            .map(function (change) {
            console.log(change);
            console.log(grid.get(change.mqAlias));
            return grid.get(change.mqAlias);
        })
            .startWith(start);
        this.share.getObservable().subscribe(function (res) {
            if (__WEBPACK_IMPORTED_MODULE_1__services_sharing_service__["a" /* Data */].TOGGLE == res.getKey()) {
                _this.sideNav.toggle();
            }
        });
    };
    AppComponent.prototype.isLargeScreen = function () {
        var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if (width > 720) {
            return true;
        }
        else {
            return false;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4__angular_material__["g" /* MatSidenav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__angular_material__["g" /* MatSidenav */])
    ], AppComponent.prototype, "sideNav", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_sharing_service__["b" /* SharingService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__["b" /* ObservableMedia */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_core_yt_player_yt_player_component__ = __webpack_require__("../../../../../src/app/components/core/yt-player/yt-player.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_youtube_player_service__ = __webpack_require__("../../../../../src/app/services/youtube-player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_core_media_thumbnail_media_thumbnail_component__ = __webpack_require__("../../../../../src/app/components/core/media-thumbnail/media-thumbnail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_core_media_thumbnail_list_media_thumbnail_list_component__ = __webpack_require__("../../../../../src/app/components/core/media-thumbnail-list/media-thumbnail-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_core_youtube_auto_complete_youtube_auto_complete_component__ = __webpack_require__("../../../../../src/app/components/core/youtube-auto-complete/youtube-auto-complete.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__directives_hide_on_clicking_other_directive__ = __webpack_require__("../../../../../src/app/directives/hide-on-clicking-other.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pipes_search_filter_pipe__ = __webpack_require__("../../../../../src/app/pipes/search-filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_youtube_api_service__ = __webpack_require__("../../../../../src/app/services/youtube-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_youtube_player_page_youtube_player_page_component__ = __webpack_require__("../../../../../src/app/pages/youtube-player-page/youtube-player-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__routing_routing_module__ = __webpack_require__("../../../../../src/app/routing/routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_homepage_homepage_component__ = __webpack_require__("../../../../../src/app/pages/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_sharing_service__ = __webpack_require__("../../../../../src/app/services/sharing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_search_result_search_result_component__ = __webpack_require__("../../../../../src/app/pages/search-result/search-result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_core_media_thumbnail_grid_media_thumbnail_grid_component__ = __webpack_require__("../../../../../src/app/components/core/media-thumbnail-grid/media-thumbnail-grid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_core_media_detail_media_detail_component__ = __webpack_require__("../../../../../src/app/components/core/media-detail/media-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_core_side_bar_side_bar_component__ = __webpack_require__("../../../../../src/app/components/core/side-bar/side-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_base_page_base_page_component__ = __webpack_require__("../../../../../src/app/pages/base-page/base-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pipes_view_count_formatter_pipe__ = __webpack_require__("../../../../../src/app/pipes/view-count-formatter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pipes_pad_length_pipe__ = __webpack_require__("../../../../../src/app/pipes/pad-length.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__modules_angular_material_angular_material_module__ = __webpack_require__("../../../../../src/app/modules/angular-material/angular-material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pipes_duration_formatter_pipe__ = __webpack_require__("../../../../../src/app/pipes/duration-formatter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_enhanced_search_header_search_header_component__ = __webpack_require__("../../../../../src/app/components/enhanced/search-header/search-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__modules_sync_sync_module__ = __webpack_require__("../../../../../src/app/modules/sync/sync.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_ng2_stomp_service_dist_stomp_service__ = __webpack_require__("../../../../ng2-stomp-service/dist/stomp.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_sync_player_sync_player_component__ = __webpack_require__("../../../../../src/app/pages/sync-player/sync-player.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__modules_facebook_Oorga_facebook_module__ = __webpack_require__("../../../../../src/app/modules/facebook/Oorga-facebook.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_connect_service__ = __webpack_require__("../../../../../src/app/services/connect.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_enhanced_detailed_player_detailed_player_component__ = __webpack_require__("../../../../../src/app/components/enhanced/detailed-player/detailed-player.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__modules_chat_chat_module__ = __webpack_require__("../../../../../src/app/modules/chat/chat.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__components_core_yt_player_yt_player_component__["a" /* YtPlayerComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_core_media_thumbnail_media_thumbnail_component__["a" /* MediaThumbnailComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_core_media_thumbnail_list_media_thumbnail_list_component__["a" /* MediaThumbnailListComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_core_youtube_auto_complete_youtube_auto_complete_component__["a" /* YoutubeAutoCompleteComponent */],
                __WEBPACK_IMPORTED_MODULE_8__directives_hide_on_clicking_other_directive__["a" /* HideOnClickingOtherDirective */],
                __WEBPACK_IMPORTED_MODULE_10__pipes_search_filter_pipe__["a" /* SearchFilterPipe */],
                __WEBPACK_IMPORTED_MODULE_13__pages_youtube_player_page_youtube_player_page_component__["a" /* YoutubePlayerPageComponent */],
                __WEBPACK_IMPORTED_MODULE_16__pages_homepage_homepage_component__["a" /* HomepageComponent */],
                __WEBPACK_IMPORTED_MODULE_18__pages_search_result_search_result_component__["a" /* SearchResultComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_core_media_thumbnail_grid_media_thumbnail_grid_component__["a" /* MediaThumbnailGridComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_core_media_detail_media_detail_component__["a" /* MediaDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_core_side_bar_side_bar_component__["a" /* SideBarComponent */],
                __WEBPACK_IMPORTED_MODULE_22__pages_base_page_base_page_component__["a" /* BasePageComponent */],
                __WEBPACK_IMPORTED_MODULE_23__pipes_view_count_formatter_pipe__["a" /* ViewCountFormatPipe */],
                __WEBPACK_IMPORTED_MODULE_24__pipes_pad_length_pipe__["a" /* PadLengthPipe */],
                __WEBPACK_IMPORTED_MODULE_27__pipes_duration_formatter_pipe__["a" /* DurationFormatterPipe */],
                __WEBPACK_IMPORTED_MODULE_28__components_enhanced_search_header_search_header_component__["a" /* SearchHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_31__pages_sync_player_sync_player_component__["a" /* SyncPlayerComponent */],
                __WEBPACK_IMPORTED_MODULE_34__components_enhanced_detailed_player_detailed_player_component__["a" /* DetailedPlayerComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_9__angular_forms__["i" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_9__angular_forms__["d" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["b" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_15__routing_routing_module__["a" /* RoutingModule */], __WEBPACK_IMPORTED_MODULE_14__angular_router__["c" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_25__modules_angular_material_angular_material_module__["a" /* AngularMaterialModule */], __WEBPACK_IMPORTED_MODULE_26__angular_flex_layout__["a" /* FlexLayoutModule */], __WEBPACK_IMPORTED_MODULE_29__modules_sync_sync_module__["a" /* SyncModule */], __WEBPACK_IMPORTED_MODULE_32__modules_facebook_Oorga_facebook_module__["a" /* OorgaFacebookModule */], __WEBPACK_IMPORTED_MODULE_35__modules_chat_chat_module__["a" /* ChatModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__services_youtube_player_service__["a" /* YoutubePlayerService */], __WEBPACK_IMPORTED_MODULE_9__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_12__services_youtube_api_service__["a" /* YoutubeApiService */], __WEBPACK_IMPORTED_MODULE_17__services_sharing_service__["b" /* SharingService */], __WEBPACK_IMPORTED_MODULE_30_ng2_stomp_service_dist_stomp_service__["StompService"], __WEBPACK_IMPORTED_MODULE_33__services_connect_service__["a" /* ConnectService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/core/media-detail/media-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "P {\r\n    padding-top: 1px;\r\n    padding-right: 2px;\r\n    padding-bottom: 1px;\r\n    padding-left: 5px;\r\n}\r\n\r\nimg {\r\n  max-width: 100%;\r\n  max-height: 100%;\r\n}\r\n\r\n.ellipsed {\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n.image{\r\n  position: relative;\r\n  text-align: center;\r\n  display: inline-block;\r\n}\r\n\r\n.duration{\r\n  color: white;\r\n  background-color: black;\r\n  position: absolute;\r\n  bottom: 1em;\r\n  right: 1em;\r\n}\r\n\r\nmat-card{\r\n  margin: 2em;\r\n}\r\n\r\n\r\n.detail { \r\n  float: right;\r\n  position: relative;\r\n  top: 3em;\r\n}\r\n@media (max-width: 720px) {\r\n   .detail { \r\n     float:none;\r\n    position: relative;\r\n    top: 1em;\r\n    }\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/core/media-detail/media-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n    <div class=\"image\">\r\n        <img [src]=\"image.url\">\r\n        <p class=\"duration\">{{duration | durationFormatter}}</p>\r\n    </div>\r\n    <div class=\"detail\">\r\n        <span>\r\n            <p class=\"ellipsed\">\r\n                <strong>{{title}}</strong>\r\n            </p><br>\r\n            <p>{{channelTitle}} | {{statistics.viewCount|ViewCountFormatPipe }} views</p>\r\n        </span>\r\n    </div>\r\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/components/core/media-detail/media-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MediaDetailComponent = (function () {
    function MediaDetailComponent() {
    }
    MediaDetailComponent.prototype.ngOnInit = function () {
        this.id = this.content.id;
        this.image = this.content.snippet.thumbnails.medium;
        this.title = this.content.snippet.title;
        this.channelTitle = this.content.snippet.channelTitle;
        this.statistics = this.content.statistics;
        this.duration = this.content.contentDetails.duration;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], MediaDetailComponent.prototype, "content", void 0);
    MediaDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'media-detail',
            template: __webpack_require__("../../../../../src/app/components/core/media-detail/media-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/core/media-detail/media-detail.component.css")]
        })
    ], MediaDetailComponent);
    return MediaDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/core/media-thumbnail-grid/media-thumbnail-grid.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\nmat-grid-list{\r\n    margin: 1em;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/core/media-thumbnail-grid/media-thumbnail-grid.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-grid-list [cols]=\"cols | async\" gutterSize=\"10px\" rowHeight=\"2:1.5\">\r\n    <mat-grid-tile *ngFor=\"let data of datas\">\r\n    \r\n            <app-media-thumbnail [url]=\"['/view/play', data.id]\" [content]=\"data\"></app-media-thumbnail>\r\n      \r\n    </mat-grid-tile>\r\n</mat-grid-list>"

/***/ }),

/***/ "../../../../../src/app/components/core/media-thumbnail-grid/media-thumbnail-grid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaThumbnailGridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_takeWhile__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/takeWhile.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/startWith.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MediaThumbnailGridComponent = (function () {
    function MediaThumbnailGridComponent(observableMedia) {
        this.observableMedia = observableMedia;
    }
    MediaThumbnailGridComponent.prototype.ngOnInit = function () {
        var _this = this;
        var grid = new Map([
            ["xs", 1],
            ["sm", 2],
            ["md", 3],
            ["lg", 4],
            ["xl", 4]
        ]);
        var start;
        grid.forEach(function (cols, mqAlias) {
            if (_this.observableMedia.isActive(mqAlias)) {
                start = cols;
            }
        });
        this.cols = this.observableMedia.asObservable()
            .map(function (change) {
            console.log(change);
            console.log(grid.get(change.mqAlias));
            return grid.get(change.mqAlias);
        })
            .startWith(start);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], MediaThumbnailGridComponent.prototype, "datas", void 0);
    MediaThumbnailGridComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'media-thumbnail-grid',
            template: __webpack_require__("../../../../../src/app/components/core/media-thumbnail-grid/media-thumbnail-grid.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/core/media-thumbnail-grid/media-thumbnail-grid.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_flex_layout__["b" /* ObservableMedia */]])
    ], MediaThumbnailGridComponent);
    return MediaThumbnailGridComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/core/media-thumbnail-list/media-thumbnail-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-grid-tile{\r\n    display: block;\r\n}\r\n\r\na{\r\n    display: inline-block;\r\n}\r\n\r\nimage{\r\n    height: 100%;\r\n    width: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/core/media-thumbnail-list/media-thumbnail-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid bg-3 text-center\">\r\n    <div class=\"row text-left\" *ngFor=\"let data of datas\">\r\n        <app-media-thumbnail [url]=\"getURL(data.id)\" [content]=\"data\"></app-media-thumbnail>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/core/media-thumbnail-list/media-thumbnail-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaThumbnailListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MediaThumbnailListComponent = (function () {
    function MediaThumbnailListComponent() {
        this.navigationParams = [];
    }
    MediaThumbnailListComponent.prototype.getURL = function (videoId) {
        var url = [this.urlToNavigate, videoId];
        return this.navigationParams ? url.concat(this.navigationParams) : url;
    };
    MediaThumbnailListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], MediaThumbnailListComponent.prototype, "datas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], MediaThumbnailListComponent.prototype, "navigationParams", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], MediaThumbnailListComponent.prototype, "urlToNavigate", void 0);
    MediaThumbnailListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'media-thumbnail-list',
            template: __webpack_require__("../../../../../src/app/components/core/media-thumbnail-list/media-thumbnail-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/core/media-thumbnail-list/media-thumbnail-list.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], MediaThumbnailListComponent);
    return MediaThumbnailListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/core/media-thumbnail/media-thumbnail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\r\nmax-width: 100%;\r\nmax-height: 100%;\r\n}\r\n\r\n.background{\r\n  background:rgb(250, 250, 250);\r\n  box-shadow: 10px 10px 5px grey;\r\n}\r\n\r\n.ellipsed {\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  margin: auto;\r\n}\r\n\r\nmat-card{\r\nmargin: 2em 1em;\r\npadding: 0.4em !important;\r\n}\r\n\r\n\r\n.detail { \r\nposition: relative;\r\nmargin: 0.5em 0.5em 0.5em 0.5em;\r\ncolor: rgb(0, 0, 0);\r\n}\r\n\r\n\r\n\r\n.detail strong{\r\n  font-size: 1.1em;\r\n}\r\n\r\n@media (max-width: 720px) {\r\n  mat-card { \r\n   margin: 2em;\r\n   }\r\n }\r\n\r\n .image{\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n\r\n.image img {\r\n  max-width: 100%;\r\n  transition: all 0.3s;\r\n   -webkit-transform: scale(1.2);\r\n           transform: scale(1.2);\r\n}\r\n.image:hover img {\r\n  -webkit-transform: scale(1.1);\r\n  transform: scale(1);\r\n}\r\n\r\n.duration{\r\n  color: white;\r\n  background-color: black;\r\n  position: absolute;\r\n  bottom: 0.5em;\r\n  right: 1em;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/core/media-thumbnail/media-thumbnail.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"background\">\r\n    <a [routerLink]=\"url\">\r\n        <div class=\"image\">\r\n            <img [src]=\"image.url\">\r\n            <p class=\"duration\">{{duration | durationFormatter}}</p>\r\n        </div>\r\n    </a>\r\n    <div class=\"detail\">\r\n        <span>\r\n            <p class=\"ellipsed\">\r\n                <a [routerLink]=\"url\">\r\n                    <strong [matTooltip]=\"title\" matTooltipPosition=\"left\">{{title}}</strong>\r\n                </a>\r\n            </p>\r\n            <br>\r\n            <p>{{channelTitle}} | {{statistics.viewCount|ViewCountFormatPipe }} views</p>\r\n        </span>\r\n    </div>\r\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/components/core/media-thumbnail/media-thumbnail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaThumbnailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MediaThumbnailComponent = (function () {
    function MediaThumbnailComponent() {
    }
    MediaThumbnailComponent.prototype.ngOnInit = function () {
        this.id = this.content.id;
        this.image = this.content.snippet.thumbnails.medium;
        this.title = this.content.snippet.title;
        this.channelTitle = this.content.snippet.channelTitle;
        this.statistics = this.content.statistics;
        this.duration = this.content.contentDetails.duration;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], MediaThumbnailComponent.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], MediaThumbnailComponent.prototype, "url", void 0);
    MediaThumbnailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-media-thumbnail',
            template: __webpack_require__("../../../../../src/app/components/core/media-thumbnail/media-thumbnail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/core/media-thumbnail/media-thumbnail.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewEncapsulation */].None
        })
    ], MediaThumbnailComponent);
    return MediaThumbnailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/core/side-bar/side-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".parent{\r\n    background-color:rgb(255, 102, 0);\r\n    height: 90%;\r\n}\r\n\r\n.fbButton{\r\n    display: none;\r\n}\r\n\r\np{\r\n    margin: 1em;\r\n}\r\n\r\n@media (max-width: 720px) {\r\n    .fbButton{\r\n        display: inline;\r\n    }\r\n    \r\n }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/core/side-bar/side-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"parent\">\r\n        <span class=\"fbButton\">\r\n        <oorga-fb-login-button></oorga-fb-login-button>\r\n       </span>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/core/side-bar/side-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_sharing_service__ = __webpack_require__("../../../../../src/app/services/sharing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_facebook_services_oorga_facebook_service__ = __webpack_require__("../../../../../src/app/modules/facebook/services/oorga-facebook.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SideBarComponent = (function () {
    function SideBarComponent(share, fb) {
        this.share = share;
        this.fb = fb;
    }
    SideBarComponent.prototype.ngOnInit = function () {
    };
    SideBarComponent.prototype.connect = function () {
        // this.share.publishData(Data.CONNECT,Data.CONNECT);
        this.fb.invite('');
    };
    SideBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'side-bar',
            template: __webpack_require__("../../../../../src/app/components/core/side-bar/side-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/core/side-bar/side-bar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_sharing_service__["b" /* SharingService */], __WEBPACK_IMPORTED_MODULE_2__modules_facebook_services_oorga_facebook_service__["a" /* OorgaFacebookService */]])
    ], SideBarComponent);
    return SideBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/core/youtube-auto-complete/youtube-auto-complete.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n  display: inline-block;\r\n}\r\n\r\n.example-full-width {\r\n  width: 90%;\r\n}\r\n\r\n  .app-icon-button {\r\n    box-shadow: none;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n    background: none;\r\n    border: none;\r\n    cursor: pointer;\r\n    -webkit-filter: none;\r\n            filter: none;\r\n    font-weight: normal;\r\n    height: auto;\r\n    line-height: inherit;\r\n    margin: 0.5em;\r\n    min-width: 0;\r\n    padding: 0;\r\n    text-align: left;\r\n    text-decoration: none;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/core/youtube-auto-complete/youtube-auto-complete.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <form>\r\n  <div>\r\n    <div class=\"parent\">\r\n      <mat-form-field class=\"full-width\">\r\n        <input name=\"searchQuery\" type=\"text\" matInput [(ngModel)]=\"searchQuery\" (ngModelChange)=\"fetchSuggestions($event)\" [matAutocomplete]=\"auto\">\r\n      </mat-form-field>\r\n\r\n      <mat-autocomplete #auto=\"matAutocomplete\">\r\n        <mat-option (click)='setSelectedValue(result)' [routerLink]=\"['/search', result]\" *ngFor=\"let result of results\" [value]=\"result\">\r\n          {{ result }}\r\n        </mat-option>\r\n      </mat-autocomplete>\r\n    </div>\r\n    <button class=\"app-icon-button\" type=\"submit\" (click)=\"fetchSearchResults($event)\" id=\"SearchButton\" [routerLink]=\"['/search', searchQuery]\"\r\n      mat-raised-button color=\"warn\">\r\n      <i class=\"material-icons\" style=\"font-size:2em;color:rgb(250, 250, 250);background: rgb(255, 72, 0)\">search</i>\r\n    </button>\r\n  </div>\r\n</form> -->\r\n\r\n<form class=\"example-form\">\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input placeholder=\"Search\" aria-label=\"Number\" name=\"searchQuery\" type=\"text\" matInput [(ngModel)]=\"searchQuery\" (ngModelChange)=\"fetchSuggestions($event)\" [matAutocomplete]=\"auto\">\r\n    <mat-autocomplete #auto=\"matAutocomplete\">\r\n      <mat-option (click)='setSelectedValue(result)' [routerLink]=\"['/view/search', result]\" *ngFor=\"let result of results\" [value]=\"result\">\r\n        {{ result }}\r\n      </mat-option>\r\n    </mat-autocomplete>\r\n  </mat-form-field>\r\n  <button class=\"app-icon-button\" type=\"submit\" (click)=\"fetchSearchResults($event)\" id=\"SearchButton\" [routerLink]=\"['/search', searchQuery]\"\r\n      mat-raised-button color=\"warn\">\r\n      <i class=\"material-icons\" style=\"font-size:2em;color:rgb(250, 250, 250);background: rgb(255, 72, 0)\">search</i>\r\n    </button>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/core/youtube-auto-complete/youtube-auto-complete.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubeAutoCompleteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_youtube_api_service__ = __webpack_require__("../../../../../src/app/services/youtube-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_sharing_service__ = __webpack_require__("../../../../../src/app/services/sharing.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var YoutubeAutoCompleteComponent = (function () {
    function YoutubeAutoCompleteComponent(http, ytApi) {
        this.http = http;
        this.ytApi = ytApi;
        this.searchResult = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.menuClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.suggestCallBack = [];
        this.apiKey = __WEBPACK_IMPORTED_MODULE_4__services_sharing_service__["a" /* Data */].apiKey;
        this.results = [];
        this.showDropDown = false;
    }
    YoutubeAutoCompleteComponent.prototype.ngOnChanges = function (changes) {
        this.fetchSearchResults();
    };
    YoutubeAutoCompleteComponent.prototype.pushEvent = function () {
        this.menuClicked.emit("toggle");
    };
    YoutubeAutoCompleteComponent.prototype.toggleDropDown = function () {
        this.showDropDown = (!this.showDropDown && this.results.length);
    };
    YoutubeAutoCompleteComponent.prototype.ngOnInit = function () {
    };
    YoutubeAutoCompleteComponent.prototype.getSearchValue = function () {
        return this.searchQuery;
    };
    YoutubeAutoCompleteComponent.prototype.setSelectedValue = function (searchQuery) {
        this.searchQuery = searchQuery;
        this.toggleDropDown();
    };
    YoutubeAutoCompleteComponent.prototype.fetchSuggestions = function (event) {
        var _this = this;
        if (event) {
            this.ytApi.fetchSuggestions(this.getSearchValue()).subscribe(function (data) {
                _this.results = data[1];
                _this.showDropDown = (_this.results.length);
            });
        }
    };
    YoutubeAutoCompleteComponent.prototype.fetchSearchResults = function () {
        var _this = this;
        if (this.getSearchValue()) {
            this.ytApi.fetchSearchResults(this.getSearchValue(), this.apiKey).subscribe(function (data) {
                _this.searchResult.emit(data);
                console.log("data from seach" + data);
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], YoutubeAutoCompleteComponent.prototype, "searchResult", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], YoutubeAutoCompleteComponent.prototype, "menuClicked", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], YoutubeAutoCompleteComponent.prototype, "searchQuery", void 0);
    YoutubeAutoCompleteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'youtube-auto-complete',
            template: __webpack_require__("../../../../../src/app/components/core/youtube-auto-complete/youtube-auto-complete.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/core/youtube-auto-complete/youtube-auto-complete.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__services_youtube_api_service__["a" /* YoutubeApiService */]])
    ], YoutubeAutoCompleteComponent);
    return YoutubeAutoCompleteComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/core/yt-player/yt-player.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".video-container {\r\n\tposition:relative;\r\n\tpadding-bottom:56.25%;\r\n\tpadding-top:30px;\r\n\theight:0;\r\n    overflow:hidden;   \r\n}\r\n\r\n::ng-deep .video-container iframe, .video-container object, .video-container embed {\r\n\tposition:absolute;\r\n\ttop:0;\r\n\tleft:0;\r\n\twidth:100%;\r\n\theight:100%;\r\n}\r\n\r\n.parent{\r\n    display: inline-block;\r\n    width: 100%;\r\n    max-width: 1020px;\r\n\tmin-width: 300px;\r\n\t-ms-flex-line-pack: center;\r\n\t    align-content: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/core/yt-player/yt-player.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"parent\">\r\n<div class=\"video-container\">\r\n    <div id=\"oorga-yt-player\" ></div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/core/yt-player/yt-player.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YtPlayerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_youtube_player_service__ = __webpack_require__("../../../../../src/app/services/youtube-player.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var YtPlayerComponent = (function () {
    function YtPlayerComponent(playerService, elementRef, renderer) {
        this.playerService = playerService;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.videoId = '';
        /**
         * @description sets the protocol by the navigator object
         * if there is no window, it sets a default http protocol
         * unless the protocol is set from outside
         */
        this.protocol = this.getProtocol();
        this.playerVars = {};
        // player created and initialized - sends instance of the player
        this.ready = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        // state change: send the YT event with its state
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    YtPlayerComponent.prototype.ngAfterContentInit = function () {
        var htmlId = this.playerService.generateUniqueId();
        var playerSize = { height: this.height, width: this.width };
        var container = this.renderer.selectRootElement('#oorga-yt-player');
        this.renderer.setAttribute(container, 'id', htmlId);
        this.playerService.loadPlayerApi({
            protocol: this.protocol
        });
        this.playerService.setupPlayer(htmlId, {
            change: this.change,
            ready: this.ready,
        }, playerSize, this.videoId, this.playerVars);
    };
    YtPlayerComponent.prototype.getProtocol = function () {
        var hasWindow = window && window.location;
        var protocol = hasWindow
            ? window.location.protocol.replace(':', '')
            : 'http';
        return protocol;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], YtPlayerComponent.prototype, "videoId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Number)
    ], YtPlayerComponent.prototype, "height", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Number)
    ], YtPlayerComponent.prototype, "width", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], YtPlayerComponent.prototype, "protocol", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], YtPlayerComponent.prototype, "playerVars", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], YtPlayerComponent.prototype, "ready", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], YtPlayerComponent.prototype, "change", void 0);
    YtPlayerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush,
            selector: 'oorga-yt-player',
            template: __webpack_require__("../../../../../src/app/components/core/yt-player/yt-player.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/core/yt-player/yt-player.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_youtube_player_service__["a" /* YoutubePlayerService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Renderer2 */]])
    ], YtPlayerComponent);
    return YtPlayerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/enhanced/detailed-player/detailed-player.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".parent{\r\n    display: inline-block;\r\n    width: 68%;\r\n    margin: 1em;\r\n}\r\n\r\nspan {\r\n    display:inline-block;\r\n    vertical-align:middle;\r\n    margin-left: 1em;\r\n    margin-right: 1em;\r\n}\r\n\r\ni{\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n }\r\n\r\n \r\n strong{\r\n     font-size: 2em;\r\n }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/enhanced/detailed-player/detailed-player.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"parent\">\r\n  <div class=\"player\">\r\n    <oorga-yt-player [videoId]='videoId' (change)=\"onChange($event)\" (ready)=\"onReady($event)\">\r\n    </oorga-yt-player>\r\n   \r\n  </div>\r\n  <!-- <div class=\"sidebox\"></div> -->\r\n  <br>\r\n  <button *ngIf=\"showJoin\" mat-raised-button color=\"warn\" (click)=\"onJoin($event)\">Join freinds</button>\r\n  <br>\r\n  <span>\r\n    <h6>\r\n      <strong>{{title}}</strong>\r\n    </h6>\r\n  </span>\r\n  <br>\r\n  <p style=\"text-align:left;\">\r\n    <span>\r\n      <i class=\"material-icons\">remove_red_eye</i>\r\n      <span class=\"vertical\"> {{view | ViewCountFormatPipe}} </span>\r\n    </span>\r\n    <span style=\"float:right;\">\r\n      <i class=\"material-icons\">thumb_up</i>\r\n      <span class=\"vertical\">{{like | number}}</span>\r\n      <i class=\"material-icons\">thumb_down</i>\r\n      <span class=\"vertical\">{{dislike | number}} </span>\r\n      <span>share</span>\r\n    </span>\r\n\r\n  </p>\r\n  <p style=\"white-space: pre-line;float:center;margin:1em;text-indent:5em;\">{{description}}</p>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/enhanced/detailed-player/detailed-player.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailedPlayerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_youtube_api_service__ = __webpack_require__("../../../../../src/app/services/youtube-api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DetailedPlayerComponent = (function () {
    function DetailedPlayerComponent(api) {
        this.api = api;
        this.showJoin = true;
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.ready = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.join = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    DetailedPlayerComponent.prototype.onReady = function (event) {
        this.ready.emit(event);
    };
    DetailedPlayerComponent.prototype.onChange = function (event) {
        this.change.emit(event);
    };
    DetailedPlayerComponent.prototype.onJoin = function (event) {
        this.join.emit(event);
    };
    DetailedPlayerComponent.prototype.ngOnChanges = function () {
        if (this.data) {
            this.data = this.data['items'][0];
            if (this.data) {
                this.title = this.data.snippet.title;
                this.view = this.data.statistics.viewCount;
                this.like = this.data.statistics.likeCount;
                this.dislike = this.data.statistics.dislikeCount;
                this.description = this.data.snippet.description;
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], DetailedPlayerComponent.prototype, "videoId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], DetailedPlayerComponent.prototype, "showJoin", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], DetailedPlayerComponent.prototype, "change", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], DetailedPlayerComponent.prototype, "ready", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], DetailedPlayerComponent.prototype, "join", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], DetailedPlayerComponent.prototype, "data", void 0);
    DetailedPlayerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'oorga-detailed-player',
            template: __webpack_require__("../../../../../src/app/components/enhanced/detailed-player/detailed-player.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/enhanced/detailed-player/detailed-player.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_youtube_api_service__["a" /* YoutubeApiService */]])
    ], DetailedPlayerComponent);
    return DetailedPlayerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/enhanced/search-header/search-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".app-icon-button {\r\n    box-shadow: none;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n    background: none;\r\n    border: none;\r\n    cursor: pointer;\r\n    -webkit-filter: none;\r\n            filter: none;\r\n    font-weight: normal;\r\n    height: auto;\r\n    line-height: inherit;\r\n    margin: 1em;\r\n    min-width: 0;\r\n    padding: 0;\r\n    text-align: left;\r\n    text-decoration: none;\r\n    vertical-align: middle;\r\n  }\r\n\r\n  .fbButton{\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    position: absolute;\r\n    right: 1em;\r\n    top: 1em;\r\n}\r\n\r\n.image{\r\n  width: 8em;\r\n  height: 3em;\r\n  margin-left: 2em;\r\n  margin-right: 2em;\r\n  margin-top: 0.5em;\r\n}\r\n\r\n.autocomplete{\r\n  margin-top: 0.5em;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/enhanced/search-header/search-header.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <!-- <button class=\"app-icon-button\" (click)=\"pushEvent()\">\r\n     <img class=\"image\" src='/assets/oorga.png'>\r\n  </button> -->\r\n  <a href=\"#\"> <img class=\"image\" src='/assets/oorga.png'></a>\r\n  <youtube-auto-complete class=\"autocomplete\" [searchQuery]=\"searchQuery\" (searchResult)=\"updateThumbnails($event)\"></youtube-auto-complete>\r\n  <span class=\"fbButton\">\r\n      <oorga-fb-login-button></oorga-fb-login-button>\r\n  </span>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/enhanced/search-header/search-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_sharing_service__ = __webpack_require__("../../../../../src/app/services/sharing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchHeaderComponent = (function () {
    function SearchHeaderComponent(share, route) {
        this.share = share;
        this.route = route;
    }
    SearchHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.searchQuery = params['searchQuery'];
        });
    };
    SearchHeaderComponent.prototype.updateThumbnails = function (data) {
        this.share.publishData(__WEBPACK_IMPORTED_MODULE_1__services_sharing_service__["a" /* Data */].VIDEO_RESULT, data['items']);
    };
    SearchHeaderComponent.prototype.pushEvent = function () {
        this.share.publishData(__WEBPACK_IMPORTED_MODULE_1__services_sharing_service__["a" /* Data */].TOGGLE, "toggle");
    };
    SearchHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'oorga-search-header',
            template: __webpack_require__("../../../../../src/app/components/enhanced/search-header/search-header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/enhanced/search-header/search-header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_sharing_service__["b" /* SharingService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], SearchHeaderComponent);
    return SearchHeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/directives/hide-on-clicking-other.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HideOnClickingOtherDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HideOnClickingOtherDirective = (function () {
    function HideOnClickingOtherDirective(elementRef) {
        this.elementRef = elementRef;
        this.clickOutside = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    HideOnClickingOtherDirective.prototype.onClick = function (targetElement) {
        if (targetElement.id == this.watchElement) {
            return;
        }
        if (!this.elementRef.nativeElement.contains(targetElement)) {
            this.clickOutside.emit(null);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], HideOnClickingOtherDirective.prototype, "watchElement", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], HideOnClickingOtherDirective.prototype, "clickOutside", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('document:click', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], HideOnClickingOtherDirective.prototype, "onClick", null);
    HideOnClickingOtherDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[HideOnClickingOther]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], HideOnClickingOtherDirective);
    return HideOnClickingOtherDirective;
}());



/***/ }),

/***/ "../../../../../src/app/modules/angular-material/angular-material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AngularMaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AngularMaterialModule = (function () {
    function AngularMaterialModule() {
    }
    AngularMaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatAutocompleteModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatGridListModule */]],
            declarations: []
        })
    ], AngularMaterialModule);
    return AngularMaterialModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/chat/chat.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_chat_window_chat_window_component__ = __webpack_require__("../../../../../src/app/modules/chat/components/chat-window/chat-window.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_message_message_component__ = __webpack_require__("../../../../../src/app/modules/chat/components/message/message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_chat_service_service__ = __webpack_require__("../../../../../src/app/modules/chat/services/chat-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sync_sync_module__ = __webpack_require__("../../../../../src/app/modules/sync/sync.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ChatModule = (function () {
    function ChatModule() {
    }
    ChatModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_5__sync_sync_module__["a" /* SyncModule */], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* FormsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__components_chat_window_chat_window_component__["a" /* ChatWindowComponent */], __WEBPACK_IMPORTED_MODULE_3__components_message_message_component__["b" /* MessageComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__components_chat_window_chat_window_component__["a" /* ChatWindowComponent */], __WEBPACK_IMPORTED_MODULE_3__components_message_message_component__["b" /* MessageComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_chat_service_service__["a" /* ChatService */]]
        })
    ], ChatModule);
    return ChatModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/chat/components/chat-window/chat-window.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\na { text-decoration: none; }\r\n\r\nfieldset {\r\n\tborder: 0;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n\r\nh4, h5 {\r\n\tline-height: 1.5em;\r\n\tmargin: 0;\r\n}\r\n\r\nhr {\r\n\tbackground: #e9e9e9;\r\n    border: 0;\r\n    box-sizing: content-box;\r\n    height: 1px;\r\n    margin: 0;\r\n    min-height: 1px;\r\n}\r\n\r\nimg {\r\n    border: 0;\r\n    display: block;\r\n    height: auto;\r\n    max-width: 100%;\r\n}\r\n\r\ninput {\r\n\tborder: 0;\r\n\tcolor: inherit;\r\n    font-family: inherit;\r\n    font-size: 100%;\r\n    line-height: normal;\r\n    margin: 0;\r\n}\r\n\r\np { margin: 0; }\r\n\r\n.clearfix { *zoom: 1; } /* For IE 6/7 */\r\n.clearfix:before, .clearfix:after {\r\n    content: \"\";\r\n    display: table;\r\n}\r\n.clearfix:after { clear: both; }\r\n\r\n/* ---------- LIVE-CHAT ---------- */\r\n\r\n#live-chat {\r\n\tbottom: 0;\r\n\tfont-size: 12px;\r\n\tright: 24px;\r\n\tposition: fixed;\r\n\twidth: 300px;\r\n}\r\n\r\n#live-chat header {\r\n\tbackground: #293239;\r\n\tborder-radius: 5px 5px 0 0;\r\n\tcolor: #fff;\r\n\tcursor: pointer;\r\n\tpadding: 16px 24px;\r\n}\r\n\r\n#live-chat h4:before {\r\n\tbackground: #1a8a34;\r\n\tborder-radius: 50%;\r\n\tcontent: \"\";\r\n\tdisplay: inline-block;\r\n\theight: 8px;\r\n\tmargin: 0 8px 0 0;\r\n\twidth: 8px;\r\n}\r\n\r\n#live-chat h4 {\r\n\tfont-size: 12px;\r\n}\r\n\r\n#live-chat h5 {\r\n\tfont-size: 10px;\r\n}\r\n\r\n#live-chat form {\r\n\tpadding: 24px;\r\n}\r\n\r\n#live-chat input[type=\"text\"] {\r\n\tborder: 1px solid #ccc;\r\n\tborder-radius: 3px;\r\n\tpadding: 8px;\r\n\toutline: none;\r\n\twidth: 75%;\r\n}\r\n\r\n.send{\r\n\twidth: 20%;\r\n}\r\n.chat-message-counter {\r\n\tbackground: #e62727;\r\n\tborder: 1px solid #fff;\r\n\tborder-radius: 50%;\r\n\tdisplay: none;\r\n\tfont-size: 12px;\r\n\tfont-weight: bold;\r\n\theight: 28px;\r\n\tleft: 0;\r\n\tline-height: 28px;\r\n\tmargin: -15px 0 0 -15px;\r\n\tposition: absolute;\r\n\ttext-align: center;\r\n\ttop: 0;\r\n\twidth: 28px;\r\n}\r\n\r\n.chat-close {\r\n\tbackground: #1b2126;\r\n\tborder-radius: 50%;\r\n\tcolor: #fff;\r\n\tdisplay: block;\r\n\tfloat: right;\r\n\tfont-size: 10px;\r\n\theight: 16px;\r\n\tline-height: 16px;\r\n\tmargin: 2px 0 0 0;\r\n\ttext-align: center;\r\n\twidth: 16px;\r\n}\r\n\r\n.chat {\r\n\tbackground: #fff;\r\n}\r\n\r\n.chat-history {\r\n\theight: 252px;\r\n\tpadding: 8px 24px;\r\n\toverflow-y: scroll;\r\n}\r\n\r\n.chat-message {\r\n\tmargin: 16px 0;\r\n}\r\n\r\n.chat-message img {\r\n\tborder-radius: 50%;\r\n\tfloat: left;\r\n}\r\n\r\n.chat-message-content {\r\n\tmargin-left: 56px;\r\n}\r\n\r\n.chat-time {\r\n\tfloat: right;\r\n\tfont-size: 10px;\r\n}\r\n\r\n.chat-feedback {\r\n\tfont-style: italic;\t\r\n\tmargin: 0 0 0 80px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/chat/components/chat-window/chat-window.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"live-chat\">\n\n  <header class=\"clearfix\" (click)=\"minimize()\">\n\n    <!-- <a class=\"chat-close\" (click)=\"close($event)\">x</a> -->\n\n    <h4>{{friends}}</h4>\n\n    <span class=\"chat-message-counter\">{{unreadMessages}}</span>\n\n  </header>\n\n  <div class=\"chat\">\n\n    <div id=\"chat-history\" class=\"chat-history\">\n      <div *ngFor=\"let message of messages\">\n        <message [msg]=\"message\"></message>\n      </div>\n    </div>\n    <!-- end chat-history -->\n\n    <!-- <p class=\"chat-feedback\">Your partner is typing…</p> -->\n\n    <form>\n      <input type=\"text\" autocomplete=\"off\" name=\"typedMessage\" placeholder=\"Type your message…\" autofocus [(ngModel)]=\"typedMessage\">\n      <button type=\"submit\" (click)=\"sendMessage($event)\" class=\"btn btn-primary send\">Send</button>\n    </form>\n\n  </div>\n  <!-- end chat -->\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/modules/chat/components/chat-window/chat-window.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatWindowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_chat_service_service__ = __webpack_require__("../../../../../src/app/modules/chat/services/chat-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sync_services_ws_data_service__ = __webpack_require__("../../../../../src/app/modules/sync/services/ws-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatWindowComponent = (function () {
    function ChatWindowComponent(chatSer, dataService) {
        this.chatSer = chatSer;
        this.dataService = dataService;
        this.messages = [];
        this.unreadMessages = 0;
        this.showCounter = false;
    }
    ChatWindowComponent.prototype.ngOnInit = function () {
        this.getMessages(this.dataService.getGroupId());
    };
    ChatWindowComponent.prototype.getMessages = function (groupId) {
        var _this = this;
        this.chatSer.getMessageUpdates().subscribe(function (res) {
            if ($(".chat").is(":hidden")) {
                _this.showCounter = true;
                _this.unreadMessages++;
            }
            _this.messages.push(res);
            var elem = document.getElementById('chat-history');
            setTimeout(function () { return elem.scrollTop = elem.scrollHeight; }, 100);
        });
    };
    ChatWindowComponent.prototype.sendMessage = function (event) {
        var msg = this.typedMessage;
        this.chatSer.sendMessage(msg, "USR");
        this.typedMessage = "";
    };
    ChatWindowComponent.prototype.minimize = function () {
        $('.chat').slideToggle(300, 'swing');
        $('.chat-message-counter').fadeToggle(300, 'swing');
        if (this.unreadMessages) {
            this.unreadMessages = 0;
            this.showCounter = false;
        }
    };
    ChatWindowComponent.prototype.close = function (e) {
        e.preventDefault();
        $('#live-chat').fadeOut(300);
    };
    ChatWindowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'oorga-chat-window',
            template: __webpack_require__("../../../../../src/app/modules/chat/components/chat-window/chat-window.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/chat/components/chat-window/chat-window.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_chat_service_service__["a" /* ChatService */], __WEBPACK_IMPORTED_MODULE_2__sync_services_ws_data_service__["a" /* WsDataService */]])
    ], ChatWindowComponent);
    return ChatWindowComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/chat/components/message/message.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\na { text-decoration: none; }\r\n\r\nfieldset {\r\n\tborder: 0;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n}\r\n\r\nh4, h5 {\r\n\tline-height: 1.5em;\r\n\tmargin: 0;\r\n}\r\n\r\nhr {\r\n\tbackground: #e9e9e9;\r\n    border: 0;\r\n    box-sizing: content-box;\r\n    height: 1px;\r\n    margin: 0;\r\n    min-height: 1px;\r\n}\r\n\r\nimg {\r\n    border: 0;\r\n    display: block;\r\n    height: auto;\r\n    max-width: 100%;\r\n}\r\n\r\ninput {\r\n\tborder: 0;\r\n\tcolor: inherit;\r\n    font-family: inherit;\r\n    font-size: 100%;\r\n    line-height: normal;\r\n    margin: 0;\r\n}\r\n\r\np { margin: 0; }\r\n\r\n.clearfix { *zoom: 1; } /* For IE 6/7 */\r\n.clearfix:before, .clearfix:after {\r\n    content: \"\";\r\n    display: table;\r\n}\r\n.clearfix:after { clear: both; }\r\n\r\n/* ---------- LIVE-CHAT ---------- */\r\n\r\n#live-chat {\r\n\tbottom: 0;\r\n\tfont-size: 12px;\r\n\tright: 24px;\r\n\tposition: fixed;\r\n\twidth: 300px;\r\n}\r\n\r\n#live-chat header {\r\n\tbackground: #293239;\r\n\tborder-radius: 5px 5px 0 0;\r\n\tcolor: #fff;\r\n\tcursor: pointer;\r\n\tpadding: 16px 24px;\r\n}\r\n\r\n#live-chat h4:before {\r\n\tbackground: #1a8a34;\r\n\tborder-radius: 50%;\r\n\tcontent: \"\";\r\n\tdisplay: inline-block;\r\n\theight: 8px;\r\n\tmargin: 0 8px 0 0;\r\n\twidth: 8px;\r\n}\r\n\r\n#live-chat h4 {\r\n\tfont-size: 12px;\r\n}\r\n\r\n#live-chat h5 {\r\n\tfont-size: 10px;\r\n}\r\n\r\n#live-chat form {\r\n\tpadding: 24px;\r\n}\r\n\r\n#live-chat input[type=\"text\"] {\r\n\tborder: 1px solid #ccc;\r\n\tborder-radius: 3px;\r\n\tpadding: 8px;\r\n\toutline: none;\r\n\twidth: 75%;\r\n}\r\n\r\n.send{\r\n\twidth: 20%;\r\n}\r\n.chat-message-counter {\r\n\tbackground: #e62727;\r\n\tborder: 1px solid #fff;\r\n\tborder-radius: 50%;\r\n\tdisplay: none;\r\n\tfont-size: 12px;\r\n\tfont-weight: bold;\r\n\theight: 28px;\r\n\tleft: 0;\r\n\tline-height: 28px;\r\n\tmargin: -15px 0 0 -15px;\r\n\tposition: absolute;\r\n\ttext-align: center;\r\n\ttop: 0;\r\n\twidth: 28px;\r\n}\r\n\r\n.chat-close {\r\n\tbackground: #1b2126;\r\n\tborder-radius: 50%;\r\n\tcolor: #fff;\r\n\tdisplay: block;\r\n\tfloat: right;\r\n\tfont-size: 10px;\r\n\theight: 16px;\r\n\tline-height: 16px;\r\n\tmargin: 2px 0 0 0;\r\n\ttext-align: center;\r\n\twidth: 16px;\r\n}\r\n\r\n.chat {\r\n\tbackground: #fff;\r\n}\r\n\r\n.chat-history {\r\n\theight: 252px;\r\n\tpadding: 8px 24px;\r\n\toverflow-y: scroll;\r\n}\r\n\r\n.chat-message {\r\n\tmargin: 16px 0;\r\n}\r\n\r\n.chat-message img {\r\n\tborder-radius: 50%;\r\n\tfloat: left;\r\n}\r\n\r\n.chat-message-content {\r\n\tmargin-left: 56px;\r\n}\r\n\r\n.chat-time {\r\n\tfloat: right;\r\n\tfont-size: 10px;\r\n}\r\n\r\n.chat-feedback {\r\n\tfont-style: italic;\t\r\n\tmargin: 0 0 0 80px;\r\n}\r\n\r\n.systemMessage{\r\n\tcolor: grey;\r\n\ttext-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/chat/components/message/message.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-message clearfix\">\n\n  <img *ngIf=\"user\" [src]=\"msg.profilePic\" alt=\"\" width=\"32\" height=\"32\">\n  <!-- http://lorempixum.com/32/32/people -->\n\n  <div class=\"chat-message-content clearfix\">\n\n    <span class=\"chat-time\">{{msg.time | date:'shortTime'}}</span>\n\n    <div *ngIf=\"user\">\n      <h5>{{msg.userName}}</h5>\n\n      <p>{{msg.content}}</p>\n    </div>\n  </div>\n  <div *ngIf=\"!user\" class=\"systemMessage\">\n    <p><b>{{msg.userName}} {{msg.content}}</b></p>\n  </div>\n  <!-- end chat-message-content -->\n\n</div>\n<!-- end chat-message -->\n\n<hr>"

/***/ }),

/***/ "../../../../../src/app/modules/chat/components/message/message.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Message; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MessageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Message = (function () {
    function Message(userName, time, content, groupId, type, profilePic) {
        this.content = content;
        this.messagetype = profilePic;
        this.time = time;
        this.userName = userName;
        this.groupId = groupId;
        this.type = type;
    }
    return Message;
}());

var MessageComponent = (function () {
    function MessageComponent() {
    }
    MessageComponent.prototype.ngOnInit = function () {
        if (this.msg && this.msg.type) {
            this.user = this.msg.type.toString() == "USR" ? true : false;
        }
        ;
    };
    MessageComponent.prototype.ngOnChanges = function (changes) {
        if (this.msg && this.msg.type) {
            this.user = this.msg.type.toString() == "USR" ? true : false;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Message)
    ], MessageComponent.prototype, "msg", void 0);
    MessageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'message',
            template: __webpack_require__("../../../../../src/app/modules/chat/components/message/message.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/chat/components/message/message.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/chat/services/chat-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sync_services_sync_ws_service__ = __webpack_require__("../../../../../src/app/modules/sync/services/sync-ws.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_message_message_component__ = __webpack_require__("../../../../../src/app/modules/chat/components/message/message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__facebook_services_oorga_facebook_service__ = __webpack_require__("../../../../../src/app/modules/facebook/services/oorga-facebook.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChatService = (function () {
    function ChatService(ws, fb) {
        this.ws = ws;
        this.fb = fb;
        this.messageBroadcaster = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["a" /* Subject */]();
    }
    ChatService.prototype.getMessageUpdates = function () {
        return this.messageBroadcaster;
    };
    ChatService.prototype.subscribeToMessages = function (groupId) {
        var _this = this;
        this.groupId = groupId;
        return this.ws.subscribe('/receive/chat/getmessages/' + groupId).subscribe(function (res) {
            _this.fb.getUserName(res.userName).subscribe(function (profile) {
                res.userName = profile.name;
                res.profilePic = profile.picture.data.url;
                _this.messageBroadcaster.next(res);
            });
        });
    };
    ChatService.prototype.sendMessageService = function (msg) {
        this.ws.send('/send/chat/sendmessage', msg);
    };
    ChatService.prototype.convertPlayerStatusToMessage = function (userName, status) {
        return (status == YT.PlayerState.PAUSED.toString() ? "Paused the video" : "Played the video");
    };
    ChatService.prototype.sendMessage = function (message, type) {
        if (type == 'SYS') {
            if (message != YT.PlayerState.PAUSED.toString() && message != YT.PlayerState.PLAYING.toString()) {
                return;
            }
            message = this.convertPlayerStatusToMessage(this.fb.userName, message);
        }
        this.sendMessageService(new __WEBPACK_IMPORTED_MODULE_2__components_message_message_component__["a" /* Message */](this.fb.userName, Date.now(), message, this.groupId, type));
    };
    ChatService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__sync_services_sync_ws_service__["a" /* SyncWsService */], __WEBPACK_IMPORTED_MODULE_3__facebook_services_oorga_facebook_service__["a" /* OorgaFacebookService */]])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "../../../../../src/app/modules/facebook/Oorga-facebook.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OorgaFacebookModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_facebook__ = __webpack_require__("../../../../ngx-facebook/dist/esm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_oorga_facebook_service__ = __webpack_require__("../../../../../src/app/modules/facebook/services/oorga-facebook.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_fb_login_button_fb_login_button_component__ = __webpack_require__("../../../../../src/app/modules/facebook/components/fb-login-button/fb-login-button.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var OorgaFacebookModule = (function () {
    function OorgaFacebookModule() {
    }
    OorgaFacebookModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2_ngx_facebook__["a" /* FacebookModule */].forRoot()
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_4__components_fb_login_button_fb_login_button_component__["a" /* FbLoginButtonComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__components_fb_login_button_fb_login_button_component__["a" /* FbLoginButtonComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_2_ngx_facebook__["b" /* FacebookService */], __WEBPACK_IMPORTED_MODULE_3__services_oorga_facebook_service__["a" /* OorgaFacebookService */]]
        })
    ], OorgaFacebookModule);
    return OorgaFacebookModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/facebook/components/fb-login-button/fb-login-button.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body { padding: 2em; }\r\n\r\n\r\n/* Shared */\r\n.loginBtn {\r\n  box-sizing: border-box;\r\n  position: relative;\r\n  /* width: 13em;  - apply for fixed size */\r\n  margin: 0.2em;\r\n  padding: 0 15px 0 46px;\r\n  border: none;\r\n  text-align: left;\r\n  line-height: 34px;\r\n  white-space: nowrap;\r\n  border-radius: 0.2em;\r\n  font-size: 16px;\r\n  color: #FFF;\r\n}\r\n.loginBtn:before {\r\n  content: \"\";\r\n  box-sizing: border-box;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 34px;\r\n  height: 100%;\r\n}\r\n.loginBtn:focus {\r\n  outline: none;\r\n}\r\n.loginBtn:active {\r\n  box-shadow: inset 0 0 0 32px rgba(0,0,0,0.1);\r\n}\r\n\r\n\r\n/* Facebook */\r\n.loginBtn--facebook {\r\n  background-color: #4C69BA;\r\n  background-image: linear-gradient(#4C69BA, #3B55A0);\r\n  /*font-family: \"Helvetica neue\", Helvetica Neue, Helvetica, Arial, sans-serif;*/\r\n  text-shadow: 0 -1px 0 #354C8C;\r\n}\r\n.loginBtn--facebook:before {\r\n  border-right: #364e92 1px solid;\r\n  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png') 6px 6px no-repeat;\r\n}\r\n.loginBtn--facebook:hover,\r\n.loginBtn--facebook:focus {\r\n  background-color: #5B7BD5;\r\n  background-image: linear-gradient(#5B7BD5, #4864B1);\r\n}\r\n\r\n\r\n/* Google */\r\n.loginBtn--google {\r\n  /*font-family: \"Roboto\", Roboto, arial, sans-serif;*/\r\n  background: #DD4B39;\r\n}\r\n.loginBtn--google:before {\r\n  border-right: #BB3F30 1px solid;\r\n  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png') 6px 6px no-repeat;\r\n}\r\n.loginBtn--google:hover,\r\n.loginBtn--google:focus {\r\n  background: #E74B37;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/facebook/components/fb-login-button/fb-login-button.component.html":
/***/ (function(module, exports) {

module.exports = "<button (click)=\"performAction()\" class=\"loginBtn loginBtn--facebook\">\r\n    {{display}}\r\n  </button>"

/***/ }),

/***/ "../../../../../src/app/modules/facebook/components/fb-login-button/fb-login-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FbLoginButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_oorga_facebook_service__ = __webpack_require__("../../../../../src/app/modules/facebook/services/oorga-facebook.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FbLoginButtonComponent = (function () {
    function FbLoginButtonComponent(fb) {
        this.fb = fb;
    }
    FbLoginButtonComponent.prototype.performAction = function () {
        var _this = this;
        if (this.status == "connected") {
            this.fb.logOut().subscribe(function (res) { return _this.updateButtonText(res); });
        }
        else {
            this.fb.login().subscribe(function (res) { return _this.updateButtonText(res); });
            ;
        }
    };
    FbLoginButtonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fb.getStatus().subscribe(function (res) {
            _this.updateButtonText(res);
        });
    };
    FbLoginButtonComponent.prototype.updateButtonText = function (res) {
        this.status = res;
        if (res == "connected") {
            this.display = "Logout";
        }
        else {
            this.display = "Login with Facebook";
        }
    };
    FbLoginButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'oorga-fb-login-button',
            template: __webpack_require__("../../../../../src/app/modules/facebook/components/fb-login-button/fb-login-button.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modules/facebook/components/fb-login-button/fb-login-button.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_oorga_facebook_service__["a" /* OorgaFacebookService */]])
    ], FbLoginButtonComponent);
    return FbLoginButtonComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/facebook/services/oorga-facebook.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OorgaFacebookService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_facebook__ = __webpack_require__("../../../../ngx-facebook/dist/esm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OorgaFacebookService = (function () {
    function OorgaFacebookService(fb) {
        this.fb = fb;
        var initParams = {
            appId: '1956226621059583',
            xfbml: true,
            version: 'v2.11'
        };
        fb.init(initParams);
    }
    OorgaFacebookService.prototype.ngOnInit = function () {
    };
    OorgaFacebookService.prototype.getStatus = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].fromPromise(this.fb.getLoginStatus()).map(function (res) {
            if (res.authResponse) {
                _this.isLoggedIn = res.status;
                _this.authResponse = res.authResponse;
                _this.userName = res.authResponse.userID;
            }
            return _this.isLoggedIn;
        });
    };
    OorgaFacebookService.prototype.invite = function (url) {
        url = url.replace('localhost', '10.0.0.4:4000');
        return this.fb.ui({
            method: 'send',
            message: 'Watch with me',
            link: url,
            display: 'dialog'
        });
    };
    OorgaFacebookService.prototype.getUserName = function (id) {
        var _this = this;
        var params = { fields: 'name,picture' };
        if (this.isLoggedIn) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].fromPromise(this.fb.api('/' + id, 'get', params));
        }
        else {
            return this.getStatus().map(function () {
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].fromPromise(_this.fb.api('/' + id, 'get', params));
            });
        }
    };
    OorgaFacebookService.prototype.login = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].fromPromise(this.fb.login())
            .map(function (response) {
            _this.isLoggedIn = response.status;
            _this.authResponse = response.authResponse;
            _this.userName = response.authResponse.userID;
            console.log('Logged in', response);
            return _this.isLoggedIn;
        });
    };
    OorgaFacebookService.prototype.logOut = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].fromPromise(this.fb.logout()).map(function (res) {
            _this.isLoggedIn = "disconnected";
            return _this.isLoggedIn;
        });
    };
    OorgaFacebookService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_facebook__["b" /* FacebookService */]])
    ], OorgaFacebookService);
    return OorgaFacebookService;
}());



/***/ }),

/***/ "../../../../../src/app/modules/sync/services/sync-ws.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SyncWsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_stomp_service__ = __webpack_require__("../../../../ng2-stomp-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_stomp_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_stomp_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_fromPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/fromPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_ReplaySubject__ = __webpack_require__("../../../../rxjs/_esm5/ReplaySubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SyncWsService = (function () {
    function SyncWsService(stomp) {
        this.stomp = stomp;
        this.map = new Map();
        this.connected = false;
        this.connection = new __WEBPACK_IMPORTED_MODULE_4_rxjs_ReplaySubject__["a" /* ReplaySubject */](1);
        this.configure();
    }
    SyncWsService_1 = SyncWsService;
    SyncWsService.prototype.get = function () {
        var _this = this;
        if (this.stomp.status != "CONNECTED" && this.stomp.status != "CONNECTING") {
            __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].fromPromise(this.stomp.startConnect()).subscribe(function () { return _this.connection.next(_this.stomp.status); });
        }
        return this.connection;
    };
    SyncWsService.prototype.configure = function () {
        this.stomp.configure({
            host: SyncWsService_1.confUrl,
            debug: true,
            queue: { 'init': false }
        });
    };
    SyncWsService.prototype.subscribe = function (url) {
        var _this = this;
        var broadCaster = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__["a" /* Subject */]();
        this.get().subscribe(function () {
            var existingSubscription = _this.map.get(url);
            if (existingSubscription) {
                existingSubscription.unsubscribe();
            }
            var subscription = _this.stomp.subscribe(url, function (res) {
                broadCaster.next(res);
            });
            _this.map.set(url, subscription);
        });
        return broadCaster.asObservable();
    };
    SyncWsService.prototype.unsubscribe = function (url) {
        var _this = this;
        this.get().subscribe(function () {
            var subscription = _this.map.get(url);
            if (subscription) {
                subscription.unsubscribe();
            }
        });
    };
    SyncWsService.prototype.send = function (url, data) {
        var _this = this;
        this.get().subscribe(function () {
            _this.stomp.send(url, data);
        });
    };
    SyncWsService.prototype.disconnect = function () {
        this.stomp.disconnect().then(function () {
            console.log('Connection closed');
        });
    };
    SyncWsService.confUrl = '/api/ws/websocket';
    SyncWsService = SyncWsService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng2_stomp_service__["StompService"]])
    ], SyncWsService);
    return SyncWsService;
    var SyncWsService_1;
}());



/***/ }),

/***/ "../../../../../src/app/modules/sync/services/ws-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WsDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WsDataService = (function () {
    function WsDataService() {
        this.userName = Date.now().toString();
        this.programAction = false;
    }
    WsDataService.prototype.getGroupId = function (type, userName) {
        if (type == "new") {
            this.userName = userName;
            this.groupId = userName + this.randomString(10);
        }
        return this.groupId;
    };
    WsDataService.prototype.setGroupId = function (groupId) {
        this.groupId = groupId;
    };
    WsDataService.prototype.getProgramAction = function () {
        return this.programAction;
    };
    WsDataService.prototype.setProgramAction = function (programAction) {
        this.programAction = programAction;
    };
    WsDataService.prototype.getUserName = function () {
        return this.userName;
    };
    WsDataService.prototype.getVideoId = function (player) {
        return player.getVideoData()['video_id'];
    };
    WsDataService.prototype.prepareData = function (player, programAction, isHelp) {
        return {
            accessLevel: 1,
            actionSource: "",
            userName: this.getUserName(),
            programAction: this.getProgramAction(),
            groupId: this.getGroupId("old"),
            isHelp: isHelp,
            playerData: {
                playerState: player.getPlayerState(),
                duration: player.getCurrentTime(),
                videoId: this.getVideoId(player)
            }
        };
    };
    WsDataService.prototype.randomString = function (length) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text + Date.now().toString();
    };
    WsDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], WsDataService);
    return WsDataService;
}());



/***/ }),

/***/ "../../../../../src/app/modules/sync/services/ws-player.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WsPlayerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ws_data_service__ = __webpack_require__("../../../../../src/app/modules/sync/services/ws-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sync_ws_service__ = __webpack_require__("../../../../../src/app/modules/sync/services/sync-ws.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_youtube_player_service__ = __webpack_require__("../../../../../src/app/services/youtube-player.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WsPlayerService = (function () {
    function WsPlayerService(wsService, dataService, playerApi) {
        this.wsService = wsService;
        this.dataService = dataService;
        this.playerApi = playerApi;
    }
    WsPlayerService.prototype.updateServer = function (url, data) {
        this.wsService.send(url, data);
    };
    WsPlayerService.prototype.updateServerForJoining = function (player, groupId) {
        var _this = this;
        if (groupId) {
            this.dataService.setGroupId(groupId);
        }
        this.player = player;
        this.wsService.subscribe("/receive/getHelp-" + this.dataService.getGroupId()).subscribe(function (data) {
            _this.getHelp(data);
        });
        this.wsService.subscribe("/receive/helpOthers-" + this.dataService.getGroupId()).subscribe(function () {
            _this.helpOthers();
        });
        this.updateServer('/send/joined', this.dataService.prepareData(player));
    };
    WsPlayerService.prototype.getHelp = function (data) {
        var _this = this;
        if (data.playerData && data.userName != this.dataService.getUserName()) {
            this.checkAndInit(data.playerData.videoId, this.player);
            this.callback(data.playerData);
        }
        this.dataService.setProgramAction(false);
        this.wsService.unsubscribe("/receive/getHelp-" + this.dataService.getGroupId());
        this.wsService.subscribe("/receive/get-" + this.dataService.getGroupId()).subscribe(function (data) {
            _this.updatePlayerOnResponse(data);
        });
    };
    WsPlayerService.prototype.helpOthers = function () {
        this.updateServer('/send/offerHelp', this.dataService.prepareData(this.player));
    };
    WsPlayerService.prototype.updatePlayerOnResponse = function (data) {
        if (data.playerData && data.userName != this.dataService.getUserName() && !data.programAction) {
            this.checkAndInit(data.playerData.videoId, this.player);
            this.callback(data.playerData);
        }
    };
    WsPlayerService.prototype.checkAndInit = function (responseVideoId, player) {
        if (responseVideoId != this.dataService.getVideoId(player)) {
            this.playerApi.playVideo(responseVideoId, player);
        }
    };
    WsPlayerService.prototype.callback = function (response) {
        var seekAhead = true;
        switch (response.playerState) {
            case YT.PlayerState.PLAYING:
                this.dataService.setProgramAction(true);
                this.seek(response, seekAhead);
                this.player.playVideo();
                break;
            case YT.PlayerState.PAUSED:
                this.dataService.setProgramAction(true);
                this.player.pauseVideo();
                this.seek(response, seekAhead);
                break;
            case YT.PlayerState.BUFFERING:
                // seek(response, seekAhead, player);
                break;
            case YT.PlayerState.ENDED:
                console.log("ended");
                break;
        }
    };
    WsPlayerService.prototype.seek = function (response, seekAhead) {
        this.player.seekTo(response.duration, seekAhead);
    };
    WsPlayerService.prototype.decideAndUpdateServer = function (player, event) {
        var isServerUpdated = false;
        if (!this.dataService.getProgramAction()) {
            console.log("decided to update the server");
            this.updateServer('/send/update', this.dataService.prepareData(player));
            isServerUpdated = true;
        }
        if (event.data != YT.PlayerState.BUFFERING) {
            this.dataService.setProgramAction(false);
        }
        return isServerUpdated;
    };
    WsPlayerService.prototype.generateGroupId = function (userName) {
        return this.dataService.getGroupId("new", userName);
    };
    WsPlayerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__sync_ws_service__["a" /* SyncWsService */], __WEBPACK_IMPORTED_MODULE_1__ws_data_service__["a" /* WsDataService */], __WEBPACK_IMPORTED_MODULE_3__services_youtube_player_service__["a" /* YoutubePlayerService */]])
    ], WsPlayerService);
    return WsPlayerService;
}());



/***/ }),

/***/ "../../../../../src/app/modules/sync/sync.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SyncModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_sync_ws_service__ = __webpack_require__("../../../../../src/app/modules/sync/services/sync-ws.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_ws_player_service__ = __webpack_require__("../../../../../src/app/modules/sync/services/ws-player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_ws_data_service__ = __webpack_require__("../../../../../src/app/modules/sync/services/ws-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SyncModule = (function () {
    function SyncModule() {
    }
    SyncModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            exports: [],
            declarations: [],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_sync_ws_service__["a" /* SyncWsService */], __WEBPACK_IMPORTED_MODULE_3__services_ws_player_service__["a" /* WsPlayerService */], __WEBPACK_IMPORTED_MODULE_4__services_ws_data_service__["a" /* WsDataService */]]
        })
    ], SyncModule);
    return SyncModule;
}());



/***/ }),

/***/ "../../../../../src/app/pages/base-page/base-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/base-page/base-page.component.html":
/***/ (function(module, exports) {

module.exports = "<youtube-auto-complete [searchQuery]=\"searchQuery\" (searchResult)=\"updateThumbnails($event)\" ></youtube-auto-complete>\r\n\r\n<div>\r\n  <side-bar style=\"float:left; width:15%;\"></side-bar>\r\n  <router-outlet style=\"float:right; width:80%;\"></router-outlet>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/base-page/base-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_sharing_service__ = __webpack_require__("../../../../../src/app/services/sharing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BasePageComponent = (function () {
    function BasePageComponent(share, route) {
        this.share = share;
        this.route = route;
        // this.route.firstChild.params.subscribe(params => {
        //   this.searchQuery = params['searchQuery'];
        // });
    }
    BasePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.share.getObservable().filter(function (res) { return res.getKey() == __WEBPACK_IMPORTED_MODULE_2__services_sharing_service__["a" /* Data */].PARAM_UPDATED; }).subscribe(function (res) {
            _this.searchQuery = res.getData();
        });
    };
    BasePageComponent.prototype.updateSearchParam = function (event) {
        this.searchQuery = event;
    };
    BasePageComponent.prototype.updateThumbnails = function (data) {
        this.share.publishData(__WEBPACK_IMPORTED_MODULE_2__services_sharing_service__["a" /* Data */].VIDEO_RESULT, data['items']);
    };
    BasePageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'oorga-base-page',
            template: __webpack_require__("../../../../../src/app/pages/base-page/base-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/base-page/base-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_sharing_service__["b" /* SharingService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], BasePageComponent);
    return BasePageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/homepage/homepage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-grid-tile {\r\n    background: lightblue;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/homepage/homepage.component.html":
/***/ (function(module, exports) {

module.exports = "<oorga-search-header></oorga-search-header><br>\r\n<media-thumbnail-grid [datas]=\"thumbnailData\"></media-thumbnail-grid>\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/homepage/homepage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_youtube_api_service__ = __webpack_require__("../../../../../src/app/services/youtube-api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomepageComponent = (function () {
    function HomepageComponent(ytApi) {
        this.ytApi = ytApi;
        this.apiKey = 'AIzaSyAkc_Bd_mpyn-MdyI91dp87AQqIRyZQVNM';
    }
    HomepageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ytApi.fetchTrendingVideos(this.apiKey, 'IN').subscribe(function (data) {
            _this.thumbnailData = data['items'];
        });
    };
    HomepageComponent.prototype.updateThumbnails = function (data) {
        this.thumbnailData = data['items'];
    };
    HomepageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'oorga-homepage',
            template: __webpack_require__("../../../../../src/app/pages/homepage/homepage.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/homepage/homepage.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_youtube_api_service__["a" /* YoutubeApiService */]])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/search-result/search-result.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".results{\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/search-result/search-result.component.html":
/***/ (function(module, exports) {

module.exports = "<oorga-search-header></oorga-search-header>\r\n\r\n<div class=\"results\">\r\n        <media-thumbnail-grid [datas]=\"thumbnailData\"></media-thumbnail-grid>\r\n    <!-- <media-thumbnail-list urlToNavigate='/play' [datas]=\"thumbnailData\"></media-thumbnail-list> -->\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/search-result/search-result.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchResultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_sharing_service__ = __webpack_require__("../../../../../src/app/services/sharing.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchResultComponent = (function () {
    function SearchResultComponent(share) {
        this.share = share;
        this.thumbnailData = [];
    }
    SearchResultComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.share.getObservable().subscribe(function (result) {
            if (__WEBPACK_IMPORTED_MODULE_1__services_sharing_service__["a" /* Data */].VIDEO_RESULT === result.getKey()) {
                _this.thumbnailData = result.getData();
            }
        });
    };
    SearchResultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'oorga-search-result',
            template: __webpack_require__("../../../../../src/app/pages/search-result/search-result.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/search-result/search-result.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_sharing_service__["b" /* SharingService */]])
    ], SearchResultComponent);
    return SearchResultComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/sync-player/sync-player.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "media-thumbnail-list{\r\n    float: right;\r\n    width: 29%;\r\n}\r\n\r\n@media (max-width: 720px) {\r\n    media-thumbnail-list{\r\n        float: none;\r\n        width: 50%;\r\n    }\r\n }\r\n\r\n.video-container{\r\n    text-align: center;\r\n    width: 100%;\r\n    display: inline-block;\r\n    margin: 1em;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/sync-player/sync-player.component.html":
/***/ (function(module, exports) {

module.exports = "<oorga-search-header></oorga-search-header>\r\n\r\n<oorga-detailed-player [data]=\"videoDetail\" [showJoin]=\"false\" [videoId]='videoId' (change)=\"onStateChange($event)\" (ready)=\"savePlayer($event)\"></oorga-detailed-player>\r\n<media-thumbnail-list [navigationParams]=\"[groupId]\"  urlToNavigate=\"/view/playSync\" [datas]=\"datas\"></media-thumbnail-list>\r\n<oorga-chat-window></oorga-chat-window>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/pages/sync-player/sync-player.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SyncPlayerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_youtube_api_service__ = __webpack_require__("../../../../../src/app/services/youtube-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_sharing_service__ = __webpack_require__("../../../../../src/app/services/sharing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_sync_services_ws_player_service__ = __webpack_require__("../../../../../src/app/modules/sync/services/ws-player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_youtube_player_service__ = __webpack_require__("../../../../../src/app/services/youtube-player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_facebook_services_oorga_facebook_service__ = __webpack_require__("../../../../../src/app/modules/facebook/services/oorga-facebook.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_chat_services_chat_service_service__ = __webpack_require__("../../../../../src/app/modules/chat/services/chat-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SyncPlayerComponent = (function () {
    function SyncPlayerComponent(route, ytApi, share, playerApi, syncService, fb, chat) {
        this.route = route;
        this.ytApi = ytApi;
        this.share = share;
        this.playerApi = playerApi;
        this.syncService = syncService;
        this.fb = fb;
        this.chat = chat;
        this.enableConnect = false;
    }
    SyncPlayerComponent.prototype.savePlayer = function (player) {
        this.player = player;
        // player.playVideo();
        console.log('player instance', player);
        this.enableConnect = true;
        this.updateServerThatConnected(this.groupId);
        this.chat.subscribeToMessages(this.groupId);
    };
    SyncPlayerComponent.prototype.onStateChange = function (event) {
        console.log('player state', event.data);
        if (this.enableConnect) {
            console.log("connect enabled");
            if (this.syncService.decideAndUpdateServer(this.player, event)) {
                this.chat.sendMessage(event.data.toString(), "SYS");
            }
        }
    };
    SyncPlayerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.videoId = params['videoId'];
            _this.groupId = params['groupId'];
            if (_this.player) {
                _this.playerApi.playVideo(_this.videoId, _this.player);
            }
            _this.ytApi.fetchRelatedVideosWithDetails(_this.videoId, __WEBPACK_IMPORTED_MODULE_3__services_sharing_service__["a" /* Data */].apiKey).subscribe(function (res) {
                _this.share.publishData(__WEBPACK_IMPORTED_MODULE_3__services_sharing_service__["a" /* Data */].RELATED_VIDEO_RESULT, res["items"]);
            });
            _this.ytApi.fetchVideoDetails(_this.videoId, __WEBPACK_IMPORTED_MODULE_3__services_sharing_service__["a" /* Data */].apiKey).subscribe(function (res) {
                _this.videoDetail = res;
            });
        });
        this.share.getObservable().subscribe(function (res) {
            if (__WEBPACK_IMPORTED_MODULE_3__services_sharing_service__["a" /* Data */].RELATED_VIDEO_RESULT === res.getKey()) {
                _this.datas = res.getData();
                console.log(_this.datas);
            }
        });
    };
    SyncPlayerComponent.prototype.updateServerThatConnected = function (groupId) {
        this.syncService.updateServerForJoining(this.player, groupId);
    };
    SyncPlayerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'oorga-sync-player',
            template: __webpack_require__("../../../../../src/app/pages/sync-player/sync-player.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/sync-player/sync-player.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_youtube_api_service__["a" /* YoutubeApiService */], __WEBPACK_IMPORTED_MODULE_3__services_sharing_service__["b" /* SharingService */],
            __WEBPACK_IMPORTED_MODULE_5__services_youtube_player_service__["a" /* YoutubePlayerService */], __WEBPACK_IMPORTED_MODULE_4__modules_sync_services_ws_player_service__["a" /* WsPlayerService */], __WEBPACK_IMPORTED_MODULE_6__modules_facebook_services_oorga_facebook_service__["a" /* OorgaFacebookService */], __WEBPACK_IMPORTED_MODULE_7__modules_chat_services_chat_service_service__["a" /* ChatService */]])
    ], SyncPlayerComponent);
    return SyncPlayerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/youtube-player-page/youtube-player-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "media-thumbnail-list{\r\n    float: right;\r\n    width: 29%;\r\n}\r\n\r\n@media (max-width: 720px) {\r\n    media-thumbnail-list{\r\n        float: none;\r\n        width: 50%;\r\n    }\r\n }\r\n\r\n.video-container{\r\n    text-align: center;\r\n    width: 100%;\r\n    display: inline-block;\r\n    margin: 1em;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/youtube-player-page/youtube-player-page.component.html":
/***/ (function(module, exports) {

module.exports = "<oorga-search-header></oorga-search-header>\r\n<oorga-detailed-player [data]=\"videoDetail\" [videoId]='videoId' (join)=\"joinFriends()\" (change)=\"onStateChange($event)\" (ready)=\"savePlayer($event)\"></oorga-detailed-player>\r\n<media-thumbnail-list urlToNavigate='/view/play' [datas]=\"datas\"></media-thumbnail-list>"

/***/ }),

/***/ "../../../../../src/app/pages/youtube-player-page/youtube-player-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubePlayerPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_youtube_api_service__ = __webpack_require__("../../../../../src/app/services/youtube-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_sharing_service__ = __webpack_require__("../../../../../src/app/services/sharing.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_youtube_player_service__ = __webpack_require__("../../../../../src/app/services/youtube-player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_connect_service__ = __webpack_require__("../../../../../src/app/services/connect.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var YoutubePlayerPageComponent = (function () {
    function YoutubePlayerPageComponent(route, ytApi, share, playerApi, connectService) {
        this.route = route;
        this.ytApi = ytApi;
        this.share = share;
        this.playerApi = playerApi;
        this.connectService = connectService;
        this.thumbnailNavigationUrl = '/play';
        this.enableConnect = false;
    }
    YoutubePlayerPageComponent.prototype.savePlayer = function (player) {
        this.player = player;
        player.playVideo();
        console.log('player instance', player);
    };
    YoutubePlayerPageComponent.prototype.onStateChange = function (event) {
        console.log('player state', event.data);
        // if (this.enableConnect) {
        //   console.log("connect enabled");
        //   this.syncService.decideAndUpdateServer(this.player, event);
        // }
    };
    YoutubePlayerPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.videoId = params['videoId'];
            if (_this.player) {
                _this.playerApi.playVideo(_this.videoId, _this.player);
            }
            _this.ytApi.fetchRelatedVideosWithDetails(_this.videoId, __WEBPACK_IMPORTED_MODULE_3__services_sharing_service__["a" /* Data */].apiKey).subscribe(function (res) {
                _this.share.publishData(__WEBPACK_IMPORTED_MODULE_3__services_sharing_service__["a" /* Data */].RELATED_VIDEO_RESULT, res["items"]);
            });
            _this.ytApi.fetchVideoDetails(_this.videoId, __WEBPACK_IMPORTED_MODULE_3__services_sharing_service__["a" /* Data */].apiKey).subscribe(function (res) {
                _this.videoDetail = res;
            });
        });
        this.share.getObservable().subscribe(function (res) {
            if (__WEBPACK_IMPORTED_MODULE_3__services_sharing_service__["a" /* Data */].RELATED_VIDEO_RESULT === res.getKey()) {
                _this.datas = res.getData();
                console.log(_this.datas);
            }
            // else if (Data.CONNECT == res.getKey()) {
            //     this.enableConnect = true;
            //     this.updateServerThatConnected();
            //   }
        });
    };
    // updateServerThatConnected() {
    //   this.syncService.updateServerForJoining(this.player);
    // }
    YoutubePlayerPageComponent.prototype.joinFriends = function () {
        this.connectService.inviteOthers("/view/playSync", this.videoId);
    };
    YoutubePlayerPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'oorga-youtube-player-page',
            template: __webpack_require__("../../../../../src/app/pages/youtube-player-page/youtube-player-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/youtube-player-page/youtube-player-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_youtube_api_service__["a" /* YoutubeApiService */], __WEBPACK_IMPORTED_MODULE_3__services_sharing_service__["b" /* SharingService */],
            __WEBPACK_IMPORTED_MODULE_4__services_youtube_player_service__["a" /* YoutubePlayerService */], __WEBPACK_IMPORTED_MODULE_5__services_connect_service__["a" /* ConnectService */]])
    ], YoutubePlayerPageComponent);
    return YoutubePlayerPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/duration-formatter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DurationFormatterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DurationFormatterPipe = (function () {
    function DurationFormatterPipe() {
    }
    DurationFormatterPipe.prototype.transform = function (value, args) {
        return this.getDisplayTime(value);
    };
    DurationFormatterPipe.prototype.getDisplayTime = function (duation) {
        var du = __WEBPACK_IMPORTED_MODULE_1_moment__["duration"](duation);
        var milli = du.asMilliseconds();
        var milliseconds = milli % 1000;
        var seconds = Math.floor((milli / 1000) % 60);
        var minutes = Math.floor((milli / (60 * 1000)) % 60);
        return this.msToTime(milli);
    };
    DurationFormatterPipe.prototype.msToTime = function (s) {
        var ms = s % 1000;
        s = (s - ms) / 1000;
        var secs = s % 60;
        s = (s - secs) / 60;
        var mins = s % 60;
        var hrs = (s - mins) / 60;
        return (hrs ? this.pad(hrs) + ':' : "") + this.pad(mins) + ":" + this.pad(secs);
    };
    DurationFormatterPipe.prototype.pad = function (n, z) {
        z = z || 2;
        return ('00' + n).slice(-z);
    };
    DurationFormatterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
            name: 'durationFormatter'
        })
    ], DurationFormatterPipe);
    return DurationFormatterPipe;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/pad-length.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PadLengthPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PadLengthPipe = (function () {
    function PadLengthPipe() {
    }
    PadLengthPipe.prototype.transform = function (value, length) {
        if (!length || !value || value.length >= length) {
            return value;
        }
        return value + Array(length - value.length).join('_');
    };
    PadLengthPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
            name: 'padLength'
        })
    ], PadLengthPipe);
    return PadLengthPipe;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/search-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchFilterPipe = (function () {
    function SearchFilterPipe() {
    }
    SearchFilterPipe.prototype.transform = function (value, search) {
        if (!search) {
            return value;
        }
        var solution = value.filter(function (v) {
            if (!v) {
                return;
            }
            return v.toLowerCase().indexOf(search.toLocaleLowerCase()) !== -1;
        });
        return solution;
    };
    SearchFilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
            name: 'searchFilter'
        })
    ], SearchFilterPipe);
    return SearchFilterPipe;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/view-count-formatter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewCountFormatPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ViewCountFormatPipe = (function () {
    function ViewCountFormatPipe() {
    }
    ViewCountFormatPipe.prototype.transform = function (value) {
        if (!value)
            return '';
        var million = 1000000;
        var thousand = 1000;
        var billion = 1000000000;
        var trillion = 1000000000000;
        var number = Math.round(value);
        if ((number >= thousand) && (number < million)) {
            var fraction = this.calculateFraction(number, thousand);
            return Math.round(fraction) + "K";
        }
        else if ((number >= million) && (number < billion)) {
            var fraction = this.calculateFraction(number, million);
            return this.truncateSignigifcantDigits(fraction, 1) + "M";
        }
        else if ((number >= billion) && (number < trillion)) {
            var fraction = this.calculateFraction(number, billion);
            return this.truncateSignigifcantDigits(fraction, 1) + "B";
        }
        return value.toString();
    };
    ViewCountFormatPipe.prototype.calculateFraction = function (number, divisor) {
        var truncate = (number * 10 + (divisor / 2)) / divisor;
        var fraction = truncate * 0.10;
        return fraction;
    };
    ViewCountFormatPipe.prototype.truncateSignigifcantDigits = function (num, significantDigits) {
        var y = Math.pow(10, significantDigits);
        return Math.trunc(num * y) / y;
    };
    ViewCountFormatPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
            name: 'ViewCountFormatPipe'
        })
    ], ViewCountFormatPipe);
    return ViewCountFormatPipe;
}());



/***/ }),

/***/ "../../../../../src/app/routing/routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_homepage_homepage_component__ = __webpack_require__("../../../../../src/app/pages/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_youtube_player_page_youtube_player_page_component__ = __webpack_require__("../../../../../src/app/pages/youtube-player-page/youtube-player-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_search_result_search_result_component__ = __webpack_require__("../../../../../src/app/pages/search-result/search-result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_sync_player_sync_player_component__ = __webpack_require__("../../../../../src/app/pages/sync-player/sync-player.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__pages_homepage_homepage_component__["a" /* HomepageComponent */]
    },
    {
        path: 'view/play/:videoId', component: __WEBPACK_IMPORTED_MODULE_3__pages_youtube_player_page_youtube_player_page_component__["a" /* YoutubePlayerPageComponent */]
    },
    {
        path: 'view/search/:searchQuery', component: __WEBPACK_IMPORTED_MODULE_4__pages_search_result_search_result_component__["a" /* SearchResultComponent */]
    },
    {
        path: 'view/playSync/:videoId/:groupId', component: __WEBPACK_IMPORTED_MODULE_5__pages_sync_player_sync_player_component__["a" /* SyncPlayerComponent */]
    }
];
var RoutingModule = (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes, {
                    enableTracing: true
                })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/services/connect.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_sync_services_ws_player_service__ = __webpack_require__("../../../../../src/app/modules/sync/services/ws-player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_facebook_services_oorga_facebook_service__ = __webpack_require__("../../../../../src/app/modules/facebook/services/oorga-facebook.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ConnectService = (function () {
    function ConnectService(syncService, fb, router) {
        this.syncService = syncService;
        this.fb = fb;
        this.router = router;
    }
    ConnectService.prototype.inviteOthers = function (url, videoId) {
        var _this = this;
        this.checkFBLoginStatus().subscribe(function (res) {
            console.log("join freinds:" + res);
            console.log(res);
            if (res) {
                _this.invite(url, videoId, _this.fb.userName).subscribe(function (res) {
                    if (res) {
                        _this.router.navigate([res.url]);
                    }
                });
            }
        });
    };
    ConnectService.prototype.checkFBLoginStatus = function () {
        var _this = this;
        var result = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__["a" /* Subject */]();
        this.fb.getStatus().subscribe(function (res) {
            console.log("join freinds:");
            console.log(res);
            if (res) {
                result.next(true);
            }
            else {
                return _this.fb.login().subscribe(function (res) {
                    result.next(true);
                });
            }
        });
        return result.asObservable();
    };
    ConnectService.prototype.invite = function (toUrl, videoId, userId) {
        var url = "/" + toUrl + "/" + videoId + "/" + this.syncService.generateGroupId(userId);
        var host = window.location.hostname;
        console.log("URL=" + url);
        var resp = __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].fromPromise(this.fb.invite(host + url));
        return resp.map(function (res) {
            return {
                response: res,
                url: url,
                host: host
            };
        });
    };
    ConnectService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__modules_sync_services_ws_player_service__["a" /* WsPlayerService */], __WEBPACK_IMPORTED_MODULE_2__modules_facebook_services_oorga_facebook_service__["a" /* OorgaFacebookService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], ConnectService);
    return ConnectService;
}());



/***/ }),

/***/ "../../../../../src/app/services/sharing.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Data; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SharingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Data = (function () {
    function Data(key, data) {
        this.data = data;
        this.key = key;
    }
    Data.prototype.getKey = function () {
        return this.key;
    };
    Data.prototype.setKey = function (key) {
        this.key = key;
    };
    Data.prototype.setData = function (data) {
        this.data = data;
    };
    Data.prototype.getData = function () {
        return this.data;
    };
    Data.VIDEO_RESULT = "VIDEO_RESULT";
    Data.SUGGESTION_RESULT = "SUGGESTION_RESULT";
    Data.PARAM_UPDATED = "PARAM_UPDATED";
    Data.RELATED_VIDEO_RESULT = "RELATED_VIDEO_RESULT";
    Data.VIDEO_DETAIL = "VIDEO_DETAIL";
    Data.apiKey = "AIzaSyAkc_Bd_mpyn-MdyI91dp87AQqIRyZQVNM";
    Data.TOGGLE = "TOGGLE";
    Data.CONNECT = "CONNECT";
    return Data;
}());

var SharingService = (function () {
    function SharingService() {
        this.broadCaster = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.broadCasterObservable = this.broadCaster.asObservable();
    }
    SharingService.prototype.publishData = function (key, data) {
        var dataToShare = new Data(key, data);
        this.broadCaster.next(dataToShare);
    };
    SharingService.prototype.getObservable = function () {
        return this.broadCasterObservable;
    };
    SharingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SharingService);
    return SharingService;
}());



/***/ }),

/***/ "../../../../../src/app/services/youtube-api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubeApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var YoutubeApiService = (function () {
    function YoutubeApiService(http) {
        this.http = http;
        this.searchUrl = '/api/googleapis/youtube/v3/search';
        this.searchMutlipleVideos = '/api/googleapis/youtube/v3/videos';
        this.suggestionUrl = '/api/suggestgoogle/complete/search';
    }
    YoutubeApiService.prototype.searchYoutube = function (query, apiKey) {
        if (query) {
            var param = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpParams */]();
            param = param.set('maxResults', '25');
            param = param.set('part', 'id');
            param = param.set('type', 'video');
            param = param.set('q', query);
            param = param.set('key', apiKey);
            return this.handleGetRequests(this.searchUrl, param).map(function (res) {
                var videoIds = res['items'].map(function (e) { return e.id.videoId; });
                return videoIds;
            });
        }
    };
    YoutubeApiService.prototype.fetchSearchResults = function (searchQuery, apiKey) {
        var _this = this;
        return this.searchYoutube(searchQuery, apiKey).flatMap(function (data) {
            return _this.searchWithVideoIds(data, apiKey);
        });
    };
    YoutubeApiService.prototype.searchWithVideoIds = function (videoIds, apiKey) {
        if (videoIds) {
            var param = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpParams */]();
            param = param.set('part', 'id,snippet,contentDetails,statistics');
            param = param.set('key', apiKey);
            param = param.set('id', videoIds.join(','));
            return this.handleGetRequests(this.searchMutlipleVideos, param);
        }
    };
    YoutubeApiService.prototype.fetchVideoDetails = function (videoId, apiKey) {
        if (videoId) {
            return this.searchWithVideoIds([videoId], apiKey);
        }
    };
    YoutubeApiService.prototype.fetchSuggestions = function (searchQuery) {
        if (searchQuery) {
            var param = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpParams */]();
            param = param.set('hl', 'en');
            param = param.set('ds', 'yt');
            param = param.set('client', 'firefox');
            param = param.set('hjson', 't');
            param = param.set('cp', '1');
            param = param.set('q', searchQuery);
            param = param.set('format', '5');
            param = param.set('alt', 'json');
            return this.handleGetRequests(this.suggestionUrl, param);
        }
    };
    YoutubeApiService.prototype.fetchTrendingVideos = function (apiKey, countryCode, category) {
        var param = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpParams */]();
        param = param.set('part', 'id,snippet,contentDetails,statistics');
        param = param.set('chart', 'mostPopular');
        param = param.set('regionCode', countryCode ? countryCode : 'IN');
        param = param.set('videoCategoryId', category ? category : '');
        param = param.set('key', apiKey);
        param = param.set('maxResults', '28');
        return this.handleGetRequests(this.searchMutlipleVideos, param);
    };
    YoutubeApiService.prototype.handleGetRequests = function (url, params) {
        return this.http.get(url, {
            params: params
        });
    };
    YoutubeApiService.prototype.fetchRelatedVideos = function (videoId, apiKey) {
        var param = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpParams */]();
        param = param.set("part", "id");
        param = param.set("relatedToVideoId", videoId);
        param = param.set("type", "video");
        param = param.set('key', apiKey);
        return this.handleGetRequests(this.searchUrl, param).map(function (res) {
            var videoIds = res['items'].map(function (e) { return e.id.videoId; });
            return videoIds;
        });
    };
    YoutubeApiService.prototype.fetchRelatedVideosWithDetails = function (videoId, apiKey) {
        var _this = this;
        return this.fetchRelatedVideos(videoId, apiKey).flatMap(function (data) {
            return _this.searchWithVideoIds(data, apiKey);
        });
    };
    YoutubeApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], YoutubeApiService);
    return YoutubeApiService;
}());



/***/ }),

/***/ "../../../../../src/app/services/youtube-player.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubePlayerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__ = __webpack_require__("../../../../rxjs/_esm5/ReplaySubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var YoutubePlayerService = (function () {
    function YoutubePlayerService(zone) {
        this.zone = zone;
        this.isFullscreen = false;
        this.defaultSizes = {
            height: 270,
            width: 367
        };
        this.createApi();
    }
    YoutubePlayerService_1 = YoutubePlayerService;
    Object.defineProperty(YoutubePlayerService, "win", {
        get: function () {
            return window;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(YoutubePlayerService, "YT", {
        get: function () {
            return YoutubePlayerService_1.win['YT'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(YoutubePlayerService, "Player", {
        get: function () {
            return YoutubePlayerService_1.YT.Player;
        },
        enumerable: true,
        configurable: true
    });
    YoutubePlayerService.prototype.loadPlayerApi = function (options) {
        var doc = YoutubePlayerService_1.win.document;
        var playerApiScript = doc.createElement("script");
        playerApiScript.type = "text/javascript";
        playerApiScript.src = options.protocol + "://www.youtube.com/iframe_api";
        doc.body.appendChild(playerApiScript);
    };
    YoutubePlayerService.prototype.setupPlayer = function (elementId, outputs, sizes, videoId, playerVars) {
        var _this = this;
        if (videoId === void 0) { videoId = ''; }
        var createPlayer = function () {
            if (YoutubePlayerService_1.Player) {
                _this.createPlayer(elementId, outputs, sizes, videoId, playerVars);
            }
        };
        this.api.subscribe(createPlayer);
    };
    YoutubePlayerService.prototype.play = function (player) {
        player.playVideo();
    };
    YoutubePlayerService.prototype.pause = function (player) {
        player.pauseVideo();
    };
    YoutubePlayerService.prototype.playVideo = function (videoId, player) {
        var id = videoId;
        player.loadVideoById(id);
        this.play(player);
    };
    YoutubePlayerService.prototype.isPlaying = function (player) {
        // because YT is not loaded yet 1 is used - YT.PlayerState.PLAYING
        var isPlayerReady = player && player.getPlayerState;
        var playerState = isPlayerReady ? player.getPlayerState() : {};
        var isPlayerPlaying = isPlayerReady
            ? playerState !== YT.PlayerState.ENDED && playerState !== YT.PlayerState.PAUSED
            : false;
        return isPlayerPlaying;
    };
    YoutubePlayerService.prototype.createPlayer = function (elementId, outputs, sizes, videoId, playerVars) {
        var _this = this;
        if (videoId === void 0) { videoId = ''; }
        if (playerVars === void 0) { playerVars = {}; }
        var service = this;
        var playerSize = {
            height: sizes.height || this.defaultSizes.height,
            width: sizes.width || this.defaultSizes.width
        };
        return new YoutubePlayerService_1.Player(elementId, Object.assign({}, playerSize, {
            events: {
                onReady: function (ev) {
                    _this.zone.run(function () { return outputs.ready && outputs.ready.next(ev.target); });
                },
                onStateChange: function (ev) {
                    _this.zone.run(function () { return outputs.change && outputs.change.next(ev); });
                    // this.zone.run(() => onPlayerStateChange(ev));
                }
            },
            videoId: videoId,
            playerVars: playerVars,
        }));
        // TODO: DEPRECATE?
        // function onPlayerStateChange (event: any) {
        //   const state = event.data;
        //   const PlayerState = YoutubePlayerService.YT.PlayerState;
        //   // play the next song if its not the end of the playlist
        //   // should add a "repeat" feature
        //   if (state === PlayerState.ENDED) {
        //   }
        //   if (state === PlayerState.PAUSED) {
        //       // service.playerState = PlayerState.PAUSED;
        //   }
        //   if (state === PlayerState.PLAYING) {
        //       // service.playerState = PlayerState.PLAYING;
        //   }
        // }
    };
    YoutubePlayerService.prototype.toggleFullScreen = function (player, isFullScreen) {
        var _a = this.defaultSizes, height = _a.height, width = _a.width;
        if (!isFullScreen) {
            height = window.innerHeight;
            width = window.innerWidth;
        }
        player.setSize(width, height);
        // TODO: dispatch event
    };
    // adpoted from uid
    YoutubePlayerService.prototype.generateUniqueId = function () {
        var len = 7;
        return Math.random().toString(35).substr(2, len);
    };
    YoutubePlayerService.prototype.createApi = function () {
        var _this = this;
        this.api = new __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["a" /* ReplaySubject */](1);
        var onYouTubeIframeAPIReady = function () {
            if (YoutubePlayerService_1.win) {
                _this.api.next(YoutubePlayerService_1.YT);
            }
        };
        YoutubePlayerService_1.win['onYouTubeIframeAPIReady'] = onYouTubeIframeAPIReady;
    };
    YoutubePlayerService = YoutubePlayerService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */]])
    ], YoutubePlayerService);
    return YoutubePlayerService;
    var YoutubePlayerService_1;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


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
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
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
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
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
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
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
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
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

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map