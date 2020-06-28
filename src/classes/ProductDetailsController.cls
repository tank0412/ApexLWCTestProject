public class ProductDetailsController {

	@AuraEnabled
	public static Product_c__c getProduct(Integer index) {
		String indexOfProduct= String.valueOf(index+1); //because index in iteration starts from zero
		Product_c__c product;
		try {
			product = [SELECT Name, Description__c, Type__c,Family__c,Price__c FROM Product_c__c WHERE ID__c=:indexOfProduct];
		}
		catch(Exception e){
			system.debug('e.getLineNumber()------>'+e.getLineNumber()+'msg------>'+e.getMessage());
		}
		return product;
	}
}