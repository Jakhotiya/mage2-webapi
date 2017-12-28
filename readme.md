##Magento2 Webapi utils ##

**Install**

```shell
$ npm install mage2-webapi --save
```

#### Use QueryBuilder objects to build queries used in webapi search ####

Query builder lets you convert a query object to magento2 required 
search query format which looks something like 
```
searchCriteria[filter_groups][<index>][filters][<index>][field]=<field_name>
searchCriteria[filter_groups][<index>][filters][<index>][value]=<search_value>
searchCriteria[filter_groups][<index>][filters][<index>][condition_type]=<operator>
```

You can read more about using REST api on [magento2 devdocs](http://devdocs.magento.com/)

Keep in mind following things mentioned on devdocs.

* To perform a logical OR, specify multiple filters within a filter_groups
* To perform a logical AND, specify multiple filter_groups
* You cannot perform a logical OR across different filter_groups, such as (A AND B) OR (X AND Y). 
  ORs can be performed only within the context of a single filter_groups 

```javascript
const {QueryBuilder} = require('mage2-webapi');
//ES6 modules
import {QueryBuilder} from 'mage2-webapi';
```

How to use QueryBuilder Constructor

```javascript
 let builder = new QueryBuilder();
    builder.addFilterGroup([
        {
            'field':'from',
            'value':'today',
            'condition':'eq'
        },
        {
            'field':'to',
            'value':'tomorrow',
            'condition':'eq'
        }
    ]);
    
     builder.addFilterGroup([
            {
                'field':'revenue',
                'value':'100',
                'condition':'lt'
            },
            {
                'field':'revenue',
                'value':'400',
                'condition':'gt'
            }
        ]);
    
console.log(builder.getQuery());

/** Console output
*          'searchCriteria[filter_groups][0][filters][0][field]=from&' +
           'searchCriteria[filter_groups][0][filters][0][value]=today&' +
           'searchCriteria[filter_groups][0][filters][0][condition_type]=eq&' +
           'searchCriteria[filter_groups][0][filters][1][field]=to&' +
           'searchCriteria[filter_groups][0][filters][1][value]=tomorrow&' +
           'searchCriteria[filter_groups][0][filters][1][condition_type]=eq&' +
           'searchCriteria[filter_groups][1][filters][0][field]=revenue&' +
           'searchCriteria[filter_groups][1][filters][0][value]=100&s' +
           'earchCriteria[filter_groups][1][filters][0][condition_type]=lt&' +
           'searchCriteria[filter_groups][1][filters][1][field]=revenue&' +
           'searchCriteria[filter_groups][1][filters][1][value]=400&' +
           'searchCriteria[filter_groups][1][filters][1][condition_type]=gt';
**/           

```
