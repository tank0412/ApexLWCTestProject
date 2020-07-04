({
  onInit: function (component, event, helper) {
    var action = component.get("c.getUserID");
    action.setCallback(this, function(response) {
    var state = response.getState();
    if(state === "SUCCESS") {
    var result = response.getReturnValue();
    result = ' Account number: ' + result;
    component.set('v.userID', result);
    }
    else {
    component.set('v.userID', 'fail');
    }
    });
      $A.enqueueAction(action);
  },

  onInit2: function (component, event, helper) {
    var action = component.get("c.getUserName");
    action.setCallback(this, function(response) {
    var state = response.getState();
    if(state === "SUCCESS") {
    var result = response.getReturnValue();
    result = ' Account name: ' + result;
    component.set('v.userName', result);
    }
    else {
    component.set('v.userName', 'fail');
    }
    });
      $A.enqueueAction(action);
  },

  createProduct: function (component, event, helper) {
    var evt = $A.get("e.force:navigateToComponent");
    evt.setParams({
        componentDef : "c:Createproduct"
    });
    evt.fire();
  },

  openCart: function (component, event, helper) {
    var evt = $A.get("e.force:navigateToComponent");
    evt.setParams({
        componentDef : "c:Cart"
    });
    evt.fire();
  },
  orderManagement: function (component, event, helper) {
      var evt = $A.get("e.force:navigateToComponent");
      evt.setParams({
          componentDef : "c:OrderManagement"
      });
      evt.fire();
  }
})