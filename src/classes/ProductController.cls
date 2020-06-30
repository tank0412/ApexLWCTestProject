public class ProductController {
	@AuraEnabled
	public static List <Product_c__c> getProductList() {
		List <Product_c__c> sobjectList;
		try {
			sobjectList = [SELECT Name, Description__c FROM Product_c__c ORDER BY ID__c ];
		}
		catch(Exception e){
			system.debug('e.getLineNumber()------>'+e.getLineNumber()+'msg------>'+e.getMessage());
		}
		return sobjectList;
	}
	@AuraEnabled
	public static void addProductToCart(Integer index) {

	}
}