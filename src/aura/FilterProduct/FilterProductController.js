({
      filterDrinkInProduct: function (component, event, helper) {
                          var action = component.get("c.filterProduct");

                             action.setCallback(this, function(response) {
                                 if (response.getState() == "SUCCESS") {
                                    var value = response.getReturnValue();

                                    var evt = $A.get("e.force:navigateToComponent");
                                        evt.setParams({
                                            componentDef : "c:Product",
                                            componentAttributes: {
                                                productList : value
                                            }
                                        });
                                        evt.fire();
                                 }
                                 else{
                                     console.log('error'+response.message);
                                 }
                             });
                             action.setParams({  filterWord : 'Drink', filterType : '1'  });
                             $A.enqueueAction(action);
      },
      filterFoodInProduct: function (component, event, helper) {
                          var action = component.get("c.filterProduct");

                             action.setCallback(this, function(response) {
                                 if (response.getState() == "SUCCESS") {
                                    var value = response.getReturnValue();

                                    var evt = $A.get("e.force:navigateToComponent");
                                        evt.setParams({
                                            componentDef : "c:Product",
                                            componentAttributes: {
                                                productList : value
                                            }
                                        });
                                        evt.fire();
                                 }
                                 else{
                                     console.log('error'+response.message);
                                 }
                             });
                             action.setParams({  filterWord : 'Food', filterType : '1'  });
                             $A.enqueueAction(action);
      },
      filterBookInProduct: function (component, event, helper) {
                          var action = component.get("c.filterProduct");

                             action.setCallback(this, function(response) {
                                 if (response.getState() == "SUCCESS") {
                                    var value = response.getReturnValue();

                                    var evt = $A.get("e.force:navigateToComponent");
                                        evt.setParams({
                                            componentDef : "c:Product",
                                            componentAttributes: {
                                                productList : value
                                            }
                                        });
                                        evt.fire();
                                 }
                                 else{
                                     console.log('error'+response.message);
                                 }
                             });
                             action.setParams({  filterWord : 'Book', filterType : '1'  });
                             $A.enqueueAction(action);
      },
      filterCoffeeInProduct: function (component, event, helper) {
                          var action = component.get("c.filterProduct");

                             action.setCallback(this, function(response) {
                                 if (response.getState() == "SUCCESS") {
                                    var value = response.getReturnValue();

                                    var evt = $A.get("e.force:navigateToComponent");
                                        evt.setParams({
                                            componentDef : "c:Product",
                                            componentAttributes: {
                                                productList : value
                                            }
                                        });
                                        evt.fire();
                                 }
                                 else{
                                     console.log('error'+response.message);
                                 }
                             });
                             action.setParams({  filterWord : 'Coffee', filterType : '2'  });
                             $A.enqueueAction(action);
      },
      filterSemiFinishedInProduct: function (component, event, helper) {
                          var action = component.get("c.filterProduct");

                             action.setCallback(this, function(response) {
                                 if (response.getState() == "SUCCESS") {
                                    var value = response.getReturnValue();

                                    var evt = $A.get("e.force:navigateToComponent");
                                        evt.setParams({
                                            componentDef : "c:Product",
                                            componentAttributes: {
                                                productList : value
                                            }
                                        });
                                        evt.fire();
                                 }
                                 else{
                                     console.log('error'+response.message);
                                 }
                             });
                             action.setParams({  filterWord : 'Semi-finished', filterType : '2'  });
                             $A.enqueueAction(action);
      },
            filterHarryPotterInProduct: function (component, event, helper) {
                                var action = component.get("c.filterProduct");

                                   action.setCallback(this, function(response) {
                                       if (response.getState() == "SUCCESS") {
                                          var value = response.getReturnValue();

                                          var evt = $A.get("e.force:navigateToComponent");
                                              evt.setParams({
                                                  componentDef : "c:Product",
                                                  componentAttributes: {
                                                      productList : value
                                                  }
                                              });
                                              evt.fire();
                                       }
                                       else{
                                           console.log('error'+response.message);
                                       }
                                   });
                                   action.setParams({  filterWord : 'Harry Potter', filterType : '2'  });
                                   $A.enqueueAction(action);
            }
})