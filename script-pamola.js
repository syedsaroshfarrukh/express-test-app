function load_script_to_remove_arrow(){
?>
<script>
document.addEventListener( 'wpcf7mailsent', function( event ) {
    if ( '1635' == event.detail.contactFormId ) {

      var lpLocation =  document.getElementById("lp-location").value;
      var name =  document.getElementById("location-name").value;

      if (lpLocation == "Frederick" && name == "Syed Sarosh Farrukh"){
        location = 'http://facebook.com/';
      } else if (lpLocation == "Annapolis") {
        location = 'http://google.com/';
      }

    }
}, false )

</script>
<?php
}
add_action( 'wp_footer', 'load_script_to_remove_arrow' );
