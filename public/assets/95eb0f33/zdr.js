webpackJsonp([1],{0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}n(220);var a=n(16),l=r(a),o=n(163),i=r(o),u=n(193),s=r(u),c=n(194),f=r(c);i["default"].render(l["default"].createElement("div",null,l["default"].createElement(s["default"],null),l["default"].createElement(f["default"],null)),document.getElementById("MainContainer"))},37:function(e,t,n){var r,a;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r))e.push(n.apply(null,r));else if("object"===a)for(var o in r)l.call(r,o)&&r[o]&&e.push(o)}}return e.join(" ")}var l={}.hasOwnProperty;"undefined"!=typeof e&&e.exports?e.exports=n:(r=[],a=function(){return n}.apply(t,r),!(void 0!==a&&(e.exports=a)))}()},58:function(e,t){e.exports="data:image/png;base64,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"},59:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0});var o=n(17),i=r(o),u=n(5),s=r(u),c={},f=function(){function e(){a(this,e)}return l(e,null,[{key:"getFetchedStories",value:function(){return c}},{key:"getTopStoryIDs",value:function(e){return s["default"].get("/api/4/news/top",function(t){e(null,t)}).fail(function(){e("/api/4/news/top error")})}},{key:"getStoryIDs",value:function(e,t){return i["default"].isFunction(e)&&(t=e,e=null),i["default"].isEmpty(i["default"].trim(e))?s["default"].get("/api/4/news/before",function(e){t(null,e)}).fail(function(){t("/api/4/news/before error")}):s["default"].get("/api/4/news/before/"+e,function(e){t(null,e)}).fail(function(){t("/api/4/news/before/"+e+" error")})}},{key:"getStory",value:function(e,t){if(i["default"].isFunction(t)){if(!i["default"].isEmpty(i["default"].trim(e)))return s["default"].get("/api/4/news/"+e,function(n){c[e]=n,t(null,n)}).fail(function(){t("/api/4/news/ error")});i["default"].isFunction(t)&&t("p_id must not be null")}}}]),e}();t["default"]=f},193:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0}),n(214);var u=n(16),s=r(u),c=n(58),f=r(c),d=function(e){function t(){return a(this,t),l(this,Object.getPrototypeOf(t).apply(this,arguments))}return o(t,e),i(t,[{key:"render",value:function(){return s["default"].createElement("div",{className:"navbar-header"},s["default"].createElement("button",{type:"button",className:"navbar-toggle collapsed","data-toggle":"collapse","data-target":"#NavbarContent"},s["default"].createElement("span",{className:"sr-only"},"导航"),s["default"].createElement("span",{className:"icon-bar"}),s["default"].createElement("span",{className:"icon-bar"}),s["default"].createElement("span",{className:"icon-bar"})),s["default"].createElement("a",{className:"navbar-brand",href:"/"},s["default"].createElement("img",{alt:"知乎日报",src:f["default"]})))}}]),t}(s["default"].Component),p=function(e){function t(){return a(this,t),l(this,Object.getPrototypeOf(t).apply(this,arguments))}return o(t,e),i(t,[{key:"render",value:function(){return s["default"].createElement("div",{id:"NavbarContent",className:"navbar-collapse collapse"},s["default"].createElement("ul",{className:"nav navbar-nav navbar-right"},s["default"].createElement("li",{className:"active"},s["default"].createElement("a",{href:"#"},"日报")),s["default"].createElement("li",{className:"disabled"},s["default"].createElement("a",{href:"#"},"专栏")),s["default"].createElement("li",{className:"disabled"},s["default"].createElement("a",{href:"#"},"关于"))))}}]),t}(s["default"].Component),h=function(e){function t(){return a(this,t),l(this,Object.getPrototypeOf(t).apply(this,arguments))}return o(t,e),i(t,[{key:"render",value:function(){return s["default"].createElement("nav",{className:"Navbar navbar navbar-default navbar-fixed-top"},s["default"].createElement("div",{className:"container-fluid"},s["default"].createElement(d,null),s["default"].createElement(p,null)))}}]),t}(s["default"].Component);t["default"]=h},194:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0}),n(219);var u=n(5),s=r(u),c=n(16),f=r(c),d=n(161),p=r(d),h=n(162),y=r(h),m=n(23),v=r(m),b=n(199),w=r(b),g=n(59),E=r(g),k=n(196),A=r(k),S=n(195),V=r(S),O=n(198),N=r(O),C=function(e){function t(e){a(this,t);var n=l(this,Object.getPrototypeOf(t).call(this,e));return n._currentLoadedDate=null,n._currentIndex=-1,n._isLoading=!1,n._isArticleViewVisible=!1,n._openShortcutsViewFlag=!1,n._$ArticleView=null,n._$ArticleViewContent=null,n._$ShortcutsView=null,n.state={topStoryIDs:[],storyIDs:[],currentStory:null,loading:!1},n.shouldComponentUpdate=v["default"].shouldComponentUpdate.bind(n),n}return o(t,e),i(t,[{key:"componentDidMount",value:function(){this._$ArticleView=(0,s["default"])("#ArticleView"),this._$ArticleViewContent=(0,s["default"])("#ArticleView .modal-content"),this._$ShortcutsView=(0,s["default"])("#ShortcutsView"),this._loadOtherStories(),this._addEventHandler()}},{key:"componentWillUnmount",value:function(){this._removeEventHandler()}},{key:"_loadTopStories",value:function(){var e=this;E["default"].getTopStoryIDs(function(t,n){!t&&n&&e.setState({topStoryIDs:n.ids})})}},{key:"_loadOtherStories",value:function(){var e=this;this.setState({loading:!0},function(){E["default"].getStoryIDs(function(t,n){!t&&n&&(e._currentLoadedDate=n.date,e._addStoryIDs(n.ids),e._loadPrevStories()),e.setState({loading:!1})})})}},{key:"_loadPrevStories",value:function(e){var t=this;this.setState({loading:!0},function(){E["default"].getStoryIDs(w["default"].prevZhihuDay(t._currentLoadedDate),function(n,r){!n&&r&&(t._currentLoadedDate=r.date,t._addStoryIDs(r.ids)),t.setState({loading:!1}),_.isFunction(e)&&e()})})}},{key:"_addEventHandler",value:function(){var e=this;this._$ArticleView.on("hide.bs.modal",function(t){e._resetArticleViewScroll()}),this._$ArticleView.on("hidden.bs.modal",function(t){e._isArticleViewVisible=!1,e._openShortcutsViewFlag&&(e._openShortcutsViewFlag=!1,e._openShortcutsView())}),this._$ArticleView.on("shown.bs.modal",function(t){e._isArticleViewVisible=!0,e._$ArticleViewContent.focus()}),this._addKeyboardShortcuts(),(0,s["default"])(document).on("scroll",this._scrollHandler.bind(this))}},{key:"_removeEventHandler",value:function(){this._$ArticleView.off("hide.bs.modal"),this._removeKeyboardShortcuts(),(0,s["default"])(document).off("scroll")}},{key:"_addKeyboardShortcuts",value:function(){var e=this;p["default"].bind(["esc","escape"],function(){e._closeArticleView(),e._closeShortcutsView()}),p["default"].bind("j",this._keydownShowNextStory.bind(this)),p["default"].bind("k",this._keydownShowPrevStory.bind(this)),p["default"].bind(["o","enter"],function(){!e._isArticleViewVisible&&e._currentIndex>=0&&e._showArticle(E["default"].getFetchedStories()[e.state.storyIDs[e._currentIndex]],!1)}),p["default"].bind("left",function(){e._isArticleViewVisible?e._keydownShowPrevStory():e._decreaseCurrentIndex()}),p["default"].bind("right",function(){e._isArticleViewVisible?e._keydownShowNextStory():e._increaseCurrentIndex()}),p["default"].bind("v",function(){e._isArticleViewVisible&&(0,s["default"])(".view-more a").map(function(e,t){t.click()})}),p["default"].bind(["h","?"],function(){e._isArticleViewVisible?(e._openShortcutsViewFlag=!0,e._closeArticleView()):e._openShortcutsView()})}},{key:"_removeKeyboardShortcuts",value:function(){p["default"].reset()}},{key:"_keydownShowNextStory",value:function(){var e=this,t=this._currentIndex+1;if(t<this.state.storyIDs.length){if(!this._isLoading){var n=E["default"].getFetchedStories()[this.state.storyIDs[t]];this._isArticleViewVisible?this._updateArticle(n,function(){e._increaseCurrentIndex(),e._resetArticleViewScroll()}):this._showArticle(n)}}else this._isLoading||(this._isLoading=!0,this._loadPrevStories(function(){e._isLoading=!1}))}},{key:"_keydownShowPrevStory",value:function(){var e=this,t=this._currentIndex-1;if(t>=0){var n=E["default"].getFetchedStories()[this.state.storyIDs[t]];this._isArticleViewVisible?this._updateArticle(n,function(){e._decreaseCurrentIndex(),e._resetArticleViewScroll()}):this._showArticle(n)}}},{key:"_scrollHandler",value:function(e){var t=this;!this._isLoading&&(0,s["default"])(document).scrollTop()>=(0,s["default"])(document).height()-(0,s["default"])(window).height()-185&&(this._isLoading=!0,this._loadPrevStories(function(){t._isLoading=!1}))}},{key:"_resetArticleViewScroll",value:function(){this._$ArticleViewContent.scrollTop(0)}},{key:"_addStoryIDs",value:function(e){this.setState({storyIDs:(0,y["default"])(this.state.storyIDs,{$push:e})})}},{key:"_carouselClickHandler",value:function(e){this._showArticle(E["default"].getFetchedStories()[e.id],!1)}},{key:"_tileClickHandler",value:function(e){this._showArticle(e.story,!1)}},{key:"_showArticle",value:function(e,t){var n=this;this._updateArticle(e,function(){n._setCurrentIndex(n._getStoryIndexByID(e.id),t),n._openArticleView()})}},{key:"_updateArticle",value:function(e,t){e&&this.setState({currentStory:e},t)}},{key:"_getStoryIndexByID",value:function(e){return _.indexOf(this.state.storyIDs,e)}},{key:"_openArticleView",value:function(){this._isArticleViewVisible||this._$ArticleView.modal()}},{key:"_closeArticleView",value:function(){this._isArticleViewVisible&&this._$ArticleView.modal("hide")}},{key:"_openShortcutsView",value:function(){this._$ShortcutsView.modal()}},{key:"_closeShortcutsView",value:function(){this._$ShortcutsView.modal("hide")}},{key:"_increaseCurrentIndex",value:function(){var e=this._currentIndex+1;e<this.state.storyIDs.length&&this._setCurrentIndex(e)}},{key:"_decreaseCurrentIndex",value:function(){var e=this._currentIndex-1;e>=0&&this._setCurrentIndex(e)}},{key:"_setCurrentIndex",value:function(e,t){var n=this._currentIndex;e!=n&&(this._currentIndex=e,this._updateTileStyle(n,e,t))}},{key:"_updateTileStyle",value:function(e,t,n){e>=0&&(0,s["default"])("#story"+this.state.storyIDs[e]).removeClass("current");var r=(0,s["default"])("#story"+this.state.storyIDs[t]);r.addClass("current"),n!==!1&&this.ensureVisible(r)}},{key:"ensureVisible",value:function(e){if(e){var t=e.offset().top-71,n=t+e.outerHeight(!0)-(0,s["default"])(document).scrollTop()>(0,s["default"])(window).height(),r=t<(0,s["default"])(document).scrollTop();(n||r)&&(0,s["default"])(document).scrollTop(t)}}},{key:"render",value:function(){return f["default"].createElement("div",{className:"DailyPage container-fluid"},f["default"].createElement(A["default"],{onTileClick:this._tileClickHandler.bind(this),contents:this.state.storyIDs,loading:this.state.loading}),f["default"].createElement(V["default"],{story:this.state.currentStory}),f["default"].createElement(N["default"],null))}}]),t}(f["default"].Component);t["default"]=C},195:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0}),n(215);var s=n(17),c=r(s),f=n(16),d=r(f),p=n(37),h=r(p),y=function(e){function t(){return l(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),u(t,[{key:"render",value:function(){var e=this.props.story.backgrounds.length>0,t=(0,h["default"])("article-header-picture",{"radius-all":!e,"radius-top":e}),n=(0,h["default"])("article-header-caption",{"radius-bottom":!e}),r=(0,h["default"])({hide:!this.props.story.imageSource}),a=[],l=d["default"].createElement("div",{className:"article-header-title",key:"article-header"},d["default"].createElement("button",{type:"button",className:"close","data-dismiss":"modal"},d["default"].createElement("span",null,"×")),d["default"].createElement("div",{className:t,style:{backgroundImage:"url("+this.props.story.image+")"}},d["default"].createElement("div",{className:n},d["default"].createElement("a",{href:this.props.story.shareURL,target:"_blank"},d["default"].createElement("h3",null,this.props.story.title)),d["default"].createElement("a",{classNames:r,href:"https://www.google.com/search?q="+this.props.story.imageSource,target:"_blank"},d["default"].createElement("span",{className:"glyphicon glyphicon-copyright-mark"}),this.props.story.imageSource))));if(a.push(l),e){var o=c["default"].map(this.props.story.backgrounds,function(e,t){return d["default"].createElement("a",{className:"article-backgrounds-content",href:e.href,target:"_blank",key:"background"+t},d["default"].createElement("h4",null,e.title+"："+e.text))});a.push(d["default"].createElement("div",{className:"article-backgrounds",key:"article-backgrounds"},o,d["default"].createElement("span",{className:"article-backgrounds-arrow glyphicon glyphicon-chevron-right"})))}return d["default"].createElement("div",{className:"ArticleHeader modal-header"},a)}}]),t}(d["default"].Component),m=function(e){function t(){return l(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),u(t,[{key:"render",value:function(){for(var e=this,t=null,n=[],r=this.props.contents.length,l=function(l){var o=[];t=e.props.contents[l],c["default"].isEmpty(t.title)||o.push(d["default"].createElement("h3",{className:"question-title",key:"question-title"+l},t.title));var i=c["default"].map(t.answers,function(e,t){var n=(0,h["default"])("avatar",{hide:c["default"].isEmpty(e.avatar)});return d["default"].createElement("div",{className:"question-answer",key:"question-answer-"+l+"-"+t},d["default"].createElement("div",{className:"question-answer-meta"},d["default"].createElement("img",{className:n,src:e.avatar}),d["default"].createElement("span",{className:"author"},e.name),d["default"].createElement("span",{className:"bio"},e.bio)),d["default"].createElement("div",{className:"question-answer-content",dangerouslySetInnerHTML:{__html:e.content}}))});o.push.apply(o,a(i)),n.push(d["default"].createElement("div",{className:"question",key:"question"+l},o)),r-1>l&&n.push(d["default"].createElement("hr",{className:"question-separator",key:"question-separator"+l}))},o=0;r>o;o++)l(o);return d["default"].createElement("div",{className:"ArticleBody modal-body"},n)}}]),t}(d["default"].Component),v=function(e){function t(){return l(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),u(t,[{key:"render",value:function(){var e=null,t=null;return this.props.story&&(e=d["default"].createElement(y,{story:this.props.story}),t=d["default"].createElement(m,{contents:this.props.story.contents})),d["default"].createElement("div",{id:this.props.id,className:"ArticleView modal fade"},d["default"].createElement("div",{className:"modal-dialog modal-lg"},d["default"].createElement("div",{className:"modal-content"},e,t)))}}]),t}(d["default"].Component);v.defaultProps={id:"ArticleView",story:null},t["default"]=v},196:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0}),n(216);var u=n(17),s=r(u),c=n(16),f=r(c),d=n(37),p=r(d),h=n(23),y=r(h),m=n(197),v=r(m),b=n(59),w=r(b),g=function(e){function t(e){a(this,t);var n=l(this,Object.getPrototypeOf(t).call(this,e));return n.state={story:null},n._request=null,n.shouldComponentUpdate=y["default"].shouldComponentUpdate.bind(n),n}return o(t,e),i(t,[{key:"componentDidMount",value:function(){var e=this;this.props.storyID&&(this._request=w["default"].getStory(this.props.storyID,function(t,n){!t&&n&&e.setState({story:n})}))}},{key:"componentWillUnmount",value:function(){this._request&&(this._request.abort(),this._request=null)}},{key:"handleClick",value:function(e){s["default"].isFunction(this.props.onClick)&&this.props.onClick({story:this.state.story,target:this.refs.self})}},{key:"render",value:function(){var e=null,t=this.state.story;return t&&(e=f["default"].createElement("div",{id:"story"+t.id,className:"flex-tile",ref:"self"},f["default"].createElement("div",{className:"flex-tile-content"},f["default"].createElement("div",{className:"flex-tile-picture",style:{backgroundImage:"url("+t.image+")"},onClick:this.handleClick.bind(this)}),f["default"].createElement("div",{className:"flex-tile-title"},f["default"].createElement("a",{className:"flex-tile-link",href:"javascript:;",onClick:this.handleClick.bind(this)},t.title))),f["default"].createElement("div",{className:"flex-tile-stripe"}),f["default"].createElement("div",{className:"flex-tile-footer"},f["default"].createElement("div",{className:"flex-tile-footer-right-buttons"},f["default"].createElement("a",{href:t.shareURL,target:"_blank"},f["default"].createElement("span",{className:"glyphicon glyphicon-new-window",title:"在新标签页中打开原文"})))))),e}}]),t}(f["default"].Component);g.defaultProps={storyID:null,onClick:null};var E=function(e){function t(e){a(this,t);var n=l(this,Object.getPrototypeOf(t).call(this,e));return n.shouldComponentUpdate=y["default"].shouldComponentUpdate.bind(n),n}return o(t,e),i(t,[{key:"render",value:function(){var e=this,t=s["default"].map(this.props.contents,function(t){return f["default"].createElement(g,{key:t,storyID:t,onClick:e.props.onTileClick})}),n=(0,p["default"])("flex-preloader",{loading:this.props.loading});return f["default"].createElement("div",{className:"FlexView"},f["default"].createElement("div",{className:"flex-content"},t),f["default"].createElement(v["default"],{className:n}))}}]),t}(f["default"].Component);E.defaultProps={contents:[],loading:!1,onTileClick:null},t["default"]=E},197:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0}),n(217);var s=n(17),c=r(s),f=n(16),d=r(f),p=n(37),h=r(p),y=n(23),m=r(y),v=function(e){function t(e){l(this,t);var n=o(this,Object.getPrototypeOf(t).call(this,e));return n.shouldComponentUpdate=m["default"].shouldComponentUpdate.bind(n),n}return i(t,e),u(t,[{key:"render",value:function(){var e=c["default"].trim(this.props.className),t=(0,h["default"])("Preloader",a({},e,!c["default"].isEmpty(e)));return d["default"].createElement("div",{className:t},d["default"].createElement("span",{className:"wave1"}),d["default"].createElement("span",{className:"wave2"}),d["default"].createElement("span",{className:"wave3"}),d["default"].createElement("span",{className:"wave4"}),d["default"].createElement("span",{className:"wave5"}))}}]),t}(d["default"].Component);v.defaultProps={className:null},t["default"]=v},198:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0}),n(218);var u=n(17),s=r(u),c=n(16),f=r(c),d=n(23),p=r(d),h=function(e){function t(e){a(this,t);var n=l(this,Object.getPrototypeOf(t).call(this,e));return n.shouldComponentUpdate=p["default"].shouldComponentUpdate.bind(n),n}return o(t,e),i(t,[{key:"render",value:function(){var e=this,t=s["default"].map(Object.keys(this.props.keys),function(t,n){return f["default"].createElement("tr",{key:n},f["default"].createElement("th",{scope:"row"},n+1),f["default"].createElement("td",null,t),f["default"].createElement("td",null,e.props.keys[t]))}),n=f["default"].createElement("table",{className:"table table-striped"},f["default"].createElement("thead",null,f["default"].createElement("tr",null,f["default"].createElement("th",null,"#"),f["default"].createElement("th",null,"Shortcut"),f["default"].createElement("th",null,"Command"))),f["default"].createElement("tbody",null,t));return f["default"].createElement("div",{className:"ShortcutsBody modal-body"},n)}}]),t}(f["default"].Component);h.defaultProps={keys:{}};var y=function(e){function t(e){a(this,t);var n=l(this,Object.getPrototypeOf(t).call(this,e));return n.shouldComponentUpdate=p["default"].shouldComponentUpdate.bind(n),n}return o(t,e),i(t,[{key:"render",value:function(){return f["default"].createElement("div",{id:this.props.id,className:"ShortcutsView modal fade"},f["default"].createElement("div",{className:"modal-dialog modal-lg"},f["default"].createElement("div",{className:"modal-content"},f["default"].createElement("div",{className:"ShortcutsHeader modal-header"},f["default"].createElement("button",{type:"button",className:"close","data-dismiss":"modal"},f["default"].createElement("span",null,"×")),f["default"].createElement("h3",{className:"title"},"键盘快捷键")),f["default"].createElement(h,{keys:this.props.keys}))))}}]),t}(f["default"].Component);y.defaultProps={id:"ShortcutsView",keys:{esc:"关闭阅读界面","h/?":"显示快捷键帮助",j:"打开或切换至上一篇",k:"打开或切换至下一篇","←":"选中或切换上一篇","→":"选中或切换下一篇","o/enter":"打开当前所选日报",v:"查看知乎讨论"}},t["default"]=y},199:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0});var o=n(17),i=r(o),u=n(1),s=r(u),c="YYYYMMDD",f=function(){function e(){a(this,e)}return l(e,null,[{key:"convertToZhihuDate",value:function(t){var n=null;return i["default"].isDate(t)?n=(0,s["default"])(t):i["default"].isString(t)&&(n=e.convertZhihuDateToMoment(t),n.isValid()||(n=(0,s["default"])(new Date(t)))),n&&n.isValid()?n.format(c):null}},{key:"convertZhihuDateToMoment",value:function(e){return(0,s["default"])(e,c,!0)}},{key:"nextZhihuDay",value:function(t){return e.subZhihuDate(t,-1)}},{key:"prevZhihuDay",value:function(t){return e.subZhihuDate(t)}},{key:"subZhihuDate",value:function(t,n){var r=e.convertZhihuDateToMoment(e.convertToZhihuDate(t));return r.isValid()?r.subtract(n||1,"day").format(c):null}},{key:"isValidZhihuDate",value:function(t){return e.convertZhihuDateToMoment(t).isValid();
}}]),e}();f.MIN_DATE=(0,s["default"])("20130520",c,!0),t["default"]=f},214:function(e,t){},215:214,216:214,217:214,218:214,219:214,220:214});