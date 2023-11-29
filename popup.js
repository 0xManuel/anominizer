document.addEventListener('DOMContentLoaded', function() {
  var cookiesSwitch = document.getElementById('cookies-switch');
  var userAgentSwitch = document.getElementById('user-agent-switch');
  
  // Load and apply the saved state
  chrome.storage.sync.get(['cookiesEnabled', 'userAgentEnabled'], function(result) {
      if (result.cookiesEnabled !== undefined) {
          cookiesSwitch.checked = result.cookiesEnabled;
      }
      if (result.userAgentEnabled !== undefined) {
          userAgentSwitch.checked = result.userAgentEnabled;
      }
  });

  // Event listener for Cookies switch
  cookiesSwitch.addEventListener('change', function() {
      chrome.storage.sync.set({'cookiesEnabled': this.checked});
      console.log(this.checked)
      chrome.runtime.sendMessage({type: "cookiesSwitch", state: this.checked});
  });

  // Event listener for User Agent switch
  userAgentSwitch.addEventListener('change', function() {
      chrome.storage.sync.set({'userAgentEnabled': this.checked});
      console.log(this.checked)
      chrome.runtime.sendMessage({type: "userAgentSwitch", state: this.checked});
  });
});