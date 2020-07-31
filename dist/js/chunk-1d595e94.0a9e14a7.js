(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d595e94"],{5096:function(t,s,a){"use strict";var e=a("a1c6"),i=a.n(e);i.a},"8bb6":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"production-settings fixed-page"},[a("div",{staticClass:"wrapper"},[a("div",{staticClass:"tabs"},[a("ul",[a("li",{class:{"is-active":t.isActiveTab("taskStatus")}},[a("a",{on:{click:function(s){t.activeTab="taskStatus"}}},[t._v(" "+t._s(t.$t("task_status.title"))+" ")])]),a("li",{class:{"is-active":t.isActiveTab("taskTypes")}},[a("a",{on:{click:function(s){t.activeTab="taskTypes"}}},[t._v(" "+t._s(t.$t("task_types.title"))+" ")])]),a("li",{class:{"is-active":t.isActiveTab("assetTypes")}},[a("a",{on:{click:function(s){t.activeTab="assetTypes"}}},[t._v(" "+t._s(t.$t("asset_types.title"))+" ")])])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isActiveTab("assetTypes"),expression:"isActiveTab('assetTypes')"}],staticClass:"tab"},[a("div",{staticClass:"flexrow mt1 mb1 add-asset-type"},[a("combobox",{staticClass:"flexrow-item",attrs:{options:t.remainingAssetTypes},model:{value:t.assetTypeId,callback:function(s){t.assetTypeId=s},expression:"assetTypeId"}}),a("button",{staticClass:"button flexrow-item",on:{click:t.addAssetType}},[t._v(" "+t._s(t.$t("main.add"))+" ")])],1),t.isEmpty(t.currentProduction.asset_types)?a("div",{staticClass:"box"},[t._v(" "+t._s(t.$t("settings.production.empty_list"))+" ")]):a("table",{staticClass:"datatable list"},[a("tbody",{staticClass:"datatable-body"},t._l(t.productionAssetTypes,(function(s){return a("tr",{key:s.id,staticClass:"datatable-row"},[a("td",{staticClass:"name"},[t._v(t._s(s.name))]),a("td",[a("button",{staticClass:"button",on:{click:function(a){return t.removeAssetType(s.id)}}},[t._v(" "+t._s(t.$t("main.remove"))+" ")])])])})),0)])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isActiveTab("taskTypes"),expression:"isActiveTab('taskTypes')"}],staticClass:"tab"},[a("div",{staticClass:"flexrow mt1 mb1 add-task-type"},[a("combobox-task-type",{staticClass:"flexrow-item selector",attrs:{"task-type-list":t.remainingTaskTypes},model:{value:t.taskTypeId,callback:function(s){t.taskTypeId=s},expression:"taskTypeId"}}),a("button",{staticClass:"button flexrow-item",on:{click:t.addTaskType}},[t._v(" "+t._s(t.$t("main.add"))+" ")])],1),t.isEmpty(t.currentProduction.task_types)?a("div",{staticClass:"box"},[t._v(" "+t._s(t.$t("settings.production.empty_list"))+" ")]):a("table",{staticClass:"datatable list"},[a("tbody",{staticClass:"datatable-body"},t._l(t.productionTaskTypes,(function(s){return a("tr",{key:s.id,staticClass:"datatable-row"},[a("task-type-cell",{attrs:{"task-type":s}}),a("td",[a("button",{staticClass:"button",on:{click:function(a){return t.removeTaskType(s.id)}}},[t._v(" "+t._s(t.$t("main.remove"))+" ")])])],1)})),0)])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isActiveTab("taskStatus"),expression:"isActiveTab('taskStatus')"}],staticClass:"tab"},[a("div",{staticClass:"flexrow mt1 mb1 add-task-status"},[a("combobox-status",{staticClass:"flexrow-item selector",attrs:{"task-status-list":t.remainingTaskStatuses},model:{value:t.taskStatusId,callback:function(s){t.taskStatusId=s},expression:"taskStatusId"}}),a("button",{staticClass:"button flexrow-item",on:{click:t.addTaskStatus}},[t._v(" "+t._s(t.$t("main.add"))+" ")])],1),t.isEmpty(t.currentProduction.task_statuses)?a("div",{staticClass:"box"},[t._v(" "+t._s(t.$t("settings.production.empty_list"))+" ")]):a("table",{staticClass:"datatable list"},[a("tbody",{staticClass:"datatable-body"},t._l(t.productionTaskStatuses,(function(s){return a("tr",{key:s.id,staticClass:"datatable-row"},[a("td",{staticClass:"name"},[a("validation-tag",{attrs:{"is-static":!0,task:{task_status_id:s.id}}})],1),a("td",[a("button",{staticClass:"button",on:{click:function(a){return t.removeTaskStatus(s.id)}}},[t._v(" "+t._s(t.$t("main.remove"))+" ")])])])})),0)])])])])},i=[],n=(a("a4d3"),a("99af"),a("4de4"),a("4160"),a("caad"),a("d81d"),a("b0c0"),a("e439"),a("dbb4"),a("b64b"),a("2532"),a("159b"),a("ade3")),o=a("2f62"),r=a("2229"),c=a("992f"),u=a("56a0"),d=a("e4fd"),l=a("58f5"),p=a("fe13");function T(t,s){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);s&&(e=e.filter((function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable}))),a.push.apply(a,e)}return a}function b(t){for(var s=1;s<arguments.length;s++){var a=null!=arguments[s]?arguments[s]:{};s%2?T(Object(a),!0).forEach((function(s){Object(n["a"])(t,s,a[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):T(Object(a)).forEach((function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(a,s))}))}return t}var y={name:"production-settings",components:{Combobox:c["a"],ComboboxStatus:u["a"],ComboboxTaskType:d["a"],TaskTypeCell:l["a"],ValidationTag:p["a"]},data:function(){return{activeTab:"taskStatus",assetTypeId:"",taskStatusId:"",taskTypeId:""}},mounted:function(){this.remainingAssetTypes.length>0&&(this.assetTypeId=this.remainingAssetTypes[0].value),this.remainingTaskStatuses.length>0&&(this.taskStatusId=this.remainingTaskStatuses[0].value),this.remainingTaskTypes.length>0&&(this.taskTypeId=this.remainingTaskTypes[0].id)},computed:b({},Object(o["c"])(["assetTypeMap","currentProduction","assetTypes","productionAssetTypes","productionTaskTypes","productionTaskStatuses","taskStatus","taskStatusMap","taskTypeMap","taskTypes"]),{remainingAssetTypes:function(){var t=this;return this.assetTypes.filter((function(s){return!t.currentProduction.asset_types.includes(s.id)})).map((function(t){return{label:t.name,value:t.id}}))},remainingTaskStatuses:function(){var t=this;return this.taskStatus.filter((function(s){return!t.currentProduction.task_statuses.includes(s.id)}))},remainingTaskTypes:function(){var t=this;return Object(r["d"])(this.taskTypes.filter((function(s){return!t.currentProduction.task_types.includes(s.id)})))}}),methods:b({},Object(o["b"])(["addAssetTypeToProduction","addTaskStatusToProduction","addTaskTypeToProduction","removeAssetTypeFromProduction","removeTaskStatusFromProduction","removeTaskTypeFromProduction"]),{isEmpty:function(t){return!t||0===t.length},isActiveTab:function(t){return this.activeTab===t},addAssetType:function(){this.addAssetTypeToProduction(this.assetTypeId)},removeAssetType:function(t){this.removeAssetTypeFromProduction(t)},addTaskStatus:function(){this.addTaskStatusToProduction(this.taskStatusId),this.remainingTaskStatuses.length>0&&(this.taskStatusId=this.remainingTaskStatuses[0].value)},removeTaskStatus:function(t){this.removeTaskStatusFromProduction(t)},addTaskType:function(){this.addTaskTypeToProduction(this.taskTypeId),this.remainingTaskTypes.length>0&&(this.taskTypeId=this.remainingTaskTypes[0].id)},removeTaskType:function(t){this.removeTaskTypeFromProduction(t)}}),metaInfo:function(){return{title:"".concat(this.currentProduction.name," | ").concat(this.$t("settings.title")," - Kitsu")}}},k=y,m=(a("5096"),a("2877")),v=Object(m["a"])(k,e,i,!1,null,"9425abe2",null);s["default"]=v.exports},a1c6:function(t,s,a){}}]);
//# sourceMappingURL=chunk-1d595e94.0a9e14a7.js.map