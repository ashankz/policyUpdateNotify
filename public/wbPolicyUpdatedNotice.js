try {
  function setWMCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getWMCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  window
    .addEventListener('load', function () {

      var startDate = new Date("3/1/2020");
      var exdays =  31
      var userAckCookieName = "wm_priv_policy_upd_ack"
      
      var endDate = new Date(startDate);
      endDate.setDate(endDate.getDate() + exdays);

      var todaysDate = new Date();

      if (todaysDate < startDate || todaysDate > endDate) 
        return;
      
      var userAckCookieValue  = getWMCookie(userAckCookieName)
      
      if(userAckCookieValue == "1")
        return;
      
      var wbPolicyUpdatedDivStyle = "border-radius: 7px;" +
          "background-color: #f2f2f2;" + 
          "border: solid 1px #999;" +
          "bottom: 7px;" +
          "font-size: 13px;" + 
          "left: 5px;" + 
          "line-height: 18px;" + 
          "padding: 7px;" + 
          "position: fixed;" + 
          "max-width: 45%;" + 
          "width: auto;" + 
          "z-index: 1002;"; 

      var wbPolicyUpdatedDivCloseStyle = "cursor: pointer;" + 
          "float: right;" +
          "position: absolute;" +
          "right: 8px;" +
          "top: 8px;" +
          "font-weight:bold;" +
          "font-size: 28px;" +
          "line-height: 12px;" +
          "margin-left: 5px;" 
      
      var wbPolicyUpdatedDivBodyStyle = "margin: 0px 20px 0px 0px;"

      var wbPolicyUpdatedDiv = document.createElement("div");
      wbPolicyUpdatedDiv.setAttribute("id", "wb-policy-updated-div");
      wbPolicyUpdatedDiv.setAttribute("style", wbPolicyUpdatedDivStyle);
      wbPolicyUpdatedDiv.innerHTML = "<div id='wb-policy-updated-div-close' style='" + wbPolicyUpdatedDivCloseStyle + "'>&times;</div>" + 
          "<div class='wb-policy-updated-div-body' style='" + wbPolicyUpdatedDivBodyStyle + "'>" + 
          "Our Privacy Policy has been updated. Click <a href='https://policies.warnerbros.com/privacy/' target='_blank'>here</a>" + 
          " to get the updates.&nbsp;&nbsp;&nbsp;</div>";

      if (document.body == null) 
        document.documentElement.appendChild(wbPolicyUpdatedDiv);
      else 
        document.body.appendChild(wbPolicyUpdatedDiv);
      
      document
        .getElementById('wb-policy-updated-div-close')
        .addEventListener('click', function () {
          document
            .getElementById('wb-policy-updated-div')
            .style
            .display = 'none';
            setWMCookie(userAckCookieName, "1", exdays)
          //document.cookie = 'ads.seen_choices=1; path=/; max-age=31536000';
        });
    });
} catch (err) {
  //alert('err', err)
}