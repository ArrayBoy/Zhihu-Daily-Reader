import "./res/index.less";

import React from "react";
import logo from "../../common/res/img/zhihu_daily_logo_blue.png";

/**
 * 头部。
 */
export default () =>
{
    return (
        <div className="navbar-header">
            <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#NavbarContent"
            >
                <span className="sr-only">导航</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="/">
                <img alt="知乎日报" src={logo} />
            </a>
        </div>
    );
};
