

function isSupportGeo() {
    return ( navigator.geolocation != null ) ;
}

function getCurrentPosition() {
    if ( isSupportGeo() )
        navigator.geolocation.getCurrentPosition( onSuccess, onFailure ) ;
    else
	onNotSupported() ;
}

function onNotSupported() {
    alert(" Geolocation unsupported. "); 
}

function onSuccess( position ) {
    alert( " longitude: " + position.coords.longitude +  // �g��
	   "\n latitude : " + position.coords.latitude );  // �n��

}

function onFailure( error ) {
    var errors = [ "�ڵ��a�z��T�A��" , "���o����a�z��T",  "���o��T�W��" ] ;
    alert( errors[ error.code + 1] );
}
