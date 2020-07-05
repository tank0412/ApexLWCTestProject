/**
 * @author Roman Bukhtiarov
 * @date 2020
 * @description Class with method to get all orders of authorised user from DB
 */
public class OrderManagementController {
	/**
	* @description Get all orders of authorised user from DB
	* @return list of Order__c objects
	*/
	@AuraEnabled
	public static List <Order__c> getOrdersList() {
		String accountID = UserInfo.getProfileId();
		List <Order__c> sobjectList;
		try {
			sobjectList = [SELECT ID__c, TotalPrice__c, TotalProductCount__c FROM Order__c WHERE AccountId__c=:accountID ORDER BY ID__c ];
		}
		catch(Exception e){
			system.debug('e.getLineNumber()------>'+e.getLineNumber()+'msg------>'+e.getMessage());
		}
		return sobjectList;
	}
}