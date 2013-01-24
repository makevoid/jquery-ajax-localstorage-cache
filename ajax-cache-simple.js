// alternative simple basic implementation

// localStorage.clear()

$.ajaxPrefilter(function(options, originalOptions, jqXHR) {

  var key = options.url
  var value = localStorage.getItem( key )
  if (value){
    options.success(value)
    jqXHR.abort()
  } else {
    if ( options.success ) {
      options.realsuccess = options.success
      options.success = function(data) {
        localStorage.setItem(key, data)
        options.realsuccess(data)
      }
    }
  }

})
