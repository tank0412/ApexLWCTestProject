public class DashboardController {

	@AuraEnabled
	public static String getUserID() {
		return UserInfo.getProfileId();
	}

	@AuraEnabled
	public static String getUserName() {
		return UserInfo.getName();
	}
	@AuraEnabled
	public static Boolean checkIsManager() {
		String profileID = UserInfo.getProfileId();
		User user = [SELECT ProfileId, IsManager__c FROM User WHERE ProfileId =: profileID];
		return user.IsManager__c;
	}
}