({
    doInit: function(component, event, helper) {
                 var action = component.get("c.getProductList");

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
    },
    getProductDetails: function (component, event, helper) {
    var target = event.target;
    var indexOfProduct = target.getAttribute("data-row-index");
    var products = component.get("v.productList");
    var idOfProduct = products[indexOfProduct].ID__c;
    var evt = $A.get("e.force:navigateToComponent");
    evt.setParams({
        componentDef : "c:ProductDetails",
        componentAttributes: {
            productID : idOfProduct
        }
    });
    evt.fire();
    },
    addProductsToCart: function (component, event, helper) {
    var target = event.target;
    var indexOfProduct = target.getAttribute("data-row-index");
    var products = component.get("v.productList");
    var idOfProduct = products[indexOfProduct].ID__c;
    var action = component.get("c.addProductToCart");

    action.setCallback(this, function(response) {
                               if (response.getState() == "SUCCESS") {
                                  var value = response.getReturnValue();
                               }
                               else{
                                   console.log('error'+response.message);
                               }
                           });
                           action.setParams({  productID : idOfProduct  });
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