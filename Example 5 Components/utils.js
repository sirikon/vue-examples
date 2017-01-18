'use strict';

var Utils = {
    filter: function(collection, _searchText) {
        if (_searchText === "") return collection;
        var searchText = _searchText.toLowerCase();

        return collection.filter(function(item){
            var match = false;
            for(var key in item) {
                if (item.hasOwnProperty(key)) {
                    if (item[key].toString().toLowerCase().indexOf(searchText) >= 0) {
                        match = true;
                    }
                }
            }
            return match;
        });
    }
}