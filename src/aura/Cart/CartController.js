({
  doInit: function(component, event, helper) {
                   var action = component.get("c.getProductsInCart");

                        action.setCallback(this, function(response) {
                            if (response.getState() == "SUCCESS") {
                                var value = response.getReturnValue();
                                 if($A.util.isEmpty(component.get("v.productList"))){
                                        component.set("v.productList", value);
                                  }
                            }
                            else{
                                console.log('error'+response.message);
                            }
                        });
                        $A.enqueueAction(action);
      }
})