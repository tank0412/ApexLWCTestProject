trigger OrderItemTrigger on OrderItem__c(after insert) {
	try {
		for (OrderItem__c item : Trigger.new) {
			String orderID = String.valueOf(item.OrderId__c);
			Order__c order = [SELECT Id, ID__c, AccountId__c, TotalPrice__c, TotalProductCount__c FROM Order__c WHERE ID__c =:orderID];
			order.TotalPrice__c += item.Price__c;
			order.TotalProductCount__c += item.Quantity__c;
			update order;
		}
	}
	catch(DmlException e) {
		System.debug('An unexpected error has occurred: ' + e.getMessage());
	}

}