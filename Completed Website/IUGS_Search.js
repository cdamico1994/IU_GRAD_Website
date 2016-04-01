$(document).ready(function() {
    
    IUSearch && IUSearch.init({
		CX: {
    		site: '014109358301568672738:iegtkeieqkw', // Replace this with site CX value
    		all: '016278320858612601979:ddl1l9og1w8' // IU
		},
		attributes: {
			resultsUrl: 'IUGS_Website.html'
		},
		wrapClass: 'row pad',
        searchBoxIDs: ['search', 'off-canvas-search']
	});    
    //if (link = document.getElementById('privacy-policy-link')) link.href = 'https://assets.iu.edu/privacy/index.html';
    
    IUComm && IUComm.init( {debug:true} );
});