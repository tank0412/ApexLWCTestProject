({
      doInit: function(component, event, helper) {
                   var action = component.get("c.getOrdersList");

                        action.setCallback(this, function(response) {
                            if (response.getState() == "SUCCESS") {
                                var value = response.getReturnValue();
                                 if($A.util.isEmpty(component.get("v.ordersList"))){
                                        component.set("v.ordersList", value);
                                  }
                            }
                            else{
                                console.log('error'+response.message);
                            }
                        });
                        $A.enqueueAction(action);
      }
})