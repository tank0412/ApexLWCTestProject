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
        var target = event.target;
        var indexOfProduct = target.getAttribute("data-row-index");

                   var action = component.get("c.addProductToCart");

                      action.setCallback(this, function(response) {
                          if (response.getState() == "SUCCESS") {
                              //var value = response.getReturnValue();
                          }
                          else{
                              console.log('error'+response.message);
                          }
                      });
                      action.setParams({  index : indexOfProduct  });
                      $A.enqueueAction(action);
    },
    searchProducts: function (component, event, helper) {
     var keyword = component.get("v.keyWord");
                        var action = component.get("c.searchProduct");

                           action.setCallback(this, function(response) {
                               if (response.getState() == "SUCCESS") {
                                  var value = response.getReturnValue();
                                  component.set("v.productList", value);
                               }
                               else{
                                   console.log('error'+response.message);
                               }
                           });
                           action.setParams({  keyWord : keyword  });
                           $A.enqueueAction(action);
    }
})