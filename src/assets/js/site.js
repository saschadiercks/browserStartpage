// ###### import ######
import setJsAvailability from "./components/setJsAvailability.js";
import notificationKeydown from "./components/notificationKeydown.js";
import handleTabs from "./components/handleTabsLocalStorage.js";

import stickyElement from "./functions/stickyElement.js";
import fixScrollPos from "./functions/fixScrollPos.js";
import handleTriggers from "./functions/handleTriggers.js";

// ####################
// ##### settings #####
// ####################

// ###### script ######
// is the DOM ready for manipulation?
document.addEventListener("DOMContentLoaded", function() {
  // --- Toggle JS Availability
  setJsAvailability("body");

  // handle tabs
  handleTabs(".js-tab-trigger", ".tabbed-content");

  // handle triggers
  handleTriggers(".js-flyout-trigger", fixScrollPos);
  handleTriggers(".js-collapse-trigger", false);
  handleTriggers(".js-modal-trigger", fixScrollPos);

  // -- make elements sticky
  stickyElement("#application-footer", "#content", "padding-bottom");

  // --- Show/hide notification
  notificationKeydown(".notification");

  // -- Service worker
  navigator.serviceWorker.register("service-worker.js", {
    scope: "/"
  });
});
