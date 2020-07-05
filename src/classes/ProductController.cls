public class ProductController {
	@AuraEnabled
	public static List <Product_c__c> getProductList() {
		List <Product_c__c> sobjectList;
		try {
			sobjectList = [SELECT ID__c, Name, Description__c FROM Product_c__c ORDER BY ID__c ];
		}
		catch(Exception e){
			system.debug('e.getLineNumber()------>'+e.getLineNumber()+'msg------>'+e.getMessage());
		}
		return sobjectList;
	}
	@AuraEnabled
	public static List <Product_c__c> searchProduct(String keyWord) {
		List <Product_c__c> sobjectList;
		String keywordLike= '%'+keyWord+'%';
		try {
			if(keyWord != '') {
				sobjectList = [SELECT Name, Description__c FROM Product_c__c WHERE Name LIKE :keywordLike ORDER BY ID__c];
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
	public static Boolean addProductToCart(Integer productID) {
		List<Integer> productIDList;
		try {
			if (Cache.Session.contains('productIDList')) {
				productIDList = (List<Integer>)Cache.Session.get('productIDList');
			} else {
				productIDList = new List<Integer>();
			}
			productIDList.add(productID);
			Cache.Session.put('productIDList', productIDList);
			return true;
		}
		catch(Exception e){
			system.debug('e.getLineNumber()------>'+e.getLineNumber()+'msg------>'+e.getMessage());
			return false;
		}
	}
}