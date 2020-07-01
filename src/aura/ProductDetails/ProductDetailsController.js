({
      doInit: function(component, event, helper) {
                   var IDOfProduct = component.get('v.productID');
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
                        action.setParams({  productID : IDOfProduct  });
                        $A.enqueueAction(action);
      },
})