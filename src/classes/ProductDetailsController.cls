public class ProductDetailsController {

	@AuraEnabled
	public static Product_c__c getProduct(Integer index) {
		Integer z = index;
		List <Product_c__c> productList = new list <Product_c__c>();
		try {
			productList = [SELECT Name, Description__c, Type__c,Family__c,Price__c FROM Product_c__c];
		}
		catch(Exception e){
			system.debug('e.getLineNumber()------>'+e.getLineNumber()+'msg------>'+e.getMessage());
		}
		return productList.get(z);
	}
}