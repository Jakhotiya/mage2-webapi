import {QueryBuilder} from './../src';

test('QueryBuilder builds queries from filters and filter groups',function(){

    const filterGroup = [

        [
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
        ],

        [
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
        ]


    ]

    const result = 'searchCriteria[filter_groups][0][filters][0][field]=from&' +
        'searchCriteria[filter_groups][0][filters][0][value]=today&' +
        'searchCriteria[filter_groups][0][filters][0][condition_type]=eq&' +
        'searchCriteria[filter_groups][0][filters][1][field]=to&' +
        'searchCriteria[filter_groups][0][filters][1][value]=tomorrow&' +
        'searchCriteria[filter_groups][0][filters][1][condition_type]=eq&' +
        'searchCriteria[filter_groups][1][filters][0][field]=from&' +
        'searchCriteria[filter_groups][1][filters][0][value]=today&s' +
        'earchCriteria[filter_groups][1][filters][0][condition_type]=eq&' +
        'searchCriteria[filter_groups][1][filters][1][field]=to&' +
        'searchCriteria[filter_groups][1][filters][1][value]=tomorrow&' +
        'searchCriteria[filter_groups][1][filters][1][condition_type]=eq';

    let builder = new QueryBuilder();
    builder.addFilterGroup(filterGroup[0]);
    builder.addFilterGroup(filterGroup[1]);
    expect(builder.getQuery()).toEqual(result);
})

