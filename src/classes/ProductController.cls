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
	public static List <Product_c__c> searchProduct(String keyWord) {
		List <Product_c__c> sobjectList;
		System.debug(keyWord);
		try {
			if(keyWord != '') {
				sobjectList = [SELECT Name, Description__c FROM Product_c__c WHERE Name=:keyWord ORDER BY ID__c];
			}
			else {
				sobjectList = [SELECT Name, Description__c FROM Product_c__c ORDER BY ID__c ];
			}
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