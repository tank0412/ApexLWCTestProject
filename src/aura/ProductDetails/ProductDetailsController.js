({
      doInit: function(component, event, helper) {
                   var indexOfProduct = component.get('v.productIndex');
                   var action = component.get("c.getProduct");

                        action.setCallback(this, function(response) {
                            if (response.getState() == "SUCCESS") {
                                var value = response.getReturnValue();
                                component.set("v.Product", value);
                            }
                            else{
                                console.log('error'+response.message);
                            }
                        });
                        action.setParams({  index : indexOfProduct  });
                        $A.enqueueAction(action);
      },
})