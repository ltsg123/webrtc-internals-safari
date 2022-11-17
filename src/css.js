const style = document.createElement("style");
style.innerHTML = `
/* Copyright (c) 2013 The Chromium Authors. All rights reserved.
* Use of this source code is governed by a BSD-style license that can be
* found in the LICENSE file. */

.webrtc-internals-content-root{
  position: absolute;
  background: white;
  top: 0;
  max-width: 100vw;
  left:0;
}

.peer-connection-dump-root {
  font-size: 0.8em;
  padding-bottom: 3px;
}

.update-log-container {
  float: left;
  width: 50em;
  overflow: auto;
}

.update-log-failure {
  background-color: #be2026;
}

.update-log-legacy-api-usage {
  background-color: #fed14b;
}

.ssrc-info-block {
  color: #999;
  font-size: 0.8em;
}

.stats-graph-container {
  clear: both;
  margin: 0.5em 0 0.5em 0;
}

.stats-graph-sub-container {
  float: left;
  margin: 0.5em;
}

.stats-graph-sub-container > div {
  float: left;
}

.stats-graph-sub-container > div:first-child {
  float: none;
}

.stats-table-container {
  float: left;
  padding: 0 0 0 0;
  width: 50em;
  overflow: auto;
}

.stats-table-container > div:first-child {
  font-size: 0.8em;
  font-weight: bold;
  text-align: center;
  padding: 0 0 1em 0;
}

.stats-table-active-connection {
  font-weight: bold;
}

body {
  font-family: "Lucida Grande", sans-serif;
}

table {
  border: none;
  margin: 0 1em 1em 0;
}

td {
  border: none;
  font-size: 0.8em;
  padding: 0 1em 0.5em 0;
  min-width: 10em;
  word-break: break-all;
}

table > tr {
  vertical-align: top;
}

th {
  border: none;
  font-size: 0.8em;
  padding: 0 0 0.5em 0;
}

.tab-head {
  background-color: rgb(220, 220, 220);
  margin: 10px 2px 0 2px;
  text-decoration: underline;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  width: 20em;
  height: 3em;
}

.active-tab-head {
  background-color: turquoise;
  font-weight: bold;
}

.tab-body {
  border: 1px solid turquoise;
  border-top-width: 3px;
  padding: 0 10px 500px 10px;
  display: none;
}

.active-tab-body {
  display: block;
}

.user-media-request-div-class {
  background-color: lightgray;
  margin: 10px 0 10px 0;
}

.user-media-request-div-class > div {
  margin: 5px 0 5px 0;
}

.audio-diagnostic-dumps-info {
  max-width: 60em;
}

.webrtc-internals-switch {
  left: 0px; 
  bottom: 20px; 
  display: block;
  position: fixed;
  cursor: pointer;
  color: #FFF;
  background-color:  #07c160;
  line-height: 1;
  font-size: 0.8em;
  padding: 0.61538462em 1.23076923em;
  z-index: 10000;
  border-radius: 0.30769231em;
  box-shadow: 0 0 0.61538462em rgb(0 0 0 / 40%);
`;
document.head.appendChild(style);
