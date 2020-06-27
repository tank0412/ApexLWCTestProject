public class ProductController {
	@AuraEnabled
	public static List <Product_c__c> getProductList() {
		List <Product_c__c> sobjectList = new list <Product_c__c>();
		try {
			sobjectList = [SELECT Name, Description__c FROM Product_c__c];
		}
		catch(Exception e){
			system.debug('e.getLineNumber()------>'+e.getLineNumber()+'msg------>'+e.getMessage());
		}
		return sobjectList;
	}
}