public class DashboardController {

	@AuraEnabled
	public static String getUserID() {
		return UserInfo.getProfileId();
	}

	@AuraEnabled
	public static String getUserName() {
		return UserInfo.getName();
	}
}