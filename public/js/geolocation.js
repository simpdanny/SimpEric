

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
    alert( " longitude: " + position.coords.longitude +  // 經度
	   "\n latitude : " + position.coords.latitude );  // 緯度

}

function onFailure( error ) {
    var errors = [ "拒絕地理資訊服務" , "取得不到地理資訊",  "取得資訊超時" ] ;
    alert( errors[ error.code + 1] );
}
