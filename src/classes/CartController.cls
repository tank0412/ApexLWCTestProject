public class CartController {
	@AuraEnabled
	public static List <Product_c__c> getProductsInCart() {
		List <Product_c__c> sobjectList;
		try {
			if (Cache.Session.contains('productIDList')) {
				List<Integer> productIDList = (List<Integer>)Cache.Session.get('productIDList');
				sobjectList = new List<Product_c__c>();
				for(Integer id: productIDList) {
					String idS = String.valueOf(id);
					Product_c__c product = [SELECT Name, Description__c, Type__c,Family__c,Price__c  FROM Product_c__c WHERE ID__c=:idS ];
					sobjectList.add(product);
				}
			}
			else {
				return null;
			}

		}
		catch(Exception e){
			system.debug('e.getLineNumber()------>'+e.getLineNumber()+'msg------>'+e.getMessage());
		}
		return sobjectList;
	}
}