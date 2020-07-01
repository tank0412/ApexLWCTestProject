public class FilterProductController {
	@AuraEnabled
	public static List <Product_c__c> filterProduct(String filterWord, Integer filterType) {
		List <Product_c__c> sobjectList;
		System.debug(filterWord);
		System.debug(filterType);
		try {
			if(filterType == 1) { //if needs to filter by type
				sobjectList = [SELECT ID__c,Name, Description__c FROM Product_c__c WHERE Type__c=:filterWord ORDER BY ID__c];
			}
			else {
				if(filterType == 2) { //if needs to filter by family
					sobjectList = [SELECT ID__c, Name, Description__c FROM Product_c__c WHERE Family__c=:filterWord ORDER BY ID__c];
				}
			}
		}
		catch(Exception e){
			system.debug('e.getLineNumber()------>'+e.getLineNumber()+'msg------>'+e.getMessage());
		}
		return sobjectList;
	}
}