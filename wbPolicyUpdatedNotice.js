try {
  window
    .addEventListener('load', function () {

      var startDate = new Date("12/1/2019");
      //var startDate = new Date("1/1/2020"); 
      var endDate = new Date("2/1/2020");
      var todaysDate = new Date();

      if (todaysDate < startDate || todaysDate > endDate) 
        return;
      
      var wbPolicyUpdatedDivStyle = "border-radius: 7px;background-color: #f2f2f2;border: solid 1px #999;bottom: 7px;" +
          "font-size: 13px;left: 5px;line-height: 18px;padding: 7px;position: fixed;max-wid" +
          "th: 45%;width: auto;z-index: 1002;" var wbPolicyUpdatedDivCloseStyle = "cursor: pointer;float: right;position: absolute;right: 8px;top: 8px;font-weight:" +
          " bold;font-size: 32px;line-height: 13px;margin-left: 5px;" var wbPolicyUpdatedDivBodyStyle = "margin: 0px 20px 0px 0px;"

      var wbPolicyUpdatedDiv = document.createElement("div");
      wbPolicyUpdatedDiv.setAttribute("id", "wb-policy-updated-div");
      wbPolicyUpdatedDiv.setAttribute("style", wbPolicyUpdatedDivStyle);
      wbPolicyUpdatedDiv.innerHTML = "<div id='wb-policy-updated-div-close' style='" + wbPolicyUpdatedDivCloseStyle + "'>&times;</div><div class='wb-policy-updated-div-body' style='" + wbPolicyUpdatedDivBodyStyle + "'> Our Privacy Policy has been updated. Click <a href='https://policies.warnerbr" +
          "os.com/privacy/' target='_blank'>here</a> to get the updates.</div>";
      if (document.body == null) 
        document.documentElement.appendChild(wbPolicyUpdatedDiv);
      else 
        document
          .body
          .appendChild(wbPolicyUpdatedDiv);
      
      document
        .getElementById('wb-policy-updated-div-close')
        .addEventListener('click', function () {
          document
            .getElementById('wb-policy-updated-div')
            .style
            .display = 'none';
          //document.cookie = 'ads.seen_choices=1; path=/; max-age=31536000';
        });
    });
} catch (err) {
  alert('err', err)
}