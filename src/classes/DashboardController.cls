/**
 * @author Roman Bukhtiarov
 * @date 2020
 * @description Class with methods to get info about authorised user
 */
public class DashboardController {

	/**
	 * @description Get ID of authorised user from DB
	 * @return ID of authorised user
	 */
	@AuraEnabled
	public static String getUserID() {
		return UserInfo.getProfileId();
	}

	/**
	 * @description Get username of authorised user from DB
	 * @return username of authorised user
	 */
	@AuraEnabled
	public static String getUserName() {
		return UserInfo.getName();
	}

	/**
	 * @description Get IsManager__c value of authorised user from DB
	 * @return boolean isManager value from DB
	 */
	@AuraEnabled
	public static Boolean checkIsManager() {
		String profileID = UserInfo.getUserId();
		User user = [SELECT ProfileId, IsManager__c FROM User WHERE Id =: profileID];
		return user.IsManager__c;
	}
}