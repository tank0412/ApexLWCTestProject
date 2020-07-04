({
  onInit: function (component, event, helper) {
    //getUserID
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

    //getUserName
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

    //isManager
    var action = component.get("c.checkIsManager");
    action.setCallback(this, function(response) {
    var state = response.getState();
    if(state === "SUCCESS") {
    var result = response.getReturnValue();
    component.set('v.isManager', result);
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