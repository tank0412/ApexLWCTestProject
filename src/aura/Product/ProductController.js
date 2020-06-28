({
    doInit: function(component, event, helper) {
                 var action = component.get("c.getProductList");

                      action.setCallback(this, function(response) {
                          if (response.getState() == "SUCCESS") {
                              var value = response.getReturnValue();
                              component.set("v.productList", value);
                          }
                          else{
                              console.log('error'+response.message);
                          }
                      });
                      $A.enqueueAction(action);
    },
    getProductDetails: function (component, event, helper) {
    var target = event.target;
    var indexOfProduct = target.getAttribute("data-row-index");
    var evt = $A.get("e.force:navigateToComponent");
    evt.setParams({
        componentDef : "c:ProductDetails",
        componentAttributes: {
            productIndex : indexOfProduct
        }
    });
    evt.fire();
    },
    addProductToCart: function (component, event, helper) {

    }
})