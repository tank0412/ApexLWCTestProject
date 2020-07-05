/**
 * @author Roman Bukhtiarov
 * @date 2020
 * @description Class with method to filter products list, which is returned from DB
 */
public class FilterProductController {
	/**
	 * @description Get filtered list of products from DB
	 * @param filterWord the world which will be used to filter result
	 * @param filterType the value which can be 1 or 2. It is used to determine will we sort by type or family
	 * @return filtered list of Product_c__c objects
	 */
	@AuraEnabled
	public static List <Product_c__c> filterProduct(String filterWord, Integer filterType) {
		List <Product_c__c> sobjectList;
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