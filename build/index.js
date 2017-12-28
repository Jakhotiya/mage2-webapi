'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
function buildGroup(group, groupIndex) {

    var result = group.reduce(function (acc, obj, index) {
        var template = 'searchCriteria[filter_groups][' + groupIndex + '][filters][' + index + ']';
        var field = '[field]=' + obj.field + '&';
        var value = '[value]=' + obj.value + '&';
        var condition = '[condition_type]=' + obj.condition + '&';

        return acc + ['', field, value, condition].join(template);
    }, '');

    return result.slice(0, result.length - 1);
}

var QueryBuilder = function QueryBuilder() {
    this.filterGroups = [];
};

QueryBuilder.prototype.addFilterGroup = function (group) {
    var groupIndex = this.filterGroups.length;
    this.filterGroups.push(buildGroup(group, groupIndex));
};

/**
 * Builds the final query string in format
 * searchCriteria[filter_groups][<index>][filters][<index>][field]=<field_name>&
 * searchCriteria[filter_groups][<index>][filters][<index>][value]=<search_value>&
 * searchCriteria[filter_groups][<index>][filters][<index>][condition_type]=<operator>
 *
 * @returns {string}
 */
QueryBuilder.prototype.getQuery = function () {
    return this.filterGroups.join('&');
};

exports.QueryBuilder = QueryBuilder;